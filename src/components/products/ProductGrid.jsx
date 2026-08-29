import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const EASE_OUT = [0.23, 1, 0.32, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 border border-border bg-card">
        <p className="text-xl font-serif text-ink">No specimens found.</p>
        <p className="text-xs text-muted mt-2 font-sans">Adjust your filters to view our catalog.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={item}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}