import type { Project } from "@/content/types";

const items = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "How" },
  { key: "outcome", label: "Why it mattered" },
] as const;

export function ProjectNarrative({ project }: { project: Project }) {
  const blocks = items
    .map(({ key, label }) => {
      const value = project[key];
      return value ? { label, value } : null;
    })
    .filter(Boolean) as { label: string; value: string }[];

  if (blocks.length === 0) return null;

  return (
    <dl className="mt-5 space-y-3 border-t border-border pt-5">
      {blocks.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            {label}
          </dt>
          <dd className="text-body mt-1">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
