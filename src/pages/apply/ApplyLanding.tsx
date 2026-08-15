import React from 'react';
import { Link } from 'react-router-dom';

const ApplyLanding: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">Apply</span>
      <h1 className="page-h1">Join Paani AI</h1>
      <p className="lead">
        Two ways to get involved with our mentorship program — as a mentor sharing
        your expertise, or as a student researcher joining a cohort.
      </p>

      <div className="apply-choice">
        <Link to="/apply/mentor" className="apply-path">
          <span className="path-tag">For professionals & researchers</span>
          <h3>Apply to be a Mentor</h3>
          <p>
            Share your expertise in water, AI, or both. Guide emerging researchers
            and help shape the next generation of Nepal’s water sector.
          </p>
          <span className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Mentor application
          </span>
        </Link>

        <Link to="/apply/cohort" className="apply-path">
          <span className="path-tag">For students</span>
          <h3>Apply for the Research Mentorship</h3>
          <p>
            Pursue research in water resources, water quality, or related areas
            with mentorship from the Paani AI team. Open to bachelor’s students in
            their 3rd year, 4th year, or above. This mentorship is{' '}
            <strong>highly selective</strong>, and we prefer group applications
            (2 or more members) for each research idea.
          </p>
          <span className="btn btn-green" style={{ alignSelf: 'flex-start' }}>
            Research application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ApplyLanding;
