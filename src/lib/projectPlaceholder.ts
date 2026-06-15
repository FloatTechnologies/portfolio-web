const PALETTES = [
  { from: "#1e3a5f", via: "#0f2744", to: "#06080f", accent: "#60a5fa" },
  { from: "#134e4a", via: "#0c2f2e", to: "#06080f", accent: "#2dd4bf" },
  { from: "#312e81", via: "#1e1b4b", to: "#06080f", accent: "#a78bfa" },
  { from: "#1e3a8a", via: "#172554", to: "#06080f", accent: "#38bdf8" },
  { from: "#4a1d6a", via: "#2e1065", to: "#06080f", accent: "#e879f9" },
  { from: "#0c4a6e", via: "#082f49", to: "#06080f", accent: "#22d3ee" },
] as const;

const SKIP_WORDS = new Set(["the", "a", "an"]);

function hashString(value: string): number {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) {
    h = (h * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function getProjectInitials(title: string): string {
  const words = title
    .split(/[\s\-–]+/)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter((w) => w.length > 0 && !SKIP_WORDS.has(w.toLowerCase()));

  if (words.length >= 2) {
    return words
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  const single = words[0] ?? title.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2);
  return (single.slice(0, 2) || "P").toUpperCase();
}

export function getProjectPlaceholderStyle(title: string): {
  background: string;
  accentColor: string;
} {
  const palette = PALETTES[hashString(title) % PALETTES.length];
  return {
    background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.via} 52%, ${palette.to} 100%)`,
    accentColor: palette.accent,
  };
}
