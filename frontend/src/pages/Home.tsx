import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Stats from '../components/Stats';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Stats />
    </main>
  );
};

export default Home;