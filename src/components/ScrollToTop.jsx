// ============================================================
//  components/ScrollToTop.jsx
// ============================================================

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scroll-top${show ? ' show' : ''}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
