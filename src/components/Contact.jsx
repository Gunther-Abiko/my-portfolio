// ============================================================
//  components/Contact.jsx
// ============================================================

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ── EmailJS 配置 ──────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'guntherxu';
const EMAILJS_TEMPLATE_ID = 'template_36tih7m';
const EMAILJS_PUBLIC_KEY  = 'YG6D7BtQRcA1HJMAW';

const CONTACT_LINKS = [
  { icon: '✉', label: 'guntherxu24@gmail.com', href: 'mailto:guntherxu24@gmail.com' },
  { icon: '◎', label: 'Portfolio',              href: '#' },
  { icon: '⌥', label: 'GitHub',                href: 'https://github.com/Gunther-Abiko' },
];

export default function Contact({ t }) {
  const ref = useScrollReveal();
  const formRef = useRef(null);
  const tc = t.contact;

  // 发送状态：'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    });
  };

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
            <a key={label} href={href} className="contact-link" target="_blank" rel="noreferrer">
              <div className="contact-link-icon">{icon}</div>
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Right — form */}
        <div className="reveal">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label className="form-label">{tc.labelName}</label>
              <input
                type="text"
                name="from_name"
                placeholder={tc.phName}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{tc.labelEmail}</label>
              <input
                type="email"
                name="from_email"
                placeholder={tc.phEmail}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{tc.labelMsg}</label>
              <textarea
                name="message"
                placeholder={tc.phMsg}
                className="form-input form-textarea"
                required
              />
            </div>

            {/* 发送按钮 + 状态提示 */}
            <div className="contact-form-footer">
              <button
                type="submit"
                className="btn btn--primary contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? '发送中…' : `${tc.send} →`}
              </button>

              {status === 'success' && (
                <p className="contact-status contact-status--success">
                  {tc.statusSuccess}
                </p>
              )}
              {status === 'error' && (
                <p className="contact-status contact-status--error">
                  {tc.statusError}
                </p>
              )}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
