import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../../data/categories';
import SectionHeading from '../shared/SectionHeading';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function FeaturedCategories() {
  const { ref, controls, variants } = useScrollReveal();

  return (
    <section ref={ref} className="bg-ivory py-20 lg:py-28 font-sans border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Export Collections"
          title="Explore Wholesale Product Categories"
          description="We manufacture premium full-grain and top-grain leather goods designed for longevity, high retail markup, and international appeal."
          align="left"
        />

        {/* Categories Grid */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group relative flex flex-col justify-between h-[280px] border border-border p-8 bg-card transition-all duration-300 hover:border-gold/50 cursor-pointer overflow-hidden rounded-[2px]"
            >
              
              {/* Colored Leather texture block background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none leather-grain"
                style={{ backgroundColor: `${cat.imageColor}08` }} // Very light version of color
              />
              
              {/* Card Header: Swatch icon, Category Title */}
              <div>
                <div className="flex justify-between items-start">
                  {/* Visual Swatch Color Tag */}
                  <div
                    className="w-12 h-6 border border-gold/20 shadow-sm leather-grain"
                    style={{ backgroundColor: cat.imageColor }}
                  />
                  <div className="text-muted hover:text-gold p-1 bg-ivory rounded-[2px] border border-border">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                
                <h3 className="mt-8 text-xl font-serif text-primary group-hover:text-cognac transition-colors">
                  {cat.name}
                </h3>
              </div>

              {/* Card Footer: Short B2B Info */}
              <div className="space-y-4 relative z-10">
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {cat.description}
                </p>
                <div className="flex items-center text-[10px] uppercase tracking-wider font-semibold text-gold">
                  <span>Browse Technical Specs & MOQs</span>
                </div>
              </div>

              {/* Corner accent border */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/0 group-hover:border-gold/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/0 group-hover:border-gold/60 transition-colors" />

            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
export { FeaturedCategories };
