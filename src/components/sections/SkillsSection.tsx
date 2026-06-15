import { skillGroups } from "@/content/skills";
import { SectionIntro } from "@/components/ui/SectionIntro";

const icons: Record<string, string> = {
  "web-backend-cloud": "☁️",
  mobile: "📱",
  tools: "🛠️",
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-[var(--border)] py-[var(--section-y)]">
      <div className="container-wide">
        <SectionIntro
          index="02"
          label="Skills"
          title={
            <>
              Technical <em>toolkit</em>
            </>
          }
        />
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li key={group.id} className="skill-card">
              <p className="text-2xl" aria-hidden>
                {icons[group.id] ?? "⚙️"}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {group.label}
              </h3>
              <div className="mt-4">
                {group.items.map((item) => (
                  <span key={item.title} className="tech-pill">
                    {item.title}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
