"use client";
import { useState, useRef, useEffect } from "react";

interface Msg { role: "user" | "assistant"; text: string; }

const INITIAL: Msg = {
  role: "assistant",
  text: "Bună! Sunt asistentul Profesia 360. Te pot ajuta să explorezi cariere, să înțelegi platforma sau să alegi planul potrivit. Cu ce te pot ajuta?",
};

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: messages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "Îmi pare rău, a apărut o eroare. Încearcă din nou." }]);
    }
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Deschide asistent"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1000,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg, #4f8ef7, #7c6df8)",
          border: "none", cursor: "pointer", fontSize: 24,
          boxShadow: "0 4px 20px rgba(79,142,247,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div style={{
          position: "fixed", bottom: 90, right: 24, zIndex: 1000,
          width: 340, height: 480,
          background: "#161b26", border: "0.5px solid rgba(255,255,255,0.15)",
          borderRadius: 16, display: "flex", flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)", fontFamily: "sans-serif",
        }}>
          {/* Header */}
          <div style={{ padding: "14px 16px", borderBottom: "0.5px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: "#e8eaf0" }}>🤖 Asistent Profesia 360</span>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#8b93a8", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                background: m.role === "user" ? "#4f8ef7" : "#1c2333",
                color: "#e8eaf0", borderRadius: 10, padding: "9px 13px",
                fontSize: 13, lineHeight: 1.6, maxWidth: "85%",
              }}>{m.text}</div>
            ))}
            {loading && <div style={{ alignSelf: "flex-start", color: "#8b93a8", fontSize: 13 }}>Se gândește…</div>}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: 12, borderTop: "0.5px solid rgba(255,255,255,0.08)", display: "flex", gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Scrie un mesaj…"
              style={{
                flex: 1, background: "#1c2333", border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: 8, padding: "8px 12px", color: "#e8eaf0", fontSize: 13, outline: "none",
              }}
            />
            <button onClick={send} style={{ background: "#4f8ef7", border: "none", borderRadius: 8, padding: "8px 14px", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 700 }}>→</button>
          </div>
        </div>
      )}
    </>
  );
}
