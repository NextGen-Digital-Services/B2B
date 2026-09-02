import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import AnimatedNumber from '../shared/AnimatedNumber';

const trustPoints = [
  { value: '100+', label: 'MOQ', sublabel: 'Minimum Order' },
  { value: '19+', label: 'Pan India', sublabel: 'Cities Served' },
  { value: '35+', label: 'Markets', sublabel: 'Countries Exported' },
  { value: '19+', label: 'Years', sublabel: 'Of Craft' },
];

const features = [
  'Prototype Availability',
  'Custom Packaging',
  'Private Labelling',
  'Quality Control',
  'Worldwide Shipping',
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory py-20 lg:py-32 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="05 / Trust"
          title="Engineered for International Trade"
          description="Reliable manufacturing partner for global retail chains, boutique distributors, and corporate gift houses."
          align="center"
        />

        {/* Trust Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">
          {trustPoints.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center group"
            >
              <AnimatedNumber
                value={parseInt(pt.value, 10) || 0}
                suffix={pt.value.replace(/[\d,]/g, '')}
                className="block text-4xl lg:text-5xl font-serif font-bold text-ink group-hover:text-leather transition-colors duration-500"
              />
              <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-ink mt-3">
                {pt.label}
              </span>
              <span className="block text-[9px] font-mono text-muted tracking-wider mt-1">
                {pt.sublabel}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Features list */}
        <div className="mt-16 pt-12 border-t border-border flex flex-wrap justify-center gap-x-10 gap-y-4">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-1.5 h-px bg-leather" />
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-muted">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { WhyChooseUs };
