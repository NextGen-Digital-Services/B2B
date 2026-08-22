import React from 'react';
import { Package, ShieldCheck, Globe, Sliders } from 'lucide-react';

export default function USPBar() {
  const usps = [
    {
      icon: Package,
      title: 'Flexible MOQs',
      desc: 'Starts at 50 units per design to support high-end boutiques and niche retail.'
    },
    {
      icon: ShieldCheck,
      title: 'ISO 9001:2015 Audited',
      desc: 'Strict QA process checklist applied across all raw material lots and seams.'
    },
    {
      icon: Globe,
      title: 'Worldwide Export',
      desc: 'FOB Kolkata and CIF container shipments handled directly by our customs team.'
    },
    {
      icon: Sliders,
      title: 'Private Label & OEM',
      desc: 'Bespoke branding, customized metallic hardware, custom linings, and packaging.'
    }
  ];

  return (
    <section className="bg-card border-b border-border py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-4 border-l border-gold/20 pl-4 md:border-l-0 md:pl-0 md:first:border-l-0"
              >
                <div className="flex-shrink-0 bg-[#FAF5EC] border border-border p-2.5 rounded-[2px] text-cognac">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold tracking-wide text-primary uppercase font-sans">
                    {usp.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {usp.desc}
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
export { USPBar };
