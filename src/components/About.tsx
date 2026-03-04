import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

import { experience, education } from '../data';

const About: React.FC = () => {
    return (
        <section id="about" className="section-container">
            <Container className="text-center">
                <h2 className="display-5 fw-bold mb-5">
                    About <span className="text-gradient">Me</span>
                </h2>

                <Row className="text-start g-4">
                    <Col md={6}>
                        <h4 className="text-primary mb-4">Experience</h4>
                        <div className="d-flex flex-column gap-3">
                            {experience.map((item, index) => (
                                <Card key={index} className="glass-card border-0 shadow-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <Card.Body>
                                        <Card.Title className="text-gradient fw-bold mb-2">
                                            {item.title}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-3 text-light opacity-75">
                                            {item.subtitle}
                                        </Card.Subtitle>
                                        <Card.Text className="text-secondary">
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>
                    <Col md={6}>
                        <h4 className="text-primary mb-4">Education</h4>
                        <div className="d-flex flex-column gap-3">
                            {education.map((item, index) => (
                                <Card key={index} className="glass-card border-0 shadow-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <Card.Body>
                                        <Card.Title className="text-gradient fw-bold mb-2">
                                            {item.title}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-3 text-light opacity-75">
                                            {item.subtitle}
                                        </Card.Subtitle>
                                        <Card.Text className="text-secondary">
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
