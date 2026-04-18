import type { Metadata } from "next";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Ghid Carieră — Profesia 360",
  description:
    "Sfaturi practice pentru construirea CV-ului, pregătirea interviului și avansarea în carieră.",
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

// Înlocuiește URL-urile de mai jos cu videoclipurile reale YouTube/Vimeo
const VIDEO_CV = "";
const VIDEO_INTERVIU = "";

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
            Resurse practice pentru a-ți construi un CV de impact, a te pregăti
            pentru interviu și a avansa cu încredere în carieră.
          </p>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cum îți construiești un CV</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
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

          {/* Video ghid CV */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              Video ghid — Cum să-ți scrii CV-ul
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Urmărește tutorialul video pentru sfaturi practice pas cu pas.
            </p>
            <VideoEmbed url={VIDEO_CV} titlu="Ghid construire CV — Profesia 360" />
          </div>
        </div>
      </section>

      {/* Interview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cum te prezinți la un interviu</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
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

          {/* Video ghid interviu */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              Video ghid — Cum să te pregătești pentru interviu
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Tehnici dovedite pentru un interviu de succes, prezentate pas cu pas.
            </p>
            <VideoEmbed url={VIDEO_INTERVIU} titlu="Ghid pregătire interviu — Profesia 360" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pune teoria în practică
          </h2>
          <p className="text-primary-100 mb-8 leading-relaxed">
            Explorează profesii virtuale și primește feedback real de la experți
            cu ajutorul platformei Profesia 360.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/experienta-vr" className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary-50 transition-colors">
              Intră în VR
            </Link>
            <Link href="/gaseste-ti-directia" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors">
              Găsește-ți direcția
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
