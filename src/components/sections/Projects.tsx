import { caseStudies, moreProjects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CaseStudyCard } from "./CaseStudyCard";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Portfolio"
      title="Products I’ve helped ship"
      description="Case studies with context—mobile apps and backends used in the real world."
      wide
    >
      <div className="space-y-8">
        {caseStudies.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.05}>
            <CaseStudyCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {moreProjects.length > 0 ? (
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-foreground">
            More projects
          </h3>
          <p className="text-body mt-2 max-w-xl">
            Additional apps and experiments—many live on the stores or in
            production.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {moreProjects.map((project, i) => (
              <ScrollReveal key={project.title} as="li" delay={i * 0.04}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
