import React from 'react';
import  Header  from '../components/Header';
import  AboutSection  from '../components/AboutSection';
import  Footer  from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default ContactPage;