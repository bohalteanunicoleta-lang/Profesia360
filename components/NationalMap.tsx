"use client";
import { useState, useEffect } from "react";

const JUDETE = [
  { name: "Cluj", x: 38, y: 32, count: 47 },
  { name: "București", x: 62, y: 72, count: 89 },
  { name: "Iași", x: 72, y: 28, count: 63 },
  { name: "Timișoara", x: 18, y: 52, count: 41 },
  { name: "Brașov", x: 52, y: 52, count: 55 },
  { name: "Constanța", x: 80, y: 76, count: 38 },
  { name: "Craiova", x: 42, y: 76, count: 29 },
  { name: "Sibiu", x: 42, y: 52, count: 33 },
  { name: "Oradea", x: 22, y: 30, count: 26 },
  { name: "Galați", x: 78, y: 52, count: 21 },
];

const PROFESII_LIVE = [
  "Profesor", "Psiholog", "Medic", "Arhitect", "Programator",
  "Antreprenor", "Designer", "Avocat", "Jurnalist", "Asistent social",
];

interface LiveEvent {
  id: number;
  judet: string;
  profesie: string;
}

export default function NationalMap() {
  const [events, setEvents] = useState<LiveEvent[]>([]);
  const [counter, setCounter] = useState(3247);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    let id = 0;
    const iv = setInterval(() => {
      const judet = JUDETE[Math.floor(Math.random() * JUDETE.length)];
      const profesie = PROFESII_LIVE[Math.floor(Math.random() * PROFESII_LIVE.length)];
      id++;
      const newEvent: LiveEvent = { id, judet: judet.name, profesie };
      setEvents((prev) => [newEvent, ...prev].slice(0, 4));
      setCounter((c) => c + 1);
      setActiveIdx(JUDETE.findIndex((j) => j.name === judet.name));
      setTimeout(() => setActiveIdx(null), 1200);
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)", padding: "80px 16px", overflow: "hidden" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e", animation: "pulse 1.5s infinite" }} />
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>Live — actualizat în timp real</span>
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Ce explorează România azi</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#60a5fa" }}>{counter.toLocaleString("ro-RO")}</span> tineri și-au descoperit vocația
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 32, alignItems: "start" }}>
          {/* Harta SVG simplificată — România schematică */}
          <div style={{ position: "relative", background: "rgba(255,255,255,0.04)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "1.4/1", overflow: "hidden" }}>
            <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}} @keyframes ping{0%{transform:scale(1);opacity:1}100%{transform:scale(2.5);opacity:0}}`}</style>
            {/* Contur schematic România */}
            <svg viewBox="0 0 100 80" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
              <polygon
                points="20,15 35,10 50,8 65,12 78,18 85,28 88,42 82,58 75,68 62,74 48,76 35,72 25,65 18,55 14,42 16,28"
                fill="rgba(37,99,235,0.12)"
                stroke="rgba(96,165,250,0.4)"
                strokeWidth="0.8"
              />
              {JUDETE.map((j, i) => (
                <g key={j.name}>
                  {activeIdx === i && (
                    <circle cx={j.x} cy={j.y} r="4" fill="none" stroke="#22c55e" strokeWidth="0.8" style={{ animation: "ping 1s ease-out" }} />
                  )}
                  <circle
                    cx={j.x} cy={j.y} r={activeIdx === i ? 3 : 2}
                    fill={activeIdx === i ? "#22c55e" : "#60a5fa"}
                    opacity={activeIdx === i ? 1 : 0.7}
                    style={{ transition: "all 0.3s" }}
                  />
                  <text x={j.x + 3} y={j.y + 1} fontSize="3.5" fill="rgba(255,255,255,0.6)">{j.name}</text>
                </g>
              ))}
            </svg>
          </div>

          {/* Feed live */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Activitate recentă</div>
            {events.length === 0 && (
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>Se încarcă...</div>
            )}
            {events.map((e, i) => (
              <div key={e.id} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 14px", opacity: 1 - i * 0.2, transition: "opacity 0.5s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: i === 0 ? "#22c55e" : "#3b82f6", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>{e.judet}</span>
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>explorează: <span style={{ color: "#93c5fd" }}>{e.profesie}</span></div>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: "12px 14px", background: "rgba(37,99,235,0.2)", border: "1px solid rgba(96,165,250,0.3)", borderRadius: 10 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Top profesie azi</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>🎓 Profesor</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>247 simulări în ultimele 24h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
