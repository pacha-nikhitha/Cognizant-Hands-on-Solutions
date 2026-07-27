import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // State for flag variable (defaults to true)
  const [flag, setFlag] = useState(true);

  // Simple if-else conditional rendering based on flag variable
  let currentComponent;
  if (flag) {
    currentComponent = <ListofPlayers />;
  } else {
    currentComponent = <IndianPlayers />;
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Cricket App</h1>
        <p className="subtitle">Current Flag Status: <strong>{flag ? 'true' : 'false'}</strong></p>
        <button className="toggle-btn" onClick={() => setFlag(!flag)}>
          Switch Flag to {flag ? 'false (IndianPlayers)' : 'true (ListofPlayers)'}
        </button>
      </header>
      <main className="container">
        {currentComponent}
      </main>
    </div>
  );
}

export default App;
