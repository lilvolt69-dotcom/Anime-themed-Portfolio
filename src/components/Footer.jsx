import React from 'react';
import { FOOTER } from '../data/siteContent';

export default function Footer() {
  const brandStem = FOOTER.brand.length > 4 ? FOOTER.brand.slice(0, -4) : FOOTER.brand;
  const brandTail = FOOTER.brand.length > 4 ? FOOTER.brand.slice(-4) : '';

  return (
    <footer className="section-panel" style={{
      position: 'relative', overflow: 'hidden',
      borderTop: '1px solid rgba(144,110,117,0.15)',
      borderRadius: 0,
      minHeight: '360px',
      width: '100%',
      zIndex: 2,
    }}>
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1280px', margin: '0 auto',
        padding: '48px 24px 32px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '40px',
      }}>
        <a href="#hero" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800, fontSize: '32px',
          letterSpacing: '-0.03em', textDecoration: 'none',
          color: 'var(--color-on-surface)',
        }}>
          {brandStem}
          <span style={{ color: 'var(--color-primary)' }}>{brandTail}</span>
        </a>

        <nav aria-label="Footer navigation">
          <ul style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '12px 32px', listStyle: 'none', margin: 0, padding: 0,
          }}>
            {FOOTER.links.map(l => (
              <li key={l.label}>
                <a href={l.href} style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: '13px', letterSpacing: '0.03em',
                  color: 'var(--color-on-surface-variant)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color='#f3644f'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--color-on-surface-variant)'}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{
          width: '100%', maxWidth: '480px',
          height: '1px', background: 'rgba(144,110,117,0.15)',
        }} />

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '13px', color: 'var(--color-on-surface-variant)',
          margin: 0, textAlign: 'center',
        }}>
          © {FOOTER.year} {FOOTER.brand}. {FOOTER.tagline}
        </p>
      </div>
    </footer>
  );
}
