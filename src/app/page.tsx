import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "I Am Music Font: Free Online Generator",
  description:
    "I Am Music font — the layered double-layer text effect from the iconic album artwork. Create it free online, adjust spacing and color, export PNG or SVG.",
  keywords: [
    "i am music font",
    "i am music text",
    "i am music logo",
    "i am music typography",
    "double layer font effect",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "I Am Music Font: Free Online Generator",
    description:
      "The layered double-layer text effect from the iconic album artwork. Create it free, export PNG or SVG.",
    type: "website",
    siteName: "I Am Music Font",
  },
};

const faqs = [
  {
    question: "What is the I Am Music font?",
    answer:
      "The I Am Music font refers to the layered typography style used on Playboi Carti's album artwork. It is not a single downloadable typeface — it is a visual effect built from two type layers: a heavy condensed sans-serif in the background and a narrow serif stretched and offset on top. The result is a vibrating, overlapping letterform that reads as one unified mark.",
  },
  {
    question: "What font files recreate the I Am Music look?",
    answer:
      "There is no confirmed official font file. Most recreations use a bold condensed face like Impact or Swiss 911 Condensed for the back layer, paired with a serif like Times New Roman or Georgia for the front layer. The front layer is stretched horizontally (around 1.1× to 1.3×), set at reduced opacity, and shifted slightly to create the overlapping effect. The exact combination depends on the recreation.",
  },
  {
    question: "How do I create I Am Music style text?",
    answer:
      "Enter a short phrase into the generator, choose a color palette (Obsidian, Parchment or Acid), then adjust the background scale, letter spacing and front stretch until the two layers overlap the way you want. Export a PNG for social sharing or an SVG for scalable design work. The entire process runs in your browser — no text is uploaded to any server.",
  },
  {
    question: "Is this the official Playboi Carti font?",
    answer:
      "No. This is an independent, unofficial recreation tool. It is not affiliated with Playboi Carti, AWGE or Interscope Records. The original lettering may include custom or modified forms that are not publicly available as a font file. This generator creates an inspired effect, not a verified reproduction.",
  },
  {
    question: "Can I use the generated designs commercially?",
    answer:
      "The generator itself is free to use and does not restrict how you use your exports. However, the final design may be subject to the licensing terms of the system fonts rendered in your browser (Impact, Georgia, etc.). For commercial work, verify the license of every typeface in your composition. The generator does not replace a font license.",
  },
  {
    question: "What characters and languages are supported?",
    answer:
      "The generator renders any characters available in the system fonts used by your browser — this covers Latin characters (A–Z), numbers, and common punctuation. For best results, use uppercase Latin text with short phrases of 2–3 words. Extended character sets, CJK characters and emoji may not render correctly in the layered effect.",
  },
  {
    question: "Is my text uploaded to a server?",
    answer:
      "No. Everything — the live preview, the PNG export and the SVG export — is generated entirely in your browser using JavaScript and the Canvas API. Your phrase never leaves your device. This is a deliberate design choice: it means the tool works offline after the page loads, and there is no privacy concern around the text you type.",
  },
  {
    question: "What is the difference between PNG and SVG export?",
    answer:
      "PNG is a raster image at 1200×800 pixels — ideal for social media posts, profile images and quick sharing. SVG is a scalable vector file — the text stays sharp at any size, making it the right choice for posters, album covers and print layouts. Both are generated locally in your browser.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className="grain" aria-hidden="true" />

      {/* ---- Top bar ---- */}
      <header className="topbar">
        <a className="brand" href="#top" aria-label="I Am Music Font home">
          <span className="brand-mark">IAM</span>
          <span className="brand-name">I AM MUSIC FONT</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/i-am-music-font-generator">Generator</a>
          <a href="#how-to">How to</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="top-cta" href="/i-am-music-font-generator">
          Open generator <span aria-hidden="true">↗</span>
        </a>
      </header>

      {/* ---- Hero ---- */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse-dot" /> Type experiment 001 / 2026
          </p>
          <h1>
            I Am Music<br />
            <em>Font.</em>
          </h1>
          <p className="hero-intro">
            The <strong>I Am Music font</strong> look is one of the most recognizable pieces of album typography in recent years — a heavy condensed layer underneath, a stretched serif on top, and just enough overlap to make the letters vibrate. Create your own version with the free generator below.
          </p>
          <a className="text-link" href="/i-am-music-font-generator">
            Open the generator <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-art" aria-label="A preview of the I AM MUSIC layered text style" role="img">
          <div className="art-label">
            VOL. 001<br />
            <span>TEXT / SOUND / FORM</span>
          </div>
          <div className="hero-type hero-type-back">I AM<br />MUSIC</div>
          <div className="hero-type hero-type-front">I AM<br />MUSIC</div>
          <div className="art-stamp">
            NOT<br />OFFICIAL
          </div>
          <div className="art-foot">
            A study in overlap<br />
            and controlled distortion
          </div>
        </div>
      </section>

      {/* ---- CTA band ---- */}
      <section className="cta-band">
        <div>
          <h2>Make your own<br /><em>I Am Music text.</em></h2>
          <p>Type a phrase, pick a palette, export PNG or SVG. No sign-up, no upload.</p>
        </div>
        <a className="cta-band-button" href="/i-am-music-font-generator">Open the free generator ↗</a>
      </section>

      {/* ---- Features ---- */}
      <section className="features-section" id="features">
        <p className="eyebrow">What you get</p>
        <h2>Free. Local. No sign-up.</h2>
        <div className="features-grid">
          <div>
            <span>01</span>
            <h3>Double-layer effect</h3>
            <p>A bold condensed background and a stretched serif foreground — the two layers that define the I Am Music look. Adjust the overlap, stretch and spacing until it feels right.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Three palettes</h3>
            <p>Obsidian black, warm parchment or acid green. Each palette changes the mood of the composition completely — from dark and cinematic to bright and confrontational.</p>
          </div>
          <div>
            <span>03</span>
            <h3>100% local export</h3>
            <p>Your phrase is never uploaded. PNG and SVG files are generated in your browser using the Canvas API. The tool works offline after the page loads and there is zero privacy risk.</p>
          </div>
        </div>
      </section>

      {/* ---- How to ---- */}
      <section className="howto-section" id="how-to">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Step by step</p>
            <h2>How to create<br /><em>I Am Music text.</em></h2>
          </div>
        </div>
        <div className="howto-grid">
          <article>
            <span>01</span>
            <h3>Choose a short phrase</h3>
            <p>Two or three words work best. The I Am Music effect relies on a strong, compact silhouette, so shorter phrases create more impact. Try an artist name, album title, or a phrase that carries weight — "NIGHT SHIFT", "NO SIGNAL", "LOUD SILENCE".</p>
          </article>
          <article>
            <span>02</span>
            <h3>Set the back layer</h3>
            <p>The background layer is a heavy condensed sans-serif — think Impact or a Swiss 911-style face. Push the background scale up until the letters fill the frame. This layer provides the silhouette and the volume of the composition.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Stretch the front layer</h3>
            <p>The foreground is a narrow serif (Georgia or Times New Roman) stretched horizontally and set at reduced opacity. Push the front stretch to around 1.1×–1.3× and adjust the letter spacing until the two layers overlap with the vibrating effect the style is known for.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Pick a palette and export</h3>
            <p>Choose Obsidian for a dark, cinematic feel, Parchment for a warmer vintage look, or Acid for maximum contrast. Then export a PNG for social media or an SVG for print and design work. Both are generated locally in your browser.</p>
          </article>
        </div>
        <a className="text-link" href="/i-am-music-font-generator">Try it in the generator <span aria-hidden="true">↗</span></a>
      </section>

      {/* ---- Double-layer principle ---- */}
      <section className="principle-section" id="the-effect">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The visual principle</p>
            <h2>Two layers.<br /><em>One phrase.</em></h2>
          </div>
        </div>
        <div className="principle-content">
          <p>The I Am Music look is not a single font — it is a constructed effect. Understanding how the two layers interact is the key to recreating it with any phrase, not just the original album text.</p>
          <p><strong>The back layer</strong> is a bold condensed sans-serif. It provides the structural foundation: the weight, the silhouette, the overall volume of the letterforms. This layer is rendered at full opacity and anchors the composition. Think of it as the "body" of the text.</p>
          <p><strong>The front layer</strong> is a narrow serif — typically Georgia or Times New Roman in italic — that is stretched horizontally (usually between 1.1× and 1.35×). It is rendered at roughly 40% opacity and positioned directly on top of the back layer. The stretch makes the serif letters wider than their natural proportions, and the reduced opacity allows the back layer to show through, creating the signature vibrating overlap.</p>
          <p>The magic is in the misalignment. Because the two layers use different typefaces with different proportions, the letters don't line up perfectly. The serif strokes extend beyond the sans-serif edges, the curved bowls overlap differently, and the result is a sense of controlled distortion — the text looks like it's vibrating or shimmering. This is what makes the effect immediately recognizable.</p>
          <p>The best results come from short phrases in uppercase. Two or three words give each letter enough room for the overlap to be visible without becoming muddy. Longer phrases tend to lose the effect because the letters crowd together and the layer distinction breaks down.</p>
        </div>
      </section>

      {/* ---- Palette comparison ---- */}
      <section className="palette-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Color options</p>
            <h2>Three palettes,<br /><em>three moods.</em></h2>
          </div>
        </div>
        <div className="palette-grid">
          <div className="palette-card" style={{ backgroundColor: "#0d0d0e", color: "#f0ece4" }}>
            <h3>Obsidian</h3>
            <p>Dark background with light text. The most cinematic palette — it reads as moody, authoritative and close to the original album artwork's energy. Best for dramatic covers, dark-mode profiles and poster work.</p>
            <span className="palette-tag">DARK / CINEMATIC</span>
          </div>
          <div className="palette-card" style={{ backgroundColor: "#e9e1d1", color: "#141414" }}>
            <h3>Parchment</h3>
            <p>Warm paper background with dark text. Softens the effect and gives it a vintage, printed-matter quality. Works well for editorial layouts, zines and anything that should feel tactile rather than digital.</p>
            <span className="palette-tag">WARM / VINTAGE</span>
          </div>
          <div className="palette-card" style={{ backgroundColor: "#d8ff46", color: "#131313" }}>
            <h3>Acid</h3>
            <p>High-contrast neon green with dark text. The most attention-grabbing palette — it pushes the effect into confrontational, internet-native territory. Ideal for social posts, teasers and anything that needs to stop the scroll.</p>
            <span className="palette-tag">NEON / CONFRONTATIONAL</span>
          </div>
        </div>
      </section>

      {/* ---- PNG vs SVG ---- */}
      <section className="format-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Export formats</p>
            <h2>PNG vs SVG:<br /><em>which to use.</em></h2>
          </div>
        </div>
        <div className="format-grid">
          <div>
            <h3>PNG</h3>
            <p>A raster image at 1200×800 pixels. Ready to upload to social media, use as a profile image, or embed in a document. PNG is the fastest option for sharing — the file is self-contained and every platform supports it. The trade-off is that it has a fixed resolution: if you scale it up beyond 1200×800, the text will start to look soft.</p>
            <p><strong>Use PNG for:</strong> social media posts, profile headers, messaging, quick mockups, email signatures.</p>
          </div>
          <div>
            <h3>SVG</h3>
            <p>A scalable vector file. The text is defined as mathematical paths rather than pixels, which means it stays perfectly sharp at any size — from a small icon to a full-size poster. SVG is the right choice when you need to scale the design or edit it further in a vector editor like Illustrator or Figma.</p>
            <p><strong>Use SVG for:</strong> album covers, posters, print layouts, merchandise, any design that needs to scale.</p>
          </div>
        </div>
      </section>

      {/* ---- Unofficial notice ---- */}
      <section className="callout">
        <span>IMPORTANT</span>
        <strong>This is an unofficial tool.</strong>
        <p>The I Am Music font generator is an independent project and is not affiliated with Playboi Carti, AWGE or Interscope Records. The original lettering may include custom or modified forms that are not available as a public font file. This tool creates an inspired effect — describe your results as "inspired by" or "similar to" rather than claiming an exact match.</p>
      </section>

      {/* ---- Supported text and characters ---- */}
      <section className="principle-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical details</p>
            <h2>What text works<br /><em>best?</em></h2>
          </div>
        </div>
        <div className="principle-content">
          <p>The generator renders any characters that are available in the system fonts on your device. This covers the full Latin alphabet (A–Z), numbers (0–9), and common punctuation marks. The text is automatically converted to uppercase, which is where the effect looks strongest — the condensed letterforms were designed for all-caps settings.</p>
          <p><strong>For the best results, use 2–3 short words.</strong> The double-layer effect needs each letter to have room to breathe. When the phrase is too long, the condensed back layer and the stretched serif front layer crowd together, and the overlap that gives the style its character becomes a blur. Phrases like "NO SIGNAL", "NIGHT SHIFT" or "AFTER HOURS" hit the sweet spot: short enough for the layers to separate, long enough to feel like a statement.</p>
          <p>Extended Latin characters (accents, umlauts) will generally render, but may not match the condensed proportions of the back layer perfectly. CJK characters (Chinese, Japanese, Korean), Arabic, Cyrillic and emoji are not supported by the Impact/Georgia font stack and will not display correctly in the layered effect. If you need to work with non-Latin text, consider using the SVG export and editing the result in a vector editor where you can substitute appropriate typefaces.</p>
        </div>
      </section>

      {/* ---- Common uses ---- */}
      <section className="format-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Use cases</p>
            <h2>Where people<br /><em>use this.</em></h2>
          </div>
        </div>
        <div className="format-grid">
          <div>
            <h3>Cover artwork</h3>
            <p>The most common use. Export an SVG for a scalable, print-ready file that stays sharp at album cover dimensions (3000×3000px for most distributors). The layered effect reads well at this size because the overlap between the two type layers is visible without becoming muddy.</p>
            <p><strong>Also works for:</strong> podcast covers, playlist artwork, mixtape sleeves, zine covers.</p>
          </div>
          <div>
            <h3>Social and profile images</h3>
            <p>Export a PNG for immediate use as a profile header, post graphic or story background. The 1200×800 export fits standard social media aspect ratios. The acid palette is particularly effective for stopping the scroll on visually busy feeds.</p>
            <p><strong>Also works for:</strong> YouTube thumbnails, banner images, event teasers, link-in-bio graphics.</p>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="faq-section" id="faq">
        <p className="eyebrow">Frequently asked questions</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="footer">
        <div className="footer-brand">
          I AM MUSIC<br />
          <em>FONT</em>
        </div>
        <div className="footer-copy">
          <p>An independent type experiment for people making things.</p>
          <p className="fine-print">
            Not affiliated with Playboi Carti, AWGE or Interscope Records.
          </p>
        </div>
        <div className="footer-links">
          <a href="/i-am-music-font-generator">Open generator ↗</a>
          <a href="/make/no-signal">Example: NO SIGNAL</a>
          <a href="/make/after-hours">Example: AFTER HOURS</a>
          <a href="/privacy">Privacy</a>
        </div>
      </footer>
      <div className="ad-slot" aria-hidden="true"></div>
    </main>
  );
}
