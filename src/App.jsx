import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import MemoriesPP from './projects/Memories/PP';
import MemoriesTC from './projects/Memories/TC';
import MaxxedPP from './projects/Maxxed/PP';
import MaxxedTC from './projects/Maxxed/TC';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Memories Project Routes */}
          <Route path="/memories/privacy-policy" element={<MemoriesPP />} />
          <Route path="/memories/terms-conditions" element={<MemoriesTC />} />

          {/* Maxxed Project Routes */}
          <Route path="/maxxed/privacy-policy" element={<MaxxedPP />} />
          <Route path="/maxxed/terms-conditions" element={<MaxxedTC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
