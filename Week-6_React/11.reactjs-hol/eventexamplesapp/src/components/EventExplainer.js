import React from 'react';

const EventExplainer = () => {
  return (
    <div className="explainer-section">
      <h2 className="section-title">📘 Core React Event Concepts</h2>
      
      <div className="explainer-grid">
        <div className="concept-card">
          <div className="concept-icon">⚡</div>
          <h3>React Events</h3>
          <p>
            React events handle user interactions (clicks, keypresses, submits) on DOM elements using a cross-browser event handling mechanism. They are written inline on JSX elements.
          </p>
        </div>

        <div className="concept-card">
          <div className="concept-icon">🎯</div>
          <h3>Event Handlers</h3>
          <p>
            Functions or class methods defined inside React components that run when an event is triggered. They can accept arguments, invoke multiple methods, and update state.
          </p>
        </div>

        <div className="concept-card">
          <div className="concept-icon">🛡️</div>
          <h3>SyntheticEvent</h3>
          <p>
            React's cross-browser wrapper around the native browser DOM event object. It standardizes event properties (`preventDefault`, `stopPropagation`, `target`) across all browsers.
          </p>
        </div>

        <div className="concept-card">
          <div className="concept-icon">🔤</div>
          <h3>Naming Conventions</h3>
          <p>
            React uses <strong>camelCase</strong> for event attributes (e.g., <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>) and passes functions inside curly braces <code>&#123;handleClick&#125;</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventExplainer;
