import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useSplitReveal from '../../hooks/useSplitReveal';

const EASE_OUT = [0.23, 1, 0.32, 1];

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  inverted = false,
}) {
  const isCenter = align === 'center';
  const scopeRef = useRef(null);
  useSplitReveal(scopeRef);

  return (
    <motion.div
      ref={scopeRef}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } } }}
      className={`mb-12 lg:mb-16 ${
        isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <motion.span
          variants={item}
          className={`block text-[10px] font-sans font-medium uppercase tracking-[0.2em] mb-4 ${
            inverted ? 'text-ivory/50' : 'text-muted'
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      <h2
        data-split
        className={`text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.05] ${
          inverted ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <motion.p
          variants={item}
          className={`mt-5 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl ${
            isCenter ? 'mx-auto' : ''
          } ${inverted ? 'text-ivory/60' : 'text-muted'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
export { SectionHeading };