import React from 'react';
import Hero from '../components/home/Hero';
import USPBar from '../components/home/USPBar';
import LeatherNotebookArchive from '../components/home/LeatherNotebookArchive';
import MaterialArchive from '../components/home/MaterialArchive';
import MarketMovement from '../components/home/MarketMovement';
import MaterialToProduct from '../components/home/MaterialToProduct';
import BuiltForToday from '../components/home/BuiltForToday';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <USPBar />
      <LeatherNotebookArchive />
      <MaterialArchive />
      <MarketMovement />
      <MaterialToProduct />
      <BuiltForToday />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
export { Home };
