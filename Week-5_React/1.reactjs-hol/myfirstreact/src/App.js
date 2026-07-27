import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('spa');
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <header className="hero-section">
          <h1 className="main-heading">Welcome the first session of React</h1>
          <p className="subtitle">Hands-On Lab 1: Environment Setup & Core Concepts</p>
          <button className="cta-button" onClick={() => setShowGuide(!showGuide)}>
            {showGuide ? "Hide Concept Guide" : "Explore React Concepts"}
          </button>
        </header>

        {showGuide && (
          <div className="dashboard-card fade-in">
            <nav className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'spa' ? 'active' : ''}`}
                onClick={() => setActiveTab('spa')}
              >
                SPA Benefits
              </button>
              <button 
                className={`tab-btn ${activeTab === 'vs' ? 'active' : ''}`}
                onClick={() => setActiveTab('vs')}
              >
                SPA vs MPA
              </button>
              <button 
                className={`tab-btn ${activeTab === 'react' ? 'active' : ''}`}
                onClick={() => setActiveTab('react')}
              >
                React & VDOM
              </button>
              <button 
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                React Features
              </button>
            </nav>

            <div className="tab-content">
              {activeTab === 'spa' && (
                <div className="content-panel animate-slide">
                  <h2>Single Page Applications (SPA)</h2>
                  <p className="intro-text">
                    An SPA is a web application that loads a single HTML document and dynamically updates that document as the user interacts with the app.
                  </p>
                  <div className="grid">
                    <div className="info-box">
                      <h3>🚀 Benefits</h3>
                      <ul>
                        <li><strong>Fast load times:</strong> Only data is updated on user actions, reducing bandwidth.</li>
                        <li><strong>Fluid experience:</strong> Seamless transitions with no full-page reloads.</li>
                        <li><strong>Offline capabilities:</strong> Better caching of resources.</li>
                      </ul>
                    </div>
                    <div className="info-box">
                      <h3>⚠️ Pros & Cons</h3>
                      <div className="sub-grid">
                        <div>
                          <strong>Pros:</strong>
                          <ul>
                            <li>Native app feel</li>
                            <li>Reusable backend APIs</li>
                            <li>Efficient local state</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Cons:</strong>
                          <ul>
                            <li>Heavier initial download</li>
                            <li>SEO optimization setup needed</li>
                            <li>XSS security risks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vs' && (
                <div className="content-panel animate-slide">
                  <h2>SPA vs MPA Comparison</h2>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Feature</th>
                          <th>Single Page Application (SPA)</th>
                          <th>Multi-Page Application (MPA)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Page Reloads</strong></td>
                          <td>No reload; content updates dynamically.</td>
                          <td>Full reload on every new request.</td>
                        </tr>
                        <tr>
                          <td><strong>Speed</strong></td>
                          <td>Super fast after initial load.</td>
                          <td>Depends on server-side rendering latency.</td>
                        </tr>
                        <tr>
                          <td><strong>Routing</strong></td>
                          <td>Client-side routing (React Router).</td>
                          <td>Server-side routing.</td>
                        </tr>
                        <tr>
                          <td><strong>SEO</strong></td>
                          <td>Requires SSR/SSG config.</td>
                          <td>Excellent SEO out-of-the-box.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'react' && (
                <div className="content-panel animate-slide">
                  <h2>React & Virtual DOM</h2>
                  <div className="grid">
                    <div className="info-box">
                      <h3>⚛️ How React Works</h3>
                      <p>
                        React divides the UI into reusable, stateful components. When component state changes, React builds a Virtual DOM tree, diffs it, and pushes changes to the browser DOM.
                      </p>
                    </div>
                    <div className="info-box">
                      <h3>🌳 Virtual DOM (VDOM)</h3>
                      <p>
                        A lightweight, virtual representation of the real DOM. Instead of re-painting the entire page, React uses a diffing algorithm to update only the modified nodes.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="content-panel animate-slide">
                  <h2>Core Features of React</h2>
                  <div className="features-grid">
                    <div className="feature-card">
                      <h4>JSX Syntax</h4>
                      <p>Combines Javascript logic and HTML structure in a single file.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Component-Based</h4>
                      <p>Modular, independent UI blocks that can be nested and reused.</p>
                    </div>
                    <div className="feature-card">
                      <h4>One-Way Data Flow</h4>
                      <p>Unidirectional data binding via props keeps debugging straightforward.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Hooks API</h4>
                      <p>State and side-effects handling inside functional components.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
