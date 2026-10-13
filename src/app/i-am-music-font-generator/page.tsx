import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "I Am Music Font Generator — Free Double-Layer Text Tool",
  description:
    "Free I Am Music font generator. Create layered double-layer text, adjust spacing, stretch and color. Export PNG or SVG — no sign-up, text never leaves your browser.",
  keywords: [
    "i am music font generator",
    "i am music text generator",
    "i am music maker",
    "double layer text generator",
    "music font text effect",
  ],
  alternates: { canonical: "/i-am-music-font-generator" },
  openGraph: {
    title: "I Am Music Font Generator — Free Double-Layer Text Tool",
    description:
      "Create layered text in the I AM MUSIC style. Free, no sign-up, 100% local export.",
    type: "website",
    url: `${siteUrl}/i-am-music-font-generator`,
  },
};

const faqs = [
  {
    question: "How do I use the I Am Music font generator?",
    answer:
      "Type a short phrase (2–3 words works best) into the text field, choose a color palette, then adjust the background scale, letter spacing and front stretch until the two layers overlap the way you want. Click Download PNG or SVG to export. The entire process runs in your browser — your text is never uploaded.",
  },
  {
    question: "Is my text sent to a server?",
    answer:
      "No. The generator runs entirely in your browser. The PNG is rendered using the Canvas API and the SVG is assembled as a string — neither requires a network request. Your phrase stays on your device, which means the tool also works offline after the initial page load.",
  },
  {
    question: "What is the difference between PNG and SVG export?",
    answer:
      "PNG is a 1200×800 pixel raster image — ideal for social media, profile images and quick sharing. SVG is a scalable vector file that stays sharp at any size — use it for album covers, posters, merchandise and print layouts where the design needs to scale without losing quality.",
  },
  {
    question: "Can I use the generated designs commercially?",
    answer:
      "The generator is free and does not restrict your use of the exports. However, the rendered text uses system fonts (Impact, Georgia, etc.) that are subject to their own licensing. For commercial projects, verify that your use of these typefaces complies with their respective licenses.",
  },
  {
    question: "What makes this different from other generators?",
    answer:
      "Three things: first, your text never leaves your browser — there is no server-side rendering of your phrase, which is a genuine privacy advantage. Second, you get direct control over the two layer parameters (scale, spacing, stretch) instead of being limited to one-click presets. Third, both PNG and SVG export are available with no sign-up or watermark.",
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

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use the I Am Music Font Generator",
  description:
    "Create layered text in the I AM MUSIC style with the free online generator. Adjust spacing, stretch and color, then export PNG or SVG.",
  url: `${siteUrl}/i-am-music-font-generator`,
  step: [
    {
      "@type": "HowToStep",
      name: "Enter a phrase",
      text: 'Type a short title, name or phrase (2–3 words works best) into the "Your phrase" field. The text auto-converts to uppercase.',
    },
    {
      "@type": "HowToStep",
      name: "Choose a palette",
      text: "Select Obsidian (dark), Parchment (warm) or Acid (neon) from the palette swatches. Each palette changes the mood of the composition.",
    },
    {
      "@type": "HowToStep",
      name: "Adjust the layers",
      text: "Use the Background scale slider to set the size of the condensed back layer. Use Letter spacing to control how tight or loose the letters sit. Use Front stretch to widen or narrow the serif overlay.",
    },
    {
      "@type": "HowToStep",
      name: "Export your design",
      text: "Click Download PNG for a 1200×800 image ready for social media, or SVG for a scalable vector file for print and design work.",
    },
  ],
};

export default function GeneratorPage() {
  return (
    <main className="content-page gen-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqStructuredData, howToStructuredData]) }}
      />

      {/* ---- Top bar ---- */}
      <header className="content-header">
        <Link className="brand" href="/">
          <span className="brand-mark">IAM</span>
          <span className="brand-name">I AM MUSIC FONT</span>
        </Link>
        <nav className="content-nav">
          <a href="#generator">Generator</a>
          <a href="#how-to-use">How to</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      {/* ---- Hero ---- */}
      <section className="gen-hero">
        <p className="eyebrow">Free online tool / No sign-up</p>
        <h1>
          I Am Music Font<br />
          <em>Generator</em>
        </h1>
        <p className="gen-hero-lede">
          Create layered text in the I Am Music style. Type a phrase, adjust the double-layer effect, and export a PNG or SVG — all in your browser, with no text uploaded to any server.
        </p>
        <div className="gen-hero-badges">
          <span>100% LOCAL</span>
          <span>NO SIGN-UP</span>
          <span>PNG + SVG</span>
          <span>FREE</span>
        </div>
      </section>

      {/* ---- The generator ---- */}
      <section className="gen-tool-section" id="generator">
        <Generator />
      </section>

      {/* ---- Showcase presets ---- */}
      <section className="showcase-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ready-made styles</p>
            <h2>Start from a<br /><em>preset.</em></h2>
          </div>
          <p className="section-note">Click any style to load it<br />into the generator above.</p>
        </div>
        <div className="showcase-grid">
          {[
            { text: "NO SIGNAL", mode: "acid", size: 90, tracking: 2, stretch: 1.15 },
            { text: "AFTER HOURS", mode: "dark", size: 82, tracking: 1, stretch: 1.08 },
            { text: "NIGHT SHIFT", mode: "dark", size: 86, tracking: 1.5, stretch: 1.1 },
            { text: "FUTURE CLASSIC", mode: "paper", size: 78, tracking: 0.5, stretch: 1.2 },
            { text: "LOUD SILENCE", mode: "dark", size: 84, tracking: 3, stretch: 1.05 },
            { text: "MIDNIGHT FM", mode: "acid", size: 92, tracking: 1, stretch: 1.25 },
            { text: "DEAD AIR", mode: "dark", size: 96, tracking: 4, stretch: 1.0 },
            { text: "ON REPEAT", mode: "paper", size: 80, tracking: 0, stretch: 1.18 },
          ].map((preset) => {
            const colors: Record<string, { bg: string; fg: string; ink: string }> = {
              dark: { bg: "#0d0d0e", fg: "#f0ece4", ink: "#f0ece4" },
              paper: { bg: "#e9e1d1", fg: "#141414", ink: "#141414" },
              acid: { bg: "#d8ff46", fg: "#131313", ink: "#131313" },
            };
            const c = colors[preset.mode];
            return (
              <a
                key={preset.text}
                className="showcase-card"
                href={`?text=${encodeURIComponent(preset.text)}#generator`}
              >
                <div className="showcase-preview" style={{ backgroundColor: c.bg }}>
                  <svg viewBox="0 0 900 560">
                    <text
                      x="450" y="310" textAnchor="middle"
                      style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: preset.size * 0.55, letterSpacing: preset.tracking, fill: c.fg }}
                    >{preset.text}</text>
                    <text
                      x="450" y="310" textAnchor="middle"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", fontSize: preset.size * 0.5, letterSpacing: preset.tracking * 0.5, fill: c.ink, opacity: 0.42, transform: `translate(450px, 310px) scale(${preset.stretch}, 1) translate(-450px, -310px)` }}
                    >{preset.text}</text>
                  </svg>
                </div>
                <span className="showcase-label">{preset.text}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ---- How to use ---- */}
      <article className="gen-article" id="how-to-use">
        <div className="article-rule" />

        <section>
          <h2>How to use the generator</h2>
          <p>The I Am Music font generator is designed to be immediate: type a phrase, see the effect, export. But there are a few things worth knowing to get the strongest result.</p>
          <ol className="step-list">
            <li>
              <strong>Start with a compact phrase.</strong> Two or three words create the cleanest silhouette. The double-layer effect needs room for each letter to breathe — longer phrases crowd the layers together and the overlap becomes muddy. Try "NIGHT SHIFT", "NO SIGNAL" or a short artist name.
            </li>
            <li>
              <strong>Set the back layer first.</strong> The Background scale slider controls the size of the bold condensed layer. Push it up until the letters fill the frame horizontally. This layer is the structural foundation — it provides the weight and the shape of the composition.
            </li>
            <li>
              <strong>Adjust letter spacing.</strong> Tight spacing (0–2px) creates a dense, monolithic feel. Wider spacing (3–6px) gives each letter room and makes the overlap more visible. The right value depends on the phrase length and the mood you want.
            </li>
            <li>
              <strong>Stretch the front layer.</strong> This is where the I Am Music character comes through. The front serif layer should be stretched between 1.08× and 1.3× — enough to widen the letters beyond their natural proportions and create the vibrating overlap with the back layer. Push it too far and the effect breaks; too little and it just looks like two fonts stacked.
            </li>
            <li>
              <strong>Export in the right format.</strong> PNG for social posts and quick sharing. SVG for album covers, posters and anything that needs to scale. Both are generated locally — your text is never uploaded.
            </li>
          </ol>
        </section>

        <section className="callout">
          <span>PRIVACY</span>
          <strong>Your text never leaves your browser.</strong>
          <p>Unlike most online generators, this tool renders everything client-side using the Canvas API and inline SVG. There is no server processing your phrase, no database storing your designs, and no upload step. The page works offline after the initial load. This is a deliberate design choice — it means zero privacy risk and instant export.</p>
        </section>

        <section>
          <h2>When to use PNG vs SVG</h2>
          <p>The generator offers two export formats, and choosing the right one depends on where the design will end up.</p>
          <p><strong>PNG</strong> exports a 1200×800 pixel raster image. It is the universal format — every platform, app and operating system can display a PNG. Use it for social media posts (Instagram, Twitter/X, TikTok thumbnails), profile images, messaging, email headers and quick mockups. The limitation is resolution: at 1200×800 it looks sharp on screen, but if you try to scale it up for a poster or banner, the text will start to soften.</p>
          <p><strong>SVG</strong> exports a scalable vector file. The text is defined as mathematical shapes rather than pixels, which means it stays perfectly crisp at any size — from a 200px icon to a 2-meter banner. Use SVG for album covers, poster designs, merchandise (t-shirts, stickers), print layouts and any situation where the design needs to scale. SVG files can also be opened in vector editors like Adobe Illustrator, Figma or Inkscape for further editing.</p>
        </section>

        <section>
          <h2>Commercial use and licensing</h2>
          <p>The generator itself is free and does not impose restrictions on how you use your exported designs. However, there are a few things to keep in mind for commercial work.</p>
          <p>The rendered text uses system fonts that are pre-installed on your device — typically Impact (or Arial Narrow) for the back layer and Georgia (or Times New Roman) for the front layer. These typefaces are licensed by your operating system, and their commercial use terms vary. On most systems, using them in static designs (covers, posters, social posts) is permitted, but embedding them in a product (a font file, a template, a logo) may require a separate license.</p>
          <p>The I Am Music name and associated artwork are linked to Playboi Carti, AWGE and Interscope Records. This generator is unofficial and independent. If you plan to use a generated design for a commercial release, describe the style as "inspired by" rather than claiming it is the official font, and consider replacing the system typefaces with properly licensed alternatives for the final production artwork.</p>
        </section>

        <section>
          <h2>What makes this generator different</h2>
          <p>There are other tools that create similar effects, but this one has three structural advantages.</p>
          <p><strong>Privacy-first architecture.</strong> Your phrase is never sent to a server. The PNG is rendered using the Canvas API in your browser, and the SVG is assembled as a string in JavaScript. There is no backend processing, no database, and no upload step. This matters because it means the tool works offline, has zero latency on export, and there is no privacy concern about the text you type.</p>
          <p><strong>Direct parameter control.</strong> Instead of offering one-click presets that lock you into a fixed look, the generator exposes the three parameters that actually control the effect: background scale (the size of the condensed layer), letter spacing (how tight or loose the letters sit), and front stretch (how much the serif overlay is widened horizontally). This gives you fine-grained control over the final result.</p>
          <p><strong>Dual-format export with no sign-up.</strong> Both PNG and SVG are available immediately, with no account creation, no watermark and no usage limit. The SVG export in particular is rare among free generators — most tools only offer raster output.</p>
        </section>

        {/* ---- FAQ ---- */}
        <section className="article-faq" id="faq">
          <h2>Frequently asked questions</h2>
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </article>

      {/* ---- Footer ---- */}
      <footer className="content-footer">
        <Link href="/">← Back home</Link>
        <Link href="/make/no-signal">NO SIGNAL →</Link>
        <Link href="/make/after-hours">AFTER HOURS →</Link>
        <Link href="/privacy">Privacy</Link>
      </footer>
      <div className="ad-slot" aria-hidden="true"></div>
    </main>
  );
}
