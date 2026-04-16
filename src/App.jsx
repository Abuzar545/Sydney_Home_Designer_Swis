import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Service from './Pages/Service.jsx';
import Smart_Home from './Pages/Smart_Home.jsx';
import Project from './Pages/Project.jsx';
import Certificate from './Pages/Certificate.jsx';
import Clients from './Pages/Clients.jsx';
import Media from './Pages/Media.jsx';
import Contact_Us from './Pages/Contact_Us.jsx';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/smart-home" element={<Smart_Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/media" element={<Media/>} />
        <Route path="/contact-us" element={<Contact_Us/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
