import React, { useState, useEffect } from 'react';
import './assets/css/Main.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavFooter from './Components/NavFooter';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-overlay">
          <div className="loader"></div>
          <img src="images/logo.png" alt="Logo" className="loading-logo" />
        </div>
      ) : (
        <div className="content-wrapper">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <NavFooter />
        </div>
      )}
    </div>
  );
}

export default App;
