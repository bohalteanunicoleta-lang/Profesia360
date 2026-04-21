"use client";
import { useEffect, useState, useCallback } from "react";

const ELEMENTE = [
  {
    titlu: "Simulări interactive",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
  },
  {
    titlu: "Video 360° imersiv",
    img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&q=80",
  },
  {
    titlu: "Feedback AI personalizat",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
  },
  {
    titlu: "Raport de compatibilitate",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
];

export default function GaleriePhoto() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex((i) => (i !== null ? (i - 1 + ELEMENTE.length) % ELEMENTE.length : 0)), []);
  const next = useCallback(() => setActiveIndex((i) => (i !== null ? (i + 1) % ELEMENTE.length : 0)), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    if (activeIndex !== null) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, close, next, prev]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {ELEMENTE.map((el, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-video rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Deschide ${el.titlu}`}
          >
            <img
              src={el.img}
              alt={el.titlu}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold text-left leading-tight">{el.titlu}</p>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" aria-label="Închide">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-xl overflow-hidden">
              <img src={ELEMENTE[activeIndex].img} alt={ELEMENTE[activeIndex].titlu} className="w-full max-h-[70vh] object-cover" />
              <div className="bg-gray-900 px-4 py-3">
                <p className="text-white font-semibold text-sm">{ELEMENTE[activeIndex].titlu}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button onClick={prev} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors">← Anterioară</button>
              <span className="text-white/50 text-sm">{activeIndex + 1} / {ELEMENTE.length}</span>
              <button onClick={next} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors">Următoarea →</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
