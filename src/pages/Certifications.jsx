import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { certifications } from '../data/certifications';
import SectionHeading from '../components/shared/SectionHeading';

export default function Certifications() {
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
            Verified Standards
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-ivory mt-4 max-w-3xl leading-tight">
            International Compliance & Certifications
          </h1>
          <p className="mt-6 text-sm sm:text-base text-muted font-light max-w-2xl leading-relaxed">
            We undergo routine third-party audits to verify chemical safety, structural quality controls, and fair workplace operations.
          </p>
        </div>
      </section>

      {/* Grid Certifications list */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Verification badges"
          title="Direct Audit Compliance Standards"
          description="We provide official registration files and test reports with your initial bulk order invoicing."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certifications.map((c) => (
            <div
              key={c.id}
              className="bg-card border border-border p-8 hover:border-gold/30 transition-colors flex flex-col justify-between items-start rounded-[2px]"
            >
              <div className="w-full space-y-4">
                
                {/* Header info */}
                <div className="flex justify-between items-start w-full">
                  <div className="bg-[#FAF5EC] border border-border p-2.5 rounded-[2px] text-cognac">
                    <Award className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-gold bg-primary-dark/95 border border-gold/30 py-1 px-3.5 rounded-[2px] font-bold">
                    {c.badgeText}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-serif text-primary uppercase mt-2 tracking-wide">
                    {c.name}
                  </h3>
                  <p className="text-[10px] text-muted font-sans font-bold uppercase tracking-wider">
                    Audited by: {c.authority}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed font-light">
                  {c.description}
                </p>

              </div>

              {/* Verified badge seal */}
              <div className="mt-6 pt-4 border-t border-border/60 w-full flex items-center text-[10px] text-cognac font-bold uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 mr-2" strokeWidth={1.5} />
                <span>Verified scope: {c.scope}</span>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Lab testing standards section */}
      <section className="bg-card border-t border-b border-border py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <div className="bg-[#FAF5EC] border border-border p-3 rounded-full text-cognac inline-block">
            <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-serif text-primary uppercase">Lab Testing & Chemical Traceability</h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
            All raw hides are tested for the presence of heavy metals and banned aromatic amines before processing. Our tanneries use automated dosing mixers to verify chemical thresholds, and our final bags are regularly tested by accredited laboratories (SGS or Intertek) to issue formal REACH test conformity tables.
          </p>
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
              Test Reports Available Upon Request
            </span>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
export { Certifications };
