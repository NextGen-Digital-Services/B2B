import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Ship, FileCheck, Landmark } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import useSplitReveal from '../hooks/useSplitReveal';
import { B2B_CONFIG } from '../utils/helpers';

export default function ExportWholesale() {
  const splitRef = useRef(null);
  useSplitReveal(splitRef);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      <section ref={splitRef} className="bg-ivory border-b border-border py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 leather-grain opacity-10 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <span className="stamp text-muted border-border mb-6 inline-block">Global Trade Logistics</span>
          <h1 data-split className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05] max-w-3xl">
            Wholesale Logistics & Shipping Framework
          </h1>
          <p className="mt-6 text-sm text-muted font-light max-w-2xl leading-relaxed">
            Operating as an experienced exporter to {B2B_CONFIG.countriesExported} countries with streamlined customs clearances.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Delivery Terms"
          title="FOB Mumbai & CIF Arrangements"
          description="We support international standards to ensure risk transfer is clearly documented at every checkpoint."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {[
            { icon: Ship, title: 'FOB Mumbai Port', desc: 'Standard pricing covers transport to Mumbai (Nhava Sheva) port, local export clearances, and carrier loading fees.' },
            { icon: Ship, title: 'CIF (Cost, Insurance & Freight)', desc: 'We arrange ocean transit to your target destination port with insurance under Institute Cargo Clauses.' },
          ].map((term, idx) => (
            <div key={idx} className="border border-border bg-card p-8 hover:border-leather/30 transition-colors">
              <term.icon className="w-6 h-6 text-leather mb-6" strokeWidth={1.5} />
              <h3 className="text-base font-serif text-ink uppercase tracking-wider mb-3">{term.title}</h3>
              <p className="text-xs text-muted leading-relaxed font-light">{term.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <Landmark className="w-5 h-5 text-leather" strokeWidth={1.5} />
                <h3 className="text-lg font-serif text-ink uppercase tracking-wider">Payment Terms</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l border-leather/30 pl-4 space-y-1">
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">30% Advance + 70% Balance</h4>
                  <p className="text-[11px] text-muted leading-relaxed">30% via T/T. Remaining 70% upon Bill of Lading submission.</p>
                </div>
                <div className="border-l border-leather/30 pl-4 space-y-1">
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">Irrevocable L/C</h4>
                  <p className="text-[11px] text-muted leading-relaxed">For orders exceeding $50,000 via recognized A-grade banks.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <FileCheck className="w-5 h-5 text-leather" strokeWidth={1.5} />
                <h3 className="text-lg font-serif text-ink uppercase tracking-wider">Export Documentation</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink">
                {['Commercial Invoice', 'Packing List', 'Bill of Lading', 'Certificate of Origin', 'GSP Form A', 'REACH Declaration'].map((doc, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1 h-1 bg-leather rounded-full mr-2.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
