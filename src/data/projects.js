const projects = [
  {
    id: "aria",
    title: "ARIA",
    tagline: "Flagship Django AI Assistant",
    video: "/videos/output.mp4",
    description:
      "An agentic AI assistant built on Django, PostgreSQL, Docker and Groq/Llama — with tool-calling, a full interactive CLI shell (ARIA Code), background agent tasks, real-time SSE streaming, and a Notification Queue system with native Web Push for Gmail & Classroom.",
    stack: [
      "Django",
      "PostgreSQL",
      "Docker",
      "Celery",
      "Redis",
      "Groq / LLaMA",
      "WebSockets/SSE",
    ],
    highlights: [
      "96% test pass rate across a 97-test suite",
      "Interactive CLI shell with scan / edit / build / chat commands",
      "Background Agent Tasks with iteration & deadline budgets",
      "Dual-model routing for general vs. coding tasks",
    ],
    github: "https://github.com/life2-byte/ARIA-v.3.0",
    live: "",
  },
  {
    id: "contractorhub",
    title: "ContractorHub",
    tagline: "AI-Powered Contractor Marketplace",
    video: "/videos/output1.mp4",
    description:
      "A Django 5 platform connecting clients with skilled contractors — plumbers, electricians, painters — across Pakistan, featuring role-based dashboards, AI-powered matching, and real-time messaging.",
    stack: [
      "Django 5",
      "Python 3.11",
      "SQLite/PostgreSQL",
      "Groq API",
      "Chart.js",
      "Google OAuth",
    ],
    highlights: [
      "Role-based dashboards for clients and contractors",
      "AI assistant with separate coaching context per role",
      "Proposal & impression analytics via Chart.js",
      "Real-time messaging with 5s polling",
    ],
    github: "https://github.com/life2-byte/contractorHub",
    live: "",
  },
];

export default projects;
