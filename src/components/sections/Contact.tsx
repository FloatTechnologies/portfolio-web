"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let’s build something useful"
      description="Senior roles, contract work, or a hard technical problem—happy to talk."
      wide
    >
      <ScrollReveal>
        <motion.div
          className="gradient-border max-w-3xl"
          whileHover={reduceMotion ? undefined : { scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
        >
          <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-sm font-medium text-primary">Direct line</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block font-serif text-2xl text-foreground underline-offset-4 hover:underline sm:text-3xl"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>Email me</Button>
              <Button href={profile.resumeUrl} variant="secondary" external>
                Resume
              </Button>
            </div>
          </div>
        </motion.div>
        <ul className="mt-8 flex flex-wrap gap-6 text-sm">
          {profile.social.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-muted transition-colors hover:text-primary"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </Section>
  );
}
