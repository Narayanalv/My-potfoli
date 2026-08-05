import React from 'react';

const StatementSection: React.FC = () => {
  return (
    <section id="statement" className="theme-dark py-5 border-top border-bottom border-secondary border-opacity-20">
      <div className="container py-5">
        {/* Large Statement Text matching Specification #3 */}
        <h2
          className="font-title fw-bold text-white text-uppercase mb-5 tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4.25rem)', lineHeight: '1.08' }}
        >
          NARAYANA STUDIO IS AN INDEPENDENT DIGITAL ENGINEERING STUDIO ARCHITECTING HIGH-THROUGHPUT BACKEND SYSTEMS, SCALABLE REST APIS, AND RAG PLATFORMS.
        </h2>

        {/* Supporting Columns */}
        <div className="row g-4 pt-4 border-top border-secondary border-opacity-20 font-mono">
          <div className="col-md-6">
            <h4 className="text-cyan fw-bold text-uppercase mb-2" style={{ fontSize: '0.9rem', letterSpacing: '0.08em' }}>
              ✦ BACKEND ENGINEERING & SCALABILITY
            </h4>
            <p className="text-white text-opacity-80 small leading-relaxed mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Java Spring Boot microservices, Spring Security JWT filter chains, pgvector similarity search, and high-concurrency PostgreSQL & MySQL database query optimization.
            </p>
          </div>

          <div className="col-md-6">
            <h4 className="text-cyan fw-bold text-uppercase mb-2" style={{ fontSize: '0.9rem', letterSpacing: '0.08em' }}>
              ✦ RAG & AI INTEGRATION
            </h4>
            <p className="text-white text-opacity-80 small leading-relaxed mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Multi-RAG chatbot platforms combining automated document chunking, Gemini vector embeddings, and Groq LLM inference pipelines over RESTful API gateways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
