import type { ExperienceEntry } from "@/content/types";

export function Timeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <ol className="space-y-6">
      {items.map((item) => (
        <li
          key={`${item.company}-${item.duration}`}
          className="surface-card p-5 sm:p-7"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-primary">{item.company}</p>
            </div>
            <p className="text-sm text-muted">{item.duration}</p>
          </div>
          {item.bullets.length > 0 ? (
            <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="text-body text-sm">
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
