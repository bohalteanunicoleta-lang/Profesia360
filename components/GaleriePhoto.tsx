"use client";

import { useEffect, useState, useCallback } from "react";

const IMAGINI = [
  { src: "/gallery-1.jpg", alt: "Experiență VR — Medic" },
  { src: "/gallery-2.jpg", alt: "Simulare profesie — Programator" },
  { src: "/gallery-3.jpg", alt: "Orientare carieră — Arhitect" },
  { src: "/gallery-4.jpg", alt: "Sesiune feedback — Profesia 360" },
];

export default function GaleriePhoto() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(
    () =>
      setActiveIndex((i) => (i !== null ? (i - 1 + IMAGINI.length) % IMAGINI.length : 0)),
    []
  );

  const next = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i + 1) % IMAGINI.length : 0)),
    []
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, next, prev]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {IMAGINI.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-video rounded-xl overflow-hidden group bg-gradient-to-br from-primary-100 to-purple-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Deschide ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-9 h-9 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Închide"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="rounded-xl overflow-hidden bg-gray-900">
              <img
                src={IMAGINI[activeIndex].src}
                alt={IMAGINI[activeIndex].alt}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prev}
                className="flex items-center gap-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                ← Anterioară
              </button>
              <span className="text-white/50 text-sm">
                {activeIndex + 1} / {IMAGINI.length}
              </span>
              <button
                onClick={next}
                className="flex items-center gap-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Următoarea →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
