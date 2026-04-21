import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ghid Carieră — Profesia 360",
  description: "Sfaturi practice pentru construirea CV-ului, pregătirea interviului și avansarea în carieră.",
};

const cvTips = [
  { title: "Structura CV-ului", desc: "Informații de contact, rezumat profesional, experiență, educație, abilități — în această ordine." },
  { title: "Rezumatul profesional", desc: "2-3 propoziții care descriu cine ești, ce experiență ai și ce obiective profesionale urmărești." },
  { title: "Experiența relevantă", desc: "Listează realizările concrete, nu doar responsabilitățile. Folosește verbe active și cifre când e posibil." },
  { title: "Abilitățile tehnice", desc: "Specifică nivelul de competență pentru fiecare abilitate: începător, intermediar, avansat." },
  { title: "Personalizează CV-ul", desc: "Adaptează CV-ul pentru fiecare job aplicat, evidențiind skills-urile relevante pentru acel rol." },
  { title: "Design curat", desc: "Font lizibil (11-12pt), spațiere adecvată, maxim 2 pagini. Evită culorile stridente sau fonturile decorative." },
];

const interviewTips = [
  { title: "Cercetează compania", desc: "Cunoaște produsele, cultura și misiunea companiei înainte de interviu." },
  { title: "Tehnica STAR", desc: "Situație, Task, Acțiune, Rezultat — structură pentru răspunsuri la întrebări comportamentale." },
  { title: "Pregătește întrebări", desc: "Pregătește 3-5 întrebări inteligente pentru intervievator despre rol și echipă." },
  { title: "Limbajul corpului", desc: "Contact vizual, postură dreaptă, zâmbet natural și ton calm transmit încredere." },
  { title: "Vorbește despre realizări", desc: "Fii specific și cantitativ: 'Am crescut vânzările cu 30% în 6 luni'." },
  { title: "Follow-up", desc: "Trimite un email de mulțumire în 24h după interviu, reiterând interesul pentru post." },
];

const interviewVideos = [
  {
    title: "Cum te comporți la interviu",
    desc: "Tehnici esențiale de comunicare și prezentare pentru un interviu reușit.",
    youtubeId: "HG68Ymazo18",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    title: "Interviu online — sfaturi practice",
    desc: "Setup-ul ideal și regulile pentru un interviu video profesionist.",
    youtubeId: "6EbCMhHFBNM",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80",
  },
  {
    title: "Cum să te îmbraci profesional",
    desc: "Prima impresie contează — ghid complet pentru outfit-ul potrivit.",
    youtubeId: "l6SJAaRHMcA",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
];

const ANUNTURI = [
  { firma: "Google România", rol: "Junior Developer", locatie: "București", data: "Acum 2 zile", domeniu: "Tech", color: "#4f8ef7" },
  { firma: "BCR", rol: "Analist Financiar", locatie: "Cluj-Napoca", data: "Acum 3 zile", domeniu: "Finance", color: "#22c55e" },
  { firma: "Vodafone", rol: "Marketing Specialist", locatie: "Remote", data: "Acum 5 zile", domeniu: "Marketing", color: "#f97316" },
  { firma: "Kaufland", rol: "Store Manager Trainee", locatie: "Multiple", data: "Acum 1 săpt", domeniu: "Retail", color: "#a855f7" },
  { firma: "Deloitte", rol: "Consultant Junior", locatie: "București", data: "Acum 1 săpt", domeniu: "Consulting", color: "#06b6d4" },
];

const ARTICOLE = [
  { titlu: "Top 10 profesii ale viitorului în România", sursa: "Forbes RO", data: "15 Ian 2025" },
  { titlu: "Cum arată piața muncii în 2025", sursa: "Ziarul Financiar", data: "12 Ian 2025" },
  { titlu: "Skills-urile cel mai cerute de angajatori", sursa: "eJobs", data: "10 Ian 2025" },
  { titlu: "Remote work vs. birou — ce preferă angajatorii", sursa: "BusinessMagazin", data: "8 Ian 2025" },
  { titlu: "Generația Z și provocările pieței muncii", sursa: "HRManager", data: "5 Ian 2025" },
];

function Sidebar() {
  return (
    <aside style={{ width: "100%", maxWidth: 300, flexShrink: 0 }}>
      <div style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Anunturi recrutare */}
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ background: "#f8f9ff", borderBottom: "1px solid #e5e7eb", padding: "12px 16px" }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1a1f3a", margin: 0 }}>🔍 Anunțuri recrutare</h3>
          </div>
          <div style={{ padding: "8px 0", maxHeight: 320, overflowY: "auto" }}>
            {ANUNTURI.map((a) => (
              <div key={a.firma + a.rol} style={{ padding: "10px 16px", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 3 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1a1f3a" }}>{a.rol}</div>
                  <span style={{ fontSize: 10, fontWeight: 600, color: a.color, background: `${a.color}18`, padding: "2px 7px", borderRadius: 10, whiteSpace: "nowrap" }}>{a.domeniu}</span>
                </div>
                <div style={{ fontSize: 11, color: "#6b7280" }}>{a.firma} · {a.locatie}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                  <span style={{ fontSize: 10, color: "#9ca3af" }}>{a.data}</span>
                  <a href="#" style={{ fontSize: 11, color: "#5b3fd4", fontWeight: 600, textDecoration: "none" }}>Vezi →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articole recente */}
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ background: "#f8f9ff", borderBottom: "1px solid #e5e7eb", padding: "12px 16px" }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1a1f3a", margin: 0 }}>📰 Articole recente</h3>
          </div>
          <div style={{ padding: "8px 0", maxHeight: 280, overflowY: "auto" }}>
            {ARTICOLE.map((art) => (
              <div key={art.titlu} style={{ padding: "10px 16px", borderBottom: "1px solid #f3f4f6" }}>
                <a href="#" style={{ fontSize: 12, fontWeight: 600, color: "#1a1f3a", textDecoration: "none", lineHeight: 1.4, display: "block", marginBottom: 4 }}>{art.titlu}</a>
                <div style={{ fontSize: 10, color: "#9ca3af" }}>{art.sursa} · {art.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function GhidCarieraPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Ghid <span className="text-primary">Carieră</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Resurse practice pentru a-ți construi un CV de impact, a te pregăti pentru interviu și a avansa cu încredere în carieră.
          </p>
        </div>
      </section>

      {/* Layout cu sidebar */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 16px 80px", display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Conținut principal */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* CV Section */}
          <section style={{ marginBottom: 48 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cum îți construiești un CV</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {cvTips.map((tip, i) => (
                <div key={i} className="card hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                    <span className="text-primary font-bold text-xs">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{tip.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Interview Section */}
          <section style={{ marginBottom: 48 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cum te prezinți la un interviu</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {interviewTips.map((tip, i) => (
                <div key={i} className="card hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{tip.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>

            {/* Videoclipuri interviu */}
            <h3 className="text-lg font-bold text-gray-900 mb-6">Videoclipuri — pregătire interviu</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {interviewVideos.map((v) => (
                <div key={v.youtubeId} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                      allow="fullscreen"
                      allowFullScreen
                      loading="lazy"
                      title={v.title}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "#1a1f3a", marginBottom: 4 }}>{v.title}</h4>
                    <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Imagini sfaturi */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 24 }}>
              {[
                { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", label: "Postură și contact vizual" },
                { img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80", label: "Setup interviu online" },
                { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", label: "Outfit profesional" },
              ].map((item) => (
                <div key={item.label} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                  <img src={item.img} alt={item.label} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                  <p style={{ position: "absolute", bottom: 10, left: 10, right: 10, color: "#fff", fontSize: 12, fontWeight: 600 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pune teoria în practică</h2>
          <p className="text-primary-100 mb-8 leading-relaxed">
            Explorează profesii virtuale și primește feedback real de la experți cu ajutorul platformei Profesia 360.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/experienta-vr" className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary-50 transition-colors">Intră în VR</Link>
            <Link href="/gaseste-ti-directia" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors">Găsește-ți direcția</Link>
          </div>
        </div>
      </section>
    </>
  );
}
