
import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import RecentlyClaimed from '../components/RecentlyClaimed';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Testimonials />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <RecentlyClaimed />
      <Footer />
    </div>
  );
};

export default Index;
