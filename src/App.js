import React from 'react';
import './assets/css/Main.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavFooter from './Components/NavFooter';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Hero />
      <Skills />
      <Projects />
       <Contact />
      <Footer />
      <NavFooter/>
    </div>
  );
}

export default App;
