import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenTool, ShieldAlert, Cpu, Award, MessageCircle, FileSpreadsheet } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';
import { B2B_CONFIG } from '../utils/helpers';

export default function CustomManufacturing() {
  const steps = [
    {
      num: '01',
      title: 'Specifications & Reference Intake',
      desc: 'Submit your tech pack, CAD outline, or physical benchmark bag. Specify target sizes, pocket requirements, and reinforcement board hardness.'
    },
    {
      num: '02',
      title: 'Material Sourcing & Swatches Selection',
      desc: 'Choose from vegetable-tanned, chrome-tanned, or cross-grain Saffiano leather. We source exact pantones from audited LWG Gold tanneries.'
    },
    {
      num: '03',
      title: 'Bespoke Molds & Custom Plating',
      desc: 'For branded hardware, we make steel alloy molds to cast custom zippers, buckle systems, and rivet buttons featuring your engraved logo.'
    },
    {
      num: '04',
      title: 'Physical Prototype Construction',
      desc: 'Our sample workshop compiles a physical prototype within 7 to 10 working days, shipped directly to your office for hand inspection.'
    },
    {
      num: '05',
      title: 'Stitching Runs & Batch Audits',
      desc: 'Once approved, we launch bulk cutting. Sewing lines are calibrated for uniform thread tension, averaging 7 to 9 stitches per inch.'
    },
    {
      num: '06',
      title: 'Packing & Container Handover',
      desc: 'Bags are stuffed with acid-free tissues, packed in custom-branded dustbags, boxed in water-resistant master cartons, and loaded into containers.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory font-sans"
    >
      
      {/* Editorial Header */}
      <section className="bg-primary-dark text-ivory py-20 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold">
            OEM / ODM Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-ivory mt-4 max-w-3xl leading-tight">
            Private Label Leather Goods Manufacturing
          </h1>
          <p className="mt-6 text-sm sm:text-base text-muted font-light max-w-2xl leading-relaxed">
            From design sheet to loaded container. We operate as the direct backend workshop for premium fashion labels and retail lines globally.
          </p>
        </div>
      </section>

      {/* Grid Process Timeline */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Workflow pipeline"
          title="From Concept to Container in Six Gates"
          description="Our structured B2B prototyping and validation phases ensure your mass-produced stock matches original design intentions exactly."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-card border border-border p-8 relative rounded-[2px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl font-serif font-bold text-gold/30">{s.num}</span>
                <span className="w-8 h-[1px] bg-border mt-5" />
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {s.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Capabilities details */}
      <section className="bg-[#FAF5EC] border-t border-b border-border py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-cognac">
                Logo & Customization Specs
              </span>
              <h2 className="text-3xl font-serif text-primary">
                Branding Methods & Hardware Casting
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                We implement various hot-stamping and structural branding styles. Our workshop uses pneumatic hot-press stamps to ensure crisp logo lines that do not fade or lose indentation under friction.
              </p>
              
              <ul className="space-y-4 text-xs font-medium text-charcoal">
                <li className="flex items-center space-x-3">
                  <PenTool className="w-4 h-4 text-cognac" strokeWidth={1.5} />
                  <span>Blind Debossing (No-foil heat compression, classic look)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-cognac" strokeWidth={1.5} />
                  <span>Gold & Silver Foil Hot Stamping (German foil layers)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Cpu className="w-4 h-4 text-cognac" strokeWidth={1.5} />
                  <span>Laser-Engraved Metal Hardware Plating</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ShieldAlert className="w-4 h-4 text-cognac" strokeWidth={1.5} />
                  <span>Bespoke Woven Jacquard interior Liners</span>
                </li>
              </ul>
            </div>

            {/* Right: Graphic Box */}
            <div className="lg:col-span-6 bg-card border border-border p-8 space-y-6 rounded-[2px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <h3 className="text-lg font-serif text-primary">Custom Manufacturing MOQ Requirements</h3>
              
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="font-sans font-medium text-muted">Catalog Customization</span>
                  <span className="text-primary font-bold">50 units / color</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="font-sans font-medium text-muted">Custom Design (Your CADs)</span>
                  <span className="text-primary font-bold">100 units / design</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="font-sans font-medium text-muted">Bespoke Cast Hardware</span>
                  <span className="text-primary font-bold">500 units / casting mold</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans font-medium text-muted">Custom Jacquard Linings</span>
                  <span className="text-primary font-bold">1,000 meters / weave</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="w-full">
                  <Button variant="primary" className="w-full text-xs">
                    Start Custom Project
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
}
export { CustomManufacturing };
