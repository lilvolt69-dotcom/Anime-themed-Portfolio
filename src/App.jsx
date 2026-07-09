import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Services from './components/Services';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Services />
      <ProjectCard />
      <Contact />
    </div>
  );
}
