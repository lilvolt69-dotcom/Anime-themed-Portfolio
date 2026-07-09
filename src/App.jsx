import React from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Tools      from './components/Tools';
import Services   from './components/Services';
import ProjectCard from './components/ProjectCard';
import Connect    from './components/Connect';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tools />
        <Services />
        <ProjectCard />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
