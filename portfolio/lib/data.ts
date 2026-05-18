// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string;
  color: string;
  badge?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "phishing-detection",
    title: "Phishing Detection Web Extension",
    description:
      "Browser extension detecting phishing websites in real-time with URL threat analysis and a security alert system.",
    longDescription:
      "A powerful browser extension that analyzes URLs in real-time to detect phishing threats, scam websites, and malicious domains. Features an intelligent alert system with visual threat indicators.",
    tech: ["JavaScript", "Browser APIs", "HTML", "CSS"],
    github: "https://github.com/santhosh",
    demo: "#",
    color: "#ef4444",
    badge: "🏆 2nd Prize — Open Hackathon 2025",
    category: "Security",
  },
  {
    id: "g-lost-found",
    title: "G-Lost and Found",
    description:
      "Campus lost and found management platform with reusable frontend components and optimized deployment workflows.",
    longDescription:
      "A full-stack campus management platform that enables students to post and find lost items. Built with reusable React components, Express.js backend, and MongoDB for data persistence.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/santhosh",
    demo: "#",
    color: "#06b6d4",
    category: "Full Stack",
  },
  {
    id: "inneryouth",
    title: "InnerYouth",
    description:
      "Mental wellness platform for guided self-reflection with chatbot interaction flow and accessible UI.",
    longDescription:
      "A mental wellness web application designed for youth self-reflection and guided journaling. Features an empathetic chatbot interaction flow, accessibility-first design, and a calming, responsive UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/santhosh",
    demo: "#",
    color: "#8b5cf6",
    category: "Wellness",
  },
  {
    id: "stem-platform",
    title: "STEM Education Platform",
    description:
      "Gamified STEM learning platform for children with interactive modules and engagement systems.",
    longDescription:
      "A Smart India Hackathon project — a gamified STEM learning platform built for school children. Features interactive learning modules, progress tracking, quiz engines, and reward systems to boost engagement.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/santhosh",
    demo: "#",
    color: "#f59e0b",
    badge: "🇮🇳 Smart India Hackathon 2025",
    category: "EdTech",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "#06b6d4",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "#3b82f6",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Database",
    icon: "🗄️",
    color: "#8b5cf6",
    skills: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    color: "#f59e0b",
    skills: ["Git & GitHub", "Docker", "Postman", "Vercel", "Netlify", "Figma"],
  },
  {
    name: "Concepts",
    icon: "💡",
    color: "#10b981",
    skills: [
      "API Integration",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Agile Development",
      "Reusable Components",
      "Debugging & Testing",
    ],
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  color: string;
  type: "award" | "certification" | "event";
}

export const achievements: Achievement[] = [
  {
    id: "hackathon-2025",
    title: "2nd Prize Winner",
    issuer: "Open Hackathon 2025",
    date: "2025",
    description:
      "Won 2nd Prize for the Phishing Detection Web Extension — a real-time browser security tool that detects malicious URLs.",
    icon: "🏆",
    color: "#f59e0b",
    type: "award",
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon Participant",
    issuer: "Government of India",
    date: "2025",
    description:
      "Selected participant in Smart India Hackathon 2025, building a gamified STEM Education Platform for school children.",
    icon: "🇮🇳",
    color: "#f97316",
    type: "award",
  },
  {
    id: "google-startups",
    title: "Prompt to Prototype Certificate",
    issuer: "Google for Startups",
    date: "2025",
    description:
      "Earned Google for Startups certification in AI-powered rapid prototyping and startup product development.",
    icon: "🔵",
    color: "#3b82f6",
    type: "certification",
  },
  {
    id: "cisco",
    title: "Cisco Packet Tracer Certification",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description:
      "Certified in network simulation and infrastructure design using Cisco Packet Tracer, covering TCP/IP and network protocols.",
    icon: "🌐",
    color: "#06b6d4",
    type: "certification",
  },
  {
    id: "design-thinking",
    title: "Design Thinking Expo 2025",
    issuer: "GITAM University",
    date: "2025",
    description:
      "Presented an innovative product concept at the Design Thinking Expo, demonstrating user-centric problem solving and rapid prototyping skills.",
    icon: "💡",
    color: "#8b5cf6",
    type: "event",
  },
];

// ─── Experience / Dev Approach ────────────────────────────────────────────────

export interface DevApproach {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const devApproaches: DevApproach[] = [
  {
    title: "Reusable Frontend Systems",
    description:
      "Building component libraries and design systems that scale across large applications with consistency.",
    icon: "🧩",
    color: "#06b6d4",
  },
  {
    title: "Responsive UI Engineering",
    description:
      "Crafting pixel-perfect, mobile-first interfaces that work flawlessly across all screen sizes.",
    icon: "📱",
    color: "#3b82f6",
  },
  {
    title: "Deployment Workflows",
    description:
      "Streamlined CI/CD pipelines, Vercel edge deployments, and environment-specific configuration.",
    icon: "🚀",
    color: "#8b5cf6",
  },
  {
    title: "Debugging & Optimization",
    description:
      "Deep debugging skills with profiling, bundle optimization, and performance tuning for production.",
    icon: "🔍",
    color: "#f59e0b",
  },
  {
    title: "REST API Integration",
    description:
      "Seamlessly consuming and building RESTful APIs with robust error handling and data validation.",
    icon: "🔌",
    color: "#10b981",
  },
  {
    title: "Fast-Paced Collaboration",
    description:
      "Thriving in agile environments with Git workflows, code reviews, and team-based rapid development.",
    icon: "⚡",
    color: "#f472b6",
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks = {
  github: "https://github.com/santhosh",
  linkedin: "https://linkedin.com/in/santhosh",
  email: "santhosh@example.com",
};

// ─── Nav Links ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
