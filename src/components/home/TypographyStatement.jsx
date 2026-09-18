import React from 'react';
import { motion } from 'framer-motion';

export default function TypographyStatement() {
  return (
    <section className="bg-ivory py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 leather-grain opacity-5 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, transition: { duration: 0.8 } }}
        >
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-serif text-ink leading-[1.2] italic">
            &ldquo;We don&apos;t follow one material. We choose what the product needs.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
