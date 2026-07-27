import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  // Support passing cohort as an object prop or individual props
  const cohort = props.cohort || props;
  const status = cohort.status || '';

  // Requirement: Use "green" color font when cohort status is "ongoing" and "blue" color in all other scenarios
  const h3Style = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohort.cohortCode || 'Cohort Details'}</h3>
      <dl>
        <dt>Technology Stack Group:</dt>
        <dd>{cohort.technologyStackGroup || 'N/A'}</dd>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate || 'N/A'}</dd>
        <dt>Current Status:</dt>
        <dd>{cohort.status || 'N/A'}</dd>
        <dt>Coach Name:</dt>
        <dd>{cohort.coachName || 'N/A'}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
