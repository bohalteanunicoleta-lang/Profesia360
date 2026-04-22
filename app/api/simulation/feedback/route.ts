import { NextRequest, NextResponse } from "next/server";
import { TASKS } from "@/lib/simulation/data";
import { SimulationState } from "@/lib/simulation/types";
import { getSimulationScore } from "@/lib/simulation/engine";

const SKILL_NAMES: Record<string, string> = {
  disciplina: "Disciplina",
  empatie: "Empatia",
  organizare: "Organizarea",
  comunicare: "Comunicarea",
  rezilienta: "Reziliența",
};

function generateFeedback(state: SimulationState): string {
  const { totalScore, grade, label } = getSimulationScore(state);

  const optimal: { taskTitle: string; choiceText: string; consequence: string }[] = [];
  const suboptimal: { taskTitle: string; choiceText: string; consequence: string }[] = [];

  for (const taskId of state.completedTasks) {
    const task = TASKS.find((t) => t.id === taskId);
    if (!task) continue;
    const choiceId = state.choicesMade[taskId];
    const choice = task.choices.find((c) => c.id === choiceId);
    if (!choice) continue;
    const entry = {
      taskTitle: task.title,
      choiceText: choice.text,
      consequence: choice.longTermConsequence,
    };
    if (choice.isOptimal) optimal.push(entry);
    else suboptimal.push(entry);
  }

  const skills = state.skills;
  const sortedSkills = Object.entries(skills).sort((a, b) => b[1] - a[1]);
  const topSkill = sortedSkills[0];
  const weakestSkill = sortedSkills[sortedSkills.length - 1];
  const topSkillName = SKILL_NAMES[topSkill[0]] ?? topSkill[0];
  const weakSkillName = SKILL_NAMES[weakestSkill[0]] ?? weakestSkill[0];

  const lines: string[] = [];

  // ── 1. Ce ai făcut bine ──────────────────────────────────────────
  lines.push("✅ CE AI FĂCUT BINE\n");
  if (optimal.length > 0) {
    optimal.slice(0, 3).forEach(({ taskTitle, choiceText, consequence }) => {
      lines.push(`• La „${taskTitle}", ai ales: „${choiceText}"`);
      lines.push(`  → Pe termen lung: ${consequence}\n`);
    });
  } else {
    lines.push(
      "• Ai finalizat simularea — ceea ce arată determinare și curiozitate față de profesie.",
    );
    lines.push(
      "• Ai explorat situații reale complexe: conflicte, inspecție, părinți dificili.\n",
    );
  }
  if (topSkill[1] > 60) {
    lines.push(
      `• Skill-ul tău dominant este **${topSkillName}** (${topSkill[1]}/100) — un punct forte real în activitatea didactică.\n`,
    );
  }

  // ── 2. Zone de îmbunătățire ──────────────────────────────────────
  lines.push("🔧 ZONE DE ÎMBUNĂTĂȚIRE\n");
  if (suboptimal.length > 0) {
    suboptimal.slice(0, 2).forEach(({ taskTitle, consequence }) => {
      lines.push(`• La „${taskTitle}", decizia ta ar putea duce la: ${consequence}`);
      lines.push(
        `  → Sfat: analizează mai atent impactul pe termen lung înainte de a reacționa.\n`,
      );
    });
  }
  if (weakestSkill[1] < 55) {
    lines.push(
      `• **${weakSkillName}** (${weakestSkill[1]}/100) este zona care necesită cel mai mult lucru.`,
    );
    const advice: Record<string, string> = {
      disciplina:
        "Exersează stabilirea clară a regulilor la începutul orei și consecvența în aplicarea lor.",
      empatie:
        "Încearcă să te pui în locul elevilor înainte de a reacționa — fiecare comportament are o cauză.",
      organizare:
        "Planifică-ți ziua în blocuri de timp cu buffer pentru situații neprevăzute.",
      comunicare:
        "Ascultarea activă și reformularea sunt tehnici simple pe care le poți practica zilnic.",
      rezilienta:
        "Tehnicile de mindfulness și prioritizarea task-urilor te ajută să rămâi echilibrat sub presiune.",
    };
    lines.push(`  → ${advice[weakestSkill[0]] ?? "Lucrează la această abilitate prin practică zilnică."}\n`);
  }

  // ── 3. Profilul tău ──────────────────────────────────────────────
  lines.push("👤 PROFILUL TĂU CA POTENȚIAL PROFESOR\n");

  const profiles: Record<string, string> = {
    A: `Ești tipul de profesor care lasă urmă. Ai echilibrul rar între autoritate și empatie, gestionezi crizele cu calm și gândești strategic. Stilul tău de predare e adaptat, nu rigid — schimbi planul când situația o cere, fără a pierde din vedere obiectivele.`,
    B: `Ești un profesor solid, de bază. Știi să gestionezi situațiile standard și ai instincte bune în momente de presiune. Cu experiență, vei deveni unul dintre profesorii de referință ai școlii. Focusul tău acum ar trebui să fie pe consistență.`,
    C: `Ești la începutul drumului — ceea ce e perfect normal. Ai voința de a face față situațiilor dificile, dar reacțiile tale sunt uneori prea impulsive sau prea rezervate. Cu mentorat și practică deliberată, poți progresa semnificativ.`,
    D: `Această zi a fost dificilă pentru tine — și asta e o informație valoroasă. Profesia de profesor presupune un anumit tip de rezistență emoțională și decizii rapide în condiții de stres. Merită să reflectezi dacă această cale ți se potrivește sau dacă ai nevoie de mai mult timp de pregătire.`,
  };
  lines.push(profiles[grade] + "\n");

  // ── 4. Potrivirea cu profesia ────────────────────────────────────
  lines.push("🎯 POTRIVIREA CU PROFESIA\n");
  const scoreLabel =
    totalScore >= 85
      ? `Scorul tău de ${totalScore}/100 (calificativ ${grade}) arată că ai potențialul real de a deveni un profesor excepțional. Continuă pe acest drum.`
      : totalScore >= 70
      ? `Cu un scor de ${totalScore}/100, ești pe drumul cel bun. Profesia te poate împlini dacă investești în dezvoltarea personală constantă.`
      : totalScore >= 55
      ? `Scorul de ${totalScore}/100 sugerează că ai fundamente, dar mai ai de lucrat la aspecte esențiale ale meseriei. Nu te descuraja — progresul vine cu practică.`
      : `Un scor de ${totalScore}/100 poate indica fie că profesia nu ți se potrivește complet, fie că ai nevoie de mai multă expunere și pregătire. Explorează și alte domenii pe platformă înainte de a decide.`;
  lines.push(scoreLabel + "\n");

  // ── 5. Resurse recomandate ───────────────────────────────────────
  lines.push("📚 RESURSE RECOMANDATE\n");
  lines.push(
    "• \"The First Days of School\" de Harry Wong — manualul practic al managementului clasei",
  );
  lines.push(
    "• Cursurile CCD (Casa Corpului Didactic) din județul tău — formare continuă acreditată",
  );
  lines.push(
    "• Platforma Profesia 360: explorează sesiunile 1-1 cu profesori mentori din Plan Pro →\n",
  );

  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const { state }: { state: SimulationState } = await req.json();

    if (!state) {
      return NextResponse.json({ error: "Date lipsă" }, { status: 400 });
    }

    const { totalScore, grade, label } = getSimulationScore(state);
    const feedback = generateFeedback(state);

    return NextResponse.json({ feedback, totalScore, grade, label });
  } catch (err) {
    console.error("Eroare feedback simulare:", err);
    return NextResponse.json(
      { error: "Eroare la generarea feedback-ului" },
      { status: 500 },
    );
  }
}
