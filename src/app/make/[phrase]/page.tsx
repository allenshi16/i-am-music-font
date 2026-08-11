import type { Metadata } from "next";
import Link from "next/link";
import { phrases, getPhrase, type PhraseEntry } from "@/data/phrases";

export const dynamicParams = false;

export function generateStaticParams() {
  return phrases.map((p) => ({ phrase: p.slug }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const paletteStyles: Record<PhraseEntry["palette"], { background: string; foreground: string; ink: string }> = {
  dark: { background: "#0d0d0e", foreground: "#f0ece4", ink: "#f0ece4" },
  paper: { background: "#e9e1d1", foreground: "#141414", ink: "#141414" },
  acid: { background: "#d8ff46", foreground: "#131313", ink: "#131313" },
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function generateMetadata({ params }: { params: Promise<{ phrase: string }> }): Promise<Metadata> {
  const { phrase } = await params;
  const entry = getPhrase(phrase);
  if (!entry) return { title: "Not found" };
  const title = `"${entry.phrase}" in I Am Music Font — Free Generator`;
  const description = `Make "${entry.phrase}" in the I AM MUSIC layered text style — ${entry.vibe}. Create it free online, tune spacing and color, and export a PNG or SVG.`;
  return {
    title,
    description,
    alternates: { canonical: `/make/${entry.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteUrl}/make/${entry.slug}`,
    },
  };
}

function Faq({ entry }: { entry: PhraseEntry }) {
  const items = [
    {
      q: `How do I make "${entry.phrase}" in the I AM MUSIC font style?`,
      a: `Open the free generator and type "${entry.phrase}" into the phrase field. It uses two layers — a heavy condensed background and a stretched serif front — that you can tune with the palette, background scale, letter spacing and front stretch controls. Everything renders live in your browser and stays local.`,
    },
    {
      q: `What is the best use for "${entry.phrase}" text?`,
      a: `This ${entry.vibe.toLowerCase()} works best for ${entry.useCase}. The two-layer effect gives it a record-sleeve feel that reads well large on covers, posters and headers.`,
    },
    {
      q: `Can I export "${entry.phrase}" as a PNG or SVG?`,
      a: `Yes. The generator exports a ready-to-share PNG and a scalable SVG, both created in your browser with no upload or account. PNG is ideal for social posts; SVG keeps the text sharp at any size for print and design work.`,
    },
    {
      q: `Is the I AM MUSIC font style free to use?`,
      a: `The effect itself is a type treatment, not a single licensed font. Use it freely with the generator, and for commercial work verify the license of any specific typeface you combine with your exported design.`,
    },
  ];
  return (
    <section className="article-faq">
      <h2>Frequently asked questions</h2>
      {items.map((item, index) => (
        <details key={item.q} open={index === 0}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}

export default async function PhrasePage({ params }: { params: Promise<{ phrase: string }> }) {
  const { phrase } = await params;
  const entry = getPhrase(phrase);
  if (!entry) return null;
  const palette = paletteStyles[entry.palette];
  const slug = entry.slug;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `"${entry.phrase}" in I Am Music Font`,
    description: `Make "${entry.phrase}" in the I AM MUSIC layered text style — ${entry.vibe}. Free online generator with PNG and SVG export.`,
    mainEntityOfPage: `${siteUrl}/make/${slug}`,
    author: { "@type": "Organization", name: "I Am Music Font" },
  };
  const safePhrase = escapeXml(entry.phrase);

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="content-header">
        <Link className="brand" href="/"><span className="brand-mark">IAM</span><span className="brand-name">I AM MUSIC FONT</span></Link>
        <Link className="top-cta" href={`/#generator?text=${encodeURIComponent(entry.phrase)}`}>Make “{entry.phrase}” ↗</Link>
      </header>
      <article className="article-shell">
        <p className="eyebrow">Type experiment / {slug}</p>
        <h1>&ldquo;{entry.phrase}&rdquo;<br /><em>in I AM MUSIC style.</em></h1>
        <p className="article-lede">This phrase reads as {entry.vibe.toLowerCase()}. Make it your own in the layered two-layer effect — no account, no upload, instant PNG or SVG export.</p>
        <div className="article-rule" />

        <section>
          <h2>Live preview</h2>
          <div className="preview-card" style={{ backgroundColor: palette.background, color: palette.foreground, aspectRatio: "1.5", minHeight: 320, overflow: "hidden", position: "relative", padding: 25 }}>
            <div style={{ fontSize: 8, letterSpacing: ".14em", textTransform: "uppercase", position: "absolute", left: 25, top: 22, zIndex: 1 }}>IAM / {slug}</div>
            <svg className="preview-svg" viewBox="0 0 900 560" role="img" aria-label={`${entry.phrase} layered text preview`}>
              <text x="450" y="310" textAnchor="middle" style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: 60, letterSpacing: 2, fill: palette.foreground }}>{entry.phrase}</text>
              <text x="450" y="310" textAnchor="middle" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", fontSize: 54, letterSpacing: 1, fill: palette.ink, opacity: 0.42, transform: "translate(450px, 310px) scale(1.08, 1) translate(-450px, -310px)" }}>{entry.phrase}</text>
            </svg>
            <div style={{ fontSize: 8, letterSpacing: ".14em", textTransform: "uppercase", position: "absolute", bottom: 22, left: 25, right: 25, display: "flex", justifyContent: "space-between", zIndex: 1 }}>
              <span>DOUBLE LAYER STUDY</span><span>GENERATED LIVE</span>
            </div>
          </div>
          <Link className="article-button" href={`/#generator?text=${encodeURIComponent(entry.phrase)}`}>Make “{entry.phrase}” now ↗</Link>
        </section>

        <section>
          <h2>Why this works</h2>
          <p>“{entry.phrase}” is {entry.vibe}. That tension is exactly what the layered I AM MUSIC treatment amplifies — a bold condensed silhouette underneath a narrow serif layer that is stretched and slightly offset, so the letters seem to vibrate.</p>
          <p>Short phrases like this one create the strongest silhouette, which is why the effect is built around two stacked layers rather than a single typeface. It is an independent recreation, not an official font.</p>
        </section>

        <section className="callout"><span>THE SHORT VERSION</span><strong>“{entry.phrase}” is a cover-ready phrase.</strong><p>Use it for {entry.useCase}. Generate it free and export a PNG or SVG in seconds.</p></section>

        <section>
          <h2>How to make it</h2>
          <ol className="step-list">
            <li><strong>Type the phrase.</strong> Enter “{entry.phrase}” (uppercase works best) into the generator.</li>
            <li><strong>Pick a palette.</strong> Choose the look that fits your mood — Obsidian black, warm paper or acid green.</li>
            <li><strong>Push the layers.</strong> Adjust background scale, letter spacing and front stretch until the overlap feels right.</li>
            <li><strong>Export it.</strong> Download a PNG for posting or an SVG for sharp, scalable design work.</li>
          </ol>
        </section>

        <Faq entry={entry} />
      </article>
      <footer className="content-footer">
        <Link href="/">← Back home</Link>
        <Link href="/i-am-music-font-generator">Read the generator guide →</Link>
      </footer>
    </main>
  );
}