import React from 'react';
import { Link } from 'react-router-dom';
import { challenges, roadmapPhase1, services } from '../data/site';

const About: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">About Paani AI</span>
      <h1 className="page-h1">Data-driven water management for Nepal</h1>
      <p className="lead">
        Paani AI is an innovator in Nepal’s water management sector. We leverage
        data-driven solutions and advanced analytics to ensure sustainable water
        resource management across the country — revolutionizing water management
        with technology and addressing climate change through the context of water.
      </p>

      {/* Problem areas */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Problem Areas</h2>
          <p className="section-sub">
            Nepal's water sector faces critical challenges that require innovative
            solutions and data-driven approaches to ensure sustainable water
            management for future generations.
          </p>
        </div>
        <div className="card-grid grid-2">
          {challenges.map((c) => (
            <div className="media-card" key={c.title}>
              <img src={c.image} alt={c.title} className="thumb" />
              <div className="body">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <Link to={c.link} className="card-link arrow-link">
                  {c.learnMore}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Our Roadmap</h2>
        </div>

        <div className="phase-block">
          <span className="phase-tag">Phase 1</span>
          <h3>The Catalyst Stage</h3>
          <div className="roadmap-cards">
            {roadmapPhase1.map((card, i) => (
              <div className="roadmap-card" key={card.title}>
                <span className="idx">0{i + 1}</span>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="phase-block">
          <span className="phase-tag">Phase 2</span>
          <h3>Shaping the Future</h3>
          <p className="section-sub" style={{ marginTop: 0, marginBottom: '1.3rem' }}>
            Building on Phase 1, we now provide advanced, data-driven services:
          </p>
          <div className="card-grid grid-3">
            {services.map((s) => (
              <Link to={s.link} className="media-card" key={s.title}>
                <img src={s.image} alt={s.title} className="thumb" />
                <div className="body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <span className="card-link arrow-link">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
