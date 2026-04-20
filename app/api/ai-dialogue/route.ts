import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { scenarioTitle, choiceLabel, immediate, language } = await req.json();
    if (!scenarioTitle || !choiceLabel || !immediate) {
      return NextResponse.json({ error: "Câmpuri lipsă" }, { status: 400 });
    }
    const prompt = `Ești un simulator de scenarii școlare pentru un joc de orientare în carieră destinat adolescenților români (14-18 ani).
Scenariu: "${scenarioTitle}"
Decizia profesorului: ${choiceLabel}
Ce s-a întâmplat imediat: ${immediate}
Scrie UN SINGUR gând scurt și autentic al profesorului SAU o reacție naturală și scurtă a unui elev (maxim 2-3 propoziții). Fără etichete, fără ghilimele. Menține tonul realist și sobru. Scrie în limba română.`;
    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 150,
      messages: [{ role: "user", content: prompt }],
    });
    const text = message.content.find((b) => b.type === "text")?.text ?? "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("Eroare dialog AI:", err);
    return NextResponse.json({ error: "Eroare server" }, { status: 500 });
  }
}
