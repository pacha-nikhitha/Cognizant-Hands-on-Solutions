import React, { useState } from 'react';

const WelcomeButton = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  // Event handler function that accepts an argument
  const handleWelcome = (greetingArg) => {
    setWelcomeMessage(`Received Argument: "${greetingArg}" - Welcome to React Event Handlers!`);
  };

  return (
    <div className="card event-card">
      <div className="card-header">
        <span className="badge">Arguments in Event Handlers</span>
        <h2>2. Say Welcome Component</h2>
      </div>
      <p className="card-description">
        Demonstrates passing arguments to an event handler using arrow functions inside <code>onClick</code> props.
      </p>

      {welcomeMessage && (
        <div className="alert-box info-alert">
          <p><strong>Handler Output:</strong> {welcomeMessage}</p>
        </div>
      )}

      <div className="button-group">
        <button 
          className="btn btn-secondary" 
          onClick={() => handleWelcome('welcome')}
          id="say-welcome-btn"
        >
          👋 Say Welcome
        </button>
      </div>
    </div>
  );
};

export default WelcomeButton;
