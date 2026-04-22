import Link from "next/link";
import PlanButton from "@/components/PlanButton";
import AnimatedQuestions from "@/components/AnimatedQuestions";
import NationalMap from "@/components/NationalMap";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline poster="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary" style={{ opacity: 0.73 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 13 }}>⭐⭐⭐⭐⭐</span>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>3.200 de tineri și-au descoperit vocația</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Înainte de a alege{" "}
              <span className="text-yellow-300">40 de ani</span>,<br />
              trăiește{" "}
              <span className="text-yellow-300">15 minute</span>.
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 500 }}>
              Simulezi o zi reală de muncă. Primești feedback AI personalizat. Decizi în cunoștință de cauză — nu pe baza sfaturilor altora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/profesii/profesor" className="bg-white font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-base" style={{ color: "#2563eb" }}>
                Încearcă gratuit — Simulare profesor →
              </Link>
              <a href="#cum-functioneaza" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base">
                Cum funcționează? (2 min)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ─────────────────────────────────────────────────── */}
      <AnimatedQuestions />

      {/* ── CUM FUNCȚIONEAZĂ ─────────────────────────────────────────── */}
      <section id="cum-functioneaza" className="py-20 px-4 bg-white">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Simplu și concret</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1e293b", marginBottom: 12 }}>Cum funcționează</h2>
            <p style={{ color: "#64748b", fontSize: 15 }}>Trei pași. 15 minute. O decizie mai bună.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              {
                step: "01", icon: "🔍", color: "#dbeafe",
                title: "Alegi o profesie",
                desc: "Browse prin profesii organizate pe domenii. Fiecare are preview gratuit: context, o zi tipică, ce skill-uri folosești.",
              },
              {
                step: "02", icon: "⚡", color: "#ede9fe",
                title: "Trăiești o zi reală",
                desc: "Simulezi 5-8 scenarii cu cronometru. Fiecare decizie are consecințe imediate și pe termen lung — ca în viața reală.",
              },
              {
                step: "03", icon: "🎯", color: "#dcfce7",
                title: "Primești raportul AI",
                desc: "Analiză completă a skill-urilor tale, compatibilitate cu profesia și recomandări pentru profesii alternative.",
              },
            ].map((item) => (
              <div key={item.step} style={{ background: item.color, borderRadius: 20, padding: 28 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em", marginBottom: 12 }}>{item.step}</div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1e293b", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/profesii/profesor" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 100, padding: "14px 36px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
              Încearcă simularea gratuită →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DE CE SUNTEM DIFERIȚI ─────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "80px 16px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Diferențiator</div>
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "#1e293b" }}>De ce suntem diferiți</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[
              { bad: "Nu îți spunem ce să faci", good: "Îți arătăm cum e să faci" },
              { bad: "Nu avem teste cu întrebări vagi", good: "Avem simulări cu scenarii reale" },
              { bad: "Nu suntem un director de carieră online", good: "Suntem experiența pe care nu o poți avea altfel" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: i === 0 ? "12px 0 0 0" : i === 2 ? "0 0 0 12px" : 0, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>❌</span>
                  <span style={{ fontSize: 13, color: "#7f1d1d", lineHeight: 1.5 }}>{row.bad}</span>
                </div>
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: i === 0 ? "0 12px 0 0" : i === 2 ? "0 0 12px 0" : 0, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✅</span>
                  <span style={{ fontSize: 13, color: "#14532d", fontWeight: 500, lineHeight: 1.5 }}>{row.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARTA NAȚIONALĂ ──────────────────────────────────────────── */}
      <NationalMap />

      {/* ── PROFESII ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-3">Explorează prin experiențe reale</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Intră virtual în orice profesie înainte să o alegi.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", label: "Medic", desc: "Salvează vieți în fiecare zi", href: "/experienta-vr" },
              { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", label: "Arhitect", desc: "Proiectează viitorul orașului", href: "/experienta-vr" },
              { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80", label: "Programator", desc: "Construiește lumea digitală", href: "/experienta-vr" },
              { img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80", label: "Profesor", desc: "Formează generații întregi", href: "/profesii/profesor" },
              { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", label: "Psiholog", desc: "Ajuți mintea să se vindece", href: "/experienta-vr" },
              { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80", label: "Antreprenor", desc: "Îți construiești propria viziune", href: "/experienta-vr" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="relative rounded-2xl overflow-hidden group block" style={{ aspectRatio: "4/3" }}>
                <img src={item.img} alt={item.label} loading="lazy" width={600} height={450} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <p className="text-white/80 text-xs">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link href="/gaseste-ti-directia" style={{ fontSize: 14, color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>
              Vezi toate profesiile disponibile →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALE ─────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "#eff6ff" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-2">Ce spun utilizatorii</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Mii de tineri și-au descoperit cariera cu Profesia 360.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {[
              { name: "Andreea M.", tag: "17 ani, elevă", text: "Nu știam dacă să merg spre medicină sau psihologie. Simularea m-a ajutat să înțeleg că îmi doresc cu adevărat să lucrez cu oamenii. Am ales psihologia și sunt sigură că e decizia corectă.", avatar: "AM", bg: "#dbeafe" },
              { name: "Radu T.", tag: "19 ani, student", text: "Înainte să intru la facultate am testat simularea de programator. A fost revelator — am văzut că îmi place să rezolv probleme, nu doar să scriu cod. Am ales Informatica și nu regret.", avatar: "RT", bg: "#ede9fe" },
              { name: "Maria P.", tag: "35 ani, reconversie", text: "După 10 ani în contabilitate voiam o schimbare. Simularea de UX Designer m-a convins că e domeniul potrivit. Acum urmez cursuri și simt că fac ce-mi place.", avatar: "MP", bg: "#dcfce7" },
              { name: "Prof. coordonator", tag: "Liceu Teoretic, Cluj", text: "Am folosit platforma cu 30 de elevi de clasa a XI-a. Discuțiile după simulări au fost extraordinare — elevii au vorbit deschis despre ce vor să facă cu viața lor.", avatar: "PC", bg: "#fef9c3" },
            ].map((r) => (
              <div key={r.name} style={{ background: r.bg, borderRadius: 16, padding: 22, border: "1px solid rgba(37,99,235,0.1)" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 15 }}>{s}</span>)}
                </div>
                <p style={{ fontSize: 13, color: "#1e293b", lineHeight: 1.7, marginBottom: 14, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: "#1e293b" }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{r.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANURI (simplificate) ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#2563eb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>◉ Fără surprize</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1e293b", marginBottom: 12 }}>Alege planul tău</h2>
            <p style={{ color: "#64748b", fontSize: 15 }}>Fără abonament obligatoriu. Plătești doar ce folosești.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, alignItems: "start" }}>

            {/* Gratuit */}
            <div style={{ background: "rgba(255,255,255,1)", border: "1px solid #bfdbfe", borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#64748b", marginBottom: 4 }}>GRATUIT</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>0 lei</div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20 }}>pentru totdeauna</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["✓ 1 simulare completă", "✓ Chestionar de orientare", "✓ Preview profesii", "✗ Raport AI detaliat", "✗ Video 360°"].map((f) => (
                  <li key={f} style={{ fontSize: 13, color: f.startsWith("✗") ? "#94a3b8" : "#475569" }}>{f}</li>
                ))}
              </ul>
              <Link href="/profesii/profesor" style={{ display: "block", background: "#e8f0fe", color: "#2563eb", borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
                Încearcă gratuit →
              </Link>
            </div>

            {/* Pro */}
            <div style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", borderRadius: 20, padding: 28, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#fbbf24", color: "#1a1400", fontSize: 11, fontWeight: 800, padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap" }}>
                ⭐ Recomandat
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#93c5fd", marginBottom: 4 }}>PRO</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 4 }}>149 lei</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>/ 15 zile · reducere 20% elevi</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["✓ Toate simulările", "✓ Raport AI personalizat", "✓ Video 360°", "✓ Badge-uri & streak", "✓ Profil de compatibilitate"].map((f) => (
                  <li key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{f}</li>
                ))}
              </ul>
              <PlanButton planKey="pro" label="Vreau Pro →" className="w-full cursor-pointer border-0 py-3 px-4 rounded-xl text-sm font-bold text-blue-700 bg-white hover:bg-blue-50" />
            </div>

            {/* Școală */}
            <div style={{ background: "rgba(255,255,255,1)", border: "1.5px solid #fde68a", borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#d97706", marginBottom: 4 }}>ȘCOALĂ / INSTITUȚIE</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>Preț la cerere</div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20 }}>pentru clase & licee</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["✓ Conturi multiple", "✓ Dashboard profesor", "✓ Rapoarte per clasă", "✓ Personalizare conținut", "✓ Facturare B2B"].map((f) => (
                  <li key={f} style={{ fontSize: 13, color: "#475569" }}>{f}</li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: "block", background: "#f59e0b", color: "#fff", borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
                Contactați-ne →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)", padding: "80px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎓</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
            Tu ești profesorul.<br />Tu iei decizia.<br />Tu simți consecința.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            Prima platformă din România unde testezi profesia, nu personalitatea.
          </p>
          <Link href="/profesii/profesor" style={{ display: "inline-block", background: "#fff", color: "#2563eb", borderRadius: 100, padding: "16px 40px", fontSize: 16, fontWeight: 800, textDecoration: "none" }}>
            Încearcă simularea — e gratuit →
          </Link>
          <div style={{ marginTop: 20 }}>
            <Link href="/chestionar" style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, textDecoration: "none" }}>
              Sau completează chestionarul de orientare →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
