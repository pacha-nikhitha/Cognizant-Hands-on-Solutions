import React, { useState } from 'react';

import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEventDemo from './components/SyntheticEventDemo';
import CurrencyConvertor from './components/CurrencyConvertor';
import EventExplainer from './components/EventExplainer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="app-container">
      {/* Header Banner */}
      <header className="app-header">
        <div className="header-badge">React JS Hands-On Lab 11</div>
        <h1>Event Handling in React</h1>
        <p className="app-subtitle">
          Interactive demonstration of React Events, Event Handlers, SyntheticEvents, method chaining, arguments, and Currency Conversion.
        </p>
      </header>

      {/* Navigation Filter Tabs */}
      <nav className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          🌐 View All Components
        </button>
        <button 
          className={`tab-btn ${activeTab === 'counter' ? 'active' : ''}`}
          onClick={() => setActiveTab('counter')}
        >
          🔢 1. Counter (Multiple Methods)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'welcome' ? 'active' : ''}`}
          onClick={() => setActiveTab('welcome')}
        >
          👋 2. Say Welcome (Arguments)
        </button>
        <button 
          className={`tab-btn ${activeTab === 'synthetic' ? 'active' : ''}`}
          onClick={() => setActiveTab('synthetic')}
        >
          ⚡ 3. Synthetic Event
        </button>
        <button 
          className={`tab-btn ${activeTab === 'converter' ? 'active' : ''}`}
          onClick={() => setActiveTab('converter')}
        >
          🔀 4. Currency Convertor
        </button>
        <button 
          className={`tab-btn ${activeTab === 'concepts' ? 'active' : ''}`}
          onClick={() => setActiveTab('concepts')}
        >
          📘 Core Concepts
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {(activeTab === 'all' || activeTab === 'counter') && <Counter />}
        {(activeTab === 'all' || activeTab === 'welcome') && <WelcomeButton />}
        {(activeTab === 'all' || activeTab === 'synthetic') && <SyntheticEventDemo />}
        {(activeTab === 'all' || activeTab === 'converter') && <CurrencyConvertor />}
        {(activeTab === 'all' || activeTab === 'concepts') && <EventExplainer />}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p><strong>eventexamplesapp</strong> • Built for Cognizant React JS Hands-On Lab 11</p>
      </footer>
    </div>
  );
}

export default App;
