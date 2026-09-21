// Single source of truth for everything the themes render.
// Themes own layout and voice; facts live here.

export const person = {
  name: "Chakradhar Reddy",
  first: "Chakradhar",
  last: "Reddy",
  role: "Software engineer",
  location: "Bengaluru, India",
  openTo: "Open to interesting work",
  specialties: "Full-stack development, system design, user experience",
  about: [
    "I'm a software engineer who cares about clean interfaces, strong systems, and building things that feel good to use. I believe simplicity is the ultimate sophistication.",
    "From backend engineering to user experience, I try to create software that stays out of the way and quietly does its job well, but stands out when it needs to.",
  ],
  contactBlurb:
    "Always happy to talk about new opportunities, interesting projects, or just nerd out about technology and design.",
};

export type Change = { kind: "Added" | "Changed" | "Improved" | "Fixed" | "Init"; text: string };

export type Job = {
  company: string;
  role: string;
  period: string;
  city: string;
  notes: string;
  current?: boolean;
  // changelog theme only
  version: string;
  changes: Change[];
};

export const jobs: Job[] = [
  {
    company: "Even Healthcare",
    role: "Software Development Engineer",
    period: "Oct 2025 — Present",
    city: "Bengaluru",
    current: true,
    notes:
      "Healthcare systems, from AI-powered call automation to internal tooling and performance-heavy frontend flows. Generally trying to make complex internal tools less painful to use.",
    version: "4.0.0",
    changes: [
      { kind: "Added", text: "AI-powered call automation for healthcare systems." },
      { kind: "Added", text: "Internal tooling." },
      { kind: "Improved", text: "Performance-heavy frontend flows." },
      { kind: "Fixed", text: "Complex internal tools are now less painful to use. Work ongoing." },
    ],
  },
  {
    company: "Zomato",
    role: "Software Development Engineer",
    period: "Jul — Oct 2025",
    city: "Gurugram",
    notes:
      "Delivery logistics and internal tooling: automated onboarding flows, ticketing systems, and large-scale operational pipelines, like GPS ping ingestion from delivery agents.",
    version: "3.1.0",
    changes: [
      { kind: "Changed", text: "Same codebase, new title. Hence the minor bump." },
      { kind: "Added", text: "Automated onboarding flows and ticketing systems for delivery logistics." },
      { kind: "Added", text: "Large-scale operational pipelines, like GPS ping ingestion from delivery agents." },
    ],
  },
  {
    company: "Zomato",
    role: "Software Engineering Intern",
    period: "Jan — Jun 2025",
    city: "Gurugram",
    notes:
      "Core engineering systems: frontend refactors in TypeScript, high-throughput backend services in Go, and large data pipelines.",
    version: "3.0.0",
    changes: [
      { kind: "Changed", text: "Frontend refactors in TypeScript across core engineering systems." },
      { kind: "Added", text: "High-throughput backend services in Go." },
      { kind: "Added", text: "Large data pipelines." },
    ],
  },
  {
    company: "Shinpo Engineering",
    role: "Backend Developer Intern",
    period: "Dec 2023 — Apr 2024",
    city: "Remote",
    notes:
      "Backend and infra: built and scaled a Strapi-based ERM, containerised services on AWS, and tuned performance across APIs and frontend systems.",
    version: "2.0.0",
    changes: [
      { kind: "Added", text: "A Strapi-based ERM, built and then scaled." },
      { kind: "Changed", text: "Services containerised on AWS." },
      { kind: "Improved", text: "Performance across APIs and frontend systems." },
    ],
  },
  {
    company: "WCARL, IIIT Lucknow",
    role: "Full-Stack Web Developer Intern",
    period: "Oct 2022 — Mar 2023",
    city: "Lucknow",
    notes:
      "Web portal and dashboards automating and monitoring tax document processing for the UP Commercial Tax Dept. Next.js, MSSQL, automated PDF ingestion.",
    version: "1.0.0",
    changes: [
      {
        kind: "Added",
        text: "Web portal and dashboards automating and monitoring tax document processing for the UP Commercial Tax Dept.",
      },
      { kind: "Added", text: "Automated PDF ingestion workflows, on Next.js and MSSQL." },
    ],
  },
];

export type Project = {
  name: string;
  slug: string;
  url: string;
  tech: string[];
  description: string;
  short: string;
};

export const projects: Project[] = [
  {
    name: "Life Sim",
    slug: "life-sim",
    url: "https://github.com/chakri68/life-sim",
    tech: ["TypeScript", "Vite", "Canvas"],
    description:
      "A configurable cellular-automaton playground that pushes Conway's Game of Life way past the basics: totalistic rules, an agent-based ecosystem, Gray-Scott reaction-diffusion, and custom per-cell JS. Typed-array sim loops, a pan/zoom canvas, and whole universes encoded into shareable URLs, all in ~17KB gzipped.",
    short:
      "Conway's Game of Life pushed way past the basics: totalistic rules, an agent-based ecosystem, Gray-Scott reaction-diffusion, custom per-cell JS, and whole universes in shareable URLs. ~17KB gzipped.",
  },
  {
    name: "CodeCollab",
    slug: "code-collab",
    url: "https://github.com/chakri68/codeCollab",
    tech: ["Next.js", "WebRTC", "JavaScript"],
    description:
      "A real-time collaborative IDE, built to see how far live editing could be pushed. Next.js, WebSockets and CRDTs, with 20+ users syncing without stepping on each other.",
    short:
      "A real-time collaborative IDE, built to see how far live editing could be pushed. WebSockets and CRDTs, 20+ users syncing without stepping on each other.",
  },
  {
    name: "get-proctored.ai",
    slug: "get-proctored",
    url: "https://github.com/chakri68/get-proctered-public",
    tech: ["Python", "TensorFlow", "MediaPipe"],
    description:
      "An AI-powered exam proctoring system using TensorFlow and MediaPipe. Reduced false positives by ~30% with smarter rules and real-time face and eye tracking. Started as a uni project, ended up actually being used by professors.",
    short:
      "AI exam proctoring with real-time face and eye tracking, ~30% fewer false positives. Started as a uni project, ended up actually being used by professors.",
  },
  {
    name: "Node Utils",
    slug: "node-utils",
    url: "https://github.com/chakri68/systems-node",
    tech: ["TypeScript", "Node.js"],
    description:
      "A playground for low-level Node.js: worker-thread abstractions for real multithreading, geohashes, semaphores, and other things built to find out how they actually work.",
    short:
      "Low-level Node.js: worker-thread abstractions for real multithreading, geohashes, semaphores, and other things built to find out how they actually work.",
  },
  {
    name: "Pixel Drawing Simulator",
    slug: "pixel-drawing-sim",
    url: "https://github.com/chakri68/pixel-drawing-sim",
    tech: ["TypeScript", "Canvas", "Webpack"],
    description:
      "An interactive canvas tool for exploring pixel-level algorithms like Bresenham and flood-fill. Built to see how they behave on a real machine, not just on paper.",
    short:
      "Bresenham, flood-fill and friends on an interactive canvas. Built to see how they behave on a real machine, not just on paper.",
  },
];

export const skills = [
  { title: "Languages", items: ["Go", "TypeScript", "JavaScript", "Python", "Java", "SQL", "Bash"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux", "SvelteKit"] },
  { title: "Backend", items: ["Node.js", "REST", "GraphQL", "gRPC", "PostgreSQL", "MySQL"] },
  { title: "Tools", items: ["Git", "Docker", "AWS", "GCP", "CI/CD", "Figma", "Kafka"] },
];

export const education = {
  school: "IIIT Lucknow",
  degree: "B.Tech in Computer Science & Artificial Intelligence",
  period: "2021 — 2025",
  cgpa: "9.21",
};

export const achievements = [
  {
    title: "Science India Fest",
    text: "Finalist in the national-level hackathon organised by the Government of India as part of the India Science Festival.",
  },
  { title: "Competitive programming", text: "Codeforces expert with a 1600+ rating." },
  {
    title: "Drone navigation",
    text: "Autonomous drone navigation using computer vision for obstacle detection. Featured in The Times of India.",
  },
];

export const links = {
  email: "chakridevireddy69@gmail.com",
  mailto: "mailto:chakridevireddy69@gmail.com",
  github: { url: "https://github.com/chakri68", label: "chakri68" },
  repos: "https://github.com/chakri68?tab=repositories",
  linkedin: { url: "https://linkedin.com/in/chakradhar-reddy-d", label: "chakradhar-reddy-d" },
  resume: { url: "https://resume.chakri.me/", label: "resume.chakri.me" },
  catalogue: { url: "https://projects.chakri.me", label: "projects.chakri.me" },
  // just the projects, rendered as a Game Boy. not a port of this site.
  gameboy: { url: "https://gameboy.chakri.me/", label: "gameboy.chakri.me" },
};
