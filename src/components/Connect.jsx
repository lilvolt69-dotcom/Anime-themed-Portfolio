import React from 'react';
import { CONNECT } from '../data/siteContent';

export default function Connect() {
  return (
    <section
      id="connect"
      className="section-panel"
      style={{ padding: '40px 24px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="card-bg connect-panel" style={{
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: '28px',
          padding: 'clamp(16px, 2vw, 24px) clamp(20px, 3vw, 40px)',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(12px, 2vw, 28px)',
          flexWrap: 'wrap',
          boxShadow: '0 8px 32px rgba(183,0,82,0.06)',
        }}>
          <div className="connect-copy" style={{
            flex: '0 1 320px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            position: 'relative',
            zIndex: 1,
          }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.6vw, 40px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-on-surface)',
              margin: 0,
            }}>
              {CONNECT.headline}{' '}
              <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>
                {CONNECT.headlineAccent}
              </span>
            </h2>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px',
              lineHeight: 1.5,
              color: 'var(--color-on-surface-variant)',
              margin: 0,
              maxWidth: '360px',
            }}>
              {CONNECT.subtext}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '2px' }}>
              {CONNECT.socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: '42px', height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.7)',
                    border: '1.5px solid rgba(183,0,82,0.25)',
                    color: 'var(--color-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{s.icon}</span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: '4px' }}>
              <a
                href={CONNECT.ctaHref}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '15px',
                  background: 'var(--color-primary)', color: '#fff',
                  padding: '12px 26px', borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 16px rgba(183,0,82,0.25)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(183,0,82,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(183,0,82,0.25)';
                }}
              >
                {CONNECT.ctaLabel}
              </a>
            </div>
          </div>

          <div className="connect-character" style={{
            flex: '0 0 auto',
            width: 'min(380px, 44vw)',
            marginBlock: '-8px',
          }}>
            <img
              src={CONNECT.characterSrc}
              alt={CONNECT.characterAlt}
              className="character-img connect-character-img"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '440px',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                display: 'block',
                filter: 'drop-shadow(0 18px 40px rgba(183,0,82,0.22))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
