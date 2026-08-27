import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../shared/SectionHeading';

export default function Testimonials() {
  return (
    <section className="bg-card py-20 lg:py-32 border-b border-border relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          eyebrow="06 / Partners"
          title="Verified Buyer Testimonials"
          description="Experiences from our global retail purchasing partners and private label brands."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative border border-border bg-ivory p-8 lg:p-10 hover:border-leather/20 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-4xl font-serif text-border select-none leading-none">
                "
              </div>

              <p className="text-sm sm:text-base text-ink/80 italic font-serif leading-relaxed max-w-md">
                {t.quote}
              </p>

              <div className="mt-8 pt-6 border-t border-border-light flex justify-between items-end">
                <div>
                  <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">
                    {t.client_name}
                  </h4>
                  <p className="text-[10px] text-muted font-sans mt-1">
                    {t.company_name}
                  </p>
                </div>
                <span className="stamp border-leather/20 text-leather">
                  {t.country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { Testimonials };
