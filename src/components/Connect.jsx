import React from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const CONNECT_SECTION = {
  headline:    "Let's",
  headlineAccent: 'Connect',
  subtext:     'Open to new projects, collabs, and conversations. Reach out — I respond within 24 hours.',
  ctaLabel:    'Book a Chat →',
  ctaHref:     '#contact',
  // Social links — swap href for your real profile URLs
  socials: [
    { icon: 'link',             label: 'LinkedIn',  href: '#' },
    { icon: 'alternate_email',  label: 'Email',     href: '#' },
    { icon: 'photo_camera',     label: 'Instagram', href: '#' },
    { icon: 'share',            label: 'Twitter/X', href: '#' },
  ],
  characterSrc: '/Charaters/lets-connect.png',
  characterAlt: 'Let\'s connect character illustration',
};
// ──────────────────────────────────────────────────────────────────────────

export default function Connect() {
  return (
    <section
      id="connect"
      style={{ padding: '120px 24px', background: 'var(--color-surface)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: '60px',
          padding: 'clamp(40px, 6vw, 96px)',
          overflow: 'hidden', position: 'relative',
          display: 'flex', alignItems: 'center',
          gap: '64px', flexWrap: 'wrap',
          boxShadow: '0 8px 48px rgba(183,0,82,0.06)',
        }}>

          {/* Decorative sparkles */}
          {['top:20px;right:80px', 'bottom:30px;left:60px'].map((s, i) => (
            <span key={i} aria-hidden="true" style={{
              position: 'absolute',
              ...(Object.fromEntries(s.split(';').map(x => x.split(':')))),
              fontSize: i === 0 ? '40px' : '24px',
              color: 'var(--color-primary)', opacity: 0.12,
            }}>✦</span>
          ))}

          {/* Text + socials + CTA */}
          <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.05, letterSpacing: '-0.02em',
              color: 'var(--color-on-surface)', margin: 0,
            }}>
              {CONNECT_SECTION.headline}{' '}
              <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>
                {CONNECT_SECTION.headlineAccent}
              </span>
            </h2>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '17px', lineHeight: '1.7',
              color: 'var(--color-on-surface-variant)', margin: 0, maxWidth: '440px',
            }}>
              {CONNECT_SECTION.subtext}
            </p>

            {/* Social icon row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {CONNECT_SECTION.socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: '52px', height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1.5px solid rgba(183,0,82,0.20)',
                    color: 'var(--color-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{s.icon}</span>
                </a>
              ))}
            </div>

            {/* CTA button */}
            <div>
              <a
                href={CONNECT_SECTION.ctaHref}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '18px',
                  background: 'var(--color-primary)', color: '#fff',
                  padding: '18px 40px', borderRadius: '20px',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 20px rgba(183,0,82,0.25)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(183,0,82,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='scale(1)';    e.currentTarget.style.boxShadow='0 4px 20px rgba(183,0,82,0.25)'; }}
              >
                {CONNECT_SECTION.ctaLabel}
              </a>
            </div>
          </div>

          {/* Character */}
          <div className="connect-character" style={{ width: '280px', flexShrink: 0 }}>
            <img
              src={CONNECT_SECTION.characterSrc}
              alt={CONNECT_SECTION.characterAlt}
              style={{
                width: '100%', objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(183,0,82,0.14))',
                animation: 'float 5s ease-in-out infinite',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
