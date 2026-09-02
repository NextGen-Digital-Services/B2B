import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../shared/SectionHeading';
import AnimatedNumber from '../shared/AnimatedNumber';
import { B2B_CONFIG } from '../../utils/helpers';

if (typeof window !== 'undefined' && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { num: '01', title: 'Leather Selection', desc: 'Hand-sorted premium hides from LWG certified tanneries.' },
  { num: '02', title: 'Precision Cutting', desc: 'Die-cut patterns with optimal yield from each hide.' },
  { num: '03', title: 'Expert Stitching', desc: 'Heavy-duty seams with consistent tension and alignment.' },
  { num: '04', title: 'Hand Finishing', desc: 'Edge-painting, burnishing, and hardware installation.' },
  { num: '05', title: 'Quality Control', desc: 'Triple-gate inspection before export packaging.' },
  { num: '06', title: 'Global Dispatch', desc: `FOB Mumbai or CIF to ${B2B_CONFIG.countriesExported} markets worldwide.` },
];

const parseStat = (value) => {
  const match = value.replace(/,/g, '').match(/^(\d+)(.*)$/);
  return {
    value: match ? Number(match[1]) : 0,
    suffix: match ? match[2] : '',
    format: value.includes(','),
  };
};

export default function ManufacturingCapability() {
  const stepsRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current || !stepsRef.current) return;
      const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      gsap.set(lineRef.current, { transformOrigin: 'top', scaleY: reduce ? 1 : 0 });
      if (!reduce) {
        gsap.to(lineRef.current, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        });
      }
    }, stepsRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: `${B2B_CONFIG.yearsInBusiness}+`, label: 'Years of Craft' },
    { value: '25,000', label: 'Sq. Ft. Facility' },
    { value: '15,000+', label: 'Monthly Capacity' },
    { value: B2B_CONFIG.countriesExported, label: 'Export Markets' },
  ];

  return (
    <section className="bg-ivory py-20 lg:py-32 border-b border-border relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left - Statement */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="03 / Craft"
              title="From Material to Your Brand."
              description="We manage the entire leather sourcing, cutting, stitching, and finishing chain under one roof at our Mumbai production studio."
              align="left"
            />

            <div className="space-y-4">
              <p className="text-sm text-muted font-light leading-relaxed">
                Operating under LWG Gold guidelines with strict EU and US compliance standards. Every product passes through triple-gate quality control before export packaging.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              {stats.map((stat, i) => {
                const { value, suffix, format } = parseStat(stat.value);
                return (
                  <div key={i} className="space-y-1">
                    <AnimatedNumber
                      value={value}
                      suffix={suffix}
                      format={format}
                      className="text-2xl font-serif font-bold text-ink"
                    />
                    <p className="text-[9px] text-muted font-mono uppercase tracking-[0.15em]">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Process Sequence */}
          <div className="lg:col-span-7 lg:pl-8 relative" ref={stepsRef}>
            {/* Scroll-drawn stitch line */}
            <div
              ref={lineRef}
              className="absolute left-[5px] lg:left-[5px] top-3 bottom-3 w-px pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(180deg, var(--color-leather) 0, var(--color-leather) 3px, transparent 3px, transparent 7px)',
                opacity: 0.35,
              }}
            />
            <div className="space-y-0">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex items-start space-x-6 py-6 border-b border-border hover:bg-card/50 transition-colors duration-300 px-4 -mx-4"
                >
                  {/* Step number */}
                  <span className="section-number text-2xl flex-shrink-0 mt-0.5">
                    {step.num}
                  </span>

                  {/* Content */}
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-sans font-semibold uppercase tracking-wider text-ink group-hover:text-leather transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Stitched line on hover */}
                  <div className="absolute bottom-0 left-14 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, var(--color-leather) 0, var(--color-leather) 3px, transparent 3px, transparent 7px)',
                      opacity: 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export { ManufacturingCapability };