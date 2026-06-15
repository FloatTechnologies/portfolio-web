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
      <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--background-elevated)] sm:aspect-[4/5]">
        <ProjectCover
          title={project.title}
          image={project.image}
          alt={project.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
          initialsClassName="text-3xl sm:text-4xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-wider text-[var(--accent-2)] sm:text-xs">
            {project.role ?? project.technologies[0]}
          </p>
          <h3 className="mt-0.5 text-base font-semibold leading-snug text-foreground sm:mt-1 sm:text-lg">
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
      <ProjectLinks project={project} className="mt-2 gap-2 text-xs sm:mt-3 sm:gap-3 sm:text-sm sm:opacity-80" />
    </article>
  );
}
