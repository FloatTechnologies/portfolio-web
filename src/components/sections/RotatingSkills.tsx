"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { appleEase } from "@/lib/motion";

export function RotatingSkills() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % profile.rotatingSkills.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const phrase = profile.rotatingSkills[index];

  if (reduceMotion) {
    return (
      <span className="text-gradient text-gradient-animated" aria-live="polite">
        {phrase}
      </span>
    );
  }

  return (
    <span
      className="relative ml-1 inline-block min-h-[1.5em] align-bottom"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={phrase}
          className="absolute left-0 top-0 whitespace-nowrap text-gradient text-gradient-animated"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: appleEase }}
        >
          {phrase}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap">{phrase}</span>
    </span>
  );
}
