import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/site.css';
import { useScrollRestoration } from './hooks/useScrollRestoration';

import Layout from './components/Layout';

// Primary pages
import Home from './pages/Home';
import About from './pages/About';
import Cohorts from './pages/Cohorts';
import People from './pages/People';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Apply flow
import ApplyLanding from './pages/apply/ApplyLanding';
import ApplyMentor from './pages/apply/ApplyMentor';
import ApplyCohort from './pages/apply/ApplyCohort';

// Detail pages (linked from primary pages)
import Prwaha from './pages/Prwaha';
import WaterSupplyBlog from './pages/WaterSupplyBlog';
import WaterQualityBlog from './pages/WaterQualityBlog';
import FloodsBlog from './pages/FloodsBlog';
import SedimentationBlog from './pages/SedimentationBlog';
import PredictiveModeling from './pages/PredictiveModeling';
import DigitalTwinModels from './pages/DigitalTwinModels';
import WaterConsultations from './pages/WaterConsultations';
import DigitalizingNepalWater from './pages/DigitalizingNepalWater';
import Blog2 from './pages/Blog2';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  useScrollRestoration();

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Primary navigation */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/people" element={<People />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Apply */}
        <Route path="/apply" element={<ApplyLanding />} />
        <Route path="/apply/mentor" element={<ApplyMentor />} />
        <Route path="/apply/cohort" element={<ApplyCohort />} />

        {/* Cohort detail */}
        <Route path="/prwaha" element={<Prwaha />} />

        {/* Problem-area detail pages */}
        <Route path="/water-supply-blog" element={<WaterSupplyBlog />} />
        <Route path="/water-quality-blog" element={<WaterQualityBlog />} />
        <Route path="/floods-blog" element={<FloodsBlog />} />
        <Route path="/sedimentation-blog" element={<SedimentationBlog />} />

        {/* Phase 2 service pages */}
        <Route path="/predictive-modeling" element={<PredictiveModeling />} />
        <Route path="/digital-twin-models" element={<DigitalTwinModels />} />
        <Route path="/water-consultations" element={<WaterConsultations />} />

        {/* Blog articles */}
        <Route path="/digitalizing-nepal-water" element={<DigitalizingNepalWater />} />
        <Route path="/blog2" element={<Blog2 />} />
      </Route>
    </Routes>
  );
}

export default App;
