"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="container-wide flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link
          href="#top"
          className="text-base font-bold tracking-tight text-foreground sm:text-lg"
          onClick={closeMenu}
        >
          {profile.introName}
          <span className="text-primary">.</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium md:flex md:gap-7"
        >
          {links.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary hidden shrink-0 sm:inline-flex !px-4 !py-2.5 text-xs sm:text-sm"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-foreground transition-colors hover:border-[var(--accent-soft)] hover:bg-[var(--accent-muted)] md:hidden"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={panelId}
          className="border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl md:hidden"
        >
          <nav
            aria-label="Primary mobile"
            className="container-wide flex flex-col gap-1 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-[var(--surface)]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary mt-3 w-full text-center"
              onClick={closeMenu}
            >
              Get in touch
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
