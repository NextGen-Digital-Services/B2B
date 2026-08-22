import React, { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';
import useRFQCart from '../../hooks/useRFQCart';
import Button from '../shared/Button';

export default function AddToRFQButton({ product, selectedColor }) {
  const { addToRFQ } = useRFQCart();
  const [quantity, setQuantity] = useState(product.moq);

  const handleQtyChange = (val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) return;
    setQuantity(parsed);
  };

  const handleBlur = () => {
    // Clamp to MOQ on blur
    if (quantity < product.moq) {
      setQuantity(product.moq);
      alert(`Minimum order quantity for this item is ${product.moq} units.`);
    }
  };

  const increment = () => setQuantity((prev) => prev + 10);
  const decrement = () => setQuantity((prev) => Math.max(product.moq, prev - 10));

  const handleAdd = () => {
    if (quantity < product.moq) {
      alert(`Cannot add: Quantity is below the required MOQ of ${product.moq} units.`);
      return;
    }
    addToRFQ(product, quantity, selectedColor);
    alert(`Added ${quantity} units of ${product.name} (${selectedColor}) to your quote request.`);
  };

  return (
    <div className="font-sans space-y-4 border border-border bg-card p-6 rounded-[2px]">
      <h4 className="text-xs uppercase tracking-widest font-bold text-primary border-b border-border pb-3">
        Configure Quote Volume
      </h4>
      
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        
        {/* Quantity selector input */}
        <div className="flex items-center border border-border rounded-[2px] bg-[#FAF5EC] h-[48px] overflow-hidden">
          <button
            onClick={decrement}
            className="px-4 hover:bg-gold/15 text-charcoal font-semibold cursor-pointer h-full border-r border-border"
            aria-label="Decrease quantity by 10"
          >
            -
          </button>
          
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQtyChange(e.target.value)}
            onBlur={handleBlur}
            className="w-20 text-center font-mono text-xs font-semibold focus:outline-none bg-transparent text-charcoal"
            min={product.moq}
            step={10}
          />
          
          <button
            onClick={increment}
            className="px-4 hover:bg-gold/15 text-charcoal font-semibold cursor-pointer h-full border-l border-border"
            aria-label="Increase quantity by 10"
          >
            +
          </button>
        </div>

        {/* Add to list trigger */}
        <Button
          variant="primary"
          onClick={handleAdd}
          className="flex-grow flex items-center justify-center h-[48px]"
        >
          <ClipboardCopy className="w-4 h-4 mr-2" strokeWidth={1.5} />
          Add to RFQ List
        </Button>

      </div>
      
      <p className="text-[10px] text-muted text-center sm:text-left">
        * Select customized quantity (MOQ: {product.moq} units). Double-click inputs to type exact numbers.
      </p>

    </div>
  );
}
export { AddToRFQButton };
