import {
  Bot,
  Cloud,
  Code2,
  MessageSquare,
  Smartphone,
  TestTube2,
} from "lucide-react";
import { capabilities } from "@/content/capabilities";

const icons = {
  mobile: Smartphone,
  backend: Code2,
  architecture: Cloud,
  automation: Bot,
  quality: TestTube2,
  collaboration: MessageSquare,
} as const;

export function CapabilitiesSection() {
  return (
    <section id="expertise" className="section-panel py-[var(--section-y)]">
      <div className="container-wide">
        <p className="section-eyebrow">Expertise</p>
        <h2 className="text-section-title mt-3 max-w-2xl text-foreground">
          How I help teams ship full-stack products
        </h2>
        <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = icons[cap.id];
            return (
              <li key={cap.id} className="surface-card p-5 sm:p-7">
                <div className="flex size-11 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="text-body mt-2 text-sm">{cap.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
