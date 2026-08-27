import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';

export default function Gallery() {
  const sections = [
    { id: 1, title: 'Tannery Wet-Blue Processing', description: 'Audit phase for moisture levels and raw salt washing before dyeing.', color: '#291A13', span: 'lg:col-span-8 h-[220px] sm:h-[260px] lg:h-[300px]' },
    { id: 2, title: 'Precision Hydraulic Die Cutting', description: 'Cardboard drafts converted to zinc-alloy press dies for exact panel cutting.', color: '#70482F', span: 'lg:col-span-4 h-[220px] sm:h-[260px] lg:h-[300px]' },
    { id: 3, title: 'Artisanal Edge Skiving', description: 'Reducing thickness to 0.5mm on edges for smooth folding and zero seam bulk.', color: '#11100E', span: 'lg:col-span-4 h-[220px] sm:h-[280px] lg:h-[350px]' },
    { id: 4, title: 'Japanese Heavy Stitching Lines', description: 'Calibrated sewing using bonded nylon threads for clean seam patterns.', color: '#5A5A3A', span: 'lg:col-span-8 h-[220px] sm:h-[280px] lg:h-[350px]' },
    { id: 5, title: 'Custom Cast Hardware Riveting', description: 'Manually installing solid brass rivets and locks using pneumatic press punches.', color: '#6B2525', span: 'lg:col-span-6 h-[220px] sm:h-[260px] lg:h-[300px]' },
    { id: 6, title: 'Triple-Check Packing Division', description: 'Individual inspection, tissue stuffing, anti-humidity gel placement.', color: '#A06830', span: 'lg:col-span-6 h-[220px] sm:h-[260px] lg:h-[300px]' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Workshop Tour"
          title="Factory Operations & Lookbook"
          description="A behind-the-scenes view of our Kolkata production facilities with standardized quality gates at every stage."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 mt-8 sm:mt-12">
          {sections.map((item) => (
            <div
              key={item.id}
              className={`group relative flex flex-col justify-between p-8 text-ivory border border-border overflow-hidden ${item.span}`}
            >
              <div
                className="absolute inset-0 leather-grain transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: item.color }}
              />
              <div className="relative z-10 flex justify-between items-start">
                <span className="stamp text-ivory/50 border-ivory/20">
                  Division: {String(item.id).padStart(2, '0')}
                </span>
              </div>
              <div className="relative z-10 space-y-2 max-w-md pt-16">
                <h3 className="text-xl font-serif text-ivory tracking-wide">{item.title}</h3>
                <p className="text-xs text-ivory/70 leading-relaxed font-light opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-ivory/10 m-3 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
