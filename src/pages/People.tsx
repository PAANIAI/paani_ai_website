import React from 'react';
import { team, advisors, mentors, type Person } from '../data/site';

const PeopleGrid: React.FC<{ people: Person[] }> = ({ people }) => (
  <div className="people-grid">
    {people.map((p) => (
      <div className="person" key={p.name}>
        <img src={p.photo} alt={p.name} className="person-photo" loading="lazy" />
        <h3>{p.name}</h3>
        <p className="role">{p.title}</p>
      </div>
    ))}
  </div>
);

const People: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">Our People</span>
      <h1 className="page-h1">The people behind Paani AI</h1>
      <p className="lead">
        A team of water experts, engineers, and data scientists — supported by an
        advisory board and mentorship network spanning research, policy, and
        industry.
      </p>

      {/* Team */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Team</h2>
        </div>
        <PeopleGrid people={team} />
      </section>

      {/* Advisors */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Advisors</h2>
          <p className="section-sub">
            Renowned leaders in water resources, policy, and research who provide
            strategic guidance and vision.
          </p>
        </div>
        <PeopleGrid people={advisors} />
      </section>

      {/* Mentors */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Mentors</h2>
          <p className="section-sub">
            Accomplished professionals and academics dedicated to nurturing
            emerging talent in Nepal’s water sector.
          </p>
        </div>
        <PeopleGrid people={mentors} />
      </section>
    </div>
  );
};

export default People;
