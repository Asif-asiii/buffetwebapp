import React from 'react';
import './BuffetSection.css'; // Import the stylesheet
import image from "../../assets/buffetImage.jpeg"
const BuffetSection = () => {
  return (
    <div className="buffet-section">
      {/* Left Side - Image */}
      <div className="buffet-image-container">
        <img
          src={image}
          alt="Buffet"
          className="buffet-image"
        />
      </div>

      {/* Right Side - Content */}
      <div className="buffet-content">
        <h2 className="buffet-title">Delicious Buffet Options</h2>
        <p className="buffet-description">
          Enjoy a wide variety of dishes, including appetizers, main courses, and desserts. Our buffet features fresh ingredients and diverse cuisines to satisfy every palate.
        </p>
        <p className="buffet-description">
          Whether you're celebrating a special occasion or just want to indulge, our buffet is the perfect choice. Join us for an unforgettable dining experience!
        </p>
      </div>
    </div>
  );
};

export default BuffetSection;
