import { cn } from "@/lib/cn";

export function Section({
  id,
  label,
  title,
  description,
  children,
  className,
  wide = false,
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  const inner = wide ? "container-wide" : "container-page";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-[var(--section-y)]", className)}
    >
      <div className={inner}>
        <header className="mb-10 max-w-2xl">
          <p className="section-label">{label}</p>
          <h2
            id={`${id}-heading`}
            className="text-section-title mt-3 text-foreground"
          >
            {title}
          </h2>
          {description ? (
            <p className="text-lead mt-4">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
