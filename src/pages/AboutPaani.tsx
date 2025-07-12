import React from 'react';
import '../App.css'; // Make sure this path is correct based on your project structure

const AboutPaani: React.FC = () => {
  return (
    <div className="about-paani-container">
      <h1 className="about-title">About Paani AI</h1>

      <p>
        Paani AI is an innovator in Nepal’s water management sector.
        We leverage data-driven solutions and advanced analytics to ensure
        sustainable water resource management across the country.
      </p>

      <h2>Our Mission</h2>
      <ul>
        <li>Revolutionize water management with data and technology</li>
        <li>Address climate change challenges through the context of water</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        Transform the way Nepal approaches water resource planning through
        data-informed decision making, ensuring a sustainable future for all.
      </p>

      <div className="about-image-wrapper">
        <img
          src="/images/water1.jpg"
          alt="Stone Spouts in Nepal"
          className="about-image"
        />
      </div>

      <div className="about-image-wrapper">
        <img
          src="/images/water2.jpg"
          alt="Tube Wells in Nepal"
          className="about-image"
        />
      </div>

      <div className="about-image-wrapper">
        <img
          src="/images/rivers.png"
          alt="Rivers of Nepal"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default AboutPaani;
