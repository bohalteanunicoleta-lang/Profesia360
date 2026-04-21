import type { Metadata } from "next";
import Link from "next/link";
import GaleriePhoto from "@/components/GaleriePhoto";
import DomeniiVR from "@/components/DomeniiVR";
import TypingHero from "@/components/TypingHero";
import PasiSlideshow from "@/components/PasiSlideshow";
import PlanButton from "@/components/PlanButton";

export const metadata: Metadata = {
  title: "Experiență VR — Profesia 360",
  description: "Simulează o zi reală în orice profesie prin experiențe VR interactive.",
};

const features = [
  { icon: "🎯", title: "Activități reale", desc: "Parcurgi activitățile specifice profesiei alese, exact cum se desfășoară în realitate." },
  { icon: "🎬", title: "Preview video explicativ", desc: "Vizionezi materiale video introductive gratuite pentru orice profesie." },
  { icon: "📋", title: "Fișă de simulare", desc: "Primești o fișă detaliată cu sarcinile, programul și provocările meseriei." },
  { icon: "🤖", title: "Feedback cu AI", desc: "După rezolvarea sarcinilor, primești feedback instant generat cu inteligență artificială." },
  { icon: "👨‍💼", title: "Sesiune 1-1 cu profesionist", desc: "Discută 30 de minute cu un expert din domeniu (disponibil în Plan Pro)." },
  { icon: "🔓", title: "Deblochează experiența completă", desc: "Alege un plan și accesezi simularea completă, fără restricții." },
];

export default function ExperientaVRPage() {
  return (
    <>
      {/* Hero cu typing animation */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-purple-800 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TypingHero />
          <div className="inline-block bg-white bg-opacity-20 rounded-2xl px-5 py-2 mb-6">
            <span className="text-white text-sm font-semibold">◉ Simulează o zi reală</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Experiența VR</h1>
          <p className="text-lg text-primary-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Intră virtual în orice profesie. Parcurge activitățile reale, primește feedback personalizat și
            decide dacă acea meserie ți se potrivește — fără să pierzi timp sau bani.
          </p>
          {/* Banner VR image */}
          <div className="relative rounded-2xl overflow-hidden max-w-2xl mx-auto mb-8" style={{ aspectRatio: "16/7" }}>
            <img
              src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80"
              alt="Ochelari VR educație"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">Explorează realitatea virtuală a oricărei profesii</div>
          </div>
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
            <span>✓</span><span className="font-medium">Activități free</span>
          </div>
          <div className="flex items-center gap-2 text-primary-700">
            <span>✓</span><span className="font-medium">Preview video explicativ gratuit</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>🔒</span><span>Experiență completă — necesită plan</span>
          </div>
        </div>
      </section>

      {/* Demo platformă — Slideshow pași */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-3">Cum funcționează platforma</h2>
          <p className="text-center text-gray-500 text-sm mb-8">5 pași simpli de la cont la raportul de carieră.</p>
          <PasiSlideshow />
          <div className="mt-8 rounded-2xl overflow-hidden">
            <div className="bg-gray-900 px-4 py-3">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">Video demo — VR în educație</p>
            </div>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/2hpvgAkXqGU"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                allow="fullscreen"
                allowFullScreen
                loading="lazy"
                title="Demo VR educație"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie — Elemente din platformă */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-3">Din platforma noastră</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Click pe orice imagine pentru a o vedea mărită.</p>
          <GaleriePhoto />
        </div>
      </section>

      {/* Domenii expandabile */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-3">Explorează după domeniu</h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Alege un domeniu pentru a vedea toate profesiile disponibile. Noi domenii sunt adăugate continuu.
          </p>
          <DomeniiVR />
        </div>
      </section>

      {/* Ce include experiența */}
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
                <h3 className="font-bold text-gray-900 text-lg mb-1">Discută cu un profesionist</h3>
                <p className="text-sm text-gray-500 mb-4">Rezervă o sesiune de 30 de minute cu un expert din domeniu. Disponibil în Planul Pro.</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-5">
                  {[["Durată", "30 minute"], ["Format", "Online (Zoom)"], ["Plan necesar", "Plan Pro"]].map(([k, v]) => (
                    <div key={k} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 mb-0.5">{k}</p>
                      <p className="font-semibold text-gray-800 text-sm">{v}</p>
                    </div>
                  ))}
                </div>
                <Link href="/gaseste-ti-directia" className="btn-primary text-sm inline-block">Rezervă sesiunea</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start simulation CTA — planuri inline */}
      <section className="py-16 px-4 bg-primary" id="sectiune-planuri">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Alege planul tău</h2>
          <p className="text-primary-100 mb-10 text-sm leading-relaxed">
            Fără abonament. Plătești o singură dată și explorezi oricâte profesii include planul ales.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 text-left mb-8">
            {[
              { name: "Plan Pro", price: "149 lei", duration: "15 zile", key: "pro", features: ["Tot din Preview", "Sesiuni 1-1 cu expert", "Feedback personalizat extins"] },
              { name: "Plan Premium", price: "179 lei", duration: "15 zile", key: "premium", features: ["Tot din Pro", "Toate profesiile premium", "Raport carieră complet"] },
            ].map((plan) => (
              <div key={plan.key} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 16, padding: "22px 20px" }}>
                <div className="text-white font-bold text-base mb-1">{plan.name}</div>
                <div className="mb-3">
                  <span className="text-white text-2xl font-extrabold">{plan.price}</span>
                  <span className="text-primary-200 text-xs ml-1">/ {plan.duration}</span>
                </div>
                <ul className="mb-5 space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="text-primary-100 text-xs flex gap-2"><span>✓</span>{f}</li>
                  ))}
                </ul>
                <PlanButton planKey={plan.key} label={`Alege ${plan.name} →`} className="w-full py-2.5 px-4 rounded-full text-sm font-semibold cursor-pointer border-0 bg-white text-primary hover:bg-primary-50 transition-colors" />
              </div>
            ))}
          </div>
          <Link href="/planuri" className="text-primary-200 text-sm underline underline-offset-2 hover:text-white transition-colors">
            Vezi toate planurile →
          </Link>
        </div>
      </section>
    </>
  );
}
