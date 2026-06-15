import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section id="contact" className="py-[var(--section-y)]">
      <div className="container-wide">
        <div className="gradient-border max-w-3xl">
          <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[var(--accent-muted)] blur-3xl"
              aria-hidden
            />
            <p className="section-eyebrow">Contact</p>
            <h2 className="text-section-title mt-3 text-foreground">
              Let&apos;s talk about your next build
            </h2>
            <p className="text-lead mt-4 max-w-xl">
              Full-time roles, contract work, or a hard technical problem—email
              is the best way to reach me directly.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block text-xl font-semibold text-foreground hover:text-primary sm:text-2xl"
            >
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Email me
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Resume
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
