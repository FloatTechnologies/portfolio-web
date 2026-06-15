import { profile } from "@/content/profile";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Engineer behind the products"
      wide
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <ScrollReveal>
          <p className="text-lead text-[1.0625rem] text-foreground/90">
            {profile.about}
          </p>
        </ScrollReveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {profile.strengths.map((item, i) => (
            <ScrollReveal key={item} as="li" delay={0.08 + i * 0.05}>
              <div className="surface-card surface-card-interactive h-full p-5 text-sm leading-relaxed text-foreground">
                {item}
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
