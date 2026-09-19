import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
// AdSense publisher id (e.g. "ca-pub-1234567890123456"). Empty = ads disabled.
const adsenseClient = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "").trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "I Am Music Font Generator — Create the Double-Layer Text Effect",
    template: "%s | I Am Music Font",
  },
  description:
    "Create I AM MUSIC font-style text with a free online generator. Adjust layered typography, spacing and color, then download PNG or SVG designs with no sign-up.",
  keywords: [
    "i am music font",
    "i am music font generator",
    "i am music text generator",
    "double layer font effect",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "I Am Music Font Generator",
    description: "Build your own layered music-cover typography in seconds.",
    type: "website",
    siteName: "I Am Music Font",
  },
  robots: { index: true, follow: true },
  other: adsenseClient ? { "adsense-client": adsenseClient } : {},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense: loads only when a real publisher id is configured; otherwise
            public/ads.js hides every .ad-slot container and loads nothing. */}
        {adsenseClient ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClient)}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
