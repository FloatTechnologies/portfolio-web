import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Component className={cn("surface-card p-5 sm:p-6", className)}>
      {children}
    </Component>
  );
}
