import type { Project } from "@/content/types";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectRow({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <li className="py-9 first:pt-0 last:pb-0">
      <article className="max-w-[36rem]">
        <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-medium text-foreground">
            {project.title}
          </h3>
          {project.role ? (
            <span className="text-sm text-muted">· {project.role}</span>
          ) : null}
          {featured ? (
            <span className="text-xs text-[var(--muted-faint)]">Featured</span>
          ) : null}
        </header>

        <p className="text-body mt-2">{project.description}</p>

        {(project.problem || project.approach || project.outcome) && (
          <dl className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed">
            {project.problem ? (
              <div>
                <dt className="inline font-medium text-foreground">Problem </dt>
                <dd className="inline text-muted">{project.problem}</dd>
              </div>
            ) : null}
            {project.approach ? (
              <div>
                <dt className="inline font-medium text-foreground">
                  Approach{" "}
                </dt>
                <dd className="inline text-muted">{project.approach}</dd>
              </div>
            ) : null}
            {project.outcome ? (
              <div>
                <dt className="inline font-medium text-foreground">
                  Outcome{" "}
                </dt>
                <dd className="inline text-muted">{project.outcome}</dd>
              </div>
            ) : null}
          </dl>
        )}

        <p className="mt-4 text-xs text-[var(--muted-faint)]">
          {project.technologies.join(" · ")}
        </p>
        <ProjectLinks project={project} className="mt-3 gap-4" />
      </article>
    </li>
  );
}
