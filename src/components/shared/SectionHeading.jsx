import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' or 'center'
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'} ${className}`}>
      {eyebrow && (
        <span className="block text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-cognac mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl text-primary font-serif leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted font-sans font-light leading-relaxed">
          {description}
        </p>
      )}
      {/* Decorative solid accent line */}
      <div className={`mt-6 h-[1px] w-20 bg-gold/40 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
export { SectionHeading };
