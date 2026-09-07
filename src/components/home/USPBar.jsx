import React, { useRef } from 'react';
import { Package, ShieldCheck, Layers, Wrench } from 'lucide-react';
import useGsapReveal from '../../hooks/useGsapReveal';

export default function USPBar() {
  const scopeRef = useRef(null);
  useGsapReveal(scopeRef);

  const usps = [
    {
      icon: Package,
      title: 'Flexible MOQ',
      value: '50+',
      subtitle: 'Minimum Order Quantity',
    },
    {
      icon: ShieldCheck,
      title: 'Quality First',
      value: 'Consistent Standards',
      subtitle: 'Rigorous in-house quality checks at every stage',
    },
    {
      icon: Layers,
      title: 'Multiple Materials',
      value: 'Versatile Production',
      subtitle: 'Work with a wide range of materials and finishes',
    },
    {
      icon: Wrench,
      title: 'OEM / ODM',
      value: 'Custom Manufacturing',
      subtitle: 'Your brand, your specification, end to end support',
    },
  ];

  return (
    <section className="bg-card border-y border-border py-12 lg:py-16" ref={scopeRef}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                data-reveal
                className="group relative flex flex-col items-center text-center space-y-3"
              >
                {/* Icon */}
                <div className="text-muted group-hover:text-leather transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Value / Heading */}
                <p className="text-2xl lg:text-3xl font-serif font-bold text-ink">
                  {usp.value}
                </p>

                {/* Label */}
                <div className="space-y-1">
                  <p className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-ink">
                    {usp.title}
                  </p>
                  <p className="text-[9px] font-mono text-muted tracking-wider leading-relaxed">
                    {usp.subtitle}
                  </p>
                </div>

                {/* Subtle divider between items */}
                {idx < usps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border/60" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { USPBar };