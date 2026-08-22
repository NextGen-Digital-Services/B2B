import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import USPBar from '../components/home/USPBar';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ManufacturingCapability from '../components/home/ManufacturingCapability';
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
      <FeaturedCategories />
      <ManufacturingCapability />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
}
export { Home };
