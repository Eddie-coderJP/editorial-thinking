"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/column", label: "COLUMN" },
    { href: "/about", label: "ABOUT" },
    { href: "/community", label: "COMMUNITY" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header style={{
      background: "#fff",
      borderBottom: "1px solid #E0DDD8",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <div style={{ display: "flex", gap: "3px" }}>
              <div style={{ width: "20px", height: "4px", background: "#C1403D" }}></div>
              <div style={{ width: "20px", height: "4px", background: "#C1403D" }}></div>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
              <div style={{ width: "20px", height: "4px", background: "#C1403D" }}></div>
              <div style={{ width: "20px", height: "4px", background: "#C1403D" }}></div>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
              <div style={{ width: "20px", height: "4px", background: "#C1403D" }}></div>
              <div style={{ width: "20px", height: "4px", background: "#C1403D" }}></div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
              Editorial Thinking
            </div>
            <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6B6B6B", textTransform: "uppercase" }}>
              COLLECTIVE
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "#C1403D"
                  : "#1A1A1A",
                borderBottom: pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "2px solid #C1403D"
                  : "2px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          className="hamburger-btn"
          aria-label="メニュー"
        >
          <div style={{ width: "24px", height: "2px", background: "#1A1A1A", marginBottom: "5px" }}></div>
          <div style={{ width: "24px", height: "2px", background: "#1A1A1A", marginBottom: "5px" }}></div>
          <div style={{ width: "24px", height: "2px", background: "#1A1A1A" }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid #E0DDD8",
          padding: "16px 24px",
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                color: pathname === link.href ? "#C1403D" : "#1A1A1A",
                borderBottom: "1px solid #E0DDD8",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
