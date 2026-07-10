import React from 'react';
import { SERVICES, PROJECTS } from '../data/siteContent';
import { ProjectCardItem } from './ProjectCard';

export default function Services() {
  return (
    <section
      id="services"
      className="section-panel"
      style={{ padding: '64px 24px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="services-layout">
          {/* Available Services */}
          <div className="services-block">
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em',
                color: 'var(--color-primary)', marginBottom: '8px', textTransform: 'uppercase',
              }}>{SERVICES.eyebrow}</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 36px)',
                lineHeight: 1.15, letterSpacing: '-0.01em',
                color: 'var(--color-on-surface)', margin: '0 0 8px',
              }}>{SERVICES.headline}</h2>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '15px', lineHeight: '1.55',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '480px', margin: '0 auto',
              }}>{SERVICES.subtext}</p>
            </div>

            <div className="services-cards-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '10px',
              alignItems: 'stretch',
            }}>
              {SERVICES.services.map((svc, i) => {
                const featured = svc.featured;
                return (
                  <div
                    key={svc.title}
                    className={featured ? 'card-bg card-bg--featured' : 'card-bg'}
                    style={{
                      color: featured ? '#fff' : 'inherit',
                      borderRadius: '18px',
                      padding: '16px 14px',
                      display: 'flex', flexDirection: 'column',
                      boxShadow: featured
                        ? '0 12px 28px rgba(183,0,82,0.28)'
                        : '0 3px 12px rgba(183,0,82,0.06)',
                      transform: featured ? 'scale(1.01)' : 'scale(1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      position: 'relative', zIndex: featured ? 2 : 1,
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={e => {
                      if (!featured) {
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(183,0,82,0.14)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!featured) {
                        e.currentTarget.style.boxShadow = '0 3px 12px rgba(183,0,82,0.06)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <div style={{
                      width: '32px', height: '32px',
                      borderRadius: '10px', background: svc.iconBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: featured ? 'var(--color-primary)' : '#fff',
                      marginBottom: '10px', flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{svc.icon}</span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700, fontSize: '15px',
                      color: featured ? '#fff' : 'var(--color-on-surface)',
                      margin: '0 0 8px', lineHeight: 1.2,
                    }}>{svc.title}</h3>

                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '12px', lineHeight: '1.45',
                      color: featured ? 'rgba(255,255,255,0.80)' : 'var(--color-on-surface-variant)',
                      margin: '0 0 auto',
                    }}>{svc.description}</p>

                    <ul style={{
                      listStyle: 'none', padding: 0, margin: '12px 0 0',
                      borderTop: featured ? '1px solid rgba(255,255,255,0.20)' : '1px solid rgba(144,110,117,0.15)',
                      paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px',
                    }}>
                      {svc.bullets.map(b => (
                        <li key={b} style={{
                          display: 'flex', alignItems: 'center', gap: '5px',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600, fontSize: '11px',
                          color: featured ? '#fff' : 'var(--color-on-surface-variant)',
                        }}>
                          <span className="material-symbols-outlined" style={{
                            fontSize: '14px',
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
          </div>

          {/* Character — left of both blocks on desktop; between them on small screens */}
          <div className="services-character">
            <img
              src={SERVICES.characterSrc}
              alt={SERVICES.characterAlt}
              className="character-img services-character-img"
            />
          </div>

          {/* Featured Projects */}
          <div className="projects-block" id="projects">
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em',
                color: 'var(--color-primary)', marginBottom: '8px', textTransform: 'uppercase',
              }}>{PROJECTS.eyebrow}</p>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 'clamp(26px, 3.2vw, 36px)',
                lineHeight: 1.15, letterSpacing: '-0.01em',
                color: 'var(--color-on-surface)', margin: '0 0 8px',
              }}>{PROJECTS.headline}</h2>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '15px', lineHeight: '1.55',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '480px', margin: '0 auto 12px',
              }}>{PROJECTS.subtext}</p>
              <a href={PROJECTS.viewAllHref} style={{
                display: 'inline-flex',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '13px',
                color: 'var(--color-primary)',
                border: '1.5px solid var(--color-primary)',
                padding: '8px 20px', borderRadius: '10px',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background='var(--color-primary)'; e.currentTarget.style.color='#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--color-primary)'; }}
              >
                View All →
              </a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '12px',
            }}>
              {PROJECTS.projects.map(p => (
                <ProjectCardItem key={p.title} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
