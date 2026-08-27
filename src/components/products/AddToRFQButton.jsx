import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
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
    if (quantity < product.moq) {
      setQuantity(product.moq);
      alert(`Minimum order quantity is ${product.moq} units.`);
    }
  };

  const increment = () => setQuantity((prev) => prev + 10);
  const decrement = () => setQuantity((prev) => Math.max(product.moq, prev - 10));

  const handleAdd = () => {
    if (quantity < product.moq) {
      alert(`Quantity must be at least ${product.moq} units.`);
      return;
    }
    addToRFQ(product, quantity, selectedColor);
    alert(`Added ${quantity} units of ${product.name} (${selectedColor}) to your inquiry.`);
  };

  return (
    <div className="space-y-4 border border-border bg-card p-6">
      <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted border-b border-border-light pb-3">
        Configure Quote Volume
      </h4>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <div className="flex items-center border border-border bg-ivory h-12 overflow-hidden">
          <button onClick={decrement} className="px-4 hover:bg-ink/5 text-ink cursor-pointer h-full border-r border-border transition-colors">
            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQtyChange(e.target.value)}
            onBlur={handleBlur}
            className="w-20 text-center font-mono text-xs text-ink focus:outline-none bg-transparent"
            min={product.moq}
            step={10}
          />
          <button onClick={increment} className="px-4 hover:bg-ink/5 text-ink cursor-pointer h-full border-l border-border transition-colors">
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>

        <Button variant="primary" onClick={handleAdd} className="flex-grow flex items-center justify-center h-12">
          Add to Inquiry
        </Button>
      </div>

      <p className="text-[9px] text-muted text-center sm:text-left font-mono">
        MOQ: {product.moq} units. Step: 10.
      </p>
    </div>
  );
}
