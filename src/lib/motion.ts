import type { Transition, Variants } from "framer-motion";

/** Easing similar to premium marketing sites (ease-out expo feel). */
export const appleEase = [0.22, 1, 0.36, 1] as const;

export const appleTransition: Transition = {
  duration: 0.85,
  ease: appleEase,
};

export const appleSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: appleTransition,
  },
};

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...appleTransition, duration: 1 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: appleTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const viewportOnce = { once: true, margin: "-12%" as const };
