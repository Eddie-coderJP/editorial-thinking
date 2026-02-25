import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // reCAPTCHA v3 検証
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    const recaptchaData = await recaptchaRes.json();

    // スコアが0.5未満はBOTと判定してブロック
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "BOTと判定されました。お手数ですが時間をおいて再度お試しください。" },
        { status: 400 }
      );
    }

    // Formspreeに送信
    const formspreeRes = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      }
    );

    if (!formspreeRes.ok) {
      throw new Error("Formspree送信エラー");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
