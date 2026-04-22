"use client";
import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    id: 1,
    icon: "👋",
    title: "Bun venit pe Profesia 360!",
    subtitle: "Îți arătăm cum să începi în 3 pași simpli.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { icon: "🎯", title: "Completezi chestionarul", desc: "20 de întrebări, 5 minute, profilul tău RIASEC complet." },
          { icon: "⚡", title: "Simulezi o zi reală", desc: "Task-uri în timp real, decizii cu consecințe, XP și niveluri." },
          { icon: "🤖", title: "Primești raportul AI", desc: "Compatibilitate, skill-uri, profesii potrivite — personalizat pentru tine." },
        ].map((item) => (
          <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#f8fafc", borderRadius: 12, padding: "14px 16px" }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 3 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    ),
    cta: "Hai să începem →",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Primul pas: descoperă-ți profilul",
    subtitle: "Chestionarul de 5 minute îți arată ce tip de profesionist ești.",
    content: (
      <div>
        <div style={{ background: "linear-gradient(135deg,#dbeafe,#ede9fe)", borderRadius: 16, padding: 24, marginBottom: 16, textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>Chestionarul RIASEC</div>
          <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.65, marginBottom: 16 }}>
            20 de întrebări pe o scară 1-5. La final: profilul tău de personalitate profesională, top 7 profesii potrivite și o simulare recomandată direct.
          </div>
          <Link href="/chestionar" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
            Completează chestionarul →
          </Link>
        </div>
        <div style={{ fontSize: 13, color: "#94a3b8", textAlign: "center" }}>Poți sări acest pas și să mergi direct la simulare</div>
      </div>
    ),
    cta: "Continuu cu simularea →",
  },
  {
    id: 3,
    icon: "🏫",
    title: "Trăiește prima ta zi de muncă",
    subtitle: "Simularea de profesor e disponibilă acum — gratuit, fără înregistrare.",
    content: (
      <div>
        <div style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", borderRadius: 16, padding: 24, marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "#93c5fd", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>DISPONIBIL ACUM · GRATUIT</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 8 }}>O zi completă ca Profesor</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: 16 }}>
            08:00–18:00 simulat. 8 task-uri cu timer. Conflict în clasă, inspecție, părinți dificili. XP, niveluri, badge-uri, raport AI la final.
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["⚡ Task-uri timed", "🏆 Badge-uri", "🤖 Raport AI", "🔥 Mod greu"].map((tag) => (
              <span key={tag} style={{ fontSize: 11, background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 20, padding: "4px 10px" }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#64748b", textAlign: "center" }}>
          Rezultatele se salvează automat — le găsești oricând la <Link href="/rezultatele-mele" style={{ color: "#2563eb" }}>Rezultatele mele</Link>
        </div>
      </div>
    ),
    cta: null,
    finalHref: "/profesii/profesor/simulare",
    finalLabel: "Începe prima simulare →",
  },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#e8f0fe,#dbeafe,#eff6ff)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: 20 }}>
      <div style={{ maxWidth: 520, width: "100%" }}>

        {/* Progress dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
          {STEPS.map((s, i) => (
            <div key={s.id} style={{ width: i === step ? 24 : 8, height: 8, borderRadius: 4, background: i === step ? "#2563eb" : i < step ? "#93c5fd" : "#dbeafe", transition: "all 0.3s" }} />
          ))}
        </div>

        {/* Card */}
        <div style={{ background: "#fff", borderRadius: 24, padding: 32, boxShadow: "0 8px 40px rgba(37,99,235,0.12)", border: "1px solid #dbeafe" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>{current.icon}</div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1e293b", marginBottom: 8, lineHeight: 1.3 }}>{current.title}</h1>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{current.subtitle}</p>
          </div>

          <div style={{ marginBottom: 28 }}>{current.content}</div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {step > 0 && (
              <button onClick={() => setStep((s) => s - 1)} style={{ background: "transparent", border: "1px solid #dbeafe", color: "#64748b", borderRadius: 10, padding: "12px 20px", fontSize: 13, cursor: "pointer", flexShrink: 0 }}>
                ← Înapoi
              </button>
            )}
            {current.cta ? (
              <button onClick={() => setStep((s) => s + 1)} style={{ flex: 1, background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                {current.cta}
              </button>
            ) : (
              <Link href={current.finalHref!} style={{ flex: 1, background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff", borderRadius: 10, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center", display: "block" }}>
                {current.finalLabel}
              </Link>
            )}
          </div>
        </div>

        {/* Skip */}
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Link href="/" style={{ fontSize: 12, color: "#94a3b8", textDecoration: "none" }}>
            Sari peste introducere →
          </Link>
        </div>
      </div>
    </main>
  );
}
