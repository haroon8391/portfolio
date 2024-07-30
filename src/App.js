import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path="/projects" element={Projects} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
