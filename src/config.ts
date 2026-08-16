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

// Google Form links (full "viewform" URLs; the embed helper adds ?embedded=true).
export const GOOGLE_FORM_MENTOR_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSekGr0qucZyOFAjisP_UCS2lD93rY523OB8C6z_SODnSrl96g/viewform';
export const GOOGLE_FORM_COHORT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfRsbCeT4liGtUE8RLPg-yLaO-n_9razKdPPl82QVyd3X0Qaw/viewform';

/** True once a real Google Form link has been configured for a form. */
export const isFormConfigured = (url: string): boolean =>
  !!url && !url.includes('REPLACE_ME');
