"use client";

import { useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "送信に失敗しました。");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("ネットワークエラーが発生しました。");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    fontSize: "15px",
    background: "var(--white)",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 700,
    marginBottom: "8px",
    color: "var(--text)",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* お名前 */}
      <div>
        <label style={labelStyle}>
          お名前 <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="山田 太郎"
          required
          style={inputStyle}
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label style={labelStyle}>
          メールアドレス <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
          style={inputStyle}
        />
      </div>

      {/* 件名 */}
      <div>
        <label style={labelStyle}>
          件名 <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="お問い合わせの件名"
          required
          style={inputStyle}
        />
      </div>

      {/* メッセージ */}
      <div>
        <label style={labelStyle}>
          メッセージ <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={8}
          placeholder="お問い合わせ内容をご記入ください"
          required
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* エラーメッセージ */}
      {status === "error" && (
        <p style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 600 }}>
          {errorMsg}
        </p>
      )}

      {/* 成功メッセージ */}
      {status === "success" && (
        <div style={{
          background: "#f0faf4",
          border: "1px solid #86efac",
          borderRadius: "6px",
          padding: "16px 20px",
          color: "#166534",
          fontSize: "14px",
          fontWeight: 600,
        }}>
          お問い合わせを受け付けました。3営業日以内にご返信いたします。
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          background: status === "sending" ? "#aaa" : "var(--accent)",
          color: "white",
          padding: "16px 48px",
          borderRadius: "4px",
          fontSize: "15px",
          fontWeight: 700,
          border: "none",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          letterSpacing: "0.04em",
          alignSelf: "flex-start",
          transition: "background 0.2s",
        }}
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>

      {/* reCAPTCHA注記 */}
      <p style={{ fontSize: "11px", color: "var(--muted)", lineHeight: 1.7 }}>
        このフォームはGoogle reCAPTCHA v3で保護されています。
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>プライバシーポリシー</a>および
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }}>利用規約</a>が適用されます。
      </p>
    </form>
  );
}

export default function ContactPage() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {/* PAGE HERO */}
      <section style={{
        background: "var(--white)",
        borderBottom: "1px solid var(--border)",
        padding: "80px 40px 64px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: "16px" }}>Contact</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "20px" }}>お問い合わせ</h1>
        <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.9 }}>
          取材・コラボレーション・講演・コンサルティングのご依頼など、お気軽にご連絡ください。
        </p>
      </section>

      {/* FORM */}
      <section style={{ background: "var(--bg)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <ContactForm />
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
}
