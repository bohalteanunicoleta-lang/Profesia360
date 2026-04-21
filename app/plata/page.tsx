"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PLAN_INFO: Record<string, { name: string; price: string; duration: string }> = {
  preview: { name: "Plan Preview", price: "69 lei", duration: "15 zile" },
  pro: { name: "Plan Pro", price: "149 lei", duration: "15 zile" },
  premium: { name: "Plan Premium", price: "179 lei", duration: "15 zile" },
  "domeniu-pass": { name: "Plan Domeniu Pass", price: "149 lei", duration: "nelimitat" },
  "domeniu-pro": { name: "Plan Domeniu Pro", price: "299 lei", duration: "30 zile" },
  "pro-elev-2": { name: "Pachet Pro Elev — 2 profesii", price: "119 lei", duration: "acces complet" },
  "pro-elev-3": { name: "Pachet Pro Elev — 3 profesii", price: "149 lei", duration: "acces complet" },
};

function PlataContent() {
  const params = useSearchParams();
  const planKey = params.get("plan") ?? "preview";
  const plan = PLAN_INFO[planKey] ?? PLAN_INFO["preview"];

  return (
    <main style={{ minHeight: "100vh", background: "#0f1117", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: "32px 16px" }}>
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <Link href="/" style={{ color: "#4f8ef7", textDecoration: "none", fontSize: 13 }}>← Înapoi acasă</Link>
        </div>
        <div style={{ background: "#161b26", border: "0.5px solid rgba(79,142,247,0.3)", borderRadius: 16, padding: 32 }}>
          <div style={{ fontSize: 11, color: "#4f8ef7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Finalizare comandă</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0", marginBottom: 4 }}>{plan.name}</h1>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
            <span style={{ fontSize: 32, fontWeight: 800, color: "#4f8ef7" }}>{plan.price}</span>
            <span style={{ fontSize: 13, color: "#8b93a8" }}>/ {plan.duration}</span>
          </div>

          <div style={{ background: "#1c2333", borderRadius: 10, padding: "14px 16px", marginBottom: 24, fontSize: 13, color: "#8b93a8", lineHeight: 1.7 }}>
            Integrarea cu procesatorul de plăți (Stripe / Netopia) va fi disponibilă în curând.
            Contactează-ne la <span style={{ color: "#4f8ef7" }}>contact@profesia360.ro</span> pentru acces imediat.
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["Nume complet", "Email", "Telefon (opțional)"].map((label) => (
              <div key={label}>
                <label style={{ display: "block", fontSize: 12, color: "#8b93a8", marginBottom: 5 }}>{label}</label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  placeholder={label === "Email" ? "tu@exemplu.ro" : ""}
                  disabled
                  style={{ width: "100%", background: "#0f1117", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "11px 14px", color: "#5a6278", fontSize: 14, cursor: "not-allowed", boxSizing: "border-box" }}
                />
              </div>
            ))}
            <button
              type="button"
              disabled
              style={{ marginTop: 8, width: "100%", background: "#2a3550", color: "#5a6278", border: "none", borderRadius: 10, padding: "14px", fontSize: 15, fontWeight: 600, cursor: "not-allowed" }}
            >
              Plata — disponibil în curând
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function PlataPage() {
  return (
    <Suspense>
      <PlataContent />
    </Suspense>
  );
}
