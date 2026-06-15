import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-elevated)] py-14">
      <div className="container-wide grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-xl font-bold text-foreground">{profile.name}</p>
          <p className="text-body mt-2 max-w-sm text-sm">
            {profile.tagline} — full-stack products with Python, React, Flutter,
            and AWS, shipped to real users.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-primary">
                {profile.email}
              </a>
            </li>
            {profile.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="container-wide mt-12 text-center text-xs text-muted sm:text-left">
        © {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  );
}
