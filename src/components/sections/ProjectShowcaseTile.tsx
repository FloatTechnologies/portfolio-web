"use client";

import type { Project } from "@/content/types";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectShowcaseTile({ project }: { project: Project }) {
  const href =
    project.demoLink ??
    project.githubLink ??
    project.appStoreLink ??
    project.playStoreLink;

  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--background-elevated)]">
        <ProjectCover
          title={project.title}
          image={project.image}
          alt={project.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
          initialsClassName="text-3xl sm:text-4xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--accent-2)]">
            {project.role ?? project.technologies[0]}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
      </div>
    </>
  );

  return (
    <article className="group w-full">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
      <ProjectLinks project={project} className="mt-3 gap-3 opacity-80" />
    </article>
  );
}
