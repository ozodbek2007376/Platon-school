import React, { useState } from 'react';

export function Card({ image, name, subtitle, description }) {
  const [flipped, setFlipped] = useState(false);

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFlipped((s) => !s);
    }
  };

  return (
    <div className="wrapper">
      <div
        className={`card1 ${flipped ? 'is-flipped' : ''}`}
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
        onClick={() => setFlipped((s) => !s)}
        onKeyDown={handleKey}
      >
        {/* front */}
        <div
          className="front-page"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden={flipped}
        >
          {/* keep an offscreen image for screen readers / SEO */}
          <img src={image} alt={name} className="visually-hidden" />
          <div className="card1-info">
            <h2 className="card1-title">{name}</h2>
            <p className="card1-subtitle">{subtitle}</p>
          </div>
        </div>

        {/* back */}
        <div className="back-page" aria-hidden={!flipped}>
          <div className="card1-content">
            <h3>{name}</h3>
            <p className="card1-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}