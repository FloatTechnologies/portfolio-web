import type { ApproachPrinciple } from "./types";

export const approachIntro =
  "I treat a portfolio as engineering communication: what problem mattered, what trade-offs I accepted, and what changed for users or the team.";

export const approachPrinciples: ApproachPrinciple[] = [
  {
    title: "Start with the problem",
    body: "I clarify constraints, users, and success criteria before choosing frameworks. Tech is justified by the job it does—not the other way around.",
  },
  {
    title: "Make trade-offs explicit",
    body: "I document why we picked an architecture, where complexity lives, and what we would revisit at the next scale milestone.",
  },
  {
    title: "Ship in small, verifiable slices",
    body: "Critical paths get automated tests; clients get performance and regression checks on real devices—not just simulators.",
  },
  {
    title: "Leave evidence behind",
    body: "Readable APIs, focused PRs, and open repos (when possible) so reviewers can see how I think—not only what shipped.",
  },
];
