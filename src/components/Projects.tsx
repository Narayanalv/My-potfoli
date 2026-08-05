import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { projectsList, type Project } from '../data';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = filter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === filter);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('#projects .scroll-reveal').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Animate once only
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filter]);

  return (
    <section id="projects" ref={sectionRef} className="py-5 my-4">
      <Container>
        {/* Section Header */}
        <div className="scroll-reveal font-mono text-muted mb-2" style={{ fontSize: '0.85rem' }}>
          02. REPOSITORY SHOWCASE
        </div>
        <h2 className="scroll-reveal font-mono text-primary fs-3 fw-bold mb-4" style={{ transitionDelay: '80ms' }}>
          <span className="text-accent">$</span> git log --oneline --projects
        </h2>

        {/* Filter Pills */}
        <div className="scroll-reveal d-flex flex-wrap gap-2 mb-4 font-mono" style={{ transitionDelay: '160ms' }}>
          {[
            { id: 'all', label: 'all_repos (5)' },
            { id: 'ai-backend', label: 'ai_backend' },
            { id: 'fullstack', label: 'fullstack_web' },
            { id: 'mobile', label: 'mobile_app' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`toggle-tag border-0 cursor-pointer ${filter === tab.id ? 'bg-accent text-dark fw-bold' : ''
                }`}
              style={{
                background: filter === tab.id ? 'var(--accent)' : 'rgba(255, 255, 255, 0.04)',
                color: filter === tab.id ? '#0A0E14' : 'var(--text-primary)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with Staggered Scroll Reveal */}
        <Row className="g-4">
          {filteredProjects.map((project: Project, index: number) => (
            <Col lg={6} key={project.id}>
              <div
                className="scroll-reveal code-card h-100 d-flex flex-column"
                style={{ transitionDelay: `${200 + index * 90}ms` }}
              >
                {/* Window Header Bar with 3 Muted Gray Dots */}
                <div className="window-header">
                  <span className="window-dot" />
                  <span className="window-dot" />
                  <span className="window-dot" />
                  <span className="ms-2 font-mono text-muted">{project.id}.tsx</span>
                  <span className="ms-auto font-mono text-accent" style={{ fontSize: '0.7rem' }}>
                    [{project.tag}]
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="font-mono text-primary fs-5 fw-bold mb-1">
                    {project.title}
                  </h3>
                  <div className="font-mono text-muted small mb-3">
                    {project.subtitle}
                  </div>

                  <p className="font-sans text-white small mb-3" style={{ lineHeight: '1.65', color: '#E6E6E6' }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 flex-grow-1 font-mono" style={{ fontSize: '0.825rem' }}>
                    <div className="text-amber mb-1">Key Features:</div>
                    <ul className="ps-3 mb-0 font-sans" style={{ lineHeight: '1.65', color: '#E6E6E6' }}>
                      {project.highlights.map((h, i) => (
                        <li key={i} className="mb-1" style={{ color: '#E6E6E6' }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-4 pt-3 border-top border-secondary border-opacity-20 font-mono">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="toggle-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Code & Live Links */}
                  {(project.github || project.live) && (
                    <div className="d-flex flex-wrap gap-3 pt-2 font-mono" style={{ fontSize: '0.85rem' }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                        >
                          [ repo_code ] ↗
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline ms-auto"
                        >
                          [ live_demo ] ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
