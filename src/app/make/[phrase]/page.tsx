import type { Metadata } from "next";
import Link from "next/link";
import { phrases, getPhrase, type PhraseEntry } from "@/data/phrases";
import Generator from "@/components/Generator";

export const dynamicParams = false;

export function generateStaticParams() {
  return phrases.map((p) => ({ phrase: p.slug }));
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
      a: `Type "${entry.phrase}" into the generator above. It uses two layers — a heavy condensed background and a stretched serif front — that you can tune with the palette, background scale, letter spacing and front stretch controls. Everything renders live in your browser and stays local.`,
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

  /* Cross-links: pick 4 other phrases (2 before, 2 after in the list, wrapping). */
  const idx = phrases.findIndex((p) => p.slug === entry.slug);
  const crossLinks = [
    phrases[(idx - 2 + phrases.length) % phrases.length],
    phrases[(idx - 1 + phrases.length) % phrases.length],
    phrases[(idx + 1) % phrases.length],
    phrases[(idx + 2) % phrases.length],
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `"${entry.phrase}" in I Am Music Font`,
    description: `Make "${entry.phrase}" in the I AM MUSIC layered text style — ${entry.vibe}. Free online generator with PNG and SVG export.`,
    mainEntityOfPage: `${siteUrl}/make/${entry.slug}`,
    author: { "@type": "Organization", name: "I Am Music Font" },
  };

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="content-header">
        <Link className="brand" href="/">
          <span className="brand-mark">IAM</span>
          <span className="brand-name">I AM MUSIC FONT</span>
        </Link>
        <Link className="top-cta" href="/i-am-music-font-generator">Full generator ↗</Link>
      </header>
      <article className="article-shell">
        <p className="eyebrow">Type experiment / {entry.slug}</p>
        <h1>
          &ldquo;{entry.phrase}&rdquo;<br />
          <em>in I AM MUSIC style.</em>
        </h1>
        <p className="article-lede">
          Make &ldquo;{entry.phrase}&rdquo; in the layered two-layer effect — {entry.vibe.toLowerCase()}. Edit the text, switch palettes, adjust the overlap, and export a PNG or SVG directly from this page.
        </p>
        <div className="article-rule" />

        {/* ---- Inline generator ---- */}
        <section>
          <h2>Create &ldquo;{entry.phrase}&rdquo;</h2>
          <p>Edit the text below, adjust the layers, and export. Your phrase stays in your browser — nothing is uploaded.</p>
          <Generator initialText={entry.phrase} initialPalette={entry.palette} compact />
        </section>

        {/* ---- Why this works ---- */}
        <section>
          <h2>Why &ldquo;{entry.phrase}&rdquo; works</h2>
          <p>
            &ldquo;{entry.phrase}&rdquo; is {entry.vibe}. That tension is exactly what the layered I AM MUSIC treatment amplifies — a bold condensed silhouette underneath a narrow serif layer that is stretched and slightly offset, so the letters seem to vibrate.
          </p>
          <p>
            Short phrases like this one create the strongest silhouette, which is why the effect is built around two stacked layers rather than a single typeface. The condensed back layer provides the weight and structure, while the stretched serif front adds character and visual friction.
          </p>
        </section>

        <section className="callout">
          <span>THE SHORT VERSION</span>
          <strong>&ldquo;{entry.phrase}&rdquo; is a cover-ready phrase.</strong>
          <p>Use it for {entry.useCase}. Generate it free and export a PNG or SVG in seconds.</p>
        </section>

        {/* ---- How to make it ---- */}
        <section>
          <h2>How to make it</h2>
          <ol className="step-list">
            <li>
              <strong>Start with the phrase.</strong> &ldquo;{entry.phrase}&rdquo; is pre-filled above. You can change it to any text up to 32 characters — the generator updates live.
            </li>
            <li>
              <strong>Pick a palette.</strong> This phrase ships with the {entry.palette} palette, but try the others — switching from dark to acid completely changes the energy of the same text.
            </li>
            <li>
              <strong>Push the layers.</strong> Adjust the background scale to set the letter size, then use the front stretch slider (1.08×–1.3×) to create the vibrating overlap. Letter spacing controls how tight or loose the composition feels.
            </li>
            <li>
              <strong>Export it.</strong> Download a PNG for posting or an SVG for sharp, scalable design work. Both are generated in your browser — nothing is uploaded.
            </li>
          </ol>
        </section>

        {/* ---- Use cases ---- */}
        <section>
          <h2>Where to use &ldquo;{entry.phrase}&rdquo;</h2>
          <p>
            This phrase is designed for {entry.useCase}. The double-layer I AM MUSIC effect works best when the text is displayed large — it needs room for the overlap between the two type layers to be visible.
          </p>
          <p>
            For digital use, export a PNG and drop it into a social post, profile header or playlist cover. For print or merchandise, export an SVG to keep the text sharp at any size. The vector format is also editable in Illustrator, Figma or Inkscape if you want to add additional design elements.
          </p>
        </section>

        <Faq entry={entry} />

        {/* ---- Cross-links ---- */}
        <section className="cross-links">
          <h2>More phrases to try</h2>
          <div className="cross-links-grid">
            {crossLinks.map((p) => (
              <Link key={p.slug} href={`/make/${p.slug}`} className="cross-link-card">
                <span className="cross-link-phrase">&ldquo;{p.phrase}&rdquo;</span>
                <span className="cross-link-vibe">{p.vibe}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <footer className="content-footer">
        <Link href="/">← Back home</Link>
        <Link href="/i-am-music-font-generator">Full generator →</Link>
        <Link href="/privacy">Privacy</Link>
      </footer>
      <div className="ad-slot" aria-hidden="true"></div>
    </main>
  );
}
