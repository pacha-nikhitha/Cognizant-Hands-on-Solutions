import React from 'react';

function Contact() {
  return (
    <div className="component-card contact-card fade-in">
      <div className="card-header">
        <span className="card-icon">📞</span>
        <h3>Support & Contact</h3>
      </div>
      <div className="card-body">
        <p className="welcome-text">
          Welcome to the Contact page of the Student Management Portal
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <strong>📧 Email:</strong> support@studentportal.edu
          </div>
          <div className="contact-item">
            <strong>☎️ Hotline:</strong> +1 (800) 555-0199
          </div>
          <div className="contact-item">
            <strong>📍 Location:</strong> Academic Block A, Room 102
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
