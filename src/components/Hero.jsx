import React, { useEffect, useState } from 'react';
import { HERO } from '../data/siteContent';

const MOBILE_MQ = '(max-width: 640px)';

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_MQ).matches
      ? HERO.mobileIntroVideoSrc
      : HERO.introVideoSrc
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => {
      setVideoSrc(mq.matches ? HERO.mobileIntroVideoSrc : HERO.introVideoSrc);
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: 1,
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO.characterSrc}
        />
      </div>

      <div className="hero-inner">
        <div className="hero-content-panel">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'var(--color-primary)', color: '#fff',
            padding: '5px 12px', borderRadius: '999px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '10px', letterSpacing: '0.08em',
            width: 'fit-content',
            maxWidth: '100%',
            boxShadow: '0 4px 16px rgba(183,0,82,0.35)',
          }}>
            {HERO.badge}
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 48px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: 0,
            textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.6)',
          }}>
            {HERO.headline}{' '}
            <span style={{ color: '#ffb1c2' }}>{HERO.highlight}</span>
          </h1>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            lineHeight: 1.55,
            color: '#fff',
            maxWidth: '380px',
            width: '100%',
            margin: 0,
            textShadow: '0 2px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.7)',
            fontWeight: 500,
          }}>
            {HERO.subtext}
          </p>

          <div className="hero-cta-row">
            <a
              href={HERO.ctaPrimaryHref}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '13px',
                background: 'var(--color-primary)', color: '#fff',
                padding: '12px 24px', borderRadius: '10px',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 6px 20px rgba(183,0,82,0.4)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-3px,-3px)';
                e.currentTarget.style.boxShadow = '4px 4px 0px #fd8583';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translate(0,0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(183,0,82,0.4)';
              }}
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href={HERO.ctaSecondaryHref}
              target={HERO.ctaSecondaryHref.endsWith('.pdf') ? '_blank' : undefined}
              rel={HERO.ctaSecondaryHref.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '13px',
                background: 'rgba(255,255,255,0.16)',
                color: '#fff',
                padding: '12px 24px', borderRadius: '10px',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.65)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.28)';
                e.currentTarget.style.borderColor = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)';
              }}
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
