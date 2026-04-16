import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
// save it
import Smart_Home from './pages/Smart_Home';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Clients from './pages/Clients';
import Media from './pages/Media';
import Contact_Us from './pages/Contact_Us';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/smart-home" element={<Smart_Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact-us" element={<Contact_Us />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
