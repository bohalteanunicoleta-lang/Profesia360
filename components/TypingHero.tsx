"use client";
import { useState, useEffect } from "react";

const SLOGAN = "Înainte de a alege, trăiește experiența!";

export default function TypingHero() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(SLOGAN.slice(0, i++));
      if (i > SLOGAN.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ color: "#fff", fontSize: 32, fontWeight: 700 }}>◉</span>
        <span style={{ color: "#fff", fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>Profesia 360</span>
      </div>
      <p style={{
        fontSize: "clamp(18px, 3vw, 26px)",
        fontWeight: 700,
        color: "#fde68a",
        minHeight: "2em",
        letterSpacing: "0.01em",
      }}>
        {displayed}<span style={{ opacity: displayed.length < SLOGAN.length ? 1 : 0, borderRight: "2px solid #fde68a", marginLeft: 2 }}>&nbsp;</span>
      </p>
    </div>
  );
}
