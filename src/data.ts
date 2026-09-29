// data.ts — Single Source of Truth for Lakshmi Narayana V's Portfolio

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-backend' | 'fullstack' | 'mobile';
  categoryLabel: string;
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  githubBackend?: string;
  githubFrontend?: string;
  live?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export const heroInfo = {
  name: "Lakshmi Narayana V",
  roleTitle: "Software Developer",
  avatarUrl: "https://avatars.githubusercontent.com/u/89650810?v=4",
  tagline: "Java Spring Boot Specialist | RAG & Backend Architect",
  summary: "Experienced Software Developer with 2.7 years of professional experience designing, developing, and maintaining highly scalable and highly performing backend systems and REST APIs. Strong object-oriented programming skills with practical experience building Java and Spring Boot applications. Solid relational database design, query optimization, authentication (JWT, 2FA), and AI API integration expertise. Comfortable working across the full software development lifecycle in a collaborative environment, with a strong emphasis on writing clean, maintainable, and secure code.",
  phone: "+91 99861 85776",
  email: "narayana070203@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshmi-narayana-v-356521186/",
  github: "https://github.com/Narayanalv/",
  location: "Bengaluru, India",
  stats: [
    { value: "2.7+", label: "Years Experience" },
    { value: "14", label: "Public Repos" },
    { value: "ChatbotAi", label: "RAG Platform" },
    { value: "MCA", label: "Graduate (2026)" }
  ]
};

export const technicalSkills = {
  coreTechnologies: ["Java (Core, Collections, OOP)", "PHP", "TypeScript", "JavaScript", "SQL", "Dart", "C++"],
  frameworks: ["Spring Boot", "Spring Security", "Slim (PHP)", "React", "Angular", "Express (Node.js)", "Flutter"],
  authSecurity: ["JWT", "OAuth 2.0 (Google SSO)", "Spring Security", "Two-Factor Auth (2FA)"],
  databases: ["PostgreSQL", "pgvector", "MySQL", "MongoDB", "SQLite", "JPA / Hibernate"],
  versionControl: ["Git", "GitHub"],
  toolsDevOps: ["Git", "GitHub", "Cloudinary", "Render", "Linux", "REST APIs", "Vite"]
};

export const workExperience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Octech Digital",
    period: "Jun 2024 – July 2026",
    location: "Bengaluru, India",
    type: "Full-Time",
    highlights: [
      "Designed, developed, and maintained scalable backend microservices and high-throughput RESTful APIs using Java Spring Boot and PHP (Slim Framework).",
      "Engineered 'Analytics Genie' enterprise reporting platform to reliably process millions of traffic events across marketing campaigns (Bigcity, Pine Labs).",
      "Integrated Pine Labs Woohoo platform to enable order-placement-based reward issuance and automated tracking.",
      "Built encrypted Excel report generation for secure report delivery and search APIs for mobile-number user lookups.",
      "Engineered Two-Factor Authentication (2FA) via OTP/Email, stateless JWT authentication pipelines, and Spring Security.",
      "Architected Automated Campaign & API Orchestration Services (automated emailer, API runner within time windows, batch API trigger services).",
      "Designed Universal Dashboard system reducing redundant components and optimizing query retrieval speed in MySQL."
    ],
    tech: ["Slim (PHP)", "MySQL"]
  },
  {
    role: "Software Engineering Intern",
    company: "Octech Digital",
    period: "Dec 2023 – May 2024",
    location: "Bengaluru, India",
    type: "Internship",
    highlights: [
      "Built and supported marketing campaigns, integrating the Pine Labs Woohoo platform to enable order-placement-based reward issuance.",
      "Worked on relational database-based data access for tracking campaign activity and rewards across cross-functional engineering teams.",
      "Collaborated on code reviews, bug fixes, automated unit testing, and technical documentation."
    ],
    tech: ["PHP", "Slim Framework", "MySQL"]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Karnataka State Open University (KSOU)",
    period: "2024 – 2026",
    location: "Karnataka, India",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lowry Adventist College",
    period: "2020 – 2023",
    location: "Bengaluru, India",
  }
];

export const projectsList: Project[] = [
  {
    id: "chatbot-ai",
    title: "ChatbotAi — RAG Chatbot Platform",
    subtitle: "RAG Engine with Vector Search & Multi-Tenant Ingestion",
    category: "ai-backend",
    categoryLabel: "AI & Backend Architecture",
    tag: "MCA Project",
    featured: true,
    description: "Built an RAG chatbot where businesses integrate via API key — clients upload documents and interact through a built-in Angular UI.",
    highlights: [
      "Built an RAG chatbot where businesses integrate via API key — clients upload documents and interact through a built-in Angular UI.",
      "Spring Boot backend handles document ingestion, text chunking, vector embedding via Gemini API, and semantic retrieval over REST APIs.",
      "Implemented JWT security pipeline with Spring Security — stateless auth, CORS configuration, and filter chain setup.",
      "pgvector + PostgreSQL for vector similarity search; Groq API for LLM inference — chosen for cost efficiency over running models locally.",
      "Secure document storage via Cloudinary; documents are parsed, chunked, and indexed automatically on upload."
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "pgvector", "Angular", "LLM"],
    github: "https://github.com/Narayanalv/ChatbotAi",
    githubFrontend: "https://github.com/Narayanalv/chatbotFE"
  },
  {
    id: "fullstack-crud",
    title: "Full-Stack Auth & CRUD Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    tag: "Learn Front End",
    featured: true,
    description: "Application with JWT authentication, and full CRUD operations.",
    highlights: [
      "full CRUD operations.",
      "Designed normalized PostgreSQL schema via Prisma ORM; implemented token blacklisting to prevent refresh-token reuse attacks."
    ],
    tech: ["React", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "TypeScript", "JWT"],
  },
  {
    id: "tubestream",
    title: "TubeStream — Video Streaming Platform",
    subtitle: "YouTube-Style Video Platform with Google OAuth SSO",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    tag: "BCA 6th Sem",
    featured: true,
    description: "YouTube-style video streaming platform with Google OAuth single sign-on, video upload and streaming functionality, and user management.",
    highlights: [
      "Built a YouTube-style video platform with Google OAuth SSO, video upload and streaming functionality, and user management.",
      "Integrated PHP backend with MySQL database for media catalog index and user profile storage."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Google OAuth 2.0"],
    github: "https://github.com/Narayanalv/php_video_streaming"
  },
  {
    id: "local-notes",
    title: "Local Notes — Secure Mobile App",
    subtitle: "Cross-Platform Encrypted App Published on Android",
    category: "mobile",
    categoryLabel: "Mobile App",
    tag: "Published App",
    featured: true,
    description: "Cross-platform mobile application featuring fingerprint / face-ID biometric lock and encrypted local data persistence.",
    highlights: [
      "Cross-platform mobile app with fingerprint / face-ID biometric lock and encrypted local SQLite persistence — published on Android."
    ],
    tech: ["Flutter", "Dart", "SQLite", "Biometric Auth"],
    github: "https://github.com/Narayanalv/notes/releases/tag/v1.0.0"
  },
  {
    id: "shopping-app",
    title: "Shopping Application",
    subtitle: "E-Commerce System with Catalog & Order Tracking",
    category: "fullstack",
    categoryLabel: "Desktop / E-Commerce",
    tag: "BCA 5th Sem",
    featured: false,
    description: "Built an Amazon-style application where users can view, search, buy products, and track order status.",
    highlights: [
      "Built an Amazon-style application where users can view, search, buy products, and track order status."
    ],
    tech: ["VB.NET", "MySQL"]
  }
];

export const skillCategories = [
  {
    title: "Core Technologies",
    icon: "💻",
    skills: technicalSkills.coreTechnologies
  },
  {
    title: "Frameworks & Backend",
    icon: "⚡",
    skills: technicalSkills.frameworks
  },
  {
    title: "Auth & Security",
    icon: "🔒",
    skills: technicalSkills.authSecurity
  },
  {
    title: "Databases & ORM",
    icon: "🛢️",
    skills: technicalSkills.databases
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: technicalSkills.toolsDevOps
  }
];
