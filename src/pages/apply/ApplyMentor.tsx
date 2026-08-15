import React from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_FORM_MENTOR_URL } from '../../config';
import GoogleFormEmbed from '../../components/GoogleFormEmbed';

const ApplyMentor: React.FC = () => {
  return (
    <div className="page page-narrow">
      <p className="breadcrumb">
        <Link to="/apply">Apply</Link> / Mentor
      </p>
      <span className="eyebrow">For professionals & researchers</span>
      <h1 className="page-h1">Apply to be a Mentor</h1>
      <p className="lead">
        Share your expertise in water, AI, or both. Guide emerging researchers and
        help shape the next generation of Nepal’s water sector.
      </p>

      <GoogleFormEmbed url={GOOGLE_FORM_MENTOR_URL} title="Paani AI mentor application" />
    </div>
  );
};

export default ApplyMentor;
