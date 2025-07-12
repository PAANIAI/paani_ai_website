import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const flipCards = [
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

const services = [
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

const blogs = [
  {
    link: '/digitalizing-nepal-water',
    title: 'Digitalizing the Water Sector: Nepal',
    description: 'Increasing water demand, aging infrastructure, and climate variability...',
    image: '/images/digitizing_water.png',
  },
  {
    link: '/blog2',
    title: 'SCADA system and Water Sector: An overview',
    description: 'During a recent visit to the Project Implementation Directorate (PID)...',
    image: '/images/scada.png',
  },
];

const challenges = [
  {
    title: 'Urban Water Supply in Nepal',
    description:'Kathmandu still faces a severe water crisis despite major efforts like the Melamchi Water Supply Project.',
    learnMore: 'Learn more about urban water supply challenges',
    image: '/images/waterproblem.jpg',
    link: '/water-supply-blog',
  },
  {
    title: 'Water Quality (Rivers and Drinking Water) in Nepal',
    description: 'Across both urban and rural Nepal, drinking water quality is critically poor.',
    learnMore: 'Learn more about water quality issues',
    image: '/images/waterquality1.jpg',
    link: '/water-quality-blog',
  },
  {
    title: 'Floods in Nepal',
    description: 'Nepal’s 2024 monsoon brought 322 mm rain in a day, triggering major floods across provinces.',
    learnMore: 'Learn more about flood management',
    image: '/images/flood.jpeg',
    link: '/floods-blog',
  },
  {
    title: 'Sedimentation in Water Bodies',
    description: 'Sedimentation poses a long-term threat to Nepal\'s rivers, reservoirs, and hydropower systems.',
    learnMore: 'Learn more about sedimentation issues',
    image: '/images/sedimentation.jpg',
    link: '/sedimentation-blog',
  },
];

const Home: React.FC = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">Paani AI</div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Paani AI</h1>
        <h2>Empowering Nepal’s Water Sector with Data-Driven Innovation</h2>
        <Link to="/about">
          <button className="hero-button">About Paani</button>
        </Link>
      </header>
      <section className="challenges-section">
        <h2>Challenges in Nepal's Water Sector</h2>
        <p>
          Nepal's water sector faces critical challenges that require innovative solutions and data-driven approaches
          to ensure sustainable water management for future generations.
        </p>
        
        <div className="challenges-container">
          {challenges.map(({ title, description, learnMore, image, link }, index) => (
            <div key={index} className="challenge-card">
              <img src={image} alt={title} className="challenge-image" />
              <h3>{title}</h3>
              <p>{description}</p>
              <Link to={link} className="learn-more-text">{learnMore}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* How Paani Transforms */}
      <section className="transform-section">
        <h2>How Paani Transforms</h2>
        <div className="transform-text">
          <p>
            At <strong>Paani AI</strong>, we aim to ensure water is <strong>accessible, safe, and sustainably managed</strong>.
            We provide water utilities and the government with <strong>data-driven solutions</strong> for sustainable and resilient water management in Nepal.
          </p>
        </div>
      </section>

      {/* Challenges in Nepal's Water Sector */}
      

      {/* Phases Section */}
      <section className="phases-section">
        <h2 className="phase-main-title">Our Roadmap</h2>

        {/* Phase 1 */}
        <div className="phase1-container">
          <h3>Phase 1: The Catalyst Stage</h3>
          <div className="flip-cards-row">
            {flipCards.map(({ image, title, text }, index) => (
              <div key={index} className="flip-card-wrapper">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={image} alt={title} />
                    </div>
                    <div className="flip-card-back">
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>

                <div className="card-title-below">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div className="phase2">
          <h3>Phase 2: Shaping the Future</h3>
          <p>Building on Phase 1, we now provide advanced, data-driven services:</p>

          <div className="services-row">
            {services.map(({ link, title, description, image }, index) => (
              <Link to={link} key={index} className="service">
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={image} alt={title} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Current Initiative with Prwaha anchor container */}
      <section className="doing-section">
        <h2 className="section-title">Our Current Initiative</h2>
        <div className="prwaha-card-container">
          <Link to="/prwaha" className="prwaha-card">
            <img src="/images/1.webp" alt="Prwaha Mentorship Program" className="prwaha-card-image" />
            
            <div className="prwaha-card-desc">प्रवाह, a mentorship program supporting Nepalese students pursuing careers in the water sector.</div>
          </Link>
        </div>
      </section>

      {/* Blogs */}
      <section className="blog-section">
        <h2 className="section-title">Blogs</h2>
        <div className="blogs-container">
          {blogs.map(({ link, title, description, image }, index) => (
            <Link to={link} key={index} className="blog">
              <div className="blog-image-wrapper">
                <img src={image} alt={title} />
              </div>
              <div className="blog-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* People Behind Paani AI */}
      <section className="people-section">
        <h2 className="section-title">Our Team</h2>
        <div className="cofounders-row">
          <div className="person-card">
            <img src="/images/garima_formal.jpg" alt="Garima Acharya" className="person-img" />
            <div className="person-info">
              <h3>Garima Acharya</h3>
              <p className="person-title">Co-founder</p>
            </div>
          </div>
          <div className="person-card">
            <img src="/images/Suniti.jpg" alt="Suniti Shrestha" className="person-img" />
            <div className="person-info">
              <h3>Suniti Shrestha</h3>
              <p className="person-title">Co-founder</p>
            </div>
          </div>
          <div className="person-card">
            <img src="/images/somnath.jpg" alt="Somnath Luitel" className="person-img" />
            <div className="person-info">
              <h3>Somnath Luitel</h3>
              <p className="person-title">Co-founder</p>
            </div>
          </div>
        </div>
        <div className="cto-row">
          <div className="person-card cto-card">
            <img src="/images/prabigya.jpeg" alt="Prabigya Acharya" className="person-img" />
            <div className="person-info">
              <h3>Prabigya Acharya</h3>
              <p className="person-title">Chief Technical Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Footer */}
      <footer className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more about Paani AI? Email us at admin@paaniai.org, and
          we'll get back to you soon.
        </p>
      </footer>
    </div>
  );
};

export default Home;
