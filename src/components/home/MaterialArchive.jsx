import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import useGsapReveal from '../../hooks/useGsapReveal';

export default function MaterialArchive() {
  const scopeRef = useRef(null);
  useGsapReveal(scopeRef);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" ref={scopeRef}>
      {/* Background image */}
      <img
        src="/products/materials-leather-rolls.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-ink/60" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left - Content */}
          <div className="lg:col-span-6 space-y-6" data-reveal>
            <SectionHeading
              eyebrow="03 / Materials"
              title="Made for the Product. Ready for What's Next."
              align="left"
              inverted
            />

            <p className="text-lg font-serif text-ivory italic leading-relaxed">
              A backpack, an office bag and a travel duffel are built for different purposes. So the material cannot be one-size-fits-all.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              At Zycoon, we work with a wide range of materials and combinations, selected according to the design, durability, weight, functionality, finish and target price of each product.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              We carefully source our raw materials, develop and manufacture our products in-house, and continuously evaluate what works best for the product and the market.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              Because good bags start with the right materials — and the right material starts with understanding the product.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
