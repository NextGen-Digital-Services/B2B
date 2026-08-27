import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  inverted = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 lg:mb-16 ${
        isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`block text-[10px] font-sans font-medium uppercase tracking-[0.2em] mb-4 ${
            inverted ? 'text-ivory/50' : 'text-muted'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.05] ${
          inverted ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl ${
            isCenter ? 'mx-auto' : ''
          } ${inverted ? 'text-ivory/60' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
export { SectionHeading };
