import React from 'react';

export function Card({ image, name, subtitle, description }) {
  return (
    <div className="wrapper">
      <div className="card1">

        <div
          className="front-page"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="card1-info">
            <h2 className="card1-title">{name}</h2>
            <p className="card1-subtitle">{subtitle}</p>
          </div>
        </div>

        <div className="back-page">
          <div className="card1-content">
            <h3>{name}</h3>
            <p className="card1-description">{description}</p>
            {/* <button className="card1-button">Explore More</button> */}
          </div>
        </div>
      </div>
    </div>
  );
} 