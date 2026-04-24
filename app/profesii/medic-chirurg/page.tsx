"use client";
import { useState } from "react";
import Link from "next/link";

const VR_VIDEOS = [
  {
    id: "vid1",
    title: "Sala de operații — perspectivă 360°",
    desc: "Intră virtual într-o sală de operații reală. Explorează instrumentarul, echipa și atmosfera.",
    youtubeId: "R0yg-Vz8LI4",
    thumb: "https://img.youtube.com/vi/R0yg-Vz8LI4/maxresdefault.jpg",
    plan: "free",
  },
  {
    id: "vid2",
    title: "Chirurgie laparoscopică — VR imersiv",
    desc: "Urmărește o procedură chirurgicală reală din perspectiva chirurgului.",
    youtubeId: "p4vO64Y27JE",
    thumb: "https://img.youtube.com/vi/p4vO64Y27JE/maxresdefault.jpg",
    plan: "pro",
  },
];

function VRCard({ video, locked }: { video: (typeof VR_VIDEOS)[0]; locked: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ background: "#fff", border: "1px solid #bfdbfe", borderRadius: 12, overflow: "hidden", position: "relative", marginBottom: 16, boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
      {locked && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(239,246,255,0.92)", backdropFilter: "blur(6px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, zIndex: 10, borderRadius: 12 }}>
          <span style={{ fontSize: 32 }}>🔒</span>
          <p style={{ color: "#475569", fontSize: 14, textAlign: "center", maxWidth: 240 }}>Disponibil în planul {video.plan === "pro" ? "Pro" : "Premium"}</p>
          <Link href="/planuri" style={{ background: "#2563eb", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Upgrade →</Link>
        </div>
      )}
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <div
            onClick={() => !locked && setPlaying(true)}
            style={{ position: "absolute", inset: 0, backgroundImage: `url(${video.thumb})`, backgroundSize: "cover", backgroundPosition: "center", cursor: locked ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {!locked && (
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(220,38,38,0.85)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff" }}>▶</div>
            )}
            <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(220,38,38,0.85)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>360° VR</div>
          </div>
        )}
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6, color: "#1e293b" }}>{video.title}</div>
        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{video.desc}</div>
      </div>
    </div>
  );
}

export default function MedicChirurgPage() {
  const userPlan: string = "free";

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px 80px", fontFamily: "sans-serif", color: "#1e293b", background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 50%, #fff1f2 100%)", minHeight: "100vh" }}>
      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>
        <Link href="/profesii" style={{ color: "#dc2626", textDecoration: "none" }}>Profesii</Link> / Medic Chirurg
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>🔪 Medic Chirurg</h1>
      <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 32 }}>Salvezi vieți în sala de operații. Fiecare decizie contează în secunde.</p>

      {/* Info rapide */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 32 }}>
        {[
          { label: "Salariu mediu", value: "8.000 – 25.000 RON/lună" },
          { label: "Cerere pe piață", value: "Ridicată" },
          { label: "Studii necesare", value: "Medicină 6 ani + Rezidențiat 5-6 ani" },
          { label: "Mediu de lucru", value: "Spital / Clinică / Sala de operații" },
        ].map((item) => (
          <div key={item.label} style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #fecaca", borderRadius: 10, padding: "14px 16px", boxShadow: "0 2px 8px rgba(220,38,38,0.07)" }}>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#1e293b" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Facts */}
      <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #fecaca", borderRadius: 14, padding: "20px 24px", marginBottom: 32 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 12 }}>📌 Știai că...</div>
        {[
          "Un chirurg operează în medie 3-8 ore pe zi.",
          "Rezidențiatul durează 5-6 ani după facultate.",
          "Stresul intraoperator e unul dintre cele mai ridicate din orice profesie.",
          "Satisfacția profesională după o operație reușită e descrisă ca unică.",
        ].map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, color: "#475569" }}>
            <span style={{ color: "#dc2626", flexShrink: 0 }}>→</span>{f}
          </div>
        ))}
      </div>

      {/* Simulare */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 10, color: "#dc2626", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>✦ Simulare disponibilă · Gratuit</div>
        <div style={{ background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)", borderRadius: 16, padding: 24 }}>
          <div style={{ fontSize: 11, color: "#fca5a5", marginBottom: 8, fontWeight: 600 }}>SIMULARE SCENARII</div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#fff" }}>O zi ca Medic Chirurg</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 20 }}>3 scenarii reale din sala de operații. Urgențe, complicații, discuții dificile cu familiile. Fiecare decizie contează.</p>
          <Link
            href="/profesii/medic-chirurg/simulare"
            style={{ display: "inline-block", background: "#fff", color: "#dc2626", borderRadius: 8, padding: "11px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >
            Începe simularea →
          </Link>
        </div>
      </div>

      {/* VR Videos */}
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>Experiențe 360° / VR</h2>
      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, marginBottom: 20 }}>Intră virtual în sala de operații. Trage cu mouse-ul pentru a privi în jur.</p>
      {VR_VIDEOS.map((v) => (
        <VRCard
          key={v.id}
          video={v}
          locked={v.plan === "pro" && userPlan === "free"}
        />
      ))}

      {userPlan !== "premium" && (
        <div style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #fca5a5", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, boxShadow: "0 4px 16px rgba(220,38,38,0.08)" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4, color: "#1e293b" }}>Deblochează toate experiențele VR</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>Plan Pro — video chirurgie laparoscopică complet</div>
          </div>
          <Link href="/planuri" style={{ background: "#dc2626", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Vezi planuri →
          </Link>
        </div>
      )}
    </main>
  );
}
