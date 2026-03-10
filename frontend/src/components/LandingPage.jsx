import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#efefef] overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
