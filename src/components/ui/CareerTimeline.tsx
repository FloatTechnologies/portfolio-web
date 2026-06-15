"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ExperienceEntry } from "@/content/types";
import { viewportOnce } from "@/lib/motion";

export function CareerTimeline({ items }: { items: ExperienceEntry[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="career-timeline-wrap relative mx-auto max-w-4xl">
      <div className="career-timeline-line" aria-hidden>
        <motion.div
          className="career-timeline-fill"
          initial={{ height: reduceMotion ? "100%" : "0%" }}
          whileInView={{ height: "100%" }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="career-timeline-dot" />
      </div>

      <ol className="relative space-y-16 sm:space-y-20">
        {items.map((item, index) => (
          <motion.li
            key={`${item.company}-${item.duration}`}
            className="career-entry grid gap-4 sm:grid-cols-[1fr_1.2fr] sm:gap-12"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: index * 0.08, duration: 0.7 }}
          >
            <div className="sm:text-right">
              <p className="text-caption">{item.duration}</p>
              <h3 className="mt-2 text-2xl font-medium text-foreground sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-2 text-lg text-primary">{item.company}</p>
            </div>
            <div>
              {item.bullets.length > 0 ? (
                <ul className="space-y-2 text-body">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-body">Computer Science — foundation in algorithms, systems, and software design.</p>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
