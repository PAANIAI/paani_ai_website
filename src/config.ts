/* ==========================================================================
   Site configuration
   --------------------------------------------------------------------------
   The Apply flow embeds Google Forms (they handle file uploads natively).
   Paste each form's link below. Use the long "viewform" link from the form's
   Send ▸ < > (embed) dialog, e.g.
     https://docs.google.com/forms/d/e/FORM_ID/viewform
   Until a real link is set, the page shows a friendly notice instead of an
   empty iframe.
   ========================================================================== */

export const CONTACT_EMAIL = 'admin@paaniai.org';

// Replace REPLACE_ME_* with the Google Form links.
export const GOOGLE_FORM_MENTOR_URL = 'REPLACE_ME_MENTOR';
export const GOOGLE_FORM_COHORT_URL = 'REPLACE_ME_COHORT';

/** True once a real Google Form link has been configured for a form. */
export const isFormConfigured = (url: string): boolean =>
  !!url && !url.includes('REPLACE_ME');
