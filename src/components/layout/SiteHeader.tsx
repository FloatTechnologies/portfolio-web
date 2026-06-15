import Link from "next/link";
import { profile } from "@/content/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="text-lg font-bold tracking-tight text-foreground">
          {profile.introName}
          <span className="text-primary">.</span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex max-w-[42vw] items-center gap-3 overflow-x-auto text-xs font-medium [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:gap-6 sm:text-sm md:gap-7 [&::-webkit-scrollbar]:hidden"
        >
          {links.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="btn-primary shrink-0 !py-2.5 !px-4 text-xs sm:text-sm"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
