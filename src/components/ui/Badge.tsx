import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-white/80 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted shadow-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
