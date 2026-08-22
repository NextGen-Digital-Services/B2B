import React from 'react';
import { Award, ShieldAlert, Truck, Users } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Award,
      title: 'Premium Material Integrity',
      desc: 'We source exclusively from LWG gold-rated tanneries. Our hides are hand-sorted to minimize natural scar marks, securing clean panel yield for your production lines.'
    },
    {
      icon: Users,
      title: 'Private Label Customization',
      desc: 'Full OEM/ODM design flexibility. Emboss your brand logo, order custom-plated metallic zip sliders, or select bespoke jacquard lining fabrics.'
    },
    {
      icon: ShieldAlert,
      title: 'Compliance-Ready Exports',
      desc: 'All bags pass REACH regulatory tests for chemicals. We provide fully documented lab certificates, eliminating customs clearance bottlenecks in Europe and North America.'
    },
    {
      icon: Truck,
      title: 'Container Logistics Handling',
      desc: 'We pack using heavy-duty export cartons lined with anti-humidity silica gel bags. We handle full export documentation, booking FOB Kolkata or CIF shipping lanes.'
    }
  ];

  return (
    <section className="bg-ivory py-20 lg:py-28 border-b border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="The Westmere Advantage"
          title="Engineered for International Wholesale Trade"
          description="We operate as a direct industrial partner to global retail chains, boutique distributors, and corporate gift houses, offering reliable schedules and documented quality control."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border p-8 hover:border-gold/30 transition-all duration-300 flex items-start space-x-6 rounded-[2px]"
              >
                <div className="flex-shrink-0 bg-[#FAF5EC] border border-border p-3.5 rounded-[2px] text-cognac">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-serif text-primary uppercase tracking-wider font-semibold">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export { WhyChooseUs };
