import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectShowcaseTile } from "./ProjectShowcaseTile";

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-[var(--section-y)]">
      <div className="container-wide">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="text-section-title mt-3 text-foreground">
              What I have shipped
            </h2>
          </div>
          <Link
            href="#contact"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Start a conversation →
          </Link>
        </div>

        <ul className="mt-8 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectShowcaseTile project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
