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
    <main style={{
      background: "linear-gradient(135deg, #f8f9ff 0%, #e8ecf8 50%, #d8dff0 100%)",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      color: "#1a1f3a",
    }}>

      {/* Hero */}
      <section style={{ padding: "72px 16px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#5b3fd4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>◉ Cine suntem</div>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: "#1a1f3a" }}>Despre Profesia 360</h1>
          <p style={{ fontSize: 16, color: "#4a5070", lineHeight: 1.8, marginBottom: 32 }}>
            Am pornit dintr-o întrebare simplă: de ce aleg atât de mulți tineri o carieră fără să o fi trăit măcar o zi?
            Profesia 360 este răspunsul nostru — o platformă care îți permite să experimentezi orice meserie înainte să o alegi.
          </p>
          <Link href="/experienta-vr" style={{
            background: "linear-gradient(135deg, #5b3fd4, #7c6df8)",
            color: "#fff", borderRadius: 50, padding: "14px 32px",
            fontWeight: 700, textDecoration: "none", fontSize: 15,
          }}>
            Explorează experiențele →
          </Link>
        </div>
      </section>

      {/* VR banner image */}
      <section style={{ padding: "0 16px 64px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(91,63,212,0.15)", position: "relative", aspectRatio: "16/6" }}>
          <img
            src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80"
            alt="Ochelari VR în educație"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(91,63,212,0.6), rgba(124,109,248,0.3))" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "#fff", fontSize: 22, fontWeight: 700, textAlign: "center", maxWidth: 500, lineHeight: 1.4 }}>
              Tehnologia VR în serviciul orientării profesionale
            </p>
          </div>
        </div>
      </section>

      {/* Misiune + Viziune + Poveste */}
      <section style={{ padding: "0 16px 64px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { icon: "🚀", title: "Misiunea noastră", text: "Să oferim elevilor, studenților și persoanelor aflate în reconversie profesională o experiență practică și interactivă prin care să descopere meserii reale și să facă alegeri informate." },
            { icon: "🌍", title: "Viziunea noastră", text: "Să devenim platforma de referință în orientarea profesională din România — modernă, accesibilă și bazată pe tehnologie VR — contribuind la o alegere mai fericită a carierei." },
            { icon: "📖", title: "Povestea noastră", text: "Profesia 360 a luat naștere în 2024, dintr-o frustrare autentică: prea mulți tineri aleg o facultate sau o meserie bazându-se pe stereotipuri, nu pe experiență reală. Am decis să schimbăm asta." },
          ].map((item) => (
            <div key={item.title} style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(100,120,200,0.15)",
              borderRadius: 16, padding: 28,
            }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#1a1f3a" }}>{item.title}</h2>
              <p style={{ fontSize: 14, color: "#4a5070", lineHeight: 1.75 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Elevi + tineri image */}
      <section style={{ padding: "0 16px 64px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(100,120,200,0.12)", aspectRatio: "4/3" }}>
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80" alt="Elevi" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(100,120,200,0.12)", aspectRatio: "4/3" }}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Tineri" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Valori */}
      <section style={{
        background: "linear-gradient(135deg, #c0c8e0, #a8b4d0, #d0d8f0)",
        padding: "64px 16px",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#1a1f3a" }}>Valorile noastre</h2>
          <p style={{ textAlign: "center", color: "#4a5070", fontSize: 14, marginBottom: 40 }}>Principiile care ghidează fiecare decizie pe care o luăm.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {values.map((v) => (
              <div key={v.title} style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 8px 32px rgba(100,120,200,0.12)",
                borderRadius: 14, padding: "22px 20px", textAlign: "center",
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#1a1f3a" }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "#4a5070", lineHeight: 1.65 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipă */}
      <section style={{ padding: "64px 16px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#1a1f3a" }}>Echipa</h2>
        <p style={{ textAlign: "center", color: "#4a5070", fontSize: 14, marginBottom: 40 }}>Oamenii care construiesc Profesia 360.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {team.map((member) => (
            <div key={member.name} style={{
              background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(100,120,200,0.12)",
              borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 8,
            }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg, #5b3fd4, #7c6df8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "#fff" }}>
                {member.name.charAt(0)}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1f3a" }}>{member.name}</div>
              <div style={{ fontSize: 12, color: "#5b3fd4", fontWeight: 600 }}>{member.role}</div>
              <div style={{ fontSize: 13, color: "#4a5070", lineHeight: 1.65 }}>{member.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 16px 80px", textAlign: "center" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12, color: "#1a1f3a" }}>Gata să explorezi?</h2>
        <p style={{ color: "#4a5070", fontSize: 14, marginBottom: 28 }}>Alătură-te miilor de tineri care au descoperit profesia potrivită cu Profesia 360.</p>
        <Link href="/autentificare" style={{
          background: "linear-gradient(135deg, #5b3fd4, #7c6df8)",
          color: "#fff", borderRadius: 50, padding: "14px 36px",
          fontWeight: 700, textDecoration: "none", fontSize: 15,
        }}>
          Creează cont gratuit →
        </Link>
      </section>
    </main>
  );
}
