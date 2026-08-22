import React from 'react';
import { formatCurrency } from '../../utils/helpers';

export default function MOQPricingTable({ priceTiers, moq }) {
  return (
    <div className="font-sans border border-border bg-card p-6 rounded-[2px] space-y-4">
      
      <div className="border-b border-border pb-3 flex justify-between items-center">
        <h4 className="text-xs uppercase tracking-widest font-bold text-primary">
          Wholesale Tier Pricing (FOB)
        </h4>
        <span className="text-[10px] bg-primary text-gold uppercase tracking-wider py-1 px-3 rounded-[2px] font-semibold">
          Min Order: {moq} Units
        </span>
      </div>

      {/* Grid Table */}
      <div className="divide-y divide-border/60 text-xs">
        
        {/* Table Header */}
        <div className="flex justify-between items-center py-2.5 font-bold text-muted uppercase tracking-wider">
          <span>Order Volume (Units)</span>
          <span className="text-right">Unit Price (USD)</span>
        </div>

        {/* Table Rows */}
        {priceTiers.map((tier, idx) => {
          const qtyRange = tier.max_qty >= 999 
            ? `${tier.min_qty}+ units` 
            : `${tier.min_qty} - ${tier.max_qty} units`;

          return (
            <div key={idx} className="flex justify-between items-center py-3 font-mono text-charcoal">
              <span className="font-sans font-medium">{qtyRange}</span>
              <span className="text-cognac font-bold text-sm">
                {formatCurrency(tier.unit_price)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Logistics and Terms declaration */}
      <div className="pt-2 border-t border-border/40 text-[10px] text-muted space-y-1.5 leading-relaxed">
        <p>• Pricing terms: **FOB Kolkata port, India** (Incoterms 2020).</p>
        <p>• Standard Lead Time: **30 - 45 calendar days** from advance payment clearance.</p>
        <p>• Customs documentation: Certificate of Origin, REACH Lab Certificates, packing list, and commercial invoice are provided with all shipments.</p>
      </div>

    </div>
  );
}
export { MOQPricingTable };
