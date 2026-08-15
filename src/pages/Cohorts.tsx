import React from 'react';
import { Link } from 'react-router-dom';
import { cohorts } from '../data/site';

const Cohorts: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">Mentorship Cohorts</span>
      <h1 className="page-h1">Cohorts</h1>
      <p className="lead">
        Paani AI runs structured mentorship cohorts that support Nepalese students
        pursuing careers and research in the water sector.
      </p>

      <section className="section">
        <div className="card-grid" style={{ gap: '1.75rem' }}>
          {cohorts.map((cohort) => (
            <article className="cohort-card" key={cohort.key}>
              <img src={cohort.image} alt={cohort.name} className="cohort-img" />
              <div className="cohort-body">
                <span className="cohort-badge">{cohort.label}</span>
                <h3>{cohort.name}</h3>
                <p>{cohort.tagline}</p>
                <p className="focus">{cohort.focus}</p>
                <Link to={cohort.detailLink} className="btn btn-primary">
                  View cohort
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cohorts;
