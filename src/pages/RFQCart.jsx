import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, ShieldAlert, ShoppingBag } from 'lucide-react';
import useRFQCart from '../hooks/useRFQCart';
import RFQForm from '../components/forms/RFQForm';
import { formatCurrency } from '../utils/helpers';
import SectionHeading from '../components/shared/SectionHeading';

export default function RFQCart() {
  const {
    cartItems,
    removeFromRFQ,
    updateQuantity,
    clearRFQ,
    distinctItemsCount
  } = useRFQCart();

  const handleQtyChange = (productId, color, val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed)) return;
    updateQuantity(productId, color, parsed);
  };

  const handleBlur = (item, val) => {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed) || parsed < item.moq) {
      updateQuantity(item.product_id, item.selected_color, item.moq);
      alert(`Quantity updated to minimum required MOQ of ${item.moq} units.`);
    }
  };

  if (distinctItemsCount === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow bg-ivory py-24 text-center font-sans"
      >
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="bg-[#FAF5EC] border border-border p-4 rounded-full inline-block text-cognac">
            <ShoppingBag className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-serif text-primary">Your RFQ List is Empty</h2>
          <p className="text-xs text-muted leading-relaxed font-light">
            You have not added any product models to your quote request list yet. Please explore our leather bags collections to configure quantity specifications.
          </p>
          <Link to="/products" className="inline-block">
            <button className="bg-primary text-ivory text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-[2px] cursor-pointer hover:bg-primary-dark transition-colors">
              Browse Wholesale Collections
            </button>
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
      className="flex-grow bg-ivory py-16 font-sans border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to catalog */}
        <Link
          to="/products"
          className="inline-flex items-center text-muted hover:text-primary transition-colors text-xs uppercase tracking-wider font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" strokeWidth={1.5} />
          Continue Browsing Catalog
        </Link>

        {/* Heading */}
        <SectionHeading
          eyebrow="Quotation Cart"
          title="Review B2B Quote Request"
          description="Verify products, colors, and wholesale quantities before launching your direct inquiry."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Left Table: Cart list (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Cart Table Container */}
            <div className="border border-border bg-card rounded-[2px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF5EC] border-b border-border text-[10px] uppercase font-bold text-muted tracking-wider">
                      <th className="py-4 px-6">Product Details</th>
                      <th className="py-4 px-4 text-center">MOQ Limit</th>
                      <th className="py-4 px-4 text-center">Adjust Qty</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs">
                    {cartItems.map((item) => (
                      <tr key={`${item.product_id}-${item.selected_color}`} className="hover:bg-[#FBF8F3]/50">
                        
                        {/* Name & Color */}
                        <td className="py-5 px-6">
                          <Link to={`/products/${item.product_slug}`} className="font-serif text-primary hover:text-cognac font-semibold text-sm">
                            {item.product_name}
                          </Link>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-[9px] uppercase tracking-wider text-muted font-sans font-medium">Color:</span>
                            <span className="text-[10px] text-charcoal font-medium">{item.selected_color}</span>
                          </div>
                        </td>

                        {/* MOQ limit */}
                        <td className="py-5 px-4 text-center font-mono text-charcoal">
                          {item.moq} units
                        </td>

                        {/* Adjust Qty */}
                        <td className="py-5 px-4">
                          <div className="flex justify-center">
                            <input
                              type="number"
                              value={item.quantity}
                              min={item.moq}
                              onChange={(e) => handleQtyChange(item.product_id, item.selected_color, e.target.value)}
                              onBlur={(e) => handleBlur(item, e.target.value)}
                              className="w-16 bg-[#FAF5EC] border border-border rounded-[2px] py-1.5 text-center font-mono text-xs focus:outline-none focus:border-cognac text-charcoal font-semibold"
                            />
                          </div>
                        </td>

                        {/* Remove button */}
                        <td className="py-5 px-6 text-right">
                          <button
                            onClick={() => removeFromRFQ(item.product_id, item.selected_color)}
                            className="text-muted hover:text-primary transition-colors cursor-pointer p-1.5 hover:bg-primary/5 rounded-[2px]"
                            aria-label="Remove item from RFQ list"
                          >
                            <Trash2 className="w-4.5 h-4.5" strokeWidth={1.5} />
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footer toolbar */}
              <div className="bg-[#FAF5EC] border-t border-border p-4 flex justify-between items-center text-xs">
                <span className="text-muted font-light">Distinct items in request: **{distinctItemsCount}**</span>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear all items from your quotation request?')) {
                      clearRFQ();
                    }
                  }}
                  className="text-muted hover:text-primary font-bold uppercase tracking-wider text-[10px]"
                >
                  Clear Quote Request
                </button>
              </div>

            </div>

            {/* B2B trade policy check warning */}
            <div className="bg-primary/5 border border-primary/20 p-5 flex items-start space-x-3.5 rounded-[2px]">
              <ShieldAlert className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-[11px] text-muted leading-relaxed space-y-1">
                <p className="font-bold text-primary">Wholesale Policy Verification Required</p>
                <p>
                  As an industrial leather goods manufacturer, we sell exclusively in commercial bulk packages. All order entries that do not satisfy individual product Minimum Order Quantities (MOQ) will be automatically adjusted to the minimum wholesale volume prior to quotation.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Checkout Quote Form (Col 5) */}
          <div className="lg:col-span-5">
            <RFQForm cartItems={cartItems} onClearCart={clearRFQ} />
          </div>

        </div>

      </div>
    </motion.div>
  );
}
export { RFQCart };
