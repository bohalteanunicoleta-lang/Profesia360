import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Despre noi — Profesia 360",
  description: "Povestea, misiunea și echipa din spatele platformei Profesia 360.",
};

const ECHIPA = [
  { nume: "Pârlea Ana Carmen", rol: "Manager Proiect", initiale: "PA", culoare: "#dbeafe" },
  { nume: "Porcaru Șerban Grigore", rol: "Specialist VR", initiale: "PS", culoare: "#ede9fe" },
  { nume: "Oneață Teofana Mădălina", rol: "Specialist VR", initiale: "OT", culoare: "#dcfce7" },
  { nume: "Arteni Mihaela Roxana", rol: "Consilier Carieră", initiale: "AM", culoare: "#fef9c3" },
  { nume: "Ciobanu Matei Constantin", rol: "Specialist Marketing", initiale: "CM", culoare: "#ffe4e6" },
];

const values = [
  { icon: "🎯", title: "Relevanță", desc: "Conținut creat împreună cu profesioniști activi din fiecare domeniu." },
  { icon: "🔬", title: "Inovație", desc: "Folosim VR și AI pentru a face orientarea profesională cu adevărat interactivă." },
  { icon: "🤝", title: "Accesibilitate", desc: "Planul gratuit există pentru că orice adolescent merită să exploreze fără bariere financiare." },
  { icon: "📊", title: "Date, nu impresii", desc: "Recomandările noastre se bazează pe teste validate și feedback personalizat." },
];

export default function DespreNoiPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b" }}>

      {/* Hero */}
      <section style={{ padding: "72px 16px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>◉ Cine suntem</div>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: "#1e293b" }}>Despre Profesia 360</h1>
          <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 32 }}>
            Totul a început în 2026 dintr-o frustrare pe care mulți dintre noi am trăit-o: la 16-17 ani, trebuia să alegem ce vom face cu viața noastră — fără să fi văzut vreodată cu adevărat cum arată acea viață.
          </p>
          <Link href="/experienta-vr" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "#fff", borderRadius: 50, padding: "14px 32px", fontWeight: 700, textDecoration: "none", fontSize: 15 }}>
            Explorează experiențele →
          </Link>
        </div>
      </section>

      {/* Image grid */}
      <section style={{ padding: "0 16px 64px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(37,99,235,0.12)", aspectRatio: "16/9", position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80" alt="Ochelari VR în educație" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(37,99,235,0.5), transparent)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", flex: 1 }}>
              <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80" alt="VR educație" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", flex: 1 }}>
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80" alt="Elevi" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Povestea + Misiune + Viziune */}
      <section style={{ padding: "0 16px 64px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { icon: "📖", title: "Povestea noastră", text: "Totul a început în 2026 dintr-o frustrare pe care mulți dintre noi am trăit-o: la 16-17 ani, trebuia să alegem ce vom face cu viața noastră — fără să fi văzut vreodată cu adevărat cum arată acea viață. Nu o zi, nu o oră, nu un moment real din interiorul unei profesii. Alegerea se făcea pe baza unor brifuri, impresii, și sfaturi date cu intenție bună dar fără substanță. Am construit Profesia 360 ca să schimbăm asta." },
            { icon: "🚀", title: "Misiunea noastră", text: "Să oferim elevilor, studenților și persoanelor aflate în reconversie profesională o experiență practică și interactivă prin care să descopere meserii reale și să facă alegeri informate." },
            { icon: "🌍", title: "Viziunea noastră", text: "Să devenim platforma de referință în orientarea profesională din România — modernă, accesibilă și bazată pe tehnologie VR." },
          ].map((item) => (
            <div key={item.title} style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 4px 20px rgba(37,99,235,0.1)", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#1e293b" }}>{item.title}</h2>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.75 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valori */}
      <section style={{ background: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(37,99,235,0.1)", borderBottom: "1px solid rgba(37,99,235,0.1)", padding: "64px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#1e293b" }}>Valorile noastre</h2>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: 14, marginBottom: 40 }}>Principiile care ghidează fiecare decizie pe care o luăm.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "#fff", boxShadow: "0 4px 16px rgba(37,99,235,0.08)", borderRadius: 14, padding: "22px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipă */}
      <section style={{ padding: "64px 16px 80px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#1e293b" }}>Echipa</h2>
        <p style={{ textAlign: "center", color: "#64748b", fontSize: 14, marginBottom: 40 }}>Oamenii care construiesc Profesia 360.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {ECHIPA.map((member) => (
            <div key={member.nume} style={{ background: member.culoare, border: "1px solid rgba(37,99,235,0.1)", borderRadius: 16, padding: 24, textAlign: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 auto 14px" }}>
                {member.initiale}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>{member.nume}</div>
              <div style={{ fontSize: 12, color: "#2563eb", fontWeight: 600 }}>{member.rol}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 16px 80px", textAlign: "center", background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12, color: "#fff" }}>Gata să explorezi?</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, marginBottom: 28 }}>Alătură-te tinerilor care au descoperit profesia potrivită cu Profesia 360.</p>
        <Link href="/autentificare" style={{ background: "#fff", color: "#2563eb", borderRadius: 50, padding: "14px 36px", fontWeight: 700, textDecoration: "none", fontSize: 15 }}>
          Creează cont gratuit →
        </Link>
      </section>
    </main>
  );
}
