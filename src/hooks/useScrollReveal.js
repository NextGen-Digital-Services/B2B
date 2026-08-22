import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export default function useScrollReveal(options = { once: true, amount: 0.15 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] // clean easeOutCubic
      }
    }
  };

  return { ref, controls, variants };
}
export { useScrollReveal };
