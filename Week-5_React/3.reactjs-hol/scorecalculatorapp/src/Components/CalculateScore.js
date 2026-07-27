import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, goal } = props;
  
  // Calculate average score percentage
  const score = ((Total / goal) * 100).toFixed(2);
  
  return (
    <div className="student-details-container fade-in">
      <h2 className="student-details-header">Student Details:</h2>
      <div className="student-details-body">
        <p className="student-detail-item student-name">
          <strong>Name:</strong> {Name}
        </p>
        <p className="student-detail-item student-school">
          <strong>School:</strong> {School}
        </p>
        <p className="student-detail-item student-total">
          <strong>Total:</strong> {Total}Marks
        </p>
        <p className="student-detail-item student-score">
          <strong>Score:</strong>{score}%
        </p>
      </div>
    </div>
  );
}

export default CalculateScore;
