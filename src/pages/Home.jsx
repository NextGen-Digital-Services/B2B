import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      <Hero />
      <USPBar />
      <LeatherNotebookArchive />
      <MaterialArchive />
      <ManufacturingCapability />
      <CustomManufacturing />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
}
export { Home };
