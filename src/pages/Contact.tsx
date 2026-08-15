import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config';

const Contact: React.FC = () => {
  return (
    <div className="page">
      <span className="eyebrow">Contact</span>
      <h1 className="page-h1">Get in touch</h1>
      <p className="lead">
        Have questions or want to learn more about Paani AI? Email us and we’ll
        get back to you soon.
      </p>

      <section className="section">
        <div className="contact-card">
          <p style={{ margin: 0, color: 'var(--muted)' }}>Email</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="email-big">
            {CONTACT_EMAIL}
          </a>
          <p style={{ marginTop: '1.4rem', marginBottom: 0, color: 'var(--ink-soft)' }}>
            Interested in mentoring or joining a cohort?{' '}
            <Link to="/apply" className="text-link">
              Apply here
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
