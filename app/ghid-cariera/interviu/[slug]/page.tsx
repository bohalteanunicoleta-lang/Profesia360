import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const CONTINUT_INTERVIU = [
  {
    slug: "imbracare-interviu",
    titlu: "Cum să te îmbraci la interviu",
    youtubeId: "l6SJAaRHMcA",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    intro: "Prima impresie contează enorm. Îmbrăcămintea potrivită îți poate crește șansele de angajare cu până la 33%.",
    sfaturi: [
      "Alege haine curate, călcate și potrivite cu cultura companiei",
      "Evită culorile stridente sau accesoriile exagerate",
      "Îmbracă-te cu un nivel deasupra dress code-ului companiei",
      "Pantofii trebuie să fie curați și în ton cu ținuta",
      "Parfumul să fie discret — mai puțin e mai mult",
      "Testează ținuta cu o zi înainte să te asiguri că te simți confortabil",
    ],
    categorii: [
      { tip: "Business Formal", desc: "Costum/taior, cămașă, cravată (bărbați). Potrivit pentru bănci, firme de avocatură, consultanță.", culoare: "#2563eb" },
      { tip: "Business Casual", desc: "Pantaloni eleganți, bluză/cămașă fără cravată. Potrivit pentru IT, marketing, startupuri.", culoare: "#7c3aed" },
      { tip: "Smart Casual", desc: "Jeans fără rupturi, bluză elegantă. Potrivit pentru companii creative, agenții.", culoare: "#059669" },
    ],
  },
  {
    slug: "postura-interviu",
    titlu: "Postura și limbajul corpului",
    youtubeId: "HG68Ymazo18",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    intro: "55% din comunicare e nonverbală. Postura ta transmite încredere sau nesiguranță înainte să spui primul cuvânt.",
    sfaturi: [
      "Stai drept dar relaxat — nu rigid",
      "Menține contact vizual 60-70% din timp",
      "Dă mâna ferm dar nu zdrobitor",
      "Nu îți încrucișa brațele — transmite defensivitate",
      "Înclină-te ușor înainte când asculți — arată interes",
      "Zâmbește natural la începutul și sfârșitul interviului",
      "Evită să te foiești sau să bați cu degetele în masă",
    ],
    categorii: [
      { tip: "Intrarea în cameră", desc: "Pași fermi, zâmbet, strângere de mână fermă, contact vizual direct.", culoare: "#2563eb" },
      { tip: "În timpul interviului", desc: "Spate drept, mâini vizibile pe masă, gesturi moderate și naturale.", culoare: "#7c3aed" },
      { tip: "La final", desc: "Mulțumire sinceră, strângere de mână, ieșire calmă și sigură.", culoare: "#059669" },
    ],
  },
  {
    slug: "interviu-online",
    titlu: "Cum să te prezinți la interviu online",
    youtubeId: "6EbCMhHFBNM",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80",
    intro: "Interviul online are reguli proprii. Pregătirea tehnică și vizuală este la fel de importantă ca răspunsurile tale.",
    sfaturi: [
      "Testează camera, microfonul și internetul cu 30 minute înainte",
      "Iluminare din față — nu din spate (te face siluetă)",
      "Background curat sau virtual profesional",
      "Privește în cameră, nu în ecran — simulezi contactul vizual",
      "Îmbracă-te complet profesional, nu doar de la brâu în sus",
      "Închide notificările și pune telefonul pe silențios",
      "Ai un plan B: număr de telefon de rezervă dacă cade conexiunea",
    ],
    categorii: [
      { tip: "Setup tehnic", desc: "Laptop/PC la nivelul ochilor, fundal neutru, lumină față.", culoare: "#2563eb" },
      { tip: "Comunicare", desc: "Vorbește clar și mai rar decât normal, lasă pauze pentru lag.", culoare: "#7c3aed" },
      { tip: "Înainte de call", desc: "Log in cu 5 minute înainte, testează audio/video, pregătește CV-ul pe ecran.", culoare: "#059669" },
    ],
  },
  {
    slug: "prezentare-interviu",
    titlu: "Cum răspunzi la 'Spune-mi despre tine'",
    youtubeId: "MrvJDNOPRgA",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    intro: "Această întrebare apare la 95% din interviuri. Răspunsul ideal durează 90-120 secunde și urmează structura Prezent-Trecut-Viitor.",
    sfaturi: [
      "Structura: Cine ești acum → Ce ai făcut → De ce ești interesat de acest rol",
      "Nu reciti CV-ul — adaugă context și personalitate",
      "Menționează 2-3 realizări concrete cu cifre dacă e posibil",
      "Leagă finalul de motivul pentru care aplici la această companie",
      "Exersează până sună natural, nu memorat",
      "Durată ideală: 90 de secunde",
    ],
    categorii: [
      { tip: "Prezent", desc: "Cine ești acum, ce rol ocupi sau ce studiezi.", culoare: "#2563eb" },
      { tip: "Trecut", desc: "Experiențele relevante, realizările cheie.", culoare: "#7c3aed" },
      { tip: "Viitor", desc: "De ce această companie, ce vrei să construiești.", culoare: "#059669" },
    ],
  },
];

export async function generateStaticParams() {
  return CONTINUT_INTERVIU.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = CONTINUT_INTERVIU.find((c) => c.slug === params.slug);
  return { title: item ? `${item.titlu} — Ghid Carieră` : "Ghid interviu" };
}

export default function IntervuDetailPage({ params }: { params: { slug: string } }) {
  const item = CONTINUT_INTERVIU.find((c) => c.slug === params.slug);
  if (!item) notFound();

  return (
    <main style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", minHeight: "100vh", fontFamily: "sans-serif", color: "#1e293b" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px 80px" }}>
        <Link href="/ghid-cariera" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#2563eb", textDecoration: "none", fontSize: 14, fontWeight: 500, marginBottom: 24 }}>
          ← Înapoi la Ghid Carieră
        </Link>

        {/* Hero image */}
        <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 28, boxShadow: "0 8px 32px rgba(37,99,235,0.15)", aspectRatio: "16/6", position: "relative" }}>
          <img src={item.img} alt={item.titlu} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(37,99,235,0.7), transparent)" }} />
          <h1 style={{ position: "absolute", bottom: 20, left: 24, right: 24, color: "#fff", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, lineHeight: 1.3 }}>{item.titlu}</h1>
        </div>

        <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 28, background: "#fff", borderRadius: 12, padding: 20, borderLeft: "4px solid #2563eb" }}>
          {item.intro}
        </p>

        {/* Video */}
        <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 32, boxShadow: "0 4px 16px rgba(37,99,235,0.12)" }}>
          <div style={{ background: "#1e3a5f", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#60a5fa" }}>▶</span>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Video tutorial — {item.titlu}</span>
          </div>
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen title={item.titlu} />
          </div>
        </div>

        {/* Sfaturi */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 24, marginBottom: 24, boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#1e3a5f" }}>Sfaturi esențiale</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {item.sfaturi.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#dbeafe", color: "#2563eb", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorii */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {item.categorii.map((cat) => (
            <div key={cat.tip} style={{ background: "#fff", borderRadius: 12, padding: 18, borderTop: `3px solid ${cat.culoare}`, boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: cat.culoare, marginBottom: 8 }}>{cat.tip}</div>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, margin: 0 }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
