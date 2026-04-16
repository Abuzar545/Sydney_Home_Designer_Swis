import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Services from './Pages/Service';
// import Smart_Home from './Pages/Smart_Home';
// import Project from './Pages/Project';
// import Certificate from './Pages/Certificate';
// import Clients from './Pages/Clients';
// import Media from './Pages/Media';
// import Contact_Us from './Pages/Contact_Us';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Smart_Home from './Pages/Smart_Home';
import Project from './Pages/Project';
import Certificate from './Pages/Certificate';
import Clients from './Pages/Clients';
import Media from './Pages/Media';
import Contact_Us from './Pages/Contact_Us';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
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
