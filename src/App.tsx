import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { useScrollRestoration } from './hooks/useScrollRestoration';

// Page imports
import Home from './pages/Home';
import AboutPaani from './pages/AboutPaani';
import PredictiveModeling from './pages/PredictiveModeling';
import DigitalTwinModels from './pages/DigitalTwinModels';
import WaterConsultations from './pages/WaterConsultations';
import DigitalizingNepalWater from './pages/DigitalizingNepalWater';
import Blog2 from './pages/Blog2';
import WaterSupplyBlog from './pages/WaterSupplyBlog';
import WaterQualityBlog from './pages/WaterQualityBlog';
import FloodsBlog from './pages/FloodsBlog';
import SedimentationBlog from './pages/SedimentationBlog';
import Prwaha from './pages/Prwaha';


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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPaani />} />
      <Route path="/predictive-modeling" element={<PredictiveModeling />} />
      <Route path="/digital-twin-models" element={<DigitalTwinModels />} />
      <Route path="/water-consultations" element={<WaterConsultations />} />
      <Route path="/digitalizing-nepal-water" element={<DigitalizingNepalWater />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/prwaha" element={<Prwaha />} />
      <Route path="/water-supply-blog" element={<WaterSupplyBlog />} />
      <Route path="/water-quality-blog" element={<WaterQualityBlog />} />
      <Route path="/floods-blog" element={<FloodsBlog />} />
      <Route path="/sedimentation-blog" element={<SedimentationBlog />} />
    </Routes>
  );
}

export default App;

