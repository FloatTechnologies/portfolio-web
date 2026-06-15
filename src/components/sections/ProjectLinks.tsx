import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";

type LinkItem = { href: string; label: string };

function projectLinks(project: Project): LinkItem[] {
  const candidates: LinkItem[] = [];
  if (project.githubLink) {
    candidates.push({ href: project.githubLink, label: "Code on GitHub" });
  }
  if (project.demoLink) {
    candidates.push({ href: project.demoLink, label: "Live product" });
  }
  if (project.playStoreLink) {
    candidates.push({ href: project.playStoreLink, label: "Play Store" });
  }
  if (project.appStoreLink) {
    candidates.push({ href: project.appStoreLink, label: "App Store" });
  }

  const seen = new Set<string>();
  const links: LinkItem[] = [];

  for (const item of candidates) {
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    links.push(item);
  }

  return links;
}

export function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const links = projectLinks(project);

  if (links.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2 text-sm", className)}>
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
