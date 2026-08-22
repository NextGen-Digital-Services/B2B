import React from 'react';

export default function Badge({ text, variant = 'gold', className = '' }) {
  const styles = {
    gold: 'border border-gold/30 text-gold bg-primary-dark/30',
    cognac: 'border border-cognac/30 text-cognac bg-[#FAF5EC]',
    charcoal: 'border border-border text-charcoal bg-card',
    burgundy: 'border border-primary/20 text-primary bg-card',
  };

  return (
    <span className={`inline-block text-[10px] uppercase tracking-widest font-sans font-semibold py-1 px-3.5 rounded-[2px] ${styles[variant]} ${className}`}>
      {text}
    </span>
  );
}
export { Badge };
