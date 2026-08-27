import React from 'react';
import { formatCurrency } from '../../utils/helpers';

export default function MOQPricingTable({ priceTiers, moq }) {
  return (
    <div className="border border-border bg-card p-6 space-y-4">
      <div className="border-b border-border-light pb-3 flex justify-between items-center">
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted">
          Wholesale Tier Pricing (FOB)
        </h4>
        <span className="stamp bg-ink text-ivory border-ink">
          MOQ: {moq}
        </span>
      </div>

      <div className="divide-y divide-border-light text-xs">
        <div className="flex justify-between items-center py-2.5 font-mono text-[10px] text-muted uppercase tracking-[0.15em]">
          <span>Volume</span>
          <span>Unit Price</span>
        </div>
        {priceTiers.map((tier, idx) => {
          const qtyRange = tier.max_qty >= 999 ? `${tier.min_qty}+` : `${tier.min_qty} — ${tier.max_qty}`;
          return (
            <div key={idx} className="flex justify-between items-center py-3 font-mono text-ink">
              <span className="text-xs">{qtyRange}</span>
              <span className="text-sm font-medium">{formatCurrency(tier.unit_price)}</span>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-border-light text-[9px] text-muted space-y-1 font-mono leading-relaxed">
        <p>FOB Kolkata. Lead time: 30-45 days from payment.</p>
        <p>Docs included: CO, REACH certs, packing list, invoice.</p>
      </div>
    </div>
  );
}
