import React, { useEffect } from 'react';
import '../App.css'; // Import your common styles here.

const DigitalizingNepalWater: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">
        Digitalizing the Water Sector: Nepal
      </h1>

      {/* Intro Image */}
      <div className="page-image-wrapper">
        <img
          src="/images/Research.png"
          alt="Digitalization in Water Management"
          className="page-image"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Introduction */}
      <p>
        Increasing water demand, aging infrastructure, and climate variability have been adding
        challenges to the global water sector. The integration of digital technologies into water
        management systems offers innovative solutions to such challenges, enhancing efficiency,
        sustainability, and resilience. This transformation is particularly pertinent to Nepal,
        where water resources are abundant yet underutilized, and where digitalization can play
        a pivotal role in optimizing water management.
      </p>

      {/* Section: How Digitalization is a Game Changer */}
      <h2 className="page-subtitle">How Digitalization of Water Is a Game Changer</h2>
      <p>
        Digital technologies, including IoT, artificial intelligence (AI), and machine learning (ML),
        have emerged as transformative tools in water management. Below are examples of how digital
        tools optimize water use, reduce losses, and enhance system reliability, transforming
        traditional water management into a proactive, data-driven process:
      </p>

      <ul className="page-list">
        <li>
          <strong>Smart Water Utilities:</strong> Many utilities worldwide, such as Thames Water in
          the UK, use smart meters and AI-based leak detection systems to reduce water losses and
          operational costs (<em>Smart Water Magazine</em>).
        </li>
        <li>
          <strong>Predictive Analytics:</strong> Singapore's Public Utilities Board (PUB) leverages
          real-time data and predictive analytics to monitor water quality and predict pipe failures,
          ensuring uninterrupted water supply (<em>IWA Network</em>).
        </li>
        <li>
          <strong>Flood Management:</strong> The Netherlands employs digital water twins for flood
          prediction and management, integrating real-time data from sensors to model flood risks
          (<em>ScienceDirect</em>).
        </li>
      </ul>

      {/* Section: Water Sector of Nepal & Prospects */}
      <h2 className="page-subtitle">Water Sector of Nepal &amp; Prospects for Digitalization</h2>
      <p>
        Nepal is endowed with significant water resources, with about 6,000 rivers contributing to
        a total estimated water flow of 225 billion cubic meters annually (<em>WECS | Nepal</em>).
        Despite this abundance, the water sector in Nepal faces multifaceted challenges rooted in
        rapid urbanization, climate variability, prevailing inequalities, and governance inefficiencies.
      </p>
      <p>
        Institutional and systemic challenges, such as weak policy implementation, fragmented
        management, and insufficient financing, further exacerbate the problem, complicating
        efforts to ensure sustainable water supply and management. To address these challenges,
        leveraging data and digital technologies emerges as a transformative solution. Real-time
        data collection, advanced analytics, remote sensing, and IoT can improve water management,
        enable better forecasting, and enhance decision-making.
      </p>

      {/* Section: How Data and Digitalization Solve Challenges */}
      <h2 className="page-subtitle">
        How Data and Digitalization Solve Nepal’s Water Sector Challenges
      </h2>

      <h3 className="page-subtitle">Aging and Inadequate Water Supply Infrastructure</h3>
      <p>
        Outdated infrastructure fails to meet growing demands, causing inefficiencies, water losses
        during distribution, and an inability to provide equitable access (<em>Kathmandu Post, 2023</em>).
      </p>
      <p>
        <strong>Opportunity:</strong> Smart water grids, like Singapore’s PUB system, use advanced
        metering infrastructure (AMI) to detect leaks, monitor distribution networks, and minimize
        wastage in real-time.
      </p>

      <h3 className="page-subtitle">Limited Access to Potable Water in Rural Areas</h3>
      <p>
        Only 25% of rural populations have access to safe drinking water sources, exposing them to
        waterborne diseases and health risks (<em>Action Against Hunger, 2024</em>).
      </p>
      <p>
        <strong>Opportunity:</strong> Mobile water quality monitoring platforms, like mWater,
        empower communities to test and track water safety, improving rural access to clean water.
      </p>

      <h3 className="page-subtitle">Urban Groundwater Depletion and Contamination</h3>
      <p>
        Unchecked extraction of groundwater in urban areas, especially Kathmandu Valley, has led to
        significant aquifer depletion and contamination, threatening long-term water security
        (<em>ADBI, 2019</em>).
      </p>
      <p>
        <strong>Opportunity:</strong> IoT-based groundwater monitoring systems and GIS mapping,
        as employed in India’s Central Ground Water Board, track extraction rates and aquifer health,
        supporting sustainable usage.
      </p>

      <h3 className="page-subtitle">Impact of Climate Change on Hydrological Systems</h3>
      <p>
        Climate variability has increased glacial melt, altered precipitation patterns, and heightened
        floods and droughts (<em>Action Against Hunger, 2024</em>).
      </p>
      <p>
        <strong>Opportunity:</strong> Remote sensing technologies and predictive climate models
        allow proactive responses to extreme weather events.
      </p>

      <h3 className="page-subtitle">Dual Challenges of Water Scarcity and Flooding</h3>
      <p>
        Poor urban planning has led to simultaneous challenges of water scarcity and flooding
        (<em>IWA, 2023</em>).
      </p>
      <p>
        <strong>Opportunity:</strong> Integrated water resource models and remote sensing,
        as applied in the Netherlands’ Delta Programme, help manage water excess and deficits.
      </p>

      <h3 className="page-subtitle">Lack of Integrated Water Resource Management (IWRM)</h3>
      <p>
        Nepal lacks a cohesive framework for balancing water development, conservation, and equitable
        distribution (<em>Kathmandu Post, 2023</em>).
      </p>
      <p>
        <strong>Opportunity:</strong> Digital platforms, such as South Africa’s WARMS, digitize water
        licenses and enable transparent resource allocation.
      </p>

      {/* Conclusion */}
      <h2 className="page-subtitle">Conclusion</h2>
      <p className="page-conclusion">
        Nepal’s water sector faces pressing challenges that require systemic overhaul supported by
        advanced technologies. By integrating proven digital tools and leveraging data-driven
        solutions, Nepal can enhance governance, optimize resource use, and build resilience against
        climate impacts.
      </p>
    </div>
  );
};

export default DigitalizingNepalWater;
