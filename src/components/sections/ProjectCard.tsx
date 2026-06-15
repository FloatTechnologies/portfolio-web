"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { appleSpring } from "@/lib/motion";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="surface-card surface-card-interactive group flex h-full flex-col overflow-hidden"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={appleSpring}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--accent-muted)]">
        <ProjectCover
          title={project.title}
          image={project.image}
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="text-body mt-2 flex-1 line-clamp-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <ProjectLinks project={project} className="mt-4" />
      </div>
    </motion.article>
  );
}
