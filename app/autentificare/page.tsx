"use client";
import { useState, FormEvent, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function AuthForm() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const plan = params.get("plan") ?? "";

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: fd.get("email"),
      password: fd.get("password"),
      redirect: false,
    });
    setLoading(false);
    if (res?.error) { setError("Email sau parolă incorectă."); return; }
    router.push(plan ? `/plata?plan=${plan}` : "/");
  }

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: fd.get("email"), name: fd.get("name"), password: fd.get("password") }),
    });
    const data = await res.json();
    if (!res.ok) { setLoading(false); setError(data.error); return; }
    const sign = await signIn("credentials", { email: fd.get("email"), password: fd.get("password"), redirect: false });
    setLoading(false);
    if (sign?.error) { setError("Cont creat, dar autentificarea a eșuat. Încearcă să te loghezi."); return; }
    router.push(plan ? `/plata?plan=${plan}` : "/");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "#fff", border: "1px solid #bfdbfe", borderRadius: 8,
    padding: "12px 14px", color: "#1e293b", fontSize: 14, outline: "none", boxSizing: "border-box",
  };
  const btnStyle: React.CSSProperties = {
    width: "100%", background: "#2563eb", color: "#fff", border: "none", borderRadius: 10,
    padding: "13px", fontSize: 15, fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1,
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #eff6ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: "32px 16px" }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span style={{ color: "#2563eb", fontSize: 28, fontWeight: 700 }}>◉</span>
          <span style={{ color: "#1e293b", fontSize: 20, fontWeight: 700, marginLeft: 8 }}>Profesia 360</span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", background: "rgba(255,255,255,0.7)", borderRadius: 12, padding: 4, marginBottom: 28, border: "1px solid #bfdbfe" }}>
          {(["login", "register"] as const).map((t) => (
            <button key={t} onClick={() => { setTab(t); setError(""); }}
              style={{ flex: 1, padding: "10px", borderRadius: 9, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
                background: tab === t ? "#2563eb" : "transparent", color: tab === t ? "#fff" : "#64748b", transition: "all .2s" }}>
              {t === "login" ? "Intră în cont" : "Cont nou"}
            </button>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #bfdbfe", borderRadius: 16, padding: 28, boxShadow: "0 8px 32px rgba(37,99,235,0.12)" }}>
          {tab === "login" ? (
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 6 }}>Email</label>
                <input name="email" type="email" required placeholder="tu@exemplu.ro" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 6 }}>Parolă</label>
                <input name="password" type="password" required placeholder="••••••" style={inputStyle} />
              </div>
              {error && <p style={{ color: "#dc2626", fontSize: 13 }}>{error}</p>}
              <button type="submit" style={btnStyle}>{loading ? "Se procesează…" : "Intră în cont"}</button>
            </form>
          ) : (
            <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 6 }}>Nume complet</label>
                <input name="name" type="text" required placeholder="Ion Popescu" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 6 }}>Email</label>
                <input name="email" type="email" required placeholder="tu@exemplu.ro" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 6 }}>Parolă (min. 6 caractere)</label>
                <input name="password" type="password" required minLength={6} placeholder="••••••" style={inputStyle} />
              </div>
              {error && <p style={{ color: "#dc2626", fontSize: 13 }}>{error}</p>}
              <button type="submit" style={btnStyle}>{loading ? "Se procesează…" : "Creează cont"}</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default function AutentificarePage() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
}
