import React, { useState } from 'react';

// Helper: render level badge using switch statement
function getLevelBadge(level) {
  switch (level) {
    case 'Beginner':
      return <span className="badge level-beginner">🟢 Beginner</span>;
    case 'Intermediate':
      return <span className="badge level-intermediate">🟡 Intermediate</span>;
    case 'Advanced':
      return <span className="badge level-advanced">🔴 Advanced</span>;
    default:
      return <span className="badge">⚪ Unknown Level</span>;
  }
}

function CourseDetails(props) {
  // Track enrolled courses by id
  const [enrolled, setEnrolled] = useState([]);

  if (!props.courses) return null;

  const handleEnroll = (course) => {
    if (!enrolled.includes(course.id)) {
      setEnrolled([...enrolled, course.id]);
      alert(`🎉 Successfully enrolled in "${course.cname}"!`);
    }
  };

  const coursedet = (
    <ul className="item-list">
      {props.courses.map((course) => (
        <div key={course.id} className="card course-card">
          <div className="card-icon">🎓</div>
          <h3>{course.cname}</h3>
          <p className="duration">⏱️ Duration: {course.duration}</p>

          {getLevelBadge(course.level)}

          {(() => {
            if (course.available) {
              return (
                <div className="availability-box available">
                  <span>✅ <strong>Enrollment Open</strong></span>
                  {enrolled.includes(course.id) ? (
                    <span className="enrolled-tag">✔ Enrolled</span>
                  ) : (
                    <button
                      className="enroll-btn"
                      onClick={() => handleEnroll(course)}
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              );
            } else {
              return (
                <div className="availability-box unavailable">
                  🚫 <strong>Currently Unavailable</strong>
                </div>
              );
            }
          })()}

          <span className="badge">ID: {course.id}</span>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="component-wrapper">
      {(() => {
        const available = props.courses.filter(c => c.available).length;
        const total = props.courses.length;
        return (
          <p className="data-count">
            🎓 {total} Course(s) — <strong>{available} available</strong> for enrollment
          </p>
        );
      })()}

      {coursedet}
    </div>
  );
}

export default CourseDetails;
