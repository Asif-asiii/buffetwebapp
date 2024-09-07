import React from 'react';
import './AboutUs.css'; // Import the stylesheet

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        
        <div className="about-us-text">
          <h2>Welcome to Castle Classics!</h2>
          <p>
            At Castle Classics, we believe in providing our guests with an unforgettable dining experience.
            Our buffet features a diverse selection of dishes from around the world, all prepared with the freshest ingredients.
          </p>
          <p>
            Whether you're here for a family gathering, a special celebration, or just a night out,
            our goal is to ensure that you leave with a smile and a satisfied appetite.
          </p>
          <h3>Our Mission</h3>
          <p>
            To create memorable moments for our guests by offering a delightful culinary experience
            that celebrates flavor, diversity, and quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
