// ============================================================
//  components/Navbar.jsx
//  Sticky navigation with language switcher
// ============================================================

import { useState, useEffect } from 'react';
import { LANG_LABELS, LANGUAGES } from '../hooks/useLanguage';

export default function Navbar({ t, lang, switchLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={styles.nav(scrolled)}>
      <a href="#hero" style={styles.logo}>{t.nav.logo}</a>

      <ul style={styles.links}>
        {['about', 'portfolio', 'skills', 'contact'].map((id) => (
          <li key={id}>
            <a href={`#${id}`} style={styles.link}>{t.nav[id]}</a>
          </li>
        ))}
      </ul>

      {/* Language switcher */}
      <div style={styles.langSwitcher}>
        {LANGUAGES.map((l, i) => (
          <span key={l} style={styles.langGroup}>
            <button
              onClick={() => switchLang(l)}
              style={styles.langBtn(l === lang)}
            >
              {LANG_LABELS[l]}
            </button>
            {i < LANGUAGES.length - 1 && (
              <span style={styles.langDivider}>·</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: (scrolled) => ({
    position:       'fixed',
    top: 0, left: 0, right: 0,
    zIndex:         100,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        '0 60px',
    height:         '68px',
    background:     scrolled ? 'rgba(245,240,232,0.95)' : 'rgba(245,240,232,0.80)',
    backdropFilter: 'blur(8px)',
    borderBottom:   '1px solid #c8b89a',
    transition:     'background 0.3s',
  }),
  logo: {
    fontFamily:     'var(--font-display)',
    fontSize:       '1.25rem',
    fontStyle:      'italic',
    letterSpacing:  '0.04em',
    color:          'var(--ink)',
    textDecoration: 'none',
  },
  links: {
    listStyle: 'none',
    display:   'flex',
    gap:       '36px',
  },
  link: {
    fontFamily:     'var(--font-body)',
    fontSize:       '0.82rem',
    letterSpacing:  '0.2em',
    textTransform:  'uppercase',
    color:          'var(--sepia)',
    textDecoration: 'none',
  },
  langSwitcher: {
    display:    'flex',
    alignItems: 'center',
    gap:        '2px',
  },
  langGroup: {
    display:    'flex',
    alignItems: 'center',
    gap:        '6px',
  },
  langBtn: (active) => ({
    background:    'none',
    border:        'none',
    cursor:        'pointer',
    fontFamily:    'var(--font-body)',
    fontSize:      '0.78rem',
    letterSpacing: '0.12em',
    color:         active ? 'var(--rust)' : 'var(--muted)',
    fontWeight:    active ? '700' : '400',
    padding:       '4px 2px',
    transition:    'color 0.25s',
    textTransform: 'uppercase',
  }),
  langDivider: {
    color:    'var(--border)',
    fontSize: '0.7rem',
  },
};
