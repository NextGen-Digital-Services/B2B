import React, { useRef } from 'react';
import { Package, ShieldCheck, Globe, Sliders } from 'lucide-react';
import AnimatedNumber from '../shared/AnimatedNumber';
import useGsapReveal from '../../hooks/useGsapReveal';

export default function USPBar() {
  const scopeRef = useRef(null);
  useGsapReveal(scopeRef);

  const usps = [
    {
      icon: Package,
      title: 'Flexible MOQs',
      value: '100+',
      label: 'Units per design',
    },
    {
      icon: ShieldCheck,
      title: 'ISO Certified',
      value: '9001',
      label: 'Quality managed',
    },
    {
      icon: Globe,
      title: 'Pan India',
      value: '19+',
      label: 'Cities served',
    },
    {
      icon: Sliders,
      title: 'OEM / ODM',
      value: '100%',
      label: 'Custom available',
    },
  ];

  const numFrom = (value) => {
    const match = value.match(/^(\d+)(.*)$/);
    return match ? { value: Number(match[1]), suffix: match[2] } : { value: 0, suffix: value };
  };

  return (
    <section className="bg-card border-y border-border py-12 lg:py-16" ref={scopeRef}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            const { value, suffix } = numFrom(usp.value);
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

                {/* Value */}
                <AnimatedNumber
                  value={value}
                  suffix={suffix}
                  className="text-2xl lg:text-3xl font-serif font-bold text-ink"
                />

                {/* Label */}
                <div className="space-y-1">
                  <p className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-ink">
                    {usp.title}
                  </p>
                  <p className="text-[9px] font-mono text-muted tracking-wider">
                    {usp.label}
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