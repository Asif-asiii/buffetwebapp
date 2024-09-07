import React from 'react';
import './Hero.css'; // Link to the CSS file

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best dining with us. Delicious food, cozy ambiance, and memorable moments await you.</p>
        <button className="cta-button">View Our Menu</button>
      </div>
    </section>
  );
};

export default HeroSection;
