import React from 'react';
import FlightCard from './FlightCard';

// GuestPage - shown when user is NOT logged in
// Demonstrates: conditional rendering - this whole component is conditionally shown
// Demonstrates: preventing rendering - returns null if explicitly hidden
function GuestPage({ flights, show }) {
  // Preventing component rendering by returning null
  if (!show) return null;

  return (
    <div className="page guest-page">
      <div className="page-banner guest-banner">
        <div className="banner-content">
          <div className="banner-icon">🌍</div>
          <h2>Explore Flights</h2>
          <p>Browse available flights. <strong>Login to book your tickets!</strong></p>
        </div>
        <div className="banner-badge guest-badge">
          <span>👤 Guest Mode</span>
        </div>
      </div>

      <div className="info-strip">
        <span className="info-icon">ℹ️</span>
        <p>You are browsing as a <strong>Guest</strong>. You can view flight details but need to 
          <strong> Login</strong> to book tickets.</p>
      </div>

      <div className="flights-grid">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            isLoggedIn={false}
            onBook={null}
          />
        ))}
      </div>
    </div>
  );
}

export default GuestPage;
