import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function useCounter(targetValue, durationMs = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    // Parse the number, strip commas/plus signs for calculation
    const numericString = String(targetValue).replace(/[^0-9]/g, '');
    const end = parseInt(numericString, 10);
    
    if (isNaN(end)) {
      setCount(targetValue);
      return;
    }

    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      
      // easeOutQuad easing
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, targetValue, durationMs]);

  return { ref, count };
}
export { useCounter };
