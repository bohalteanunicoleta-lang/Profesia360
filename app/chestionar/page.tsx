"use client";
import { useState } from "react";

const INTREBARI = [
  { id: 1, text: "Îmi place să lucrez cu mâinile și să repar lucruri." },
  { id: 2, text: "Îmi place să creez lucruri precum scrisul, desenul sau cântul." },
  { id: 3, text: "Îmi place să-i ajut pe alții cu problemele lor." },
  { id: 4, text: "Îmi place să-i conduc și să-i organizez pe ceilalți." },
  { id: 5, text: "Îmi place să lucrez cu cifre, foi de calcul și date." },
  { id: 6, text: "Îmi place să folosesc unelte și să lucrez cu materiale." },
  { id: 7, text: "Îmi place să explorez cum funcționează lucrurile." },
  { id: 8, text: "Am o imaginație și o fantezie bogate." },
  { id: 9, text: "Îmi place să predau sau să le explic lucruri altora." },
  { id: 10, text: "Îmi place să conving și să negociez." },
  { id: 11, text: "Prefer să lucrez după reguli și proceduri clare." },
  { id: 12, text: "Sunt interesat de modul în care funcționează mașinile și dispozitivele tehnice." },
  { id: 13, text: "Îmi place să citesc articole și studii de specialitate." },
  { id: 14, text: "Mă conectez ușor cu oameni noi." },
  { id: 15, text: "Sunt minuțios și atent la detalii." },
  { id: 16, text: "Sunt interesat de știință și experimente științifice." },
  { id: 17, text: "Îmi place să-mi asum responsabilitatea pentru deciziile importante." },
  { id: 18, text: "Prefer munca fizică în locul muncii de birou." },
  { id: 19, text: "Îmi place să lucrez ca parte a unei echipe." },
  { id: 20, text: "Nu-mi place să iau decizii în locul altora." },
];

const SCALA = [
  { valoare: 1, eticheta: "Deloc" },
  { valoare: 2, eticheta: "Puțin" },
  { valoare: 3, eticheta: "Moderat" },
  { valoare: 4, eticheta: "Mult" },
  { valoare: 5, eticheta: "Foarte mult" },
];

export default function ChestionarPage() {
  const [raspunsuri, setRaspunsuri] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(false);
  const [rezultat, setRezultat] = useState<string | null>(null);
  const [topCategory, setTopCategory] = useState<string | null>(null);
  const [eroare, setEroare] = useState<string | null>(null);

  const SIM_RECOMMENDATIONS: Record<string, { title: string; desc: string; href: string; color: string; emoji: string }> = {
    S: { title: "Simulare recomandată: Profesor", desc: "Profilul tău Social se potrivește perfect cu rolul de profesor. Trăiește o zi reală în clasă și vezi dacă e vocația ta.", href: "/profesii/profesor/simulare", color: "#2563eb", emoji: "🎓" },
    I: { title: "Simulare recomandată: Profesor (disponibilă acum)", desc: "Profilul tău Investigativ te va pune în fața unor decizii complexe. Testează cum gândești sub presiune.", href: "/profesii/profesor/simulare", color: "#7c3aed", emoji: "🔬" },
    A: { title: "Simulare recomandată: Profesor (disponibilă acum)", desc: "Creativitatea ta va fi testată prin scenarii reale de clasă. Cum faci o lecție captivantă din nimic?", href: "/profesii/profesor/simulare", color: "#db2777", emoji: "🎨" },
    R: { title: "Simulare disponibilă: Profesor", desc: "Deși profilul tău e Practic, simularea de profesor testează abilități transferabile — decizie rapidă și rezolvare de probleme.", href: "/profesii/profesor/simulare", color: "#059669", emoji: "🔧" },
    E: { title: "Simulare disponibilă: Profesor", desc: "Liderul din tine va fi testat — cum gestionezi o clasă, un conflict, un inspector? Skills direct aplicabile.", href: "/profesii/profesor/simulare", color: "#d97706", emoji: "🚀" },
    C: { title: "Simulare disponibilă: Profesor", desc: "Organizarea și structura sunt cheia unui profesor bun. Testează-ți sistemul într-o zi haotică de școală.", href: "/profesii/profesor/simulare", color: "#0891b2", emoji: "📋" },
  };

  const intrebariCompletate = Object.keys(raspunsuri).length;
  const progres = Math.round((intrebariCompletate / INTREBARI.length) * 100);
  const toate_completate = intrebariCompletate === INTREBARI.length;

  const seteazaRaspuns = (idIntrebare: number, valoare: number) => {
    setRaspunsuri((prev) => ({ ...prev, [idIntrebare]: valoare }));
  };

  const trimiteChestionar = async () => {
    if (!toate_completate) return;
    setLoading(true);
    setEroare(null);

    const rezumat = INTREBARI.map(
      (q) => `Întrebarea ${q.id}: "${q.text}" — Răspuns: ${raspunsuri[q.id]}/5`
    ).join("\n");

    try {
      const res = await fetch("/api/chestionar-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rezumat, raspunsuri }),
      });
      const data = await res.json();
      setRezultat(data.rezultat);
      setTopCategory(data.topCategory ?? null);
      try { localStorage.setItem("profesia360_chestionar_xp", "75"); } catch { /* ignore */ }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setEroare("A apărut o eroare. Te rugăm să încerci din nou.");
    }
    setLoading(false);
  };

  if (rezultat) {
    return (
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 80px", fontFamily: "sans-serif" }}>
        <div style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", borderRadius: 20, padding: 32, marginBottom: 32, textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎯</div>
          <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Profilul tău de carieră</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>Bazat pe răspunsurile tale, iată ce am descoperit:</p>
        </div>

        <div style={{ background: "#fff", borderRadius: 16, padding: 32, border: "1px solid #dbeafe", marginBottom: 24, boxShadow: "0 4px 20px rgba(37,99,235,0.08)" }}>
          <div style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.9, whiteSpace: "pre-wrap" }}>{rezultat}</div>
        </div>

        {topCategory && SIM_RECOMMENDATIONS[topCategory] && (() => {
          const rec = SIM_RECOMMENDATIONS[topCategory];
          return (
            <div style={{ background: `linear-gradient(135deg, ${rec.color}18, ${rec.color}08)`, border: `2px solid ${rec.color}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ fontSize: 36, flexShrink: 0 }}>{rec.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: rec.color, fontWeight: 700, marginBottom: 6 }}>Pasul următor recomandat</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1e293b", marginBottom: 6 }}>{rec.title}</div>
                  <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 16 }}>{rec.desc}</div>
                  <a href={rec.href} style={{ display: "inline-block", background: rec.color, color: "#fff", borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
                    Începe simularea acum →
                  </a>
                </div>
              </div>
            </div>
          );
        })()}

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={() => { setRezultat(null); setRaspunsuri({}); setTopCategory(null); }}
            style={{ background: "#e8f0fe", color: "#2563eb", border: "1px solid #2563eb", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
          >
            ← Refă chestionarul
          </button>
          <a href="/experienta-vr" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
            Explorează toate profesiile →
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 80px", fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "inline-block", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", background: "#dbeafe", borderRadius: 20, padding: "4px 14px", marginBottom: 16 }}>
          Chestionar de orientare în carieră
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 700, color: "#1e293b", marginBottom: 12 }}>Descoperă-ți vocația</h1>
        <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
          Răspunde sincer la cele 20 de întrebări de mai jos. La final, AI-ul va analiza profilul tău
          și îți va recomanda profesiile cele mai potrivite pentru tine.
        </p>
      </div>

      {/* Bară progres */}
      <div style={{ background: "#fff", borderRadius: 12, padding: "16px 20px", border: "1px solid #dbeafe", marginBottom: 32, boxShadow: "0 2px 8px rgba(37,99,235,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#475569" }}>{intrebariCompletate} din {INTREBARI.length} întrebări completate</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#2563eb" }}>{progres}%</span>
        </div>
        <div style={{ height: 8, background: "#e8f0fe", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #2563eb, #7c3aed)", width: `${progres}%`, transition: "width 0.4s ease" }} />
        </div>
      </div>

      {/* Întrebări */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {INTREBARI.map((intrebare, index) => {
          const raspunsSelectat = raspunsuri[intrebare.id];
          return (
            <div key={intrebare.id} style={{ background: "#fff", borderRadius: 16, padding: 24, border: raspunsSelectat ? "1.5px solid #2563eb" : "1px solid #dbeafe", boxShadow: raspunsSelectat ? "0 4px 16px rgba(37,99,235,0.12)" : "0 2px 8px rgba(37,99,235,0.04)", transition: "all 0.2s" }}>
              <div style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
                <div style={{ minWidth: 32, height: 32, borderRadius: "50%", background: raspunsSelectat ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: raspunsSelectat ? "#fff" : "#2563eb", transition: "all 0.2s" }}>
                  {raspunsSelectat ? "✓" : index + 1}
                </div>
                <p style={{ fontSize: 15, color: "#1e293b", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{intrebare.text}</p>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, padding: "0 4px" }}>
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>Deloc de acord</span>
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>Total de acord</span>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {SCALA.map(({ valoare, eticheta }) => {
                    const eSelectat = raspunsSelectat === valoare;
                    return (
                      <button
                        key={valoare}
                        onClick={() => seteazaRaspuns(intrebare.id, valoare)}
                        title={eticheta}
                        style={{ flex: 1, padding: "10px 4px", borderRadius: 10, border: "none", cursor: "pointer", transition: "all 0.15s", background: eSelectat ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "#f1f5f9", color: eSelectat ? "#fff" : "#64748b", fontWeight: eSelectat ? 700 : 500, fontSize: 15, transform: eSelectat ? "scale(1.08)" : "scale(1)", boxShadow: eSelectat ? "0 4px 12px rgba(37,99,235,0.3)" : "none" }}
                      >
                        {valoare}
                        <div style={{ fontSize: 9, marginTop: 2, color: eSelectat ? "rgba(255,255,255,0.8)" : "#94a3b8", lineHeight: 1.2 }}>{eticheta}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        {!toate_completate && (
          <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 16 }}>
            Mai ai {INTREBARI.length - intrebariCompletate} întrebări de completat
          </p>
        )}
        <button
          onClick={trimiteChestionar}
          disabled={!toate_completate || loading}
          style={{ background: toate_completate ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "#e2e8f0", color: toate_completate ? "#fff" : "#94a3b8", border: "none", borderRadius: 12, padding: "16px 48px", fontSize: 16, fontWeight: 700, cursor: toate_completate ? "pointer" : "not-allowed", transition: "all 0.2s", boxShadow: toate_completate ? "0 8px 24px rgba(37,99,235,0.3)" : "none" }}
        >
          {loading ? "🤖 Se analizează profilul tău..." : "Descoperă-ți vocația →"}
        </button>
        {eroare && <p style={{ color: "#ef4444", fontSize: 14, marginTop: 16 }}>{eroare}</p>}
      </div>
    </main>
  );
}
