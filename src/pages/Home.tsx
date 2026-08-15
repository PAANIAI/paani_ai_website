import React from 'react';
import { Link } from 'react-router-dom';
import { cohorts } from '../data/site';

const DropletIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path d="M4 20h16M7 20v-6M12 20V8M17 20v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path d="M12 3 3 7l9 4 9-4-9-4ZM7 10v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const focus = [
  {
    icon: <DropletIcon />,
    title: 'Data-driven water management',
    text: 'We give water utilities and the government data-driven solutions for sustainable, resilient water management in Nepal.',
    to: '/about',
    link: 'Our approach',
  },
  {
    icon: <ChartIcon />,
    title: 'Our roadmap',
    text: 'From the Catalyst Stage — research, team building, and mentorship — to advanced services like predictive modeling and digital twin models.',
    to: '/about',
    link: 'See the roadmap',
  },
  {
    icon: <PeopleIcon />,
    title: 'Research & mentorship',
    text: 'Through प्रवाह, we mentor students pursuing research and careers across Nepal’s water sector.',
    to: '/cohorts',
    link: 'Our cohorts',
  },
];

const Home: React.FC = () => {
  const cohort = cohorts[0];

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Paani AI</h1>
          <p className="hero-sub">
            Empowering Nepal’s Water Sector with Data-Driven Innovation
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">About Paani</Link>
            <Link to="/apply" className="btn btn-green">Apply</Link>
          </div>
        </div>
      </section>

      {/* Mission band */}
      <section className="mission">
        <div className="page page-narrow">
          <p>
            At <strong>Paani AI</strong>, we aim to ensure water is{' '}
            <strong>accessible, safe, and sustainably managed</strong>. We provide
            water utilities and the government with <strong>data-driven solutions</strong>{' '}
            for sustainable and resilient water management in Nepal.
          </p>
        </div>
      </section>

      <div className="page">
        {/* About Paani AI */}
        <section className="section">
          <div className="about-home">
            <div>
              <h2 className="section-title">About Paani AI</h2>
              <p className="about-home-lead">
                Paani AI is an innovator in Nepal’s water management sector. We
                leverage data-driven solutions and advanced analytics to ensure
                sustainable water resource management across the country.
              </p>
              <p style={{ color: 'var(--ink-soft)' }}>
                Our vision is to transform the way Nepal approaches water resource
                planning through data-informed decision making — ensuring a
                sustainable future for all.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '0.4rem' }}>
                More about us
              </Link>
            </div>
            <ul className="mission-list">
              <li>Revolutionize water management with data and technology</li>
              <li>Address climate change challenges through the context of water</li>
              <li>Work alongside government bodies, utilities, and communities</li>
            </ul>
          </div>
        </section>

        {/* What we do — focus cards */}
        <section className="section">
          <div className="focus-grid">
            {focus.map((f) => (
              <Link to={f.to} className="focus-card" key={f.title}>
                <span className="focus-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="text-link arrow-link">{f.link}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Current initiative */}
        <section className="section">
          <div className="section-head">
            <h2 className="section-title">Our Current Initiative</h2>
          </div>
          <Link
            to={cohort.detailLink}
            className="media-card"
            style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 320px) 1fr' }}
          >
            <img src={cohort.image} alt={cohort.name} className="thumb" />
            <div className="body">
              <span className="phase-tag">{cohort.label}</span>
              <h3 style={{ marginTop: '0.35rem' }}>{cohort.name}</h3>
              <p>{cohort.tagline}</p>
              <span className="card-link arrow-link">Learn about {cohort.name}</span>
            </div>
          </Link>
        </section>

        {/* Upcoming events */}
        <section className="section">
          <div className="section-head">
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          <div className="upcoming-card">
            <span className="upcoming-badge">Upcoming</span>
            <h3>Second Cohort — Research Mentorship</h3>
            <p>
              Initiation of our second cohort: a research mentorship for water
              resources research enthusiasts.
            </p>
            <Link to="/apply/cohort" className="btn btn-green">
              Apply for the research mentorship
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
