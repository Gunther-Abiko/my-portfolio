// ============================================================
//  components/Hero.jsx
// ============================================================

export default function Hero({ t }) {
  const th = t.hero;

  return (
    <section id="hero" className="hero-grid">
      {/* Left — text */}
      <div className="hero-left">
        <p className="hero-eyebrow">{th.eyebrow}</p>

        <h1 className="hero-name">
          {th.nameL1}<br />
          <em className="hero-name-em">{th.nameL2}</em><br />
          {th.nameL3}
        </h1>

        <p className="hero-tagline">
          {th.tagline.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        <div className="hero-cta">
          <a href="#portfolio" className="btn btn--primary">{th.ctaPrimary}</a>
          <a href="#contact"   className="btn btn--outline">{th.ctaSecondary}</a>
        </div>
      </div>

      {/* Right — decorative frame */}
      <div className="hero-right">
        <div className="hero-frame">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
        </div>
        <div className="hero-portrait">
          <span className="hero-portrait-icon">◈</span>
          <span className="hero-portrait-label">{th.photoLabel}</span>
        </div>
        <span className="hero-deco-text">UI</span>
      </div>
    </section>
  );
}
