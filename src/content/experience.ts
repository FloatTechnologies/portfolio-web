import type { ExperienceEntry } from "./types";

function bulletsFromMultiline(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.replace(/^[•\s]+/, "").trim())
    .filter(Boolean);
}

const raw = [
  {
    title: "Senior Software Engineer",
    company: "Cogent Labs",
    duration: "Mar 2025 – Present",
    description:
      "• Architected microservices-based backend systems using FastAPI and Django REST Framework (DRF) to support scalable enterprise-grade APIs.\n" +
      "• Integrated OpenAI GPT APIs with LangChain to build Generative AI pipelines for intelligent summarization, semantic search, and conversational AI applications.\n" +
      "• Implemented asynchronous Celery tasks and Redis caching, reducing API latency.\n" +
      "• Ensured security best practices across authentication and authorization flows using OAuth2 and JWT.\n" +
      "• Managed database architecture and optimization, ensuring high availability and data integrity.\n" +
      "• Deployed, monitored, and scaled services on AWS using Docker.\n" +
      "• Integrated and maintained CI/CD pipelines using GitHub Actions.\n" +
      "• Led code reviews, mentored junior engineers, and championed best practices in backend design, documentation, and security compliance.",
    accent: "primary" as const,
  },
  {
    title: "Senior Software Engineer",
    company: "Emblem Technologies",
    duration: "Jan 2021 – Mar 2025",
    description:
      "• Engineered scalable backend systems using Python, Django, Flask, and scripting for performance, maintainability, and high availability.\n" +
      "• Architected and managed cloud infrastructure on AWS (EC2, S3, RDS, Lambda) for secure, scalable, cost-efficient solutions.\n" +
      "• Integrated and optimized SQL and NoSQL databases for integrity, availability, and fast query performance.\n" +
      "• Led IoT device and sensor integration, automating data pipelines for real-time processing.\n" +
      "• Built cross-platform apps with Flutter/Dart and high-performance iOS apps with Swift/SwiftUI.\n" +
      "• Applied machine learning to AI-powered features, backend optimization, and insights from large datasets.\n" +
      "• Directed project management—roadmaps, team coordination, and agile delivery of complex initiatives.\n" +
      "• Researched and implemented emerging tech across cloud infrastructure, backends, and client applications.",
    accent: "blue" as const,
  },
  {
    title: "Mobile Application Developer",
    company: "TecSpine",
    duration: "Oct 2020 – Jan 2021",
    description:
      "• Created high-performance mobile applications that enhanced engagement and App Store downloads.\n" +
      "• Collaborated with UX/UI teams on user-centric, visually appealing interfaces.\n" +
      "• Refined performance through memory management, efficient code, and responsive UI design.\n" +
      "• Partnered with QA on testing, debugging, and on-time, stable releases.\n" +
      "• Followed mobile best practices to improve stability, scalability, and user satisfaction.",
    accent: "teal" as const,
  },
  {
    title: "Software Developer",
    company: "Float Technologies",
    duration: "Dec 2019 – Sep 2020",
    description:
      "• Contributed across the software lifecycle—design, implementation, testing, and deployment of Django web applications.\n" +
      "• Conducted code reviews, debugging, and maintenance to improve performance and code quality.\n" +
      "• Optimized SQL databases for efficient retrieval and system performance.\n" +
      "• Worked in agile sprints—planning, stand-ups, and retrospectives—to deliver on deadline.\n" +
      "• Identified bottlenecks and process improvements to boost team efficiency and delivery speed.",
    accent: "muted" as const,
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "University of the Punjab",
    duration: "2016 – 2020",
    description: "",
    accent: "muted" as const,
  },
];

export const experience: ExperienceEntry[] = raw.map((entry) => ({
  title: entry.title,
  company: entry.company,
  duration: entry.duration,
  bullets: bulletsFromMultiline(entry.description),
  accent: entry.accent,
}));
