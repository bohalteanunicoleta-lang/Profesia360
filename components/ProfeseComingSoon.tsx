import Link from "next/link";

interface Props {
  titlu: string;
  emoji: string;
  domeniu: string;
  descriere: string;
  responsabilitati: string[];
  salariu: string;
}

export default function ProfeseComingSoon({ titlu, emoji, domeniu, descriere, responsabilitati, salariu }: Props) {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 20px 80px", fontFamily: "sans-serif", color: "#1e293b" }}>
      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>
        <Link href="/profesii" style={{ color: "#2563eb", textDecoration: "none" }}>Profesii</Link> / {titlu}
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{emoji} {titlu}</h1>
      <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 24 }}>{descriere}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 32 }}>
        <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Salariu orientativ</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{salariu}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Domeniu</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{domeniu}</div>
        </div>
      </div>

      <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Responsabilități principale</div>
        {responsabilitati.map((r, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 14, color: "#334155" }}>
            <span style={{ color: "#2563eb", flexShrink: 0 }}>→</span>{r}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ background: "#f8fafc", border: "2px dashed #cbd5e1", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🎮</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Simulare în curând</div>
          <div style={{ fontSize: 13, color: "#94a3b8" }}>Lucrăm la scenarii realiste pentru această profesie.</div>
        </div>
        <div style={{ background: "#f8fafc", border: "2px dashed #cbd5e1", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🥽</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Video VR în curând</div>
          <div style={{ fontSize: 13, color: "#94a3b8" }}>Experiența imersivă va fi disponibilă în curând.</div>
        </div>
      </div>

      <div style={{ marginTop: 28, textAlign: "center" }}>
        <Link href="/profesii" style={{ display: "inline-block", background: "#2563eb", color: "#fff", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
          ← Toate profesiile
        </Link>
      </div>
    </main>
  );
}
