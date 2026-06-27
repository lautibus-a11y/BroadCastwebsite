import React, { useState, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

import { InteractiveGlow, CinematicLoader } from './components/ui';
import { Navbar, Footer } from './components/layout';
import { HeroSection, ClientsSection, ServicesSection, ProjectsSection } from './components/sections/HomeSections';

// Lazy load sections below the fold for performance
const ProcessSection = React.lazy(() => import('./components/sections/AgencySections').then(module => ({ default: module.ProcessSection })));
const WhyUsSection = React.lazy(() => import('./components/sections/AgencySections').then(module => ({ default: module.WhyUsSection })));
const AboutSection = React.lazy(() => import('./components/sections/AgencySections').then(module => ({ default: module.AboutSection })));
const TeamSliderSection = React.lazy(() => import('./components/sections/AgencySections').then(module => ({ default: module.TeamSliderSection })));
const SocialFloat = React.lazy(() => import('./components/sections/AgencySections').then(module => ({ default: module.SocialFloat })));

const TechStackSection = React.lazy(() => import('./components/sections/InfoSections').then(module => ({ default: module.TechStackSection })));
const TestimonialsSection = React.lazy(() => import('./components/sections/InfoSections').then(module => ({ default: module.TestimonialsSection })));
const FAQSection = React.lazy(() => import('./components/sections/InfoSections').then(module => ({ default: module.FAQSection })));
const ContactSection = React.lazy(() => import('./components/sections/InfoSections').then(module => ({ default: module.ContactSection })));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CinematicLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#050505] text-[#F5F3EE] selection:bg-[#8AFF00] selection:text-[#050505]">
        <InteractiveGlow />
        <Navbar />

        <main>
          <HeroSection />
          <ClientsSection />
          <ServicesSection />
          <ProjectsSection />

          <Suspense fallback={<div className="min-h-screen" />}>
            <ProcessSection />
            <WhyUsSection />
            <AboutSection />
            <TeamSliderSection />
            <SocialFloat />
            <TechStackSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}