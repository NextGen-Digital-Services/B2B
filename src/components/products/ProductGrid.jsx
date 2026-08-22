import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 border border-border bg-card rounded-[2px] font-sans">
        <p className="text-lg text-primary font-serif">No products found matching the criteria.</p>
        <p className="text-xs text-muted mt-2">Adjust your filters or clear the search query to view our catalog.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export { ProductGrid };
