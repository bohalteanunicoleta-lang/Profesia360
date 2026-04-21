import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/lib/users";

export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();
    if (!email || !name || !password) {
      return NextResponse.json({ error: "Toate câmpurile sunt obligatorii." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: "Parola trebuie să aibă cel puțin 6 caractere." }, { status: 400 });
    }
    await createUser(email, name, password);
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Eroare server.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
