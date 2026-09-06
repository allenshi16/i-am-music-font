import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Album Cover Text Style: Copy-Paste Guide for Bios, Covers & Thumbnails",
  description:
    "How to create bold album-cover style text for Instagram bios, TikTok, YouTube thumbnails and cover art. Copy-paste friendly tips, font pairing ideas and free generator.",
  alternates: { canonical: "/album-cover-text-style" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function AlbumCoverTextStylePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Album Cover Text Style: Copy-Paste Guide",
        description: metadata.description,
        mainEntityOfPage: `${siteUrl}/album-cover-text-style`,
        author: { "@type": "Organization", name: "I Am Music Font" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I copy and paste album cover style text anywhere?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The layered, stretched effect needs a graphic or a web page. For bios and captions, use single-style bold text via Unicode fonts, or paste a link to your rendered image.",
            },
          },
          {
            "@type": "Question",
            name: "What fonts look like album cover lettering?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bold condensed sans-serif faces (Impact-like) for the back layer paired with a stretched serif (Times-like) for the front layer recreate the classic album cover look.",
            },
          },
          {
            "@type": "Question",
            name: "Is the I Am Music generator free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Type your phrase, adjust palette, scale and stretch, then download a PNG or SVG. No sign-up required and your text stays in the browser.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="content-header">
        <Link className="brand" href="/"><span className="brand-mark">IAM</span><span className="brand-name">I AM MUSIC FONT</span></Link>
        <Link className="top-cta" href="/">Open generator ↗</Link>
      </header>
      <article className="article-shell">
        <p className="eyebrow">Typography field notes / 003</p>
        <h1>Album cover text style:<br /><em>copy, paste &amp; recreate it</em></h1>
        <p className="article-lede">Searches for an “album cover font copy and paste” usually end in frustration: the layered, stretched look you see on cover art cannot survive a plain-text paste. Here is what works in bios and captions, and how to render the real effect for images.</p>
        <div className="article-rule" />
        <section><h2>Why copy-paste breaks the look</h2><p>The album-cover treatment is built from two text layers with different widths, offsets and opacity. A clipboard only carries one stream of plain characters, so the overlap, the stretch and the two-tone contrast disappear the moment you paste. What survives is a single style — and that is exactly what Unicode “bold text” converters imitate.</p></section>
        <section className="callout"><span>THE SHORT VERSION</span><strong>Paste single-style text into bios; render layered text as an image.</strong><p>Bios and captions get Unicode bold. Covers, thumbnails and posts get a PNG export.</p></section>
        <section><h2>Where each approach works</h2><ul className="step-list"><li><strong>Instagram and TikTok bios.</strong> Single-style bold via Unicode characters. Keep it short — long strings look noisy.</li><li><strong>YouTube thumbnails and cover art.</strong> Render the layered effect and export a PNG or SVG, then place it over artwork.</li><li><strong>Posters and merch.</strong> Use the SVG export so the lettering stays sharp at any print size.</li><li><strong>Chat apps and lyrics posts.</strong> Rendered images avoid missing-glyph boxes on phones that lack the characters.</li></ul></section>
        <section><h2>Font pairing that reads “album cover”</h2><p>Two families do most of the work. A heavy condensed sans-serif — think Impact or Swiss 911 style — gives the silhouette. A narrow serif such as a Times style, stretched vertically and offset a few points, becomes the front layer. Contrast matters more than the exact names: one loud, one refined.</p></section>
        <section><h2>Recreate it in one minute</h2><ol className="step-list"><li><strong>Type a short phrase</strong> in the generator — two or three words work best.</li><li><strong>Pick a two-tone palette</strong> so the front layer separates from the back.</li><li><strong>Push the stretch control</strong> until the serif layer nearly collides with the condensed layer.</li><li><strong>Export PNG for social</strong> or SVG for design work, and paste the image where you need it.</li></ol></section>
        <section><h2>Want to try it?</h2><p>The generator runs entirely in your browser — no account, no watermark, and your phrase never leaves the page.</p><Link className="article-button" href="/#generator">Open the generator ↗</Link></section>
        <section className="article-faq"><h2>Frequently asked questions</h2><details open><summary>Can I copy and paste album cover style text anywhere?</summary><p>The layered effect needs a graphic or a web page. For bios and captions, use single-style bold text via Unicode fonts, or paste a link to your rendered image.</p></details><details><summary>What fonts look like album cover lettering?</summary><p>A bold condensed sans-serif for the back layer paired with a stretched serif for the front layer recreates the classic look.</p></details><details><summary>Is the generator free?</summary><p>Yes — type your phrase, adjust the controls and download a PNG or SVG without signing up.</p></details></section>
      </article>
      <footer className="content-footer"><Link href="/">← Back home</Link><Link href="/i-am-music-font">What font is used? →</Link></footer>
    </main>
  );
}
