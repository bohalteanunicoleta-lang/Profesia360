import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cum funcționează — Profesia 360",
  description:
    "Descoperă cum funcționează platforma Profesia 360: task-uri gratuite, fișă de simulare, feedback AI și sesiuni cu profesioniști.",
};

const howItWorks = [
  {
    step: "1",
    title: "1 task gratuit",
    subtitle: "Învață și testează",
    desc: "Fiecare profesie include un task gratuit pe care îl poți rezolva imediat, fără cont sau plată.",
    free: true,
  },
  {
    step: "2",
    title: "Fișă de simulare",
    subtitle: "Deblochează experiența",
    desc: "Accesează fișa completă de simulare cu toate sarcinile, programul și provocările reale ale meseriei. Disponibil în Plan Preview, Pro sau Basic.",
    free: false,
  },
  {
    step: "3",
    title: "Feedback cu AI",
    subtitle: "Evaluare instantă",
    desc: "După rezolvarea sarcinilor, încarci ce ai lucrat și primești un feedback detaliat generat cu inteligență artificială.",
    free: false,
  },
  {
    step: "4",
    title: "Discuție cu un profesionist",
    subtitle: "Sesiune 1-1",
    desc: "Rezervă o sesiune de 30 de minute cu un expert din domeniu pentru sfaturi personalizate. Disponibil în Plan Pro.",
    free: false,
  },
];

const planAccess = [
  {
    plan: "Plan Basic",
    color: "bg-yellow-50 border-yellow-200",
    pillColor: "bg-yellow-400 text-yellow-900",
    unlocks: ["1 task gratuit", "Preview video", "Descriere profesie"],
  },
  {
    plan: "Plan Preview",
    color: "bg-green-50 border-green-200",
    pillColor: "bg-green-500 text-white",
    unlocks: ["Fișă completă de simulare", "Experiment VR", "Feedback detaliat"],
  },
  {
    plan: "Plan Pro",
    color: "bg-red-50 border-red-200",
    pillColor: "bg-red-500 text-white",
    unlocks: ["Tot din Plan Preview", "Sesiuni 1-1 cu profesionist", "Feedback personalizat extins", "Întrebări directe către expert"],
  },
];

export default function CumFunctioneazaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Cum <span className="text-primary">funcționează</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Platformă simplă, pas cu pas. Pornești cu un task gratuit și
            deblochezi tot ce ai nevoie pentru a lua cea mai bună decizie de carieră.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-100 -translate-x-1/2" />

            <div className="space-y-10">
              {howItWorks.map((item, i) => (
                <div
                  key={i}
                  className={`relative grid lg:grid-cols-2 gap-6 items-center ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`card hover:shadow-md transition-shadow ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{item.step}</span>
                      </div>
                      {item.free && (
                        <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full">
                          Gratuit
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-primary text-sm font-semibold mb-3">{item.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Visual / spacer for alternating layout */}
                  <div className={`hidden lg:flex items-center justify-center ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="w-16 h-16 rounded-full bg-primary-50 border-4 border-primary flex items-center justify-center text-primary font-extrabold text-2xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan access */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-3">Ce deblochează fiecare plan</h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Alege nivelul de acces potrivit pentru tine.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {planAccess.map((p) => (
              <div key={p.plan} className={`rounded-2xl border-2 p-6 ${p.color}`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${p.pillColor}`}>
                  {p.plan}
                </span>
                <ul className="space-y-2">
                  {p.unlocks.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload & AI feedback explanation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="card border-l-4 border-primary mb-6">
            <h3 className="font-bold text-gray-900 mb-2">Cum funcționează feedback-ul cu AI?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              După ce rezolvi sarcinile din fișa de simulare, încarci pe platformă
              ce ai lucrat (documente, răspunsuri, proiecte). Sistemul nostru cu
              inteligență artificială analizează activitatea ta și îți oferă un
              feedback detaliat, puncte forte, puncte de îmbunătățit și recomandări
              pentru pașii următori.
            </p>
          </div>
          <div className="card border-l-4 border-sky-400">
            <h3 className="font-bold text-gray-900 mb-2">Sesiunea 1-1 cu profesionistul</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              În Planul Pro, după ce completezi simularea, poți rezerva o sesiune
              online de 30 de minute cu un expert din domeniu. Selectezi ziua și
              intervalul orar disponibil, iar noi îți trimitem un link Zoom pe
              adresa de email furnizată.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ești gata să începi?
          </h2>
          <p className="text-primary-100 mb-8 text-sm">
            Primul task este gratuit. Nu ai nevoie de cont pentru a explora.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/experienta-vr" className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-primary-50 transition-colors">
              Intră în experiența VR
            </Link>
            <Link href="/gaseste-ti-directia" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors">
              Găsește-ți direcția
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
