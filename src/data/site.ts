/* ==========================================================================
   Shared site content. All figures/copy are the organization's existing
   content, reorganized — nothing invented here.
   ========================================================================== */

export interface Challenge {
  title: string;
  description: string;
  learnMore: string;
  image: string;
  link: string;
}

export interface RoadmapCard {
  image: string;
  title: string;
  text: string;
}

export interface Service {
  link: string;
  title: string;
  description: string;
  image: string;
}

export interface BlogPost {
  link: string;
  title: string;
  description: string;
  image: string;
}

export interface Person {
  name: string;
  title: string;
  photo: string;
}

export interface Cohort {
  key: string;
  label: string;          // "Cohort 1"
  name: string;           // program name
  tagline: string;
  focus: string;
  image: string;
  detailLink: string;
  status: 'active' | 'upcoming';
}

/* ---- Problem areas (About) ---- */
export const challenges: Challenge[] = [
  {
    title: 'Urban Water Supply in Nepal',
    description:
      'Kathmandu still faces a severe water crisis despite major efforts like the Melamchi Water Supply Project.',
    learnMore: 'Urban water supply challenges',
    image: '/images/waterproblem.jpg',
    link: '/water-supply-blog',
  },
  {
    title: 'Water Quality (Rivers & Drinking Water)',
    description:
      'Across both urban and rural Nepal, drinking water quality is critically poor.',
    learnMore: 'Water quality issues',
    image: '/images/waterquality1.jpg',
    link: '/water-quality-blog',
  },
  {
    title: 'Floods in Nepal',
    description:
      'Nepal’s 2024 monsoon brought 322 mm rain in a day, triggering major floods across provinces.',
    learnMore: 'Flood management',
    image: '/images/flood.jpeg',
    link: '/floods-blog',
  },
  {
    title: 'Sedimentation in Water Bodies',
    description:
      "Sedimentation poses a long-term threat to Nepal's rivers, reservoirs, and hydropower systems.",
    learnMore: 'Sedimentation issues',
    image: '/images/sedimentation.jpg',
    link: '/sedimentation-blog',
  },
];

/* ---- Roadmap Phase 1 (About) ---- */
export const roadmapPhase1: RoadmapCard[] = [
  {
    image: '/images/Research.png',
    title: 'Research and Development',
    text: 'Falling in love with the problem, not the solution. Understanding the issue through policy, governance, and public needs.',
  },
  {
    image: '/images/Teamwork.png',
    title: 'Team Building',
    text: 'Building a team of inquisitive water experts, engineers, and data scientists eager to innovate.',
  },
  {
    image: '/images/mentorship.png',
    title: 'Mentorship and Incubation',
    text: 'Mentoring research enthusiasts to explore and develop ideas in Water and AI.',
  },
  {
    image: '/images/Collab.png',
    title: 'Sectoral Collaborations',
    text: 'Consulting with government bodies, NGOs, and private enterprises to exchange knowledge and resources.',
  },
];

/* ---- Roadmap Phase 2 services (About) ---- */
export const services: Service[] = [
  {
    link: '/predictive-modeling',
    title: 'Predictive Modeling',
    description: 'Forecasting Water Needs for a Changing Climate',
    image: '/images/Predictive_modeling.png',
  },
  {
    link: '/digital-twin-models',
    title: 'Digital Twin Models',
    description: 'Building a Virtual Blueprint for Smarter Water Management',
    image: '/images/Digital_twin.png',
  },
  {
    link: '/water-consultations',
    title: 'Water Consultations',
    description: 'Expert Solutions for Integrated Water Resource Management in Nepal',
    image: '/images/Consultations.png',
  },
];

/* ---- Blog ---- */
export const blogs: BlogPost[] = [
  {
    link: '/digitalizing-nepal-water',
    title: 'Digitalizing the Water Sector: Nepal',
    description:
      'Increasing water demand, aging infrastructure, and climate variability are reshaping how Nepal must manage water.',
    image: '/images/digitizing_water.png',
  },
  {
    link: '/blog2',
    title: 'SCADA System and Water Sector: An Overview',
    description:
      'Insights from the Project Implementation Directorate (PID) on how SCADA is transforming water data in Nepal.',
    image: '/images/scada.png',
  },
];

/* ---- People: Team ---- */
export const team: Person[] = [
  { name: 'Garima Acharya', title: 'Co-founder', photo: '/images/garima_formal.jpg' },
  { name: 'Suniti Shrestha', title: 'Co-founder', photo: '/images/Suniti.jpg' },
  { name: 'Somnath Luitel', title: 'Co-founder', photo: '/images/somnath.jpg' },
];

/* ---- People: Advisors (org-wide) ---- */
export const advisors: Person[] = [
  {
    name: 'Soni Pradhanang',
    title: 'Professor of Water Resources, University of Rhode Island',
    photo: '/images/Advisors and Mentors/soni_mam.jpeg',
  },
  {
    name: 'Meena Shrestha',
    title: 'Joint Secretary, Ministry of Energy, Water Resources and Irrigation, Nepal',
    photo: '/images/Advisors and Mentors/Meena shrestha.jpeg',
  },
  {
    name: 'Manohara Khadka',
    title: 'Country Director, International Water Management Institute (IWMI)',
    photo: '/images/Advisors and Mentors/manohara_khadaka.jpeg',
  },
  {
    name: 'Neera Shrestha Pradhan',
    title:
      'Senior Water and Adaptation Specialist, International Centre for Integrated Mountain Development (ICIMOD)',
    photo: '/images/Advisors and Mentors/neera shrestha pradhan.jpeg',
  },
];

/* ---- People: Mentors (org-wide) ---- */
export const mentors: Person[] = [
  {
    name: 'Sabita Adhikari',
    title: 'Assistant Professor, University of Sydney',
    photo: '/images/Advisors and Mentors/sabita_didi.jpeg',
  },
  {
    name: 'Gayatri Paudel',
    title: 'IHE Delft Institute for Water Education',
    photo: '/images/Advisors and Mentors/gayatri_paudel.jpg',
  },
  {
    name: 'Pranisha Pokhrel',
    title: 'Utrecht University',
    photo: '/images/Advisors and Mentors/pranisha_didi.jpeg',
  },
  {
    name: 'Shraddha Sharma',
    title: 'Arizona State University',
    photo: '/images/Advisors and Mentors/shradhha_sharma.jpeg',
  },
  {
    name: 'Sarana Tualdhar',
    title: 'IHE Delft Institute for Water Education',
    photo: '/images/Advisors and Mentors/sarana_tuladhar.jpeg',
  },
];

/* ---- Events ----
   Transcribed from Paani AI's own posts. Images live in /public/images/Events.
   Paths are URL-encoded because some folders/files contain spaces and "(1)". */
export interface EventSession {
  name: string;
  role: string;       // organisation / title
  category: string;   // e.g. "Academia & Research"
  theme: string;
  meta: string;       // date / time / location
  photo: string;
  blurb: string;
}

export interface EventItem {
  key: string;
  kind: string;          // e.g. "Talk Series", "Field Research"
  title: string;
  meta?: string;         // date / place, only where stated
  image?: string;
  description: string;
  bullets?: string[];
  gallery?: string[];
  sessions?: EventSession[];
  collaborators?: string;
}

export const events: EventItem[] = [
  {
    key: 'waves-of-wisdom',
    kind: 'Talk Series',
    title: 'Waves of Wisdom',
    meta: 'A talk series · from July 2025',
    description:
      'A talk series featuring professionals from the water sector — covering water resources, irrigation, water supply, and hydrology. Designed for civil engineering students and early-career professionals who want a broader understanding of the field. Speakers come from three areas: Academia & Research; Civil Service & Field Experts; and NGOs & INGOs.',
    collaborators: 'In collaboration with the Civil Engineering Students’ Society Nepal (CESS)',
    sessions: [
      {
        name: 'Dr. Soni Pradhanang',
        role: 'Professor of Water Resources, University of Rhode Island',
        category: 'Academia & Research',
        theme: 'Navigating Water and Breaking Barriers',
        meta: '1 July 2025 · 6:30 PM',
        photo: '/images/Events/Waves_of_Wisdom_Series/Soni_Mam.jpg',
        blurb:
          'A leading water resources expert sharing her journey from Nepal to the global stage, with insights into watershed hydrology and the future of water resource management.',
      },
      {
        name: 'Er. Radha Dhakal',
        role: 'Water Supply Engineer, Kathmandu Valley Water Supply Management Board (KVWSMB)',
        category: 'Civil Service & Field Experts',
        theme: 'Through Engineering & Civil Service',
        meta: '22 July 2025 · 4:00 PM · Burja Hall, Department of Civil Engineering',
        photo: '/images/Events/Waves_of_Wisdom_Series/Radha_Mam.jpg',
        blurb:
          'With over 8 years at KVWSMB and expertise in rainwater harvesting, water supply pipeline design, and groundwater management, she offers an inside look at public service in the water sector — from her roots in Gulmi to leading roles in Kathmandu, and her advocacy for women in engineering.',
      },
    ],
  },
  {
    key: 'poster-session',
    kind: 'Cohort 1 Showcase',
    title: 'Virtual Poster Session',
    meta: '12 Fellows · Three groups',
    description:
      'Our first Paani AI cohort came to an end, with each group presenting the mini research project they built through the program. The results are one thing, but the process is what mattered — working in a team to collect data, sit with it long enough to understand it, analyse it properly, and present it in a scientific format.',
    bullets: [
      'Trend Analysis of Precipitation in Madhesh Province of Nepal',
      'Analysis of Rainfall Pattern in Gandaki Province',
      'A Simple Rainfall Runoff Model of West Rapti Basin',
    ],
    gallery: [
      '/images/Events/Poster%20Presentation/madhesh_precipitation_trend_poster%20(1).png',
      '/images/Events/Poster%20Presentation/gandaki_rainfall_pattern_poster%20(1).png',
      '/images/Events/Poster%20Presentation/west_rapti_runoff_model_poster%20(1).png',
    ],
  },
  {
    key: 'flood-field-research',
    kind: 'Field Research',
    title: 'Urban Flooding Field Survey',
    meta: 'July 2025 · Bagmati, Nakhu & Bishnumati riverbanks',
    image: '/images/Events/Flood_data_collection/floodsurvey1.jpg',
    description:
      'The Prawaha team returned to the riverbanks of the Bagmati, Nakhu, and Bishnumati, surveying over 50 households and businesses still living in the shadow of the devastating September 2024 floods. Field interviews explored whether communities feel better prepared — and found that, even with early warnings, many families lacked a practical plan or safe infrastructure to protect their lives.',
  },
  {
    key: 'living-mountain-lab',
    kind: 'Field Visit',
    title: 'Living Mountain Lab, Godawari',
    meta: 'Godawari',
    image: '/images/Events/Living_mountains_lab/living_mountain_lab.jpeg',
    description:
      'Our Prawaha cohort spent the day at the Living Mountain Lab in Godawari — a living classroom for mountain technology, from saving drying springs to smarter ways of managing wastewater in the hills. With thanks to Neera Shrestha Pradhan, PhD, for making the visit possible.',
  },
];

/* ---- Cohorts (extensible: add Cohort 2 here when it exists) ---- */
export const cohorts: Cohort[] = [
  {
    key: 'prwaha',
    label: 'Cohort 1',
    name: 'प्रवाह (Prawaha)',
    tagline:
      'A structured mentorship program supporting Nepalese students pursuing careers in the water sector.',
    focus: 'Inaugural cohort focused on empowering women in water management.',
    image: '/images/1.webp',
    detailLink: '/prwaha',
    status: 'active',
  },
];
