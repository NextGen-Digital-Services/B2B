import React from 'react';
import { Search } from 'lucide-react';
import { categories } from '../../data/categories';

export default function ProductFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="mb-10 space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-medium border transition-all duration-300 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-ink border-ink text-ivory'
              : 'bg-transparent border-border text-muted hover:border-ink hover:text-ink'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-medium border transition-all duration-300 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-ink border-ink text-ivory'
                : 'bg-transparent border-border text-muted hover:border-ink hover:text-ink'
            }`}
          >
            {cat.name.replace('Luxury ', '').replace('Executive ', '').replace('Urban & ', '')}
          </button>
        ))}
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Search materials, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border py-2.5 pl-10 pr-4 text-xs font-sans focus:outline-none focus:border-leather placeholder-muted text-ink transition-colors duration-300"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-muted" strokeWidth={1.5} />
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-[10px] text-muted font-mono uppercase tracking-wider">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-card border border-border py-1.5 px-3 text-[10px] font-sans focus:outline-none focus:border-leather text-ink cursor-pointer uppercase tracking-wider"
          >
            <option value="default">Relevance</option>
            <option value="name-asc">Name A-Z</option>
            <option value="moq-asc">MOQ Low-High</option>
            <option value="moq-desc">MOQ High-Low</option>
            <option value="price-asc">Price Low-High</option>
            <option value="price-desc">Price High-Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
