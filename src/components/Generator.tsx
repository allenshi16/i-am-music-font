"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export type Mode = "dark" | "paper" | "acid";

export const modes: Record<Mode, { label: string; background: string; foreground: string; ink: string }> = {
  dark: { label: "Obsidian", background: "#0d0d0e", foreground: "#f0ece4", ink: "#f0ece4" },
  paper: { label: "Parchment", background: "#e9e1d1", foreground: "#141414", ink: "#141414" },
  acid: { label: "Acid", background: "#d8ff46", foreground: "#131313", ink: "#131313" },
};

export interface GeneratorProps {
  /** Initial text (used on /make/* pages where phrase is known at build time). */
  initialText?: string;
  /** Initial palette (used on /make/* pages). */
  initialPalette?: Mode;
  /** Compact layout for embedding in phrase pages. */
  compact?: boolean;
  /** Render the preset showcase below the tool (generator page only). */
  showPresets?: boolean;
}

const PRESETS: { text: string; mode: Mode; size: number; tracking: number; stretch: number }[] = [
  { text: "NO SIGNAL", mode: "acid", size: 90, tracking: 2, stretch: 1.15 },
  { text: "AFTER HOURS", mode: "dark", size: 82, tracking: 1, stretch: 1.08 },
  { text: "NIGHT SHIFT", mode: "dark", size: 86, tracking: 1.5, stretch: 1.1 },
  { text: "FUTURE CLASSIC", mode: "paper", size: 78, tracking: 0.5, stretch: 1.2 },
  { text: "LOUD SILENCE", mode: "dark", size: 84, tracking: 3, stretch: 1.05 },
  { text: "MIDNIGHT FM", mode: "acid", size: 92, tracking: 1, stretch: 1.25 },
  { text: "DEAD AIR", mode: "dark", size: 96, tracking: 4, stretch: 1.0 },
  { text: "ON REPEAT", mode: "paper", size: 80, tracking: 0, stretch: 1.18 },
];

function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "your-text";
}

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c] ?? c),
  );
}

function Icon({ name }: { name: "arrow" | "download" | "shuffle" | "check" }) {
  if (name === "download") return <span aria-hidden="true">↓</span>;
  if (name === "shuffle") return <span aria-hidden="true">↝</span>;
  if (name === "check") return <span aria-hidden="true">✓</span>;
  return <span aria-hidden="true">↗</span>;
}

/* -------------------------------------------------------------------------- */
/*  Core generator (needs Suspense because of useSearchParams)                */
/* -------------------------------------------------------------------------- */

function GeneratorCore({ initialText, initialPalette, compact = false, showPresets = false }: GeneratorProps) {
  const searchParams = useSearchParams();
  const fromUrl = (searchParams.get("text") ?? "").trim().toUpperCase().slice(0, 32);
  const seed = initialText || fromUrl || "I AM MUSIC";

  const [text, setText] = useState(seed);
  const [mode, setMode] = useState<Mode>(initialPalette ?? "dark");
  const [size, setSize] = useState(86);
  const [tracking, setTracking] = useState(1);
  const [stretch, setStretch] = useState(1.08);
  const [copied, setCopied] = useState(false);

  const palette = modes[mode];
  const displayText = text.trim() || "YOUR TEXT";
  const titleSlug = useMemo(() => slugify(displayText), [displayText]);

  /* ---- export helpers ---- */
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
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function downloadSvg() {
    downloadBlob(new Blob([createExportSvg()], { type: "image/svg+xml;charset=utf-8" }), "svg");
  }

  function downloadPng() {
    const svg = createExportSvg();
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(image, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob, "png");
      }, "image/png");
      URL.revokeObjectURL(image.src);
    };
    image.src = URL.createObjectURL(new Blob([createExportSvg()], { type: "image/svg+xml;charset=utf-8" }));
  }

  function shareUrl() {
    const url = `${window.location.origin}/i-am-music-font-generator?text=${encodeURIComponent(displayText)}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function randomize() {
    const phrases = ["NO SIGNAL", "FUTURE CLASSIC", "LOUD SILENCE", "MIDNIGHT FM", "STATIC DREAMS", "AFTER HOURS", "NIGHT SHIFT", "DEAD AIR"];
    setText(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  function applyPreset(preset: (typeof PRESETS)[number]) {
    setText(preset.text);
    setMode(preset.mode);
    setSize(preset.size);
    setTracking(preset.tracking);
    setStretch(preset.stretch);
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  }

  /* ---- render ---- */
  return (
    <div className={compact ? "gen-compact" : "gen-full"}>
      {/* Privacy callout — key differentiator */}
      <div className="privacy-callout">
        <span className="privacy-icon">🔒</span>
        <span>Your text stays in your browser. Nothing is uploaded — ever.</span>
      </div>

      <div className="generator-grid">
        {/* Preview */}
        <div className="preview-wrap">
          <div className="preview-meta">
            <span>LIVE PREVIEW</span>
            <span>1200 × 800</span>
          </div>
          <div className="preview-card" style={{ backgroundColor: palette.background }}>
            <div className="preview-index">IAM / {titleSlug}</div>
            <svg className="preview-svg" viewBox="0 0 900 560" role="img" aria-label={`${displayText} layered text preview`}>
              <text x="450" y="310" textAnchor="middle" className="svg-back" style={{ fontSize: `${size / 1.8}px`, letterSpacing: `${tracking}px`, fill: palette.foreground }}>{displayText}</text>
              <text x="450" y="310" textAnchor="middle" className="svg-front" style={{ fontSize: `${size / 2}px`, letterSpacing: `${tracking / 2}px`, fill: palette.ink, transform: `translate(450px, 310px) scale(${stretch}, 1) translate(-450px, -310px)` }}>{displayText}</text>
            </svg>
            <div className="preview-footer">
              <span>DOUBLE LAYER STUDY</span>
              <span>GENERATED LIVE</span>
            </div>
          </div>
          <div className="preview-actions">
            <button className="button button-primary" onClick={downloadPng}>
              <Icon name="download" /> Download PNG
            </button>
            <button className="button button-secondary" onClick={downloadSvg}>
              SVG <Icon name="arrow" />
            </button>
            <button className="button button-ghost" onClick={shareUrl}>
              {copied ? <><Icon name="check" /> Copied</> : "Share link"}
            </button>
          </div>
        </div>

        {/* Controls */}
        <aside className="controls" aria-label="Generator controls">
          <div className="control-block control-text">
            <label htmlFor="phrase">Your phrase</label>
            <textarea
              id="phrase"
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 32).toUpperCase())}
              rows={2}
            />
            <div className="input-meta">
              <span>UPPERCASE LOOKS BEST</span>
              <span>{text.length}/32</span>
            </div>
          </div>
          <div className="control-block">
            <div className="control-title">
              <span>Palette</span>
              <span className="control-value">{palette.label}</span>
            </div>
            <div className="swatches">
              {(Object.keys(modes) as Mode[]).map((key) => (
                <button
                  key={key}
                  className={`swatch swatch-${key} ${mode === key ? "selected" : ""}`}
                  aria-label={`Use ${modes[key].label} palette`}
                  onClick={() => setMode(key)}
                />
              ))}
            </div>
          </div>
          <div className="control-block">
            <div className="control-title">
              <span>Background scale</span>
              <span className="control-value">{size}px</span>
            </div>
            <input type="range" min="54" max="120" value={size} onChange={(e) => setSize(Number(e.target.value))} />
          </div>
          <div className="control-block">
            <div className="control-title">
              <span>Letter spacing</span>
              <span className="control-value">{tracking}px</span>
            </div>
            <input type="range" min="-2" max="8" step="0.5" value={tracking} onChange={(e) => setTracking(Number(e.target.value))} />
          </div>
          <div className="control-block">
            <div className="control-title">
              <span>Front stretch</span>
              <span className="control-value">{stretch.toFixed(2)}×</span>
            </div>
            <input type="range" min="0.9" max="1.35" step="0.01" value={stretch} onChange={(e) => setStretch(Number(e.target.value))} />
          </div>
          {!compact && (
            <button className="random-button" onClick={randomize}>
              <Icon name="shuffle" /> Give me a phrase
            </button>
          )}
        </aside>
      </div>

      {showPresets && (
        <div className="showcase-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ready-made styles</p>
              <h2>Start from a<br /><em>preset.</em></h2>
            </div>
            <p className="section-note">Click any style to load it<br />into the generator above.</p>
          </div>
          <div className="showcase-grid">
            {PRESETS.map((preset) => {
              const c = modes[preset.mode];
              return (
                <button key={preset.text} type="button" className="showcase-card" onClick={() => applyPreset(preset)}>
                  <div className="showcase-preview" style={{ backgroundColor: c.background }}>
                    <svg viewBox="0 0 900 560" aria-hidden="true">
                      <text x="450" y="310" textAnchor="middle" style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: preset.size * 0.55, letterSpacing: preset.tracking, fill: c.foreground }}>{preset.text}</text>
                      <text x="450" y="310" textAnchor="middle" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", fontSize: preset.size * 0.5, letterSpacing: preset.tracking * 0.5, fill: c.ink, opacity: 0.42, transform: `translate(450px, 310px) scale(${preset.stretch}, 1) translate(-450px, -310px)` }}>{preset.text}</text>
                    </svg>
                  </div>
                  <span className="showcase-label">{preset.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Public export — wraps core in Suspense so it's safe on SSG pages          */
/* -------------------------------------------------------------------------- */

export default function Generator(props: GeneratorProps) {
  return (
    <Suspense fallback={<div className="generator-grid" style={{ opacity: 0.4, minHeight: 400 }} />}>
      <GeneratorCore {...props} />
    </Suspense>
  );
}
