import React, { useState, useEffect } from 'react';
import '../App.css';

const advisors = [
  {
    name: 'Soni Pradhanang',
    title: 'Professor of Water Resources, University of Rhode Island',
    photo: '/images/Advisors and Mentors/soni_mam.jpeg',
  },
  {
    name: 'Meena Shrestha',
    title: 'Joint Secretary, Ministry of Energy, Water Resources and Irrigation, Nepal',
    photo: '/images/Advisors and Mentors/Meena shrestha.jpeg',
  },
  {
    name: 'Manohara Khadka',
    title: 'Country Director, International Water Management Institute (IWMI)',
    photo: '/images/Advisors and Mentors/manohara_khadaka.jpeg',
  },
  {
    name: 'Neera Shrestha Pradhan',
    title: 'Senior Water and Adaptation Specialist, International Centre for Integrated Mountain Development (ICIMOD)',
    photo: '/images/Advisors and Mentors/neera shrestha pradhan.jpeg',
  },
];

const mentors = [
  {
    name: 'Sabita Adhikari',
    title: 'Assistant Professor, University of Sydney',
    photo: '/images/Advisors and Mentors/sabita_didi.jpeg',
  },
  {
    name: 'Gayatri Paudel',
    title: 'IHE Delft Institute for Water Education',
    photo: '/images/Advisors and Mentors/gayatri_paudel.jpg',
  },
  {
    name: 'Pranisha Pokhrel',
    title: 'Utrecht University',
    photo: '/images/Advisors and Mentors/pranisha_didi.jpeg',
  },
  {
    name: 'Shraddha Sharma',
    title: 'Arizona State University',
    photo: '/images/Advisors and Mentors/shradhha_sharma.jpeg',
  },
  {
    name: 'Sarana Tualdhar',
    title: 'IHE Delft Institute for Water Education',
    photo: '/images/Advisors and Mentors/sarana_tuladhar.jpeg',
  },
];

const girls = [
  '/images/girls/2.png',
  '/images/girls/3.png',
  '/images/girls/4.png',
  '/images/girls/5.png',
  '/images/girls/6.png',
  '/images/girls/7.png',
  '/images/girls/8.png',
  '/images/girls/9.png',
  '/images/girls/10.png',
  '/images/girls/11.png',
  '/images/girls/12.png',
];

const MENTORS_PER_ROW = 4;

const Prwaha: React.FC = () => {
  const [viewerImg, setViewerImg] = useState<string | null>(null);
  const [showAllMentors, setShowAllMentors] = useState(false);
  const [showAllGirls, setShowAllGirls] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if device is mobile
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="page-container">
      <div className="about-paani-container">
        <h1 className="about-title prwaha-title-centered">प्रवाह: Empowering the Future of Nepal's Water Sector</h1>
        <div className="prwaha-images-row">
          <img src="/images/prawaha.jpg" alt="Prwaha Mentorship Program 1" className="prwaha-main-image" />
          <img src="/images/prawaha2.jpg" alt="Prwaha Mentorship Program 2" className="prwaha-main-image" />
        </div>
        <div className="page-content">
          <p>
            <strong>प्रवाह</strong> is a structured mentorship initiative designed to support Nepalese students aspiring to build careers in the water sector. With the guidance of over 25 experienced advisors, the program provides participants with valuable insights into research, civil service, and the growing importance of data and innovation. Beyond mentorship, प्रवाह fosters a robust professional network to strengthen collaboration within Nepal’s water sector community.
          </p>

          <div className="prwaha-flex-center-wrapper">
            <div className="prwaha-flex-containers">
              <div className="prwaha-flex-item">
                <h2>Why?</h2>
                <div className="prwaha-point"><strong>Bridging the Gap:</strong> Connecting academic training with real industry needs in Nepal's water sector.</div>
                <div className="prwaha-point"><strong>Fostering Community:</strong> Building a supportive ecosystem for early-career professionals and seasoned experts.</div>
                <div className="prwaha-point"><strong>Promoting Inclusion:</strong> Empowering women and underrepresented groups for leadership and visibility.</div>
              </div>
              <div className="prwaha-flex-item">
                <h2>How?</h2>
                <div className="prwaha-point"><strong>Mentorship-Driven Model:</strong> Structured, first-hand mentorship for emerging water professionals and fresh graduates.</div>
                <div className="prwaha-point"><strong>Professional Network Platform:</strong> A trusted, closed network for knowledge and opportunity exchange at all career stages.</div>
                <div className="prwaha-point"><strong>Inclusive Leadership:</strong> Inaugural cohort focused on empowering women in water management.</div>
              </div>
            </div>
          </div>

          {/* Advisors Section */}
          <div className="mentors-section">
            <h2 className="mentors-title">Advisory Board</h2>
            <p className="mentors-intro">
              Our Advisory Board comprises renowned leaders in water resources, policy, and research, providing strategic guidance and vision for the program.
            </p>
            <div className="mentors-grid">
              {advisors.map((advisor) => (
                <div className="mentor-card" key={advisor.name}>
                  <img src={advisor.photo} alt={advisor.name} className="mentor-photo" />
                  <div className="mentor-name">{advisor.name}</div>
                  <div className="mentor-title">{advisor.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentors Section */}
          <div className="mentors-section">
            <h2 className="mentors-title">Mentorship Team</h2>
            <p className="mentors-intro">
              Our mentors are accomplished professionals and academics dedicated to nurturing emerging talent and fostering innovation in Nepal’s water sector.
            </p>
            <div className="mentors-grid">
              {mentors.map((mentor) => (
                <div className="mentor-card" key={mentor.name}>
                  <img src={mentor.photo} alt={mentor.name} className="mentor-photo" />
                  <div className="mentor-name">{mentor.name}</div>
                  <div className="mentor-title">{mentor.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Girls Section */}
          <div className="mentors-section girls-section">
            <h2 className="mentors-title">Our Girls</h2>
            <div className="mentors-grid">
              {Array.from({ length: Math.ceil(girls.length / MENTORS_PER_ROW) }).map((_, rowIdx) => {
                const start = rowIdx * MENTORS_PER_ROW;
                const end = start + MENTORS_PER_ROW;
                const rowGirls = girls.slice(start, end);
                
                // On mobile, show only first row (2 girls) initially
                if (isMobileView && !showAllGirls && rowIdx > 0) {
                  return null;
                }
                
                return (
                  <div className="mentors-row" key={rowIdx} style={{ opacity: 1 }}>
                    {rowGirls.map((photo, idx) => (
                      <div className="mentor-card" key={photo}>
                        <img
                          src={photo}
                          alt="Our Girl"
                          className="mentor-photo"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setViewerImg(photo)}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            
            {/* View More Button for Mobile */}
            {isMobileView && girls.length > 2 && (
              <button 
                className="view-more-btn-mobile"
                onClick={() => setShowAllGirls(!showAllGirls)}
              >
                {showAllGirls ? 'Show Less' : 'View More Girls'}
              </button>
            )}
          </div>

          {/* Image Viewer Modal */}
          {viewerImg && (
            <div className="image-viewer-modal" onClick={() => setViewerImg(null)}>
              <div className="image-viewer-content" onClick={e => e.stopPropagation()}>
                <button className="image-viewer-close" onClick={() => setViewerImg(null)}>&times;</button>
                <img src={viewerImg} alt="Full Size" className="image-viewer-img" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prwaha; 