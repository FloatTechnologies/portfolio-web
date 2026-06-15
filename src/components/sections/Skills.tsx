"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillGroups } from "@/content/skills";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const marqueeSkills = skillGroups.flatMap((g) => g.items);

export function Skills() {
  return (
    <Section
      id="skills"
      label="Toolkit"
      title="Technologies I reach for"
      description="Chosen after the problem is clear—not before."
      wide
      className="overflow-hidden"
    >
      <div className="relative -mx-[var(--page-x)] mb-12 border-y border-border bg-surface py-6 sm:-mx-0 sm:rounded-2xl sm:border">
        <Marquee gradient gradientColor="var(--surface)" speed={32} pauseOnHover>
          {marqueeSkills.map((skill) => (
            <div
              key={skill.title}
              className="mx-3 flex items-center gap-2.5 rounded-full border border-border/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <Image
                src={skill.image}
                alt=""
                width={22}
                height={22}
                className="size-[22px] object-contain"
              />
              <span className="text-sm font-medium text-foreground">
                {skill.title}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.id} as="li" delay={i * 0.06}>
            <div className="surface-card h-full p-6 transition-colors hover:border-primary/25">
              <h3 className="text-sm font-semibold text-foreground">
                {group.label}
              </h3>
              <p className="text-body mt-3 text-[0.9rem] leading-relaxed">
                {group.items.map((s) => s.title).join(" · ")}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
