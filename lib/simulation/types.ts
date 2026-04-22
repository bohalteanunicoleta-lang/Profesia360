export type SkillKey = "disciplina" | "empatie" | "organizare" | "comunicare" | "rezilienta";

export interface Skill {
  key: SkillKey;
  label: string;
  value: number;
  icon: string;
}

export interface Choice {
  id: string;
  text: string;
  xpReward: number;
  skillEffects: Partial<Record<SkillKey, number>>;
  immediateConsequence: string;
  longTermConsequence: string;
  isOptimal: boolean;
}

export interface Task {
  id: string;
  hour: number;
  minute: number;
  title: string;
  scenario: string;
  type: "lesson" | "conflict" | "admin" | "parent" | "evaluation" | "emergency";
  urgency: "low" | "medium" | "high" | "critical";
  choices: Choice[];
  timeoutPenalty: number;
  timeoutSeconds: number;
}

export interface RandomEvent {
  id: string;
  triggerAfterTask: string;
  probability: number;
  title: string;
  description: string;
  effect: Partial<Record<SkillKey, number>>;
  xpEffect: number;
  notification: string;
}

export interface Notification {
  id: string;
  type: "warning" | "urgent" | "info" | "consequence" | "achievement";
  message: string;
  triggerBeforeTaskId?: string;
  minutesBefore?: number;
  autoHideSeconds: number;
}

export interface SimulationState {
  userId: string;
  currentXP: number;
  level: number;
  skills: Record<SkillKey, number>;
  streak: number;
  completedTasks: string[];
  missedTasks: string[];
  choicesMade: Record<string, string>;
  activeNotifications: Notification[];
  simulationStarted: boolean;
  simulationComplete: boolean;
  startedAt: string;
}

export interface LevelDefinition {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  badge: string;
}
