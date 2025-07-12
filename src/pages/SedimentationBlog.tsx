import React from 'react';
import '../App.css';

const SedimentationBlog: React.FC = () => {
  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">Sedimentation in Water Bodies</h1>
      
      {/* Main Image */}
      <div className="page-image-wrapper">
        <img src="/images/IMG_8423.jpeg" alt="Sedimentation in Nepal's Water Bodies" className="page-image" />
      </div>

      {/* Content */}
      <h2 className="page-subtitle">The Sedimentation Challenge</h2>
      <p>
        Sedimentation poses a long-term threat to Nepal's rivers, reservoirs, and hydropower systems. The country's steep terrain, monsoon climate, deforestation, and frequent landslides result in high sediment loads, especially during monsoon months.
      </p>

      <h2 className="page-subtitle">Impact on Hydropower and Infrastructure</h2>
      <p>
        Hydropower facilities like Kulekhani Reservoir have seen significant loss in storage capacity due to sedimentation, reducing operational efficiency and lifespan (Water Environment Partnership in Asia, 2023).
      </p>
      <p>
        In urban rivers, sedimentation causes channel narrowing, raises riverbeds, and increases flood risk. In rural areas, unsustainable sand mining and land-use change further accelerate erosion (Ghimire et al., 2022).
      </p>

      <h2 className="page-subtitle">Areas where AI could help:</h2>
      <ul className="page-list">
        <li>Forecasting sediment accumulation in rivers and reservoirs</li>
        <li>Identifying high-erosion zones based on satellite imagery</li>
        <li>Correlating rainfall, deforestation, and sediment transport for early warnings</li>
      </ul>

      <div className="page-conclusion">
        <p>
          Sedimentation represents a critical long-term challenge for Nepal's water infrastructure 
          and energy security. Through AI-powered monitoring and predictive modeling, we can 
          better understand sediment dynamics, identify vulnerable areas, and develop proactive 
          strategies to protect our water bodies and hydropower systems.
        </p>
      </div>
    </div>
  );
};

export default SedimentationBlog; 