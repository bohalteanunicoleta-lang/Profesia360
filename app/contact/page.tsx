import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Profesia 360",
  description:
    "Contactează echipa Profesia 360 pentru întrebări, suport sau feedback.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="text-primary">Contact</span>
          </h1>
          <p className="text-lg text-gray-600">
            Ne poți contacta oricând dacă ai întrebări sau ai nevoie de suport.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <div className="bg-sky-500 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-xl font-bold mb-6">Informații de contact</h2>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:0765778821" className="text-lg font-semibold hover:underline">
                    0765 778 821
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:contact.profesia360@gmail.com" className="font-semibold hover:underline break-all">
                    contact.profesia360@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3">Arhiva de reclame</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                De asemenea, feedback-ul tău este foarte important pentru noi —
                spune-ne ce ți-a plăcut, ce am putea îmbunătăți sau ce ți-ar fi
                util pe viitor.
              </p>
              <div className="bg-primary-50 rounded-xl p-4 text-sm text-primary-700 leading-relaxed">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 align-middle"></span>
                Pentru intrarea în ședință cu un mentor în planul Pro, vei
                introduce adresa ta de email și noi îți vom trimite un cod Zoom.
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="card shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Numele tău <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Popescu"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="07XX XXX XXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="exemplu@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mesajul tău
                </label>
                <textarea
                  rows={5}
                  placeholder="Descrie întrebarea sau solicitarea ta..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-sm py-3"
              >
                Trimite mesajul
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
