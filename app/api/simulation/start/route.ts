import { NextRequest, NextResponse } from "next/server";
import { SimulationState } from "@/lib/simulation/types";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  const initialState: SimulationState = {
    userId,
    currentXP: 0,
    level: 1,
    skills: {
      disciplina: 50,
      empatie: 50,
      organizare: 50,
      comunicare: 50,
      rezilienta: 50,
    },
    streak: 0,
    completedTasks: [],
    missedTasks: [],
    choicesMade: {},
    activeNotifications: [],
    simulationStarted: true,
    simulationComplete: false,
    startedAt: new Date().toISOString(),
  };

  return NextResponse.json({ state: initialState });
}
