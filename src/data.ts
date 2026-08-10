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
  summary: "Results-driven Software Engineer with 2.7 years of experience designing, developing, and maintaining scalable, high-quality applications. Experienced in building reliable backend systems, solving complex technical challenges, and delivering efficient, maintainable solutions that align with business objectives.",
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
  authSecurity: ["JWT", "OAuth 2.0 (Google SSO)", "Spring Security Filter Chains", "Two-Factor Auth (2FA)", "Biometric Auth"],
  databases: ["PostgreSQL (pgvector)", "MySQL", "MongoDB", "SQLite", "JPA / Hibernate"],
  aiMl: ["RAG (Retrieval-Augmented Generation)", "Vector Embeddings (Gemini API)", "LLM Inference (Groq API)", "Document Chunking"],
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
      "Engineered Two-Factor Authentication (2FA) via OTP/Email, stateless JWT authentication pipelines, and Spring Security filter chains.",
      "Architected Automated Campaign & API Orchestration Services (automated emailer, API runner within time windows, batch API trigger services).",
      "Designed Universal Dashboard system reducing redundant components and optimizing query retrieval speed in MySQL."
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "Slim (PHP)", "PostgreSQL", "MySQL", "JWT", "2FA", "Pine Labs Woohoo API", "REST APIs"]
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
    tech: ["PHP", "Slim Framework", "MySQL", "JavaScript", "REST APIs", "Git"]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Karnataka State Open University (KSOU)",
    period: "2024 – 2026",
    location: "Karnataka, India",
    description: "Specializing in Advanced Software Engineering, Distributed Systems, Database Management, and AI/RAG Architectures."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lowry Adventist College",
    period: "2020 – 2023",
    location: "Bengaluru, India",
    description: "Solid foundation in Data Structures, Object-Oriented Programming (Java), Web Engineering, and Relational Database Systems."
  }
];

export const projectsList: Project[] = [
  {
    id: "chatbot-ai",
    title: "ChatbotAi — Enterprise RAG Platform",
    subtitle: "RAG Engine with Vector Search & Multi-Tenant Ingestion",
    category: "ai-backend",
    categoryLabel: "AI & Backend Architecture",
    tag: "MCA Project",
    featured: true,
    description: "Multi-tenant enterprise RAG chatbot platform where businesses integrate via API key — clients upload documents and interact seamlessly through a built-in Angular UI.",
    highlights: [
      "Built Spring Boot backend handling document ingestion, text chunking, vector embedding via Gemini API, and semantic retrieval over REST APIs.",
      "Implemented pgvector + PostgreSQL for vector similarity search and Groq API for cost-effective LLM inference.",
      "Stateless JWT security pipeline with Spring Security filter chains and CORS configuration.",
      "Secure document storage via Cloudinary; documents are parsed, chunked, and indexed automatically on upload."
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "pgvector", "Gemini API", "Groq API", "Angular", "Cloudinary"],
    github: "https://github.com/Narayanalv/ChatbotAi",
    githubFrontend: "https://github.com/Narayanalv/chatbotFE"
  },
  {
    id: "analytics-genie",
    title: "Analytics Genie — Reporting Platform",
    subtitle: "High-Throughput Analytics & Reporting Engine for Millions of Events",
    category: "ai-backend",
    categoryLabel: "Enterprise Backend",
    tag: "Production System",
    featured: true,
    description: "Scalable enterprise analytics platform designed to process millions of traffic events reliably across major marketing campaigns (Bigcity, Pine Labs).",
    highlights: [
      "Engineered scalable analytics platform using Spring Boot services backed by MySQL access layer for consistent reporting.",
      "Implemented encrypted Excel report generation for secure delivery and 2FA authentication for sensitive data protection.",
      "Built user search API by mobile number and config-driven pages API to update static legal pages dynamically."
    ],
    tech: ["Java", "Spring Boot", "MySQL", "2FA", "REST APIs", "Excel Encryption", "JWT"]
  },
  {
    id: "fullstack-crud",
    title: "Full-Stack Auth & CRUD Platform",
    subtitle: "Production-Deployed JWT Auth & Token Rotation System",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    tag: "Live Production",
    featured: true,
    description: "Production-deployed full-stack web application featuring robust JWT authentication with refresh token rotation and full CRUD operations.",
    highlights: [
      "Production-deployed application with JWT authentication, refresh token rotation, and full CRUD operations — live on Render.",
      "Designed normalized PostgreSQL schema via Prisma ORM; implemented token blacklisting to prevent refresh-token reuse attacks.",
      "Type-safe frontend built with React & TypeScript, connected to Express backend."
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT", "Render"],
    github: "https://github.com/Narayanalv/reactFrontEnd",
    githubBackend: "https://github.com/Narayanalv/expressBackEnd",
    live: "https://reactfrontend-qb5y.onrender.com/"
  },
  {
    id: "tubestream",
    title: "TubeStream — Video Streaming Platform",
    subtitle: "YouTube-Style Video Platform with Google OAuth SSO",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    tag: "BCA 6th Sem",
    featured: true,
    description: "YouTube-style video streaming platform with Google OAuth single sign-on, media streaming playback, and channel user management.",
    highlights: [
      "Built YouTube-style video platform with Google OAuth SSO, video upload.",
      "Integrated PHP backend with MySQL database for media catalog index and user profile storage."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Google OAuth 2.0", "HTML5/CSS3"],
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
    description: "Cross-platform mobile application featuring fingerprint / face-ID biometric lock gate and encrypted local data persistence.",
    highlights: [
      "Cross-platform mobile app with fingerprint / face-ID biometric lock and encrypted local SQLite persistence — published on Android.",
      "Built using Flutter & Dart with clean material design layout and offline note search."
    ],
    tech: ["Flutter", "Dart", "SQLite", "Biometric Auth", "Android"],
    github: "https://github.com/Narayanalv/notes"
  },
  {
    id: "api-orchestration",
    title: "Automated Campaign & API Orchestration",
    subtitle: "Configurable Emailer & Scheduled API Trigger Service",
    category: "ai-backend",
    categoryLabel: "Backend Microservices",
    tag: "Microservices",
    featured: false,
    description: "Suite of configurable backend orchestration services for automated email triggers, scheduled API execution within configured time windows, and rate-controlled batch invocations.",
    highlights: [
      "Built automated emailer service triggering emails based on configurable campaign settings.",
      "Built API runner service invoking endpoints within precise configured time windows and batch iteration thresholds."
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Cron Scheduling", "MySQL"]
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
    title: "AI / ML & Vector Search",
    icon: "🧠",
    skills: technicalSkills.aiMl
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: technicalSkills.toolsDevOps
  }
];
