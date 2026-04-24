import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planuri și prețuri — Profesia 360",
  description: "Alege planul potrivit pentru explorarea ta profesională.",
};

const PLANS = [
  {
    key: "basic",
    name: "Basic",
    price: "0",
    unit: "LEI / lună",
    highlight: false,
    badge: null,
    features: [
      { text: "Descriere profesie", ok: true },
      { text: "Preview video", ok: true },
      { text: "Task demo", ok: true },
      { text: "Acces limitat la platformă", ok: true },
      { text: "Simulare completă", ok: false },
      { text: "Raport AI", ok: false },
      { text: "Video 360°", ok: false },
    ],
    cta: "Încearcă gratuit →",
    ctaHref: "/profesii/profesor",
    ctaBg: "#e8f0fe",
    ctaColor: "#2563eb",
  },
  {
    key: "pro",
    name: "Pro",
    price: "119",
    unit: "LEI / 15 zile",
    highlight: false,
    badge: null,
    features: [
      { text: "Experiență VR completă", ok: true },
      { text: "Simulare completă", ok: true },
      { text: "Feedback detaliat", ok: true },
      { text: "Raport AI personalizat", ok: true },
      { text: "Badge-uri și streak", ok: true },
      { text: "Sesiuni 1-1 cu expert", ok: false },
    ],
    cta: "Alege Pro →",
    ctaHref: "/autentificare?plan=pro",
    ctaBg: "#2563eb",
    ctaColor: "#fff",
  },
  {
    key: "premium",
    name: "Premium",
    price: "249",
    unit: "LEI / 15 zile",
    highlight: true,
    badge: "RECOMANDAT",
    features: [
      { text: "Tot din Pro", ok: true },
      { text: "Sesiuni 1-1 cu expert", ok: true },
      { text: "Feedback personalizat extins", ok: true },
      { text: "Întrebări directe către expert", ok: true },
      { text: "Profil de compatibilitate carieră", ok: true },
      { text: "Acces toate profesiile premium", ok: true },
    ],
    cta: "Alege Premium →",
    ctaHref: "/autentificare?plan=premium",
    ctaBg: "#fff",
    ctaColor: "#7c3aed",
  },
  {
    key: "domain-pro",
    name: "Domain Pro",
    price: "499",
    unit: "LEI / 15 zile",
    highlight: false,
    badge: null,
    features: [
      { text: "Toate profesiile dintr-un domeniu", ok: true },
      { text: "VR complet pentru toate", ok: true },
      { text: "Feedback pe fiecare profesie", ok: true },
      { text: "O sesiune 1-1 (30 min)", ok: true },
      { text: "Raport carieră complet", ok: true },
      { text: "Recomandări directe experți", ok: true },
    ],
    cta: "Alege Domain Pro →",
    ctaHref: "/autentificare?plan=domain-pro",
    ctaBg: "#1e293b",
    ctaColor: "#fff",
  },
  {
    key: "institutii",
    name: "Pentru instituții",
    price: "Preț",
    unit: "la cerere",
    highlight: false,
    badge: null,
    features: [
      { text: "Conturi multiple (elevi + profesori)", ok: true },
      { text: "Dashboard profesor", ok: true },
      { text: "Rapoarte per clasă", ok: true },
      { text: "Personalizare conținut", ok: true },
      { text: "Facturare B2B + contract", ok: true },
      { text: "Suport dedicat", ok: true },
    ],
    cta: "Contactați-ne →",
    ctaHref: "/contact",
    ctaBg: "#f59e0b",
    ctaColor: "#fff",
  },
];

export default function PlanuriPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b", padding: "56px 16px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Prețuri transparente</div>
          <h1 style={{ fontSize: 38, fontWeight: 800, marginBottom: 12, color: "#1e293b" }}>Alege planul tău</h1>
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7 }}>
            Fără surprize. Fără abonament obligatoriu. Plătești doar ce folosești.
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16, alignItems: "start" }}>
          {PLANS.map((plan) => (
            <div key={plan.key} style={{
              background: plan.highlight ? "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)" : "rgba(255,255,255,0.95)",
              border: plan.highlight ? "2px solid #7c3aed" : "1px solid #bfdbfe",
              borderRadius: 20,
              padding: 24,
              position: "relative",
              boxShadow: plan.highlight ? "0 12px 40px rgba(124,58,237,0.3)" : "0 4px 16px rgba(37,99,235,0.08)",
            }}>
              {plan.badge && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#7c3aed", color: "#fff", fontSize: 10, fontWeight: 800, padding: "5px 18px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.08em" }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ fontSize: 13, fontWeight: 700, color: plan.highlight ? "#c4b5fd" : "#64748b", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {plan.name}
              </div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: plan.price === "Preț" ? 20 : 34, fontWeight: 800, color: plan.highlight ? "#fff" : "#1e293b" }}>{plan.price}</span>
                <div style={{ fontSize: 11, color: plan.highlight ? "rgba(255,255,255,0.6)" : "#94a3b8", marginTop: 2 }}>{plan.unit}</div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                {plan.features.map((f) => (
                  <li key={f.text} style={{ fontSize: 12, color: f.ok ? (plan.highlight ? "rgba(255,255,255,0.88)" : "#334155") : "#94a3b8", display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, marginTop: 1, color: f.ok ? (plan.highlight ? "#a78bfa" : "#22c55e") : "#cbd5e1" }}>
                      {f.ok ? "✓" : "✗"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link href={plan.ctaHref} style={{ display: "block", borderRadius: 10, padding: "11px 12px", fontSize: 13, fontWeight: 700, textDecoration: "none", textAlign: "center", background: plan.ctaBg, color: plan.ctaColor }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Reducere elevi */}
        <div style={{ marginTop: 28, background: "rgba(255,255,255,0.9)", border: "1.5px solid #bfdbfe", borderRadius: 14, padding: "16px 24px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <span style={{ fontSize: 24 }}>🎓</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 2 }}>Reducere 20% pentru elevi</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>Valabil cu card de elev sau email instituțional (@scoala.ro, @liceu.ro etc.)</div>
          </div>
          <Link href="/autentificare" style={{ background: "#2563eb", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            Verifică eligibilitatea →
          </Link>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 40, background: "rgba(255,255,255,0.9)", borderRadius: 20, padding: "32px 28px", border: "1px solid #bfdbfe" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", marginBottom: 24 }}>Întrebări frecvente</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { q: "Pot anula oricând?", a: "Planurile sunt o singură plată pentru perioada specificată — nu e abonament recurent. Nu există taxe ascunse." },
              { q: "Care e diferența dintre Pro și Premium?", a: "Premium include sesiuni 1-1 cu un expert în carieră, feedback personalizat extins și acces la toate profesiile premium." },
              { q: "Ce înseamnă Domain Pro?", a: "Accesezi toate profesiile dintr-un domeniu (ex: Educație, Medicină, IT) — VR complet, feedback și o sesiune 1-1." },
              { q: "Cum funcționează planul pentru instituții?", a: "Contactați-ne prin formularul de contact și vă oferim un demo live + ofertă personalizată în 48 de ore." },
            ].map((item) => (
              <div key={item.q} style={{ borderBottom: "1px solid #e8f0fe", paddingBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 6 }}>{item.q}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
