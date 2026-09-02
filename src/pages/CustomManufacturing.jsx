import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, ShieldAlert, Cpu, Award } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';
import useSplitReveal from '../hooks/useSplitReveal';

export default function CustomManufacturing() {
  const splitRef = useRef(null);
  useSplitReveal(splitRef);

  const steps = [
    { num: '01', title: 'Specifications & Intake', desc: 'Submit your tech pack, CAD outline, or physical benchmark bag. Specify target sizes, pocket requirements, and reinforcement board hardness.' },
    { num: '02', title: 'Material Sourcing', desc: 'Choose from vegetable-tanned, chrome-tanned, or cross-grain Saffiano leather. We source exact pantones from audited LWG Gold tanneries.' },
    { num: '03', title: 'Bespoke Molds & Plating', desc: 'For branded hardware, we make steel alloy molds to cast custom zippers, buckle systems, and rivet buttons featuring your engraved logo.' },
    { num: '04', title: 'Prototype Construction', desc: 'Our sample workshop compiles a physical prototype within 7 to 10 working days, shipped directly to your office.' },
    { num: '05', title: 'Stitching & Batch Audits', desc: 'Once approved, we launch bulk cutting. Sewing lines are calibrated for uniform thread tension, 7-9 stitches per inch.' },
    { num: '06', title: 'Packing & Handover', desc: 'Bags packed in custom-branded dustbags, boxed in water-resistant master cartons, and loaded into containers.' },
  ];

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
          <span className="stamp text-muted border-border mb-6 inline-block">OEM / ODM Solutions</span>
          <h1 data-split className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05] max-w-3xl">
            Private Label Leather Goods Manufacturing
          </h1>
          <p className="mt-6 text-sm text-muted font-light max-w-2xl leading-relaxed">
            From design sheet to loaded container. We operate as the direct backend workshop for premium fashion labels globally.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Workflow"
          title="From Concept to Container in Six Gates"
          description="Our structured B2B prototyping and validation phases ensure mass-produced stock matches original design intentions."
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {steps.map((s) => (
            <div key={s.num} className="border border-border bg-card p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="section-number text-3xl">{s.num}</span>
                <span className="w-8 h-px bg-border mt-5" />
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-ink">{s.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Branding"
                title="Logo & Customization Specs"
                align="left"
              />
              <ul className="space-y-4 text-xs font-medium text-ink">
                {[
                  { icon: PenTool, text: 'Blind Debossing (No-foil heat compression)' },
                  { icon: Award, text: 'Gold & Silver Foil Hot Stamping' },
                  { icon: Cpu, text: 'Laser-Engraved Metal Hardware Plating' },
                  { icon: ShieldAlert, text: 'Bespoke Woven Jacquard Interior Liners' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4 text-leather flex-shrink-0" strokeWidth={1.5} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 border border-border p-8 space-y-6">
              <h3 className="text-lg font-serif text-ink">Custom Manufacturing MOQ</h3>
              <div className="space-y-3.5 text-xs font-mono">
                {[
                  { label: 'Catalog Customization', value: '100 units / color' },
                  { label: 'Custom Design (Your CADs)', value: '100 units / design' },
                  { label: 'Bespoke Cast Hardware', value: '500 units / mold' },
                  { label: 'Custom Jacquard Linings', value: '1,000 meters / weave' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-border-light pb-2">
                    <span className="font-sans font-medium text-muted">{item.label}</span>
                    <span className="text-ink font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="primary" className="w-full text-xs mt-4">
                  Start Custom Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
