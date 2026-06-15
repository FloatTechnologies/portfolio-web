export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  introTitle: string;
  introName: string;
  tagline: string;
  heroLead: string;
  rotatingSkills: string[];
  skillsPrefix: string;
  connectCta: string;
  email: string;
  about: string;
  strengths: string[];
  social: SocialLink[];
  resumeUrl: string;
  siteUrl: string;
  githubUrl: string;
  linkedinUrl: string;
};

/** Narrative fields explain why and how; description is the short “what”. */
export type Project = {
  title: string;
  description: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  role?: string;
  image?: string;
  githubLink?: string;
  demoLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  technologies: string[];
  featured?: boolean;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  duration: string;
  bullets: string[];
  accent: "primary" | "blue" | "teal" | "muted";
};
