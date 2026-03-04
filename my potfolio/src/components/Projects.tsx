import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { projects } from '../data';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-container bg-dark bg-opacity-25" style={{ borderRadius: '40px' }}>
            <Container>
                <h2 className="display-5 fw-bold mb-5 text-center">
                    My <span className="text-gradient">Projects</span>
                </h2>

                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col md={6} lg={6} key={index}>
                            <Card className="glass-card h-100 border-0 text-start">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold fs-4 mb-3 text-white">
                                        {project.title}
                                    </Card.Title>
                                    <Card.Text className="text-secondary flex-grow-1">
                                        {project.description}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-2 mt-3">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="badge rounded-pill bg-light bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-2"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    {(project.github || project.live) && (
                                        <div className="d-flex gap-2 mt-4">
                                            {project.github && (
                                                <Button
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="outline-light"
                                                    size="sm"
                                                    className="rounded-pill px-3"
                                                >
                                                    GitHub ↗
                                                </Button>
                                            )}
                                            {project.live && (
                                                <Button
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    size="sm"
                                                    className="rounded-pill px-3 fw-semibold"
                                                    style={{ background: 'var(--accent-gradient)', border: 'none' }}
                                                >
                                                    Live Demo ↗
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
