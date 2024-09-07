import React from 'react';
import './VisitUs.css'; // Import the stylesheet

const VisitUs = () => {
  return (
    <div className="visit-us-container">
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" className="form-textarea" required></textarea>
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>

      <div className="info-container">
        <h2 className="info-title">Our Location</h2>
        <p className="info-description">
          We are located in the heart of the city, providing easy access to all our guests.
        </p>
        <h3 className="info-subtitle">Contact Information</h3>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <h3 className="info-subtitle">Opening Hours</h3>
        <p>Monday - Friday: 9 AM - 6 PM</p>
        <p>Saturday - Sunday: 10 AM - 5 PM</p>
      </div>
    </div>
  );
};

export default VisitUs;
