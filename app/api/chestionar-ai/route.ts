import { NextRequest, NextResponse } from "next/server";

// RIASEC Holland Codes scoring — no external API needed
// R=Realistic, I=Investigative, A=Artistic, S=Social, E=Enterprising, C=Conventional

type Category = "R" | "I" | "A" | "S" | "E" | "C";

const QUESTION_MAP: Record<number, { cat: Category; weight: number }> = {
  1:  { cat: "R", weight: 1 },
  2:  { cat: "A", weight: 1 },
  3:  { cat: "S", weight: 1 },
  4:  { cat: "E", weight: 1 },
  5:  { cat: "C", weight: 1 },
  6:  { cat: "R", weight: 1 },
  7:  { cat: "I", weight: 1 },
  8:  { cat: "A", weight: 1 },
  9:  { cat: "S", weight: 1 },
  10: { cat: "E", weight: 1 },
  11: { cat: "C", weight: 1 },
  12: { cat: "R", weight: 1 },
  13: { cat: "I", weight: 1 },
  14: { cat: "S", weight: 1 },
  15: { cat: "C", weight: 1 },
  16: { cat: "I", weight: 1 },
  17: { cat: "E", weight: 1 },
  18: { cat: "R", weight: 1 },
  19: { cat: "S", weight: 1 },
  20: { cat: "E", weight: -1 }, // reversed: "Nu-mi place să iau decizii"
};

const PROFILES: Record<Category, {
  label: string;
  descriere: string;
  calitati: string[];
  profesii: { nume: string; detaliu: string }[];
  domeniu_evitat: string;
}> = {
  R: {
    label: "Practic-Tehnic",
    descriere: "Ești o persoană orientată spre acțiune și rezultate concrete. Preferi să lucrezi cu obiectele și materialele din lumea reală, nu cu idei abstracte. Ai o mare capacitate de a rezolva probleme practice și îți place să vezi rezultatul tangibil al muncii tale.",
    calitati: ["Îndemânare și precizie manuală", "Rezolvare practică a problemelor", "Orientare spre rezultate concrete", "Răbdare și perseverență", "Independență în muncă"],
    profesii: [
      { nume: "Inginer mecanic", detaliu: "Proiectezi și construiești sisteme mecanice — potrivit pentru mintea ta analitică și abilitatea de a lucra cu componente fizice." },
      { nume: "Electrician / Instalator", detaliu: "Munca practică, vizibilă și necesară — satisfacția de a repara și construi este exact ce cauți." },
      { nume: "Arhitect / Inginer constructor", detaliu: "Combini gândirea spațială cu munca practică pe șantier și proiectare tehnică." },
      { nume: "Pilot / Tehnician aviatic", detaliu: "Mediu tehnic solicitant, cu proceduri clare și satisfacția controlului unui sistem complex." },
      { nume: "Medic chirurg / Stomatolog", detaliu: "Precizia manuală și concentrarea sunt trăsăturile tale — chirurgia îți valorifică exact aceste calități." },
    ],
    domeniu_evitat: "Activitățile pur administrative sau de relații publice, unde contactul fizic cu rezultatul muncii lipsește complet.",
  },
  I: {
    label: "Investigativ-Analitic",
    descriere: "Ești un gânditor profund, curios și metodic. Îți place să analizezi, să cercetezi și să înțelegi fenomenele la nivel fundamental. Te simți în elementul tău atunci când rezolvi probleme complexe și descoperi cum funcționează lucrurile.",
    calitati: ["Gândire analitică și critică", "Curiozitate intelectuală intensă", "Capacitate de cercetare sistematică", "Răbdare pentru detalii și date", "Abilitatea de a sintetiza informații complexe"],
    profesii: [
      { nume: "Medic cercetător / Epidemiolog", detaliu: "Cercetarea medicală îți satisface setea de cunoaștere și îți permite să contribui la soluții care salvează vieți." },
      { nume: "Programator / Data Scientist", detaliu: "Analiza datelor și construirea algoritmilor sunt provocări intelectuale perfecte pentru profilul tău investigativ." },
      { nume: "Biolog / Chimist / Fizician", detaliu: "Știința pură îți oferă tocmai ceea ce cauți: întrebări fără răspuns și satisfacția descoperirii." },
      { nume: "Analist financiar / Economist", detaliu: "Modelele economice complexe și previziunile bazate pe date îți valorifică excelent gândirea analitică." },
      { nume: "Psiholog cercetător", detaliu: "Studiul comportamentului uman din perspectivă științifică combină curiozitatea cu impactul social." },
    ],
    domeniu_evitat: "Vânzările sau activitățile de reprezentare publică unde improvizația și socialul primează în fața analizei.",
  },
  A: {
    label: "Artistic-Creativ",
    descriere: "Ești o persoană cu o imaginație bogată și o nevoie autentică de exprimare. Îți place să creezi, să experimentezi și să dai formă ideilor tale unice. Te simți blocat în medii rigide și înflorești în contexte care îți permit libertatea de exprimare.",
    calitati: ["Creativitate și originalitate nativă", "Sensibilitate estetică dezvoltată", "Gândire divergentă (în afara tiparelor)", "Capacitate de exprimare autentică", "Viziune și simț al detaliului estetic"],
    profesii: [
      { nume: "Designer grafic / UX Designer", detaliu: "Combini arta cu utilitatea — creezi experiențe vizuale care comunică și conving, fără să renunți la creativitate." },
      { nume: "Arhitect", detaliu: "Arhitectura este cea mai palpabilă formă de artă aplicată — creezi spații care influențează oamenii zi de zi." },
      { nume: "Scriitor / Jurnalist / Content creator", detaliu: "Povestirile tale pot mișca oameni și schimba perspective — puterea cuvântului este cel mai potrivit instrument pentru tine." },
      { nume: "Fotograf / Videomaker / Regizor", detaliu: "Viziunea ta artistică transpusă vizual poate construi o carieră în publicitate, film sau media digitală." },
      { nume: "Muzician / Artist / Actor", detaliu: "Dacă pasiunea pentru artă e puternică, exprimarea prin performanță sau creație muzicală este o cale autentică." },
    ],
    domeniu_evitat: "Activitățile strict repetitive, cu proceduri fixe și fără spațiu de exprimare personală — biroul contabil sau linia de asamblare nu sunt pentru tine.",
  },
  S: {
    label: "Social-Relațional",
    descriere: "Ești o persoană orientată spre oameni, empatică și cu o abilitate naturală de a crea conexiuni. Îți găsești sensul în a ajuta, a educa sau a susține pe ceilalți. Ești un bun ascultător și un comunicator eficient care înțelege nevoile celor din jur.",
    calitati: ["Empatie și inteligență emoțională", "Abilități excelente de comunicare", "Răbdare și toleranță", "Capacitate de mediere și rezolvare a conflictelor", "Orientare autentică spre binele celorlalți"],
    profesii: [
      { nume: "Medic de familie / Pediatru", detaliu: "Relația apropiată cu pacienții și impactul direct asupra sănătății lor îți valorifică empatia și dedicarea." },
      { nume: "Psiholog / Psihoterapeut", detaliu: "Sprijini oamenii să se înțeleagă pe sine și să depășească obstacolele — o profesie cu sens profund pentru personalitatea ta." },
      { nume: "Profesor / Educator", detaliu: "Formezi minți și schimbi vieți prin educație — satisfacția de a vedea elevii crescând este incomparabilă pentru un profil social." },
      { nume: "Asistent social / Consilier", detaliu: "Lucrezi cu cei mai vulnerabili oameni din societate — o carieră cu impact direct și vizibil." },
      { nume: "Resurse umane / Recruiter", detaliu: "Conectezi oameni cu oportunități și creezi medii de lucru sănătoase — perfect pentru cine înțelege oamenii." },
    ],
    domeniu_evitat: "Activitățile solitare cu mașini sau date, unde contactul uman lipsește — sunt incompatibile cu nevoia ta de a fi în relație cu oamenii.",
  },
  E: {
    label: "Antreprenorial-Lider",
    descriere: "Ești o persoană energică, ambițioasă și cu o capacitate naturală de a influența și conduce. Îți place să iei inițiativa, să convingi și să construiești lucruri mari. Ești motivat de provocări și de oportunitatea de a-ți pune amprenta vizibilă pe lume.",
    calitati: ["Leadership și capacitate de decizie", "Abilitate de persuasiune și negociere", "Ambiție și dorință de succes", "Gândire strategică", "Curaj de a-și asuma riscuri calculate"],
    profesii: [
      { nume: "Antreprenor / Fondator startup", detaliu: "Construiești ceva al tău, de la zero — cel mai direct drum pentru un lider cu viziune și determinare." },
      { nume: "Manager / Director executiv", detaliu: "Coordonezi echipe, iei decizii strategice și ești responsabil pentru rezultate — exact ce îți place." },
      { nume: "Avocat / Judecător", detaliu: "Argumentezi, convingi și influențezi decizii importante — puterea cuvântului la cel mai înalt nivel." },
      { nume: "Politician / Funcționar public senior", detaliu: "Influențezi politici și decizii care afectează comunități întregi — pentru cine vrea impact la scară mare." },
      { nume: "Director vânzări / Business Development", detaliu: "Negociezi, construiești parteneriate și crești afaceri — adrenalina deal-urilor mari este combustibilul tău." },
    ],
    domeniu_evitat: "Pozițiile strict executive fără autonomie, unde urmezi instrucțiunile altora fără posibilitate de inițiativă.",
  },
  C: {
    label: "Convențional-Organizat",
    descriere: "Ești o persoană metodică, de încredere și cu o capacitate excelentă de a organiza și gestiona informații complexe. Preferi claritatea și structura în locul ambiguității. Ești exact tipul de om pe care orice organizație se poate baza pentru precizie și consecvență.",
    calitati: ["Atenție remarcabilă la detalii", "Organizare și disciplină", "Fiabilitate și consecvență", "Capacitate de gestionare a datelor și informațiilor", "Orientare spre calitate și acuratețe"],
    profesii: [
      { nume: "Contabil / Auditor financiar", detaliu: "Precizia numerelor și structura clară a proceselor financiare sunt perfect adaptate abilităților tale." },
      { nume: "Analist date / Business Analyst", detaliu: "Transformi date brute în informații utile — un rol în creștere care valorifică exactitatea ta." },
      { nume: "Administrator sistem IT", detaliu: "Menții infrastructuri complexe funcționale — un rol tehnic cu proceduri clare și responsabilitate mare." },
      { nume: "Specialist logistică / Supply Chain", detaliu: "Coordonezi fluxuri complexe cu zeci de variabile — satisfacția ordinii perfecte într-un sistem bine pus la punct." },
      { nume: "Jurist / Notar / Funcționar juridic", detaliu: "Documentele, procedurile și prevederile legale exacte sunt teritoriul tău natural." },
    ],
    domeniu_evitat: "Mediile haotice, imprevizibile sau artistice unde regulile se schimbă constant și improvizația este norma.",
  },
};

function calculeazaScoruri(raspunsuri: Record<number, number>): Record<Category, number> {
  const scores: Record<Category, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  for (const [qIdStr, val] of Object.entries(raspunsuri)) {
    const qId = Number(qIdStr);
    const mapping = QUESTION_MAP[qId];
    if (mapping) {
      scores[mapping.cat] += val * mapping.weight;
    }
  }

  // Normalize negative scores to minimum 0
  for (const cat of Object.keys(scores) as Category[]) {
    scores[cat] = Math.max(0, scores[cat]);
  }

  return scores;
}

function genereazaRezultat(raspunsuri: Record<number, number>): string {
  const scores = calculeazaScoruri(raspunsuri);

  const sorted = (Object.entries(scores) as [Category, number][])
    .sort((a, b) => b[1] - a[1]);

  const [top1Cat, top1Score] = sorted[0];
  const [top2Cat, top2Score] = sorted[1];
  const [, , , , lowestCat] = sorted.map(([c]) => c);

  const top1 = PROFILES[top1Cat];
  const top2 = PROFILES[top2Cat];

  const maxPossible = { R: 20, I: 15, A: 10, S: 20, E: 15, C: 15 };
  const top1Pct = Math.round((top1Score / maxPossible[top1Cat]) * 100);
  const top2Pct = Math.round((top2Score / maxPossible[top2Cat]) * 100);

  const lines: string[] = [];

  lines.push(`🧠 PROFILUL TĂU DE PERSONALITATE PROFESIONALĂ\n`);
  lines.push(`Profilul tău dominant este "${top1.label}" (${top1Pct}%), combinat cu trăsături "${top2.label}" (${top2Pct}%). ${top1.descriere}\n`);

  lines.push(`⭐ PUNCTELE TALE FORTE\n`);
  top1.calitati.forEach((c) => lines.push(`• ${c}`));
  lines.push(`• ${top2.calitati[0]}`);
  lines.push(`• ${top2.calitati[2]}\n`);

  lines.push(`🎯 PROFESIILE POTRIVITE PENTRU TINE\n`);
  top1.profesii.forEach((p) => {
    lines.push(`▶ ${p.nume}`);
    lines.push(`   ${p.detaliu}\n`);
  });
  lines.push(`\nDin profilul secundar "${top2.label}", îți pot fi potrivite și:\n`);
  top2.profesii.slice(0, 2).forEach((p) => {
    lines.push(`▶ ${p.nume}`);
    lines.push(`   ${p.detaliu}\n`);
  });

  const lowestProfile = PROFILES[lowestCat];
  lines.push(`\n⚠️ DOMENII PE CARE POATE NU ȚI LE DOREȘTI\n`);
  lines.push(`${lowestProfile.domeniu_evitat} Asta nu înseamnă că nu poți excela în ele — ci că vor necesita mai mult efort de adaptare.\n`);

  lines.push(`\n🚀 PASUL URMĂTOR RECOMANDAT\n`);
  lines.push(`Explorează pe platforma Profesia 360 profesiile din lista de mai sus. Poți simula o zi reală în oricare dintre ele prin experiența VR — fără să riști nimic. Odată ce ai testat 2-3 variante, discută cu un profesionist din domeniu prin sesiunea 1-1 disponibilă în Planul Pro. Alegerea ta profesională merită să fie informată, nu ghicită. Tu ai acum profilul — platforma îți oferă experiența!`);

  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const { raspunsuri } = await req.json() as { rezumat: string; raspunsuri: Record<number, number> };

    if (!raspunsuri || Object.keys(raspunsuri).length < 20) {
      return NextResponse.json({ error: "Date incomplete" }, { status: 400 });
    }

    const rezultat = genereazaRezultat(raspunsuri);
    return NextResponse.json({ rezultat });
  } catch (err) {
    console.error("Eroare chestionar:", err);
    return NextResponse.json({ error: "Eroare la generarea rezultatelor" }, { status: 500 });
  }
}
