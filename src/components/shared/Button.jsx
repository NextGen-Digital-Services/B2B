import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: `${baseStyles} bg-ink text-ivory px-7 py-3.5 hover:bg-espresso`,
    secondary: `${baseStyles} bg-leather text-ivory px-7 py-3.5 hover:bg-[#5A3A24]`,
    outline: `${baseStyles} bg-transparent text-ink border border-ink px-7 py-3.5 hover:bg-ink hover:text-ivory`,
    'outline-light': `${baseStyles} bg-transparent text-ivory border border-ivory/30 px-7 py-3.5 hover:bg-ivory/10`,
    ghost: `${baseStyles} bg-transparent text-ink px-5 py-3 hover:bg-ink/5`,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.12, ease: 'easeOut' }}
      className={`${variants[variant] || variants.primary} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
export { Button };
