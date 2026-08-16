import React from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_FORM_COHORT_URL } from '../../config';
import GoogleFormEmbed from '../../components/GoogleFormEmbed';

const ApplyCohort: React.FC = () => {
  return (
    <div className="page page-narrow">
      <p className="breadcrumb">
        <Link to="/apply">Apply</Link> / Research Mentorship
      </p>
      <span className="eyebrow">For students</span>
      <h1 className="page-h1">Apply for the Research Mentorship</h1>
      <p className="lead">
        Pursue research in water resources, water quality, or related areas with
        mentorship from the Paani AI team.
      </p>

      {/* Selective / group preference */}
      <div
        className="form-note"
        style={{
          background: 'var(--bg-tint-green)',
          border: '1px solid var(--brand-green)',
          color: 'var(--brand-green-deep)',
        }}
      >
        <strong>This research mentorship is highly selective.</strong> We prefer
        group applications (2 or more members) for each research idea or direction.
      </div>

      {/* Eligibility, stated up front */}
      <div className="eligibility">
        <h3>Eligibility</h3>
        <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
          This mentorship is open only to applicants who:
        </p>
        <ul>
          <li>Are in their <strong>3rd year, 4th year, or above</strong> in a bachelor’s degree;</li>
          <li>Want to pursue research in <strong>water resources, water quality, or related areas</strong>;</li>
          <li>Will receive mentorship from the Paani AI team to complete that research.</li>
        </ul>
      </div>

      {/* Selection process */}
      <div className="section" style={{ marginTop: '1.75rem' }}>
        <div className="section-head">
          <h2 className="section-title">Selection process</h2>
        </div>
        <ol className="process-list">
          <li>Applications are open until <strong>mid-September</strong>.</li>
          <li>Teams are shortlisted and invited in for a brief talk.</li>
          <li>
            A few teams are finally selected, based on their interest and
            dedication to research in water resources.
          </li>
        </ol>
      </div>

      <GoogleFormEmbed url={GOOGLE_FORM_COHORT_URL} title="Paani AI research mentorship application" />
    </div>
  );
};

export default ApplyCohort;
