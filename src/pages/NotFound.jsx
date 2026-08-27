import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 flex items-center justify-center text-center"
    >
      <div className="max-w-md mx-auto px-6 space-y-6">
        <span className="stamp text-leather border-leather/30">Error</span>
        <h1 className="text-6xl font-serif text-ink">404</h1>
        <h2 className="text-xl font-serif text-ink uppercase tracking-wider">Specimen Not Found</h2>
        <p className="text-xs text-muted leading-relaxed font-light">
          The requested page could not be located in our archive.
        </p>
        <Link to="/" className="inline-block mt-4">
          <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-ink hover:text-leather transition-colors border-b border-ink hover:border-leather pb-0.5">
            Return to Archive
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
