import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Stats />
      <Footer />

    </main>
  );
};

export default Home;