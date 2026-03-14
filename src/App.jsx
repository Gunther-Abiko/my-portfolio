// ============================================================
//  App.jsx  —  Root component
//  Composes all sections and passes the active translation
//  object + language switcher down as props.
// ============================================================

import './styles/global.css';

import { useLanguage }   from './hooks/useLanguage';
import { translations }  from './data/translations';

import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Portfolio   from './components/Portfolio';
import Skills      from './components/Skills';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const { lang, switchLang } = useLanguage('zh');
  const t = translations[lang];

  return (
    <>
      <Navbar t={t} lang={lang} switchLang={switchLang} />

      <Hero      t={t} />
      <About     t={t} />
      <Portfolio t={t} />
      <Skills    t={t} />
      <Contact   t={t} />
      <Footer    t={t} />

      <ScrollToTop />
    </>
  );
}
