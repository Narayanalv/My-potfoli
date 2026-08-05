import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { technicalSkills } from '../data';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('#stack .scroll-reveal').forEach((el) => {
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
    <section id="stack" ref={sectionRef} className="py-5 my-4">
      <Container>
        {/* Section Header */}
        <div className="scroll-reveal font-mono text-muted mb-2" style={{ fontSize: '0.85rem' }}>
          01. STACK CONFIGURATION
        </div>
        <h2 className="scroll-reveal font-mono text-primary fs-3 fw-bold mb-4" style={{ transitionDelay: '80ms' }}>
          <span className="text-accent">$</span> cat stack.config.json
        </h2>

        {/* Code Editor Window */}
        <div className="scroll-reveal code-card" style={{ transitionDelay: '160ms' }}>
          <div className="window-header">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="ms-2">stack.config.json</span>
          </div>

          <div className="p-4 font-mono" style={{ fontSize: '0.9rem', lineHeight: '2' }}>
            <div className="text-muted">&#123;</div>

            {/* Core Technologies */}
            <div className="ps-4">
              <span className="text-amber">"core_technologies"</span>: [
              <div className="ps-4 d-flex flex-wrap gap-2 my-1">
                {technicalSkills.coreTechnologies.map((tech, idx) => (
                  <span key={idx} className="toggle-tag">
                    "{tech}"{idx < technicalSkills.coreTechnologies.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ],
            </div>

            {/* Frameworks */}
            <div className="ps-4 mt-2">
              <span className="text-amber">"frameworks"</span>: [
              <div className="ps-4 d-flex flex-wrap gap-2 my-1">
                {technicalSkills.frameworks.map((fw, idx) => (
                  <span key={idx} className="toggle-tag">
                    "{fw}"{idx < technicalSkills.frameworks.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ],
            </div>

            {/* Security */}
            <div className="ps-4 mt-2">
              <span className="text-amber">"auth_and_security"</span>: [
              <div className="ps-4 d-flex flex-wrap gap-2 my-1">
                {technicalSkills.authSecurity.map((sec, idx) => (
                  <span key={idx} className="toggle-tag">
                    "{sec}"{idx < technicalSkills.authSecurity.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ],
            </div>

            {/* Databases */}
            <div className="ps-4 mt-2">
              <span className="text-amber">"databases"</span>: [
              <div className="ps-4 d-flex flex-wrap gap-2 my-1">
                {technicalSkills.databases.map((db, idx) => (
                  <span key={idx} className="toggle-tag">
                    "{db}"{idx < technicalSkills.databases.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ],
            </div>

            {/* AI / ML */}
            <div className="ps-4 mt-2">
              <span className="text-amber">"ai_and_vector_search"</span>: [
              <div className="ps-4 d-flex flex-wrap gap-2 my-1">
                {technicalSkills.aiMl.map((ai, idx) => (
                  <span key={idx} className="toggle-tag">
                    "{ai}"{idx < technicalSkills.aiMl.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ],
            </div>

            {/* Version Control */}
            <div className="ps-4 mt-2">
              <span className="text-amber">"version_control"</span>: [
              <div className="ps-4 d-flex flex-wrap gap-2 my-1">
                {technicalSkills.versionControl.map((vc, idx) => (
                  <span key={idx} className="toggle-tag">
                    "{vc}"{idx < technicalSkills.versionControl.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ]
            </div>

            <div className="text-muted">&#125;</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
