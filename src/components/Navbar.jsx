import React, { useState } from 'react';
import './Navbar.css'; // Link to the CSS file
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      
      <div className="logo">
        <h2> <b>Castle Classics</b></h2>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isMenuOpen ? "line open" : "line"}></div>
        <div className={isMenuOpen ? "line open" : "line"}></div>
        <div className={isMenuOpen ? "line open" : "line"}></div>
      </div>

      {/* Mobile Menu */}
      <div className={isMenuOpen ? "menu open" : "menu"}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <ul>
        <li><Link to="/" style={{fontWeight:"bold"}}>Home</Link></li>

          <li><Link to="/open/hours/page">Restaurant Opening Hours Page</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/menu">Our Menu & Pricing</Link></li>
        </ul>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links" style={{marginTop:"20px"}}>
      <li><Link to="/" style={{fontWeight:"bold"}}>Home</Link></li>

        <li><Link to="/open/hours/page">Restaurant Opening Hours Page</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/menu">Our Menu & Pricing</Link></li>
      </ul>

      <p style={{marginLeft:"50px", marginTop: "20px"}}><b>01382227759</b> </p>
      
    </nav>
  );
};

export default Navbar;
