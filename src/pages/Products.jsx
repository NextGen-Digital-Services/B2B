import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import SectionHeading from '../components/shared/SectionHeading';

export default function Products() {
  const location = useLocation();
  
  // Parse query parameter if present (?category=handbags)
  const getInitialCategory = () => {
    const params = new URLSearchParams(location.search);
    return params.get('category') || 'all';
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(getInitialCategory);
  const [sortBy, setSortBy] = useState('default');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Sync category state when URL changes (e.g. clicking links in navbar/footer)
  useEffect(() => {
    setSelectedCategory(getInitialCategory());
  }, [location.search]);

  useEffect(() => {
    let result = [...products];

    // 1. Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category_id === selectedCategory);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    // 3. Sort Results
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'moq-asc') {
      result.sort((a, b) => a.moq - b.moq);
    } else if (sortBy === 'moq-desc') {
      result.sort((a, b) => b.moq - a.moq);
    } else if (sortBy === 'price-asc') {
      result.sort((a, b) => {
        const priceA = a.price_tiers[0]?.unit_price || 0;
        const priceB = b.price_tiers[0]?.unit_price || 0;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => {
        const priceA = a.price_tiers[0]?.unit_price || 0;
        const priceB = b.price_tiers[0]?.unit_price || 0;
        return priceB - priceA;
      });
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory py-16 font-sans border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <SectionHeading
          eyebrow="Export Catalogue"
          title="Direct Manufacturer Wholesale Catalog"
          description="Browse our baseline collection. All designs can be ordered directly, or customized with custom leather grains, hardware finishes, logo stampings, and liners."
          align="left"
        />

        {/* Filter Bar */}
        <ProductFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Catalog Grid */}
        <ProductGrid products={filteredProducts} />

      </div>
    </motion.div>
  );
}
export { Products };
