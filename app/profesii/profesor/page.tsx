"use client";
import { useState } from "react";
import Link from "next/link";

const VR_VIDEOS = [
  {
    id: "vid1",
    title: "O zi în clasă — Video 360°",
    desc: "Experimentează o lecție reală de matematică filmată în 360°. Poți privi în orice direcție.",
    youtubeId: "2hpvgAkXqGU",
    thumb: "https://img.youtube.com/vi/2hpvgAkXqGU/maxresdefault.jpg",
    plan: "free",
  },
  {
    id: "vid2",
    title: "Sala de clasă — Imersiune completă",
    desc: "Stai în bancă, privește la tablă, simte cum e să fii elev și profesor simultan.",
    youtubeId: "MHIHm-ZhgkE",
    thumb: "https://img.youtube.com/vi/MHIHm-ZhgkE/maxresdefault.jpg",
    plan: "pro",
  },
  {
    id: "vid3",
    title: "Universitate — Amfiteatru 360°",
    desc: "Cum arată să predai în fața a 200 de studenți. Perspectivă din catedră.",
    youtubeId: "BEbmt70L7s4",
    thumb: "https://img.youtube.com/vi/BEbmt70L7s4/maxresdefault.jpg",
    plan: "premium",
  },
];

function VRCard({ video, locked }: { video: (typeof VR_VIDEOS)[0]; locked: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ background: "#161b26", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", position: "relative", marginBottom: 16 }}>
      {locked && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,17,23,0.88)", backdropFilter: "blur(6px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, zIndex: 10, borderRadius: 12 }}>
          <span style={{ fontSize: 32 }}>🔒</span>
          <p style={{ color: "#8b93a8", fontSize: 14, textAlign: "center", maxWidth: 240 }}>Disponibil în planul {video.plan === "pro" ? "Pro" : "Premium"}</p>
          <Link href="/planuri" style={{ background: "#4f8ef7", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Upgrade →</Link>
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
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(79,142,247,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff" }}>▶</div>
            )}
            <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(79,142,247,0.85)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>360° VR</div>
          </div>
        )}
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6, color: "#e8eaf0" }}>{video.title}</div>
        <div style={{ fontSize: 13, color: "#8b93a8", lineHeight: 1.6 }}>{video.desc}</div>
      </div>
    </div>
  );
}

export default function ProfesorPage() {
  const [showSim, setShowSim] = useState(false);
  // TODO: înlocuiește cu planul real al userului din sistemul tău de autentificare
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const userPlan: string = "free"; // "free" | "pro" | "premium"

  if (showSim) {
    return (
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 16px 60px" }}>
        <button
          onClick={() => setShowSim(false)}
          style={{ background: "transparent", border: "0.5px solid rgba(255,255,255,0.15)", color: "#8b93a8", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, margin: "20px 0 16px", fontFamily: "inherit" }}
        >
          ← Înapoi
        </button>
        <iframe
          src="/teacher-simulation.html"
          style={{ width: "100%", height: "90vh", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 12 }}
          title="Simulare Profesor"
        />
      </div>
    );
  }

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px 80px", fontFamily: "sans-serif", color: "#e8eaf0", background: "#0f1117", minHeight: "100vh" }}>
      <div style={{ fontSize: 11, color: "#5a6278", marginBottom: 8 }}>
        <Link href="/profesii" style={{ color: "#5a6278", textDecoration: "none" }}>Profesii</Link> / Profesor
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>🎓 Profesor</h1>
      <p style={{ fontSize: 15, color: "#8b93a8", lineHeight: 1.7, marginBottom: 32 }}>Formezi minți, construiești caractere, schimbi vieți.</p>

      {/* Info rapide */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 32 }}>
        {[
          { label: "Salariu mediu", value: "4.000 – 9.000 RON/lună" },
          { label: "Cerere pe piață", value: "Ridicată" },
          { label: "Studii necesare", value: "Licență + DPPD" },
          { label: "Mediu de lucru", value: "Școală / Liceu / Universitate" },
        ].map((item) => (
          <div key={item.label} style={{ background: "#161b26", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: "#5a6278", marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Simulare */}
      <div style={{ background: "linear-gradient(135deg, #1a2a4a 0%, #161b26 100%)", border: "0.5px solid rgba(79,142,247,0.3)", borderRadius: 16, padding: 28, marginBottom: 32 }}>
        <div style={{ fontSize: 10, color: "#4f8ef7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>✦ Simulare interactivă · Gratuit</div>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>O zi ca profesor</h2>
        <p style={{ fontSize: 14, color: "#8b93a8", lineHeight: 1.7, marginBottom: 20 }}>Trăiește 9 scenarii reale. Fiecare decizie are consecințe. La final primești un raport de compatibilitate cu profesia.</p>
        <button
          onClick={() => setShowSim(true)}
          style={{ background: "#4f8ef7", color: "#fff", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 500, cursor: "pointer" }}
        >
          Începe simularea →
        </button>
      </div>

      {/* VR Videos */}
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Experiențe 360° / VR</h2>
      <p style={{ fontSize: 13, color: "#8b93a8", lineHeight: 1.65, marginBottom: 20 }}>Intră în clasă fără să te miști de pe scaun. Trage cu mouse-ul în interiorul video pentru a privi în jur.</p>
      {VR_VIDEOS.map((v) => (
        <VRCard
          key={v.id}
          video={v}
          locked={
            (v.plan === "pro" && userPlan === "free") ||
            (v.plan === "premium" && userPlan !== "premium")
          }
        />
      ))}

      {userPlan !== "premium" && (
        <div style={{ background: "#1c2333", border: "0.5px solid rgba(240,160,75,0.25)", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>Deblochează toate experiențele VR</div>
            <div style={{ fontSize: 13, color: "#8b93a8" }}>Plan Pro — 2 videoclipuri · Plan Premium — toate 3</div>
          </div>
          <Link href="/planuri" style={{ background: "#f0a04b", color: "#1a1400", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Vezi planuri →
          </Link>
        </div>
      )}
    </main>
  );
}
