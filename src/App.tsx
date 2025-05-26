// import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

// Page imports
import Home from './pages/Home';
import AboutPaani from './pages/AboutPaani';
import PredictiveModeling from './pages/PredictiveModeling';
import DigitalTwinModels from './pages/DigitalTwinModels';
import WaterConsultations from './pages/WaterConsultations';
import DigitalizingNepalWater from './pages/DigitalizingNepalWater';
import Blog2 from './pages/Blog2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPaani />} />
        <Route path="/predictive-modeling" element={<PredictiveModeling />} />
        <Route path="/digital-twin-models" element={<DigitalTwinModels />} />
        <Route path="/water-consultations" element={<WaterConsultations />} />
        <Route path="/digitalizing-nepal-water" element={<DigitalizingNepalWater />} />
        <Route path="/blog2" element={<Blog2 />} />

      </Routes>
    </Router>
  );
}

export default App;

