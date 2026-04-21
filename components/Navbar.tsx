"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

const SLOGAN = "Înainte de a alege, trăiește experiența!";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/gaseste-ti-directia", label: "Găsește-ți direcția" },
  { href: "/ghid-cariera", label: "Ghid carieră" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(SLOGAN.slice(0, ++i));
      if (i >= SLOGAN.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

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

          {/* Auth CTA */}
          <div className="flex items-center gap-3">
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
