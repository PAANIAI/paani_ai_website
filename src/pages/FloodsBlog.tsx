import React from 'react';
import '../App.css';

const FloodsBlog: React.FC = () => {
  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">Floods in Nepal</h1>
      
      {/* Main Image */}
      <div className="page-image-wrapper">
        <img src="/images/IMG_8424.jpeg" alt="Flooding in Nepal" className="page-image" />
      </div>

      {/* Content */}
      <h2 className="page-subtitle">Monsoon Floods and Their Impact</h2>
      <p>
        Nepal experiences frequent and devastating floods, especially during the monsoon. In September 2024, heavy rainfall (up to 322 mm in 24 hours) triggered widespread flooding across multiple provinces. At least 224 people died, and over 13,300 were displaced, with 25 bridges and 1,200 homes destroyed (Wikipedia: 2024 Nepal floods).
      </p>

      <h2 className="page-subtitle">Urban and Mountain Flood Challenges</h2>
      <p>
        Urban centers like Kathmandu now face frequent drainage-induced flash floods due to unplanned construction and poor stormwater systems. In the high mountains, glacial lake outburst floods (GLOFs) — like the August 2024 Thame flood — threaten settlements and infrastructure downstream (Wikipedia: 2024 Thame flood).
      </p>
      <p>
        Early warning systems do exist, but are limited in coverage, not localized enough, and often reach vulnerable communities too late to act.
      </p>

      <h2 className="page-subtitle">Areas where AI could help:</h2>
      <ul className="page-list">
        <li>Predicting flash floods and GLOFs by integrating radar, terrain, and weather data</li>
        <li>Mapping flood-prone urban and rural zones</li>
        <li>Forecasting stormwater overflows and drainage failure</li>
        <li>Supporting real-time early warning alerts for communities</li>
      </ul>

      <div className="page-conclusion">
        <p>
          The devastating impact of floods in Nepal requires advanced warning systems and 
          predictive modeling. Through AI integration with weather data, terrain analysis, 
          and real-time monitoring, we can significantly improve early warning capabilities 
          and reduce the human and economic toll of these natural disasters.
        </p>
      </div>
    </div>
  );
};

export default FloodsBlog; 