import React from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const HERO = {
  badge:       'FUTURE-READY DEVELOPER',      // small label above the heading
  headline:    'Welcome to My',               // first line of h1
  highlight:   'Tech Universe!',              // coloured accent word(s) in h1
  subtext:     'Engineering immersive digital experiences with the precision of a high-tech HUD and the soul of modern anime aesthetics. Let\'s build the future, one pixel at a time.',
  ctaPrimary:  'Explore Projects',            // primary button label
  ctaSecondary:'Read Bio',                    // secondary button label
  ctaPrimaryHref:  '#services',
  ctaSecondaryHref:'#about',
  // Character image — swap path for your own illustration
  characterSrc: '/Charaters/Hero.png',
  characterAlt: 'Portfolio character illustration',
};
// ──────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fff8f8 0%, #ffe8ef 60%, #ffd8e6 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '520px', height: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(183,0,82,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '360px', height: '360px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(253,133,131,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkle decorations */}
      {['8% 20%', '92% 15%', '5% 75%', '88% 80%'].map((pos, i) => (
        <span key={i} aria-hidden="true" style={{
          position: 'absolute', left: pos.split(' ')[0], top: pos.split(' ')[1],
          fontSize: i % 2 === 0 ? '28px' : '18px',
          color: 'var(--color-primary)', opacity: 0.25,
          animation: `sparkle-float ${2.5 + i * 0.4}s ease-in-out infinite`,
          animationDelay: `${i * 0.6}s`,
        }}>✦</span>
      ))}

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 40px', width: '100%' }}>
        <div className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }}>
          {/* ─── Text column ─── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ffd9df', color: '#3f0018',
              padding: '6px 16px', borderRadius: '999px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em',
              width: 'fit-content',
            }}>
              <span style={{ fontSize: '14px' }}>★</span>
              {HERO.badge}
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: 'clamp(38px, 5vw, 60px)',
              lineHeight: 1.05, letterSpacing: '-0.02em',
              color: 'var(--color-on-surface)', margin: 0,
            }}>
              {HERO.headline}{' '}
              <span style={{ color: 'var(--color-primary)' }}>{HERO.highlight}</span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '17px', lineHeight: '1.7',
              color: 'var(--color-on-surface-variant)', maxWidth: '480px', margin: 0,
            }}>
              {HERO.subtext}
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '8px' }}>
              <a
                href={HERO.ctaPrimaryHref}
                className="hero-btn-primary"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '14px',
                  background: 'var(--color-primary)', color: '#fff',
                  padding: '14px 32px', borderRadius: '12px',
                  textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translate(-3px,-3px)'; e.currentTarget.style.boxShadow='4px 4px 0px var(--color-secondary)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='translate(0,0)';       e.currentTarget.style.boxShadow='none'; }}
              >
                {HERO.ctaPrimary}
              </a>
              <a
                href={HERO.ctaSecondaryHref}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '14px',
                  background: 'rgba(255,255,255,0.6)', color: 'var(--color-primary)',
                  padding: '14px 32px', borderRadius: '12px',
                  textDecoration: 'none', border: '1px solid rgba(183,0,82,0.25)',
                  backdropFilter: 'blur(8px)', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,217,223,0.5)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.6)'}
              >
                {HERO.ctaSecondary}
              </a>
            </div>
          </div>

          {/* ─── Character column ─── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative' }}>
            {/* Glow ring behind character */}
            <div aria-hidden="true" style={{
              position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
              width: '380px', height: '380px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(183,0,82,0.12) 0%, transparent 70%)',
            }} />
            <img
              src={HERO.characterSrc}
              alt={HERO.characterAlt}
              style={{
                width: '100%', maxWidth: '440px',
                objectFit: 'contain', position: 'relative',
                filter: 'drop-shadow(0 20px 40px rgba(183,0,82,0.15))',
                animation: 'float 5s ease-in-out infinite',
              }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
