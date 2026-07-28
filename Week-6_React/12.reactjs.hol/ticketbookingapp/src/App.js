import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

// ============================================================
// FLIGHT DATA
// ============================================================
const flightData = [
  {
    id: 1,
    airline: 'IndiGo',
    flightNo: '6E-204',
    logo: '🔵',
    from: 'Mumbai',
    fromCode: 'BOM',
    to: 'Delhi',
    toCode: 'DEL',
    departure: '06:00 AM',
    arrival: '08:10 AM',
    duration: '2h 10m',
    stops: 0,
    price: 4599,
    seats: 8,
  },
  {
    id: 2,
    airline: 'Air India',
    flightNo: 'AI-101',
    logo: '🔴',
    from: 'Chennai',
    fromCode: 'MAA',
    to: 'Bangalore',
    toCode: 'BLR',
    departure: '09:30 AM',
    arrival: '10:40 AM',
    duration: '1h 10m',
    stops: 0,
    price: 3299,
    seats: 24,
  },
  {
    id: 3,
    airline: 'Vistara',
    flightNo: 'UK-855',
    logo: '🟣',
    from: 'Delhi',
    fromCode: 'DEL',
    to: 'Goa',
    toCode: 'GOI',
    departure: '11:15 AM',
    arrival: '01:30 PM',
    duration: '2h 15m',
    stops: 0,
    price: 5899,
    seats: 5,
  },
  {
    id: 4,
    airline: 'SpiceJet',
    flightNo: 'SG-412',
    logo: '🟠',
    from: 'Kolkata',
    fromCode: 'CCU',
    to: 'Hyderabad',
    toCode: 'HYD',
    departure: '02:45 PM',
    arrival: '05:15 PM',
    duration: '2h 30m',
    stops: 1,
    price: 3799,
    seats: 18,
  },
  {
    id: 5,
    airline: 'Akasa Air',
    flightNo: 'QP-1131',
    logo: '🟡',
    from: 'Pune',
    fromCode: 'PNQ',
    to: 'Ahmedabad',
    toCode: 'AMD',
    departure: '07:20 PM',
    arrival: '08:50 PM',
    duration: '1h 30m',
    stops: 0,
    price: 2999,
    seats: 31,
  },
  {
    id: 6,
    airline: 'Go First',
    flightNo: 'G8-323',
    logo: '🟢',
    from: 'Kochi',
    fromCode: 'COK',
    to: 'Delhi',
    toCode: 'DEL',
    departure: '10:00 PM',
    arrival: '01:00 AM',
    duration: '3h 00m',
    stops: 1,
    price: 6499,
    seats: 3,
  },
];

// ============================================================
// APP COMPONENT – Main conditional rendering logic
// ============================================================
function App() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = 'Nikhil';

  // Event handlers
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // -------------------------------------------------------
  // CONDITIONAL RENDERING using element variables
  // -------------------------------------------------------
  // Store the page content in an element variable
  let pageContent;
  if (isLoggedIn) {
    pageContent = (
      <UserPage
        flights={flightData}
        username={username}
        show={true}
      />
    );
  } else {
    pageContent = (
      <GuestPage
        flights={flightData}
        show={true}
      />
    );
  }

  return (
    <div className="app" id="top">
      {/* Navbar – uses element variables for login/logout button */}
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main className="main-content">
        {/* ── Hero Section ── */}
        <section className="hero" id="flights" aria-label="Hero section">
          <div className="hero-text">
            <h1>
              Find &amp; Book Your{' '}
              <span className="highlight">Perfect Flight</span>
            </h1>

            {/* Inline conditional rendering using ternary */}
            <p className={`hero-subtitle ${isLoggedIn ? 'logged-in' : ''}`}>
              {isLoggedIn
                ? '✅ You are logged in. Select a flight below and book your seat instantly!'
                : '👋 Browse available flights below. Login (top-right) to unlock booking features!'}
            </p>
          </div>

          {/* Stats – conditional badge using && operator */}
          <div className="hero-stats" aria-label="Platform statistics">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Airlines</span>
            </div>
            <div className="stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            {/* Conditional rendering with && operator */}
            {isLoggedIn && (
              <div className="stat">
                <span className="stat-num">🔓</span>
                <span className="stat-label">Full Access</span>
              </div>
            )}
          </div>
        </section>

        {/* ── Flights Section – renders element variable ── */}
        <section className="flights-section" aria-label="Available flights">
          <div className="section-header">
            <h2>
              {/* Conditional rendering with && operator */}
              {isLoggedIn && <span className="logged-badge" aria-hidden="true">🔓 </span>}
              Available Flights
            </h2>
            <p className="section-sub">
              Showing {flightData.length} flights &nbsp;•&nbsp;
              {isLoggedIn ? 'Click "Book Now" to reserve your seat' : 'Login to book tickets'}
            </p>
          </div>

          {/* Element variable rendered here */}
          {pageContent}
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer" id="about" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo" aria-hidden="true">✈</span>
            <span className="footer-name">SkyBook</span>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#flights" className="footer-link">Flights</a>
            <a href="#offers"  className="footer-link">Offers</a>
            <a href="#about"   className="footer-link">About</a>
            <a href="#about"   className="footer-link">Privacy</a>
            <a href="#about"   className="footer-link">Terms</a>
          </nav>

          <p>
            © 2025{' '}
            <span className="footer-accent">SkyBook</span>{' '}
            Flight Booking App &nbsp;|&nbsp; Built with{' '}
            <span className="footer-accent">React</span>{' '}
            Conditional Rendering
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
