import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="portal-header">
        <div className="header-container">
          <h1 className="portal-title">🎓 Student Management Portal</h1>
          <p className="portal-subtitle">Academic Session 2026 - Central Dashboard</p>
        </div>
      </header>
      
      <main className="portal-main">
        <div className="dashboard-grid">
          <Home />
          <About />
          <Contact />
        </div>
      </main>

      <footer className="portal-footer">
        <p>&copy; 2026 Student Management Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
