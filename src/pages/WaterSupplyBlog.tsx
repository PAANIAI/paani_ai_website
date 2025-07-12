import React from 'react';
import '../App.css';

const WaterSupplyBlog: React.FC = () => {
  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">Urban Water Supply in Nepal</h1>
      
      {/* Main Image */}
      <div className="page-image-wrapper">
        <img src="/images/IMG_8426.jpeg" alt="Urban Water Supply Issues in Nepal" className="page-image" />
      </div>

      {/* Content */}
      <h2 className="page-subtitle">The Kathmandu Water Crisis</h2>
      <p>
        Nepal's capital city, Kathmandu, continues to face a severe water supply crisis despite large-scale projects like the Melamchi Water Supply Project. The daily water demand in the Kathmandu Valley was around 430 million liters per day (MLD) as of 2021, but the supply, even after Melamchi's partial operation, was only about 280 MLD, leaving a deficit of 150 MLD.
      </p>

      <h2 className="page-subtitle">Infrastructure and Distribution Challenges</h2>
      <p>
        A 2016 study estimated that non-revenue water (losses due to leaks, theft, or unmetered use) in Kathmandu exceeded 35% of total supply (Poudel & Duex, 2016).
      </p>
      <p>
        Meanwhile, water distribution remains highly intermittent — many households receive water only a few hours per week. As of 2023, Kathmandu Upatyaka Khanepani Limited (KUKL) served around 2.8 million people through 221,649 connections, yet most of the supply system lacks real-time monitoring or dynamic pressure control (Urban Water Atlas, 2023).
      </p>

      <h2 className="page-subtitle">Areas where AI could help:</h2>
      <ul className="page-list">
        <li>Detecting real-time leakage and pressure anomalies across the network</li>
        <li>Modeling neighborhood-specific demand under varying climate and urban growth</li>
        <li>Optimizing water tanker routes and dispatch, minimizing delays and overlap</li>
      </ul>

      <div className="page-conclusion">
        <p>
          The urban water supply crisis in Kathmandu represents a complex challenge requiring 
          both infrastructure improvements and smart technology solutions. Through AI-driven 
          monitoring and optimization, we can significantly improve water distribution 
          efficiency and reduce the daily water deficit affecting millions of residents.
        </p>
      </div>
    </div>
  );
};

export default WaterSupplyBlog; 