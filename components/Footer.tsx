import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#134361", color: "#fff", padding: "48px 40px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", marginBottom: "40px", justifyContent: "space-between" }}>
          {/* Brand — white logo */}
          <div style={{ flex: "1", minWidth: "240px" }}>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src="/images/logo_white_trimmed.png"
                alt="Editorial Thinking COLLECTIVE"
                width={180}
                height={54}
                style={{ objectFit: "contain", height: "36px", width: "auto" }}
              />
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: "280px" }}>
              編集思考を学び、実践し、仲間と磨き合う場。あなたの中にある編集思考を解き放つ。
            </p>
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <h4 style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: "16px", textTransform: "uppercase" }}>
                MENU
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  { href: "/", label: "HOME" },
                  { href: "/column", label: "COLUMN" },
                  { href: "/about", label: "ABOUT" },
                  { href: "/community", label: "COMMUNITY" },
                  { href: "/contact", label: "CONTACT" },
                ].map((link) => (
                  <li key={link.href} style={{ marginBottom: "10px" }}>
                    <Link href={link.href} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: "16px", textTransform: "uppercase" }}>
                CONTACT
              </h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 2 }}>
                info@editbrain.co.jp
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            © 2026 Editorial Thinking Collective / EDITBRAIN Inc.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              プライバシーポリシー
            </Link>
            <Link href="/terms" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
