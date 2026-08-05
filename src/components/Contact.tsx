import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { heroInfo } from '../data';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('#contact .scroll-reveal').forEach((el) => {
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

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(heroInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-5 my-4">
      <Container>
        {/* Section Header */}
        <div className="scroll-reveal font-mono text-muted mb-2" style={{ fontSize: '0.85rem' }}>
          04. DISPATCH COMMUNICATION
        </div>
        <h2 className="scroll-reveal font-mono text-primary fs-3 fw-bold mb-4" style={{ transitionDelay: '80ms' }}>
          <span className="text-accent">$</span> echo $CONTACT_INFO
        </h2>

        {/* Minimal Terminal Contact Window */}
        <div className="scroll-reveal code-card" style={{ transitionDelay: '160ms' }}>
          <div className="window-header">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="ms-2">contact_endpoints.env</span>
          </div>

          <div className="p-4 p-md-5 font-mono">
            <div className="mb-4">
              <div className="text-muted mb-1">Direct Email:</div>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a 
                  href={`mailto:${heroInfo.email}`} 
                  className="link-underline fs-4 fw-bold"
                >
                  {heroInfo.email}
                </a>

                <button 
                  onClick={handleCopyEmail}
                  className="toggle-tag border-0 cursor-pointer"
                >
                  {copied ? 'copied! ✓' : '[ copy_email ]'}
                </button>
              </div>
            </div>

            <div className="row g-4 pt-3 border-top border-secondary border-opacity-20">
              <div className="col-md-4">
                <div className="text-muted small mb-1">Phone Number:</div>
                <div className="text-primary fw-bold fs-5">
                  {heroInfo.phone}
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-muted small mb-1">Current Location:</div>
                <div className="text-primary fw-bold fs-5">
                  📍 {heroInfo.location}
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-muted small mb-1">Social Profiles:</div>
                <div className="d-flex gap-3">
                  <a 
                    href={heroInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-underline"
                  >
                    [ linkedin ] ↗
                  </a>
                  <a 
                    href={heroInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-underline"
                  >
                    [ github ] ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
