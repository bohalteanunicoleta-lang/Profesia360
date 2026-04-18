import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Găsește-ți direcția — Profesia 360",
  description:
    "Răspunde la câteva întrebări și descoperă care profesii ți se potrivesc cel mai bine.",
};

const externalTests = [
  {
    name: "Career Choicer",
    url: "https://careerchoicer.com/#testy",
    desc: "Test de personalitate și carieră",
  },
  {
    name: "NextWai Career Test",
    url: "https://www.nextwai.com/career-personality-test",
    desc: "Test de personalitate pentru carieră",
  },
  {
    name: "Truity TypeFinder",
    url: "https://www.truity.com/test/type-finder-careers",
    desc: "Descoperă tipul tău de personalitate",
  },
  {
    name: "InsightfulTraits Assessment",
    url: "https://insightfultraits.com/app/assessment/?assessmentId=2FAFF0C7-50A3-4827-BAA1-CC70892FA9F2",
    desc: "Evaluare detaliată a trăsăturilor profesionale",
  },
];

const steps = [
  { number: "01", title: "Completează chestionarul", desc: "Răspunde sincer la întrebările despre interese, valori și abilități." },
  { number: "02", title: "Primești recomandări", desc: "Algoritmul nostru identifică 1-3 profesii potrivite pentru tine." },
  { number: "03", title: "Explorează virtual", desc: "Intră în experiența VR și simulează o zi reală în acea profesie." },
  { number: "04", title: "Decide în cunoștință de cauză", desc: "Cu feedback personalizat și sesiuni cu experți, faci alegerea corectă." },
];

export default function GasesteDirectiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Găsește-ți <span className="text-primary">direcția</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Prin întrebările din chestionar îți vom spune ce job s-ar potrivi
            cel mai bine profilului tău. Descoperă-ți calea profesională în câteva minute.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-10">Cum funcționează</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="card text-center">
                <div className="text-4xl font-extrabold text-primary-100 mb-2">{step.number}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questionnaire section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-3">Chestionar de orientare</h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Selectează unul dintre testele validate de mai jos pentru a-ți descoperi profilul profesional:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {externalTests.map((test) => (
              <a
                key={test.name}
                href={test.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-start gap-4 hover:shadow-md hover:border-primary-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">{test.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{test.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Plans teaser */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Gata să explorezi mai departe?
          </h2>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            Alege un plan și deblochează experiența VR completă, feedback personalizat
            și sesiuni cu profesioniști din domeniu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#planuri" className="btn-primary">
              Vezi planurile
            </Link>
            <Link href="/experienta-vr" className="btn-outline">
              Intră în experiența VR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
