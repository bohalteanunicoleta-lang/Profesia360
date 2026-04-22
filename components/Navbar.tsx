"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";

const SLOGAN = "Înainte de a alege, trăiește experiența!";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/gaseste-ti-directia", label: "Găsește-ți direcția" },
  { href: "/chestionar", label: "Chestionar" },
  { href: "/ghid-cariera", label: "Ghid carieră" },
  { href: "/contact", label: "Contact" },
];

const TASK_NOTIFS = [
  {
    id: 1,
    icon: "🎓",
    title: "Task nou: Gestionează un conflict în clasă",
    desc: "Simulare profesor · disponibil acum",
    href: "/profesii/profesor/simulare",
    read: false,
  },
  {
    id: 2,
    icon: "📋",
    title: "Task: Planifică o lecție pentru 30 de elevi",
    desc: "Simulare profesor · disponibil acum",
    href: "/profesii/profesor/simulare",
    read: false,
  },
  {
    id: 3,
    icon: "👨‍👩‍👧",
    title: "Task: Răspunde unui părinte nemulțumit",
    desc: "Simulare profesor · disponibil acum",
    href: "/profesii/profesor/simulare",
    read: false,
  },
  {
    id: 4,
    icon: "📝",
    title: "Completează chestionarul de carieră",
    desc: "Găsește-ți direcția · 5 min",
    href: "/chestionar",
    read: true,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [showNotifs, setShowNotifs] = useState(false);
  const [readIds, setReadIds] = useState<number[]>([4]);
  const { data: session } = useSession();
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = TASK_NOTIFS.filter((n) => !readIds.includes(n.id)).length;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(SLOGAN.slice(0, ++i));
      if (i >= SLOGAN.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifs(false);
      }
    }
    if (showNotifs) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showNotifs]);

  function openNotifs() {
    setShowNotifs((v) => !v);
    setReadIds(TASK_NOTIFS.map((n) => n.id));
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div style={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="Profesia 360"
                fill
                style={{ objectFit: "contain" }}
                onError={() => {}}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{
                fontSize: 18, fontWeight: 800,
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", lineHeight: 1.1,
              }}>Profesia 360</span>
              <span style={{ fontSize: 10, color: "#64748b", fontStyle: "italic", lineHeight: 1.2, whiteSpace: "nowrap" }}>
                {displayed}<span style={{ opacity: displayed.length < SLOGAN.length ? 1 : 0 }}>|</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-150 text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: bell + auth */}
          <div className="flex items-center gap-3">

            {/* Notification bell */}
            <div ref={notifRef} style={{ position: "relative" }}>
              <button
                onClick={openNotifs}
                style={{ position: "relative", background: "transparent", border: "none", cursor: "pointer", padding: "6px 8px", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
                aria-label="Notificări"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {unreadCount > 0 && (
                  <span style={{ position: "absolute", top: 2, right: 2, background: "#ef4444", color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifs && (
                <div style={{ position: "absolute", right: 0, top: "calc(100% + 8px)", width: 320, background: "#fff", border: "1px solid #bfdbfe", borderRadius: 14, boxShadow: "0 8px 32px rgba(37,99,235,0.13)", zIndex: 100, overflow: "hidden" }}>
                  <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid #e8f0fe", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>Task-uri & Notificări</span>
                    <span style={{ fontSize: 11, color: "#64748b" }}>{TASK_NOTIFS.length} total</span>
                  </div>
                  {TASK_NOTIFS.map((n) => (
                    <Link
                      key={n.id}
                      href={n.href}
                      onClick={() => setShowNotifs(false)}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", borderBottom: "1px solid #f1f5f9", background: readIds.includes(n.id) ? "#fff" : "#eff6ff", textDecoration: "none", transition: "background 0.15s" }}
                    >
                      <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{n.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: readIds.includes(n.id) ? 400 : 600, color: "#1e293b", lineHeight: 1.4, marginBottom: 2 }}>{n.title}</div>
                        <div style={{ fontSize: 11, color: "#64748b" }}>{n.desc}</div>
                      </div>
                      {!readIds.includes(n.id) && (
                        <span style={{ width: 7, height: 7, background: "#2563eb", borderRadius: "50%", flexShrink: 0, marginTop: 5, marginLeft: "auto" }} />
                      )}
                    </Link>
                  ))}
                  <div style={{ padding: "10px 16px", textAlign: "center" }}>
                    <Link href="/profesii/profesor/simulare" onClick={() => setShowNotifs(false)} style={{ fontSize: 12, color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>
                      Vezi toate task-urile →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {session ? (
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">{session.user?.name}</span>
                <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-primary text-sm">
                  Ieși din cont
                </button>
              </div>
            ) : (
              <Link href="/autentificare" className="hidden sm:inline-flex btn-primary text-sm">
                Intră în cont
              </Link>
            )}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)} aria-label="Meniu">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="block py-2 px-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
              onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            {session ? (
              <button onClick={() => { signOut({ callbackUrl: "/" }); setOpen(false); }}
                className="btn-primary text-sm block w-full text-center">
                Ieși din cont
              </button>
            ) : (
              <Link href="/autentificare" className="btn-primary text-sm block text-center"
                onClick={() => setOpen(false)}>
                Intră în cont
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
