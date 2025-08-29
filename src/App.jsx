import React from 'react';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <div className="App dark-theme min-h-screen">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
