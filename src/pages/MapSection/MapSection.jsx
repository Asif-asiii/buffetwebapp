import React from 'react';
import './MapSection.css'; // Import the stylesheet

const MapSection = () => {
  return (
    <div className="map-section">
      <h2 className="map-title">Find Us Here</h2>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509106!2d144.95373531531596!3d-37.81627927975172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11a01b%3A0x5045675218ceed24!2sMelbourne%20Museum!5e0!3m2!1sen!2sau!4v1618249682315!5m2!1sen!2sau"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
