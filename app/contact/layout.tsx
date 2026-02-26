import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Editorial Thinking Collectiveへのお問い合わせはこちらから。コミュニティへの参加・取材・講演依頼など、お気軽にご連絡ください。",
  alternates: {
    canonical: "https://editorialthinking.com/contact",
  },
  openGraph: {
    title: "Contact | Editorial Thinking Collective",
    description: "Editorial Thinking Collectiveへのお問い合わせはこちらから。コミュニティへの参加・取材・講演依頼など、お気軽にご連絡ください。",
    url: "https://editorialthinking.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
