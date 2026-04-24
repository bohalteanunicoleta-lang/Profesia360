import SimulareScenarii, { Scenariu } from "@/components/SimulareScenarii";

const SCENARII: Scenariu[] = [
  {
    id: "s1",
    titlu: "Aluatul nu crește",
    context: `Ora 04:00. Ai pregătit 80 kg de aluat pentru comenzile de dimineață. La prima verificare observi că aluatul nu a crescut corect — probabil drojdia a fost veche. Clienții vin la 07:00. Ai 3 ore.`,
    obiective: ["rezolvare probleme", "gestionare timp", "decizie sub presiune"],
    optiuni: [
      "Arunci tot și începi de la zero cu drojdie nouă — risc mare de întârziere.",
      "Adaugi drojdie suplimentară și ajustezi temperatura — poți recupera.",
      "Anunți clientul cheie că livrarea va fi cu 1 oră întârziere și continui.",
    ],
    feedbackOptim: "Combinația salvare aluat + comunicare proactivă cu clientul este cea mai profesionistă. Comunicarea transparentă și salvarea materialelor acolo unde e posibil arată maturitate profesională.",
    optimalIndex: 1,
  },
  {
    id: "s2",
    titlu: "Comanda specială de ultimă oră",
    context: `Un restaurant sună la 10:00 și cere 50 de pâini speciale cu semințe pentru o cină de gală în seara aceasta la 18:00. Ai deja programul zilei plin. Șeful tău e absent.`,
    obiective: ["organizare", "prioritizare", "comunicare cu clientul"],
    optiuni: [
      "Refuzi — nu poți compromite calitatea comenzilor existente.",
      "Accepți și reorganizezi programul zilei, lucrând în paralel.",
      "Negociezi: accepți 30 de pâini în loc de 50, livrare la 19:00.",
    ],
    feedbackOptim: "Negocierea demonstrează flexibilitate, onestitate și orientare spre client fără să compromiți calitatea comenzilor existente. E soluția echilibrată.",
    optimalIndex: 2,
  },
  {
    id: "s3",
    titlu: "Controlul de calitate",
    context: `La scoaterea din cuptor, observi că un lot de 40 de pâini are culoarea ușor diferită față de standard — nu arse, dar nu perfecte. Șeful de producție zice 'merge'. Tu nu ești sigur.`,
    obiective: ["standarde de calitate", "asertivitate", "responsabilitate"],
    optiuni: [
      "Ești de acord cu șeful — produsele sunt consumabile.",
      "Insisti că nu corespund standardului și propui un discount pentru lot.",
      "Trimiți lotul ca 'pâine de zi' la preț redus, transparent cu clienții.",
    ],
    feedbackOptim: "Opțiunea 'pâine de zi' menține standardele, nu aruncă marfă și e transparentă cu clienții. Integritatea profesională în industria alimentară e esențială.",
    optimalIndex: 2,
  },
];

export default function BrutarSimularePage() {
  return <SimulareScenarii profesie="Brutar" emoji="🍞" slug="brutar" scenarii={SCENARII} />;
}
