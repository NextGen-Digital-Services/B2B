import React from 'react';
import { Search } from 'lucide-react';
import { categories } from '../../data/categories';

export default function ProductFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy
}) {
  return (
    <div className="bg-card border border-border p-6 mb-10 font-sans rounded-[2px] space-y-6">
      
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center">
        
        {/* Category selector */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border rounded-[2px] transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-primary border-primary text-ivory'
                : 'bg-transparent border-border text-muted hover:border-gold hover:text-primary'
            }`}
          >
            All Collections
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border rounded-[2px] transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary border-primary text-ivory'
                  : 'bg-transparent border-border text-muted hover:border-gold hover:text-primary'
              }`}
            >
              {cat.name.replace('Luxury ', '').replace('Executive ', '').replace('Urban & ', '')}
            </button>
          ))}
        </div>

        {/* Search Input bar */}
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Search catalog or materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FAF5EC] border border-border rounded-[2px] py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-cognac placeholder-muted text-charcoal"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-muted" strokeWidth={1.5} />
        </div>

      </div>

      {/* Sort options */}
      <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <p className="text-muted font-light">
          Showing technical B2B catalog items for wholesale exports
        </p>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <span className="text-muted text-nowrap">Sort Specifications:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#FAF5EC] border border-border rounded-[2px] py-1.5 px-3 text-xs focus:outline-none focus:border-cognac text-charcoal font-medium cursor-pointer w-full sm:w-auto"
          >
            <option value="default">Relevance / Newest</option>
            <option value="name-asc">Alphabetical (A - Z)</option>
            <option value="moq-asc">Wholesale MOQ (Lowest to Highest)</option>
            <option value="moq-desc">Wholesale MOQ (Highest to Lowest)</option>
            <option value="price-asc">Starting Unit Price (Lowest to Highest)</option>
            <option value="price-desc">Starting Unit Price (Highest to Lowest)</option>
          </select>
        </div>
      </div>

    </div>
  );
}
export { ProductFilters };
