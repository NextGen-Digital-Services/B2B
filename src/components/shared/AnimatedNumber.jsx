import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedNumber({
  value,
  suffix = '',
  format = false,
  className = '',
}) {
  const spanRef = useRef(null);
  const numericRef = useRef(null);
  const stateRef = useRef({ val: 0 });

  useEffect(() => {
    const span = spanRef.current;
    const numeric = numericRef.current;
    if (!span || !numeric) return undefined;

    const render = (v) => {
      const rounded = Math.round(v);
      numeric.textContent = format ? rounded.toLocaleString('en-US') : String(rounded);
    };

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      render(value);
      return undefined;
    }

    stateRef.current.val = 0;
    render(0);

    const tween = gsap.to(stateRef.current, {
      val: value,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => render(stateRef.current.val),
      scrollTrigger: {
        trigger: span,
        start: 'top 88%',
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, format]);

  return (
    <span className={className} ref={spanRef}>
      <span ref={numericRef}>{format ? (0).toLocaleString('en-US') : '0'}</span>
      {suffix}
    </span>
  );
}