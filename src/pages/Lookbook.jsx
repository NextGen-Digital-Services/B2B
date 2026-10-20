import React from 'react';
import { motion } from 'framer-motion';
import ReelsStrip from '../components/products/ReelsStrip';
import SectionHeading from '../components/shared/SectionHeading';

export default function Lookbook() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-grow bg-ivory pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="LOOKBOOK"
          title="The Zycoon Lookbook"
          description="Vertical reels and visual stories from our factory floor, materials and finished bags. Fresh shots are added here as they are published."
          align="left"
        />

        <ReelsStrip />
      </div>
    </motion.div>
  );
}
export { Lookbook };
