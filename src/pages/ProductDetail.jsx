import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useProducts, useProductReviews } from '../context/ZycoonContext';
import ProductGallery from '../components/products/ProductGallery';
import AddToRFQButton from '../components/products/AddToRFQButton';
import SampleRequestForm from '../components/forms/SampleRequestForm';
import ProductCard from '../components/products/ProductCard';
import ProductReviews from '../components/products/ProductReviews';

export default function ProductDetail() {
  const { slug } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.slug === slug);
  const reviews = useProductReviews().filter((r) => r.product_id === product?.id) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.customization_options.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 text-center">
        <p className="text-xl font-serif text-ink">Specimen Not Found</p>
        <Link to="/products" className="text-xs text-leather uppercase font-medium tracking-wider mt-4 inline-block hover:underline">
          Return to Archive
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category_id === product.category_id || p.is_featured))
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Breadcrumbs */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-border-light">
          <Link
            to="/products"
            className="inline-flex items-center text-[10px] text-muted hover:text-ink transition-colors uppercase tracking-[0.15em] font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2" strokeWidth={1.5} />
            Back to Archive
          </Link>
          <div className="flex items-center space-x-2 text-[10px] text-muted font-mono hidden md:flex">
            <Link to="/products" className="hover:text-ink transition-colors">Archive</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink">{product.name}</span>
          </div>
        </div>

        {/* Product Passport Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:gap-16 items-start">

          {/* Left - Gallery */}
          <div className="lg:col-span-5">
            <ProductGallery
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>

          {/* Right - Product Passport */}
          <div className="lg:col-span-7 space-y-8">

            {/* Passport Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="stamp border-leather/30 text-leather">
                  Product Passport
                </span>
                <span className="stamp">
                  OEM / ODM Available
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif text-ink leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-muted font-light leading-relaxed max-w-lg">
                {product.description}
              </p>
            </div>

            {/* Passport Specs */}
            <div className="border border-border p-6 space-y-5">
              <h3 className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-muted border-b border-border-light pb-3">
                Technical Passport
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                  { label: 'Material', value: product.material },
                  { label: 'Hardware', value: product.specifications.hardware },
                  { label: 'Lining', value: product.specifications.lining },
                  { label: 'Dimensions', value: product.specifications.dimensions },
                  { label: 'Weight', value: product.specifications.weight },
                  { label: 'Lead Time', value: `${product.lead_time_days} days` },
                ].map((spec, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[9px] text-muted font-mono uppercase tracking-[0.15em]">
                      {spec.label}
                    </p>
                    <p className="text-xs text-ink font-sans">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="space-y-3">
              <p className="text-[10px] text-muted font-mono uppercase tracking-[0.15em]">
                Available Colors
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {product.customization_options.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-medium border transition-all duration-300 ${
                      selectedColor === color
                        ? 'bg-ink border-ink text-ivory'
                        : 'bg-transparent border-border text-muted hover:border-ink hover:text-ink'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            {selectedColor && (
              <AddToRFQButton product={product} selectedColor={selectedColor} />
            )}

            {selectedColor && (
              <SampleRequestForm product={product} selectedColor={selectedColor} />
            )}
          </div>
        </div>

        {/* Client Reviews */}
        {reviews.length > 0 && <ProductReviews reviews={reviews} />}

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16 mt-20">
            <h3 className="text-lg font-serif text-ink mb-8">
              Related Specimens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
