import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      cohortCode: 'INTADM22FS001',
      technologyStackGroup: 'Java Full Stack',
      startDate: '2026-01-10',
      status: 'ongoing',
      coachName: 'John Doe'
    },
    {
      cohortCode: 'INTADM22DOT002',
      technologyStackGroup: '.NET Core Microservices',
      startDate: '2025-11-15',
      status: 'completed',
      coachName: 'Jane Smith'
    },
    {
      cohortCode: 'INTADM22PY003',
      technologyStackGroup: 'Python Data Science',
      startDate: '2026-02-01',
      status: 'ongoing',
      coachName: 'Robert Johnson'
    },
    {
      cohortCode: 'INTADM22REACT004',
      technologyStackGroup: 'React Web Development',
      startDate: '2025-09-01',
      status: 'completed',
      coachName: 'Alice Williams'
    }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>Academy Cohorts Tracker Dashboard</h1>
        <p>Details of Ongoing and Completed Cohorts</p>
      </header>
      <main className="cohorts-container">
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </main>
    </div>
  );
}

export default App;
