import React from 'react';
import { events } from '../data/site';

const Events: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">Events</span>
      <h1 className="page-h1">Events</h1>
      <p className="lead">
        Workshops, talk series, field research, and cohort showcases from the
        Paani AI community.
      </p>

      <section className="section">
        <div className="event-list">
          {events.map((ev) => {
            const isSeries = !!ev.sessions?.length;
            return (
              <article
                className={`event-card ${isSeries || !ev.image ? 'event-card--full' : ''}`}
                key={ev.key}
              >
                {ev.image && !isSeries && (
                  <img src={ev.image} alt={ev.title} className="event-img" loading="lazy" />
                )}
                <div className="event-body">
                  <span className="cohort-badge">{ev.kind}</span>
                  <h3>{ev.title}</h3>
                  {ev.meta && <p className="event-meta">{ev.meta}</p>}
                  <p className="event-desc">{ev.description}</p>

                  {ev.bullets && (
                    <ul className="event-bullets">
                      {ev.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {ev.collaborators && (
                    <p className="event-collab">{ev.collaborators}</p>
                  )}

                  {ev.sessions && (
                    <div className="session-grid">
                      {ev.sessions.map((s) => (
                        <div className="session-card" key={s.name}>
                          <img src={s.photo} alt={s.name} className="session-photo" loading="lazy" />
                          <div className="session-info">
                            <span className="session-cat">{s.category}</span>
                            <h4>{s.name}</h4>
                            <p className="session-role">{s.role}</p>
                            <p className="session-theme">“{s.theme}”</p>
                            <p className="session-meta">{s.meta}</p>
                            <p className="session-blurb">{s.blurb}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {ev.gallery && (
                    <div className="event-gallery">
                      {ev.gallery.map((src) => (
                        <img key={src} src={src} alt={`${ev.title} poster`} loading="lazy" />
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Events;
