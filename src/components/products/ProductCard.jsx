import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Briefcase, Wallet, Compass, Luggage, BookOpen, Plus } from 'lucide-react';
import { formatCurrency } from '../../utils/helpers';
import useRFQCart from '../../hooks/useRFQCart';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

// Helper to get category specific icon
const getCategoryIcon = (categoryId) => {
  switch (categoryId) {
    case 'handbags': return ShoppingBag;
    case 'totes': return Briefcase;
    case 'wallets': return Wallet;
    case 'backpacks': return Compass;
    case 'travel': return Luggage;
    case 'corporate': return BookOpen;
    default: return ShoppingBag;
  }
};

export default function ProductCard({ product }) {
  const { addToRFQ } = useRFQCart();
  const IconComponent = getCategoryIcon(product.category_id);
  
  // Starting price is the unit price of the first tier (smallest quantity)
  const startingPrice = product.price_tiers[0]?.unit_price || 0;
  
  // Primary color representation
  const swatchColor = product.images[0] || '#4A1420';

  const handleAdd = (e) => {
    e.preventDefault(); // Stop navigation to detail page
    e.stopPropagation();
    addToRFQ(product, product.moq, product.customization_options.colors[0]);
    alert(`${product.name} (${product.moq} units) added to RFQ cart.`);
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col justify-between border border-border bg-card hover:border-gold/40 transition-all duration-300 hover:scale-[1.02] rounded-[2px] overflow-hidden"
    >
      
      {/* Editorial Swatch Display (Placeholder Image) */}
      <div className="relative h-64 w-full flex items-center justify-center border-b border-border text-ivory overflow-hidden select-none">
        
        {/* Color background with leather grain */}
        <div
          className="absolute inset-0 leather-grain transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: swatchColor }}
        />
        
        {/* Category Icon representation */}
        <div className="relative z-10 p-6 rounded-full bg-primary-dark/30 border border-gold/10 backdrop-blur-xs flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-gold" strokeWidth={1.2} />
        </div>

        {/* Spec Label Overlay */}
        <div className="absolute bottom-4 left-4 z-10">
          <Badge text={product.material.split(' ')[0]} variant="gold" />
        </div>
      </div>

      {/* Info Body */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        
        <div className="space-y-1">
          <span className="text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-cognac">
            Category: {product.category_id.toUpperCase()}
          </span>
          <h3 className="text-lg font-serif text-primary group-hover:text-cognac transition-colors leading-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted font-sans font-light leading-relaxed line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* B2B Specs & Quote Info */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-sans">
          <div>
            <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Min Order MOQ</p>
            <p className="text-charcoal font-medium mt-0.5">{product.moq} Units</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Est. Wholesales</p>
            <p className="text-cognac font-bold mt-0.5">From {formatCurrency(startingPrice)}</p>
          </div>
        </div>

        {/* Add to RFQ Action Button */}
        <div className="pt-2">
          <Button
            variant="outline-dark"
            onClick={handleAdd}
            className="w-full text-[10px] py-2 px-4 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-ivory"
          >
            <Plus className="w-3.5 h-3.5 mr-1" strokeWidth={2} />
            Add to RFQ
          </Button>
        </div>

      </div>

    </Link>
  );
}
export { ProductCard };
