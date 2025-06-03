import React, { useState, useEffect } from 'react';
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

const carouselImages = [
  '/images/1.webp',
  '/images/2.webp',
  '/images/3.webp',
  '/images/4.webp',
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

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

      {/* How Paani Transforms */}
      <section className="transform-section">
        <h2>How Paani Transforms</h2>
        <p>
          At <strong>Paani AI</strong>, we aim to ensure water is{' '}
          <strong>accessible, safe, and sustainably managed</strong>. We provide water utilities and the
          government with <strong>data-driven solutions</strong> for sustainable and resilient water management
          in Nepal.
        </p>
      </section>

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

      {/* Our Current Initiative with carousel and manual controls */}
      <section className="doing-section">
        <h2 className="section-title">Our Current Initiative</h2>
        <p className="doing-description">
          Introducing प्रवाह, a mentorship program supporting Nepalese students pursuing careers in the water sector. With guidance from over 25 advisors, students gain insights into research, civil service, and the role of data and innovation. Prabaha also builds a strong network to strengthen Nepal’s water sector community.
        </p>

        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevImage} aria-label="Previous Image">
            &#8249;
          </button>

          <img
            src={carouselImages[currentIndex]}
            alt={`Prabaha Initiative Photo ${currentIndex + 1}`}
            className="carousel-image"
            key={currentIndex}
          />

          <button className="carousel-button next" onClick={nextImage} aria-label="Next Image">
            &#8250;
          </button>
        </div>
      </section>

      {/* Blogs */}
      <section className="blog-section">
        <h2 className="section-title">Blogs</h2>
        <div className="blogs-container">
          {blogs.map(({ link, title, description, image }, index) => (
            <Link to={link} key={index} className="blog">
              <img src={image} alt={title} className="blog-image" />
              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          ))}
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
