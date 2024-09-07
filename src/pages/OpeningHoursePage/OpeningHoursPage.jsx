import React from 'react';
import './OpeningHoursPage.css'; // Import the stylesheet

const OpeningHours = () => {
  return (
    <div className="opening-hours-container">
      <h2 className="section-title">Restaurant Opening Hours</h2>
      <div className="hours-table">
        <div className="hours-row">
          <span className="day">Monday</span>
          <span className="time">9:00 AM - 10:00 PM</span>
        </div>
        <div className="hours-row">
          <span className="day">Tuesday</span>
          <span className="time">9:00 AM - 10:00 PM</span>
        </div>
        <div className="hours-row">
          <span className="day">Wednesday</span>
          <span className="time">9:00 AM - 10:00 PM</span>
        </div>
        <div className="hours-row">
          <span className="day">Thursday</span>
          <span className="time">9:00 AM - 10:00 PM</span>
        </div>
        <div className="hours-row">
          <span className="day">Friday</span>
          <span className="time">9:00 AM - 11:00 PM</span>
        </div>
        <div className="hours-row">
          <span className="day">Saturday</span>
          <span className="time">10:00 AM - 11:00 PM</span>
        </div>
        <div className="hours-row">
          <span className="day">Sunday</span>
          <span className="time">10:00 AM - 10:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
