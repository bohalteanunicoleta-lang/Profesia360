import { SimulationState, Task, Choice, SkillKey, LevelDefinition } from "./types";
import { TASKS, LEVELS, RANDOM_EVENTS } from "./data";

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
