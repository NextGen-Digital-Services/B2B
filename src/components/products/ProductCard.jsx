import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import useRFQCart from '../../hooks/useRFQCart';

export default function ProductCard({ product }) {
  const { addToRFQ } = useRFQCart();
  const swatchColor = product.images[0] || '#291A13';
  const hasPhoto = typeof swatchColor === 'string' && (swatchColor.startsWith('http') || swatchColor.startsWith('/') || swatchColor.startsWith('data:'));

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToRFQ(product, product.moq, product.customization_options.colors[0]);
    alert(`${product.name} (${product.moq} units) added to RFQ cart.`);
  };

  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
      className="h-full"
    >
      <Link
        to={`/products/${product.slug}`}
        className="group relative flex flex-col h-full border border-border bg-card hover:border-leather/30 transition-all duration-500 overflow-hidden"
      >
      {/* Specimen Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-light">
        <span className="text-[9px] text-muted font-mono tracking-wider uppercase">
          Specimen / {product.id.slice(0, 4).toUpperCase()}
        </span>
        <span className="text-[9px] text-muted font-mono tracking-wider">
          {product.moq}+ MOQ
        </span>
      </div>

      {/* Image area */}
      <div className="relative h-56 w-full overflow-hidden bg-ink">
        {hasPhoto ? (
          <img
            src={swatchColor}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0 leather-grain z-0 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: swatchColor }}
          />
        )}
        {/* Diagonal detail */}
        <div className="absolute top-4 right-4 w-16 h-16 border border-ivory/10 transform rotate-45 z-10" />
      </div>

      {/* Info */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-serif text-ink group-hover:text-leather transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
          <p className="text-[10px] text-muted font-mono uppercase tracking-wider">
            {product.material}
          </p>
        </div>

        {/* Specs row */}
        <div className="flex items-center justify-between text-[10px] text-muted font-mono pt-3 border-t border-border-light">
          <span>{product.specifications.hardware}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span className="flex-1 flex items-center text-[10px] uppercase tracking-[0.15em] font-medium text-ink group-hover:text-leather transition-colors duration-300">
            View Specimen
            <ArrowUpRight className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center w-8 h-8 border border-border hover:border-leather/40 hover:bg-leather/5 transition-all duration-300"
            title="Add to RFQ"
          >
            <Plus className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Corner marks */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-leather/20 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-leather/20 transition-colors duration-500" />
      </Link>
    </motion.div>
  );
}
