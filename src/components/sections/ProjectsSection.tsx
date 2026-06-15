import { caseStudies } from "@/content/projects";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { ProjectLinks } from "./ProjectLinks";

const featured = caseStudies.find((p) => p.title === "Calendar Airplane") ?? caseStudies[0];
const rest = caseStudies.filter((p) => p.title !== featured?.title).slice(0, 5);

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] py-[var(--section-y)]"
    >
      <div className="container-wide">
        <SectionIntro
          index="04"
          label="Projects"
          title={
            <>
              Things I&apos;ve <em>built</em>
            </>
          }
        />

        {featured ? (
          <article className="project-card mb-10 grid lg:grid-cols-2">
            <div className="relative min-h-[220px] bg-[var(--background-soft)] lg:min-h-full">
              <ProjectCover
                title={featured.title}
                image={featured.image}
                alt={featured.title}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)]">
                Featured · {featured.role ?? "Side project"}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">
                {featured.description}
              </p>
              {featured.approach ? (
                <p className="mt-3 text-sm text-[var(--foreground-muted)]">
                  {featured.approach}
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.technologies.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
              <ProjectLinks project={featured} className="mt-5" />
              <span className="decor-suit mt-6 inline-block text-2xl" aria-hidden>
                ♠
              </span>
            </div>
          </article>
        ) : null}

        <ul className="grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.title} className="project-card flex flex-col">
              <div className="relative aspect-[16/10] bg-[var(--background-soft)]">
                <ProjectCover
                  title={project.title}
                  image={project.image}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs text-[var(--accent)]">
                  {project.role ?? project.technologies.slice(0, 2).join(" · ")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--foreground-muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={project} className="mt-4" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
