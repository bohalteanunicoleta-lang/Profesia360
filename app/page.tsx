import Link from "next/link";
import PlanButton from "@/components/PlanButton";

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
              <Link href="/cum-functioneaza" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors text-base">
                ② Vezi cum funcționează
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {questions.map((q, i) => (
              <div key={i} className="card text-center hover:shadow-md hover:border-primary-100 transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{q.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-semibold mt-10 text-lg uppercase tracking-wide">
            La Profesia 360 poți explora profesiile pe care ți le dorești.
          </p>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pachete Pro Elev*</h2>
          <p className="text-sm text-gray-500 mb-8">Prețuri speciale pentru elevi cu card de elev sau adresă de email instituțională.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="card flex-1 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-extrabold text-primary mb-1">119 lei</div>
              <div className="text-gray-600 text-sm mb-2">2 profesii</div>
              <ul className="text-xs text-gray-500 mb-4 space-y-1 text-left">
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Acces VR complet la 2 profesii</li>
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Feedback personalizat</li>
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Raport compatibilitate</li>
              </ul>
              <PlanButton planKey="pro-elev-2" label="Alege pachetul" className="btn-primary text-sm w-full cursor-pointer border-0" />
            </div>
            <div className="card flex-1 text-center border-2 border-primary hover:shadow-md transition-shadow">
              <div className="text-3xl font-extrabold text-primary mb-1">149 lei</div>
              <div className="text-gray-600 text-sm mb-2">3 profesii</div>
              <ul className="text-xs text-gray-500 mb-4 space-y-1 text-left">
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Acces VR complet la 3 profesii</li>
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Feedback personalizat extins</li>
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Raport carieră complet</li>
                <li className="flex gap-1.5"><span className="text-primary">✓</span>Prioritate suport</li>
              </ul>
              <PlanButton planKey="pro-elev-3" label="Alege pachetul" className="btn-primary text-sm w-full cursor-pointer border-0" />
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
            <div className="card border-l-4 border-primary">
              <p className="text-sm font-semibold text-gray-700">🎯 Teste de carieră / orientare profesională</p>
              <p className="text-xs text-gray-500 mt-1">Primești 1, 2 sau 3 profesii recomandate în funcție de răspunsurile tale.</p>
            </div>
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
