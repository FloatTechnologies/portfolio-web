"use client";

import { tickerPhrases } from "@/content/projectShowcase";

export function NewsTicker() {
  const items = [...tickerPhrases, ...tickerPhrases];

  return (
    <div
      className="section-panel overflow-hidden border-t-0 py-2.5"
      aria-hidden
    >
      <div className="flex whitespace-nowrap">
        <div className="ticker-track flex gap-10 px-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {items.map((phrase, i) => (
            <span key={`${phrase}-${i}`} className="flex items-center gap-10">
              {phrase}
              <span className="size-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
