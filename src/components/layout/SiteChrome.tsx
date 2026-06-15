"use client";

import { ScrollProgress } from "@/components/motion/ScrollProgress";

export function SiteChrome() {
  return (
    <>
      <ScrollProgress />
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
      </div>
      <div className="noise" aria-hidden />
    </>
  );
}
