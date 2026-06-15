import { experience } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Career"
      title="Experience"
      description="Backend systems, mobile delivery, and production ownership."
      wide
    >
      <ScrollReveal>
        <Timeline items={experience} />
      </ScrollReveal>
    </Section>
  );
}
