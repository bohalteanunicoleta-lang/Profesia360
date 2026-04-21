import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Despre noi — Profesia 360",
  description: "Povestea, misiunea și echipa din spatele platformei Profesia 360.",
};

const team = [
  { name: "Nicoleta Bohalteanu", role: "Fondator & CEO", desc: "Specialist în orientare profesională cu 10+ ani de experiență." },
  { name: "Alex Ionescu", role: "Lead Developer", desc: "Arhitectul tehnic al platformei VR interactive." },
  { name: "Maria Constantin", role: "Content & Carieră", desc: "Expertă în curriculum și design educațional." },
];

const values = [
  { icon: "🎯", title: "Relevanță", desc: "Conținut creat împreună cu profesioniști activi din fiecare domeniu." },
  { icon: "🔬", title: "Inovație", desc: "Folosim VR și AI pentru a face orientarea profesională cu adevărat interactivă." },
  { icon: "🤝", title: "Accesibilitate", desc: "Planul gratuit există pentru că orice adolescent merită să exploreze fără bariere financiare." },
  { icon: "📊", title: "Date, nu impresii", desc: "Recomandările noastre se bazează pe teste validate și feedback personalizat." },
];

export default function DespreNoiPage() {
  return (
    <main style={{ background: "#0f1117", minHeight: "100vh", fontFamily: "sans-serif", color: "#e8eaf0" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a1f35 0%, #161b26 100%)", padding: "64px 16px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#4f8ef7", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>◉ Cine suntem</div>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>Despre Profesia 360</h1>
          <p style={{ fontSize: 16, color: "#8b93a8", lineHeight: 1.8, marginBottom: 32 }}>
            Am pornit dintr-o întrebare simplă: de ce aleg atât de mulți tineri o carieră fără să o fi trăit măcar o zi?
            Profesia 360 este răspunsul nostru — o platformă care îți permite să experimentezi orice meserie înainte să o alegi.
          </p>
          <Link href="/experienta-vr" style={{ background: "#4f8ef7", color: "#fff", borderRadius: 50, padding: "14px 32px", fontWeight: 700, textDecoration: "none", fontSize: 15 }}>
            Explorează experiențele →
          </Link>
        </div>
      </section>

      {/* Misiune + Viziune */}
      <section style={{ padding: "64px 16px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            {
              icon: "🚀", title: "Misiunea noastră",
              text: "Să oferim elevilor, studenților și persoanelor aflate în reconversie profesională o experiență practică și interactivă prin care să descopere meserii reale, să primească feedback personalizat și să facă alegeri informate pentru cariera lor.",
            },
            {
              icon: "🌍", title: "Viziunea noastră",
              text: "Să devenim platforma de referință în orientarea profesională din România — modernă, accesibilă și bazată pe tehnologie VR — contribuind la o alegere mai sigură și mai fericită a carierei pentru fiecare tânăr.",
            },
            {
              icon: "📖", title: "Povestea noastră",
              text: "Profesia 360 a luat naștere în 2024, dintr-o frustrare autentică: prea mulți tineri aleg o facultate sau o meserie bazându-se pe stereotipuri, nu pe experiență reală. Am decis să schimbăm asta.",
            },
          ].map((item) => (
            <div key={item.title} style={{ background: "#161b26", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#e8eaf0" }}>{item.title}</h2>
              <p style={{ fontSize: 14, color: "#8b93a8", lineHeight: 1.75 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valori */}
      <section style={{ background: "#161b26", borderTop: "0.5px solid rgba(255,255,255,0.06)", borderBottom: "0.5px solid rgba(255,255,255,0.06)", padding: "64px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Valorile noastre</h2>
          <p style={{ textAlign: "center", color: "#8b93a8", fontSize: 14, marginBottom: 40 }}>Principiile care ghidează fiecare decizie pe care o luăm.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: "#1c2333", borderRadius: 14, padding: "22px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "#8b93a8", lineHeight: 1.65 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipă */}
      <section style={{ padding: "64px 16px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Echipa</h2>
        <p style={{ textAlign: "center", color: "#8b93a8", fontSize: 14, marginBottom: 40 }}>Oamenii care construiesc Profesia 360.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {team.map((member) => (
            <div key={member.name} style={{ background: "#161b26", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#4f8ef7,#a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "#fff" }}>
                {member.name.charAt(0)}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{member.name}</div>
              <div style={{ fontSize: 12, color: "#4f8ef7", fontWeight: 500 }}>{member.role}</div>
              <div style={{ fontSize: 13, color: "#8b93a8", lineHeight: 1.65 }}>{member.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 16px 80px", textAlign: "center" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>Gata să explorezi?</h2>
        <p style={{ color: "#8b93a8", fontSize: 14, marginBottom: 28 }}>Alătură-te miilor de tineri care au descoperit profesia potrivită cu Profesia 360.</p>
        <Link href="/autentificare" style={{ background: "#4f8ef7", color: "#fff", borderRadius: 50, padding: "14px 36px", fontWeight: 700, textDecoration: "none", fontSize: 15 }}>
          Creează cont gratuit →
        </Link>
      </section>
    </main>
  );
}
