import React from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' (burgundy), 'secondary' (cognac), 'outline-gold' (gold border), 'outline-dark'
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans text-sm uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 py-3.5 px-7 border rounded-[4px] cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary border-primary text-ivory hover:bg-primary-dark hover:border-primary-dark',
    secondary: 'bg-cognac border-cognac text-ivory hover:bg-[#92552E] hover:border-[#92552E]',
    'outline-gold': 'bg-transparent border-gold text-gold hover:bg-gold hover:text-primary-dark',
    'outline-dark': 'bg-transparent border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
export { Button };
