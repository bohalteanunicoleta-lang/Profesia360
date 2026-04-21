import { NextRequest, NextResponse } from "next/server";

// Smart keyword-based responses — no API key required.
const RULES: { keys: string[]; reply: string }[] = [
  {
    keys: ["planuri", "pret", "preț", "cost", "cât", "cat", "plătesc", "platesc", "abonament"],
    reply: "Avem 5 planuri:\n• Basic — Gratuit (preview limitat)\n• Preview — 69 lei / 15 zile\n• Pro — 149 lei / 15 zile (include sesiuni 1-1 cu expert)\n• Premium — 179 lei / 15 zile (acces complet)\n• Domeniu Pro — 299 lei / 30 zile\n\nPentru elevi există pachete speciale: 119 lei (2 profesii) sau 149 lei (3 profesii). Poți vedea toate detaliile la /planuri.",
  },
  {
    keys: ["profesor", "simulare", "teacher"],
    reply: "Profesia de profesor este disponibilă acum! Mergi la /profesii/profesor pentru a vedea detalii, videoclipuri VR 360° și simularea interactivă 'O zi ca profesor' cu 9 scenarii reale.",
  },
  {
    keys: ["cont", "înregistrare", "inregistrare", "login", "logare", "autentificare"],
    reply: "Poți crea un cont gratuit la /autentificare. Alegi email + parolă, și imediat ai acces la planul Basic. Pentru planurile plătite, după autentificare vei fi direcționat automat la pagina de plată.",
  },
  {
    keys: ["vr", "360", "ochelari", "virtual", "imersiv"],
    reply: "Experiențele VR 360° sunt disponibile pe pagina /experienta-vr. Poți explora domenii precum Medical, Tehnologie, Arhitectură, Educație și altele. Fiecare domeniu are profesii disponibile cu video imersiv în care poți privi în orice direcție.",
  },
  {
    keys: ["profesii", "domenii", "medic", "programator", "arhitect", "avocat"],
    reply: "Pe Profesia 360 poți explora profesii din domenii ca:\n• 🏥 Medical & Sănătate (Medic, Chirurg, Asistent)\n• 💻 Tehnologie & IT (Programator, Designer UX)\n• 🏛️ Arhitectură & Design\n• 🎓 Educație (Profesor)\n• ⚖️ Juridic & Administrație\nMergi la /experienta-vr pentru a le vedea toate.",
  },
  {
    keys: ["elev", "student", "reducere", "discount", "școală", "scoala"],
    reply: "Da, avem pachete speciale Pro Elev:\n• 119 lei — 2 profesii complete\n• 149 lei — 3 profesii complete\nAcestea includ acces VR complet, feedback personalizat și raport de compatibilitate. Reducerea se aplică elevilor cu card de elev valid.",
  },
  {
    keys: ["sesiune", "expert", "consiliere", "1-1", "specialist"],
    reply: "Sesiunile 1-1 cu un expert sunt disponibile în Planul Pro (149 lei/15 zile) sau Domeniu Pro (299 lei/30 zile). Sesiunea durează 30 de minute online (Zoom) și poți discuta direct cu un profesionist din domeniul ales.",
  },
  {
    keys: ["cum funcționează", "cum functioneaza", "pași", "pasi", "explică", "explica"],
    reply: "Platforma funcționează în 5 pași:\n1️⃣ Creezi cont (gratuit)\n2️⃣ Alegi domeniul și profesia\n3️⃣ Intri în simularea interactivă\n4️⃣ Urmărești experiența VR 360°\n5️⃣ Primești raport de compatibilitate\n\nMergi la /cum-functioneaza pentru detalii complete.",
  },
  {
    keys: ["contact", "ajutor", "problema", "problemă", "suport", "support"],
    reply: "Poți contacta echipa Profesia 360 la pagina /contact sau prin email la contact@profesia360.ro. Răspundem în maxim 24 de ore.",
  },
  {
    keys: ["despre", "echipa", "echipă", "cine", "fondator"],
    reply: "Profesia 360 a fost fondată în 2024 cu misiunea de a ajuta tinerii (14-25 ani) să descopere cariera potrivită prin experiențe virtuale. Află mai multe despre noi și echipă la /despre-noi.",
  },
  {
    keys: ["plată", "plata", "stripe", "card", "achita", "achită"],
    reply: "Plata online (card bancar) va fi disponibilă în curând prin integrare Stripe/Netopia. Momentan poți contacta echipa la contact@profesia360.ro pentru acces imediat după confirmarea plății.",
  },
  {
    keys: ["buna", "bună", "salut", "hello", "hi", "hei"],
    reply: "Bună! Cu ce te pot ajuta azi? Pot să îți explic planurile noastre, profesiile disponibile, cum funcționează simulările VR sau orice altceva despre Profesia 360. 😊",
  },
  {
    keys: ["mulțumesc", "multumesc", "mersi", "ok", "super", "perfect"],
    reply: "Cu plăcere! Dacă mai ai întrebări despre platformă sau carieră, sunt aici. Mult succes în explorare! 🎯",
  },
];

const FALLBACK = "Încerc să înțeleg întrebarea ta. Pot să te ajut cu informații despre:\n• Planuri și prețuri\n• Profesii și domenii disponibile\n• Cum funcționează simulările VR\n• Creare cont și autentificare\n• Pachete Pro Elev\n\nCu ce anume ai nevoie de ajutor?";

function getReply(message: string): string {
  const lower = message.toLowerCase();
  for (const rule of RULES) {
    if (rule.keys.some((k) => lower.includes(k))) return rule.reply;
  }
  return FALLBACK;
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: "Mesaj lipsă" }, { status: 400 });
    const reply = getReply(message);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Eroare server" }, { status: 500 });
  }
}
