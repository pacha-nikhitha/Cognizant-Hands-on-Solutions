import React, { useState } from 'react';
import './App.css';
import BookDetails  from './components/BookDetails';
import BlogDetails  from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data/data';

// ============================================================
// App Component — Main entry point
// Combines Book Details, Blog Details, Course Details
// with classNames: st2, v1, mystyle1 (as per lab hints)
//
// Additional Conditional Rendering at App level:
//   - Active tab selected using state (demonstrates toggling)
// ============================================================

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="app">

      {/* ── Header ───────────────────────────────────────── */}
      <header className="app-header">
        <h1>📰 Blogger App</h1>


        {/* Tab navigation — toggling sections */}
        <div className="tab-bar">
          {['all', 'books', 'blogs', 'courses'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'all'     && '🏠 All'}
              {tab === 'books'   && '📚 Books'}
              {tab === 'blogs'   && '📝 Blogs'}
              {tab === 'courses' && '🎓 Courses'}
            </button>
          ))}
        </div>
      </header>

      {/* ── Main Content ─────────────────────────────────── */}
      <div className="main-grid">

        {/* ── Section 1: Book Details ─────────────────────
            className="st2" (as per hint)
            Conditional Rendering: shown when tab is 'all' or 'books'
        */}
        {(activeTab === 'all' || activeTab === 'books') && (
          <div className="st2 section-card">
            <h1 className="section-title">📚 Book Details</h1>

            {/* Render BookDetails — pass books as prop */}
            <BookDetails books={books} />
          </div>
        )}

        {/* ── Section 2: Blog Details ──────────────────────
            className="v1" (as per hint)
            Conditional Rendering: shown when tab is 'all' or 'blogs'
        */}
        {(activeTab === 'all' || activeTab === 'blogs') && (
          <div className="v1 section-card">
            <h1 className="section-title">📝 Blog Details</h1>

            {/* Render BlogDetails — pass blogs as prop */}
            <BlogDetails blogs={blogs} />
          </div>
        )}

        {/* ── Section 3: Course Details ────────────────────
            className="mystyle1" (as per hint)
            Conditional Rendering: shown when tab is 'all' or 'courses'
        */}
        {(activeTab === 'all' || activeTab === 'courses') && (
          <div className="mystyle1 section-card">
            <h1 className="section-title">🎓 Course Details</h1>

            {/* Render CourseDetails — pass courses as prop */}
            <CourseDetails courses={courses} />
          </div>
        )}

      </div>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="app-footer">
        <p>React Hands-On Lab · Conditional Rendering · Week 6</p>
      </footer>
    </div>
  );
}

export default App;
