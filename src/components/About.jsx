// ============================================================
//  components/About.jsx
// ============================================================

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About({ t }) {
  const ref = useScrollReveal();
  const ta = t.about;

  return (
    <div id="about" className="about-bg" ref={ref}>
      <div className="about-inner">

        {/* Left — stats + portrait */}
        <div className="reveal about-left">
          <p className="about-stat-label">{ta.expLabel}</p>
          <div className="about-stat-num">{ta.expStat}</div>
          <p className="about-stat-unit">{ta.expUnit}</p>

          <p className="about-stat-label">{ta.projLabel}</p>
          <div className="about-stat-num">{ta.projStat}</div>
          <p className="about-stat-unit">{ta.projUnit}</p>

          <div className="about-portrait">
            <span className="about-portrait-placeholder">Your Photo</span>
          </div>
        </div>

        {/* Right — text */}
        <div className="reveal">
          <div className="about-header">
            <p className="section-num">{ta.sectionNum}</p>
            <h2 className="section-title">{ta.title}<em>{ta.titleEm}</em></h2>
            <div className="section-divider">
              <div className="section-divider__line" />
              <div className="section-divider__dot" />
            </div>
          </div>
          <p className="about-body">{ta.body1}</p>
          <p className="about-body">{ta.body2}</p>
          <blockquote className="about-quote">{ta.quote}</blockquote>
          <p className="about-body">{ta.body3}</p>
        </div>

      </div>
    </div>
  );
}
