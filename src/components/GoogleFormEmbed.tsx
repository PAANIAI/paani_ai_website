import React from 'react';
import { isFormConfigured, CONTACT_EMAIL } from '../config';

interface Props {
  url: string;
  title: string;
}

/** Normalizes a Google Form link into an embeddable src (adds embedded=true). */
function toEmbedSrc(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('embedded', 'true');
    return u.toString();
  } catch {
    return url;
  }
}

const GoogleFormEmbed: React.FC<Props> = ({ url, title }) => {
  if (!isFormConfigured(url)) {
    return (
      <div className="form-note warn" style={{ marginTop: '1.5rem' }}>
        This form isn’t connected yet. Once the Google Form link is added it will
        appear here. In the meantime, you can email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </div>
    );
  }

  return (
    <div className="form-embed-wrap">
      <iframe
        className="form-embed"
        src={toEmbedSrc(url)}
        title={title}
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed;
