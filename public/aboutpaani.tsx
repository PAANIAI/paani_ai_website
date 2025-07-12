import React from 'react';

const AboutPaani: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Heading in blue */}
      <h1 style={{ color: 'blue' }}>About Paani AI</h1>

      <p>
        Paani AI is a leading innovator in Nepal’s water management sector.
        We leverage data-driven solutions and advanced analytics to ensure
        sustainable water resource management across the country.
      </p>

      <h2>Our Mission</h2>
      <ul>
        <li>Revolutionize water management with data and technology</li>
        <li>Address climate change challenges</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        Transform the way Nepal approaches water resource planning,
        ensuring a sustainable future for all.
      </p>

      {/* Placeholder image; replace with your own source */}
      <img
        src="/images/nepal_water_resources.png"
        alt="Nepal Water Resource"
        style={{ marginTop: '1rem', width: '100%', height: 'auto', borderRadius: '4px' }}
      />


    </div>
  );
};

export default AboutPaani;
