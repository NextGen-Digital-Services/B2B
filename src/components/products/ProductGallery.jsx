import React from 'react';

export default function ProductGallery({ product, selectedColor, setSelectedColor }) {
  const colors = product.customization_options.colors;
  const hexCodes = product.images;

  return (
    <div className="space-y-6">
      <div className="relative h-96 w-full border border-border flex flex-col justify-between p-8 text-ivory overflow-hidden">
        <div
          className="absolute inset-0 leather-grain transition-colors duration-500"
          style={{ backgroundColor: hexCodes[colors.indexOf(selectedColor)] || hexCodes[0] }}
        />
        <div className="relative z-10 flex justify-between items-start">
          <span className="stamp text-ivory/50 border-ivory/20">Specimen Canvas</span>
          <span className="text-[9px] text-ivory/40 font-mono">{product.specifications.dimensions}</span>
        </div>
        <div className="relative z-10 space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 font-mono">Selected</p>
          <p className="text-2xl font-serif text-ivory">{selectedColor}</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] text-muted font-mono uppercase tracking-[0.15em] mb-3">Available Colors</p>
        <div className="flex flex-wrap gap-3">
          {colors.map((color, idx) => {
            const hex = hexCodes[idx] || '#291A13';
            const isActive = color === selectedColor;
            return (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`flex items-center space-x-2 border py-2 px-4 transition-all duration-300 ${
                  isActive
                    ? 'border-ink bg-ink text-ivory'
                    : 'border-border bg-transparent text-muted hover:border-ink hover:text-ink'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 border border-white/20 leather-grain"
                  style={{ backgroundColor: hex }}
                />
                <span className="text-[10px] uppercase tracking-wider font-medium">{color}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[9px] text-muted mt-2 font-mono">Custom pantone colors available on request.</p>
      </div>
    </div>
  );
}
