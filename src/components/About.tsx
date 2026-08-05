import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { workExperience, educationList } from '../data';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('#timeline .scroll-reveal').forEach((el) => {
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
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-5 my-4">
      <Container>
        {/* Section Header */}
        <div className="scroll-reveal font-mono text-muted mb-2" style={{ fontSize: '0.85rem' }}>
          03. CAREER TIMELINE
        </div>
        <h2 className="scroll-reveal font-mono text-primary fs-3 fw-bold mb-4" style={{ transitionDelay: '80ms' }}>
          <span className="text-accent">$</span> history --experience --education
        </h2>

        <Row className="g-4">
          {/* Work Experience */}
          <Col lg={7}>
            <div className="scroll-reveal code-card h-100" style={{ transitionDelay: '160ms' }}>
              <div className="window-header">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="ms-2">work_experience.log</span>
              </div>

              <div className="p-4 font-mono">
                {workExperience.map((exp, idx) => (
                  <div key={idx} className={`mb-4 ${idx > 0 ? 'pt-4 border-top border-secondary border-opacity-20' : ''}`}>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                      <span className="text-accent fw-bold fs-6">
                        &gt; {exp.role}
                      </span>
                      <span className="text-muted small">
                        [{exp.period}]
                      </span>
                    </div>

                    <div className="text-muted small mb-3">
                      company: <span className="text-primary">{exp.company}</span> &nbsp;|&nbsp; loc: {exp.location} &nbsp;|&nbsp; type: {exp.type}
                    </div>

                    <ul className="ps-3 mb-0 font-sans text-white small" style={{ lineHeight: '1.7', color: '#E6E6E6' }}>
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="mb-2" style={{ color: '#E6E6E6' }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Education */}
          <Col lg={5}>
            <div className="scroll-reveal code-card h-100" style={{ transitionDelay: '260ms' }}>
              <div className="window-header">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="ms-2">education.log</span>
              </div>

              <div className="p-4 font-mono">
                {educationList.map((edu, idx) => (
                  <div key={idx} className={`mb-4 ${idx > 0 ? 'pt-4 border-top border-secondary border-opacity-20' : ''}`}>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                      <span className="text-amber fw-bold fs-6">
                        &gt; {edu.degree}
                      </span>
                    </div>

                    <div className="text-muted small mb-2">
                      [{edu.period}] &nbsp;|&nbsp; {edu.institution}
                    </div>

                    <p className="font-sans text-white small mb-0" style={{ lineHeight: '1.65', color: '#E6E6E6' }}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
