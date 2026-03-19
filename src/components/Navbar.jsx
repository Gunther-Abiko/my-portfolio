// ============================================================
//  components/Navbar.jsx
// ============================================================

import { useState, useEffect } from 'react';
import { LANG_LABELS, LANGUAGES } from '../hooks/useLanguage';

export default function Navbar({ t, lang, switchLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">{t.nav.logo}</a>

      <button className="burger-btn" onClick={() => setBurger(!burger)}>☰</button>

      <ul className="nav-links">
        {['about', 'portfolio', 'skills', 'contact'].map((id) => (
          <li key={id}>
            <a href={`#${id}`} className="nav-link">{t.nav[id]}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {burger && (
        <div className="mobile-menu">
          {['about', 'portfolio', 'skills', 'contact'].map((id) => (
            <a key={id} href={`#${id}`} className="mobile-menu-link" onClick={() => setBurger(false)}>
              {t.nav[id]}
            </a>
          ))}
          <div className="mobile-lang-switcher">
            {LANGUAGES.map((l, i) => (
              <span key={l} className="lang-group">
                <button
                  onClick={() => { switchLang(l); setBurger(false); }}
                  className={`lang-btn${l === lang ? ' lang-btn--active' : ''}`}
                >
                  {LANG_LABELS[l]}
                </button>
                {i < LANGUAGES.length - 1 && <span className="lang-divider">·</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Desktop language switcher */}
      <div className="lang-switcher">
        {LANGUAGES.map((l, i) => (
          <span key={l} className="lang-group">
            <button
              onClick={() => switchLang(l)}
              className={`lang-btn${l === lang ? ' lang-btn--active' : ''}`}
            >
              {LANG_LABELS[l]}
            </button>
            {i < LANGUAGES.length - 1 && <span className="lang-divider">·</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
