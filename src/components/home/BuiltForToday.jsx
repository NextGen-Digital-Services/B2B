import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

export default function BuiltForToday() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <img
        src="/products/philosophy-brown-backpack.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-ink/50" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left - Content */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="06 / Philosophy"
              title="BUILT FOR TODAY. READY FOR TOMORROW."
              description="We design and manufacture bags that work now — and stay relevant longer."
              align="left"
              inverted
            />

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              Our approach to designing and manufacturing bags is rooted in one goal — creating products that work for the market, for the customer and for the person who carries it.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              From daily office use and weekend travel to long-distance journeys and outdoor trips, every bag is built to perform across routines and occasions.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              We focus on durability, function, finish and design — because a good bag must feel right from the first day and stay that way for years.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              And as markets evolve, so do we. We continuously develop new designs, explore better materials, and refine features to meet what's next.
            </p>
          </div>

          {/* Right - Statement */}
          <div className="lg:col-span-5">
            <div className="border border-ivory/20 p-8 lg:p-10 text-center">
              <p className="text-3xl lg:text-4xl font-serif italic text-ivory leading-tight">
                Quality and market relevance don't have to compete.
              </p>
              <div className="w-10 h-px bg-gold mx-auto my-5" />
              <p className="text-xs text-ivory/50 font-sans tracking-[0.15em] uppercase">
                We make sure they work together
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
