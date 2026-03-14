// ============================================================
//  components/About.jsx
// ============================================================

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About({ t }) {
  const ref = useScrollReveal();
  const ta = t.about;

  return (
    <div id="about" style={styles.bg} ref={ref}>
      <div style={styles.inner}>

        {/* Left column — stats + portrait placeholder */}
        <div className="reveal" style={styles.left}>
          <p style={styles.statLabel}>{ta.expLabel}</p>
          <div style={styles.statNum}>{ta.expStat}</div>
          <p style={styles.statUnit}>{ta.expUnit}</p>

          <p style={styles.statLabel}>{ta.projLabel}</p>
          <div style={styles.statNum}>{ta.projStat}</div>
          <p style={styles.statUnit}>{ta.projUnit}</p>

          <div style={styles.portraitBox}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Your Photo
            </span>
          </div>
        </div>

        {/* Right column — text */}
        <div className="reveal">
          <div style={{ marginBottom: '32px' }}>
            <p className="section-num">{ta.sectionNum}</p>
            <h2 className="section-title">
              {ta.title}<em>{ta.titleEm}</em>
            </h2>
            <div className="section-divider">
              <div className="section-divider__line" />
              <div className="section-divider__dot" />
            </div>
          </div>

          <p style={styles.body}>{ta.body1}</p>
          <p style={styles.body}>{ta.body2}</p>

          <blockquote style={styles.quote}>{ta.quote}</blockquote>

          <p style={styles.body}>{ta.body3}</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  bg: {
    background: 'var(--parchment)',
    padding:    '100px 0',
  },
  inner: {
    maxWidth:            '1200px',
    margin:              '0 auto',
    padding:             '0 80px',
    display:             'grid',
    gridTemplateColumns: '1fr 1.6fr',
    gap:                 '80px',
    alignItems:          'start',
  },
  left: {},
  statLabel: {
    fontSize:      '0.75rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color:         'var(--muted)',
    marginBottom:  '4px',
  },
  statNum: {
    fontFamily: 'var(--font-display)',
    fontSize:   '4rem',
    fontWeight:  700,
    color:      'var(--rust)',
    lineHeight:  1,
  },
  statUnit: {
    fontSize:     '0.9rem',
    color:        'var(--sepia)',
    letterSpacing:'0.08em',
    marginBottom: '28px',
  },
  portraitBox: {
    width:          '100%',
    maxWidth:       '280px',
    aspectRatio:    '3/4',
    background:     'linear-gradient(180deg, var(--border) 0%, var(--cream) 100%)',
    border:         '1px solid var(--border)',
    position:       'relative',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    marginTop:      '8px',
  },
  body: {
    color:        'var(--sepia)',
    marginBottom: '18px',
    fontSize:     '1.05rem',
  },
  quote: {
    margin:     '32px 0',
    padding:    '22px 28px',
    borderLeft: '3px solid var(--gold)',
    background: 'rgba(196,147,63,0.06)',
    fontFamily: 'var(--font-felt)',
    fontStyle:  'italic',
    fontSize:   '1.25rem',
    color:      'var(--ink)',
    lineHeight: 1.6,
  },
};
