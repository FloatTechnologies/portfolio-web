import { portfolioStats } from "@/content/stats";

export function StatsStrip() {
  return (
    <section className="section-panel py-12 sm:py-14" aria-label="Highlights">
      <div className="container-wide">
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {portfolioStats.map((stat) => (
            <li key={stat.label} className="text-center sm:text-left">
              <p className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                {stat.value}
              </p>
              <p className="text-body mt-2 max-w-xs text-sm sm:mx-0 mx-auto">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
