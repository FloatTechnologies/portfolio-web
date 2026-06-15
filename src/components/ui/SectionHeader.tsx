"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <ScrollReveal as="header" className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="text-caption mb-3 font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={`${id}-title`} className="text-heading text-foreground">
        {title}
      </h2>
      {description ? <p className="text-body mt-3">{description}</p> : null}
    </ScrollReveal>
  );
}
