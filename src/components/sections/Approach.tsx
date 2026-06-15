import {
  approachIntro,
  approachPrinciples,
} from "@/content/approach";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function Approach() {
  return (
    <Section
      id="approach"
      label="Process"
      title="How I think about engineering"
      description={approachIntro}
      wide
      className="bg-surface/60"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {approachPrinciples.map((item, i) => (
          <ScrollReveal key={item.title} as="li" delay={i * 0.05}>
            <div className="surface-card surface-card-interactive h-full p-6 sm:p-7">
              <span className="text-caption text-primary/80">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-body mt-2 text-[0.95rem]">{item.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
