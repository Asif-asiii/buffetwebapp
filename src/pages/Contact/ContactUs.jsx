import React, { useState } from 'react';
import './ContactUs.css'; // Import the stylesheet

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="contact-us-container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button" >Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>If you have any questions, feel free to reach out to us!</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> info@castleclassics.com</p>
          <p><strong>Address:</strong> 123 Buffet Lane, Food City, FC 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
