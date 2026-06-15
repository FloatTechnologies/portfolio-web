import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-[var(--accent-2)] text-white shadow-[0_10px_28px_-10px_var(--accent-glow)] hover:brightness-110 focus-visible:ring-primary/30",
  secondary:
    "chip-glass text-foreground hover:border-primary/30 hover:shadow-md",
  ghost:
    "text-muted hover:text-primary px-0 py-0 rounded-none shadow-none hover:bg-transparent underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  external,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const isGhost = variant === "ghost";

  const classes = cn(
    "inline-flex items-center justify-center text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    !isGhost && "rounded-full px-5 py-2.5",
    variants[variant],
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
