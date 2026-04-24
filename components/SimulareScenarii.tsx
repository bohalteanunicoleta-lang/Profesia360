"use client";
import { useState } from "react";
import Link from "next/link";

export interface Scenariu {
  id: string;
  titlu: string;
  context: string;
  obiective: string[];
  optiuni: string[];
  feedbackOptim: string;
  optimalIndex: number;
}

interface Props {
  profesie: string;
  emoji: string;
  slug: string;
  scenarii: Scenariu[];
}

type Phase = "intro" | "scenariu" | "raspuns" | "final";

interface Alegere {
  scenariuId: string;
  optionIdx: number;
  optimal: boolean;
}

export default function SimulareScenarii({ profesie, emoji, slug, scenarii }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [scenariuIdx, setScenariuIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [alegeri, setAlegeri] = useState<Alegere[]>([]);

  const current = scenarii[scenariuIdx];
  const optimalCount = alegeri.filter((a) => a.optimal).length;

  function alege(idx: number) {
    setSelectedIdx(idx);
    setAlegeri((prev) => [
      ...prev,
      { scenariuId: current.id, optionIdx: idx, optimal: idx === current.optimalIndex },
    ]);
    setPhase("raspuns");
  }

  function continua() {
    if (scenariuIdx + 1 >= scenarii.length) {
      setPhase("final");
    } else {
      setScenariuIdx((i) => i + 1);
      setSelectedIdx(null);
      setPhase("scenariu");
    }
  }

  function restart() {
    setPhase("intro");
    setScenariuIdx(0);
    setSelectedIdx(null);
    setAlegeri([]);
  }

  const score = Math.round((optimalCount / scenarii.length) * 100);
  const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
  const gradeColor = grade === "A" ? "#059669" : grade === "B" ? "#2563eb" : grade === "C" ? "#d97706" : "#dc2626";
  const gradeLabel =
    grade === "A" ? "Decizii excelente" :
    grade === "B" ? "Performanță solidă" :
    grade === "C" ? "În dezvoltare" :
    "Provocări semnificative";

  // ── INTRO ──
  if (phase === "intro") {
    return (
      <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: 20 }}>
        <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>{emoji}</div>
          <div style={{ display: "inline-block", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2563eb", background: "#dbeafe", border: "1px solid #2563eb", borderRadius: 20, padding: "4px 14px", marginBottom: 20 }}>
            Simulare · Profesia360
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1e293b", marginBottom: 12, lineHeight: 1.2 }}>
            O zi ca {profesie}
          </h1>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
            {scenarii.length} scenarii reale. Fiecare decizie contează. Descoperă cum gândești și acționezi sub presiune profesională.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 32 }}>
            {[
              { icon: "🎭", label: `${scenarii.length} scenarii`, desc: "Situații reale de la profesioniști" },
              { icon: "🎯", label: "Decizii reale", desc: "Alegi din opțiuni cu consecințe" },
              { icon: "📊", label: "Scor final", desc: "Comparație cu expertul" },
            ].map((x) => (
              <div key={x.label} style={{ background: "#fff", borderRadius: 12, padding: 16, border: "1px solid #dbeafe" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{x.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", marginBottom: 4 }}>{x.label}</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{x.desc}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPhase("scenariu")}
            style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", border: "none", borderRadius: 12, padding: "16px 48px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 24px rgba(37,99,235,0.35)" }}
          >
            Începe simularea →
          </button>
        </div>
      </main>
    );
  }

  // ── FINAL ──
  if (phase === "final") {
    return (
      <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe)", fontFamily: "sans-serif", padding: "40px 20px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>{emoji}</div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#1e293b", marginBottom: 8 }}>Simulare completă!</h1>
            <p style={{ fontSize: 15, color: "#475569" }}>Iată cum ai performat ca {profesie}</p>
          </div>

          {/* Score */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe", textAlign: "center" }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: gradeColor, marginBottom: 4 }}>Grade {grade}</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#475569", marginBottom: 8 }}>{gradeLabel}</div>
            <div style={{ fontSize: 14, color: "#64748b" }}>
              {optimalCount} din {scenarii.length} decizii optime — scor {score}/100
            </div>
          </div>

          {/* Recap alegeri */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, border: "1px solid #dbeafe" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 16 }}>Deciziile tale</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {scenarii.map((s, i) => {
                const alegere = alegeri[i];
                return (
                  <div key={s.id} style={{ borderRadius: 10, border: `1px solid ${alegere?.optimal ? "#bbf7d0" : "#fecaca"}`, overflow: "hidden" }}>
                    <div style={{ background: alegere?.optimal ? "#f0fdf4" : "#fef2f2", padding: "8px 14px", fontSize: 11, fontWeight: 700, color: alegere?.optimal ? "#15803d" : "#b91c1c", display: "flex", justifyContent: "space-between" }}>
                      <span>{s.titlu}</span>
                      <span>{alegere?.optimal ? "✓ Optim" : "△ Suboptim"}</span>
                    </div>
                    <div style={{ padding: "10px 14px" }}>
                      <div style={{ fontSize: 12, color: "#334155", marginBottom: alegere?.optimal ? 0 : 8 }}>
                        <span style={{ color: "#64748b", fontWeight: 600 }}>Ai ales: </span>
                        {s.optiuni[alegere?.optionIdx ?? 0]}
                      </div>
                      {!alegere?.optimal && (
                        <div style={{ fontSize: 11, color: "#64748b", fontStyle: "italic" }}>
                          💡 {s.feedbackOptim}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={restart} style={{ background: "#e8f0fe", color: "#2563eb", border: "1px solid #2563eb", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              ← Reia simularea
            </button>
            <Link href={`/profesii/${slug}`} style={{ background: "#f0fdf4", color: "#059669", border: "1px solid #bbf7d0", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              ← Pagina profesiei
            </Link>
            <Link href="/profesii" style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Explorează alte profesii →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── SCENARIU / RĂSPUNS ──
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe)", fontFamily: "sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: 660, margin: "0 auto" }}>

        {/* Progress */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {scenarii.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < scenariuIdx ? "#2563eb" : i === scenariuIdx ? "#93c5fd" : "#dbeafe" }} />
          ))}
        </div>

        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>
          Scenariul {scenariuIdx + 1} din {scenarii.length} · {emoji} {profesie}
        </div>

        {/* Card scenariu */}
        <div style={{ background: "#fff", borderRadius: 20, padding: 28, marginBottom: 20, border: "1px solid #dbeafe", boxShadow: "0 4px 20px rgba(37,99,235,0.08)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1e293b", marginBottom: 12 }}>{current.titlu}</h2>

          {/* Obiective */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
            {current.obiective.map((o) => (
              <span key={o} style={{ fontSize: 11, background: "#eff6ff", color: "#2563eb", borderRadius: 20, padding: "3px 10px", fontWeight: 600 }}>{o}</span>
            ))}
          </div>

          {/* Context */}
          <div style={{ background: "#f8fafc", borderRadius: 12, padding: 16, fontSize: 14, color: "#334155", lineHeight: 1.75, marginBottom: 20, borderLeft: "3px solid #2563eb" }}>
            {current.context}
          </div>

          {/* Opțiuni */}
          {phase === "scenariu" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Ce faci?
              </div>
              {current.optiuni.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => alege(i)}
                  style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "14px 16px", fontSize: 14, color: "#334155", textAlign: "left", cursor: "pointer", lineHeight: 1.55, fontFamily: "inherit" }}
                >
                  <span style={{ fontWeight: 700, color: "#2563eb", marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Rezultat alegere */}
          {phase === "raspuns" && selectedIdx !== null && (
            <div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>Opțiunile:</div>
                {current.optiuni.map((opt, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 12, padding: "12px 16px", fontSize: 14, marginBottom: 8,
                      background: i === selectedIdx ? (selectedIdx === current.optimalIndex ? "#f0fdf4" : "#fef2f2") : i === current.optimalIndex ? "#f0fdf4" : "#f8fafc",
                      border: `1.5px solid ${i === selectedIdx ? (selectedIdx === current.optimalIndex ? "#86efac" : "#fca5a5") : i === current.optimalIndex ? "#86efac" : "#e2e8f0"}`,
                      color: "#334155",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "#2563eb", marginRight: 8 }}>{String.fromCharCode(65 + i)}.</span>
                    {opt}
                    {i === selectedIdx && (
                      <span style={{ marginLeft: 8, fontSize: 12, fontWeight: 700, color: selectedIdx === current.optimalIndex ? "#059669" : "#dc2626" }}>
                        {selectedIdx === current.optimalIndex ? "← ai ales · optim ✓" : "← ai ales"}
                      </span>
                    )}
                    {i !== selectedIdx && i === current.optimalIndex && (
                      <span style={{ marginLeft: 8, fontSize: 12, fontWeight: 700, color: "#059669" }}>← optim ✓</span>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: "#eff6ff", borderRadius: 12, padding: "14px 16px", fontSize: 13, color: "#1e293b", lineHeight: 1.65, marginBottom: 16 }}>
                <span style={{ fontWeight: 700 }}>💡 Perspectiva expertului: </span>
                {current.feedbackOptim}
              </div>

              <button
                onClick={continua}
                style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", width: "100%", fontFamily: "inherit" }}
              >
                {scenariuIdx + 1 >= scenarii.length ? "Vezi rezultatele →" : "Scenariul următor →"}
              </button>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
