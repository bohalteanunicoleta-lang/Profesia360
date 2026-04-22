"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface SimResult {
  date: string;
  totalScore: number;
  grade: string;
  label: string;
  completedTasks: number;
  totalTasks: number;
  skills: Record<string, number>;
  hardMode: boolean;
}

const SKILL_ICONS: Record<string, string> = {
  disciplina: "⚖️", empatie: "💙", organizare: "📋", comunicare: "💬", rezilienta: "🛡️",
};
const SKILL_LABELS: Record<string, string> = {
  disciplina: "Disciplină", empatie: "Empatie", organizare: "Organizare",
  comunicare: "Comunicare", rezilienta: "Reziliență",
};
const GRADE_COLOR: Record<string, string> = {
  A: "#059669", B: "#2563eb", C: "#d97706", D: "#dc2626",
};

export default function RezultateMelePage() {
  const [results, setResults] = useState<SimResult[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("profesia360_results");
      setResults(raw ? JSON.parse(raw) : []);
    } catch {
      setResults([]);
    }
    setLoaded(true);
  }, []);

  const clearResults = () => {
    localStorage.removeItem("profesia360_results");
    setResults([]);
  };

  const bestScore = results.length > 0 ? Math.max(...results.map((r) => r.totalScore)) : 0;
  const avgScore = results.length > 0 ? Math.round(results.reduce((a, r) => a + r.totalScore, 0) / results.length) : 0;

  if (!loaded) return null;

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 80px", fontFamily: "sans-serif", color: "#1e293b" }}>
      <div style={{ marginBottom: 8 }}>
        <Link href="/" style={{ fontSize: 12, color: "#2563eb", textDecoration: "none" }}>← Acasă</Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>Rezultatele mele</h1>
          <p style={{ fontSize: 14, color: "#64748b" }}>Istoricul simulărilor tale pe Profesia 360</p>
        </div>
        {results.length > 0 && (
          <button onClick={clearResults} style={{ background: "transparent", border: "1px solid #fca5a5", color: "#dc2626", borderRadius: 8, padding: "8px 16px", fontSize: 12, cursor: "pointer" }}>
            Șterge tot
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "#f8fafc", borderRadius: 20, border: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏫</div>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "#1e293b" }}>Nicio simulare finalizată încă</h2>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Completează prima simulare și rezultatele vor apărea aici automat.</p>
          <Link href="/profesii/profesor/simulare" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
            Începe simularea →
          </Link>
        </div>
      ) : (
        <>
          {/* Statistici globale */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 28 }}>
            {[
              { label: "Simulări totale", value: results.length, color: "#2563eb" },
              { label: "Scor maxim", value: `${bestScore}/100`, color: "#059669" },
              { label: "Scor mediu", value: `${avgScore}/100`, color: "#7c3aed" },
              { label: "Mod greu", value: results.filter((r) => r.hardMode).length, color: "#dc2626" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: 12, padding: 16, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.color, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Lista rezultate */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[...results].reverse().map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, border: "1px solid #dbeafe", overflow: "hidden", boxShadow: "0 2px 8px rgba(37,99,235,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f1f5f9", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 18, fontWeight: 800, color: GRADE_COLOR[r.grade] }}>Grade {r.grade}</span>
                      {r.hardMode && <span style={{ fontSize: 10, background: "#dc2626", color: "#fff", borderRadius: 4, padding: "2px 6px", fontWeight: 700 }}>🔥 ZI GREA</span>}
                    </div>
                    <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{r.label}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: GRADE_COLOR[r.grade] }}>{r.totalScore}/100</div>
                    <div style={{ fontSize: 11, color: "#94a3b8" }}>{new Date(r.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}</div>
                  </div>
                </div>
                <div style={{ padding: "14px 20px" }}>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 10 }}>Task-uri completate: {r.completedTasks}/{r.totalTasks}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                    {Object.entries(r.skills).map(([sk, v]) => (
                      <div key={sk} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 16 }}>{SKILL_ICONS[sk]}</div>
                        <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{SKILL_LABELS[sk]}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563eb" }}>{v}</div>
                        <div style={{ height: 4, background: "#e8f0fe", borderRadius: 2, marginTop: 3 }}>
                          <div style={{ height: "100%", width: `${v}%`, background: "linear-gradient(90deg,#2563eb,#7c3aed)", borderRadius: 2 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link href="/profesii/profesor/simulare" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Simulare nouă →
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
