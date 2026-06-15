"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/content/profile";

const marqueeItems = [
  "Full Stack Developer",
  "Python · React · Flutter",
  "APIs · Cloud · GenAI",
  ...profile.rotatingSkills.map((s) => s.replace(/^./, (c) => c.toUpperCase())),
];

export function SiteLoader({
  onEnter,
}: {
  onEnter: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [percent, setPercent] = useState(0);
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      onEnter();
      return;
    }

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const t = setTimeout(onEnter, 400);
      return () => clearTimeout(t);
    }

    let value = 0;
    const tick = setInterval(() => {
      const step =
        value < 50
          ? Math.round(Math.random() * 8 + 4)
          : value < 92
            ? Math.round(Math.random() * 3 + 1)
            : 1;
      value = Math.min(value + step, 100);
      setPercent(value);
      if (value >= 100) {
        clearInterval(tick);
        setReady(true);
      }
    }, 100);

    return () => clearInterval(tick);
  }, [onEnter, reduceMotion]);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 700);
  };

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          className="site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <header className="site-loader-header container-page">
            <span className="font-semibold tracking-tight">
              {profile.introName}
              <span className="text-primary">.</span>
            </span>
          </header>

          <div className="site-loader-marquee" aria-hidden>
            <div className="site-loader-marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={`${item}-${i}`}>{item}</span>
              ))}
            </div>
          </div>

          <div className="site-loader-center">
            <motion.button
              type="button"
              className={`site-loader-button ${ready ? "is-ready" : ""}`}
              onClick={ready ? handleEnter : undefined}
              disabled={!ready}
              whileHover={ready ? { scale: 1.02 } : undefined}
              whileTap={ready ? { scale: 0.98 } : undefined}
            >
              <span className="site-loader-button-label">
                {ready ? "Enter portfolio" : `Loading ${percent}%`}
              </span>
            </motion.button>
            {ready ? (
              <p className="text-caption mt-4 text-center">
                Click to explore — problem-first case studies & code
              </p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
