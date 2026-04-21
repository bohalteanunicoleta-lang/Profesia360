"use client";
import { useState, useEffect } from "react";

const PASI = [
  {
    nr: "01", titlu: "Creează-ți contul", icon: "👤",
    desc: "Înregistrare rapidă cu email. Alegi planul potrivit pentru tine.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
  },
  {
    nr: "02", titlu: "Alege domeniul", icon: "🔍",
    desc: "Explorezi domeniile disponibile și selectezi profesia care te atrage.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  },
  {
    nr: "03", titlu: "Intră în simulare", icon: "🎮",
    desc: "Trăiești o zi reală în acea profesie prin scenarii interactive.",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80",
  },
  {
    nr: "04", titlu: "Experiența VR 360°", icon: "🥽",
    desc: "Vezi cu ochii tăi cum arată locul de muncă prin video imersiv 360°.",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80",
  },
  {
    nr: "05", titlu: "Primești raportul", icon: "📊",
    desc: "Platforma analizează alegerile tale și îți oferă un raport de compatibilitate.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

export default function PasiSlideshow() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const step = 100 / 40;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % PASI.length);
          return 0;
        }
        return p + step;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [current]);

  const pas = PASI[current];

  return (
    <div style={{ background: "#0f1117", borderRadius: 16, overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.08)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 340 }}>
        {/* Text */}
        <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 11, color: "#4f8ef7", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Pasul {pas.nr} din {PASI.length}
          </div>
          <div style={{ fontSize: 36, marginBottom: 10 }}>{pas.icon}</div>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0", marginBottom: 10 }}>{pas.titlu}</h3>
          <p style={{ fontSize: 14, color: "#8b93a8", lineHeight: 1.75 }}>{pas.desc}</p>

          {/* Progress bar */}
          <div style={{ marginTop: 24, height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#4f8ef7", borderRadius: 2, transition: "width 0.1s linear" }} />
          </div>

          {/* Nav dots + buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
            <button onClick={() => setCurrent((c) => (c - 1 + PASI.length) % PASI.length)}
              style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#8b93a8", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontSize: 13 }}>←</button>
            <div style={{ display: "flex", gap: 6 }}>
              {PASI.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", background: i === current ? "#4f8ef7" : "rgba(255,255,255,0.2)", padding: 0 }} />
              ))}
            </div>
            <button onClick={() => setCurrent((c) => (c + 1) % PASI.length)}
              style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#8b93a8", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontSize: 13 }}>→</button>
          </div>
        </div>

        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={pas.img}
            alt={pas.titlu}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,17,23,0.4), transparent)" }} />
        </div>
      </div>
    </div>
  );
}
