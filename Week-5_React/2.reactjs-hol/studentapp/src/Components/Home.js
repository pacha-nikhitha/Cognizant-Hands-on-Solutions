import React from 'react';

function Home() {
  return (
    <div className="component-card home-card fade-in">
      <div className="card-header">
        <span className="card-icon">🏠</span>
        <h3>Portal Home</h3>
      </div>
      <div className="card-body">
        <p className="welcome-text">
          Welcome to the Home page of Student Management Portal
        </p>
        <div className="quick-actions">
          <div className="action-tag">📅 View Schedule</div>
          <div className="action-tag">📝 Register Course</div>
          <div className="action-tag">📊 Grade Sheet</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
