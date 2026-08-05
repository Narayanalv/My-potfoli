import React from 'react';
import { Container } from 'react-bootstrap';
import { heroInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 border-top border-secondary border-opacity-20 font-mono small text-muted">
      <Container className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div>
          Status: <span className="text-accent">200 OK</span> &bull; {heroInfo.name} &copy; {new Date().getFullYear()}
        </div>

        <div>
          Built with React, TypeScript &amp; JetBrains Mono
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
