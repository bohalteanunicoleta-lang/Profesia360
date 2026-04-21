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
    width: "100%", background: "#1c2333", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 8,
    padding: "12px 14px", color: "#e8eaf0", fontSize: 14, outline: "none", boxSizing: "border-box",
  };
  const btnStyle: React.CSSProperties = {
    width: "100%", background: "#4f8ef7", color: "#fff", border: "none", borderRadius: 10,
    padding: "13px", fontSize: 15, fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1,
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0f1117", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: "32px 16px" }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span style={{ color: "#4f8ef7", fontSize: 28, fontWeight: 700 }}>◉</span>
          <span style={{ color: "#e8eaf0", fontSize: 20, fontWeight: 700, marginLeft: 8 }}>Profesia 360</span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", background: "#161b26", borderRadius: 12, padding: 4, marginBottom: 28 }}>
          {(["login", "register"] as const).map((t) => (
            <button key={t} onClick={() => { setTab(t); setError(""); }}
              style={{ flex: 1, padding: "10px", borderRadius: 9, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
                background: tab === t ? "#4f8ef7" : "transparent", color: tab === t ? "#fff" : "#8b93a8", transition: "all .2s" }}>
              {t === "login" ? "Intră în cont" : "Cont nou"}
            </button>
          ))}
        </div>

        <div style={{ background: "#161b26", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28 }}>
          {tab === "login" ? (
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#8b93a8", marginBottom: 6 }}>Email</label>
                <input name="email" type="email" required placeholder="tu@exemplu.ro" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#8b93a8", marginBottom: 6 }}>Parolă</label>
                <input name="password" type="password" required placeholder="••••••" style={inputStyle} />
              </div>
              {error && <p style={{ color: "#f87171", fontSize: 13 }}>{error}</p>}
              <button type="submit" style={btnStyle}>{loading ? "Se procesează…" : "Intră în cont"}</button>
            </form>
          ) : (
            <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#8b93a8", marginBottom: 6 }}>Nume complet</label>
                <input name="name" type="text" required placeholder="Ion Popescu" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#8b93a8", marginBottom: 6 }}>Email</label>
                <input name="email" type="email" required placeholder="tu@exemplu.ro" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "#8b93a8", marginBottom: 6 }}>Parolă (min. 6 caractere)</label>
                <input name="password" type="password" required minLength={6} placeholder="••••••" style={inputStyle} />
              </div>
              {error && <p style={{ color: "#f87171", fontSize: 13 }}>{error}</p>}
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
