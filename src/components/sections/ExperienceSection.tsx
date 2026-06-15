import { experience } from "@/content/experience";
import { Timeline } from "@/components/ui/Timeline";

const workHistory = experience.filter((e) => e.bullets.length > 0);

export function ExperienceSection() {
  return (
    <section id="experience" className="py-[var(--section-y)]">
      <div className="container-wide">
        <p className="section-eyebrow">Career</p>
        <h2 className="text-section-title mt-3 text-foreground">My experience</h2>
        <p className="text-lead mt-4 max-w-2xl">
          Full-stack delivery across APIs, cloud, GenAI, and client apps—at
          agencies and product teams.
        </p>
        <div className="mt-10 max-w-3xl">
          <Timeline items={workHistory} />
        </div>
      </div>
    </section>
  );
}
