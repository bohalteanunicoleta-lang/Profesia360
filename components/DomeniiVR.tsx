"use client";
import { useState } from "react";
import Link from "next/link";

const DOMENII = [
  {
    key: "medical",
    icon: "🏥",
    title: "Medical & Sănătate",
    desc: "Explorează meserii din sfera medicală — de la medicul generalist la chirurg, asistent medical sau farmacist.",
    profesii: [
      { name: "Medic generalist", available: true, href: "/profesii/medic" },
      { name: "Chirurg", available: true, href: "/profesii/chirurg" },
      { name: "Asistent medical", available: true, href: "/profesii/asistent-medical" },
      { name: "Farmacist", available: false },
      { name: "Stomatolog", available: false },
    ],
  },
  {
    key: "tech",
    icon: "💻",
    title: "Tehnologie & IT",
    desc: "Programator, designer UX, specialist în securitate cibernetică sau data scientist — află care ți se potrivește.",
    profesii: [
      { name: "Programator", available: true, href: "/profesii/programator" },
      { name: "Designer UX/UI", available: true, href: "/profesii/designer-ux" },
      { name: "Data Scientist", available: false },
      { name: "Cyber Security", available: false },
      { name: "DevOps Engineer", available: false },
    ],
  },
  {
    key: "arhitectura",
    icon: "🏛️",
    title: "Arhitectură & Design",
    desc: "Cum arată să proiectezi spații, clădiri și experiențe vizuale? Descoperă în 360°.",
    profesii: [
      { name: "Arhitect", available: true, href: "/profesii/arhitect" },
      { name: "Designer interior", available: false },
      { name: "Urbanist", available: false },
    ],
  },
  {
    key: "educatie",
    icon: "🎓",
    title: "Educație & Formare",
    desc: "Profesor, trainer corporativ sau consilier de orientare — meserii care modelează viitorul.",
    profesii: [
      { name: "Profesor", available: true, href: "/profesii/profesor" },
      { name: "Trainer corporativ", available: false },
      { name: "Consilier orientare", available: false },
    ],
  },
  {
    key: "juridic",
    icon: "⚖️",
    title: "Juridic & Administrație",
    desc: "Avocat, judecător, notar sau funcționar public — lumea dreptului văzută din interior.",
    profesii: [
      { name: "Avocat", available: false },
      { name: "Judecător", available: false },
      { name: "Notar", available: false },
    ],
  },
  {
    key: "gastronomie",
    icon: "👨‍🍳",
    title: "Gastronomie & HoReCa",
    desc: "Chef, manager de restaurant sau sommelier — descoperă industria ospitalității.",
    profesii: [
      { name: "Chef Bucătar", available: false },
      { name: "Manager restaurant", available: false },
      { name: "Sommelier", available: false },
    ],
  },
];

export default function DomeniiVR() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {DOMENII.map((domeniu) => {
        const isOpen = open === domeniu.key;
        const hasAvailable = domeniu.profesii.some((p) => p.available);
        return (
          <div key={domeniu.key} style={{ background: "#161b26", border: isOpen ? "0.5px solid rgba(79,142,247,0.4)" : "0.5px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden", transition: "border-color .2s" }}>
            <button
              onClick={() => setOpen(isOpen ? null : domeniu.key)}
              style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", padding: "18px 20px", display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{domeniu.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e8eaf0", marginBottom: 3 }}>{domeniu.title}</div>
                <div style={{ fontSize: 13, color: "#8b93a8" }}>{domeniu.profesii.filter((p) => p.available).length} profesii disponibile</div>
              </div>
              {!hasAvailable && (
                <span style={{ fontSize: 11, color: "#5a6278", background: "#1c2333", padding: "3px 10px", borderRadius: 20, flexShrink: 0 }}>În curând</span>
              )}
              <span style={{ color: "#8b93a8", fontSize: 18, transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s", flexShrink: 0 }}>▾</span>
            </button>

            {isOpen && (
              <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", padding: "16px 20px 20px" }}>
                <p style={{ fontSize: 13, color: "#8b93a8", lineHeight: 1.7, marginBottom: 16 }}>{domeniu.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
                  {domeniu.profesii.map((prof) =>
                    prof.available && prof.href ? (
                      <Link key={prof.name} href={prof.href} style={{ background: "#1c2333", borderRadius: 10, padding: "10px 14px", textDecoration: "none", display: "block", border: "0.5px solid rgba(79,142,247,0.3)", transition: "border-color .15s" }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#4f8ef7" }}>{prof.name}</div>
                        <div style={{ fontSize: 11, color: "#8b93a8", marginTop: 2 }}>Explorează →</div>
                      </Link>
                    ) : (
                      <div key={prof.name} style={{ background: "#1c2333", borderRadius: 10, padding: "10px 14px", opacity: 0.4 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#e8eaf0" }}>{prof.name}</div>
                        <div style={{ fontSize: 11, color: "#5a6278", marginTop: 2 }}>În curând</div>
                      </div>
                    )
                  )}
                </div>
                {hasAvailable && (
                  <div style={{ marginTop: 16 }}>
                    <Link href="/planuri" style={{ background: "#4f8ef7", color: "#fff", borderRadius: 9, padding: "10px 20px", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
                      Deblochează domeniul →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
