import React from 'react';

// Navbar - demonstrates element variables for Login/Logout buttons
function Navbar({ isLoggedIn, username, onLogin, onLogout }) {
  // Element variables: store JSX elements in variables before rendering
  const loginButton = (
    <button className="nav-btn login-btn" id="btn-login" onClick={onLogin}>
      🔑 Login
    </button>
  );

  const logoutButton = (
    <button className="nav-btn logout-btn" id="btn-logout" onClick={onLogout}>
      🚪 Logout
    </button>
  );

  // Use element variable based on login state (conditional rendering)
  const authButton = isLoggedIn ? logoutButton : loginButton;

  // Element variable for user greeting - conditionally rendered
  const userGreeting = isLoggedIn ? (
    <span className="user-greeting">Hello, <strong>{username}</strong> 👋</span>
  ) : (
    <span className="user-greeting guest-text">Browsing as Guest</span>
  );

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-logo">✈</span>
        <span className="brand-name">SkyBook</span>
        <span className="brand-tagline">Flight Booking</span>
      </div>

      <div className="nav-links">
        <a href="#flights" className="nav-link">Flights</a>
        <a href="#offers" className="nav-link">Offers</a>
        <a href="#about" className="nav-link">About</a>
      </div>

      <div className="nav-auth">
        {/* Render element variable for greeting */}
        {userGreeting}
        {/* Render element variable for auth button */}
        {authButton}
      </div>
    </nav>
  );
}

export default Navbar;
