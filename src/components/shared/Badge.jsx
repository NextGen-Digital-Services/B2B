import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const variants = {
    default: 'border-border text-muted',
    gold: 'border-leather/30 text-leather',
    dark: 'border-ink/20 text-ink',
    light: 'border-ivory/20 text-ivory/60',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 border text-[9px] font-sans font-medium uppercase tracking-[0.15em] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
