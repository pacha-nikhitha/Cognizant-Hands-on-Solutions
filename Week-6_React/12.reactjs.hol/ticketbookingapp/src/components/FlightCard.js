import React from 'react';

// FlightCard component - renders flight detail info
// Demonstrates: element variables and conditional rendering via props
function FlightCard({ flight, isLoggedIn, onBook }) {
  // Element variable: store the book button based on login state
  let actionButton;
  if (isLoggedIn) {
    actionButton = (
      <button className="book-btn" onClick={() => onBook(flight)}>
        ✈ Book Now
      </button>
    );
  } else {
    actionButton = (
      <button className="view-btn" disabled>
        🔒 Login to Book
      </button>
    );
  }

  return (
    <div className="flight-card">
      <div className="flight-header">
        <div className="airline-info">
          <span className="airline-logo">{flight.logo}</span>
          <div>
            <h3 className="airline-name">{flight.airline}</h3>
            <span className="flight-number">{flight.flightNo}</span>
          </div>
        </div>
        <span className={`seat-badge ${flight.seats < 10 ? 'low' : 'available'}`}>
          {flight.seats < 10 ? `⚠ Only ${flight.seats} seats left` : `✅ ${flight.seats} seats`}
        </span>
      </div>

      <div className="flight-route">
        <div className="city">
          <span className="city-code">{flight.fromCode}</span>
          <span className="city-name">{flight.from}</span>
          <span className="time">{flight.departure}</span>
        </div>
        <div className="route-line">
          <span className="duration">{flight.duration}</span>
          <div className="line">
            <span className="plane-icon">✈</span>
          </div>
          <span className="stops">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}</span>
        </div>
        <div className="city">
          <span className="city-code">{flight.toCode}</span>
          <span className="city-name">{flight.to}</span>
          <span className="time">{flight.arrival}</span>
        </div>
      </div>

      <div className="flight-footer">
        <div className="price-section">
          <span className="price-label">Price per person</span>
          <span className="price">₹{flight.price.toLocaleString()}</span>
        </div>
        {/* Render the element variable */}
        {actionButton}
      </div>
    </div>
  );
}

export default FlightCard;
