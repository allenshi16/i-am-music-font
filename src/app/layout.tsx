import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "I Am Music Font Generator — Create the Double-Layer Text Effect",
    template: "%s | I Am Music Font",
  },
  description:
    "Create custom I AM MUSIC style text with a free online generator. Tune layered typography, spacing and color, then export your design as a PNG.",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
