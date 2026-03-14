// ============================================================
//  components/Footer.jsx
// ============================================================

export default function Footer({ t }) {
  return (
    <footer style={styles.footer}>
      <p>{t.footer}</p>
    </footer>
  );
}

const styles = {
  footer: {
    background:    'var(--ink)',
    color:         'var(--muted)',
    textAlign:     'center',
    padding:       '36px 80px',
    fontSize:      '0.8rem',
    letterSpacing: '0.15em',
  },
};
