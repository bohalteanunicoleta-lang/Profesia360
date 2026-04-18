import Link from "next/link";

const questions = [
  {
    text: "Ești proaspăt absolvent și nu știi încotro să te îndrepți pe piața muncii?",
  },
  {
    text: "Te-ai gândit să fii medic... și nu știi dacă ți se potrivește?",
  },
  {
    text: "Ești la capăt de drum cu sfaturile și ai nevoie de îndrumare din partea unui profesionist?",
  },
  {
    text: "Ți-ai pierdut locul de muncă și vrei să încerci alte experiențe?",
  },
];

const plans = [
  {
    name: "Plan Basic",
    price: "Gratuit",
    color: "bg-yellow-100 border-yellow-300",
    badge: "bg-yellow-400",
    features: [
      "Acces la descriere",
      "Preview video",
      "Task demo",
      "Acces limitat la platformă",
    ],
    cta: "Explorează",
    ctaStyle: "bg-yellow-500 hover:bg-yellow-600 text-white",
    href: "/gaseste-ti-directia",
  },
  {
    name: "Plan Preview",
    price: "69 lei",
    duration: "15 zile",
    color: "bg-green-50 border-green-300",
    badge: "bg-green-500",
    features: [
      "Experiment VR",
      "Acces complet",
      "Feedback detaliat",
    ],
    cta: "Deblochează experiența",
    ctaStyle: "bg-primary hover:bg-primary-600 text-white",
    href: "/gaseste-ti-directia",
  },
  {
    name: "Plan Pro",
    price: "—",
    color: "bg-red-50 border-red-400",
    badge: "bg-red-500",
    features: [
      "Tot din Premium",
      "Sesiuni 1-1",
      "Feedback personalizat extins",
      "Întrebări directe către un expert",
    ],
    cta: "Rezervă sesiunile",
    ctaStyle: "bg-red-600 hover:bg-red-700 text-white",
    note: "Reducere pentru elevi 20%",
    href: "/gaseste-ti-directia",
  },
  {
    name: "Plan Domeniu Pass",
    price: "149 lei",
    color: "bg-purple-50 border-primary",
    badge: "bg-primary",
    features: [
      "Toate profesiile dintr-un domeniu (ex. medic)",
      "Toate similarele pentru toate profesiile",
      "Acces complet VR pentru toate",
      "Toate task-urile",
      "Feedback și recomandare pentru fiecare produs",
    ],
    cta: "Alege planul",
    ctaStyle: "bg-primary hover:bg-primary-600 text-white",
    href: "/gaseste-ti-directia",
  },
  {
    name: "Plan Domeniu Pro",
    price: "299 lei",
    duration: "30 zile",
    color: "bg-indigo-50 border-indigo-400",
    badge: "bg-indigo-600",
    features: [
      "Tot din Domeniu Pass",
      "O sesiune one-to-one (30 minute)",
      "Feedback personalizat extins",
      "Recomandări directe de la experți",
    ],
    cta: "Alege planul Pro",
    ctaStyle: "bg-indigo-600 hover:bg-indigo-700 text-white",
    href: "/gaseste-ti-directia",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Descoperă-ți{" "}
                <span className="text-primary">cariera ideală</span> prin
                experiențe VR
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Profesia 360 este platforma care îți permite să explorezi sute
                de meserii în mod virtual, interactiv și practic — înainte să
                faci o alegere importantă.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/experienta-vr" className="btn-primary text-base">
                  ① Intră în experiența VR
                </Link>
                <Link href="/cum-functioneaza" className="btn-outline text-base">
                  ② Vezi cum funcționează
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-video rounded-2xl bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl mb-3">◉</div>
                  <p className="font-semibold text-lg">Imagine reprezentativă</p>
                  <p className="text-sm opacity-80">Experiențe VR interactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Întrebări de pus pe prima pagină:
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {questions.map((q, i) => (
              <div
                key={i}
                className="card text-center hover:shadow-md hover:border-primary-100 transition-shadow"
              >
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
              Profesia 360 este un proiect educațional inovator dedicat
              adolescenților și adulților aflați în proces de orientare sau
              reconversie profesională, care oferă experiențe virtuale
              interactive pentru explorarea diferitelor cariere, alături de
              sesiuni de consiliere individuală cu mentori și specialiști în
              carieră.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary text-lg mb-3">Misiunea noastră</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Misiunea noastră este să oferim elevilor, studenților și
              persoanelor aflate în reconversie profesională o experiență
              practică și interactivă, prin care să descopere diverse meserii,
              să participe la activități reale și să primească feedback util
              pentru orientarea lor în carieră.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-primary text-lg mb-3">Viziunea noastră</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Viziunea companiei este de a deveni o platformă modernă și
              accesibilă de orientare profesională, care să contribuie la o
              alegere mai sigură și mai informată a carierei prin utilizarea
              tehnologiei VR.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-6 flex-wrap mb-16">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                1
              </div>
              <Link
                href="/experienta-vr"
                className="btn-primary px-8 py-4 text-base inline-block"
              >
                Intră în experiența VR
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                2
              </div>
              <Link
                href="/cum-functioneaza"
                className="btn-primary px-8 py-4 text-base inline-block"
              >
                Vezi cum funcționează
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            CTA FINAL — Descoperă ce profesie ți se potrivește.
          </h2>
          <Link
            href="/gaseste-ti-directia"
            className="btn-primary px-10 py-4 text-lg inline-block"
          >
            Încep experiența completă
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-3">Alege planul tău</h2>
          <p className="text-center text-gray-500 mb-12">
            Selectează planul potrivit pentru obiectivele tale de carieră.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border-2 p-5 flex flex-col ${plan.color} relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-16 h-16 ${plan.badge} opacity-10 rounded-bl-full`} />
                <h3 className="font-bold text-gray-900 text-base mb-1">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-2xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.duration && (
                    <span className="text-xs text-gray-500 ml-1">/ {plan.duration}</span>
                  )}
                </div>
                {plan.note && (
                  <p className="text-xs text-red-600 font-medium mb-2">{plan.note}</p>
                )}
                <ul className="mt-2 mb-5 space-y-1.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-700">
                      <span className="text-primary mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-colors ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            *Plan pentru instituții — corporate disponibil la cerere.{" "}
            <Link href="/contact" className="text-primary underline">
              Contactați-ne
            </Link>
          </p>
        </div>
      </section>

      {/* Promo packages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pachete promoționale</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="card flex-1 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl font-extrabold text-primary mb-1">119 lei</div>
              <div className="text-gray-600 text-sm mb-4">2 profesii</div>
              <Link href="/gaseste-ti-directia" className="btn-primary text-sm">
                Alege pachetul
              </Link>
            </div>
            <div className="card flex-1 text-center border-2 border-primary hover:shadow-md transition-shadow">
              <div className="text-3xl font-extrabold text-primary mb-1">149 lei</div>
              <div className="text-gray-600 text-sm mb-4">3 profesii</div>
              <Link href="/gaseste-ti-directia" className="btn-primary text-sm">
                Alege pachetul
              </Link>
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
            <div className="card border-l-4 border-primary">
              <p className="text-sm font-semibold text-gray-700">
                🎯 Teste de carieră / orientare profesională
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Primești 1, 2 sau 3 profesii recomandate în funcție de răspunsurile tale.
              </p>
            </div>
            <div className="card border-l-4 border-primary">
              <p className="text-sm font-semibold text-gray-700">
                📚 Zonă cu sfaturi pentru carieră
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Cum să-ți construiești un CV, cum să te prezinți la un interviu și multe altele.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
