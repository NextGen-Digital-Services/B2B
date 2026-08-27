import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

const materials = [
  {
    id: 'black',
    name: 'Black',
    color: '#1A1A1A',
    type: 'Full Grain',
    origin: 'Italian Tannery',
    finish: 'Aniline Dyed',
    thickness: '1.4 — 1.6mm',
    code: 'BLK-001',
  },
  {
    id: 'cognac',
    name: 'Cognac',
    color: '#A06830',
    type: 'Vegetable Tanned',
    origin: 'Tuscan Tannery',
    finish: 'Wax Pull-Up',
    thickness: '1.8 — 2.0mm',
    code: 'COG-042',
  },
  {
    id: 'tan',
    name: 'Tan',
    color: '#C49A6C',
    type: 'Chrome Free',
    origin: 'LWG Gold Rated',
    finish: 'Semi-Aniline',
    thickness: '1.2 — 1.4mm',
    code: 'TAN-018',
  },
  {
    id: 'olive',
    name: 'Olive',
    color: '#5A5A3A',
    type: 'Full Grain',
    origin: 'Heritage Tannery',
    finish: 'Pigmented',
    thickness: '1.6 — 1.8mm',
    code: 'OLV-007',
  },
  {
    id: 'burgundy',
    name: 'Burgundy',
    color: '#6B2525',
    type: 'Top Grain',
    origin: 'Indian Tannery',
    finish: 'Aniline Dyed',
    thickness: '1.0 — 1.2mm',
    code: 'BRG-033',
  },
];

export default function MaterialArchive() {
  const [active, setActive] = useState(materials[1]);

  return (
    <section className="bg-ink py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 leather-grain opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          eyebrow="02 / Materials"
          title="Touch the Material"
          description="Select a material to explore its characteristics. Each hide is hand-sorted and sourced from certified tanneries."
          align="left"
          inverted
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left - Material Swatches */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActive(mat)}
                  className={`w-full flex items-center space-x-5 p-4 border transition-all duration-500 text-left group ${
                    active.id === mat.id
                      ? 'border-ivory/30 bg-ivory/5'
                      : 'border-ivory/10 hover:border-ivory/20 bg-transparent'
                  }`}
                >
                  {/* Irregular swatch shape */}
                  <div
                    className="relative w-16 h-12 flex-shrink-0 leather-grain overflow-hidden"
                    style={{
                      backgroundColor: mat.color,
                      clipPath: 'polygon(0% 5%, 95% 0%, 100% 90%, 5% 100%)',
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-serif tracking-wide ${
                      active.id === mat.id ? 'text-ivory' : 'text-ivory/60 group-hover:text-ivory/80'
                    } transition-colors duration-300`}>
                      {mat.name}
                    </p>
                    <p className="text-[9px] text-ivory/30 font-mono tracking-wider mt-1">
                      {mat.code}
                    </p>
                  </div>

                  {/* Active indicator */}
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    active.id === mat.id ? 'bg-ivory scale-100' : 'bg-ivory/20 scale-75'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Material Details */}
          <div className="lg:col-span-7 lg:pl-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Large material preview */}
                <div
                  className="relative w-full aspect-[16/9] leather-grain overflow-hidden"
                  style={{ backgroundColor: active.color }}
                >
                  <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                    <div className="flex items-center space-x-4">
                      <span className="stamp text-ivory/50 border-ivory/20">
                        {active.code}
                      </span>
                      <span className="text-[10px] text-ivory/40 font-mono">
                        {active.type}
                      </span>
                    </div>
                  </div>

                  {/* Diagonal line overlay */}
                  <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                    <div className="absolute top-4 right-4 w-24 h-24 border border-ivory/10 transform rotate-45" />
                  </div>
                </div>

                {/* Material specifications */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    { label: 'Type', value: active.type },
                    { label: 'Origin', value: active.origin },
                    { label: 'Finish', value: active.finish },
                    { label: 'Thickness', value: active.thickness },
                    { label: 'Code', value: active.code },
                    { label: 'Custom', value: 'Available' },
                  ].map((spec, i) => (
                    <div key={i} className="space-y-1.5">
                      <p className="text-[9px] text-ivory/30 font-mono uppercase tracking-[0.15em]">
                        {spec.label}
                      </p>
                      <p className="text-xs text-ivory/80 font-sans">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
