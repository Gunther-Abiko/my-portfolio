// ============================================================
//  hooks/useScrollReveal.js
//  Attaches an IntersectionObserver to animate elements into
//  view when they enter the viewport.
// ============================================================

import { useEffect, useRef } from 'react';

/**
 * Returns a ref to attach to a container element.
 * All children with className "reveal" inside that container
 * will receive "visible" once they enter the viewport.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add('visible'),
              i * 90,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
