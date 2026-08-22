import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

export default function Gallery() {
  const sections = [
    {
      id: 1,
      title: 'Tannery Wet-Blue Processing',
      description: 'Audit phase for checking moisture levels and raw salt washing before dyeing.',
      color: '#4A1420', // Oxblood
      span: 'lg:col-span-8 h-[300px]'
    },
    {
      id: 2,
      title: 'Precision Hydraulic Die Cutting',
      description: 'Cardboard drafts are converted to zinc-alloy press dies for exact leather panel cutting.',
      color: '#A9683B', // Cognac
      span: 'lg:col-span-4 h-[300px]'
    },
    {
      id: 3,
      title: 'Artisanal Edge Skiving Desk',
      description: 'Reducing thickness down to 0.5mm on edges to ensure smooth folding and zero seam bulk.',
      color: '#2E0D14', // Primary Dark
      span: 'lg:col-span-4 h-[350px]'
    },
    {
      id: 4,
      title: 'Japanese Heavy Stitching Lines',
      description: 'Calibrated sewing setups using bonded nylon threads to achieve clean seam patterns.',
      color: '#6B5A4E', // Taupe
      span: 'lg:col-span-8 h-[350px]'
    },
    {
      id: 5,
      title: 'Custom Cast Hardware Riveting',
      description: 'Manually installing solid brass rivets and locks using pneumatic press punches.',
      color: '#241812', // Charcoal
      span: 'lg:col-span-6 h-[300px]'
    },
    {
      id: 6,
      title: 'Triple-Check Packing Division',
      description: 'Individual inspection, tissue stuffing, anti-humidity gel placement, and carton loading.',
      color: '#C6A15B', // Gold
      span: 'lg:col-span-6 h-[300px]'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory py-16 font-sans border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <SectionHeading
          eyebrow="Workshop Tour"
          title="Factory Operations & Lookbook Gallery"
          description="A behind-the-scenes view of our Kolkata production facilities. We maintain standardized quality gates at every stage of the leather goods crafting cycle."
          align="left"
        />

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {sections.map((item) => (
            <div
              key={item.id}
              className={`group relative flex flex-col justify-between p-8 text-ivory border border-border bg-card hover:border-gold/40 transition-all duration-300 rounded-[2px] overflow-hidden ${item.span}`}
            >
              {/* Color Block Background representing the workshop view */}
              <div
                className="absolute inset-0 leather-grain transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[9px] font-mono tracking-widest text-gold bg-primary-dark/80 border border-gold/20 py-1 px-3 uppercase">
                  Division: 0{item.id}
                </span>
                <div className="text-ivory/50 group-hover:text-gold transition-colors p-1 bg-primary-dark/25 rounded-full">
                  <Info className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-10 space-y-2 max-w-md pt-16">
                <h3 className="text-xl font-serif text-ivory tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory/80 leading-relaxed font-light font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Decorative framing line */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/15 m-3 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
export { Gallery };
