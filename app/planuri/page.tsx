import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planuri și prețuri — Profesia 360",
  description: "Alege planul potrivit pentru explorarea ta profesională.",
};

const PLANS = [
  {
    key: "gratuit",
    name: "Gratuit",
    price: "0 lei",
    duration: "pentru totdeauna",
    highlight: false,
    badge: null,
    features: [
      { text: "1 simulare completă", ok: true },
      { text: "Chestionar de orientare profesională", ok: true },
      { text: "Preview profesii (descriere + video)", ok: true },
      { text: "Raport AI detaliat", ok: false },
      { text: "Video 360° / VR", ok: false },
      { text: "Badge-uri și streak", ok: false },
      { text: "Profil de compatibilitate carieră", ok: false },
    ],
    cta: "Încearcă gratuit →",
    ctaHref: "/profesii/profesor",
    ctaStyle: { background: "#e8f0fe", color: "#2563eb" },
  },
  {
    key: "pro",
    name: "Pro",
    price: "149 lei",
    duration: "/ 15 zile",
    highlight: true,
    badge: "⭐ Recomandat",
    note: "Reducere 20% pentru elevi",
    features: [
      { text: "Toate simulările disponibile", ok: true },
      { text: "Chestionar de orientare profesională", ok: true },
      { text: "Preview profesii (descriere + video)", ok: true },
      { text: "Raport AI detaliat și personalizat", ok: true },
      { text: "Video 360° / VR complet", ok: true },
      { text: "Badge-uri și streak zilnic", ok: true },
      { text: "Profil de compatibilitate carieră", ok: true },
    ],
    cta: "Vreau Pro →",
    ctaHref: "/autentificare?plan=pro",
    ctaStyle: { background: "#fff", color: "#2563eb" },
  },
  {
    key: "scoala",
    name: "Școală / Instituție",
    price: "Preț la cerere",
    duration: "pentru clase & licee",
    highlight: false,
    badge: null,
    features: [
      { text: "Conturi multiple (elevi + profesori)", ok: true },
      { text: "Dashboard profesor cu rapoarte", ok: true },
      { text: "Rapoarte per clasă și per elev", ok: true },
      { text: "Personalizare conținut", ok: true },
      { text: "Facturare B2B și contract", ok: true },
      { text: "Suport dedicat (chat + telefon)", ok: true },
      { text: "Demo live pentru instituție", ok: true },
    ],
    cta: "Contactați-ne →",
    ctaHref: "/contact",
    ctaStyle: { background: "#f59e0b", color: "#fff" },
  },
];

export default function PlanuriPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b", padding: "56px 16px 80px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Prețuri transparente</div>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 12, color: "#1e293b" }}>Alege planul tău</h1>
          <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Fără surprize. Fără abonament obligatoriu.<br />Plătești doar ce folosești.
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, alignItems: "start" }}>
          {PLANS.map((plan) => (
            <div key={plan.key} style={{
              background: plan.highlight ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" : "rgba(255,255,255,0.95)",
              border: plan.highlight ? "2px solid #2563eb" : plan.key === "scoala" ? "1.5px solid #fde68a" : "1px solid #bfdbfe",
              borderRadius: 20,
              padding: 28,
              position: "relative",
              boxShadow: plan.highlight ? "0 12px 40px rgba(37,99,235,0.25)" : "0 4px 16px rgba(37,99,235,0.08)",
            }}>
              {plan.badge && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#fbbf24", color: "#1a1400", fontSize: 11, fontWeight: 800, padding: "5px 18px", borderRadius: 20, whiteSpace: "nowrap" }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ fontSize: 14, fontWeight: 700, color: plan.highlight ? "#93c5fd" : plan.key === "scoala" ? "#d97706" : "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {plan.name}
              </div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: plan.key === "scoala" ? 22 : 36, fontWeight: 800, color: plan.highlight ? "#fff" : "#1e293b" }}>{plan.price}</span>
              </div>
              <div style={{ fontSize: 12, color: plan.highlight ? "rgba(255,255,255,0.6)" : "#94a3b8", marginBottom: plan.note ? 8 : 24 }}>
                {plan.duration}
              </div>
              {plan.note && (
                <div style={{ fontSize: 12, color: plan.highlight ? "#fde68a" : "#d97706", fontWeight: 600, marginBottom: 20 }}>
                  🎓 {plan.note}
                </div>
              )}

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f) => (
                  <li key={f.text} style={{ fontSize: 13, color: f.ok ? (plan.highlight ? "rgba(255,255,255,0.88)" : "#334155") : "#94a3b8", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, marginTop: 1, color: f.ok ? (plan.highlight ? "#86efac" : "#22c55e") : "#cbd5e1" }}>
                      {f.ok ? "✓" : "✗"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link href={plan.ctaHref} style={{ display: "block", borderRadius: 12, padding: "13px 16px", fontSize: 14, fontWeight: 700, textDecoration: "none", textAlign: "center", ...plan.ctaStyle }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 56, background: "rgba(255,255,255,0.9)", borderRadius: 20, padding: "32px 28px", border: "1px solid #bfdbfe" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", marginBottom: 24 }}>Întrebări frecvente</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { q: "Pot anula oricând?", a: "Planul Pro e o singură plată pe 15 zile — nu e abonament recurent. Nu există taxe ascunse." },
              { q: "Există reducere pentru elevi?", a: "Da — 20% reducere pentru elevi cu card de elev valabil sau email instituțional (@scoala.ro, @liceu.ro)." },
              { q: "Cât durează o simulare?", a: "Între 10 și 20 de minute, în funcție de profesie. Simularea de profesor are 8 scenarii pe 10 ore simulate." },
              { q: "Cum funcționează planul pentru școli?", a: "Contactați-ne prin formularul de contact și vă oferim un demo live + ofertă personalizată în 48 de ore." },
            ].map((item) => (
              <div key={item.q} style={{ borderBottom: "1px solid #e8f0fe", paddingBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 6 }}>{item.q}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 15, color: "#475569", marginBottom: 16 }}>Nu ești sigur/ă ce plan ți se potrivește?</p>
          <Link href="/profesii/profesor" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 100, padding: "14px 36px", fontSize: 15, fontWeight: 700, textDecoration: "none", marginRight: 12 }}>
            Încearcă gratuit →
          </Link>
          <Link href="/contact" style={{ display: "inline-block", background: "transparent", color: "#2563eb", borderRadius: 100, padding: "14px 36px", fontSize: 15, fontWeight: 600, textDecoration: "none", border: "1.5px solid #2563eb" }}>
            Vorbește cu noi
          </Link>
        </div>

      </div>
    </main>
  );
}
