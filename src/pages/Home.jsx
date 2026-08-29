import React from 'react';
import Hero from '../components/home/Hero';
import USPBar from '../components/home/USPBar';
import LeatherNotebookArchive from '../components/home/LeatherNotebookArchive';
import MaterialArchive from '../components/home/MaterialArchive';
import ManufacturingCapability from '../components/home/ManufacturingCapability';
import CustomManufacturing from '../components/home/CustomManufacturing';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <USPBar />
      <LeatherNotebookArchive />
      <MaterialArchive />
      <ManufacturingCapability />
      <CustomManufacturing />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}
export { Home };
