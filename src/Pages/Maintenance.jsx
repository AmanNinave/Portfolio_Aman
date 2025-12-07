import React from 'react';
import './Styles/Maintenance.css';

export default function Maintenance() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <div className="maintenance-icon">
          <i className="fas fa-tools"></i>
        </div>
        <h1 className="maintenance-heading">
          Site Under <span>Maintenance</span>
        </h1>
        <p className="maintenance-message">
          We're currently performing scheduled maintenance to improve your experience.
        </p>
        <p className="maintenance-submessage">
          Please check back soon. We'll be back online shortly!
        </p>
        <div className="maintenance-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="maintenance-contact">
          <p>Need urgent assistance?</p>
          <a href="mailto:hello@amanninave.in" className="contact-link">
            <i className="fas fa-envelope"></i> hello@amanninave.in
          </a>
        </div>
      </div>
    </div>
  );
}

