import React from 'react';
import { workExperience } from '../data';

const partnerLogos = [
  "JAVA SPRING BOOT",
  "POSTGRESQL / PGVECTOR",
  "SLIM PHP FRAMEWORK",
  "REACT & TYPESCRIPT",
  "FLUTTER & DART",
  "ANGULAR",
  "PRISMA ORM",
  "MYSQL"
];

const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="theme-light py-5">
      <div className="container py-5">
        {/* Section Header with Pill Subtitle */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-5">
          <div>
            <span className="badge rounded-pill bg-dark text-white px-3 py-2 font-mono mb-2 d-inline-block" style={{ fontSize: '0.8rem' }}>
              KEY FACTS & METRICS
            </span>
            <h2 className="font-title display-4 fw-bold text-dark text-uppercase mb-0">
              ENGAGEMENT & TRACK RECORD
            </h2>
          </div>
          <p className="text-muted font-body mb-0" style={{ maxWidth: '420px', fontSize: '0.95rem' }}>
            Proven production expertise delivering scalable backend architecture, microservices, and AI RAG integrations.
          </p>
        </div>

        {/* Grid of 3 Rounded Card Containers */}
        <div className="row g-4 mb-5">
          {/* Card 1: Feature Card with Badge Overlay */}
          <div className="col-lg-4">
            <div className="light-card h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge bg-dark text-cyan px-3 py-1 rounded-pill font-mono mb-3" style={{ fontSize: '0.75rem' }}>
                  2.5+ YEARS EXP
                </span>
                <h3 className="font-title fw-bold text-dark mb-2" style={{ fontSize: '1.4rem' }}>
                  Backend Engineering
                </h3>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                  {workExperience[0].company} — {workExperience[0].role} (`{workExperience[0].period}`). Maintained high-throughput RESTful APIs & 2FA JWT auth pipelines.
                </p>
              </div>

              <div className="pt-3 border-top border-light font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>
                OCTECH DIGITAL &bull; BENGALURU
              </div>
            </div>
          </div>

          {/* Card 2: Large Numeric Stat Counter */}
          <div className="col-lg-4">
            <div className="light-card h-100 text-center d-flex flex-column justify-content-center align-items-center bg-dark text-white">
              <span className="badge bg-white text-dark px-3 py-1 rounded-pill font-mono mb-3" style={{ fontSize: '0.75rem' }}>
                FLAGSHIP RAG PLATFORM
              </span>
              <div className="font-title display-2 fw-bold text-cyan mb-2">
                ChatbotAi
              </div>
              <p className="text-white text-opacity-80 small mb-0 px-3" style={{ lineHeight: '1.6', maxWidth: '300px' }}>
                RAG platform powered by Spring Boot, pgvector similarity search, Gemini embeddings, and Groq LLM inference.
              </p>
            </div>
          </div>

          {/* Card 3: Feature Card with Badge Overlay */}
          <div className="col-lg-4">
            <div className="light-card h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge bg-dark text-cyan px-3 py-1 rounded-pill font-mono mb-3" style={{ fontSize: '0.75rem' }}>
                  MCA GRADUATE 2026
                </span>
                <h3 className="font-title fw-bold text-dark mb-2" style={{ fontSize: '1.4rem' }}>
                  Academic Credentials
                </h3>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                  Master of Computer Applications (KSOU 2024–2026) & Bachelor of Computer Applications (Lowry Adventist College).
                </p>
              </div>

              <div className="pt-3 border-top border-light font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>
                KARNATAKA STATE OPEN UNIVERSITY
              </div>
            </div>
          </div>
        </div>

        {/* Client / Partner Logo Strip */}
        <div className="pt-4">
          <div className="font-mono text-muted small uppercase mb-3 fw-bold" style={{ letterSpacing: '0.08em' }}>
            ✦ ECOSYSTEM & CORE FRAMEWORKS
          </div>
          <div className="row g-0 border-top border-left border-light">
            {partnerLogos.map((logo, idx) => (
              <div key={idx} className="col-6 col-md-3 partner-logo-box">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
