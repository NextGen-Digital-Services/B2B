import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Ruler, Weight, ShieldCheck, Layers } from 'lucide-react';
import { products } from '../data/products';
import ProductGallery from '../components/products/ProductGallery';
import MOQPricingTable from '../components/products/MOQPricingTable';
import AddToRFQButton from '../components/products/AddToRFQButton';
import SampleRequestForm from '../components/forms/SampleRequestForm';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  // Scroll to top on page load/slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Initial color set to the first customization color
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.customization_options.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex-grow bg-ivory py-24 text-center font-sans">
        <p className="text-xl font-serif text-primary">Technical Catalog Entry Not Found</p>
        <Link to="/products" className="text-xs text-cognac uppercase font-semibold tracking-wider mt-4 inline-block hover:underline">
          Return to Wholesale Catalog
        </Link>
      </div>
    );
  }

  // Related products (same category or others, max 3)
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category_id === product.category_id || p.is_featured))
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-grow bg-ivory py-10 font-sans border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs / Back button */}
        <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4 text-xs">
          <Link
            to="/products"
            className="inline-flex items-center text-muted hover:text-primary transition-colors uppercase tracking-wider font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Back to Catalog
          </Link>
          
          <div className="flex items-center space-x-2 text-muted hidden md:flex">
            <Link to="/products" className="hover:underline">Catalog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Spec Grid (Left Gallery, Right Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Gallery & Swatches (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <ProductGallery
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>

          {/* Right Column: Specifications, Price Tiers, Add to RFQ (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Title Block */}
            <div className="space-y-2">
              <span className="text-[10px] bg-gold/15 text-cognac border border-gold/30 uppercase tracking-widest font-bold py-1 px-3.5 rounded-[2px] inline-block">
                OEM/ODM PRIVATE LABEL CAPACITY
              </span>
              <h1 className="text-3xl md:text-4xl font-serif text-primary leading-tight mt-2">
                {product.name}
              </h1>
              <p className="text-xs text-muted font-mono tracking-wider">
                Raw Material: {product.material}
              </p>
              <p className="text-sm text-muted font-light leading-relaxed pt-2">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="border border-border bg-card p-6 rounded-[2px] space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-2">
                Technical Specifications Sheet
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-center space-x-3 py-1">
                  <Ruler className="w-4.5 h-4.5 text-cognac flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-bold text-muted">Dimensions</p>
                    <p className="text-charcoal font-medium">{product.specifications.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <Weight className="w-4.5 h-4.5 text-cognac flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-bold text-muted">Tare Weight</p>
                    <p className="text-charcoal font-medium">{product.specifications.weight}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <ShieldCheck className="w-4.5 h-4.5 text-cognac flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-bold text-muted">Hardware Alloys</p>
                    <p className="text-charcoal font-medium">{product.specifications.hardware}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <Layers className="w-4.5 h-4.5 text-cognac flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] uppercase font-bold text-muted">Internal Lining</p>
                    <p className="text-charcoal font-medium">{product.specifications.lining}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price breaks table */}
            <MOQPricingTable priceTiers={product.price_tiers} moq={product.moq} />

            {/* Add to RFQ cart button */}
            {selectedColor && (
              <AddToRFQButton product={product} selectedColor={selectedColor} />
            )}

            {/* Physical Sample Request */}
            {selectedColor && (
              <SampleRequestForm product={product} selectedColor={selectedColor} />
            )}

          </div>

        </div>

        {/* Related Items Section */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16 mt-20">
            <h3 className="text-xl font-serif text-primary mb-8 tracking-wide">
              Related Technical Collections
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
export { ProductDetail };
