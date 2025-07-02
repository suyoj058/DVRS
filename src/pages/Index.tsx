import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import VehiclesSection from '@/components/VehiclesSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface IndexProps {
  onLogout: () => void;
}

const Index: React.FC<IndexProps> = ({ onLogout }) => {
  return (
    <>
      <Header onLogout={onLogout} />
      <Hero />
      <HowItWorks />
      <VehiclesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
