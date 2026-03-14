// ============================================================
//  hooks/useLanguage.js
//  Simple hook to manage the active language state.
//  Persists the user's last choice in localStorage.
// ============================================================

import { useState } from 'react';

export const LANGUAGES = ['zh', 'ja', 'en'];

export const LANG_LABELS = {
  zh: '中文',
  ja: '日本語',
  en: 'EN',
};

export function useLanguage(defaultLang = 'zh') {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      return LANGUAGES.includes(saved) ? saved : defaultLang;
    } catch {
      return defaultLang;
    }
  });

  const switchLang = (next) => {
    if (LANGUAGES.includes(next)) {
      setLang(next);
      try { localStorage.setItem('portfolio-lang', next); } catch {}
    }
  };

  return { lang, switchLang };
}
