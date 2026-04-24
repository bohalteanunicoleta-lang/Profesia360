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
    icon: "🔍",
    price: "0",
    unit: "LEI / lună",
    badge: null,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    borderColor: "#bfdbfe",
    headerBg: "#eff6ff",
    highlight: false,
    features: [
      { text: "Descriere detaliată a profesiei", ok: true },
      { text: "Preview video pentru fiecare profesie", ok: true },
      { text: "1 task demo per profesie", ok: true },
      { text: "Acces la chestionarul de orientare", ok: true },
      { text: "Simulare completă", ok: false },
      { text: "Raport AI personalizat", ok: false },
      { text: "Video 360° / VR", ok: false },
      { text: "Badge-uri și streak", ok: false },
      { text: "Sesiuni 1-1 cu expert", ok: false },
    ],
    cta: "Încearcă gratuit",
    ctaHref: "/profesii/profesor",
    ctaBg: "#2563eb",
    ctaColor: "#fff",
  },
  {
    key: "pro",
    name: "Pro",
    icon: "✉️",
    price: "119",
    unit: "LEI / 15 zile",
    badge: null,
    iconBg: "#ccfbf1",
    iconColor: "#0d9488",
    borderColor: "#99f6e4",
    headerBg: "#f0fdfa",
    highlight: false,
    features: [
      { text: "Tot ce include Basic", ok: true },
      { text: "Simulare completă (toate task-urile)", ok: true },
      { text: "Video 360° și VR complet", ok: true },
      { text: "Raport AI detaliat la final", ok: true },
      { text: "Badge-uri și sistem de streak", ok: true },
      { text: "Profil de compatibilitate carieră", ok: true },
      { text: "Comparație cu profesionistul real", ok: true },
      { text: "Acces la Rezultatele mele", ok: true },
      { text: "Sesiuni 1-1 cu expert", ok: false },
    ],
    cta: "Alege Pro",
    ctaHref: "/autentificare?plan=pro",
    ctaBg: "#0d9488",
    ctaColor: "#fff",
  },
  {
    key: "premium",
    name: "Premium",
    icon: "👤",
    price: "249",
    unit: "LEI / 15 zile",
    badge: "RECOMANDAT",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    borderColor: "#c4b5fd",
    headerBg: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    highlight: true,
    features: [
      { text: "Tot ce include Pro", ok: true },
      { text: "Sesiuni 1-1 cu expert în carieră", ok: true },
      { text: "Feedback personalizat extins", ok: true },
      { text: "Întrebări directe către expert", ok: true },
      { text: "Acces toate profesiile premium", ok: true },
      { text: "Raport carieră complet (PDF)", ok: true },
      { text: "Suport prioritar", ok: true },
      { text: "Acces anticipat la profesii noi", ok: true },
      { text: "Reducere 10% la reînnoire", ok: true },
    ],
    cta: "Alege Premium",
    ctaHref: "/autentificare?plan=premium",
    ctaBg: "#fff",
    ctaColor: "#7c3aed",
  },
  {
    key: "domain-pro",
    name: "Domain Pro",
    icon: "⊞",
    price: "499",
    unit: "LEI / 15 zile",
    badge: null,
    iconBg: "#f1f5f9",
    iconColor: "#1e293b",
    borderColor: "#cbd5e1",
    headerBg: "#f8fafc",
    highlight: false,
    features: [
      { text: "Tot ce include Premium", ok: true },
      { text: "Toate profesiile dintr-un domeniu", ok: true },
      { text: "VR complet pentru fiecare profesie", ok: true },
      { text: "Feedback individualizat per profesie", ok: true },
      { text: "O sesiune 1-1 extinsă (60 min)", ok: true },
      { text: "Raport comparativ între profesii", ok: true },
      { text: "Recomandări directe de la experți", ok: true },
      { text: "Plan de acțiune personalizat", ok: true },
      { text: "Acces 30 zile (nu 15)", ok: true },
    ],
    cta: "Alege Domain Pro",
    ctaHref: "/autentificare?plan=domain-pro",
    ctaBg: "#1e293b",
    ctaColor: "#fff",
  },
  {
    key: "institutii",
    name: "Instituții",
    icon: "🏛️",
    price: "—",
    unit: "preț la cerere",
    badge: null,
    iconBg: "#fce7f3",
    iconColor: "#be185d",
    borderColor: "#fbcfe8",
    headerBg: "#fdf2f8",
    highlight: false,
    features: [
      { text: "Conturi multiple (elevi + profesori)", ok: true },
      { text: "Dashboard profesor cu rapoarte", ok: true },
      { text: "Rapoarte per clasă și per elev", ok: true },
      { text: "Personalizare conținut și branding", ok: true },
      { text: "Facturare B2B și contract", ok: true },
      { text: "Suport dedicat (chat + telefon)", ok: true },
      { text: "Demo live pentru instituție", ok: true },
      { text: "Integrare cu platforma școlii", ok: true },
      { text: "Training pentru profesori", ok: true },
    ],
    cta: "Contactați-ne",
    ctaHref: "/contact",
    ctaBg: "#be185d",
    ctaColor: "#fff",
  },
];

export default function PlanuriPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b", padding: "52px 16px 80px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Prețuri transparente</div>
          <h1 style={{ fontSize: 38, fontWeight: 800, marginBottom: 12, color: "#1e293b" }}>Alege planul tău</h1>
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7 }}>
            Fără surprize. Fără abonament obligatoriu. Plătești doar ce folosești.
          </p>
        </div>

        {/* Cards */}
        {(() => {
          const STYLES: Record<string, { bg: string; border: string; accent: string; styleBadge: string | null }> = {
            basic:      { bg: "#f0f9ff", border: "#0ea5e9", accent: "#0ea5e9", styleBadge: null },
            pro:        { bg: "#f0fdf4", border: "#059669", accent: "#059669", styleBadge: "⭐ Popular" },
            premium:    { bg: "#fdf4ff", border: "#7c3aed", accent: "#7c3aed", styleBadge: "🏆 Recomandat" },
            "domain-pro": { bg: "#fffbeb", border: "#ca8a04", accent: "#ca8a04", styleBadge: null },
            institutii: { bg: "#fff1f2", border: "#be185d", accent: "#be185d", styleBadge: "🏛️ Instituții" },
          };
          return (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, alignItems: "start" }}>
              {PLANS.map((plan) => {
                const s = STYLES[plan.key] ?? STYLES.basic;
                return (
                  <div key={plan.key} style={{ background: s.bg, border: `2px solid ${s.border}`, borderRadius: 16, padding: 24, position: "relative", boxShadow: `0 4px 20px ${s.border}22` }}>
                    {s.styleBadge && (
                      <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: s.accent, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                        {s.styleBadge}
                      </div>
                    )}

                    <div style={{ fontSize: 28, marginBottom: 6 }}>{plan.icon}</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: s.accent, marginBottom: 4 }}>{plan.name}</div>
                    <div style={{ fontSize: plan.price === "—" ? 22 : 36, fontWeight: 800, color: "#1e293b", marginBottom: 2 }}>
                      {plan.price}
                      <span style={{ fontSize: 13, color: "#64748b", fontWeight: 400, marginLeft: 4 }}>{plan.unit}</span>
                    </div>

                    <div style={{ height: 1, background: `${s.border}55`, margin: "16px 0" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {plan.features.map((f) => (
                        <div key={f.text} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: f.ok ? "#334155" : "#94a3b8" }}>
                          <span style={{ color: f.ok ? s.accent : "#d1d5db", fontWeight: 700, flexShrink: 0 }}>{f.ok ? "✓" : "✗"}</span>
                          <span>{f.text}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={plan.ctaHref} style={{ display: "block", width: "100%", background: `linear-gradient(135deg, ${s.accent}, ${s.border})`, color: "#fff", border: "none", borderRadius: 10, padding: "13px 16px", fontSize: 14, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
                      {plan.cta} →
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Reducere elevi & studenți */}
        <div style={{ marginTop: 32, background: "rgba(255,255,255,0.95)", border: "1.5px solid #fde68a", borderRadius: 16, padding: "22px 28px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: 36, flexShrink: 0 }}>🎓</div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1e293b", marginBottom: 6 }}>
                Reducere 10% pentru elevi și studenți
              </div>
              <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, marginBottom: 12 }}>
                Reducerea se aplică la orice plan plătit. Pentru a o primi, trebuie să dovedești statutul de elev sau student cu unul dintre documentele de mai jos:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
                {[
                  { icon: "🪪", text: "Card de elev valabil", sub: "emis de școală/liceu" },
                  { icon: "📧", text: "Email instituțional", sub: "@scoala.ro · @liceu.ro · @edu.ro" },
                  { icon: "📄", text: "Adeverință de student", sub: "emisă în ultimele 6 luni" },
                  { icon: "🎫", text: "Card de student valabil", sub: "ISIC sau emis de universitate" },
                ].map((doc) => (
                  <div key={doc.text} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: "10px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{doc.icon}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{doc.text}</div>
                      <div style={{ fontSize: 11, color: "#92400e" }}>{doc.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/autentificare?discount=student" style={{ background: "#f59e0b", color: "#fff", borderRadius: 10, padding: "12px 22px", fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", alignSelf: "center", flexShrink: 0 }}>
              Aplică reducerea →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 32, background: "rgba(255,255,255,0.95)", borderRadius: 20, padding: "28px 28px", border: "1px solid #bfdbfe" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1e293b", marginBottom: 20 }}>Întrebări frecvente</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { q: "Pot anula oricând?", a: "Planurile sunt o singură plată pentru perioada specificată — nu există abonament recurent sau taxe ascunse." },
              { q: "Care e diferența dintre Pro și Premium?", a: "Premium adaugă sesiuni 1-1 cu un expert în carieră, feedback personalizat extins și acces la toate profesiile premium." },
              { q: "Ce înseamnă Domain Pro?", a: "Accesezi toate profesiile dintr-un domeniu ales (ex: Educație, Medicină, IT) — VR complet, feedback per profesie, sesiune 1-1 extinsă de 60 min și acces 30 zile." },
              { q: "Cum funcționează reducerea pentru elevi/studenți?", a: "Trimiți dovada statutului (card, email sau adeverință) prin formularul de contact și primești un cod de reducere de 10% în 24 ore." },
              { q: "Cum funcționează planul pentru instituții?", a: "Completați formularul de contact și vă oferim un demo live + ofertă personalizată în 48 de ore." },
            ].map((item) => (
              <div key={item.q} style={{ borderBottom: "1px solid #e8f0fe", paddingBottom: 18 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 5 }}>{item.q}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
