import { NextRequest, NextResponse } from "next/server";

// Pre-written responses indexed by scenario keywords + choice keywords.
// Each entry is an array — one is picked pseudo-randomly based on the request.
const RESPONSES: { scenarioKeys: string[]; choiceKeys: string[]; texts: string[] }[] = [
  // Elev deranjează ora
  {
    scenarioKeys: ["deranjează", "zgomot", "disciplină", "comportament", "tulbură"],
    choiceKeys: ["ignori", "continui", "lași"],
    texts: [
      "Ceilalți elevi au observat. Nu e prima oară când aleg să trec cu vederea, și nici nu va fi ultima greșeală pe care o fac.",
      "Băiatul din bancă a zâmbit. Știe că poate continua. Uneori mă întreb dacă liniștea asta e câștigată sau doar amânată.",
    ],
  },
  {
    scenarioKeys: ["deranjează", "zgomot", "disciplină", "comportament", "tulbură"],
    choiceKeys: ["oprești", "intervii", "mustrare", "atenționezi"],
    texts: [
      "Clasa s-a liniștit pentru câteva minute. Elevul s-a înroșit, dar n-a mai scos un cuvânt până la final.",
      "Doamne, iar eu. De câte ori pe zi mai trebuie să fac asta? — gândea profesorul, reluând lecția cu voce egală.",
    ],
  },
  {
    scenarioKeys: ["deranjează", "zgomot", "disciplină", "comportament", "tulbură"],
    choiceKeys: ["trimiți", "director", "elimini"],
    texts: [
      "Elevul a ieșit trântind ușa. Jumătate din clasă s-a uitat după el, cealaltă jumătate la mine.",
      "Nu m-am simțit victorios. M-am simțit obosit.",
    ],
  },

  // Notă / evaluare
  {
    scenarioKeys: ["notă", "evaluare", "test", "lucrare", "examen", "corectezi"],
    choiceKeys: ["notă mică", "scăzut", "patru", "trei", "doi"],
    texts: [
      "Știam că va veni cu părinții. Dar nota reflecta ce știa, nu ce speram că va ști.",
      "Mi-a spus că nu e corect. Am deschis lucrarea și i-am arătat, punct cu punct, unde a greșit. A tăcut.",
    ],
  },
  {
    scenarioKeys: ["notă", "evaluare", "test", "lucrare", "examen", "corectezi"],
    choiceKeys: ["mai mare", "rotunjești", "înduri", "bonus"],
    texts: [
      "Am rotunjit în sus. Poate data viitoare va fi mai pregătit dacă simte că are ceva de apărat.",
      "Nu știu dacă am făcut bine. Dar în acel moment, nota aia conta mai mult pentru el decât pentru mine.",
    ],
  },

  // Părinți
  {
    scenarioKeys: ["părinți", "familie", "mamă", "tată", "ședință"],
    choiceKeys: ["explici", "discuți", "calmezi", "asculți"],
    texts: [
      "Mama a plâns. Nu m-am așteptat la asta. Am continuat, dar vocea mi s-a moale puțin.",
      "Tatăl a spus că el a fost la fel la școală și a reușit în viață. Am zâmbit și am notat ce trebuia să notez.",
    ],
  },
  {
    scenarioKeys: ["părinți", "familie", "mamă", "tată", "ședință"],
    choiceKeys: ["fermi", "refuzi", "menții"],
    texts: [
      "A ieșit supărat. Directoarea m-a întrebat a doua zi cum a mers. I-am spus: normal.",
      "Uneori a fi profesor înseamnă să spui lucruri pe care nimeni nu vrea să le audă.",
    ],
  },

  // Elev în dificultate
  {
    scenarioKeys: ["elev", "problemă", "dificultate", "rămâne", "ajutor", "corijent", "corigent"],
    choiceKeys: ["ajuți", "rămâi", "explici", "extra"],
    texts: [
      "A înțeles în 10 minute ce nu înțelesese în două săptămâni. Uneori problema nu e elevul.",
      "A mulțumit la final cu o jumătate de voce. Atât mi-a trebuit.",
    ],
  },
  {
    scenarioKeys: ["elev", "problemă", "dificultate", "rămâne", "ajutor", "corijent", "corigent"],
    choiceKeys: ["trimiți", "meditații", "alții"],
    texts: [
      "Sper că va găsi pe cineva care să aibă răbdarea pe care eu n-o mai am azi.",
      "Nu e vina mea că programa e prea mare pentru timpul pe care îl am. Sau poate e?",
    ],
  },

  // Colegi / administrație
  {
    scenarioKeys: ["coleg", "director", "cancelarie", "administrație", "ședință", "profesori"],
    choiceKeys: ["exprimi", "spui", "propui", "susții"],
    texts: [
      "Nimeni n-a aplaudat, dar nimeni n-a contrazis. Asta contează uneori mai mult.",
      "Am vorbit și m-am simțit că vorbesc într-o cameră goală. Dar am vorbit.",
    ],
  },
  {
    scenarioKeys: ["coleg", "director", "cancelarie", "administrație", "ședință", "profesori"],
    choiceKeys: ["taci", "eviți", "lași", "accepți"],
    texts: [
      "Am tăcut. Nu pentru că n-aveam dreptate, ci pentru că eram prea obosit să lupt.",
      "Directoarea a continuat. Eu mi-am notat în agendă ce ar fi trebuit să spun.",
    ],
  },

  // Motivație / lecție
  {
    scenarioKeys: ["lecție", "oră", "predai", "materie", "curs", "motivezi"],
    choiceKeys: ["interactive", "joc", "altfel", "nou", "practic"],
    texts: [
      "A fost prima oră din săptămână când i-am văzut ridicând mâna fără să fie întrebați.",
      "Ceva s-a aprins în clasă. Nu știu ce anume, dar mi-a plăcut.",
    ],
  },
  {
    scenarioKeys: ["lecție", "oră", "predai", "materie", "curs", "motivezi"],
    choiceKeys: ["clasic", "manual", "normal", "standard"],
    texts: [
      "Programa e programa. Nu am inventat roata azi, dar am acoperit ce trebuia.",
      "Jumătate din clasă nota, jumătate se uita pe geam. O zi normală.",
    ],
  },
];

// Fallback responses when no match is found
const FALLBACKS = [
  "Uneori nu există răspunsul corect. Există doar decizia pe care o iei și consecințele pe care le porți.",
  "Am ieșit din clasă fără să știu dacă am făcut bine. Asta e meseria asta — rareori ai certitudini.",
  "Elevul a plecat fără să spună nimic. Poate a înțeles. Poate nu. Voi afla data viitoare.",
  "Nu e ușor să fii profesor. Dar în momentele astea înțelegi de ce ai ales profesia asta.",
  "Clasa s-a uitat la mine. Am continuat. Ce altceva puteam face?",
  "Fiecare decizie pe care o iei în fața clasei devine o lecție — pentru elevi, dar și pentru tine.",
];

function pickResponse(texts: string[], seed: number): string {
  return texts[seed % texts.length];
}

function findResponse(scenarioTitle: string, choiceLabel: string, immediate: string): string {
  const haystack = `${scenarioTitle} ${choiceLabel} ${immediate}`.toLowerCase();
  const seed = haystack.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);

  for (const entry of RESPONSES) {
    const scenarioMatch = entry.scenarioKeys.some((k) => haystack.includes(k));
    const choiceMatch = entry.choiceKeys.some((k) => haystack.includes(k));
    if (scenarioMatch && choiceMatch) return pickResponse(entry.texts, seed);
  }
  // Try scenario-only match
  for (const entry of RESPONSES) {
    const scenarioMatch = entry.scenarioKeys.some((k) => haystack.includes(k));
    if (scenarioMatch) return pickResponse(entry.texts, seed);
  }
  return pickResponse(FALLBACKS, seed);
}

export async function POST(req: NextRequest) {
  try {
    const { scenarioTitle, choiceLabel, immediate } = await req.json();
    if (!scenarioTitle || !choiceLabel || !immediate) {
      return NextResponse.json({ error: "Câmpuri lipsă" }, { status: 400 });
    }
    const text = findResponse(scenarioTitle, choiceLabel, immediate);
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json({ error: "Eroare server" }, { status: 500 });
  }
}
