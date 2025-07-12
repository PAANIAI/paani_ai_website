import React from 'react';
import '../App.css'; // Ensure the path to your CSS file is correct

const WaterConsultations: React.FC = () => {
  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">
        Water Consultation Services: Paani AI’s Approach
      </h1>

      {/* Top Image */}
      <div className="page-image-wrapper">
        <img
          src="/images/Consultations.png"
          alt="Water Consultation Visualization"
          className="page-image"
        />
      </div>

      {/* Intro Paragraph */}
      <p>
        At <strong>Paani AI</strong>, we understand that every water system is unique,
        with its own challenges and opportunities. Whether it’s improving water
        distribution efficiency, implementing smart monitoring solutions, or
        developing Digital Twin models, our consultation services are designed
        to help utilities, municipalities, and organizations make
        <strong> data-driven decisions</strong> for better water management.
      </p>

      {/* Subheading */}
      <h2 className="page-subtitle">Why Water Consultations Matter</h2>

      <p>
        Water resources in Nepal are abundant yet often underutilized due to outdated
        infrastructure, fragmented data, and policy gaps. Our consultation services aim
        to bridge these gaps, guiding stakeholders through modern, tech-driven approaches
        that enhance efficiency and sustainability.
      </p>

      {/* Another Subheading */}
      <h2 className="page-subtitle">Our Three-Step Approach</h2>

      <p>
        Each consultation project typically involves:
      </p>

      <ul className="page-list">
        <li>
          <strong>Assessment and Analysis:</strong> We evaluate your current water infrastructure,
          usage patterns, and pain points to identify key areas for improvement.
        </li>
        <li>
          <strong>Technical Roadmap:</strong> From sensor deployment to analytics platforms,
          we outline a step-by-step plan to integrate modern solutions—such as
          IoT monitoring or Digital Twin modeling—based on your objectives.
        </li>
        <li>
          <strong>Implementation and Support:</strong> Our team offers training, maintenance,
          and ongoing analysis to ensure that new systems remain robust, cost-effective,
          and adaptive to changing water demands.
        </li>
      </ul>

      {/* Conclusion */}
      <p>
        By combining our technical expertise with a deep understanding of local conditions,
        Paani AI helps organizations achieve greater efficiency, reduce water losses, and
        foster more equitable access to resources. From data collection to integration and
        beyond, we’re committed to delivering comprehensive, future-ready water management
        solutions that empower communities and utilities alike.
      </p>
    </div>
  );
};

export default WaterConsultations;
