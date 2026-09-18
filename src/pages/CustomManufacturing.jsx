import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenTool, Award, Palette, Wrench, Package, Box } from 'lucide-react';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';

const customizationOptions = [
  { icon: PenTool, title: 'Logo Printing & Embossing', desc: 'Screen print, embossed or debossed logo' },
  { icon: Award, title: 'Metal Badge Customization', desc: 'Engraved or custom metal logo plates' },
  { icon: Palette, title: 'Color Customization', desc: 'Choose from a wide range of colors' },
  { icon: Wrench, title: 'Hardware Options', desc: 'Custom zippers, pulls, buckles and fittings' },
  { icon: Box, title: 'Interior & Lining', desc: 'Custom lining, labels and inner branding' },
  { icon: Package, title: 'Packaging', desc: 'Custom hangtags, polybags, and master cartons' },
];

const moqSpecs = [
  { label: 'Catalog / Customized Logo / Color', value: '100 units / color' },
  { label: 'Custom Design (Per CAD)', value: '100 units / design' },
  { label: 'Imported Hardware (Zippers / Buckles)', value: '500 units / mold' },
  { label: 'Custom Lining / Jacquard', value: '1,000 meters / design' },
  { label: 'Custom Packaging (Hangtag / Box)', value: '500 units / design' },
];

const workflowSteps = [
  { num: '01', title: 'CHOOSE YOUR DESIGN', desc: 'Browse our existing backpack and bag designs and select the model that fits your requirement.' },
  { num: '02', title: 'SHARE YOUR BRANDING', desc: 'Send us your logo, brand colours and branding requirements. We can customize the logo placement, labels, patches and other details.' },
  { num: '03', title: 'CUSTOMIZE THE DETAILS', desc: 'Choose from available materials, colours, zippers, hardware, lining, pockets and other product specifications.' },
  { num: '04', title: 'SAMPLE & APPROVAL', desc: 'We prepare a customized sample based on your requirements for review and approval before bulk production.' },
  { num: '05', title: 'BULK PRODUCTION', desc: 'Once the sample is approved, we begin production with the agreed specifications, branding and quantity.' },
  { num: '06', title: 'PACKING & DELIVERY', desc: 'Your finished bags are checked, packed according to your requirements and prepared for dispatch.' },
];

export default function CustomManufacturing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="bg-ivory border-b border-border py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 leather-grain opacity-10 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <span className="stamp text-muted border-border mb-6 inline-block">PRIVATE LABEL LEATHER GOODS MANUFACTURING</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink leading-[1.05] max-w-3xl mb-6">
            CUSTOMIZE A ZYCOON DESIGN
          </h1>
          <p className="text-sm text-muted font-light max-w-2xl leading-relaxed">
            Choose a bag from our existing collection and make it yours. Customize the logo, colours, materials, hardware and branding details to create a bag made for your business or brand.
          </p>

          <div className="flex flex-wrap items-center gap-0 pt-6 border-t border-border mt-6 max-w-2xl">
            {['Ready-made designs', 'Custom branding', 'Bulk manufacturing'].map((tag, i) => (
              <React.Fragment key={i}>
                {i === 0 && (
                  <span className="text-leather text-xs px-1">•</span>
                )}
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-ink px-4 py-2 border border-border border-r-0 last:border-r">
                  {tag}
                </span>
                {i < 2 && (
                  <span className="text-leather text-xs px-1">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <Link to="/contact" className="inline-block mt-6">
            <Button variant="primary" className="text-xs">
              Start Custom Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Workflow"
          title="From Selection to Your Branded Bags"
          description="Choose a Zycoon design, customize it to your requirements, approve the sample, and we take it into production."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {workflowSteps.map((s) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: parseInt(s.num) * 0.1 }}
              className="border border-border bg-card p-8 flex flex-col justify-between hover:border-leather/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="section-number text-3xl">{s.num}</span>
                <span className="w-8 h-px bg-border mt-5" />
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-ink">{s.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logo & Customization Options + MOQ */}
      <section className="bg-card border-t border-border py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Branding"
            title="Logo & Customization Options"
            description="Make it your own. Customize the logo, colors, materials and details to match your brand identity."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">

            {/* Left - Customization Options */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {customizationOptions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="border border-border bg-ivory p-5 space-y-3 hover:border-leather/30 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-leather" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-ink">{item.title}</h4>
                      <p className="text-[10px] text-muted mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Middle - Product Visual */}
            <div className="lg:col-span-3">
              <div className="border border-border bg-ivory aspect-[4/5] overflow-hidden">
                <img
                  src="/products/backpack-features-blue.jpg"
                  alt="ZYCOON backpack customization details"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - MOQ Specification Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="border border-border p-6 space-y-5">
                <h3 className="text-lg font-serif text-ink">Custom Manufacturing MOQ</h3>
                <div className="space-y-3 text-xs font-mono">
                  {moqSpecs.map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-border-light pb-2">
                      <span className="font-sans font-medium text-muted">{item.label}</span>
                      <span className="text-ink font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact">
                <Button variant="primary" className="w-full text-xs flex items-center justify-center group">
                  START A CUSTOM PROJECT
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
              <p className="text-[10px] text-muted text-center font-light">
                Our team will assist you with specifications, pricing and production timelines.
              </p>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
