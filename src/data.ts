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
  tagline: "Java Spring Boot Specialist | RAG & Backend Architect",
  summary: "Results-driven Software Engineer with 2.5 years of experience designing, developing, and maintaining scalable, high-quality applications. Experienced in building reliable backend systems, solving complex technical challenges, and delivering efficient, maintainable solutions that align with business objectives.",
  phone: "+91 99861 85776",
  email: "narayana070203@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshmi-narayana-v-356521186/",
  github: "https://github.com/Narayanalv/",
  location: "Bengaluru, India",
  stats: [
    { value: "2.5+", label: "Years Experience" },
    { value: "ChatbotAi", label: "RAG System" },
    { value: "MCA", label: "Graduate (2026)" }
  ]
};

export const technicalSkills = {
  coreTechnologies: ["Java (Core, Collections, OOP)", "PHP", "TypeScript", "JavaScript", "SQL"],
  frameworks: ["Spring Boot", "Spring Framework (Web, Security, Data)", "Slim (PHP)"],
  authSecurity: ["JWT", "OAuth 2.0", "Spring Security"],
  databases: ["PostgreSQL (pgvector)", "MySQL", "JPA", "MongoDB", "Prisma ORM"],
  aiMl: ["RAG (Retrieval-Augmented Generation)", "Vector Embeddings", "Machine Learning"],
  versionControl: ["Git", "GitHub"]
};

export const workExperience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Octech Digital",
    period: "Jun 2024 – July 2026",
    location: "Bengaluru, India",
    type: "Full-Time",
    highlights: [
      "Designed, developed, and maintained scalable backend systems and high-throughput RESTful APIs using Java Spring Boot and PHP (Slim Framework).",
      "Built reliable, high-quality applications alignment with core business objectives.",
      "Engineered stateless JWT authentication pipelines, Spring Security filter chains, and OAuth 2.0 integrations.",
      "Optimized PostgreSQL and MySQL database schema designs, indexing, and complex SQL query performance."
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "Slim (PHP)", "PostgreSQL", "MySQL", "JWT", "REST APIs"]
  },
  {
    role: "Software Engineering Intern",
    company: "Octech Digital",
    period: "Dec 2023 – May 2024",
    location: "Bengaluru, India",
    type: "Internship",
    highlights: [
      "Contributed throughout the software development lifecycle (SDLC) in cross-functional engineering teams.",
      "Built and maintained REST API endpoints, database interactions, and backend services.",
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
    title: "ChatbotAi — RAG Chatbot Platform",
    subtitle: "RAG Engine with Vector Search & Multi-Tenant Ingestion",
    category: "ai-backend",
    categoryLabel: "AI & Backend Architecture",
    tag: "MCA Project",
    featured: true,
    description: "RAG chatbot platform where businesses integrate via API key — clients upload documents and interact seamlessly through a built-in Angular UI.",
    highlights: [
      "Built Spring Boot backend handling document ingestion, text chunking, vector embedding via Gemini API, and semantic retrieval over REST APIs.",
      "Implemented JWT security pipeline with Spring Security — stateless auth, CORS configuration, and filter chain setup.",
      "pgvector + PostgreSQL for vector similarity search; Groq API for LLM inference — chosen for cost efficiency over running models locally.",
      "Secure document storage via Cloudinary; documents are parsed, chunked, and indexed automatically on upload."
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "pgvector", "Gemini API", "Groq API", "Angular", "Cloudinary"]
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
      "Designed normalized PostgreSQL schema via Prisma ORM; implemented token blacklisting to prevent refresh-token reuse attacks."
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT"],
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
    description: "YouTube-style video streaming platform with Google OAuth single sign-on, chunked video upload, media streaming, and channel user management.",
    highlights: [
      "Built a YouTube-style video platform with Google OAuth SSO, video upload and streaming functionality, and user management.",
      "Integrated PHP backend with MySQL database for media catalog index and user profile storage."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Google OAuth 2.0", "HTML5/CSS3"]
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
      "Cross-platform mobile app with fingerprint / face-ID biometric lock and encrypted local SQLite persistence — published on Android.",
      "Built using Flutter & Dart with clean material design layout and offline note search."
    ],
    tech: ["Flutter", "Dart", "SQLite", "Biometric Auth", "Android"],
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
    description: "E-commerce shopping application built like Amazon where users can view products, search catalog, buy products, and track order status.",
    highlights: [
      "Built like Amazon where user can view, search, buy product, and view order status.",
      "Designed relational database schema in MySQL for product catalog and transaction logs."
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
    title: "AI / ML & Vector Search",
    icon: "🧠",
    skills: technicalSkills.aiMl
  },
  {
    title: "Version Control",
    icon: "🛠️",
    skills: technicalSkills.versionControl
  }
];
