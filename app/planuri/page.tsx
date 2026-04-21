import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planuri și prețuri — Profesia 360",
  description: "Alege planul potrivit pentru explorarea ta profesională.",
};

export default function PlanuriPage() {
  return (
    <main style={{ background: "#0f1117", minHeight: "100vh", fontFamily: "sans-serif", color: "#e8eaf0", padding: "48px 16px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: "#4f8ef7", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Prețuri transparente</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Alege planul tău</h1>
          <p style={{ color: "#8b93a8", fontSize: 15, lineHeight: 1.7 }}>Fără surprize. Fără abonament obligatoriu. Plătești doar ce folosești.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            {
              name: "Basic", price: "Gratuit", duration: "", highlight: false,
              features: ["Descriere profesie", "Preview video", "Task demo", "Acces limitat"],
              cta: "Explorează", href: "/gaseste-ti-directia",
            },
            {
              name: "Preview", price: "69 lei", duration: "/ 15 zile", highlight: false,
              features: ["Experiență VR completă", "Acces complet la profesie", "Feedback detaliat"],
              cta: "Cumpără", href: "/autentificare?plan=preview",
            },
            {
              name: "Pro", price: "149 lei", duration: "/ 15 zile", highlight: true,
              features: ["Tot din Preview", "Sesiuni 1-1 cu expert", "Feedback personalizat extins", "Întrebări directe"],
              cta: "Alege Pro", href: "/autentificare?plan=pro",
              note: "Reducere 20% pentru elevi",
            },
            {
              name: "Premium", price: "179 lei", duration: "/ 15 zile", highlight: false,
              features: ["Tot din Pro", "Acces toate profesiile premium", "Raport carieră complet", "Suport prioritar"],
              cta: "Alege Premium", href: "/autentificare?plan=premium",
            },
            {
              name: "Domeniu Pass", price: "149 lei", duration: "", highlight: false,
              features: ["Toate profesiile dintr-un domeniu", "VR complet pentru toate", "Feedback pe fiecare profesie"],
              cta: "Vreau să explorez un domeniu →", href: "/autentificare?plan=domeniu-pass",
            },
            {
              name: "Domeniu Pro", price: "299 lei", duration: "/ 30 zile", highlight: false,
              features: ["Tot din Domeniu Pass", "O sesiune 1-1 (30 min)", "Feedback extins", "Recomandări experți"],
              cta: "Intru serios în carieră →", href: "/autentificare?plan=domeniu-pro",
            },
          ].map((plan) => (
            <div key={plan.name} style={{ background: plan.highlight ? "linear-gradient(135deg,#1a2a4a,#161b26)" : "#161b26", border: plan.highlight ? "1.5px solid #4f8ef7" : "0.5px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", position: "relative" }}>
              {plan.highlight && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#4f8ef7", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 14px", borderRadius: 20 }}>Recomandat</div>
              )}
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 28, fontWeight: 800 }}>{plan.price}</span>
                {plan.duration && <span style={{ fontSize: 12, color: "#8b93a8", marginLeft: 4 }}>{plan.duration}</span>}
              </div>
              {plan.note && <div style={{ fontSize: 11, color: "#f0a04b", marginBottom: 12, fontWeight: 500 }}>{plan.note}</div>}
              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 20px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: "#8b93a8", display: "flex", gap: 8 }}>
                    <span style={{ color: "#4f8ef7" }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} style={{ background: plan.highlight ? "#4f8ef7" : "rgba(79,142,247,0.12)", color: plan.highlight ? "#fff" : "#4f8ef7", borderRadius: 10, padding: "11px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Institutions */}
        <div style={{ marginTop: 40, background: "#1c2333", border: "1.5px solid rgba(240,160,75,0.35)", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 28 }}>🏢</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Plan instituții & corporate</div>
            <div style={{ fontSize: 13, color: "#8b93a8" }}>Disponibil la cerere pentru școli, licee și companii.</div>
          </div>
          <Link href="/contact" style={{ background: "#f0a04b", color: "#1a1400", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            Contactați-ne →
          </Link>
        </div>
      </div>
    </main>
  );
}
