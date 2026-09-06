"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Mode = "dark" | "paper" | "acid";

const presets = [
  { name: "NIGHT SHIFT", text: "NIGHT SHIFT", mode: "dark" as Mode },
  { name: "AFTER HOURS", text: "AFTER HOURS", mode: "paper" as Mode },
  { name: "NO SIGNAL", text: "NO SIGNAL", mode: "acid" as Mode },
];

const modes: Record<Mode, { label: string; background: string; foreground: string; ink: string }> = {
  dark: { label: "Obsidian", background: "#0d0d0e", foreground: "#f0ece4", ink: "#f0ece4" },
  paper: { label: "Parchment", background: "#e9e1d1", foreground: "#141414", ink: "#141414" },
  acid: { label: "Acid", background: "#d8ff46", foreground: "#131313", ink: "#131313" },
};

const faqs = [
  {
    question: "What is the I AM MUSIC font?",
    answer: "It is a popular recreation of the layered typography associated with the I AM MUSIC album artwork. The original lettering may include custom or modified forms, so this tool creates an inspired effect rather than claiming to reproduce an official font.",
  },
  {
    question: "How do I create I AM MUSIC style text?",
    answer: "Enter a short phrase, choose a palette, then adjust the background scale, letter spacing and front stretch until the two type layers overlap with the look you want.",
  },
  {
    question: "What font is used for the I AM MUSIC effect?",
    answer: "There is no confirmed public specification for one official font file. Most recreations use a condensed bold layer combined with a stretched serif layer to create the effect.",
  },
  {
    question: "Can I use the designs commercially?",
    answer: "You can use the exported artwork according to the licenses of any fonts or assets you add. This generator itself is unofficial; always verify the license of individual typefaces before commercial use.",
  },
  {
    question: "What file format can I download?",
    answer: "You can export a ready-to-share PNG or a scalable SVG. Both files are generated in your browser and no phrase is uploaded.",
  },
];

function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "your-text";
}

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] ?? character);
}

function Icon({ name }: { name: "arrow" | "download" | "shuffle" }) {
  if (name === "download") return <span aria-hidden="true">↓</span>;
  if (name === "shuffle") return <span aria-hidden="true">↝</span>;
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const initialText = (searchParams.get("text") ?? "").trim().toUpperCase().slice(0, 32) || "I AM MUSIC";
  const [text, setText] = useState(initialText);
  const [mode, setMode] = useState<Mode>("dark");
  const [size, setSize] = useState(86);
  const [tracking, setTracking] = useState(1);
  const [stretch, setStretch] = useState(1.08);
  const [saved, setSaved] = useState(false);
  const palette = modes[mode];

  const displayText = text.trim() || "YOUR TEXT";
  const titleSlug = useMemo(() => slugify(displayText), [displayText]);
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  function applyPreset(preset: (typeof presets)[number]) {
    setText(preset.text);
    setMode(preset.mode);
    setSaved(false);
  }

  function randomize() {
    const phrases = ["NO SIGNAL", "FUTURE CLASSIC", "LOUD SILENCE", "MIDNIGHT FM", "STATIC DREAMS"];
    setText(phrases[Math.floor(Math.random() * phrases.length)]);
    setSaved(false);
  }

  function createExportSvg() {
    const safeText = escapeXml(displayText);
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="${palette.background}"/><text x="600" y="430" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="${size * 3.1}px" letter-spacing="${tracking * 2}px" fill="${palette.foreground}" opacity=".95">${safeText}</text><text x="600" y="430" text-anchor="middle" font-family="Times New Roman, serif" font-size="${size * 2.8}px" letter-spacing="${tracking * 1.5}px" fill="${palette.ink}" opacity=".38" transform="translate(0 0) scale(${stretch} 1)">${safeText}</text></svg>`;
  }

  function downloadBlob(blob: Blob, extension: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${titleSlug}-i-am-music.${extension}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function downloadSvg() {
    const svg = createExportSvg();
    downloadBlob(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }), "svg");
  }

  function downloadPng() {
    const svg = createExportSvg();
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 800;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.drawImage(image, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob, "png");
      }, "image/png");
      URL.revokeObjectURL(image.src);
    };
    image.src = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  }

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="I Am Music Font home">
          <span className="brand-mark">IAM</span>
          <span className="brand-name">I AM MUSIC FONT</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#generator">Generator</a>
          <a href="/i-am-music-font">The story</a>
          <a href="/i-am-music-font-generator">Guide</a>
        </nav>
          <a className="top-cta" href="#generator">Make yours <Icon name="arrow" /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> Type experiment 001 / 2026</p>
          <h1>I AM MUSIC Font<br /><em>Generator.</em></h1>
          <p className="hero-intro">Create <strong>I AM MUSIC font-style text</strong> with layered typography, adjustable spacing, stretch and color controls. Download your design as a PNG or SVG with no sign-up.</p>
          <a className="text-link" href="#generator">Start composing <Icon name="arrow" /></a>
        </div>
        <div className="hero-art" aria-label="A preview of the I AM MUSIC layered text style" role="img">
          <div className="art-label">VOL. 001<br /><span>TEXT / SOUND / FORM</span></div>
          <div className="hero-type hero-type-back">I AM<br />MUSIC</div>
          <div className="hero-type hero-type-front">I AM<br />MUSIC</div>
          <div className="art-stamp">NOT<br />OFFICIAL</div>
          <div className="art-foot">A study in overlap<br />and controlled distortion</div>
        </div>
      </section>

      <section className="generator-section" id="generator">
        <div className="section-heading">
          <div><p className="eyebrow">01 / Generator</p><h2>I AM MUSIC Font<br /><em>Generator.</em></h2></div>
          <p className="section-note">Two layers. One phrase.<br />Zero sign-up.</p>
        </div>
        <div className="generator-grid">
          <div className="preview-wrap">
            <div className="preview-meta"><span>LIVE PREVIEW</span><span>1200 × 800</span></div>
            <div className="preview-card" style={{ backgroundColor: palette.background }}>
              <div className="preview-index">IAM / {titleSlug}</div>
              <svg className="preview-svg" viewBox="0 0 900 560" role="img" aria-label={`${displayText} layered text preview`}>
                <text x="450" y="310" textAnchor="middle" className="svg-back" style={{ fontSize: `${size / 1.8}px`, letterSpacing: `${tracking}px`, fill: palette.foreground }}>{displayText}</text>
                <text x="450" y="310" textAnchor="middle" className="svg-front" style={{ fontSize: `${size / 2}px`, letterSpacing: `${tracking / 2}px`, fill: palette.ink, transform: `translate(450px, 310px) scale(${stretch}, 1) translate(-450px, -310px)` }}>{displayText}</text>
              </svg>
              <div className="preview-footer"><span>DOUBLE LAYER STUDY</span><span>GENERATED LIVE</span></div>
            </div>
          <div className="preview-actions"><button className="button button-primary" onClick={downloadPng}><Icon name="download" /> Download PNG</button><button className="button button-secondary" onClick={downloadSvg}>SVG <Icon name="arrow" /></button><button className={`button button-ghost ${saved ? "is-saved" : ""}`} onClick={() => setSaved(!saved)}>{saved ? "Saved to this session" : "Save composition"}</button></div>
          </div>
          <aside className="controls" aria-label="Generator controls">
            <div className="control-block control-text"><label htmlFor="phrase">Your phrase</label><textarea id="phrase" value={text} onChange={(event) => setText(event.target.value.slice(0, 32))} rows={2} /><div className="input-meta"><span>UPPERCASE LOOKS BEST</span><span>{text.length}/32</span></div></div>
            <div className="control-block"><div className="control-title"><span>Palette</span><span className="control-value">{palette.label}</span></div><div className="swatches">{(Object.keys(modes) as Mode[]).map((key) => <button key={key} className={`swatch swatch-${key} ${mode === key ? "selected" : ""}`} aria-label={`Use ${modes[key].label} palette`} onClick={() => setMode(key)} />)}</div></div>
            <div className="control-block"><div className="control-title"><span>Background scale</span><span className="control-value">{size}px</span></div><input type="range" min="54" max="120" value={size} onChange={(event) => setSize(Number(event.target.value))} /></div>
            <div className="control-block"><div className="control-title"><span>Letter spacing</span><span className="control-value">{tracking}px</span></div><input type="range" min="-2" max="8" step="0.5" value={tracking} onChange={(event) => setTracking(Number(event.target.value))} /></div>
            <div className="control-block"><div className="control-title"><span>Front stretch</span><span className="control-value">{stretch.toFixed(2)}×</span></div><input type="range" min="0.9" max="1.35" step="0.01" value={stretch} onChange={(event) => setStretch(Number(event.target.value))} /></div>
            <button className="random-button" onClick={randomize}><Icon name="shuffle" /> Give me a phrase</button>
          </aside>
        </div>
      </section>

      <section className="ticker" aria-label="Site features"><div>FREE TO USE</div><div>NO SIGN-UP</div><div>BUILT FOR COVERS</div><div>EXPORT YOUR TYPE</div><div>FREE TO USE</div></section>

      <section className="story-section" id="about">
        <div className="story-number">02</div>
        <div className="story-copy"><p className="eyebrow">About the effect</p><h2>What Is the I AM MUSIC<br /><em>Font Effect?</em></h2><p>The I AM MUSIC look is best understood as a constructed effect: a heavy condensed layer underneath, a narrow serif layer stretched over the top, and just enough misalignment to make the letters vibrate.</p><p>We built this tool to make that visual language easy to explore without pretending there is one official typeface behind it.</p><a className="text-link" href="/i-am-music-font">Read the full story <Icon name="arrow" /></a></div>
        <div className="story-quote">“<br /><span>type should<br />feel loud</span><br />”</div>
      </section>

      <section className="guide-section" id="guide"><div className="section-heading"><div><p className="eyebrow">03 / Quick guide</p><h2>Three moves<br /><em>to start.</em></h2></div></div><div className="guide-grid"><article><span>01</span><h3>Write something real</h3><p>Use a title, alias, hook or phrase that already has a pulse. Short words create the strongest silhouette.</p></article><article><span>02</span><h3>Break the balance</h3><p>Push the front stretch and tracking until the two layers stop behaving like a normal type pairing.</p></article><article><span>03</span><h3>Save the signal</h3><p>Export your SVG, drop it into a cover, poster or profile image, and keep the experiment moving.</p></article></div><a className="text-link guide-link" href="/i-am-music-font-generator">Read the complete generator guide <Icon name="arrow" /></a></section>

      <section className="faq-section"><p className="eyebrow">I AM MUSIC Font FAQ</p><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

      <footer className="footer"><div className="footer-brand">I AM MUSIC<br /><em>FONT</em></div><div className="footer-copy"><p>An independent type experiment for people making things.</p><p className="fine-print">Not affiliated with Playboi Carti, AWGE or Interscope Records.</p></div><div className="footer-links"><a href="#top">Back to top ↑</a><a href="#generator">Open generator ↗</a></div></footer>
    </main>
  );
}
