import React, { useState } from 'react';
import FlightCard from './FlightCard';

// BookingConfirmation - Demonstrates: preventing rendering (returns null when no booking)
function BookingConfirmation({ booking, onClose }) {
  // Prevent rendering when there is no active booking
  if (!booking) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="success-icon">🎉</span>
          <h2>Booking Confirmed!</h2>
        </div>
        <div className="modal-body">
          <div className="booking-detail">
            <span className="detail-label">Flight</span>
            <span className="detail-value">{booking.airline} - {booking.flightNo}</span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Route</span>
            <span className="detail-value">{booking.from} ({booking.fromCode}) → {booking.to} ({booking.toCode})</span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Departure</span>
            <span className="detail-value">{booking.departure} → {booking.arrival}</span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Price</span>
            <span className="detail-value price-highlight">₹{booking.price.toLocaleString()}</span>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>✓ Done</button>
      </div>
    </div>
  );
}

// UserPage - shown when user IS logged in
// Demonstrates: conditional rendering - shown only when isLoggedIn is true
function UserPage({ flights, username, show }) {
  const [bookedFlight, setBookedFlight] = useState(null);

  // Preventing component rendering by returning null
  if (!show) return null;

  const handleBook = (flight) => {
    setBookedFlight(flight);
  };

  const handleCloseModal = () => {
    setBookedFlight(null);
  };

  return (
    <div className="page user-page">
      <div className="page-banner user-banner">
        <div className="banner-content">
          <div className="banner-icon">✈️</div>
          <h2>Welcome back, <span className="username">{username}</span>!</h2>
          <p>You are logged in. Browse and <strong>book your flights</strong> below.</p>
        </div>
        <div className="banner-badge user-badge">
          <span>✅ Logged In</span>
        </div>
      </div>

      <div className="info-strip user-strip">
        <span className="info-icon">💡</span>
        <p>You have <strong>full access</strong>! Click <strong>"Book Now"</strong> on any flight to reserve your seat.</p>
      </div>

      <div className="flights-grid">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            isLoggedIn={true}
            onBook={handleBook}
          />
        ))}
      </div>

      {/* BookingConfirmation uses null return to prevent rendering when no booking */}
      <BookingConfirmation booking={bookedFlight} onClose={handleCloseModal} />
    </div>
  );
}

export default UserPage;
