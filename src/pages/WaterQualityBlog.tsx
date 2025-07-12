import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const WaterQualityBlog: React.FC = () => {
  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">Water Quality (Rivers and Drinking Water) in Nepal</h1>
      
      {/* Main Image */}
      <div className="page-image-wrapper">
        <img src="/images/IMG_8425.jpeg" alt="Water Quality Issues in Nepal" className="page-image" />
      </div>

      {/* Content */}
      <h2 className="page-subtitle">Drinking Water Contamination</h2>
      <p>
        Across both urban and rural Nepal, drinking water quality is critically poor. A comprehensive 2022 study in the Kathmandu Valley found that 94% of tested sources (taps, wells, stone spouts) were contaminated with total or fecal coliforms. Additionally, levels of arsenic (up to 0.071 mg/L), iron (up to 7.22 mg/L), and manganese (up to 3.229 mg/L) exceeded WHO safety limits in a significant number of samples (Ghimire et al., 2022).
      </p>
      <p>
        In rural areas, particularly in the Terai and mid-hills, many communities depend on springs and shallow tube wells that are highly susceptible to seasonal contamination. A study assessing 81 water sources in Nepal found that pre-monsoon water quality index (WQI) values were below safe thresholds in a majority of sites (Ghimire et al., 2022).
      </p>

      <h2 className="page-subtitle">River Pollution</h2>
      <p>
        Urban rivers like the Bagmati, Bishnumati, and Dhobikhola are severely degraded. Over 95% of the sewage in Kathmandu Valley is discharged untreated into these rivers (Think Global Health, 2022).
      </p>
      <p>
        In western Nepal, the Mahakali River, which borders India, was found to be unsuitable for drinking at 100% of tested sites. Parameters like ammonium (NH₄⁺) and iron (Fe) exceeded WHO limits in 17–65% of the river's tributaries (Giri et al., 2023).
      </p>

      <h2 className="page-subtitle">Areas where AI could help:</h2>
      <ul className="page-list">
        <li>Detecting localized water quality deterioration in real time</li>
        <li>Modeling spatial and seasonal contamination trends</li>
        <li>Integrating land use, rainfall, and water quality data to flag future risks</li>
      </ul>

      <div className="page-conclusion">
        <p>
          The water quality crisis in Nepal requires immediate attention and innovative solutions. 
          Through data-driven approaches and AI integration, we can better understand, monitor, 
          and address these critical challenges to ensure safe water access for all Nepalese communities.
        </p>
      </div>
    </div>
  );
};

export default WaterQualityBlog; 