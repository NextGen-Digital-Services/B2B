import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import SectionHeading from '../components/shared/SectionHeading';

export default function Products() {
  const location = useLocation();

  const getInitialCategory = () => {
    const params = new URLSearchParams(location.search);
    return params.get('category') || 'all';
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(getInitialCategory);
  const [sortBy, setSortBy] = useState('default');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setSelectedCategory(getInitialCategory());
  }, [location.search]);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category_id === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'moq-asc') result.sort((a, b) => a.moq - b.moq);
    else if (sortBy === 'moq-desc') result.sort((a, b) => b.moq - a.moq);
    else if (sortBy === 'price-asc') result.sort((a, b) => (a.price_tiers[0]?.unit_price || 0) - (b.price_tiers[0]?.unit_price || 0));
    else if (sortBy === 'price-desc') result.sort((a, b) => (b.price_tiers[0]?.unit_price || 0) - (a.price_tiers[0]?.unit_price || 0));

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Collection"
          title="Product Archive"
          description="Browse our baseline collection. All designs can be ordered directly, or customized with custom leather grains, hardware finishes, and logo stampings."
          align="left"
        />

        <ProductFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <ProductGrid products={filteredProducts} />
      </div>
    </motion.div>
  );
}
