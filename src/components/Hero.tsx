import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { heroInfo } from '../data';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="section-container animate-slide-up">
            <Container>
                <Row className="align-items-center min-vh-100 text-center">
                    <Col md={{ span: 8, offset: 2 }}>
                        {/* Open to Work badge */}
                        <div className="d-flex justify-content-center mb-4">
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 20px',
                                borderRadius: '999px',
                                background: 'rgba(0, 240, 200, 0.08)',
                                border: '1px solid rgba(0, 240, 200, 0.35)',
                                color: '#00f0c8',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.03em'
                            }}>
                                <span style={{
                                    width: '8px', height: '8px', borderRadius: '50%',
                                    background: '#00f0c8',
                                    boxShadow: '0 0 8px #00f0c8',
                                    animation: 'pulse 2s infinite'
                                }} />
                                Available for New Roles & Tech Stacks
                            </span>
                        </div>
                        <h1 className="display-3 fw-bold mb-3">
                            Hi, I'm <span className="text-gradient">{heroInfo.name}</span>
                        </h1>
                        <h2 className="h3 mb-4 text-light opacity-75">
                            {heroInfo.title}
                        </h2>
                        <p className="lead mb-4 text-secondary">
                            {heroInfo.description}
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center mb-5 text-secondary small">
                            <span>📍 {heroInfo.location}</span>
                            <span>📞 {heroInfo.phone}</span>
                            <span>✉️ {heroInfo.email}</span>
                        </div>
                        <div className="d-flex gap-3 justify-content-center">
                            <Button href="/#/projects" variant="primary" size="lg" className="px-4 py-2 rounded-pill fw-semibold shadow" style={{ background: 'var(--accent-gradient)', border: 'none' }}>
                                View My Work
                            </Button>
                            <Button href={`mailto:${heroInfo.email}`} variant="outline-light" size="lg" className="px-4 py-2 rounded-pill fw-semibold">
                                Contact Me
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
