import React from 'react';
import '../App.css'; // ✅ Make sure this imports your common styles!

const ScadaSystem: React.FC = () => {
  return (
    <div className="page-container">
      {/* Main Title */}
      <h1 className="page-title">
        SCADA System and Water Sector: An Overview
      </h1>

      {/* Intro Paragraph */}
      <p>
        During a recent visit to the Project Implementation Directorate (PID) of Kathmandu Upatyaka
        Khanepani Limited (KUKL), I had the opportunity to explore the Supervisory Control and Data
        Acquisition (SCADA) system implemented for water distribution management. Er. Prajan Hada,
        a utility coordination engineer at KUKL, provided insights into how this technology is
        transforming water data analysis and policy implementation in Nepal.
      </p>

      {/* Subheading: What is SCADA? */}
      <h2 className="page-subtitle">What is SCADA?</h2>
      <p>
        SCADA, or Supervisory Control and Data Acquisition, is a system that enables organizations
        to monitor and control industrial processes by collecting real-time data from remote
        locations. This data is then used to manage equipment and conditions, ensuring efficient
        and safe operations.
      </p>

      {/* Subheading: How Does SCADA Work? */}
      <h2 className="page-subtitle">How Does SCADA Work?</h2>
      <p>A SCADA system comprises several key components:</p>
      <ul className="page-list">
        <li>
          <strong>Sensors and Actuators:</strong> These devices collect real-time data on parameters
          such as flow rates, pressure, and water quality, and control equipment like valves and
          pumps.
        </li>
        <li>
          <strong>Remote Terminal Units (RTUs) or Programmable Logic Controllers (PLCs):</strong>
          RTUs and PLCs interface with sensors and actuators to gather data and execute control
          commands.
        </li>
        <li>
          <strong>Communication Networks:</strong> Data from RTUs and PLCs is transmitted to central
          control systems via wired or wireless technologies.
        </li>
        <li>
          <strong>Human-Machine Interface (HMI):</strong> The HMI presents data to operators in a
          user-friendly format, allowing for real-time monitoring, control, and analysis.
        </li>
      </ul>

      <p>
        In operation, sensors detect process variables and send this information to RTUs or PLCs.
        These controllers process the data and communicate with the central SCADA system through
        the communication network. Operators interact with the system via the HMI, enabling them
        to monitor conditions, make adjustments, and respond to alarms as necessary.
      </p>

      {/* Image */}
      <div className="page-image-wrapper">
        <img
          src="/images/scada.png"
          alt="SCADA in Action"
          className="page-image"
        />
      </div>

      {/* Subheading: SCADA in Water and Wastewater Management */}
      <h2 className="page-subtitle">SCADA in Water and Wastewater Management</h2>
      <p>
        In the context of water and wastewater management, SCADA systems offer several critical
        functionalities:
      </p>
      <ul className="page-list">
        <li>
          <strong>Real-Time Monitoring:</strong> Continuous data acquisition from sensors allows
          operators to monitor parameters such as flow rates, pressure, and water quality in
          real-time.
        </li>
        <li>
          <strong>Automated Control:</strong> SCADA enables automated control of pumps, valves, and
          other equipment, enhancing operational efficiency.
        </li>
        <li>
          <strong>Data Logging and Reporting:</strong> The system logs data for analysis, aiding in
          regulatory compliance and performance optimization.
        </li>
        <li>
          <strong>Alarm Management:</strong> SCADA systems provide alarm functionalities to alert
          operators of anomalies, facilitating prompt responses to issues.
        </li>
      </ul>

      <p>
        These capabilities lead to improved efficiency, reduced downtime, and enhanced safety in
        water treatment operations.
      </p>

      {/* Subheading: SCADA Implementation in Nepal */}
      <h2 className="page-subtitle">SCADA Implementation in Nepal</h2>
      <p>
        In late 2020, WMI, in partnership with a Nepalese contractor, was awarded a design-build-operate
        contract to manage Kathmandu Valley's new water network using hydraulically controlled valves
        actuated with SCADA. The project scope included:
      </p>
      <ul className="page-list">
        <li>Implementation of a SCADA system for the water distribution network.</li>
        <li>Development of a network analysis system incorporating GIS and water modeling capabilities.</li>
        <li>Installation of over 50 large-capacity control valves.</li>
        <li>
          Deployment of an Automatic Meter Reading (AMR) system, including 1,000 meters
          in a pilot zone.
        </li>
      </ul>

      <p>
        The design-build phase was scheduled to last two years, followed by an additional two years
        of operations to ensure a smooth transition to Nepalese staff. The first phase aimed to
        provide 170 million liters per day (MLD) of water to the population, with a second phase
        increasing capacity to 510 MLD. The SCADA system's objectives included distributing water
        evenly, protecting new infrastructure, and monitoring key parameters such as flow, pressure,
        and water quality.
      </p>

      <p>
        As of January 2025, the SCADA system has been operational in two to three District Metering
        Areas (DMAs) for approximately two to three months. Preliminary data indicates significant
        improvements in operational efficiency and water distribution management. Continuous
        monitoring and analysis are ongoing to optimize the system further and inform policy
        implementation.
      </p>

      {/* Subheading: Implications */}
      <h2 className="page-subtitle">Implications of SCADA in Nepal's Water Sector</h2>
      <p>
        The deployment of Supervisory Control and Data Acquisition (SCADA) systems in Nepal's water
        management infrastructure offers significant technical advancements:
      </p>

      <h3 className="page-subtitle">1. Real-Time Monitoring and Control</h3>
      <p>
        SCADA systems enable continuous surveillance of water distribution networks, providing
        immediate data on flow rates, pressure levels, and water quality. This real-time
        information allows for prompt adjustments to operational parameters, ensuring efficient
        water distribution and rapid response to anomalies.
      </p>

      <h3 className="page-subtitle">2. Data-Driven Decision Making</h3>
      <p>
        By aggregating and analyzing data from various sensors and control points, SCADA facilitates
        informed decision-making. Historical and real-time data analysis supports predictive
        maintenance, demand forecasting, and optimization of resource allocation, leading to
        improved operational efficiency.
      </p>

      <h3 className="page-subtitle">3. Integration with Artificial Intelligence</h3>
      <p>
        Incorporating AI algorithms with SCADA systems enhances predictive analytics capabilities.
        AI can identify patterns and predict potential system failures or inefficiencies, enabling
        preemptive maintenance and reducing downtime.
      </p>

      <h3 className="page-subtitle">4. Enhanced System Reliability</h3>
      <p>
        Automation through SCADA reduces the reliance on manual interventions, minimizing human
        error. Automated controls ensure consistent operations, improving the reliability and
        stability of water supply systems.
      </p>

      <h3 className="page-subtitle">5. Improved Resource Management</h3>
      <p className="page-conclusion">
        SCADA systems contribute to effective resource management by monitoring consumption patterns
        and detecting leaks or unauthorized usage. This leads to reduced water losses and optimized
        usage of available resources.
      </p>
    </div>
  );
};

export default ScadaSystem;
