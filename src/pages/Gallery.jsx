import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import { useGallery } from '../context/ZycoonContext';

const isUrl = (v) => typeof v === 'string' && (v.startsWith('http') || v.startsWith('/') || v.startsWith('data:'));

const spans = [
  'lg:col-span-8 h-[220px] sm:h-[260px] lg:h-[300px]',
  'lg:col-span-4 h-[220px] sm:h-[260px] lg:h-[300px]',
  'lg:col-span-4 h-[220px] sm:h-[280px] lg:h-[350px]',
  'lg:col-span-8 h-[220px] sm:h-[280px] lg:h-[350px]',
  'lg:col-span-6 h-[220px] sm:h-[260px] lg:h-[300px]',
  'lg:col-span-6 h-[220px] sm:h-[260px] lg:h-[300px]',
];

const EASE_OUT = [0.23, 1, 0.32, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const tileVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function Gallery() {
  const gallery = useGallery();

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
          eyebrow="Workshop"
          title="The Zycoon Collection"
          description="Explore our complete range of bags and backpacks, designed and manufactured by Zycoon. Browse our latest styles and proven designs, available for wholesale, bulk orders, and custom branding."
          align="left"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 mt-8 sm:mt-12"
        >
          {gallery.map((item, idx) => {
            const photo = isUrl(item.image);
            return (
              <motion.div
                key={item.id}
                variants={tileVariant}
                className={`group relative flex flex-col justify-between p-8 text-ivory border border-border overflow-hidden ${spans[idx % spans.length]}`}
              >
                {photo ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 leather-grain transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundColor: item.image || '#291A13' }}
                  />
                )}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="stamp text-ivory/50 border-ivory/20">
                    Division: {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="relative z-10 space-y-2 max-w-md pt-16">
                  <h3 className="text-xl font-serif text-ivory tracking-wide">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs text-ivory/70 leading-relaxed font-light opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-ivory/10 m-3 pointer-events-none transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}