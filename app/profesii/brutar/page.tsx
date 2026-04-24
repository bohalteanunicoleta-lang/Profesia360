"use client";
import { useState } from "react";
import Link from "next/link";

const VR_VIDEOS = [
  {
    id: "vid1",
    title: "Brutărie artizanală — o dimineață de lucru",
    desc: "Urmărește procesul complet de preparare a pâinii — de la dospit la cuptor, în 360°.",
    youtubeId: "SKBa4dJGCHk",
    thumb: "https://img.youtube.com/vi/SKBa4dJGCHk/maxresdefault.jpg",
    plan: "free",
  },
];

function VRCard({ video, locked }: { video: (typeof VR_VIDEOS)[0]; locked: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ background: "#fff", border: "1px solid #fde68a", borderRadius: 12, overflow: "hidden", position: "relative", marginBottom: 16, boxShadow: "0 2px 8px rgba(180,83,9,0.08)" }}>
      {locked && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,251,235,0.92)", backdropFilter: "blur(6px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, zIndex: 10, borderRadius: 12 }}>
          <span style={{ fontSize: 32 }}>🔒</span>
          <p style={{ color: "#475569", fontSize: 14, textAlign: "center", maxWidth: 240 }}>Disponibil în planul Pro</p>
          <Link href="/planuri" style={{ background: "#b45309", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Upgrade →</Link>
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
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(180,83,9,0.85)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff" }}>▶</div>
            )}
            <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(180,83,9,0.85)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 4 }}>VIDEO 360°</div>
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

export default function BrutarPage() {
  const userPlan: string = "free";

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px 80px", fontFamily: "sans-serif", color: "#1e293b", background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 30%, #fffbeb 100%)", minHeight: "100vh" }}>
      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>
        <Link href="/profesii" style={{ color: "#b45309", textDecoration: "none" }}>Profesii</Link> / Brutar
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>🍞 Brutar</h1>
      <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 32 }}>Transformi făina în artă. Fiecare pâine e rezultatul muncii, răbdării și tehnicii tale.</p>

      {/* Info rapide */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 32 }}>
        {[
          { label: "Salariu mediu", value: "3.000 – 5.500 RON/lună" },
          { label: "Cerere pe piață", value: "Constantă" },
          { label: "Studii necesare", value: "Școală profesională / Ucenicie 2-3 ani" },
          { label: "Mediu de lucru", value: "Brutărie / Patiserie / Industrie alimentară" },
        ].map((item) => (
          <div key={item.label} style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #fde68a", borderRadius: 10, padding: "14px 16px", boxShadow: "0 2px 8px rgba(180,83,9,0.07)" }}>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#1e293b" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Facts */}
      <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #fde68a", borderRadius: 14, padding: "20px 24px", marginBottom: 32 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 12 }}>📌 Știai că...</div>
        {[
          "Brutarii încep lucrul între 02:00 și 04:00 dimineața.",
          "Temperatura medie în brutărie este de 30-40°C.",
          "Un brutar experimentat poate produce 200-300 de pâini pe tură.",
          "Meseria combină chimia alimentară cu abilitatea fizică și creativitatea.",
        ].map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, color: "#475569" }}>
            <span style={{ color: "#b45309", flexShrink: 0 }}>→</span>{f}
          </div>
        ))}
      </div>

      {/* Simulare */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 10, color: "#b45309", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>✦ Simulare disponibilă · Gratuit</div>
        <div style={{ background: "linear-gradient(135deg, #b45309 0%, #92400e 100%)", borderRadius: 16, padding: 24 }}>
          <div style={{ fontSize: 11, color: "#fcd34d", marginBottom: 8, fontWeight: 600 }}>SIMULARE SCENARII</div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#fff" }}>O zi ca Brutar</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: 20 }}>3 scenarii reale de brutărie. Aluaturi, comenzi de urgență, control de calitate. Decizi cum un brutar cu 10 ani experiență.</p>
          <Link
            href="/profesii/brutar/simulare"
            style={{ display: "inline-block", background: "#fff", color: "#b45309", borderRadius: 8, padding: "11px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >
            Începe simularea →
          </Link>
        </div>
      </div>

      {/* VR Videos */}
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>Experiențe 360° / VR</h2>
      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, marginBottom: 20 }}>Intră virtual într-o brutărie reală. Trage cu mouse-ul pentru a privi în jur.</p>
      {VR_VIDEOS.map((v) => (
        <VRCard key={v.id} video={v} locked={false} />
      ))}

      {/* Kuula VR iframe */}
      <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 24, border: "1px solid #fde68a" }}>
        <div style={{ background: "#1e3a5f", padding: "12px 20px" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
            🥽 Tur virtual 360° — Brutărie reală
          </span>
        </div>
        <iframe
          src="https://kuula.co/share/collection/7109Z?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
          style={{ width: "100%", height: 480, border: "none" }}
          allow="xr-spatial-tracking; fullscreen"
          title="Tur VR Brutărie"
        />
        <div style={{ background: "#fffbeb", padding: "10px 16px", fontSize: 13, color: "#92400e" }}>
          💡 Trage cu mouse-ul pentru a explora spațiul în 360°. Funcționează și cu ochelari VR.
        </div>
      </div>

      {userPlan !== "premium" && (
        <div style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #fde68a", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4, color: "#1e293b" }}>Vrei mai mult conținut?</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>Planul Pro deblochează toate simulările și VR-ul premium.</div>
          </div>
          <Link href="/planuri" style={{ background: "#b45309", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Vezi planuri →
          </Link>
        </div>
      )}
    </main>
  );
}
