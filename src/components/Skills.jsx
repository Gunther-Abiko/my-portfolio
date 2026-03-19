// ============================================================
//  components/Skills.jsx
// ============================================================

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills({ t }) {
  const sectionRef = useScrollReveal();
  const ts = t.skills;

  return (
    <div id="skills" className="skills-bg section-full" ref={sectionRef}>
      <div className="section-inner">

        <div className="reveal skills-header">
          <p className="section-num">{ts.sectionNum}</p>
          <h2 className="section-title section-title--light">
            {ts.title}<em>{ts.titleEm}</em>
          </h2>
          <div className="section-divider">
            <div className="section-divider__line" />
            <div className="section-divider__dot" />
          </div>
        </div>

        <div className="reveal skills-grid">
          {ts.items.map((item, i) => (
            <SkillItem key={i} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

function SkillItem({ item }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { bar.style.width = `${item.pct}%`; }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(bar.parentElement);
    return () => observer.disconnect();
  }, [item.pct]);

  return (
    <div className="skill-item">
      <div className="skill-icon">{item.icon}</div>
      <div className="skill-name">{item.name}</div>
      <div className="skill-desc">{item.desc}</div>
      <div className="skill-bar-track">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ width: 0, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </div>
    </div>
  );
}
