import React from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const SERVICES_SECTION = {
  eyebrow:  'WHAT I OFFER',
  headline: 'Available Services',
  subtext:  'Elevating digital landscapes through strategic design and robust development practices.',
  // Services list — the middle card (index 1) is auto-highlighted in primary colour
  services: [
    {
      icon:         'developer_mode_tv',
      iconBg:       'var(--color-primary)',
      title:        'Frontend Development',
      description:  'Building performant, accessible, and reactive web applications using modern stacks like React, Next.js, and Vite.',
      bullets:      ['Responsive Layouts', 'SEO Optimisation'],
    },
    {
      icon:         'token',
      iconBg:       'rgba(255,255,255,0.25)',
      title:        'UI/UX Design',
      description:  'Crafting anime-inspired interfaces that prioritise user flow while delivering high-impact visual energy.',
      bullets:      ['High-Fi Prototypes', 'Visual Storytelling'],
      featured:     true,          // ← highlighted card
    },
    {
      icon:         'auto_fix_high',
      iconBg:       '#f3644f',
      title:        'Creative Engineering',
      description:  'Specialised solutions for unique digital interactions, micro-animations, and experimental web experiments.',
      bullets:      ['Motion Graphics', 'Interactive Art'],
    },
  ],
  characterSrc: '/Charaters/services.png',
  characterAlt: 'Services section character illustration',
};
// ──────────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: '120px 24px', background: 'var(--color-surface-container)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em',
            color: 'var(--color-primary)', marginBottom: '10px', textTransform: 'uppercase',
          }}>{SERVICES_SECTION.eyebrow}</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)',
            lineHeight: 1.15, letterSpacing: '-0.01em',
            color: 'var(--color-on-surface)', margin: '0 0 16px',
          }}>{SERVICES_SECTION.headline}</h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '17px', lineHeight: '1.7',
            color: 'var(--color-on-surface-variant)',
            maxWidth: '560px', margin: '0 auto',
          }}>{SERVICES_SECTION.subtext}</p>
        </div>

        {/* Cards + character */}
        <div className="services-layout" style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '48px', alignItems: 'center',
        }}>
          {/* Service cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px', alignItems: 'stretch',
          }}>
            {SERVICES_SECTION.services.map((svc, i) => {
              const featured = svc.featured;
              return (
                <div
                  key={svc.title}
                  style={{
                    background: featured ? 'var(--color-primary)' : 'rgba(255,255,255,0.55)',
                    backdropFilter: featured ? 'none' : 'blur(16px)',
                    WebkitBackdropFilter: featured ? 'none' : 'blur(16px)',
                    color: featured ? '#fff' : 'inherit',
                    borderRadius: '40px',
                    padding: '48px 40px',
                    display: 'flex', flexDirection: 'column',
                    boxShadow: featured
                      ? '0 24px 60px rgba(183,0,82,0.28)'
                      : '0 4px 20px rgba(183,0,82,0.06)',
                    transform: featured ? 'scale(1.04)' : 'scale(1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative', zIndex: featured ? 2 : 1,
                  }}
                  onMouseEnter={e => {
                    if (!featured) {
                      e.currentTarget.style.boxShadow = '0 16px 48px rgba(183,0,82,0.14)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!featured) {
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(183,0,82,0.06)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '56px', height: '56px',
                    borderRadius: '18px', background: svc.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: featured ? 'var(--color-primary)' : '#fff',
                    marginBottom: '28px', flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{svc.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: '22px',
                    color: featured ? '#fff' : 'var(--color-on-surface)',
                    margin: '0 0 16px', lineHeight: 1.2,
                  }}>{svc.title}</h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '15px', lineHeight: '1.7',
                    color: featured ? 'rgba(255,255,255,0.80)' : 'var(--color-on-surface-variant)',
                    margin: '0 0 auto',
                  }}>{svc.description}</p>

                  {/* Bullets */}
                  <ul style={{
                    listStyle: 'none', padding: 0, margin: '28px 0 0',
                    borderTop: featured ? '1px solid rgba(255,255,255,0.20)' : '1px solid rgba(144,110,117,0.15)',
                    paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px',
                  }}>
                    {svc.bullets.map(b => (
                      <li key={b} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600, fontSize: '13px',
                        color: featured ? '#fff' : 'var(--color-on-surface-variant)',
                      }}>
                        <span className="material-symbols-outlined" style={{
                          fontSize: '18px',
                          color: featured ? '#fff' : (i === 2 ? '#f3644f' : 'var(--color-primary)'),
                        }}>check_circle</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Character */}
          <div className="services-character" style={{ width: '220px', flexShrink: 0 }}>
            <img
              src={SERVICES_SECTION.characterSrc}
              alt={SERVICES_SECTION.characterAlt}
              style={{
                width: '100%', objectFit: 'contain',
                filter: 'drop-shadow(0 16px 32px rgba(183,0,82,0.12))',
                animation: 'float 5.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
