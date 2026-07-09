import React from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const FOOTER = {
  brand:       'YourBrand',      // matches Navbar brand name
  tagline:     'Crafted with futuristic precision.',
  year:        new Date().getFullYear(),
  // Footer navigation links
  links: [
    { label: 'Privacy Policy',  href: '#' },
    { label: 'Terms of Service',href: '#' },
    { label: 'GitHub',          href: '#' },
    { label: 'Twitter / X',     href: '#' },
    { label: 'LinkedIn',        href: '#' },
  ],
  // Character shown in footer background
  backgroundSrc: '/Charaters/background.png',
};
// ──────────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', overflow: 'hidden',
      borderTop: '1px solid rgba(144,110,117,0.15)',
      borderRadius: '40px 40px 0 0',
      minHeight: '320px',
    }}>
      {/* Subtle gradient background */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, var(--color-surface) 0%, #ffe8ef 100%)',
        zIndex: 0,
      }} />

      {/* Sparkle decorations */}
      {[
        { top: '18%', right: '6%',  size: '36px' },
        { top: '60%', left: '4%',   size: '22px' },
        { top: '45%', right: '22%', size: '18px' },
      ].map((s, i) => (
        <span key={i} aria-hidden="true" style={{
          position: 'absolute', ...s,
          fontSize: s.size, color: 'var(--color-primary)',
          opacity: 0.12, zIndex: 0,
          animation: `sparkle-float ${3 + i * 0.7}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
        }}>✦</span>
      ))}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1280px', margin: '0 auto',
        padding: '80px 24px 40px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '40px',
      }}>
        {/* Brand */}
        <a href="#hero" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800, fontSize: '32px',
          letterSpacing: '-0.03em', textDecoration: 'none',
          color: 'var(--color-on-surface)',
        }}>
          {FOOTER.brand.slice(0, -4) || FOOTER.brand}
          <span style={{ color: 'var(--color-primary)' }}>
            {FOOTER.brand.slice(-4) || ''}
          </span>
          <span style={{ marginLeft: '6px', fontSize: '26px' }}>✦</span>
        </a>

        {/* Navigation links */}
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

        {/* Divider */}
        <div style={{
          width: '100%', maxWidth: '480px',
          height: '1px', background: 'rgba(144,110,117,0.15)',
        }} />

        {/* Copyright */}
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
