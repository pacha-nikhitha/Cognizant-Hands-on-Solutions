import React from 'react';
import FlightCard from './FlightCard';

// GuestPage - shown when user is NOT logged in
// Demonstrates: conditional rendering - this whole component is conditionally shown
// Demonstrates: preventing rendering - returns null if explicitly hidden
function GuestPage({ flights, show }) {
  // Preventing component rendering by returning null
  if (!show) return null;

  return (
    <section className="page guest-page" aria-label="Guest browsing view">
      {/* Banner */}
      <div className="page-banner guest-banner">
        <div className="banner-content">
          <div className="banner-icon" aria-hidden="true">🌍</div>
          <div>
            <h2>Explore Flights</h2>
            <p>Browse all available routes. <strong>Login to book your tickets!</strong></p>
          </div>
        </div>
        <div className="banner-badge guest-badge">
          <span>👤 Guest Mode</span>
        </div>
      </div>

      {/* Info Strip */}
      <div className="info-strip" role="status">
        <span className="info-icon" aria-hidden="true">ℹ️</span>
        <p>
          You are browsing as a <strong>Guest</strong>. You can view all flights but
          need to <strong>Login</strong> (top-right) to book tickets.
        </p>
      </div>

      {/* Flight Grid */}
      <div className="flights-grid" aria-label="Available flights">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            isLoggedIn={false}
            onBook={null}
          />
        ))}
      </div>
    </section>
  );
}

export default GuestPage;
