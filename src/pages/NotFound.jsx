import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/shared/Button';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow bg-ivory py-24 flex items-center justify-center font-sans text-center"
    >
      <div className="max-w-md mx-auto px-4 space-y-6">
        <h1 className="text-6xl font-serif text-primary">404</h1>
        <h2 className="text-xl font-serif text-charcoal uppercase tracking-wider">Page Not Found</h2>
        <p className="text-xs text-muted leading-relaxed font-light">
          The requested trade desk URL or catalog specification file could not be located on our export servers.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button variant="primary">
              Return to Trade Homepage
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
export { NotFound };
