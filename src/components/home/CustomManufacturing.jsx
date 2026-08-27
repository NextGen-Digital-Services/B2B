import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';

const services = [
  'OEM Manufacturing',
  'ODM Design',
  'Private Label',
  'Corporate Gifts',
];

const processSteps = [
  { from: 'Plain Bag', to: 'Custom Leather' },
  { from: 'Custom Leather', to: 'Custom Hardware' },
  { from: 'Custom Hardware', to: 'Your Logo' },
  { from: 'Your Logo', to: 'Final Product' },
];

export default function CustomManufacturing() {
  return (
    <section className="bg-card py-20 lg:py-32 border-b border-border relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left - Statement */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              eyebrow="04 / Custom"
              title="Your Brand. Our Craft."
              description="Full OEM/ODM design flexibility for brands, retailers, and corporate buyers seeking premium leather manufacturing."
              align="left"
            />

            {/* Services */}
            <div className="flex flex-wrap gap-3">
              {services.map((service, i) => (
                <span key={i} className="stamp border-leather/30 text-leather">
                  {service}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted font-light leading-relaxed max-w-lg">
              Emboss your brand logo, order custom-plated metallic zip sliders, or select bespoke jacquard lining fabrics. We handle everything from CAD prototyping to final production.
            </p>

            <Link to="/custom-manufacturing">
              <Button variant="primary" className="flex items-center group mt-4">
                Start a Custom Project
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>

          {/* Right - Transformation Process */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group flex items-center space-x-4 p-5 border border-border bg-ivory hover:border-leather/30 transition-all duration-300"
                >
                  <span className="section-number text-lg flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-xs font-mono text-muted tracking-wider uppercase">
                      {step.from}
                    </span>
                    <div className="w-16 h-px bg-border relative mx-4">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[4px] border-l-border border-y-[3px] border-y-transparent" />
                    </div>
                    <span className="text-xs font-mono font-medium text-ink tracking-wider uppercase">
                      {step.to}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual progression bar */}
            <div className="mt-8 p-6 border border-border bg-ivory">
              <div className="flex items-center justify-between text-[9px] text-muted font-mono uppercase tracking-[0.15em] mb-4">
                <span>Plain</span>
                <span>Custom</span>
                <span>Branded</span>
                <span>Final</span>
              </div>
              <div className="h-1 bg-border/40 relative">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-border via-leather to-ink" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
