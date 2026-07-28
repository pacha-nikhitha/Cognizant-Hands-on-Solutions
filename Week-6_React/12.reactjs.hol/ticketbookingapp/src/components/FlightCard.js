import React from 'react';

// FlightCard component - renders individual flight detail info
// Demonstrates: element variables and conditional rendering via props
function FlightCard({ flight, isLoggedIn, onBook }) {
  // Element variable: store the action button based on login state
  let actionButton;
  if (isLoggedIn) {
    actionButton = (
      <button
        className="book-btn"
        id={`btn-book-${flight.id}`}
        onClick={() => onBook(flight)}
        aria-label={`Book flight ${flight.flightNo} from ${flight.from} to ${flight.to}`}
      >
        ✈ Book Now
      </button>
    );
  } else {
    actionButton = (
      <button
        className="view-btn"
        id={`btn-locked-${flight.id}`}
        disabled
        aria-label="Login required to book"
        title="Please login to book this flight"
      >
        🔒 Login to Book
      </button>
    );
  }

  return (
    <article className="flight-card" aria-label={`${flight.airline} flight ${flight.flightNo}`}>
      {/* ── Card Header: Airline + Seat Status ── */}
      <div className="flight-header">
        <div className="airline-info">
          <span className="airline-logo" aria-hidden="true">{flight.logo}</span>
          <div>
            <h3 className="airline-name">{flight.airline}</h3>
            <span className="flight-number">{flight.flightNo}</span>
          </div>
        </div>
        <span
          className={`seat-badge ${flight.seats < 10 ? 'low' : 'available'}`}
          aria-label={`${flight.seats} seats available`}
        >
          {flight.seats < 10
            ? `⚠ Only ${flight.seats} left`
            : `✅ ${flight.seats} seats`}
        </span>
      </div>

      {/* ── Route Info ── */}
      <div className="flight-route" aria-label="Flight route">
        {/* From City */}
        <div className="city">
          <span className="city-code">{flight.fromCode}</span>
          <span className="city-name">{flight.from}</span>
          <span className="time">{flight.departure}</span>
        </div>

        {/* Route Line + Duration */}
        <div className="route-line" aria-hidden="true">
          <span className="duration">{flight.duration}</span>
          <div className="line">
            <span className="plane-icon">✈</span>
          </div>
          <span className="stops">
            {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}
          </span>
        </div>

        {/* To City */}
        <div className="city">
          <span className="city-code">{flight.toCode}</span>
          <span className="city-name">{flight.to}</span>
          <span className="time">{flight.arrival}</span>
        </div>
      </div>

      {/* ── Footer: Price + Action ── */}
      <div className="flight-footer">
        <div className="price-section">
          <span className="price-label">Per person</span>
          <span className="price" aria-label={`Price: ${flight.price} rupees`}>
            ₹{flight.price.toLocaleString('en-IN')}
          </span>
        </div>
        {/* Render the element variable */}
        {actionButton}
      </div>
    </article>
  );
}

export default FlightCard;
