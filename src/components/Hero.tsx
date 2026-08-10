import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { heroInfo } from '../data';

const fullText = "> Lakshmi Narayana V";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  // Typewriter Effect (~50ms per character)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(fullText);
      setTypingComplete(true);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTypingComplete(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Blinking cursor fading out after 4s
  useEffect(() => {
    if (!typingComplete) return;

    const fadeTimer = setTimeout(() => {
      setCursorVisible(false);
    }, 4000);

    return () => clearTimeout(fadeTimer);
  }, [typingComplete]);

  // Subtle Mouse Parallax on Dot-Grid Background (Drifts 10-15px)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="position-relative min-vh-100 d-flex align-items-center overflow-hidden py-5">
      {/* Subtle Dot Grid Background */}
      <div 
        ref={gridRef}
        className="position-absolute inset-0 w-100 h-100 dot-grid-bg opacity-10" 
        style={{ pointerEvents: 'none', transition: 'transform 300ms var(--easing)' }} 
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row>
          <Col lg={10} xl={9}>
            {/* Terminal Breadcrumb */}
            <div className="font-mono text-muted mb-3" style={{ fontSize: '0.85rem' }}>
              <span className="text-accent">●</span> system: online &nbsp;|&nbsp; role: software_developer &nbsp;|&nbsp; loc: bengaluru_in
            </div>

            {/* Typewriter Monospace Headline */}
            <h1 className="font-mono display-3 fw-bold text-primary mb-3" style={{ letterSpacing: '-0.02em', minHeight: '1.2em' }}>
              {typedText}
              {cursorVisible && <span className="blinking-cursor">|</span>}
            </h1>

            {/* Sub-headline */}
            <div className="font-mono text-accent fs-4 mb-4 fw-medium">
              Software Developer & Spring Boot Specialist
            </div>

            {/* Professional Summary */}
            <p className="font-sans text-primary opacity-90 mb-4" style={{ maxWidth: '680px', fontSize: '1.05rem', lineHeight: '1.75' }}>
              {heroInfo.summary}
            </p>

            {/* Code Metadata Line */}
            <div className="font-mono text-muted mb-4 p-3 rounded" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', fontSize: '0.85rem' }}>
              <span className="text-amber">const</span> candidate = &#123; experience: <span className="text-accent">"2.7+ Yrs (Octech Digital)"</span>, degree: <span className="text-accent">"MCA (KSOU 2026)"</span> &#125;;
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 pt-2">
              <button 
                onClick={() => scrollTo('projects')} 
                className="btn-terminal"
              >
                <span>[ view_projects ]</span>
              </button>

              <button 
                onClick={() => scrollTo('contact')} 
                className="btn-terminal-outline"
              >
                <span>[ contact_me ]</span>
              </button>

              <a 
                href={heroInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-terminal-outline"
              >
                <span>[ github_profile ] ↗</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
