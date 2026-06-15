import type { Profile } from "./types";

export const profile: Profile = {
  name: "Muhammad Omer Shafique",
  introTitle: "Hi, I'm ",
  introName: "Omer",
  tagline: "Full Stack Developer",
  heroLead:
    "Full stack developer across Python services, cloud-native APIs, GenAI integrations, and React, Flutter, and Swift clients—I care most about the problem, the architecture, and what holds up in production.",
  skillsPrefix: "I focus on helping teams ",
  rotatingSkills: [
    "ship full-stack features end to end",
    "design scalable APIs and microservices",
    "integrate LLMs and automation thoughtfully",
    "deliver web and mobile clients users trust",
    "debug production issues calmly",
    "communicate trade-offs clearly",
  ],
  connectCta: "Let's talk",
  email: "omerxhafique@gmail.com",
  about:
    "I'm a full stack developer with experience across Django, FastAPI, Flask, AWS, and GenAI (OpenAI, LangChain, RAG)—plus React, Flutter, and Swift on the client. I've shipped enterprise APIs, IoT data pipelines, store-ready mobile apps, and LLM-powered products. This site and my GitHub show how I frame problems, choose architecture, and deliver without hidden maintenance debt.",
  strengths: [
    "Full-stack delivery from APIs and data models to web and mobile UX",
    "Microservices, event-driven design, and cloud-native deployment on AWS",
    "GenAI integration—LLMs, RAG pipelines, and secure auth (OAuth2, JWT)",
    "Clear communication in PRs, docs, mentoring, and incident follow-ups",
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/omershafique/",
    },
    {
      label: "GitHub",
      href: "https://github.com/omerxhafique",
    },
    {
      label: "Email",
      href: "mailto:omerxhafique@gmail.com",
    },
  ],
  githubUrl: "https://github.com/omerxhafique",
  linkedinUrl: "https://www.linkedin.com/in/omershafique/",
  resumeUrl:
    "https://drive.google.com/file/d/1P4qzJ7m9OBBeDR6rovBTR9cj2l4QDIda/view?usp=sharing",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://omershafique.dev",
};
