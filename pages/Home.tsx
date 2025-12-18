import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';

const Home: React.FC = () => {
  return (
    <main className="bg-zinc-950">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectList />
    </main>
  );
};

export default Home;