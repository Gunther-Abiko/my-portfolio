// ============================================================
//  components/Hero.jsx
// ============================================================

export default function Hero({ t }) {
  const th = t.hero;

  return (
    <section id="hero" style={styles.section}>
      {/* Left — text */}
      <div style={styles.left}>
        <p style={styles.eyebrow}>{th.eyebrow}</p>

        <h1 style={styles.name}>
          {th.nameL1}<br />
          <em style={styles.nameEm}>{th.nameL2}</em><br />
          {th.nameL3}
        </h1>

        <p style={styles.tagline}>
          {th.tagline.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        <div style={styles.cta}>
          <a href="#portfolio" className="btn btn--primary">{th.ctaPrimary}</a>
          <a href="#contact"   className="btn btn--outline">{th.ctaSecondary}</a>
        </div>
      </div>

      {/* Right — decorative frame */}
      <div style={styles.right}>
        <div style={styles.frame}>
          {['tl','tr','bl','br'].map((pos) => (
            <span key={pos} style={styles.corner(pos)} />
          ))}
        </div>
        <div style={styles.portrait}>
          <span style={styles.portraitIcon}>◈</span>
          <span style={styles.portraitLabel}>{th.photoLabel}</span>
        </div>
        <span style={styles.decoText}>UI</span>
      </div>
    </section>
  );
}

// Corner helper
function cornerStyle(pos) {
  const base = {
    position:    'absolute',
    width:       '24px',
    height:      '24px',
    borderColor: 'var(--gold)',
    borderStyle: 'solid',
    opacity:     0.8,
  };
  const map = {
    tl: { top: '-1px', left:  '-1px', borderWidth: '2px 0 0 2px' },
    tr: { top: '-1px', right: '-1px', borderWidth: '2px 2px 0 0' },
    bl: { bottom: '-1px', left:  '-1px', borderWidth: '0 0 2px 2px' },
    br: { bottom: '-1px', right: '-1px', borderWidth: '0 2px 2px 0' },
  };
  return { ...base, ...map[pos] };
}

const styles = {
  section: {
    minHeight:           '100vh',
    display:             'grid',
    gridTemplateColumns: '1fr 1fr',
    paddingTop:          '68px',
  },
  left: {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    padding:        '80px 60px 80px 80px',
  },
  eyebrow: {
    fontSize:      '0.8rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color:         'var(--muted)',
    marginBottom:  '24px',
    animation:     'fadeUp 0.8s ease both',
  },
  name: {
    fontFamily:  'var(--font-display)',
    fontSize:    'clamp(3rem, 6vw, 5.5rem)',
    fontWeight:  700,
    lineHeight:  1.05,
    color:       'var(--ink)',
    animation:   'fadeUp 0.8s 0.15s ease both',
  },
  nameEm: {
    fontStyle: 'italic',
    color:     'var(--rust)',
  },
  tagline: {
    marginTop:   '28px',
    fontSize:    '1.2rem',
    fontStyle:   'italic',
    color:       'var(--sepia)',
    maxWidth:    '380px',
    borderLeft:  '2px solid var(--gold)',
    paddingLeft: '20px',
    animation:   'fadeUp 0.8s 0.3s ease both',
  },
  cta: {
    marginTop: '48px',
    display:   'flex',
    gap:       '20px',
    animation: 'fadeUp 0.8s 0.45s ease both',
  },
  right: {
    position:        'relative',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    overflow:        'hidden',
    background:      'var(--parchment)',
    animation:       'fadeIn 1.2s 0.2s ease both',
  },
  frame: {
    position: 'absolute',
    inset:    '30px',
    border:   '1px solid var(--border)',
  },
  corner: (pos) => cornerStyle(pos),
  portrait: {
    width:          '260px',
    height:         '320px',
    background:     'linear-gradient(160deg, var(--border) 0%, var(--parchment) 100%)',
    border:         '1px solid var(--border)',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '12px',
    color:          'var(--muted)',
    position:       'relative',
    zIndex:         1,
  },
  portraitIcon:  { fontSize: '2.5rem', opacity: 0.4 },
  portraitLabel: { fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' },
  decoText: {
    position:       'absolute',
    bottom:         '50px',
    right:          '50px',
    fontFamily:     'var(--font-display)',
    fontStyle:      'italic',
    fontSize:       '8rem',
    color:          'var(--border)',
    opacity:        0.3,
    lineHeight:     1,
    pointerEvents:  'none',
    zIndex:         0,
  },
};
