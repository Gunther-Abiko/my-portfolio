// ============================================================
//  components/Skills.jsx
// ============================================================

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills({ t }) {
  const sectionRef = useScrollReveal();
  const ts = t.skills;

  return (
    <div id="skills" style={styles.bg} ref={sectionRef}>
      <div className="section-inner">

        <div className="reveal" style={{ marginBottom: '60px' }}>
          <p className="section-num">{ts.sectionNum}</p>
          <h2 className="section-title section-title--light">
            {ts.title}<em>{ts.titleEm}</em>
          </h2>
          <div className="section-divider">
            <div className="section-divider__line" />
            <div className="section-divider__dot" />
          </div>
        </div>

        <div className="reveal" style={styles.grid}>
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
          // Short delay for stagger feel
          setTimeout(() => {
            bar.style.width = `${item.pct}%`;
          }, 200);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(bar.parentElement);
    return () => observer.disconnect();
  }, [item.pct]);

  return (
    <div style={styles.item}>
      <div style={styles.icon}>{item.icon}</div>
      <div style={styles.name}>{item.name}</div>
      <div style={styles.desc}>{item.desc}</div>
      <div style={styles.barTrack}>
        <div
          ref={barRef}
          style={{ ...styles.barFill, width: 0, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </div>
    </div>
  );
}

const styles = {
  bg: {
    background: 'var(--ink)',
    padding:    '100px 0',
  },
  grid: {
    display:             'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap:                 '2px',
    border:              '1px solid rgba(200,184,154,0.12)',
  },
  item: {
    padding:    '34px 30px',
    border:     '1px solid rgba(200,184,154,0.10)',
    transition: 'background 0.3s',
  },
  icon: {
    fontSize:     '1.6rem',
    marginBottom: '14px',
  },
  name: {
    fontFamily:   'var(--font-display)',
    fontSize:     '1.05rem',
    color:        'var(--cream)',
    marginBottom: '8px',
  },
  desc: {
    fontSize:     '0.83rem',
    color:        'var(--muted)',
    lineHeight:   1.5,
    marginBottom: '18px',
  },
  barTrack: {
    height:     '2px',
    background: 'rgba(200,184,154,0.15)',
    position:   'relative',
  },
  barFill: {
    height:     '100%',
    background: 'linear-gradient(to right, var(--gold), var(--rust))',
    position:   'relative',
  },
};
