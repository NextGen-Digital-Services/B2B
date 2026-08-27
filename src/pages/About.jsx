import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import { B2B_CONFIG } from '../utils/helpers';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory"
    >
      {/* Hero */}
      <section className="bg-ink py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 leather-grain opacity-20 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <span className="stamp text-ivory/40 border-ivory/15 mb-6 inline-block">Our Legacy</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory leading-[1.05] max-w-3xl">
            Artisanal Heritage Backed by Global Industrial Capacity
          </h1>
          <p className="mt-6 text-sm text-ivory/50 font-light max-w-2xl leading-relaxed">
            Since 2008, {B2B_CONFIG.brandName} has supplied luxury fashion brands, high-street retail chains, and boutique distributors worldwide with premium manufactured leather bags.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              eyebrow="Tannery Sourcing"
              title="Only LWG Gold-Standard Tanneries"
              description="Quality leather starts at the farm and the tannery. We source our raw cowhides exclusively from audited tanneries with Gold-ratings from the Leather Working Group."
            />
            <p className="text-sm text-muted leading-relaxed font-light">
              This guarantees that the leather has been produced using minimal water, zero hazardous tanning chemicals (conformant to EU REACH standards), and completely audited water filtration systems. We sort hides by hand to isolate top-grain layers.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l border-leather/30 pl-4 space-y-1">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">Chromium VI Compliant</h4>
                <p className="text-[11px] text-muted leading-relaxed">No skin-irritant salts present in the final dyed leather sheets.</p>
              </div>
              <div className="border-l border-leather/30 pl-4 space-y-1">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">Azo-Free Dyeing</h4>
                <p className="text-[11px] text-muted leading-relaxed">Pure, organic chemical pigment chains for intense, long-lasting coloration.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-center">
            <div className="absolute inset-4 border border-border pointer-events-none" />
            <div className="absolute top-4 left-4 w-2/3 h-[240px] bg-espresso leather-grain p-6 flex flex-col justify-between text-ivory">
              <span className="text-[9px] font-mono tracking-widest text-ivory/50 uppercase">Workshop Division</span>
              <div>
                <p className="text-sm font-serif">Kolkata Production Office</p>
                <p className="text-[10px] text-ivory/50 mt-1">25,000 Sq. Ft. Floor Area</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-1/2 h-[180px] bg-leather leather-grain p-6 flex flex-col justify-between text-ivory">
              <span className="text-[9px] font-mono tracking-widest text-ivory/60 uppercase">Daily Capacity</span>
              <div>
                <p className="text-xl font-serif">500+ bags</p>
                <p className="text-[9px] text-ivory/60 mt-1">Precision Stitched & Edged</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="bg-card border-y border-border py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Craftsmanship"
            title="The Mechanics of Our Sewing Lines"
            description="A luxury leather bag is only as strong as its reinforcement layers and sewing threads."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {[
              { title: 'Bonded Nylon Threads', desc: 'High-tensile bonded nylon threads size 40 or 60. Will not rot, fray, or snap when subjected to humidity or tension.' },
              { title: 'Edge-Skiving & Lacquering', desc: 'Hide edges skived down by fractions of a millimeter, then sealed with three coats of premium Italian edge lacquer.' },
              { title: 'Internal Reinforcements', desc: 'Custom microfiber backing, salpa, or high-density foam based on rigidity specifications of the design.' },
            ].map((item, i) => (
              <div key={i} className="bg-ivory border border-border p-8 space-y-4">
                <h3 className="text-sm font-serif text-ink uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10 text-center space-y-8">
        <span className="stamp text-leather border-leather/30">Our Journey</span>
        <h2 className="text-3xl font-serif text-ink">Over a Decade of Export Excellence</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-left mt-12">
          {[
            { year: '2008', title: 'Founding', desc: 'Established Kolkata Leather Complex Workshop. Started with 12 manual artisans exporting small wallets.' },
            { year: '2014', title: 'ISO Audit', desc: 'Acquired ISO 9001:2015 QA Certification. Upgraded tooling to meet German calibration standards.' },
            { year: '2021', title: 'Green Transition', desc: 'LWG Environmental Sourcing Standard. Achieved 100% REACH chemical compliance.' },
          ].map((item, i) => (
            <div key={i} className="border-l border-leather/30 pl-6 pb-6 relative">
              <span className="absolute -left-[5px] top-1 w-2 h-2 bg-leather rounded-full" />
              <span className="text-[10px] font-mono font-medium text-leather uppercase tracking-wider">{item.year} — {item.title}</span>
              <h4 className="text-sm font-serif text-ink mt-1">{item.title}</h4>
              <p className="text-xs text-muted mt-1 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
