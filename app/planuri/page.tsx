import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planuri și prețuri — Profesia 360",
  description: "Alege planul potrivit pentru explorarea ta profesională.",
};

export default function PlanuriPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b", padding: "48px 16px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Prețuri transparente</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, color: "#1e293b" }}>Alege planul tău</h1>
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7 }}>Fără surprize. Fără abonament obligatoriu. Plătești doar ce folosești.</p>
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
            <div key={plan.name} style={{ background: plan.highlight ? "linear-gradient(135deg,#2563eb,#1d4ed8)" : "rgba(255,255,255,0.9)", border: plan.highlight ? "2px solid #2563eb" : "1px solid #bfdbfe", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 4px 16px rgba(37,99,235,0.1)" }}>
              {plan.highlight && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#1d4ed8", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 14px", borderRadius: 20 }}>Recomandat</div>
              )}
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: plan.highlight ? "#fff" : "#1e293b" }}>{plan.name}</div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 28, fontWeight: 800, color: plan.highlight ? "#fff" : "#2563eb" }}>{plan.price}</span>
                {plan.duration && <span style={{ fontSize: 12, color: plan.highlight ? "rgba(255,255,255,0.7)" : "#64748b", marginLeft: 4 }}>{plan.duration}</span>}
              </div>
              {plan.note && <div style={{ fontSize: 11, color: plan.highlight ? "#fde68a" : "#d97706", marginBottom: 12, fontWeight: 500 }}>{plan.note}</div>}
              <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 20px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.85)" : "#475569", display: "flex", gap: 8 }}>
                    <span style={{ color: plan.highlight ? "#93c5fd" : "#2563eb" }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} style={{ background: plan.highlight ? "#fff" : "#2563eb", color: plan.highlight ? "#2563eb" : "#fff", borderRadius: 10, padding: "11px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Institutions */}
        <div style={{ marginTop: 40, background: "rgba(255,255,255,0.9)", border: "1.5px solid #fde68a", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", boxShadow: "0 4px 16px rgba(37,99,235,0.08)" }}>
          <span style={{ fontSize: 28 }}>🏢</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: "#1e293b" }}>Plan instituții & corporate</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>Disponibil la cerere pentru școli, licee și companii.</div>
          </div>
          <Link href="/contact" style={{ background: "#f59e0b", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            Contactați-ne →
          </Link>
        </div>
      </div>
    </main>
  );
}
