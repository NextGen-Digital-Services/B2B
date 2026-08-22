import React from 'react';
import useCounter from '../../hooks/useCounter';
import SectionHeading from '../shared/SectionHeading';
import { B2B_CONFIG } from '../../utils/helpers';

// Helper component to trigger count-up on scroll per item
function StatItem({ target, label, suffix = '' }) {
  const { ref, count } = useCounter(target);
  
  // Format numbers nicely
  const displayCount = target.includes(',') 
    ? count.toLocaleString('en-US') 
    : count;

  return (
    <div
      ref={ref}
      className="bg-card border border-border p-8 flex flex-col justify-between items-center text-center relative overflow-hidden rounded-[2px]"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gold/30" />
      <span className="text-4xl md:text-5xl font-serif text-primary font-bold">
        {displayCount}{suffix}
      </span>
      <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-muted mt-3">
        {label}
      </span>
    </div>
  );
}

export default function ManufacturingCapability() {
  return (
    <section className="bg-[#FBF8F3] py-20 lg:py-28 border-b border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block - Statement & Workflow (7/12 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Tannery & Workshop"
              title="Industrial Scale. Artisanal Precision."
              description="Operating from our state-of-the-art Kolkata production complex, we manage the entire leather sourcing, cutting, splitting, reinforcement, and hardware installation chain under one roof."
              align="left"
            />
            
            <p className="text-sm text-muted font-light leading-relaxed">
              We tan leather under LWG Gold guidelines, ensuring that water reclamation and chemical regulations align with strict EU and US standards. Our stitching lines utilize modern heavy-duty sewing systems to achieve consistent seam alignment and tension, even on triple-layer structural joins.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary text-gold text-xs font-mono font-bold w-6 h-6 flex items-center justify-center rounded-[2px] mt-1 mr-4">
                  01
                </span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Design & CAD Prototyping</h4>
                  <p className="text-xs text-muted mt-1">We turn paper drafts or physical samples into clean production pattern templates within 7 days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary text-gold text-xs font-mono font-bold w-6 h-6 flex items-center justify-center rounded-[2px] mt-1 mr-4">
                  02
                </span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Precision Die-Cutting & Skiving</h4>
                  <p className="text-xs text-muted mt-1">Ensures exact edge thicknesses for smooth leather folds, clean hand-painted lacquer finishes, and zero seam bulk.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary text-gold text-xs font-mono font-bold w-6 h-6 flex items-center justify-center rounded-[2px] mt-1 mr-4">
                  03
                </span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Triple-Gate Quality Control</h4>
                  <p className="text-xs text-muted mt-1">Batch hides inspection, in-process seam audits, and a final manual inspection before export-container packing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Dynamic Stats Counters (6/12 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-6">
            <StatItem
              target={B2B_CONFIG.yearsInBusiness}
              suffix="+"
              label="Years in Global Manufacturing"
            />
            <StatItem
              target="25,000"
              suffix=" Sq. Ft."
              label="Production Facility Floor Space"
            />
            <StatItem
              target="15,000"
              suffix="+"
              label="Units Monthly Production Capacity"
            />
            <StatItem
              target={B2B_CONFIG.countriesExported.replace('+', '')}
              suffix="+"
              label="Countries Safely Exported To"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export { ManufacturingCapability };
