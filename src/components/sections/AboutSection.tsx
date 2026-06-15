import { Check } from "lucide-react";
import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="py-[var(--section-y)]">
      <div className="container-wide grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <p className="section-eyebrow">About me</p>
          <h2 className="text-section-title mt-3 text-foreground">
            I ship products—not just résumé bullets
          </h2>
          <p className="text-lead mt-5">{profile.about}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
            What you get working with me
          </p>
          <ul className="mt-6 space-y-4">
            {profile.strengths.map((item) => (
              <li key={item} className="flex gap-3 text-body text-foreground/90">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-primary">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
