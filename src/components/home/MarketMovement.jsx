import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

export default function MarketMovement() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <img
        src="/products/approach-black-backpack.jpg"
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
              eyebrow="04 / Market"
              title="WE KEEP MOVING WITH THE MARKET"
              description="Fashion changes. Customer preferences change. Products change. We change with them."
              align="left"
              inverted
            />

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              Our approach is simple: watch the market, understand what people want, and turn those ideas into products.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              From new materials and finishes to changing shapes, colours and functions, we continuously develop new styles across backpacks, travel bags, office bags, business bags and more.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              When the market moves, Zycoon moves with it.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              Our manufacturing experience allows us to take new ideas from concept to product with speed, consistency and attention to detail — helping our customers stay relevant without compromising on the quality of the finished product.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
