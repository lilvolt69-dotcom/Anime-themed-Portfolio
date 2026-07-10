import React, { useState } from 'react';
import { CONTACT } from '../data/siteContent';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); e.target.reset(); }, 4000);
  };

  return (
    <section
      id="contact"
      className="section-panel"
      style={{ padding: '48px 24px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="contact-layout" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(16px, 2.5vw, 32px)',
          flexWrap: 'wrap',
        }}>
          <div className="contact-copy" style={{ flex: '0 1 520px', width: '100%', maxWidth: '520px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 36px)',
                lineHeight: 1.15, letterSpacing: '-0.01em',
                color: 'var(--color-on-surface)', margin: '0 0 8px',
              }}>{CONTACT.headline}</h2>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '16px', lineHeight: '1.65',
                color: 'var(--color-on-surface-variant)', margin: 0,
              }}>{CONTACT.subtext}</p>
            </div>

            <form
              onSubmit={handleSubmit}
              action={CONTACT.formAction}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                {[
                  { id: 'cf-name',  label: 'Name',  type: 'text',  placeholder: 'Your Name',      required: true  },
                  { id: 'cf-email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true  },
                ].map(f => (
                  <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor={f.id} style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600, fontSize: '12px', letterSpacing: '0.05em',
                      color: 'var(--color-primary)', textTransform: 'uppercase',
                    }}>{f.label}</label>
                    <input
                      id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required}
                      style={{
                        background: 'rgba(255,255,255,0.7)',
                        border: '1.5px solid rgba(144,110,117,0.20)',
                        borderRadius: '16px', padding: '14px 18px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '15px', color: 'var(--color-on-surface)',
                        outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor='var(--color-primary)'; e.target.style.boxShadow='0 0 0 3px rgba(183,0,82,0.10)'; }}
                      onBlur={e =>  { e.target.style.borderColor='rgba(144,110,117,0.20)'; e.target.style.boxShadow='none'; }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="cf-message" style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: '12px', letterSpacing: '0.05em',
                  color: 'var(--color-primary)', textTransform: 'uppercase',
                }}>Message</label>
                <textarea
                  id="cf-message" name="cf-message" rows={5} required
                  placeholder="Tell me about your project or idea..."
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1.5px solid rgba(144,110,117,0.20)',
                    borderRadius: '16px', padding: '14px 18px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '15px', color: 'var(--color-on-surface)',
                    outline: 'none', resize: 'vertical',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onFocus={e => { e.target.style.borderColor='var(--color-primary)'; e.target.style.boxShadow='0 0 0 3px rgba(183,0,82,0.10)'; }}
                  onBlur={e =>  { e.target.style.borderColor='rgba(144,110,117,0.20)'; e.target.style.boxShadow='none'; }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: sent ? '#006b27' : 'var(--color-on-surface)',
                  color: '#fff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '16px',
                  padding: '18px', borderRadius: '16px',
                  border: 'none', cursor: 'pointer',
                  transition: 'background 0.3s, transform 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { if (!sent) e.currentTarget.style.background='var(--color-primary)'; }}
                onMouseLeave={e => { if (!sent) e.currentTarget.style.background='var(--color-on-surface)'; }}
              >
                {sent ? '✓ Transmission Sent!' : 'Submit Transmission'}
              </button>
            </form>
          </div>

          <div className="contact-character" style={{
            flex: '0 0 auto',
            width: 'min(300px, 36vw)',
            textAlign: 'center',
          }}>
            <img
              src={CONTACT.characterSrc}
              alt={CONTACT.characterAlt}
              className="character-img"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 16px 32px rgba(183,0,82,0.16))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
