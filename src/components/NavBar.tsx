import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const navItems = [
  { id: 'hero', label: '~/hero' },
  { id: 'stack', label: '~/stack' },
  { id: 'projects', label: '~/projects' },
  { id: 'timeline', label: '~/timeline' },
  { id: 'contact', label: '~/contact' }
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      fixed="top" 
      className={`terminal-nav py-3 ${scrolled ? 'scrolled' : ''}`}
      style={{ zIndex: 1000 }}
    >
      <Container>
        {/* Terminal Prompt Logo */}
        <Navbar.Brand 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="font-mono text-primary text-decoration-none d-flex align-items-center gap-2"
          style={{ fontSize: '0.95rem' }}
        >
          <span className="text-accent fw-bold">ln@dev:~$</span>
          <span>whoami</span>
        </Navbar.Brand>

        {/* Desktop Nav Items with Active Dot Indicator */}
        <Nav className="ms-auto align-items-center gap-4 font-mono" style={{ fontSize: '0.85rem' }}>
          {navItems.map((item) => (
            <Nav.Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              className={`p-0 text-decoration-none position-relative ${
                activeSection === item.id ? 'text-accent fw-bold' : 'text-muted'
              }`}
              style={{ transition: 'color 200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {item.label}
              {activeSection === item.id && (
                <span 
                  className="position-absolute rounded-circle bg-accent"
                  style={{
                    width: '4px',
                    height: '4px',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent)'
                  }}
                />
              )}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
