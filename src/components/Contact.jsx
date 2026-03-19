// ============================================================
//  components/Contact.jsx
// ============================================================

import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACT_LINKS = [
  { icon: '✉', label: 'hello@yourname.com', href: 'mailto:hello@yourname.com' },
  { icon: '◎', label: 'Behance / Portfolio', href: '#' },
  { icon: '⊞', label: 'LinkedIn',            href: '#' },
];

export default function Contact({ t }) {
  const ref = useScrollReveal();
  const tc = t.contact;

  return (
    <div id="contact" className="contact-bg section-full" ref={ref}>
      <div className="contact-inner">

        {/* Left — info */}
        <div className="reveal">
          <div className="contact-header">
            <p className="section-num">{tc.sectionNum}</p>
            <h2 className="section-title">{tc.title}<em>{tc.titleEm}</em></h2>
            <div className="section-divider">
              <div className="section-divider__line" />
              <div className="section-divider__dot" />
            </div>
          </div>

          <p className="contact-body">{tc.body}</p>

          {CONTACT_LINKS.map(({ icon, label, href }) => (
            <a key={label} href={href} className="contact-link">
              <div className="contact-link-icon">{icon}</div>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Right — form */}
        <div className="reveal">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <FormField label={tc.labelName}  type="text"  placeholder={tc.phName} />
            <FormField label={tc.labelEmail} type="email" placeholder={tc.phEmail} />
            <div className="form-group">
              <label className="form-label">{tc.labelMsg}</label>
              <textarea className="form-input form-textarea" placeholder={tc.phMsg} />
            </div>
            <button type="submit" className="btn btn--primary contact-submit">
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
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input type={type} placeholder={placeholder} className="form-input" />
    </div>
  );
}
