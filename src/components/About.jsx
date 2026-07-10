import React from 'react';
import { ABOUT } from '../data/siteContent';

export default function About() {
  return (
    <section
      id="about"
      className="section-panel"
      style={{
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: '80px', alignItems: 'center',
        }}>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0,
              background: 'rgba(243,100,79,0.08)',
              borderRadius: '60px', filter: 'blur(40px)',
            }} />
            <div className="about-character-frame" style={{
              position: 'relative',
              border: '6px solid rgba(255,255,255,0.9)',
              borderRadius: '60px',
              overflow: 'visible',
              boxShadow: '0 20px 60px rgba(183,0,82,0.10)',
              background: 'transparent',
              aspectRatio: '1/1', width: '100%', maxWidth: '380px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img
                src={ABOUT.characterSrc}
                alt={ABOUT.characterAlt}
                className="character-img"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'center',
                  transition: 'transform 0.5s ease',
                  background: 'transparent',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em',
                color: '#f3644f', marginBottom: '12px', textTransform: 'uppercase',
              }}>
                {ABOUT.eyebrow}
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)',
                lineHeight: 1.15, letterSpacing: '-0.01em',
                color: 'var(--color-on-surface)', margin: 0,
              }}>
                {ABOUT.headline}
              </h2>
            </div>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '17px', lineHeight: '1.75',
              color: 'var(--color-on-surface-variant)', margin: 0,
            }}>
              {ABOUT.body}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {ABOUT.badges.map(b => (
                <span key={b.label} style={{
                  padding: '8px 18px',
                  background: '#fff',
                  color: b.color,
                  border: `1.5px solid ${b.border}`,
                  borderRadius: '999px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  {b.label}
                </span>
              ))}
            </div>

            <div style={{
              display: 'flex', gap: '40px', flexWrap: 'wrap',
              paddingTop: '8px',
              borderTop: '1px solid rgba(144,110,117,0.15)',
            }}>
              {ABOUT.stats.map(s => (
                <div key={s.label}>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800, fontSize: '28px',
                    color: 'var(--color-primary)', margin: '0 0 2px',
                    letterSpacing: '-0.02em',
                  }}>{s.value}</p>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '13px', color: 'var(--color-on-surface-variant)', margin: 0,
                  }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
