import React from 'react';
import { TOOLS } from '../data/siteContent';

export default function Tools() {
  return (
    <section
      id="tools"
      className="section-panel"
      style={{ padding: '64px 24px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="tools-header" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', gap: '40px', marginBottom: '36px',
          flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em',
              color: 'var(--color-primary)', marginBottom: '10px', textTransform: 'uppercase',
            }}>{TOOLS.eyebrow}</p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.15, letterSpacing: '-0.01em',
              color: 'var(--color-on-surface)', margin: 0,
            }}>{TOOLS.headline}</h2>
          </div>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '16px', lineHeight: '1.65',
            color: 'var(--color-on-surface-variant)',
            maxWidth: '420px', margin: 0,
          }}>{TOOLS.subtext}</p>
        </div>

        <div className="tools-body" style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '48px', alignItems: 'center',
        }}>
          <div className="tools-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '16px',
          }}>
            {TOOLS.tools.map(tool => (
              <div
                key={tool.name}
                className="tool-card card-bg"
                tabIndex={0}
                style={{
                  border: '1px solid rgba(255,255,255,0.7)',
                  borderRadius: '24px',
                  padding: '28px 16px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  boxShadow: '0 2px 12px rgba(183,0,82,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(183,0,82,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(183,0,82,0.3)';
                  const icon = e.currentTarget.querySelector('.tool-icon-wrap');
                  if (icon) { icon.style.background = 'var(--color-primary)'; icon.style.color = '#fff'; }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(183,0,82,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                  const icon = e.currentTarget.querySelector('.tool-icon-wrap');
                  if (icon) { icon.style.background = `${tool.color}15`; icon.style.color = tool.color; }
                }}
              >
                <div
                  className="tool-icon-wrap"
                  style={{
                    width: '52px', height: '52px',
                    borderRadius: '14px',
                    background: `${tool.color}15`,
                    color: tool.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.25s, color 0.25s',
                    fontSize: '28px',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{tool.icon}</span>
                </div>
                <span className="tool-card-label" style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: '13px',
                  color: 'var(--color-on-surface)', textAlign: 'center',
                }}>{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="tools-character" style={{ width: '240px', flexShrink: 0 }}>
            <img
              src={TOOLS.characterSrc}
              alt={TOOLS.characterAlt}
              className="character-img"
              style={{
                width: '100%', objectFit: 'contain',
                filter: 'drop-shadow(0 16px 32px rgba(183,0,82,0.12))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
