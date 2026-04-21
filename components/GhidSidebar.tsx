"use client";
import { useState } from "react";

interface Anunt {
  firma: string; rol: string; locatie: string; data: string; domeniu: string; color: string;
  descriere: string; cerinte: string[]; beneficii: string[]; contact: string; telefon: string; website: string;
}

const ANUNTURI: Anunt[] = [
  {
    firma: "Google România", rol: "Junior Developer", locatie: "București", data: "Acum 2 zile", domeniu: "IT", color: "#2563eb",
    descriere: "Căutăm un Junior Developer pasionat de tehnologie pentru echipa noastră din București. Vei lucra la produse folosite de milioane de utilizatori.",
    cerinte: ["Cunoștințe JavaScript/Python", "Înțelegerea algoritmilor de bază", "Limbă engleză nivel B2"],
    beneficii: ["Salariu competitiv 5.000–7.000 RON net", "Tichete de masă", "Asigurare medicală privată", "Lucru hibrid"],
    contact: "careers.romania@google.com", telefon: "+40 21 300 1000", website: "https://careers.google.com",
  },
  {
    firma: "BCR", rol: "Analist Financiar Junior", locatie: "Cluj-Napoca", data: "Acum 3 zile", domeniu: "Finanțe", color: "#059669",
    descriere: "BCR caută absolvenți de economie sau matematică pentru departamentul de analiză financiară. Program de training inclus.",
    cerinte: ["Licență Economie/Matematică/Informatică", "Excel avansat", "Atenție la detalii"],
    beneficii: ["Pachet salarial 4.500–6.000 RON", "Program de mentorat", "Bonusuri de performanță"],
    contact: "recrutare@bcr.ro", telefon: "+40 800 801 227", website: "https://www.bcr.ro/cariere",
  },
  {
    firma: "Vodafone România", rol: "Marketing Specialist", locatie: "Remote", data: "Acum 5 zile", domeniu: "Marketing", color: "#f97316",
    descriere: "Poziție 100% remote pentru un specialist în marketing digital cu experiență în campanii social media și Google Ads.",
    cerinte: ["2+ ani experiență marketing digital", "Google Ads certificat", "Creativitate și proactivitate"],
    beneficii: ["Remote complet", "Laptop și telefon de serviciu", "Abonament Vodafone gratuit"],
    contact: "hr@vodafone.ro", telefon: "+40 372 000 000", website: "https://www.vodafone.ro/cariere",
  },
  {
    firma: "Kaufland România", rol: "Store Manager Trainee", locatie: "Multiple orașe", data: "Acum 1 săptămână", domeniu: "Retail", color: "#a855f7",
    descriere: "Program intensiv de 12 luni pentru viitorii manageri de magazin. Rotație prin toate departamentele, mentoring și formare completă.",
    cerinte: ["Licență orice specializare", "Orientare spre rezultate", "Disponibilitate mobilitate geografică"],
    beneficii: ["Salariu 5.500 RON în perioada de training", "Cazare asigurată dacă e necesară relocarea", "Creștere rapidă în carieră"],
    contact: "recrutare@kaufland.ro", telefon: "+40 21 302 9500", website: "https://www.kaufland.ro/cariera",
  },
  {
    firma: "Deloitte România", rol: "Consultant Junior", locatie: "București", data: "Acum 1 săptămână", domeniu: "Consultanță", color: "#06b6d4",
    descriere: "Alătură-te echipei Deloitte și lucrează la proiecte de transformare digitală pentru clienți din industrii diverse.",
    cerinte: ["Master în curs sau finalizat", "Limbă engleză avansat", "Gândire analitică"],
    beneficii: ["Pachet salarial competitiv", "Training internațional", "Rețea profesională globală"],
    contact: "recruiting@deloitte.ro", telefon: "+40 21 222 1661", website: "https://www2.deloitte.com/ro/careers",
  },
];

const ARTICOLE = [
  { titlu: "Top 10 profesii ale viitorului în România", sursa: "Forbes RO", data: "15 Ian 2025", link: "https://www.forbes.ro" },
  { titlu: "Cum arată piața muncii în 2025", sursa: "Ziarul Financiar", data: "12 Ian 2025", link: "https://www.zf.ro" },
  { titlu: "Skills-urile cel mai cerute de angajatori", sursa: "eJobs", data: "10 Ian 2025", link: "https://www.ejobs.ro" },
  { titlu: "Remote work vs. birou — ce preferă angajatorii", sursa: "BusinessMagazin", data: "8 Ian 2025", link: "https://www.businessmagazin.ro" },
  { titlu: "Profesiile viitorului: AI, Green Energy și Biotech", sursa: "HRManager", data: "5 Ian 2025", link: "https://www.hrmanager.ro" },
];

export default function GhidSidebar() {
  const [selected, setSelected] = useState<Anunt | null>(null);

  return (
    <>
      <aside style={{ width: "100%", maxWidth: 300, flexShrink: 0 }}>
        <div style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Anunturi */}
          <div style={{ background: "#fff", border: "1px solid #bfdbfe", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: "#eff6ff", borderBottom: "1px solid #bfdbfe", padding: "12px 16px" }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1e3a5f", margin: 0 }}>🔍 Anunțuri recrutare</h3>
            </div>
            <div style={{ maxHeight: 340, overflowY: "auto" }}>
              {ANUNTURI.map((a) => (
                <div key={a.firma + a.rol} style={{ padding: "10px 16px", borderBottom: "1px solid #f0f9ff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6, marginBottom: 3 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{a.rol}</div>
                    <span style={{ fontSize: 10, fontWeight: 600, color: a.color, background: `${a.color}18`, padding: "2px 7px", borderRadius: 10, whiteSpace: "nowrap" }}>{a.domeniu}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b" }}>{a.firma} · {a.locatie}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
                    <span style={{ fontSize: 10, color: "#94a3b8" }}>{a.data}</span>
                    <button onClick={() => setSelected(a)}
                      style={{ fontSize: 11, color: "#2563eb", fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                      Vezi →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articole */}
          <div style={{ background: "#fff", border: "1px solid #bfdbfe", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: "#eff6ff", borderBottom: "1px solid #bfdbfe", padding: "12px 16px" }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1e3a5f", margin: 0 }}>📰 Articole recente</h3>
            </div>
            <div style={{ maxHeight: 280, overflowY: "auto" }}>
              {ARTICOLE.map((art) => (
                <a key={art.titlu} href={art.link} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block", padding: "10px 16px", borderBottom: "1px solid #f0f9ff" }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#1e3a5f", lineHeight: 1.4, marginBottom: 4 }}>{art.titlu}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#94a3b8" }}>
                    <span>{art.sursa}</span><span>{art.data}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Modal detalii job */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: "#fff", borderRadius: 16, padding: 28, maxWidth: 500, width: "100%", maxHeight: "85vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
              <div>
                <div style={{ fontSize: 11, color: "#64748b", marginBottom: 3 }}>{selected.domeniu}</div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>{selected.rol}</h2>
                <div style={{ fontSize: 14, color: "#2563eb", fontWeight: 600 }}>{selected.firma} · {selected.locatie}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#64748b", alignSelf: "flex-start" }}>×</button>
            </div>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, marginBottom: 16 }}>{selected.descriere}</p>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: "#1e293b" }}>Cerințe:</div>
              {selected.cerinte.map((c, i) => <div key={i} style={{ fontSize: 13, color: "#475569", marginBottom: 4 }}>✓ {c}</div>)}
            </div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: "#1e293b" }}>Beneficii:</div>
              {selected.beneficii.map((b, i) => <div key={i} style={{ fontSize: 13, color: "#475569", marginBottom: 4 }}>★ {b}</div>)}
            </div>
            <div style={{ background: "#eff6ff", borderRadius: 10, padding: 14, marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: "#1e293b" }}>Contact:</div>
              <div style={{ fontSize: 13, color: "#2563eb" }}>📧 {selected.contact}</div>
              <div style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>📞 {selected.telefon}</div>
            </div>
            <a href={selected.website} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#2563eb", color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Aplică pe site-ul companiei →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
