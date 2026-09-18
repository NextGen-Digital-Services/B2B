import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

export default function MaterialToProduct() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <img
        src="/products/process-sewing.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-ink/55" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left - Content */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="05 / Process"
              title="FROM MATERIAL TO FINISHED PRODUCT"
              description="We don't just supply bags. We make them."
              align="left"
              inverted
            />

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              We don't buy and resell. We manufacture. Every bag we deliver starts as raw material and goes through every stage of production under our roof.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              Sourcing the right material. Cutting it with precision. Stitching every panel. Adding hardware, lining and labels. Checking quality at every stage. Packaging it for delivery.
            </p>

            <p className="text-sm text-ivory/70 font-light leading-relaxed">
              This manufacturing process allows us to manage quality at every stage — from raw material to finished product.
            </p>
          </div>

          {/* Right - Steps */}
          <div className="lg:col-span-5">
            <div className="space-y-6 text-ivory">
              {[
                { step: '01', label: 'Material Sourcing' },
                { step: '02', label: 'Cutting' },
                { step: '03', label: 'Stitching' },
                { step: '04', label: 'Finishing' },
                { step: '05', label: 'Export Packaging' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-6 group">
                  <span className="text-xs font-sans font-medium tracking-[0.2em] text-gold shrink-0">{item.step}</span>
                  <div className="h-px bg-ivory/20 flex-1 transition-colors group-hover:bg-gold" />
                  <span className="text-sm text-ivory font-light">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
