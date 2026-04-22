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

const SIM_URL = "https://claude.ai/public/artifacts/8f776cee-0b42-4358-988b-8ba69efc327d";

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
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(79,142,247,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff" }}>▶</div>
            )}
            <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(79,142,247,0.85)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>360° VR</div>
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

export default function ProfesorPage() {
  const [showSim, setShowSim] = useState(false);
  const userPlan: string = "free";

  if (showSim) {
    return (
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 16px 60px", fontFamily: "sans-serif" }}>
        <button
          onClick={() => setShowSim(false)}
          style={{ background: "transparent", border: "1px solid #bfdbfe", color: "#2563eb", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, margin: "20px 0 16px", fontFamily: "inherit" }}
        >
          ← Înapoi
        </button>
        <iframe
          src={SIM_URL}
          style={{ width: "100%", height: "90vh", border: "none", borderRadius: 12, boxShadow: "0 4px 24px rgba(37,99,235,0.12)" }}
          title="Simulare interactivă — O zi ca profesor"
          allow="fullscreen"
        />
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a
            href={SIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}
          >
            Deschide simularea completă →
          </a>
          <p style={{ fontSize: 11, color: "#64748b", marginTop: 8 }}>* Se deschide într-o fereastră nouă dacă iframe-ul e blocat</p>
        </div>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px 80px", fontFamily: "sans-serif", color: "#1e293b", background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh" }}>
      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>
        <Link href="/profesii" style={{ color: "#2563eb", textDecoration: "none" }}>Profesii</Link> / Profesor
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>🎓 Profesor</h1>
      <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 32 }}>Formezi minți, construiești caractere, schimbi vieți.</p>

      {/* Info rapide */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 32 }}>
        {[
          { label: "Salariu mediu", value: "4.000 – 9.000 RON/lună" },
          { label: "Cerere pe piață", value: "Ridicată" },
          { label: "Studii necesare", value: "Licență + DPPD" },
          { label: "Mediu de lucru", value: "Școală / Liceu / Universitate" },
        ].map((item) => (
          <div key={item.label} style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #bfdbfe", borderRadius: 10, padding: "14px 16px", boxShadow: "0 2px 8px rgba(37,99,235,0.07)" }}>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#1e293b" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Simulări */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 10, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>✦ Simulări disponibile · Gratuit</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>

          {/* Simulare AI originală */}
          <div style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 11, color: "#93c5fd", marginBottom: 8, fontWeight: 600 }}>SIMULARE AI</div>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#fff" }}>O zi ca profesor</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 20 }}>9 scenarii reale cu AI. Fiecare decizie are consecințe. Raport de compatibilitate la final.</p>
            <button
              onClick={() => setShowSim(true)}
              style={{ background: "#fff", color: "#2563eb", border: "none", borderRadius: 8, padding: "11px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
            >
              Începe simularea AI →
            </button>
          </div>

          {/* Simulare gamificată */}
          <div style={{ background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)", borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 11, color: "#c4b5fd", marginBottom: 8, fontWeight: 600 }}>SIMULARE GAMIFICATĂ · NOU</div>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#fff" }}>O zi completă 08:00–18:00</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 20 }}>Task-uri în timp real, XP, nivel, skill-uri și feedback personalizat. Fiecare minut contează.</p>
            <a
              href="/profesii/profesor/simulare"
              style={{ display: "inline-block", background: "#fff", color: "#7c3aed", borderRadius: 8, padding: "11px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
            >
              Începe simularea gamificată →
            </a>
          </div>

        </div>
      </div>

      {/* VR Videos */}
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>Experiențe 360° / VR</h2>
      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, marginBottom: 20 }}>Intră în clasă fără să te miști de pe scaun. Trage cu mouse-ul în interiorul video pentru a privi în jur.</p>
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
        <div style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #fde68a", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, boxShadow: "0 4px 16px rgba(37,99,235,0.08)" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4, color: "#1e293b" }}>Deblochează toate experiențele VR</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>Plan Pro — 2 videoclipuri · Plan Premium — toate 3</div>
          </div>
          <Link href="/planuri" style={{ background: "#f59e0b", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Vezi planuri →
          </Link>
        </div>
      )}
    </main>
  );
}
