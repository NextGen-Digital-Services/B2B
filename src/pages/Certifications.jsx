import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { certifications } from '../data/certifications';
import SectionHeading from '../components/shared/SectionHeading';
import useSplitReveal from '../hooks/useSplitReveal';

export default function Certifications() {
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
          <span className="stamp text-muted border-border mb-6 inline-block">Verified Standards</span>
          <h1 data-split className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05] max-w-3xl">
            International Compliance & Certifications
          </h1>
          <p className="mt-6 text-sm text-muted font-light max-w-2xl leading-relaxed">
            We undergo routine third-party audits to verify chemical safety, structural quality controls, and fair workplace operations.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Verification"
          title="Direct Audit Compliance Standards"
          description="We provide official registration files and test reports with your initial bulk order invoicing."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {certifications.map((c) => (
            <div
              key={c.id}
              className="group border border-border bg-card p-8 hover:border-leather/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-leather">
                    <Award className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="stamp border-leather/30 text-leather">
                    {c.badgeText}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif text-ink uppercase tracking-wider">
                    {c.name}
                  </h3>
                  <p className="text-[10px] text-muted font-mono uppercase tracking-wider">
                    Audited by: {c.authority}
                  </p>
                </div>
                <p className="text-xs text-muted leading-relaxed font-light">
                  {c.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light w-full flex items-center text-[10px] text-leather font-medium uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 mr-2" strokeWidth={1.5} />
                <span>Verified: {c.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <ShieldCheck className="w-8 h-8 text-leather mx-auto" strokeWidth={1.5} />
          <h3 className="text-2xl font-serif text-ink">Lab Testing & Chemical Traceability</h3>
          <p className="text-sm text-muted leading-relaxed font-light">
            All raw hides are tested for heavy metals and banned aromatic amines before processing. Final bags are regularly tested by accredited laboratories (SGS or Intertek) for formal REACH compliance.
          </p>
          <span className="text-[10px] uppercase tracking-wider text-muted font-medium block">
            Test Reports Available Upon Request
          </span>
        </div>
      </section>
    </motion.div>
  );
}
