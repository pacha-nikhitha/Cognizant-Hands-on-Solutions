import React, { useState } from 'react';
import FlightCard from './FlightCard';

// BookingConfirmation modal
// Demonstrates: preventing rendering (returns null when no booking)
function BookingConfirmation({ booking, onClose }) {
  // Prevent rendering when there is no active booking
  if (!booking) return null;

  // Format date for booking reference
  const today = new Date();
  const bookingRef = `SKY-${booking.id}${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}`;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <span className="success-icon" aria-hidden="true">🎉</span>
          <h2 id="modal-title">Booking Confirmed!</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Reference: <strong style={{ color: 'var(--accent)' }}>{bookingRef}</strong>
          </p>
        </div>

        {/* Details */}
        <div className="modal-body">
          <div className="booking-detail">
            <span className="detail-label">Flight</span>
            <span className="detail-value">
              {booking.logo} {booking.airline} · {booking.flightNo}
            </span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Route</span>
            <span className="detail-value">
              {booking.from} ({booking.fromCode}) → {booking.to} ({booking.toCode})
            </span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Time</span>
            <span className="detail-value">
              {booking.departure} → {booking.arrival} &nbsp;·&nbsp; {booking.duration}
            </span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Stops</span>
            <span className="detail-value">
              {booking.stops === 0 ? '✅ Non-stop' : `${booking.stops} stop`}
            </span>
          </div>
          <div className="booking-detail">
            <span className="detail-label">Price</span>
            <span className="detail-value price-highlight">
              ₹{booking.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Close */}
        <button className="close-btn" id="btn-close-modal" onClick={onClose} aria-label="Close booking confirmation">
          ✓ Done – Close
        </button>
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
    <section className="page user-page" aria-label="Logged-in user view">
      {/* Banner */}
      <div className="page-banner user-banner">
        <div className="banner-content">
          <div className="banner-icon" aria-hidden="true">✈️</div>
          <div>
            <h2>
              Welcome back, <span className="username">{username}</span>!
            </h2>
            <p>
              You have <strong>full access</strong>. Click{' '}
              <strong>"Book Now"</strong> on any card to reserve your seat.
            </p>
          </div>
        </div>
        <div className="banner-badge user-badge">
          <span>✅ Logged In</span>
        </div>
      </div>

      {/* Info Strip */}
      <div className="info-strip user-strip" role="status">
        <span className="info-icon" aria-hidden="true">💡</span>
        <p>
          Seats marked <strong>⚠ Only X left</strong> are filling up fast — book
          before they run out!
        </p>
      </div>

      {/* Flight Grid */}
      <div className="flights-grid" aria-label="Bookable flights">
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
    </section>
  );
}

export default UserPage;
