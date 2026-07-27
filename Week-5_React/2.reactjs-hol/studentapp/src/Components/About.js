import React from 'react';

function About() {
  return (
    <div className="component-card about-card fade-in">
      <div className="card-header">
        <span className="card-icon">ℹ️</span>
        <h3>About Portal</h3>
      </div>
      <div className="card-body">
        <p className="welcome-text">
          Welcome to the About page of the Student Management Portal
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-num">15k+</span>
            <span className="stat-lbl">Active Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">200+</span>
            <span className="stat-lbl">Courses Offered</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">98%</span>
            <span className="stat-lbl">Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
