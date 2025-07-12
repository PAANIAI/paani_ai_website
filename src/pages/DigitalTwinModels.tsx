import React, { useEffect } from 'react';
import '../App.css'; // ✅ Assuming global styles are in App.css

const DigitalTwinModels: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">
        Building Nepal’s First Digital Twin for Water Management: Paani AI’s Vision
      </h1>

      {/* Intro Image */}
      <div className="page-image-wrapper">
        <img
          src="/images/Digital_twin.png"
          alt="Digital Twin Visualization"
          className="page-image"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Intro Paragraph */}
      <p>
        Water management in Nepal is complex, influenced by seasonal variations, growing urban demand,
        and climate change. Yet, decision-making in the sector still relies on fragmented data and
        reactive approaches. At <strong>Paani AI</strong>, we are working to bridge this gap by
        developing Digital Twin models—virtual replicas of real-world water systems that integrate
        real-time data, AI, and predictive analytics.
      </p>

      {/* Subheading */}
      <h2 className="page-subtitle">
        Why Does Nepal Need Digital Twin Models for Water?
      </h2>

      <p>Nepal’s water sector faces several challenges:</p>
      <ul className="page-list">
        <li>Lack of real-time monitoring for water supply and distribution networks.</li>
        <li>High levels of non-revenue water (NRW) due to leaks and inefficiencies.</li>
        <li>Limited flood prediction and early warning systems despite increasing climate risks.</li>
        <li>Inefficient groundwater management, leading to over-extraction and water stress.</li>
      </ul>
      <p>
        A Digital Twin can address these issues by providing a real-time, data-driven simulation of
        Nepal’s water systems, helping stakeholders anticipate, analyze, and optimize water resource
        management.
      </p>

      {/* Subheading */}
      <h2 className="page-subtitle">
        How Paani AI is Developing Digital Twin Models
      </h2>

      <p>At Paani AI, we are designing Digital Twin models that will:</p>

      {/* Subsection */}
      <h3 className="page-subsection-title">Integrate IoT and Remote Sensing Data</h3>
      <ul className="page-list">
        <li>Deploy smart sensors in water distribution networks, rivers, and reservoirs.</li>
        <li>Use satellite and drone data for large-scale monitoring of water bodies and groundwater levels.</li>
      </ul>

      {/* Subsection */}
      <h3 className="page-subsection-title">Leverage AI and Machine Learning</h3>
      <ul className="page-list">
        <li>Predict water demand and supply fluctuations.</li>
        <li>Detect leaks and inefficiencies in real-time.</li>
        <li>Provide flood forecasting and early warnings based on hydrological models.</li>
      </ul>

      {/* Subsection */}
      <h3 className="page-subsection-title">Enable Real-Time Decision Support</h3>
      <ul className="page-list">
        <li>Provide water utilities with interactive dashboards for system monitoring.</li>
        <li>Help policymakers simulate different scenarios (e.g., droughts, infrastructure expansion).</li>
        <li>Assist urban planners in designing climate-resilient water infrastructure.</li>
      </ul>
    </div>
  );
};

export default DigitalTwinModels;
