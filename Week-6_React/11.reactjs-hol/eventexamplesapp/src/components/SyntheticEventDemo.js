import React, { useState } from 'react';

const SyntheticEventDemo = () => {
  const [clickDetails, setClickDetails] = useState(null);

  // Event handler demonstrating React's SyntheticEvent parameter
  const handleOnPress = (syntheticEvent) => {
    // Extract properties from React SyntheticEvent
    setClickDetails({
      message: 'I was clicked',
      eventType: syntheticEvent.type,
      targetTag: syntheticEvent.target.tagName,
      targetId: syntheticEvent.target.id,
      timeStamp: Math.round(syntheticEvent.timeStamp),
      isSynthetic: syntheticEvent.nativeEvent ? 'Yes (SyntheticEvent wrapping native Event)' : 'No'
    });
  };

  return (
    <div className="card event-card">
      <div className="card-header">
        <span className="badge">SyntheticEvent System</span>
        <h2>3. Synthetic Event (OnPress)</h2>
      </div>
      <p className="card-description">
        Demonstrates React's cross-browser <code>SyntheticEvent</code> wrapper object passed to event handlers.
      </p>

      {clickDetails && (
        <div className="alert-box accent-alert">
          <p className="highlight-text"><strong>Output:</strong> "{clickDetails.message}"</p>
          <div className="event-metadata">
            <p><strong>Event Type:</strong> <code>{clickDetails.eventType}</code></p>
            <p><strong>Target Tag:</strong> <code>{clickDetails.targetTag}</code></p>
            <p><strong>Target ID:</strong> <code>{clickDetails.targetId}</code></p>
            <p><strong>Timestamp:</strong> <code>{clickDetails.timeStamp} ms</code></p>
            <p><strong>Wrapper:</strong> <code>{clickDetails.isSynthetic}</code></p>
          </div>
        </div>
      )}

      <div className="button-group">
        <button 
          className="btn btn-accent" 
          onClick={handleOnPress}
          id="onpress-synthetic-btn"
        >
          ⚡ OnPress (Invokes Synthetic Event)
        </button>
      </div>
    </div>
  );
};

export default SyntheticEventDemo;
