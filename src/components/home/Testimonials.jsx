import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../shared/SectionHeading';

export default function Testimonials() {
  return (
    <section className="bg-[#FAF5EC] py-20 lg:py-28 border-b border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="International Partnerships"
          title="Verified Buyer Testimonials"
          description="Read experiences from our global retail purchasing partners, private label brands, and corporate sourcing officers."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card border border-border p-8 flex flex-col justify-between relative rounded-[2px]"
            >
              {/* Quote icon as background */}
              <Quote className="absolute right-6 top-6 w-8 h-8 text-gold/15 pointer-events-none" strokeWidth={1} />
              
              <div>
                <p className="text-sm sm:text-base text-charcoal italic leading-relaxed font-light">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex justify-between items-end">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {t.client_name}
                  </h4>
                  <p className="text-xs text-muted font-sans font-medium mt-0.5">
                    {t.company_name}
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-mono font-bold bg-[#FAF5EC] border border-border py-1 px-3 rounded-[2px]">
                  {t.country}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export { Testimonials };
