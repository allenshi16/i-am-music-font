import type { MetadataRoute } from "next";
import { phrases } from "@/data/phrases";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const phrasePages = phrases.map((p) => ({
    url: `${siteUrl}/make/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/i-am-music-font-generator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...phrasePages,
    { url: `${siteUrl}/album-cover-text-style`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified: new Date("2026-09-18"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
