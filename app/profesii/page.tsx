import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profesii — Profesia 360",
  description: "Explorează profesii din toate domeniile. Simulează o zi reală înainte să alegi.",
};

const DOMENII = [
  {
    id: "educatie",
    nume: "Educație",
    icon: "🎓",
    culoare: "#2563eb",
    profesii: [
      { nume: "Profesor", slug: "profesor", disponibil: true },
      { nume: "Consilier școlar", slug: "consilier-scolar", disponibil: false },
      { nume: "Logoped", slug: "logoped", disponibil: false },
    ],
  },
  {
    id: "medicina",
    nume: "Medicină & Sănătate",
    icon: "🏥",
    culoare: "#dc2626",
    profesii: [
      { nume: "Medic Chirurg", slug: "medic-chirurg", disponibil: true },
      { nume: "Psiholog", slug: "psiholog", disponibil: false },
      { nume: "Asistent medical", slug: "asistent-medical", disponibil: false },
      { nume: "Farmacist", slug: "farmacist", disponibil: false },
    ],
  },
  {
    id: "tehnologie",
    nume: "Tehnologie & IT",
    icon: "💻",
    culoare: "#7c3aed",
    profesii: [
      { nume: "Programator", slug: "programator", disponibil: false },
      { nume: "Data Scientist", slug: "data-scientist", disponibil: false },
      { nume: "Designer UX", slug: "designer-ux", disponibil: false },
    ],
  },
  {
    id: "juridic",
    nume: "Juridic & Social",
    icon: "⚖️",
    culoare: "#d97706",
    profesii: [
      { nume: "Avocat", slug: "avocat", disponibil: false },
      { nume: "Judecător", slug: "judecator", disponibil: false },
      { nume: "Asistent social", slug: "asistent-social", disponibil: false },
    ],
  },
  {
    id: "creativ",
    nume: "Creativ & Design",
    icon: "🎨",
    culoare: "#059669",
    profesii: [
      { nume: "Designer grafic", slug: "designer-grafic", disponibil: false },
      { nume: "Fotograf", slug: "fotograf", disponibil: false },
      { nume: "Regizor", slug: "regizor", disponibil: false },
    ],
  },
  {
    id: "alimentar",
    nume: "Alimentar & HoReCa",
    icon: "🍞",
    culoare: "#b45309",
    profesii: [
      { nume: "Brutar", slug: "brutar", disponibil: true },
      { nume: "Bucătar Chef", slug: "bucatar", disponibil: false },
      { nume: "Cofetar", slug: "cofetar", disponibil: false },
    ],
  },
  {
    id: "business",
    nume: "Business & Antreprenoriat",
    icon: "💼",
    culoare: "#0891b2",
    profesii: [
      { nume: "Antreprenor", slug: "antreprenor", disponibil: false },
      { nume: "Manager", slug: "manager", disponibil: false },
      { nume: "Consultant", slug: "consultant", disponibil: false },
    ],
  },
];

export default function ProfesiiPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b", padding: "48px 16px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Explorează profesiile</div>
          <h1 style={{ fontSize: 38, fontWeight: 800, marginBottom: 12, color: "#1e293b" }}>Alege profesia. Trăiește-o.</h1>
          <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Simulează o zi reală de muncă în orice profesie — gratuit, fără înregistrare. Descoperă dacă e vocația ta înainte să te angajezi pe 40 de ani.
          </p>
        </div>

        {/* Domenii */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {DOMENII.map((domeniu) => (
            <div key={domeniu.id}>
              {/* Titlu domeniu */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${domeniu.culoare}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  {domeniu.icon}
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1e293b" }}>{domeniu.nume}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    {domeniu.profesii.filter((p) => p.disponibil).length > 0
                      ? `${domeniu.profesii.filter((p) => p.disponibil).length} disponibil${domeniu.profesii.filter((p) => p.disponibil).length > 1 ? "e" : "ă"}`
                      : "Simulări în pregătire"}
                  </div>
                </div>
                <div style={{ flex: 1, height: 1, background: `${domeniu.culoare}22`, marginLeft: 8 }} />
              </div>

              {/* Profesii */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {domeniu.profesii.map((p) =>
                  p.disponibil ? (
                    <Link
                      key={p.slug}
                      href={`/profesii/${p.slug}`}
                      style={{
                        display: "block", background: "#fff", borderRadius: 12,
                        padding: "16px", border: `1px solid ${domeniu.culoare}33`,
                        textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 6 }}>{p.nume}</div>
                      <div style={{ fontSize: 11, color: domeniu.culoare, fontWeight: 700 }}>Explorează →</div>
                    </Link>
                  ) : (
                    <div
                      key={p.slug}
                      style={{
                        background: "#f8fafc", borderRadius: 12, padding: "16px",
                        border: "1px solid #e2e8f0", opacity: 0.75, position: "relative",
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#94a3b8", marginBottom: 6 }}>{p.nume}</div>
                      <div style={{
                        display: "inline-block", fontSize: 10, background: "#fef3c7",
                        color: "#d97706", borderRadius: 4, padding: "2px 8px", fontWeight: 700,
                      }}>În curând</div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div style={{ marginTop: 52, background: "rgba(255,255,255,0.9)", borderRadius: 20, padding: "32px 28px", border: "1px solid #bfdbfe", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
            Vrei să adăugăm o profesie nouă? Spune-ne.
          </div>
          <Link href="/contact" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
            Sugerează o profesie →
          </Link>
        </div>

      </div>
    </main>
  );
}
