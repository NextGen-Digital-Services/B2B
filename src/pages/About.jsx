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
      className="flex-grow bg-ivory font-sans"
    >
      
      {/* Editorial Header */}
      <section className="bg-primary-dark text-ivory py-20 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-ivory mt-4 max-w-3xl leading-tight">
            Artisanal Heritage Backed by Global Industrial Capacity
          </h1>
          <p className="mt-6 text-sm sm:text-base text-muted font-light max-w-2xl leading-relaxed">
            Since 2008, {B2B_CONFIG.brandName} has supplied luxury fashion brands, high-street retail chains, and boutique distributors worldwide with premium manufactured leather bags.
          </p>
        </div>
      </section>

      {/* Grid Content: Story & Tannery */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sourcing & Tanning */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              eyebrow="Tannery sourcing"
              title="Only LWG Gold-Standard Tanneries"
              description="Quality leather starts at the farm and the tannery. We source our raw cowhides exclusively from audited tanneries with Gold-ratings from the Leather Working Group (LWG)."
            />
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
              This guarantees that the leather you buy has been produced using minimal water, zero hazardous tanning chemicals (conformant to EU REACH standards), and completely audited water filtration systems. We sort hides by hand to isolate top-grain layers, ensuring uniform thickness and high structural tensile strength for finished seams.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l border-gold/40 pl-4 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Chromium VI Compliant</h4>
                <p className="text-[11px] text-muted leading-relaxed">Ensuring no skin-irritant salts are present in the final dyed leather sheets.</p>
              </div>
              <div className="border-l border-gold/40 pl-4 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Azo-Free Dyeing</h4>
                <p className="text-[11px] text-muted leading-relaxed">Using pure, organic chemical pigment chains for intense, long-lasting hide coloration.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Graphic Color Blocks */}
          <div className="lg:col-span-6 relative h-[360px] flex items-center justify-center lg:mt-6">
            <div className="absolute inset-4 border border-gold/20 m-2 pointer-events-none" />
            
            {/* Oxblood swatch card */}
            <div className="absolute top-4 left-4 w-2/3 h-[240px] bg-primary leather-grain border border-gold/15 shadow-xl p-6 flex flex-col justify-between text-ivory">
              <span className="text-[9px] font-mono tracking-widest text-gold/80 uppercase">Workshop Division</span>
              <div>
                <p className="text-sm font-serif">Kolkata Production Office</p>
                <p className="text-[10px] text-gold mt-1">25,000 Sq. Ft. Floor Area</p>
              </div>
            </div>
            
            {/* Cognac swatch card */}
            <div className="absolute bottom-4 right-4 w-1/2 h-[180px] bg-cognac leather-grain border border-gold/20 shadow-xl p-6 flex flex-col justify-between text-ivory">
              <span className="text-[9px] font-mono tracking-widest text-ivory/70 uppercase">Daily Capacity</span>
              <div>
                <p className="text-xl font-serif">500+ bags</p>
                <p className="text-[9px] text-ivory/70 mt-1">Precision Stitched & Edged</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Manufacturing Core Section */}
      <section className="bg-card border-t border-b border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Craftsmanship specs"
            title="The Mechanics of Our Sewing Lines"
            description="A luxury leather bag is only as strong as its reinforcement layers and sewing threads. We engineer every point of stress."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            {/* Thread selection */}
            <div className="bg-ivory border border-border p-8 rounded-[2px] space-y-4">
              <h3 className="text-base font-serif text-primary uppercase tracking-wider">Bonded Nylon Threads</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                We stitch using high-tensile bonded nylon threads size 40 or 60. Unlike cotton-blended threads, bonded nylon will not rot, fray, or snap when subjected to humidity, dry heat, or tension.
              </p>
            </div>

            {/* Skiving */}
            <div className="bg-ivory border border-border p-8 rounded-[2px] space-y-4">
              <h3 className="text-base font-serif text-primary uppercase tracking-wider">Edge-Skiving & Lacquering</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Before joining, hide edges are skived down by fractions of a millimeter. This prevents bulky seams. Edges are then sealed with three coats of premium Italian edge lacquer, hand-sanded between applications.
              </p>
            </div>

            {/* Reinforced layers */}
            <div className="bg-ivory border border-border p-8 rounded-[2px] space-y-4">
              <h3 className="text-base font-serif text-primary uppercase tracking-wider">Internal Reinforcements</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Bags require internal support to maintain shape. We select custom microfiber backing, salpa (leather board), or high-density foam based on the rigidity specifications of the design.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-cognac">
          Our Journey
        </span>
        <h2 className="text-3xl font-serif text-primary">Over a Decade of Export Excellence</h2>
        
        <div className="max-w-3xl mx-auto space-y-8 text-left mt-12">
          
          <div className="border-l border-gold/40 pl-6 pb-6 relative">
            <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 bg-gold border border-primary-dark rounded-full" />
            <span className="text-xs font-mono font-bold text-cognac">2008 — FOUNDING</span>
            <h4 className="text-sm font-serif text-primary mt-1">Established Kolkata Leather Complex Workshop</h4>
            <p className="text-xs text-muted mt-1 font-light">Started operations with 12 manual artisans exporting small wallets to neighboring markets.</p>
          </div>

          <div className="border-l border-gold/40 pl-6 pb-6 relative">
            <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 bg-gold border border-primary-dark rounded-full" />
            <span className="text-xs font-mono font-bold text-cognac">2014 — ISO AUDIT</span>
            <h4 className="text-sm font-serif text-primary mt-1">Acquired ISO 9001:2015 QA Certification</h4>
            <p className="text-xs text-muted mt-1 font-light">Upgraded our tooling and skiving lines to meet automated German calibration standards, opening entry to the European retail sector.</p>
          </div>

          <div className="border-l border-gold/40 pl-6 relative">
            <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 bg-gold border border-primary-dark rounded-full" />
            <span className="text-xs font-mono font-bold text-cognac">2021 — GREEN TRANSITION</span>
            <h4 className="text-sm font-serif text-primary mt-1">LWG Environmental Sourcing Standard</h4>
            <p className="text-xs text-muted mt-1 font-light">Aligned our supply chain with tanneries using solar grid and wastewater reclamation systems, achieving 100% REACH chemical compliance.</p>
          </div>

        </div>
      </section>

    </motion.div>
  );
}
export { About };
