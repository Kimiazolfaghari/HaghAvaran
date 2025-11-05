import React from 'react';
import  Header  from '../components/Header';
import  ContactSection  from '../components/ContactSection';
import  Footer  from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;