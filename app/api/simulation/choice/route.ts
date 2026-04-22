import { NextRequest, NextResponse } from "next/server";
import { applyChoice, checkRandomEvents } from "@/lib/simulation/engine";
import { TASKS, RANDOM_EVENTS } from "@/lib/simulation/data";
import { SimulationState } from "@/lib/simulation/types";

export async function POST(req: NextRequest) {
  const { state, taskId, choiceId, timeRemaining } = (await req.json()) as {
    state: SimulationState;
    taskId: string;
    choiceId: string;
    timeRemaining: number;
  };

  const task = TASKS.find((t) => t.id === taskId);
  if (!task) return NextResponse.json({ error: "Task negăsit" }, { status: 404 });

  const choice = task.choices.find((c) => c.id === choiceId);
  if (!choice) return NextResponse.json({ error: "Alegere negăsită" }, { status: 404 });

  const updatedState = applyChoice(state, taskId, choice, timeRemaining, task.timeoutSeconds);

  const randomEventId = checkRandomEvents(updatedState, taskId);
  const randomEvent = randomEventId
    ? RANDOM_EVENTS.find((e) => e.id === randomEventId)
    : null;

  return NextResponse.json({
    updatedState,
    immediateConsequence: choice.immediateConsequence,
    longTermConsequence: choice.longTermConsequence,
    xpGained: updatedState.currentXP - state.currentXP,
    randomEvent: randomEvent ?? null,
    leveledUp: updatedState.level > state.level,
  });
}
