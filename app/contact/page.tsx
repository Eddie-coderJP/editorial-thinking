export const metadata = {
  title: "Contact | Editorial Thinking Collective",
  description: "お問い合わせ・取材・コラボレーションのご依頼はこちらから。",
};

export default function ContactPage() {
  return (
    <>
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
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              { label: "お名前", type: "text", placeholder: "山田 太郎", required: true },
              { label: "メールアドレス", type: "email", placeholder: "example@email.com", required: true },
              { label: "件名", type: "text", placeholder: "お問い合わせの件名", required: true },
            ].map((field) => (
              <div key={field.label}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px", color: "var(--text)" }}>
                  {field.label} {field.required && <span style={{ color: "var(--accent)" }}>*</span>}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    fontSize: "15px",
                    background: "var(--white)",
                    outline: "none",
                  }}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px", color: "var(--text)" }}>
                メッセージ <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                rows={8}
                placeholder="お問い合わせ内容をご記入ください"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  fontSize: "15px",
                  background: "var(--white)",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>
            <button type="submit" style={{
              background: "var(--accent)",
              color: "white",
              padding: "16px 48px",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.04em",
              alignSelf: "flex-start",
            }}>
              送信する
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
