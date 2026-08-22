import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import { B2B_CONFIG } from '../../utils/helpers';
import Button from '../shared/Button';

export default function Hero() {
  return (
    <section className="relative bg-primary-dark border-b border-gold/15 text-ivory py-20 lg:py-32 overflow-hidden">
      
      {/* Background Subtle Accent Box */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Copy & CTA (60% equivalent) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="inline-block text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-gold">
              Established {B2B_CONFIG.yearsInBusiness} Years Ago · Wholesale & Export
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-ivory">
              Crafted in Leather.<br />
              <span className="text-gold">Trusted Across Borders.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted font-sans font-light leading-relaxed max-w-xl">
              {B2B_CONFIG.brandName} manufactures and exports premium leather bags to wholesalers, retailers, and corporate buyers in {B2B_CONFIG.countriesExported} countries. We specialize in OEM/ODM private-label capabilities with MOQs starting at just 50 units.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products">
                <Button variant="primary" className="flex items-center">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Button>
              </Link>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Downloading wholesale catalog PDF file...');
                }}
              >
                <Button variant="outline-gold" className="flex items-center">
                  <FileDown className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Download Catalogue
                </Button>
              </a>
            </div>
            
            {/* Quick trust seals */}
            <div className="pt-6 border-t border-gold/10 flex flex-wrap gap-x-8 gap-y-3 text-[10px] uppercase tracking-wider text-muted font-sans">
              <div><strong className="text-gold font-semibold">Incoterms:</strong> FOB Kolkata & CIF</div>
              <div><strong className="text-gold font-semibold">Tannery Status:</strong> LWG Gold Certified</div>
              <div><strong className="text-gold font-semibold">Audited:</strong> Sedex SMETA Member</div>
            </div>
          </motion.div>

          {/* Right Column - Editorial Graphic Swatch Blocks (40% equivalent) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative h-[380px] sm:h-[450px] flex items-center justify-center"
          >
            {/* Swatch 1: Oxblood Leather base */}
            <div className="absolute top-8 left-8 w-4/5 h-[300px] bg-primary leather-grain border border-gold/20 shadow-2xl flex flex-col justify-between p-6">
              <span className="text-[10px] font-mono tracking-widest text-gold/60 uppercase">
                Swatch: Oxblood Burgundy Calfskin
              </span>
              <div className="space-y-1">
                <p className="text-[11px] font-sans tracking-[0.2em] uppercase text-gold">Grade-A Leather</p>
                <p className="text-[9px] font-mono text-ivory/50">LWG Environmental Code: WH-029</p>
              </div>
            </div>

            {/* Swatch 2: Cognac Leather overlay */}
            <div className="absolute bottom-8 right-8 w-3/5 h-[220px] bg-cognac leather-grain border border-gold/30 shadow-2xl flex flex-col justify-between p-6 transform translate-x-4 translate-y-4">
              <span className="text-[10px] font-mono tracking-widest text-ivory/70 uppercase">
                Swatch: Saddle Cognac
              </span>
              <div>
                <p className="text-[10px] font-serif tracking-[0.1em] text-ivory">Westmere Tanning</p>
                <div className="w-8 h-[1px] bg-gold/50 my-1.5" />
                <p className="text-[8px] font-mono text-ivory/60">Grain thickness: 1.8 - 2.0 mm</p>
              </div>
            </div>

            {/* Accent Gold framing bracket */}
            <div className="absolute inset-0 border border-gold/10 pointer-events-none m-4 translate-x-2 -translate-y-2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-dark/95 border border-gold/30 py-3 px-6 shadow-xl text-center backdrop-blur-sm z-10">
              <p className="text-[9px] font-sans tracking-[0.25em] text-gold uppercase font-bold">Factory Direct</p>
              <p className="text-xs font-serif text-ivory tracking-wide mt-1">Zero Middleman Markup</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
export { Hero };
