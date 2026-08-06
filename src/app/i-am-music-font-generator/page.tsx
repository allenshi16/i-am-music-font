import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Am Music Font Generator: Free Online Tool",
  description:
    "Use the free I AM MUSIC font generator to create layered text, adjust spacing and stretch, then export a PNG or SVG without signing up.",
  alternates: { canonical: "/i-am-music-font-generator" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function GeneratorGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use the I AM MUSIC font generator",
    description: metadata.description,
    url: `${siteUrl}/i-am-music-font-generator`,
    step: [
      { "@type": "HowToStep", name: "Enter a phrase", text: "Type a short title, name or phrase into the generator." },
      { "@type": "HowToStep", name: "Tune the layers", text: "Adjust the palette, background scale, letter spacing and front stretch." },
      { "@type": "HowToStep", name: "Download the artwork", text: "Export a PNG for sharing or an SVG for scalable design work." },
    ],
  };

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="content-header"><Link className="brand" href="/"><span className="brand-mark">IAM</span><span className="brand-name">I AM MUSIC FONT</span></Link><Link className="top-cta" href="/#generator">Start making ↗</Link></header>
      <article className="article-shell guide-article">
        <p className="eyebrow">Tool guide / 002</p>
        <h1>I Am Music Font<br /><em>Generator</em></h1>
        <p className="article-lede">Build a custom double-layer text effect in your browser. Enter a phrase, tune the relationship between the two type layers, and export a finished graphic without an account.</p>
        <Link className="article-button article-button-acid" href="/#generator">Open the free generator ↗</Link>
        <div className="article-rule" />
        <section><h2>What the generator does</h2><div className="feature-list"><div><span>01</span><strong>Layered preview</strong><p>See the bold background and stretched serif foreground update as you type.</p></div><div><span>02</span><strong>Useful controls</strong><p>Change the palette, scale, tracking and stretch instead of relying on a one-click preset.</p></div><div><span>03</span><strong>Local export</strong><p>PNG and SVG files are created in your browser. Your text is not sent to a server.</p></div></div></section>
        <section><h2>Three steps to a strong result</h2><ol className="step-list"><li><strong>Keep the phrase compact.</strong> Try “NIGHT SHIFT”, “NO SIGNAL” or a short artist/title combination.</li><li><strong>Use contrast intentionally.</strong> Dark and acid palettes make the layers obvious; parchment softens the effect.</li><li><strong>Adjust the front layer last.</strong> Start with tracking, then stretch the serif layer until it feels taller than expected.</li></ol></section>
        <section className="callout"><span>EXPORT TIP</span><strong>Use PNG for social posts and SVG for production layouts.</strong><p>SVG remains sharp when you scale it for a poster, while PNG is quick to upload and share.</p></section>
        <section><h2>Is this an official tool?</h2><p>No. It is an independent, unofficial recreation of a visual style associated with the I AM MUSIC artwork. The tool does not provide official album artwork or claim to identify an original proprietary font.</p></section>
      </article>
      <footer className="content-footer"><Link href="/">← Back home</Link><Link href="/i-am-music-font">What is this font style? →</Link></footer>
    </main>
  );
}
