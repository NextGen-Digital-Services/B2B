import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useCategories } from '../../context/ZycoonContext';
import SectionHeading from '../shared/SectionHeading';

const EASE_OUT = [0.23, 1, 0.32, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function FeaturedCategories() {
  const categories = useCategories();
  return (
    <section className="bg-ivory py-20 lg:py-32 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <SectionHeading
          eyebrow="01 / Collection"
          title="Explore Our Product Archive"
          description="Premium full-grain and top-grain leather goods engineered for longevity, high retail margin, and international market appeal."
          align="left"
        />

        {/* Asymmetrical Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={item}
              whileHover={{ translateY: -4 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              className={[
                idx === 0 ? 'md:row-span-2 lg:row-span-1' : '',
                idx % 3 === 0 ? 'lg:col-span-2 aspect-[16/10]' : 'aspect-[4/5]',
              ].join(' ')}
            >
            <Link
              to={`/products?category=${cat.id}`}
              className={`group relative flex flex-col h-full border border-border bg-card hover:border-leather/30 transition-all duration-500 overflow-hidden`}
            >
              {/* Colored leather texture background */}
              <div
                className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 leather-grain"
                style={{ backgroundColor: cat.imageColor }}
              />

              {/* Perforated edge detail */}
              <div className="absolute top-0 right-0 w-5 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, var(--color-ivory) 1.5px, transparent 1.5px)',
                  backgroundSize: '4px 10px',
                  backgroundPosition: '2px 0',
                }} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                {/* Top - Specimen label */}
                <div className="flex justify-between items-start">
                  <span className="stamp">
                    Specimen / {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center border border-border group-hover:border-leather/40 transition-colors duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-leather transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom */}
                <div className="space-y-3">
                  {/* Color swatch */}
                  <div
                    className="w-10 h-4 border border-border/60 leather-grain"
                    style={{ backgroundColor: cat.imageColor }}
                  />
                  <h3 className="text-xl lg:text-2xl font-serif text-ink group-hover:text-leather transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2 max-w-sm">
                    {cat.description}
                  </p>
                  <div className="flex items-center text-[9px] uppercase tracking-[0.2em] font-medium text-leather opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-1">
                    <span>View Specs & MOQs</span>
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>

              {/* Corner marks */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-leather/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-leather/20 transition-colors duration-500" />
            </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
export { FeaturedCategories };
