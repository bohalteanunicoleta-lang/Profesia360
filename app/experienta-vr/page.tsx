import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiență VR — Profesia 360",
  description:
    "Simulează o zi reală în orice profesie prin experiențe VR interactive.",
};

const professions = [
  { name: "Medic", icon: "🩺", available: true },
  { name: "Arhitect", icon: "🏛️", available: true },
  { name: "Programator", icon: "💻", available: true },
  { name: "Avocat", icon: "⚖️", available: false },
  { name: "Chef Bucătar", icon: "👨‍🍳", available: false },
  { name: "Pilot", icon: "✈️", available: false },
];

const features = [
  {
    icon: "🎯",
    title: "Activități reale",
    desc: "Parcurgi activitățile specifice profesiei alese, exact cum se desfășoară în realitate.",
  },
  {
    icon: "🎬",
    title: "Preview video explicativ",
    desc: "Vizionezi materiale video introductive gratuite pentru orice profesie.",
  },
  {
    icon: "📋",
    title: "Fișă de simulare",
    desc: "Primești o fișă detaliată cu sarcinile, programul și provocările meseriei.",
  },
  {
    icon: "🤖",
    title: "Feedback cu AI",
    desc: "După rezolvarea sarcinilor, primești feedback instant generat cu inteligență artificială.",
  },
  {
    icon: "👨‍💼",
    title: "Sesiune 1-1 cu profesionist",
    desc: "Discută 30 de minute cu un expert din domeniu (disponibil în Plan Pro).",
  },
  {
    icon: "🔓",
    title: "Deblochează experiența completă",
    desc: "Alege un plan și accesezi simularea completă, fără restricții.",
  },
];

export default function ExperientaVRPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-purple-800 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white bg-opacity-20 rounded-2xl px-5 py-2 mb-6">
            <span className="text-white text-sm font-semibold">◉ Simulează o zi reală</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Experiența VR
          </h1>
          <p className="text-lg text-primary-100 leading-relaxed max-w-2xl mx-auto mb-10">
            Intră virtual în orice profesie. Parcurge activitățile reale, primește
            feedback personalizat și decide dacă acea meserie ți se potrivește — fără
            să pierzi timp sau bani.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/gaseste-ti-directia" className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-primary-50 transition-colors">
              Începe gratuit
            </Link>
            <Link href="/cum-functioneaza" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-colors">
              Cum funcționează?
            </Link>
          </div>
        </div>
      </section>

      {/* Free preview note */}
      <section className="py-8 px-4 bg-primary-50 border-b border-primary-100">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-primary-700">
            <span className="text-base">✓</span>
            <span className="font-medium">Activități free</span>
          </div>
          <div className="flex items-center gap-2 text-primary-700">
            <span className="text-base">✓</span>
            <span className="font-medium">Preview video explicativ gratuit</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-base">🔒</span>
            <span>Experiență completă — necesită plan</span>
          </div>
        </div>
      </section>

      {/* Professions grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-3">Profesii disponibile</h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Explore, simulează și descoperă — noi profesii sunt adăugate continuu.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {professions.map((prof) => (
              <div
                key={prof.name}
                className={`card text-center cursor-pointer hover:shadow-md transition-all ${
                  prof.available
                    ? "border-primary-100 hover:border-primary"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="text-3xl mb-2">{prof.icon}</div>
                <p className="text-xs font-semibold text-gray-800">{prof.name}</p>
                {!prof.available && (
                  <span className="text-xs text-gray-400 mt-1 block">În curând</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-10">Ce include experiența</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session booking */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="card border-2 border-primary">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Discută cu un profesionist
                </h3>
                <p className="text-sm text-gray-500 mb-1">Disponibil în Planul Pro</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Rezervă o sesiune de 30 de minute cu un expert din domeniu.
                  Selectează ziua și intervalul orar care ți se potrivesc.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-5">
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-0.5">Durată</p>
                    <p className="font-semibold text-gray-800 text-sm">30 minute</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-0.5">Format</p>
                    <p className="font-semibold text-gray-800 text-sm">Online (Zoom)</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-gray-500 mb-0.5">Plan necesar</p>
                    <p className="font-semibold text-primary text-sm">Plan Pro</p>
                  </div>
                </div>
                <Link href="/gaseste-ti-directia" className="btn-primary text-sm inline-block">
                  Rezervă sesiunea
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start simulation CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Începe simularea completă
          </h2>
          <p className="text-primary-100 mb-8 text-sm leading-relaxed">
            Alege planul potrivit și explorează orice profesie virtual — activități,
            video, experiență VR și feedback cu AI.
          </p>
          <Link href="/gaseste-ti-directia" className="bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-primary-50 transition-colors inline-block">
            Alege planul tău
          </Link>
        </div>
      </section>
    </>
  );
}
