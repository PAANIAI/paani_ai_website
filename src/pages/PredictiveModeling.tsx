import React, { useEffect } from 'react';
import '../App.css'; // Assuming your common styles are imported here

const PredictiveModeling: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">
        Predictive Modeling for a Sustainable Water Future
      </h1>

      {/* Image */}
      <div className="page-image-wrapper">
        <img
          src="/images/Predictive_modeling.png"
          alt="Predictive Modeling"
          className="page-image"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Intro Paragraph */}
      <p>
        At <strong>Paani AI</strong>, we believe data-driven solutions hold the key to addressing
        Nepal’s water management challenges. Our mission is to empower stakeholders in the water
        sector with cutting-edge tools that forecast, optimize, and sustain water resources
        amidst growing urbanization, climate variability, and socio-economic demands. Central to
        this mission is our work in <strong>predictive modeling</strong>, which transforms raw
        data into actionable insights for smarter decision-making.
      </p>

      {/* Subheading 1 */}
      <h2 className="page-subtitle">
        Our Current Work in Predictive Modeling: Paani AI
      </h2>

      <p>
        In urban centers, water demand fluctuates due to factors like population density, seasonal
        variations, and infrastructure constraints. To address this, we are pioneering the use of
        <strong> transformer-based machine learning models</strong>—advanced tools originally
        designed for natural language processing—to accurately forecast <strong>short-term water
        demand</strong>. These models not only handle the complexity of dynamic variables but also
        enable granular predictions at city and district levels.
      </p>

      <p>
        By integrating diverse datasets, including historical water usage patterns, climate data,
        and socio-economic indicators, our predictive tools empower water utilities to:
      </p>

      <ul className="page-list">
        <li>Proactively manage supply-demand gaps.</li>
        <li>Optimize distribution systems to minimize waste.</li>
        <li>Respond to emergencies, such as droughts or infrastructure failures, with greater agility.</li>
      </ul>

      {/* Subheading 2 */}
      <h2 className="page-subtitle">
        Expanding the Horizon: The Future of Predictive Modeling in Water Sector of Nepal
      </h2>

      <p>
        While short-term forecasting is a critical step, our vision extends far beyond.
        At Paani AI, we are conceptualizing and developing tools to:
      </p>

      <ol className="page-ordered-list">
        <li>
          <strong>Forecast Long-Term Water Availability:</strong> Combining hydrological data
          with machine learning models to predict river flow and reservoir levels, aiding
          in sustainable water allocation.
        </li>
        <li>
          <strong>Predict Urban Flood Risks:</strong> Integrating rainfall projections and
          urban drainage data to mitigate flood risks in Nepal’s rapidly urbanizing cities.
        </li>
      </ol>

      {/* Subheading 3 */}
      <h2 className="page-subtitle">Why This Matters</h2>

      <p>
        Nepal’s unique geography and rapid development demand solutions that balance economic
        growth with environmental stewardship. Predictive modeling, powered by AI and big data,
        equips communities, industries, and governments with the knowledge to act before
        crises strike. It’s not just about saving water—it’s about securing a future where
        every Nepali has reliable access to this essential resource.
      </p>

      {/* Concluding Statement */}
      <p className="page-conclusion">
        At Paani AI, we are not just building technology; we are shaping the
        foundation for a <strong>sustainable and resilient water future</strong>.
      </p>
    </div>
  );
};

export default PredictiveModeling;
