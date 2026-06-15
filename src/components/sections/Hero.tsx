"use client";

import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.25),transparent)]"
        aria-hidden
      />
      <div className="container-wide relative">
        <p className="section-eyebrow">
          {profile.tagline} · Pakistan
        </p>
        <h1 id="hero-title" className="text-display mt-4 max-w-4xl text-foreground">
          Full-stack products through{" "}
          <span className="bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-soft)] bg-clip-text text-transparent">
            thoughtful engineering
          </span>
        </h1>
        <p className="text-lead mt-6 max-w-2xl">{profile.heroLead}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            {profile.connectCta}
          </a>
          <a href="#projects" className="btn-outline">
            See my work
          </a>
        </div>
        <p className="text-body mt-8 flex items-center gap-2 text-sm">
          <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          {profile.tagline} · Remote-friendly
        </p>
      </div>
    </section>
  );
}
