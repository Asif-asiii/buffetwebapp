import React from 'react';
import './Footer.css'; // Import the stylesheet

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2023 Castle Classics - All Rights Reserved.</p>
        <p>Powered by GoDaddy Website Builder</p>
        <p><a href="/privacy-policy" className="footer-link">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
