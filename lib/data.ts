// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Muhammad Haroon Ali",
  shortName: "Haroon",
  role: "Full Stack AI Developer",
  location: "Islamabad, Pakistan",
  tagline:
    "Full Stack Developer with 3 years of experience building scalable, production-grade web applications and AI-powered systems across the stack: React and Next.js on the front end, Node.js, NestJS and Python on the back end, PostgreSQL and MongoDB for data, plus AWS, Docker and workflow automation.",
  email: "haroon8391@gmail.com",
  github: "https://github.com/haroon8391",
  linkedin: "https://www.linkedin.com/in/mharoonali/",
  resume: "/resume.pdf",
  photo: "/profile.jpeg",
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Rissox",
    role: "Full Stack AI Developer",
    start: "Jul 2026",
    end: "Present",
    summary:
      "Building PakPays, a fintech operations and reconciliation platform with a controlled, auditable transaction workflow.",
    highlights: [
      "Built the NestJS REST API on PostgreSQL and Prisma, with Swagger documentation and versioned endpoints.",
      "Built a bank-statement import pipeline that parses Excel and HTML exports with per-bank rules, prevents duplicate rows, and stores originals in private S3 served via signed URLs.",
      "Implemented RBAC with department- and resource-level (ABAC) access scoping, plus an audit trail of user actions and status changes.",
      "Used ACID-compliant PostgreSQL transactions for multi-step writes so related records are committed or rolled back together.",
      "Built the React 19 + TypeScript frontend with TanStack Query and Table, Tailwind CSS 4, and role-based screens.",
      "Set up Docker and GitLab CI/CD pipelines deploying to AWS, with Sentry error monitoring.",
    ],
    stack: ["NestJS", "React", "PostgreSQL", "Prisma", "TypeScript", "AWS S3", "Docker", "GitLab CI/CD"],
  },
  {
    company: "Centrox AI",
    role: "Full Stack Developer",
    start: "Aug 2025",
    end: "Jul 2026",
    summary:
      "Shipped client products spanning conversational AI, social platforms, and workflow automation.",
    highlights: [
      "Developed and deployed full-stack applications supporting 10k+ active users in production.",
      "Cut API response time from 1.2s to 280ms (~60% faster) with Redis caching and query optimization.",
      "Built 3 shared microservices (authentication, payments, notifications) reused across multiple product modules.",
      "Established role-based access control (RBAC) for secure, permission-based user management.",
      "Built CI/CD pipelines with GitHub Actions, cutting deployment failures by 90%.",
      "Automated a trucking business's operations with n8n, replacing 15–20 manual Google Sheets across 12–13 modules (orders, dispatch, driver pay, partner payments, tax).",
    ],
    stack: ["Next.js", "NestJS", "Node.js", "MongoDB", "Redis", "GitHub Actions", "n8n"],
  },
  {
    company: "BeHope",
    role: "Full-Stack Software Engineer",
    start: "Jun 2024",
    end: "Aug 2025",
    summary:
      "Automated operations for a Canadian healthcare e-commerce platform, from order placement through accounting.",
    highlights: [
      "Developed 20+ scalable REST APIs with Node.js and Express.js for an accounting platform.",
      "Built an event-driven invoice ingestion pipeline (Gmail API, Pub/Sub, Adobe APIs), reducing manual invoice handling by 70% with 95% processing accuracy.",
      "Integrated QuickBooks APIs, consolidating 500+ monthly transactions into real-time financial dashboards.",
      "Re-engineered the order-processing workflow end to end, cutting processing time by 90%.",
    ],
    stack: ["Node.js", "Express", "Pub/Sub", "Gmail API", "Adobe PDF API", "QuickBooks API"],
  },
];

export type Project = {
  title: string;
  company: string;
  year: string;
  description: string;
  stack: string[];
  url?: string;
  // Path under /public, e.g. "/projects/ai-listener.png". Leave null for a placeholder.
  image: string | null;
};

export const projects: Project[] = [
  {
    title: "PakPays",
    company: "Rissox",
    year: "2026",
    description:
      "A fintech operations and reconciliation platform. Bank statements are imported and parsed into transactions with duplicate protection, then worked through role-based review queues with RBAC and ABAC access control, ACID transactions and full audit history.",
    stack: ["NestJS", "React", "PostgreSQL", "Prisma", "AWS S3", "Docker"],
    image: "/projects/pakpays.png",
  },
  {
    title: "AI Listener",
    company: "Centrox AI",
    year: "2025",
    description:
      "A mental-health companion where users talk or call with an AI that adapts to their daily-tracked mood. Microservices backend serving 10k+ users, with Redis caching, background workers, Firebase auth with RBAC, and MongoDB indexing and aggregations across 40+ collections.",
    stack: ["NestJS", "MongoDB", "Redis", "Firebase", "Voice AI"],
    url: "https://ailistener.ai",
    image: "/projects/ailistener.png",
  },
  {
    title: "Rankpage",
    company: "Centrox AI",
    year: "2026",
    description:
      "A social platform for rank-based posts, with polls and pick'em predictions, a gamified expert system, and Stripe payments for premium features. Built with TanStack Start, TanStack Query and Keycloak.",
    stack: ["TanStack Start", "Node.js", "MongoDB", "Stripe", "Keycloak"],
    url: "https://staging.rankpage.com",
    image: "/projects/rankpage.png",
  },
  {
    title: "BeHope Internal Automation",
    company: "BeHope",
    year: "2024",
    description:
      "Internal automation for the BeHope platform: receiving customer orders and placing them with the supplier, capturing supplier invoices from email via Gmail and Pub/Sub, parsing them with the Adobe PDF Extract API, and syncing the data to QuickBooks, with no manual entry.",
    stack: ["Node.js", "Pub/Sub", "Adobe PDF API", "QuickBooks API"],
    url: "https://behope.ca",
    image: "/projects/behope.png",
  },
  {
    title: "Trucking Operations Automation",
    company: "Centrox AI",
    year: "2026",
    description:
      "Replaced a trucking business's 15–20 manually maintained Google Sheets with n8n automations across 12–13 modules: client orders, dispatch of own and borrowed trucks, driver pay, payments to partner companies for borrowed trucks, and tax.",
    stack: ["n8n", "Google Sheets", "Workflow automation"],
    image: null,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TanStack Start", "Redux Toolkit", "React Query", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Python", "FastAPI", "REST APIs", "GraphQL"],
  },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
  {
    group: "AI & Agents",
    items: ["OpenAI Realtime API", "Voice-to-Voice AI Agents (WebRTC)", "CrewAI", "LangChain"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "AWS (EC2, VPC, S3, Lambda, IAM, RDS)"],
  },
  {
    group: "Tools & Automation",
    items: ["Claude Code", "Cursor", "n8n", "Zapier", "Playwright"],
  },
];

export const education = {
  degree: "Bachelors in Software Engineering",
  school: "National University of Sciences and Technology (NUST), Pakistan",
  period: "Oct 2020 – May 2024",
  cgpa: "3.42",
};

export const certifications = [
  {
    name: "Web Development",
    issuer: "IBM",
    url: "https://www.credly.com/badges/ff427908-5c9f-47b4-bb9c-3552ff1c58ae/linked_in_profile",
  },
  {
    name: "Frontend Developer",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/dadecc4dcb22",
  },
  {
    name: "Data Structures & Algorithms in Java",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-23baabfb-0ef8-426f-b83f-00ff05a208d5/",
  },
];

export type BlogPost = {
  title: string;
  date: string; // e.g. "Dec 2026"
  summary: string;
  tags: string[];
  platform: string; // e.g. "Medium", "dev.to", "LinkedIn"
  url: string; // link to the post where it's actually published
};

// Add a post by adding an entry here (newest first). The /blog page shows a
// "coming soon" state until this array has at least one item.
export const blogPosts: BlogPost[] = [];

export const blogTopics = [
  {
    title: "Building AI products",
    description: "Voice and chat AI agents, LLM integrations, and lessons from shipping them to real users.",
  },
  {
    title: "Backend engineering",
    description: "NestJS, PostgreSQL and Prisma, Redis caching, microservices and access control.",
  },
  {
    title: "Automation & integrations",
    description: "n8n workflows, Pub/Sub pipelines, and wiring third-party APIs into reliable systems.",
  },
  {
    title: "Career & lessons",
    description: "Going from university to industry and what working across startups has taught me.",
  },
];
