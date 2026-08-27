import React from 'react';
import ProductCard from './ProductCard';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
