import SimulareScenarii, { Scenariu } from "@/components/SimulareScenarii";

const SCENARII: Scenariu[] = [
  {
    id: "s1",
    titlu: "Urgența de gardă",
    context: `Ora 02:30. Ești de gardă. Sosește un pacient de 45 de ani cu dureri abdominale acute. Analizele sugerează apendicită acută, posibil perforată. Familia e în așteptare, extrem de agitată. Trebuie să decizi în 5 minute.`,
    obiective: ["decizie sub presiune", "comunicare cu familia", "protocol medical"],
    optiuni: [
      "Operezi imediat fără investigații suplimentare — fiecare minut contează.",
      "Comanzi un CT rapid (30 min) pentru confirmare înainte de operație.",
      "Consulți colegul de gardă înainte să decizi.",
    ],
    feedbackOptim: "Decizia 2 este optimă în absența semnelor de perforație confirmată. Protocoalele medicale prioritizează confirmarea diagnosticului când timpul permite.",
    optimalIndex: 1,
  },
  {
    id: "s2",
    titlu: "Complicație intraoperatorie",
    context: `Ești în mijlocul unei operații de 3 ore. Pacient de 60 de ani. Apare o sângerare neașteptată. Tensiunea scade brusc. Echipa te privește. Anesteziologul anunță că pacientul e instabil.`,
    obiective: ["rezistență la stres", "leadership", "gândire rapidă"],
    optiuni: [
      "Controlezi sângerarea direct — rămâi calm și continui.",
      "Ceri transfuzie și timp pentru stabilizare, oprești temporar.",
      "Închizi temporar și muți pacientul la ATI.",
    ],
    feedbackOptim: "Calmul sub presiune și comunicarea clară cu echipa sunt definitorii pentru un chirurg bun. Controlul sângerării concomitent cu solicitarea transfuziei reprezintă practica standard.",
    optimalIndex: 0,
  },
  {
    id: "s3",
    titlu: "Discuția dificilă",
    context: `Operația a mers bine tehnic, dar pacientul are o recuperare mai lentă decât normal. Familia solicită o întâlnire urgentă. Fiul pacientului e agresiv verbal: 'Ați greșit ceva!'`,
    obiective: ["empatie", "comunicare", "gestionarea conflictului"],
    optiuni: [
      "Explici tehnic ce s-a întâmplat, cu termeni medicali exacti.",
      "Asculți mai întâi, validezi emoțiile, apoi explici clar și simplu.",
      "Redirectezi familia către medicul șef pentru astfel de discuții.",
    ],
    feedbackOptim: "Comunicarea empatică cu familiile este o competență distinctă față de abilitatea chirurgicală — și la fel de importantă. Ascultarea activă dezescaladează conflictul.",
    optimalIndex: 1,
  },
];

export default function MedicChirurgSimularePage() {
  return <SimulareScenarii profesie="Medic Chirurg" emoji="🔪" slug="medic-chirurg" scenarii={SCENARII} />;
}
