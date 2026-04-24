import { SimulationState, Task, Choice, SkillKey, LevelDefinition } from "./types";
import { TASKS, LEVELS, RANDOM_EVENTS } from "./data";

export interface Badge {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface CareerMatch {
  name: string;
  match: number;
}

export interface CompatibilityProfile {
  intuitiv: number;
  empatic: number;
  independent: number;
  risc: number;
}

export function getLevelForXP(xp: number): LevelDefinition {
  return LEVELS.slice().reverse().find((l) => xp >= l.minXP) ?? LEVELS[0];
}

export function calculateXPGain(
  choice: Choice,
  timeRemaining: number,
  totalTime: number,
  streak: number
): number {
  let xp = choice.xpReward;
  const speedRatio = timeRemaining / totalTime;
  if (speedRatio > 0.7) xp = Math.round(xp * 1.25);
  if (streak >= 3) xp = Math.round(xp * 1.1);
  if (streak >= 7) xp = Math.round(xp * 1.2);
  return xp;
}

export function applyChoice(
  state: SimulationState,
  taskId: string,
  choice: Choice,
  timeRemaining: number,
  totalTime: number
): SimulationState {
  const xpGained = calculateXPGain(choice, timeRemaining, totalTime, state.streak);

  const newSkills = { ...state.skills };
  (Object.keys(choice.skillEffects) as SkillKey[]).forEach((skill) => {
    const effect = choice.skillEffects[skill] ?? 0;
    newSkills[skill] = Math.max(0, Math.min(100, newSkills[skill] + effect));
  });

  const newXP = state.currentXP + xpGained;
  const newLevel = getLevelForXP(newXP).level;

  return {
    ...state,
    currentXP: newXP,
    level: newLevel,
    skills: newSkills,
    completedTasks: [...state.completedTasks, taskId],
    choicesMade: { ...state.choicesMade, [taskId]: choice.id },
  };
}

export function applyMissedTask(state: SimulationState, task: Task): SimulationState {
  return {
    ...state,
    currentXP: Math.max(0, state.currentXP - task.timeoutPenalty),
    missedTasks: [...state.missedTasks, task.id],
    skills: {
      ...state.skills,
      organizare: Math.max(0, state.skills.organizare - 8),
      rezilienta: Math.max(0, state.skills.rezilienta - 5),
    },
  };
}

export function checkRandomEvents(state: SimulationState, afterTaskId: string): string | null {
  const eligible = RANDOM_EVENTS.filter((e) => e.triggerAfterTask === afterTaskId);
  for (const event of eligible) {
    if (Math.random() < event.probability) return event.id;
  }
  return null;
}

export function getSimulationScore(state: SimulationState): {
  totalScore: number;
  grade: "A" | "B" | "C" | "D";
  label: string;
} {
  const skillAvg = Object.values(state.skills).reduce((a, b) => a + b, 0) / 5;
  const completionRate = state.completedTasks.length / TASKS.length;
  const optimalChoices = state.completedTasks.filter((taskId) => {
    const task = TASKS.find((t) => t.id === taskId)!;
    const choiceId = state.choicesMade[taskId];
    return task.choices.find((c) => c.id === choiceId)?.isOptimal;
  }).length;
  const optimalRate = optimalChoices / Math.max(state.completedTasks.length, 1);

  const total = Math.round(
    skillAvg * 0.35 +
      (state.currentXP / 20) * 0.3 +
      optimalRate * 100 * 0.25 +
      completionRate * 100 * 0.1
  );

  const score = Math.min(100, total);
  const grade = score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : "D";
  const label =
    grade === "A"
      ? "Profesor Excepțional"
      : grade === "B"
      ? "Profesor Solid"
      : grade === "C"
      ? "Profesor în Dezvoltare"
      : "Provocări Semnificative";

  return { totalScore: score, grade, label };
}

export function computeBadges(state: SimulationState, dailyStreak?: number, totalRuns?: number): Badge[] {
  const badges: Badge[] = [];

  if (state.completedTasks.length > 0) {
    badges.push({ id: "first_day", icon: "🎭", title: "Prima zi de muncă", desc: "Ai finalizat simularea." });
  }
  if (state.skills.empatie > 80) {
    badges.push({ id: "empathic", icon: "💙", title: "Empatic", desc: "Empatia depășește 80/100." });
  }
  const favTask = TASKS.find((t) => t.id === "t_favoritism");
  const favChoice = favTask && state.choicesMade["t_favoritism"];
  if (favTask && favChoice && favTask.choices.find((c) => c.id === favChoice)?.isOptimal) {
    badges.push({ id: "integrity", icon: "⚖️", title: "Drept până la capăt", desc: "Integritate maximă sub presiune." });
  }
  if (state.completedTasks.length === TASKS.length) {
    badges.push({ id: "explorer", icon: "🎓", title: "Ziua completă", desc: "Ai completat toate task-urile." });
  }
  const { totalScore } = getSimulationScore(state);
  if (totalScore >= 85) {
    badges.push({ id: "top", icon: "🏆", title: "Top Performer", desc: "Scor peste 85/100." });
  }
  if (state.streak >= 5) {
    badges.push({ id: "fast", icon: "🔥", title: "Fără ezitare", desc: "5 decizii rapide consecutive." });
  }
  if (dailyStreak && dailyStreak >= 7) {
    badges.push({ id: "in_flacari", icon: "👑", title: "În flăcări", desc: "7 zile consecutiv active — top 5%!" });
  }
  if (totalRuns && totalRuns >= 5) {
    badges.push({ id: "polymath", icon: "🧠", title: "Polymath", desc: "5 simulări finalizate — explorator complet." });
  }

  return badges;
}

export function computeCompatibilityProfile(state: SimulationState): CompatibilityProfile {
  const { empatie, comunicare, organizare, rezilienta, disciplina } = state.skills;
  return {
    intuitiv: Math.min(100, Math.round((empatie + comunicare) / 2)),
    empatic: empatie,
    independent: Math.min(100, Math.round((rezilienta + disciplina) / 2)),
    risc: Math.min(100, Math.round(100 - (organizare + disciplina) / 2)),
  };
}

export function getCareerMatches(state: SimulationState): CareerMatch[] {
  const { empatie, comunicare, organizare, rezilienta, disciplina } = state.skills;
  return [
    { name: "Psiholog", match: Math.min(100, Math.round(empatie * 0.5 + comunicare * 0.3 + rezilienta * 0.2)) },
    { name: "Asistent social", match: Math.min(100, Math.round(empatie * 0.6 + comunicare * 0.3 + rezilienta * 0.1)) },
    { name: "Consilier școlar", match: Math.min(100, Math.round(empatie * 0.4 + comunicare * 0.4 + organizare * 0.2)) },
    { name: "Trainer / Coach", match: Math.min(100, Math.round(comunicare * 0.5 + empatie * 0.3 + organizare * 0.2)) },
    { name: "Manager educațional", match: Math.min(100, Math.round(organizare * 0.4 + disciplina * 0.3 + comunicare * 0.3)) },
    { name: "Profesor universitar", match: Math.min(100, Math.round(organizare * 0.3 + comunicare * 0.4 + rezilienta * 0.3)) },
  ]
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}
