import Link from "next/link";
import PlanButton from "@/components/PlanButton";
import AnimatedQuestions from "@/components/AnimatedQuestions";

const questions = [
  { text: "Ești proaspăt absolvent și nu știi încotro să te îndrepți pe piața muncii?" },
  { text: "Te-ai gândit să fii medic, profesor, programator sau arhitect — și nu știi dacă ți se potrivește?" },
  { text: "Ești la capăt de drum cu sfaturile și ai nevoie de îndrumare din partea unui profesionist?" },
  { text: "Ți-ai pierdut locul de muncă și vrei să încerci alte experiențe?" },
];

const plans = [
  {
    name: "Plan Basic",
    price: "Gratuit",
    color: "bg-yellow-100 border-yellow-300",
    badge: "bg-yellow-400",
    features: ["Acces la descriere", "Preview video", "Task demo", "Acces limitat la platformă"],
    cta: "Explorează",
    ctaStyle: "bg-yellow-500 hover:bg-yellow-600 text-white",
    href: "/gaseste-ti-directia",
    free: true,
  },
  {
    name: "Plan Preview",
    price: "69 lei",
    duration: "15 zile",
    color: "bg-green-50 border-green-300",
    badge: "bg-green-500",
    features: ["Experiență VR completă", "Acces complet", "Feedback detaliat"],
    cta: "Deblochează experiența",
    ctaStyle: "bg-primary hover:bg-primary-600 text-white",
    planKey: "preview",
  },
  {
    name: "Plan Pro",
    price: "149 lei",
    duration: "15 zile",
    color: "bg-red-50 border-red-400",
    badge: "bg-red-500",
    features: ["Tot din Preview", "Sesiuni 1-1", "Feedback personalizat extins", "Întrebări directe către un expert"],
    cta: "Rezervă sesiunile",
    ctaStyle: "bg-red-600 hover:bg-red-700 text-white",
    note: "Reducere pentru elevi 20%",
    planKey: "pro",
  },
  {
    name: "Plan Premium",
    price: "179 lei",
    duration: "15 zile",
    color: "bg-orange-50 border-orange-400",
    badge: "bg-orange-500",
    features: ["Tot din Pro", "Acces toate profesiile premium", "Raport carieră complet", "Suport prioritar"],
    cta: "Alege Premium",
    ctaStyle: "bg-orange-500 hover:bg-orange-600 text-white",
    planKey: "premium",
  },
  {
    name: "Plan Domeniu Pass",
    price: "149 lei",
    color: "bg-purple-50 border-primary",
    badge: "bg-primary",
    features: ["Toate profesiile dintr-un domeniu", "Toate similarele pentru toate profesiile", "Acces complet VR pentru toate", "Toate task-urile", "Feedback și recomandare pentru fiecare profesie"],
    cta: "Vreau să explorez un domeniu →",
    ctaStyle: "bg-primary hover:bg-primary-600 text-white",
    planKey: "domeniu-pass",
  },
  {
    name: "Plan Domeniu Pro",
    price: "299 lei",
    duration: "30 zile",
    color: "bg-indigo-50 border-indigo-400",
    badge: "bg-indigo-600",
    features: ["Tot din Domeniu Pass", "O sesiune one-to-one (30 minute)", "Feedback personalizat extins", "Recomandări directe de la experți"],
    cta: "Intru serios în carieră →",
    ctaStyle: "bg-indigo-600 hover:bg-indigo-700 text-white",
    planKey: "domeniu-pro",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero cu video de fundal */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary" style={{ opacity: 0.70 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Descoperă-ți{" "}
              <span className="text-yellow-300">cariera ideală</span>{" "}
              prin experiențe VR
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Profesia 360 este platforma care îți permite să explorezi sute de
              meserii în mod virtual, interactiv și practic — înainte să faci o
              alegere importantă.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/experienta-vr" className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-primary-50 transition-colors text-base">
                ① Intră în experiența VR
              </Link>
              <Link href="/gaseste-ti-directia" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors text-base">
                ② Găsește-ți direcția
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Questions — animated gradient section */}
      <AnimatedQuestions />

      {/* Image grid — profesii */}
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
                <img src={item.img} alt={item.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <p className="text-white/80 text-xs">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recenzii */}
      <section className="py-16 px-4" style={{ background: "#eff6ff" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-3">Ce spun utilizatorii</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Mii de tineri și-au descoperit cariera cu Profesia 360.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {[
              { nume: "Andreea M.", varsta: "17 ani, elevă", text: "Nu știam dacă să merg spre medicină sau psihologie. După simularea de pe Profesia 360, am înțeles că îmi doresc cu adevărat să lucrez cu oamenii, nu cu boli. Am ales psihologia și sunt sigură că e decizia corectă.", avatar: "AM", culoare: "#dbeafe" },
              { nume: "Radu T.", varsta: "19 ani, student anul 1", text: "Înainte să intru la facultate am folosit platforma să testez simularea de programator. A fost revelator — am văzut că îmi place să rezolv probleme. Am ales Informatică și nu regret.", avatar: "RT", culoare: "#ede9fe" },
              { nume: "Maria P.", varsta: "35 ani, în reconversie", text: "După 10 ani în contabilitate voiam o schimbare. Simularea de UX Designer m-a convins că e domeniul potrivit. Acum urmez cursuri și simt că în sfârșit fac ce-mi place.", avatar: "MP", culoare: "#dcfce7" },
              { nume: "Bogdan V.", varsta: "22 ani, proaspăt absolvent", text: "Eram pierdut după facultate. Simularea de antreprenor mi-a arătat că am un profil de fondator, nu de angajat. Am lansat un mic business și merg înainte.", avatar: "BV", culoare: "#fef9c3" },
              { nume: "Prof. coordonator", varsta: "Liceu Teoretic, Cluj", text: "Am folosit platforma cu 30 de elevi de clasa a XI-a. Discuțiile după simulări au fost extraordinare — elevii au vorbit deschis despre ce vor să facă cu viața lor.", avatar: "PC", culoare: "#ffe4e6" },
            ].map((r) => (
              <div key={r.nume} style={{ background: r.culoare, borderRadius: 16, padding: 22, border: "1px solid rgba(37,99,235,0.1)" }}>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 16 }}>{s}</span>)}
                </div>
                <p style={{ fontSize: 13, color: "#1e293b", lineHeight: 1.7, marginBottom: 14, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: "#1e293b" }}>{r.nume}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{r.varsta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Mission / Vision */}
      <section id="despre-noi" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="font-bold text-primary text-lg mb-3">Despre proiect</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Profesia 360 este un proiect educațional inovator dedicat adolescenților și adulților aflați în proces de
              orientare sau reconversie profesională, care oferă experiențe virtuale interactive pentru explorarea
              diferitelor cariere, alături de sesiuni de consiliere individuală cu mentori și specialiști în carieră.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary text-lg mb-3">Misiunea noastră</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Misiunea noastră este să oferim elevilor, studenților și persoanelor aflate în reconversie profesională o
              experiență practică și interactivă, prin care să descopere diverse meserii, să participe la activități
              reale și să primească feedback util pentru orientarea lor în carieră.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary text-lg mb-3">Viziunea noastră</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Viziunea companiei este de a deveni o platformă modernă și accesibilă de orientare profesională, care să
              contribuie la o alegere mai sigură și mai informată a carierei prin utilizarea tehnologiei VR.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-6 flex-wrap mb-16">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">1</div>
              <Link href="/experienta-vr" className="btn-primary px-8 py-4 text-base inline-block">Intră în experiența VR</Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">2</div>
              <Link href="/cum-functioneaza" className="btn-primary px-8 py-4 text-base inline-block">Vezi cum funcționează</Link>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Descoperă ce profesie ți se potrivește.</h2>
          <Link href="/gaseste-ti-directia" className="btn-primary px-10 py-4 text-lg inline-block">Încep experiența completă</Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-3">Alege planul tău</h2>
          <p className="text-center text-gray-500 mb-12">Selectează planul potrivit pentru obiectivele tale de carieră.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl border-2 p-5 flex flex-col ${plan.color} relative overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-16 h-16 ${plan.badge} opacity-10 rounded-bl-full`} />
                <h3 className="font-bold text-gray-900 text-base mb-1">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-2xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.duration && <span className="text-xs text-gray-500 ml-1">/ {plan.duration}</span>}
                </div>
                {plan.note && <p className="text-xs text-red-600 font-medium mb-2">{plan.note}</p>}
                <ul className="mt-2 mb-5 space-y-1.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-700">
                      <span className="text-primary mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.free ? (
                  <Link href={plan.href!} className={`text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-colors ${plan.ctaStyle}`}>
                    {plan.cta}
                  </Link>
                ) : (
                  <PlanButton
                    planKey={plan.planKey!}
                    label={plan.cta}
                    className={`text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-colors cursor-pointer border-0 ${plan.ctaStyle}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Institutions block */}
          <div className="mt-10 flex items-center gap-4 bg-amber-50 border-2 border-amber-400 rounded-2xl px-6 py-5 flex-wrap">
            <span className="text-3xl">🏢</span>
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-base mb-0.5">Plan pentru instituții & corporate</p>
              <p className="text-sm text-gray-600">Soluții personalizate pentru școli, licee, universități și companii.</p>
            </div>
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
              Contactați-ne →
            </Link>
          </div>
        </div>
      </section>

      {/* Pachete Pro Elev */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pachete Pro Elev*</h2>
          <p className="text-sm text-gray-500 mb-10">Prețuri speciale pentru elevi cu card de elev sau adresă de email instituțională.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* Pachet 2 profesii */}
            <div style={{ flex: 1, background: "linear-gradient(135deg, #1a3a5c, #0f2a4a)", border: "1.5px solid #4f8ef7", borderRadius: 18, padding: 28, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 14, right: 14, background: "#4f8ef7", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>PRO ELEV</div>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🎓</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#4f8ef7", marginBottom: 4 }}>119 lei</div>
              <div style={{ color: "#8b93a8", fontSize: 13, marginBottom: 16 }}>2 profesii</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                {["Acces VR complet la 2 profesii", "Feedback personalizat", "Raport compatibilitate"].map(f => (
                  <li key={f} style={{ fontSize: 13, color: "#c8d4e8", display: "flex", gap: 8 }}><span style={{ color: "#4f8ef7" }}>✓</span>{f}</li>
                ))}
              </ul>
              <PlanButton planKey="pro-elev-2" label="Alege pachetul" className="w-full cursor-pointer border-0 py-2.5 px-4 rounded-full text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600" />
            </div>
            {/* Pachet 3 profesii */}
            <div style={{ flex: 1, background: "linear-gradient(135deg, #3a1a5c, #2a0f4a)", border: "1.5px solid #7c6df8", borderRadius: 18, padding: 28, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 14, right: 14, background: "#7c6df8", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>PRO ELEV</div>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🚀</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#7c6df8", marginBottom: 4 }}>149 lei</div>
              <div style={{ color: "#8b93a8", fontSize: 13, marginBottom: 16 }}>3 profesii</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
                {["Acces VR complet la 3 profesii", "Feedback personalizat extins", "Raport carieră complet", "Prioritate suport"].map(f => (
                  <li key={f} style={{ fontSize: 13, color: "#c8d4e8", display: "flex", gap: 8 }}><span style={{ color: "#7c6df8" }}>✓</span>{f}</li>
                ))}
              </ul>
              <PlanButton planKey="pro-elev-3" label="Alege pachetul" className="w-full cursor-pointer border-0 py-2.5 px-4 rounded-full text-sm font-semibold text-white bg-violet-500 hover:bg-violet-600" />
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
            <a href="/chestionar" className="card border-l-4 border-primary hover:shadow-md transition-shadow" style={{ textDecoration: "none" }}>
              <p className="text-sm font-semibold text-gray-700">🎯 Chestionar de orientare profesională</p>
              <p className="text-xs text-gray-500 mt-1">20 întrebări, analiză AI, profesii recomandate personalizat. Durează sub 5 minute.</p>
              <p className="text-xs text-blue-600 font-semibold mt-2">Începe chestionarul →</p>
            </a>
            <div className="card border-l-4 border-primary">
              <p className="text-sm font-semibold text-gray-700">📚 Zonă cu sfaturi pentru carieră</p>
              <p className="text-xs text-gray-500 mt-1">Cum să-ți construiești un CV, cum să te prezinți la un interviu și multe altele.</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-6">*Reducerea se aplică elevilor verificați cu card de elev valabil sau email instituțional (@scoala.ro / @liceu.ro etc.).</p>
        </div>
      </section>
    </>
  );
}
