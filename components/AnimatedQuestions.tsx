"use client";
import { useEffect, useRef, useState } from "react";

const questions = [
  { icon: "🎓", text: "Ești proaspăt absolvent și nu știi încotro să te îndrepți pe piața muncii?" },
  { icon: "🏥", text: "Te-ai gândit să fii medic, profesor, programator sau arhitect — și nu știi dacă ți se potrivește?" },
  { icon: "💼", text: "Ești la capăt de drum cu sfaturile și ai nevoie de îndrumare din partea unui profesionist?" },
  { icon: "🔄", text: "Ți-ai pierdut locul de muncă și vrei să încerci alte experiențe?" },
];

function QuestionCard({ q, delay }: { q: { icon: string; text: string }; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid #bfdbfe",
        borderRadius: 14,
        padding: "22px 18px",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        boxShadow: "0 4px 16px rgba(37,99,235,0.1)",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{q.icon}</div>
      <p style={{ color: "#1e293b", fontSize: 14, lineHeight: 1.7, fontWeight: 500 }}>{q.text}</p>
    </div>
  );
}

export default function AnimatedQuestions() {
  return (
    <section style={{
      background: "linear-gradient(-45deg, #dbeafe, #e0e7ff, #ede9fe, #dbeafe)",
      backgroundSize: "400% 400%",
      animation: "gradientShift 8s ease infinite",
      padding: "72px 16px",
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {questions.map((q, i) => (
            <QuestionCard key={i} q={q} delay={i * 120} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{
            display: "inline-block",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 700,
            background: "linear-gradient(135deg, #4f8ef7, #7c6df8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            paddingBottom: 8,
            borderBottom: "2px solid transparent",
            borderImage: "linear-gradient(135deg, #4f8ef7, #7c6df8) 1",
          }}>
            La Profesia 360 poți explora profesiile pe care ți le dorești.
          </p>
        </div>
      </div>
    </section>
  );
}
