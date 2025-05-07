// src/components/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <div className="events-page">
      <h2>CyberX Events</h2>
      <div className="event-gallery">
        <div className="event-card">
          <img src="/reconx.jpeg" alt="ReconX" />
          <p>ReconX - Ethical Hacking Simulation</p>
        </div>
        <div className="event-card">
          <img src="/phishingphantom.jpeg" alt="Phishing Phantom" />
          <p>Phishing Phantom - Awareness Drive</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
