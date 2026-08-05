import React from 'react';

const marqueeItems = [
  "IMPACT",
  "INSPIRE",
  "INNOVATE",
  "SPRING BOOT",
  "RAG PLATFORM",
  "PGVECTOR SEARCH",
  "REST APIS",
  "JWT SECURITY",
  "FULL-STACK WEB"
];

const Marquee: React.FC = () => {
  return (
    <div className="ticker-marquee">
      <div className="ticker-content font-title fw-bold text-white uppercase" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
        {marqueeItems.concat(marqueeItems).map((item, idx) => (
          <span key={idx} className="px-4">
            {item} <span className="text-cyan px-3">+</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
