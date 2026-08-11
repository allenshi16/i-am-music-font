// src/data/phrases.ts
// Drives the /make/<phrase>/ SEO pages. Each entry is a high-intent phrase
// people search in the "I AM MUSIC" layered-text style. Fields are stable
// editorial data (aesthetic association + usage idea), not copyrighted text.

export interface PhraseEntry {
  slug: string;
  /** The literal phrase rendered in the layered effect (uppercase). */
  phrase: string;
  /** One-line human description of the phrase's vibe. */
  vibe: string;
  /** Where someone would use this layered text. */
  useCase: string;
  /** Suggested palette name: dark | paper | acid. */
  palette: "dark" | "paper" | "acid";
}

export const phrases: PhraseEntry[] = [
  {
    slug: "no-signal",
    phrase: "NO SIGNAL",
    vibe: "a broadcast cutting out, a channel gone dark",
    useCase: "teaser artwork, profile headers and dark-mode cover letters",
    palette: "acid",
  },
  {
    slug: "after-hours",
    phrase: "AFTER HOURS",
    vibe: "late-night energy and slowed-down atmosphere",
    useCase: "club flyers, night playlists and event posters",
    palette: "dark",
  },
  {
    slug: "night-shift",
    phrase: "NIGHT SHIFT",
    vibe: "late work, city lights and quiet intensity",
    useCase: "DJ mixes, podcast covers and shift-themed branding",
    palette: "dark",
  },
  {
    slug: "future-classic",
    phrase: "FUTURE CLASSIC",
    vibe: "something that will age well and feel timeless later",
    useCase: "album covers, merch drops and brand launches",
    palette: "paper",
  },
  {
    slug: "loud-silence",
    phrase: "LOUD SILENCE",
    vibe: "a paradox of tension and quiet power",
    useCase: "cinematic posters, artist statements and mood boards",
    palette: "dark",
  },
  {
    slug: "midnight-fm",
    phrase: "MIDNIGHT FM",
    vibe: "a radio station that only plays after dark",
    useCase: "playlists, radio shows and late-night streams",
    palette: "acid",
  },
  {
    slug: "static-dreams",
    phrase: "STATIC DREAMS",
    vibe: "noise and memory colliding",
    useCase: "ambient music covers, poetry zines and visual art",
    palette: "paper",
  },
  {
    slug: "make-noise",
    phrase: "MAKE NOISE",
    vibe: "a call to be loud and unmissable",
    useCase: "band merch, tour posters and slogan designs",
    palette: "acid",
  },
  {
    slug: "turn-the-page",
    phrase: "TURN THE PAGE",
    vibe: "moving on, starting fresh, a new chapter",
    useCase: "podcast seasons, book covers and relaunch campaigns",
    palette: "paper",
  },
  {
    slug: "no-return",
    phrase: "NO RETURN",
    vibe: "finality and irreversible forward motion",
    useCase: "film posters, trailer cards and dramatic branding",
    palette: "dark",
  },
  {
    slug: "golden-hour",
    phrase: "GOLDEN HOUR",
    vibe: "warm light, peak moment, everything at its best",
    useCase: "photography books, sunrise sets and lifestyle covers",
    palette: "paper",
  },
  {
    slug: "vinyl-only",
    phrase: "VINYL ONLY",
    vibe: "a purist love of physical records",
    useCase: "record store labels, crate-digging playlists and merch",
    palette: "dark",
  },
  {
    slug: "play-it-loud",
    phrase: "PLAY IT LOUD",
    vibe: "an instruction to turn the volume up",
    useCase: "live gig posters, speaker branding and party flyers",
    palette: "acid",
  },
  {
    slug: "broken-radio",
    phrase: "BROKEN RADIO",
    vibe: "imperfect transmissions and lo-fi charm",
    useCase: "lo-fi playlists, indie podcasts and retro branding",
    palette: "paper",
  },
  {
    slug: "last-call",
    phrase: "LAST CALL",
    vibe: "the final chance, the last song of the night",
    useCase: "closing-party posters, farewell events and final drops",
    palette: "dark",
  },
  {
    slug: "new-arrival",
    phrase: "NEW ARRIVAL",
    vibe: "something fresh landing now",
    useCase: "product launches, drop announcements and release posts",
    palette: "acid",
  },
  {
    slug: "back-to-back",
    phrase: "BACK TO BACK",
    vibe: "nonstop energy with no gaps",
    useCase: "mixtape covers, b2b sets and compilation art",
    palette: "dark",
  },
  {
    slug: "sold-out",
    phrase: "SOLD OUT",
    vibe: "short supply and high demand",
    useCase: "merch drops, concert dates and limited releases",
    palette: "acid",
  },
  {
    slug: "dead-air",
    phrase: "DEAD AIR",
    vibe: "silence where sound should be",
    useCase: "experimental art, horror covers and ambient projects",
    palette: "dark",
  },
  {
    slug: "on-repeat",
    phrase: "ON REPEAT",
    vibe: "a track you cannot stop playing",
    useCase: "playlist covers, single artwork and listening stats",
    palette: "paper",
  },
];

export function getPhrase(slug: string): PhraseEntry | undefined {
  return phrases.find((p) => p.slug === slug);
}