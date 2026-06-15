"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { ProjectNarrative } from "@/components/ui/ProjectNarrative";
import { ProjectLinks } from "./ProjectLinks";
import { appleSpring } from "@/lib/motion";

export function CaseStudyCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="surface-card surface-card-interactive group overflow-hidden"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={appleSpring}
    >
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[240px] bg-[var(--accent-muted)] lg:min-h-[320px]">
          <ProjectCover
            title={project.title}
            image={project.image}
            alt={project.title}
            sizes="(max-width: 1024px) 100vw, 50vw"
            imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[var(--surface)]/20"
            aria-hidden
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          {project.role ? (
            <p className="text-caption">{project.role}</p>
          ) : null}
          <h3 className="mt-2 font-serif text-2xl font-medium text-foreground sm:text-[1.65rem]">
            {project.title}
          </h3>
          <p className="text-body mt-3 text-[1rem]">{project.description}</p>
          <ProjectNarrative project={project} />
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                className="border-primary/20 bg-[var(--accent-muted)] text-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <ProjectLinks project={project} className="mt-6" />
        </div>
      </div>
    </motion.article>
  );
}
