import React from 'react';
import Hero from '../components/home/Hero';
import USPBar from '../components/home/USPBar';
import ReelsStrip from '../components/products/ReelsStrip';
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

      {/* Reels placeholders — right below the trust strip */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 [&>section]:mb-0">
          <ReelsStrip />
        </div>
      </section>

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
