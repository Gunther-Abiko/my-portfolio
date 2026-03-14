// ============================================================
//  components/Contact.jsx
// ============================================================

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact({ t }) {
  const ref = useScrollReveal();
  const tc = t.contact;

  return (
    <div id="contact" style={styles.bg} ref={ref}>
      <div style={styles.inner}>

        {/* Left — info */}
        <div className="reveal">
          <div style={{ marginBottom: '32px' }}>
            <p className="section-num">{tc.sectionNum}</p>
            <h2 className="section-title">
              {tc.title}<em>{tc.titleEm}</em>
            </h2>
            <div className="section-divider">
              <div className="section-divider__line" />
              <div className="section-divider__dot" />
            </div>
          </div>

          <p style={styles.body}>{tc.body}</p>

          {CONTACT_LINKS.map(({ icon, label, href }) => (
            <a key={label} href={href} style={styles.contactLink}>
              <div style={styles.contactIcon}>{icon}</div>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Right — form */}
        <div className="reveal">
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <FormField label={tc.labelName}  type="text"  placeholder={tc.phName} />
            <FormField label={tc.labelEmail} type="email" placeholder={tc.phEmail} />
            <div style={styles.fieldGroup}>
              <label style={styles.label}>{tc.labelMsg}</label>
              <textarea
                placeholder={tc.phMsg}
                style={{ ...styles.input, resize: 'vertical', minHeight: '120px' }}
              />
            </div>
            <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
              {tc.send} →
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

function FormField({ label, type, placeholder }) {
  return (
    <div style={styles.fieldGroup}>
      <label style={styles.label}>{label}</label>
      <input type={type} placeholder={placeholder} style={styles.input} />
    </div>
  );
}

const CONTACT_LINKS = [
  { icon: '✉', label: 'hello@yourname.com',  href: 'mailto:hello@yourname.com' },
  { icon: '◎', label: 'Behance / Portfolio',  href: '#' },
  { icon: '⊞', label: 'LinkedIn',             href: '#' },
];

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
    gridTemplateColumns: '1fr 1fr',
    gap:                 '80px',
    alignItems:          'start',
  },
  body: {
    color:        'var(--sepia)',
    marginBottom: '36px',
    fontSize:     '1.05rem',
  },
  contactLink: {
    display:        'flex',
    alignItems:     'center',
    gap:            '14px',
    marginBottom:   '16px',
    color:          'var(--ink)',
    textDecoration: 'none',
    fontSize:       '1rem',
    transition:     'color 0.3s',
  },
  contactIcon: {
    width:          '40px',
    height:         '40px',
    border:         '1px solid var(--border)',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    fontSize:       '1rem',
    flexShrink:     0,
    transition:     'background 0.3s',
  },
  form: {
    display:       'flex',
    flexDirection: 'column',
    gap:           '20px',
  },
  fieldGroup: {
    display:       'flex',
    flexDirection: 'column',
    gap:           '8px',
  },
  label: {
    fontSize:      '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color:         'var(--muted)',
  },
  input: {
    padding:    '13px 17px',
    background: 'var(--cream)',
    border:     '1px solid var(--border)',
    color:      'var(--ink)',
    fontFamily: 'var(--font-body)',
    fontSize:   '1rem',
    outline:    'none',
    width:      '100%',
  },
};
