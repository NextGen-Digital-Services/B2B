import React from 'react';

export default function ProductGallery({ product, selectedColor, setSelectedColor }) {
  // Swatches are color strings matching standard hex codes
  const colors = product.customization_options.colors;
  const hexCodes = product.images; // matching indices

  return (
    <div className="space-y-6 font-sans">
      
      {/* Main Leather Sample Display */}
      <div className="relative h-96 w-full border border-border flex flex-col justify-between p-8 text-ivory rounded-[2px] overflow-hidden select-none">
        
        {/* Color fill based on selection */}
        <div
          className="absolute inset-0 leather-grain transition-colors duration-500"
          style={{ backgroundColor: hexCodes[colors.indexOf(selectedColor)] || hexCodes[0] }}
        />

        <div className="relative z-10 flex justify-between items-start">
          <span className="text-[10px] font-mono tracking-widest text-gold bg-primary-dark/80 border border-gold/20 py-1 px-3 uppercase">
            Product Sample Canvas
          </span>
          <span className="text-[10px] font-mono tracking-widest text-ivory/80">
            Grain Thickness: 1.8mm - 2.0mm
          </span>
        </div>

        <div className="relative z-10 space-y-1">
          <p className="text-xs uppercase tracking-widest text-gold">Selected Leather Color</p>
          <p className="text-2xl font-serif text-ivory tracking-wide">{selectedColor}</p>
        </div>
        
      </div>

      {/* Toggles Swatches */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-3">
          Available Export Colors
        </p>
        <div className="flex flex-wrap gap-4">
          {colors.map((color, idx) => {
            const hex = hexCodes[idx] || '#4A1420';
            const isActive = color === selectedColor;

            return (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`flex items-center space-x-2 border py-2 px-4 rounded-[2px] cursor-pointer transition-colors ${
                  isActive
                    ? 'border-gold bg-[#FAF5EC] text-primary'
                    : 'border-border bg-card text-muted hover:border-gold'
                }`}
                aria-label={`Select ${color}`}
              >
                {/* Color Dot Swatch */}
                <span
                  className="w-4 h-4 border border-gold/20 shadow-sm leather-grain inline-block"
                  style={{ backgroundColor: hex }}
                />
                <span className="text-xs font-medium">{color}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-muted mt-2">
          * Custom pantone colors available upon request (subject to raw material MOQ).
        </p>
      </div>

    </div>
  );
}
export { ProductGallery };
