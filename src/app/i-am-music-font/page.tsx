import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Am Music Font: What Font Is Used?",
  description:
    "Learn how the I AM MUSIC lettering effect is recreated, which font styles are commonly used, and how to make your own layered text online.",
  alternates: { canonical: "/i-am-music-font" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function IAmMusicFontPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "I Am Music Font: What Font Is Used?",
    description: metadata.description,
    mainEntityOfPage: `${siteUrl}/i-am-music-font`,
    author: { "@type": "Organization", name: "I Am Music Font" },
  };

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="content-header">
        <Link className="brand" href="/"><span className="brand-mark">IAM</span><span className="brand-name">I AM MUSIC FONT</span></Link>
        <Link className="top-cta" href="/">Open generator ↗</Link>
      </header>
      <article className="article-shell">
        <p className="eyebrow">Typography field notes / 001</p>
        <h1>I Am Music Font:<br /><em>what font is used?</em></h1>
        <p className="article-lede">The phrase “I AM MUSIC font” usually describes a layered lettering effect rather than one downloadable typeface. It combines a strong condensed background with a narrow serif layer that is stretched, offset and allowed to overlap.</p>
        <div className="article-rule" />
        <section><h2>So, what fonts recreate the look?</h2><p>There is no confirmed public specification that establishes one official font file for the artwork. Online recreations commonly start with a bold condensed sans-serif style for the back layer and a stretched serif style for the front layer. Depending on the recreation, people may reach for Impact-like or Swiss 911-like condensed faces, paired with a Times New Roman-like serif.</p><p>The important part is the construction: the front layer is narrower, taller and slightly displaced. Treat the names as visual references, not as a definitive attribution.</p></section>
        <section className="callout"><span>THE SHORT VERSION</span><strong>It is a type treatment, not a single magic font.</strong><p>Use two layers, push the proportions and keep the overlap visible.</p></section>
        <section><h2>How to make the effect</h2><ol className="step-list"><li><strong>Start with a short phrase.</strong> Two or three words give the layers room to breathe.</li><li><strong>Set a heavy condensed back layer.</strong> This provides the silhouette and the volume.</li><li><strong>Add a stretched serif front layer.</strong> Use a lighter color or reduced opacity and move it slightly.</li><li><strong>Export and test it at real size.</strong> A composition that looks dramatic on screen may need tighter tracking on a cover.</li></ol></section>
        <section><h2>Want to try it?</h2><p>Our free generator gives you separate controls for palette, scale, tracking and front-layer stretch. Your phrase stays in the browser, and you can download a PNG for sharing or SVG for scalable design work.</p><Link className="article-button" href="/#generator">Create your I AM MUSIC style text ↗</Link></section>
        <section className="article-faq"><h2>Frequently asked questions</h2><details open><summary>Is this an official Playboi Carti font?</summary><p>No. This is an independent recreation tool and is not affiliated with Playboi Carti, AWGE or Interscope Records.</p></details><details><summary>Can I download the exact original font?</summary><p>The original lettering may include custom or modified forms. We recommend describing recreations as inspired or similar unless a verified source states otherwise.</p></details><details><summary>Can I use the result commercially?</summary><p>Check the license of every font or asset used in your final composition. The generator does not replace a font license.</p></details></section>
      </article>
      <footer className="content-footer"><Link href="/">← Back home</Link><Link href="/i-am-music-font-generator">Read the generator guide →</Link></footer>
    </main>
  );
}
