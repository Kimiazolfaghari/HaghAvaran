import React from 'react';
import  Header  from '../components/Header';
import  ActivitiesSection  from '../components/ActivitiesSection';
import  Footer  from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ActivitiesSection />
      <Footer />
    </div>
  );
};

export default ContactPage;