import React from 'react';
import { Container } from 'react-bootstrap';
import { skills, programmingLanguages } from '../data';

const categoryColors: Record<string, string> = {
    Backend: '#00f0c8',  // teal
    Frontend: '#818cf8',  // indigo
    Database: '#38bdf8',  // sky blue
    Security: '#fb7185',  // rose
    'AI/ML': '#e879f9',  // fuchsia
    Programming: '#00f0c8',  // teal
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section-container">
            <Container>
                <h2 className="display-5 fw-bold mb-2 text-center">
                    My <span className="text-gradient">Skills</span>
                </h2>
                <p className="text-secondary text-center mb-5">Technologies and languages I work with</p>

                {/* Programming Languages */}
                <div className="mb-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <div style={{ height: '2px', width: '32px', background: 'var(--accent-gradient)', borderRadius: '2px' }} />
                        <h4 className="mb-0 fw-semibold text-uppercase tracking-wide" style={{ fontSize: '0.85rem', letterSpacing: '0.12em', color: '#00f0c8' }}>
                            Programming Languages
                        </h4>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        {programmingLanguages.map((lang, i) => (
                            <div
                                key={i}
                                className="skill-chip"
                                style={{ '--chip-color': categoryColors['Programming'] } as React.CSSProperties}
                            >
                                <span className="skill-chip-dot" />
                                {lang.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Skills grouped by category */}
                {(['Backend', 'Frontend', 'Database', 'Security', 'AI/ML'] as const).map((cat) => {
                    const filtered = skills.filter(s => s.category === cat);
                    if (!filtered.length) return null;
                    return (
                        <div className="mb-5" key={cat}>
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div style={{ height: '2px', width: '32px', background: `linear-gradient(135deg, ${categoryColors[cat]}, ${categoryColors[cat]}88)`, borderRadius: '2px' }} />
                                <h4 className="mb-0 fw-semibold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.12em', color: categoryColors[cat] }}>
                                    {cat}
                                </h4>
                                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                {filtered.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="skill-chip"
                                        style={{ '--chip-color': categoryColors[cat] } as React.CSSProperties}
                                    >
                                        <span className="skill-chip-dot" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </Container>
        </section>
    );
};

export default Skills;
