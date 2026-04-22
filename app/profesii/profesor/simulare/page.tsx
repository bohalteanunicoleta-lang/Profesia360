"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { SimulationState, Task } from "@/lib/simulation/types";
import { TASKS, SCHEDULED_NOTIFICATIONS, LEVELS, RANDOM_EVENTS, EXPERT_CHOICES } from "@/lib/simulation/data";
import { getLevelForXP, computeBadges, computeCompatibilityProfile, getCareerMatches } from "@/lib/simulation/engine";

const SIMULATION_SPEED = 2;

const SKILL_LABELS: Record<string, string> = {
  disciplina: "Disciplină", empatie: "Empatie", organizare: "Organizare",
  comunicare: "Comunicare", rezilienta: "Reziliență",
};
const SKILL_ICONS: Record<string, string> = {
  disciplina: "⚖️", empatie: "💙", organizare: "📋",
  comunicare: "💬", rezilienta: "🛡️",
};
const TASK_TYPE_COLORS: Record<string, string> = {
  lesson: "#2563eb", conflict: "#dc2626", admin: "#7c3aed",
  parent: "#d97706", evaluation: "#059669", emergency: "#dc2626",
};
const URGENCY_LABELS: Record<string, string> = {
  low: "Normal", medium: "Mediu", high: "Urgent", critical: "CRITIC",
};

type Phase = "intro" | "running" | "task" | "consequence" | "complete";
interface NotifItem { id: string; type: string; message: string; }

export default function SimularePage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [state, setState] = useState<SimulationState | null>(null);
  const [currentHour, setCurrentHour] = useState(8);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [taskTimeLeft, setTaskTimeLeft] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [consequence, setConsequence] = useState<{ immediate: string; longterm: string; xp: number } | null>(null);
  const [notifications, setNotifications] = useState<NotifItem[]>([]);
  const [randomEvent, setRandomEvent] = useState<typeof RANDOM_EVENTS[0] | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [levelUpAnim, setLevelUpAnim] = useState<string | null>(null);
  const [replayStep, setReplayStep] = useState<number>(-1);
  const [replayRunning, setReplayRunning] = useState(false);
  const [hardMode, setHardMode] = useState(false);

  const stateRef = useRef<SimulationState | null>(null);
  const hourRef = useRef(7);
  const minuteRef = useRef(58);
  const clockRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const taskTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endHandledRef = useRef(false);
  const shownNotifIds = useRef(new Set<string>());

  useEffect(() => { stateRef.current = state; }, [state]);

  const addNotification = useCallback((n: NotifItem) => {
    setNotifications((prev) => prev.some((x) => x.id === n.id) ? prev : [...prev, n]);
    setTimeout(() => setNotifications((prev) => prev.filter((x) => x.id !== n.id)), 6000);
  }, []);

  const handleMissedTask = useCallback((task: Task) => {
    setState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentXP: Math.max(0, prev.currentXP - task.timeoutPenalty),
        missedTasks: [...prev.missedTasks, task.id],
        skills: { ...prev.skills, organizare: Math.max(0, prev.skills.organizare - 8) },
      };
    });
    addNotification({ id: `missed-${task.id}`, type: "urgent", message: `⏰ Ai ratat „${task.title}"! -${task.timeoutPenalty} XP` });
    setActiveTask(null);
    setPhase("running");
  }, [addNotification]);

  const triggerTask = useCallback((task: Task) => {
    if (clockRef.current) { clearInterval(clockRef.current); clockRef.current = null; }
    setActiveTask(task);
    setTaskTimeLeft(hardMode ? Math.floor(task.timeoutSeconds / 2) : task.timeoutSeconds);
    setSelectedChoice(null);
    setPhase("task");
    taskTimerRef.current = setInterval(() => {
      setTaskTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(taskTimerRef.current!);
          taskTimerRef.current = null;
          handleMissedTask(task);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [handleMissedTask]);

  useEffect(() => {
    if (phase !== "running") return;
    if (endHandledRef.current) return;

    clockRef.current = setInterval(() => {
      const total = hourRef.current * 60 + minuteRef.current + SIMULATION_SPEED;
      const h = Math.floor(total / 60);
      const m = total % 60;
      hourRef.current = h;
      minuteRef.current = m;
      setCurrentHour(h);
      setCurrentMinute(m);

      if (h >= 18) {
        clearInterval(clockRef.current!);
        clockRef.current = null;
        if (!endHandledRef.current) {
          endHandledRef.current = true;
          setPhase("complete");
        }
        return;
      }

      const s = stateRef.current;
      if (!s) return;

      const task = TASKS.find(
        (t) => t.hour === h && t.minute === m &&
          !s.completedTasks.includes(t.id) && !s.missedTasks.includes(t.id)
      );
      if (task) { triggerTask(task); return; }

      SCHEDULED_NOTIFICATIONS.forEach((notif) => {
        if (shownNotifIds.current.has(notif.id) || !notif.triggerBeforeTaskId) return;
        const tTask = TASKS.find((t) => t.id === notif.triggerBeforeTaskId);
        if (!tTask) return;
        const diff = (tTask.hour * 60 + tTask.minute) - (h * 60 + m);
        if (Math.abs(diff - (notif.minutesBefore ?? 0)) < SIMULATION_SPEED) {
          shownNotifIds.current.add(notif.id);
          addNotification({ id: notif.id, type: notif.type, message: notif.message });
        }
      });
    }, 1000);

    return () => { if (clockRef.current) { clearInterval(clockRef.current); clockRef.current = null; } };
  }, [phase, triggerTask, addNotification]);

  useEffect(() => {
    if (phase !== "complete") return;
    const s = stateRef.current;
    if (!s) return;
    setLoadingFeedback(true);
    fetch("/api/simulation/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state: s }),
    })
      .then((r) => r.json())
      .then((d) => { setFeedback(d.feedback); setLoadingFeedback(false); })
      .catch(() => { setFeedback("Nu am putut genera feedback. Încearcă din nou."); setLoadingFeedback(false); });
  }, [phase]);

  const startSimulation = () => {
    const init: SimulationState = {
      userId: "demo", currentXP: 0, level: 1,
      skills: { disciplina: 50, empatie: 50, organizare: 50, comunicare: 50, rezilienta: 50 },
      streak: 0, completedTasks: [], missedTasks: [], choicesMade: {},
      activeNotifications: [], simulationStarted: true, simulationComplete: false,
      startedAt: new Date().toISOString(),
    };
    stateRef.current = init;
    hourRef.current = 7;
    minuteRef.current = 58;
    endHandledRef.current = false;
    shownNotifIds.current.clear();
    setState(init);
    setHardMode(false);
    setCurrentHour(8);
    setCurrentMinute(0);
    setFeedback(null);
    setConsequence(null);
    setActiveTask(null);
    setRandomEvent(null);
    setNotifications([]);
    setPhase("running");
  };

  const makeChoice = async (choiceId: string) => {
    if (!activeTask || !stateRef.current) return;
    if (taskTimerRef.current) { clearInterval(taskTimerRef.current); taskTimerRef.current = null; }
    setSelectedChoice(choiceId);
    const choice = activeTask.choices.find((c) => c.id === choiceId)!;
    try {
      const res = await fetch("/api/simulation/choice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: stateRef.current, taskId: activeTask.id, choiceId, timeRemaining: taskTimeLeft }),
      });
      const data = await res.json();
      setState(data.updatedState);
      if (data.leveledUp) {
        const def = getLevelForXP(data.updatedState.currentXP);
        setLevelUpAnim(def.title);
        setTimeout(() => setLevelUpAnim(null), 4000);
      }
      if (data.randomEvent) setRandomEvent(data.randomEvent);
      setConsequence({ immediate: choice.immediateConsequence, longterm: choice.longTermConsequence, xp: data.xpGained });
      setPhase("consequence");
    } catch (err) { console.error(err); }
  };

  const continueSimulation = () => {
    setConsequence(null);
    setActiveTask(null);
    setRandomEvent(null);
    setPhase("running");
  };

  const fmt = (h: number, m: number) => `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  const levelDef = state ? getLevelForXP(state.currentXP) : LEVELS[0];
  const xpProgress = state ? Math.min(100, Math.round(((state.currentXP - levelDef.minXP) / (levelDef.maxXP + 1 - levelDef.minXP)) * 100)) : 0;

  // ── INTRO ──────────────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: 20 }}>
        <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🏫</div>
          <div style={{ display: "inline-block", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2563eb", background: "#dbeafe", border: "1px solid #2563eb", borderRadius: 20, padding: "4px 14px", marginBottom: 20 }}>
            Simulare gamificată · Profesia360
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: "#1e293b", marginBottom: 12, lineHeight: 1.2 }}>O zi completă ca Profesor</h1>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
            Simulezi ziua de lucru a unui profesor de liceu — 08:00 până la 18:00. Task-uri apar în timp real. Fiecare decizie afectează XP, skill-uri și scorul final.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 32 }}>
            {[{ icon: "⚡", label: "Task-uri timed", desc: "Răspunzi rapid sau pierzi XP" }, { icon: "🎯", label: "5 skill-uri", desc: "Disciplină, empatie și mai mult" }, { icon: "🤖", label: "Feedback AI", desc: "Analiză personalizată la final" }].map((x) => (
              <div key={x.label} style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #dbeafe" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{x.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", marginBottom: 4 }}>{x.label}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{x.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => { setHardMode(false); startSimulation(); }} style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", border: "none", borderRadius: 12, padding: "16px 48px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 24px rgba(37,99,235,0.35)" }}>
              Începe ziua de muncă →
            </button>
            <button onClick={() => { setHardMode(true); startSimulation(); }} style={{ background: "linear-gradient(135deg,#dc2626,#991b1b)", color: "#fff", border: "none", borderRadius: 12, padding: "16px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 24px rgba(220,38,38,0.35)" }}>
              🔥 Zi grea (timere -50%)
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ── COMPLETE ───────────────────────────────────────────────────────────
  if (phase === "complete" && state) {
    const optCount = state.completedTasks.filter((tid) => {
      const t = TASKS.find((x) => x.id === tid)!;
      return t.choices.find((c) => c.id === state.choicesMade[tid])?.isOptimal;
    }).length;
    const badges = computeBadges(state);
    const profile = computeCompatibilityProfile(state);
    const matches = getCareerMatches(state);
    const profileLabels: Record<string, [string, string]> = {
      intuitiv: ["Analitic", "Intuitiv"],
      empatic: ["Structural", "Empatic"],
      independent: ["Colaborativ", "Independent"],
      risc: ["Stabilitate", "Risc"],
    };

    return (
      <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe)", fontFamily: "sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>{levelDef.badge}</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1e293b", marginBottom: 8 }}>Ziua s-a terminat!</h1>
            <p style={{ fontSize: 15, color: "#475569" }}>Iată cum a decurs ziua ta ca profesor</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 12, marginBottom: 24 }}>
            {[{ label: "XP Total", value: state.currentXP, color: "#2563eb" }, { label: "Nivel atins", value: levelDef.title, color: "#7c3aed" }, { label: "Task-uri OK", value: `${state.completedTasks.length}/${TASKS.length}`, color: "#059669" }, { label: "Decizii optime", value: `${optCount}/${state.completedTasks.length}`, color: "#d97706" }].map((s) => (
              <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: 16, textAlign: "center", border: "1px solid #dbeafe" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.color, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 24, border: "1px solid #dbeafe" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 16 }}>Skill-urile tale finale</div>
            {Object.entries(state.skills).map(([skill, value]) => (
              <div key={skill} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: "#475569" }}>{SKILL_ICONS[skill]} {SKILL_LABELS[skill]}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#2563eb" }}>{value}</span>
                </div>
                <div style={{ height: 6, background: "#e8f0fe", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${value}%`, background: "linear-gradient(90deg,#2563eb,#7c3aed)", borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
          {/* Replay ziua ta */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>⏱ Ziua ta în 60 de secunde</div>
              {!replayRunning && replayStep === -1 && (
                <button onClick={() => {
                  setReplayStep(0);
                  setReplayRunning(true);
                  let i = 0;
                  const all = state.completedTasks.length + state.missedTasks.length;
                  const iv = setInterval(() => {
                    i++;
                    setReplayStep(i);
                    if (i >= all) { clearInterval(iv); setReplayRunning(false); }
                  }, 700);
                }} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  ▶ Rulează replay
                </button>
              )}
              {(replayRunning || replayStep >= 0) && (
                <button onClick={() => { setReplayStep(-1); setReplayRunning(false); }} style={{ background: "#e8f0fe", color: "#2563eb", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  ↺ Reset
                </button>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TASKS.map((task, idx) => {
                const done = state.completedTasks.includes(task.id);
                const missed = state.missedTasks.includes(task.id);
                const choiceId = state.choicesMade[task.id];
                const choice = done ? task.choices.find((c) => c.id === choiceId) : null;
                const visible = replayStep === -1 || idx < replayStep;
                return (
                  <div key={task.id} style={{ opacity: visible ? 1 : 0.15, transition: "opacity 0.5s", borderLeft: `3px solid ${done ? (choice?.isOptimal ? "#059669" : "#d97706") : "#dc2626"}`, paddingLeft: 12, paddingTop: 4, paddingBottom: 4 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{fmt(task.hour, task.minute)} — {task.title}</span>
                      <span style={{ fontSize: 11, color: done ? (choice?.isOptimal ? "#059669" : "#d97706") : "#dc2626", fontWeight: 700 }}>
                        {done ? (choice?.isOptimal ? "✓ Optim" : "△ Suboptim") : "✗ Ratat"}
                      </span>
                    </div>
                    {done && choice && (
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, lineHeight: 1.4 }}>{choice.immediateConsequence}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comparație cu profesionistul real */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>👨‍🏫 Tu vs. Profesorul cu 10 ani experiență</div>
            <div style={{ fontSize: 12, color: "#64748b", marginBottom: 16 }}>Cum ar fi răspuns un expert la aceleași scenarii</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TASKS.filter((t) => state.completedTasks.includes(t.id)).map((task) => {
                const userChoiceId = state.choicesMade[task.id];
                const userChoice = task.choices.find((c) => c.id === userChoiceId);
                const expert = EXPERT_CHOICES[task.id];
                const expertChoice = expert ? task.choices[expert.choiceIndex] : null;
                const match = userChoiceId === expertChoice?.id;
                return (
                  <div key={task.id} style={{ borderRadius: 12, border: `1px solid ${match ? "#bbf7d0" : "#fecaca"}`, overflow: "hidden" }}>
                    <div style={{ background: match ? "#f0fdf4" : "#fef2f2", padding: "8px 14px", fontSize: 11, fontWeight: 700, color: match ? "#15803d" : "#b91c1c", display: "flex", justifyContent: "space-between" }}>
                      <span>{fmt(task.hour, task.minute)} — {task.title}</span>
                      <span>{match ? "✓ Ai ales la fel" : "✗ Alegeri diferite"}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                      <div style={{ padding: "10px 14px", borderRight: "1px solid #e8f0fe" }}>
                        <div style={{ fontSize: 10, color: "#2563eb", fontWeight: 700, marginBottom: 4, textTransform: "uppercase" }}>Tu ai ales</div>
                        <div style={{ fontSize: 12, color: "#334155", lineHeight: 1.5 }}>{userChoice?.text}</div>
                      </div>
                      <div style={{ padding: "10px 14px" }}>
                        <div style={{ fontSize: 10, color: "#7c3aed", fontWeight: 700, marginBottom: 4, textTransform: "uppercase" }}>Expertul ar alege</div>
                        <div style={{ fontSize: 12, color: "#334155", lineHeight: 1.5 }}>{expertChoice?.text}</div>
                        {!match && expert && (
                          <div style={{ fontSize: 11, color: "#64748b", marginTop: 6, fontStyle: "italic" }}>"{expert.rationale}"</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Badge-uri */}
          {badges.length > 0 && (
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 16 }}>🏅 Badge-uri câștigate</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {badges.map((b) => (
                  <div key={b.id} style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "10px 14px", textAlign: "center", minWidth: 100 }}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{b.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#1e293b" }}>{b.title}</div>
                    <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profil compatibilitate */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 16 }}>🧭 Profilul tău de carieră</div>
            {Object.entries(profile).map(([key, val]) => {
              const [left, right] = profileLabels[key];
              return (
                <div key={key} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748b", marginBottom: 4 }}>
                    <span>{left}</span>
                    <span style={{ fontWeight: 600, color: "#2563eb" }}>{val}% {right}</span>
                  </div>
                  <div style={{ height: 6, background: "#e8f0fe", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${val}%`, background: "linear-gradient(90deg,#2563eb,#7c3aed)", borderRadius: 3 }} />
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: 20, borderTop: "1px solid #e8f0fe", paddingTop: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#1e293b", marginBottom: 10 }}>Profesii cu cea mai mare potrivire:</div>
              {matches.map((m) => (
                <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, fontSize: 13 }}>
                      <span style={{ color: "#334155" }}>→ {m.name}</span>
                      <span style={{ fontWeight: 700, color: m.match >= 80 ? "#059669" : "#d97706" }}>{m.match}%</span>
                    </div>
                    <div style={{ height: 4, background: "#e8f0fe", borderRadius: 2 }}>
                      <div style={{ height: "100%", width: `${m.match}%`, background: m.match >= 80 ? "#059669" : "#d97706", borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid #dbeafe", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>🤖</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#1e293b" }}>Feedback personalizat</span>
            </div>
            {loadingFeedback ? (
              <div style={{ textAlign: "center", padding: 32, color: "#64748b", fontSize: 14 }}>Analizez alegerile tale... ✨</div>
            ) : (
              <div style={{ fontSize: 14, color: "#334155", lineHeight: 1.85, whiteSpace: "pre-wrap" }}>{feedback}</div>
            )}
          </div>
          {!hardMode && optCount === state.completedTasks.length && state.completedTasks.length >= 4 && (
            <div style={{ background: "linear-gradient(135deg,#7f1d1d,#991b1b)", borderRadius: 16, padding: 20, marginBottom: 16, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 32 }}>🔥</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Felicitări — ai ales optim la toate!</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>Încearcă "Zi grea" — timere reduse la jumătate, presiune maximă.</div>
              </div>
              <button onClick={() => { setHardMode(true); setState(null); setPhase("intro"); }} style={{ background: "#dc2626", color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
                Încearcă →
              </button>
            </div>
          )}

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => { setState(null); setPhase("intro"); }} style={{ background: "#e8f0fe", color: "#2563eb", border: "1px solid #2563eb", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              ← Reia simularea
            </button>
            <a href="/experienta-vr" style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
              Explorează alte profesii →
            </a>
          </div>
        </div>
      </main>
    );
  }

  if (!state) return null;

  // ── HUD + RUNNING / TASK / CONSEQUENCE ────────────────────────────────
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe)", fontFamily: "sans-serif" }}>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}} @keyframes slideIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}`}</style>

      {levelUpAnim && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 9999, background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", borderRadius: 20, padding: "24px 48px", textAlign: "center", boxShadow: "0 20px 60px rgba(37,99,235,0.5)", animation: "fadeIn 0.5s ease" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Level Up!</div>
          <div style={{ fontSize: 15, opacity: 0.9, marginTop: 4 }}>{levelUpAnim}</div>
        </div>
      )}

      {/* Notificări */}
      <div style={{ position: "fixed", top: 80, right: 16, zIndex: 1000, display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
        {notifications.map((n) => (
          <div key={n.id} style={{ background: n.type === "urgent" ? "#dc2626" : n.type === "warning" ? "#d97706" : n.type === "achievement" ? "#059669" : "#2563eb", color: "#fff", borderRadius: 10, padding: "12px 16px", fontSize: 13, lineHeight: 1.5, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", animation: "slideIn 0.3s ease" }}>
            {n.message}
          </div>
        ))}
      </div>

      {/* HUD */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: hardMode ? "rgba(127,29,29,0.97)" : "rgba(232,240,254,0.95)", backdropFilter: "blur(12px)", borderBottom: hardMode ? "1px solid #dc2626" : "1px solid #dbeafe", padding: "10px 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ background: "#1e3a5f", color: "#60a5fa", borderRadius: 8, padding: "6px 14px", fontFamily: "monospace", fontSize: 18, fontWeight: 700 }}>
            {fmt(currentHour, currentMinute)}
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 3 }}>
              <span style={{ color: "#475569" }}>{levelDef.badge} {levelDef.title}</span>
              <span style={{ color: "#2563eb", fontWeight: 700 }}>{state.currentXP} XP</span>
            </div>
            <div style={{ height: 5, background: "#dbeafe", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${xpProgress}%`, background: "linear-gradient(90deg,#2563eb,#7c3aed)", transition: "width 0.5s" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {Object.entries(state.skills).map(([sk, v]) => (
              <div key={sk} title={`${SKILL_LABELS[sk]}: ${v}`} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 14 }}>{SKILL_ICONS[sk]}</div>
                <div style={{ fontSize: 10, color: "#2563eb", fontWeight: 700 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 20px" }}>

        {/* Timeline */}
        {phase === "running" && (
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 24, border: "1px solid #dbeafe" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 16 }}>📅 Programul zilei</div>
            {TASKS.map((task) => {
              const done = state.completedTasks.includes(task.id);
              const missed = state.missedTasks.includes(task.id);
              return (
                <div key={task.id} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10, opacity: missed ? 0.5 : 1 }}>
                  <div style={{ fontSize: 12, fontFamily: "monospace", color: "#64748b", minWidth: 40 }}>{fmt(task.hour, task.minute)}</div>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: done ? "#059669" : missed ? "#dc2626" : TASK_TYPE_COLORS[task.type] }} />
                  <div style={{ fontSize: 13, color: done ? "#059669" : "#334155", fontWeight: done ? 600 : 400, textDecoration: missed ? "line-through" : "none", flex: 1 }}>
                    {done ? "✓ " : missed ? "✗ " : ""}{task.title}
                  </div>
                  <div style={{ fontSize: 10, background: task.urgency === "critical" ? "#fef2f2" : "#f0fdf4", color: task.urgency === "critical" ? "#dc2626" : "#059669", borderRadius: 4, padding: "2px 6px", flexShrink: 0 }}>
                    {URGENCY_LABELS[task.urgency]}
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: 16, padding: "12px 16px", background: "#f0f7ff", borderRadius: 10, fontSize: 13, color: "#475569" }}>
              ⏱ Ziua simulată avansează automat. Fii atent/ă — task-urile apar fără avertisment!
            </div>
          </div>
        )}

        {/* Task activ */}
        {phase === "task" && activeTask && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: TASK_TYPE_COLORS[activeTask.type], marginBottom: 4 }}>
                  {activeTask.type.toUpperCase()} · {fmt(activeTask.hour, activeTask.minute)}
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e293b", margin: 0 }}>{activeTask.title}</h2>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: taskTimeLeft < 15 ? "#dc2626" : taskTimeLeft < 30 ? "#d97706" : "#2563eb", color: "#fff", fontSize: 18, fontWeight: 800, fontFamily: "monospace", boxShadow: taskTimeLeft < 15 ? "0 0 20px rgba(220,38,38,0.5)" : "none", transition: "background 0.3s", flexShrink: 0 }}>
                {taskTimeLeft}
              </div>
            </div>
            <div style={{ background: "#fff", borderLeft: `4px solid ${TASK_TYPE_COLORS[activeTask.type]}`, borderRadius: "0 12px 12px 0", padding: "16px 20px", marginBottom: 24, fontSize: 14, color: "#334155", lineHeight: 1.75 }}>
              {activeTask.scenario}
            </div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: 12 }}>Cum reacționezi?</div>
            {activeTask.choices.map((choice, i) => (
              <button key={choice.id} onClick={() => makeChoice(choice.id)} style={{ display: "block", width: "100%", textAlign: "left", background: selectedChoice === choice.id ? "linear-gradient(135deg,#dbeafe,#ede9fe)" : "#fff", border: selectedChoice === choice.id ? "2px solid #2563eb" : "1px solid #dbeafe", borderRadius: 12, padding: "14px 18px", marginBottom: 10, cursor: "pointer", fontSize: 14, color: "#1e293b", lineHeight: 1.6, transition: "all 0.2s", fontFamily: "sans-serif" }}>
                <span style={{ display: "inline-block", width: 22, height: 22, borderRadius: 6, background: "#e8f0fe", color: "#2563eb", textAlign: "center", lineHeight: "22px", fontSize: 11, fontWeight: 700, marginRight: 10 }}>
                  {["A", "B", "C"][i]}
                </span>
                {choice.text}
              </button>
            ))}
          </div>
        )}

        {/* Consecință */}
        {phase === "consequence" && consequence && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", marginBottom: 20 }}>Ce s-a întâmplat</h2>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe" }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: 8 }}>Consecință imediată</div>
              <div style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.7 }}>{consequence.immediate}</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #fef9c3" }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#d97706", marginBottom: 8 }}>↻ Pe termen lung</div>
              <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.7 }}>{consequence.longterm}</div>
            </div>
            <div style={{ textAlign: "center", padding: 16, background: "linear-gradient(135deg,#dbeafe,#ede9fe)", borderRadius: 12, marginBottom: 16 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#2563eb" }}>+{consequence.xp} XP</div>
              <div style={{ fontSize: 13, color: "#475569" }}>adăugat la profilul tău</div>
            </div>
            {randomEvent && (
              <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 12, padding: 20, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", marginBottom: 6 }}>⚠️ Eveniment neprevăzut: {randomEvent.title}</div>
                <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{randomEvent.description}</div>
              </div>
            )}
            <button onClick={continueSimulation} style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Continuă ziua →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
