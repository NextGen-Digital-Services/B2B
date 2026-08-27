import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, ShieldAlert, ShoppingBag } from 'lucide-react';
import useRFQCart from '../hooks/useRFQCart';
import RFQForm from '../components/forms/RFQForm';
import SectionHeading from '../components/shared/SectionHeading';

export default function RFQCart() {
  const { cartItems, removeFromRFQ, updateQuantity, clearRFQ, distinctItemsCount } = useRFQCart();

  const handleQtyChange = (productId, color, val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) return;
    updateQuantity(productId, color, parsed);
  };

  const handleBlur = (item, val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed) || parsed < item.moq) {
      updateQuantity(item.product_id, item.selected_color, item.moq);
      alert(`Quantity updated to minimum MOQ of ${item.moq} units.`);
    }
  };

  if (distinctItemsCount === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 text-center"
      >
        <div className="max-w-md mx-auto px-6 space-y-6">
          <ShoppingBag className="w-10 h-10 text-muted mx-auto" strokeWidth={1.5} />
          <h2 className="text-2xl font-serif text-ink">Your Inquiry List is Empty</h2>
          <p className="text-xs text-muted leading-relaxed font-light">
            Add products to your quote request list to get started.
          </p>
          <Link to="/products">
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink hover:text-leather transition-colors border-b border-ink hover:border-leather pb-0.5">
              Browse Collection
            </span>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Link
          to="/products"
          className="inline-flex items-center text-[10px] text-muted hover:text-ink transition-colors uppercase tracking-[0.15em] font-medium mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2" strokeWidth={1.5} />
          Continue Browsing
        </Link>

        <SectionHeading
          eyebrow="Inquiry Cart"
          title="Review B2B Quote Request"
          description="Verify products, colors, and quantities before submitting your inquiry."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-card border-b border-border text-[9px] uppercase font-medium text-muted tracking-[0.15em]">
                      <th className="py-4 px-6">Product</th>
                      <th className="py-4 px-4 text-center">MOQ</th>
                      <th className="py-4 px-4 text-center">Qty</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light text-xs">
                    {cartItems.map((item) => (
                      <tr key={`${item.product_id}-${item.selected_color}`} className="hover:bg-card/50 transition-colors">
                        <td className="py-5 px-6">
                          <Link to={`/products/${item.product_slug}`} className="font-serif text-ink hover:text-leather font-semibold text-sm transition-colors">
                            {item.product_name}
                          </Link>
                          <p className="text-[9px] text-muted font-mono mt-1 uppercase tracking-wider">{item.selected_color}</p>
                        </td>
                        <td className="py-5 px-4 text-center font-mono text-ink">{item.moq}</td>
                        <td className="py-5 px-4">
                          <div className="flex justify-center">
                            <input
                              type="number"
                              value={item.quantity}
                              min={item.moq}
                              onChange={(e) => handleQtyChange(item.product_id, item.selected_color, e.target.value)}
                              onBlur={(e) => handleBlur(item, e.target.value)}
                              className="w-16 bg-card border border-border py-1.5 text-center font-mono text-xs focus:outline-none focus:border-leather text-ink"
                            />
                          </div>
                        </td>
                        <td className="py-5 px-6 text-right">
                          <button
                            onClick={() => removeFromRFQ(item.product_id, item.selected_color)}
                            className="text-muted hover:text-ink transition-colors p-1.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-card border-t border-border p-4 flex justify-between items-center text-xs">
                <span className="text-muted font-mono">{distinctItemsCount} items</span>
                <button
                  onClick={() => {
                    if (window.confirm('Clear all items?')) clearRFQ();
                  }}
                  className="text-muted hover:text-ink font-medium uppercase tracking-wider text-[10px] transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="border border-border p-5 flex items-start space-x-3.5">
              <ShieldAlert className="w-5 h-5 text-leather mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-[11px] text-muted leading-relaxed space-y-1">
                <p className="font-medium text-ink">Wholesale Policy</p>
                <p>We sell exclusively in commercial bulk. Orders below MOQ will be adjusted prior to quotation.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <RFQForm cartItems={cartItems} onClearCart={clearRFQ} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
