'use client'
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import WhyKashin from '@/components/WhyKashin';
import HowWeHelp from '@/components/HowWeHelp';
import NextSteps from '@/components/NextSteps';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-kashin-cream">
      <Hero />
      <WhatWeDo />
      <WhyKashin />
      <HowWeHelp />
      <NextSteps />
      <About />
      <ContactForm />

    </div>
  );
};

export default Index;
