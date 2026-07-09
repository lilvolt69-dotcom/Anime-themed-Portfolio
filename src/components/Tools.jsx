import React from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const TOOLS_SECTION = {
  eyebrow:  'WHAT I USE',
  headline: 'Tech Toolbox',
  subtext:  'The digital forge where concepts become reality. High-precision tools for modern building.',
  // Add or remove tools below — icon uses Material Symbols name
  tools: [
    { name: 'React',       icon: 'code',             color: '#61DAFB' },
    { name: 'Figma',       icon: 'draw',             color: '#F24E1E' },
    { name: 'TypeScript',  icon: 'terminal',         color: '#3178C6' },
    { name: 'Node.js',     icon: 'dns',              color: '#339933' },
    { name: 'Firebase',    icon: 'local_fire_department', color: '#FFA611' },
    { name: 'Framer',      icon: 'animation',        color: '#0055FF' },
    { name: 'Next.js',     icon: 'arrow_forward',    color: '#000000' },
    { name: 'Git',         icon: 'merge',            color: '#F05032' },
    { name: 'Tailwind',    icon: 'layers',           color: '#06B6D4' },
    { name: 'CSS / SASS',  icon: 'palette',          color: '#CC6699' },
    { name: 'REST APIs',   icon: 'api',              color: '#906e75' },
    { name: 'VS Code',     icon: 'laptop_chromebook',color: '#007ACC' },
  ],
  // Character image — swap for your own illustration
  characterSrc: '/Charaters/tools.png',
  characterAlt: 'Tools section character illustration',
};
// ──────────────────────────────────────────────────────────────────────────

export default function Tools() {
  return (
    <section
      id="tools"
      style={{ padding: '120px 24px', overflow: 'hidden', background: 'var(--color-surface)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section header */}
        <div className="tools-header" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', gap: '40px', marginBottom: '64px',
          flexWrap: 'wrap',
        }}>
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em',
              color: 'var(--color-primary)', marginBottom: '10px', textTransform: 'uppercase',
            }}>{TOOLS_SECTION.eyebrow}</p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.15, letterSpacing: '-0.01em',
              color: 'var(--color-on-surface)', margin: 0,
            }}>{TOOLS_SECTION.headline}</h2>
          </div>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '16px', lineHeight: '1.65',
            color: 'var(--color-on-surface-variant)',
            maxWidth: '420px', margin: 0,
          }}>{TOOLS_SECTION.subtext}</p>
        </div>

        {/* Two-column layout: grid + character */}
        <div className="tools-body" style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '48px', alignItems: 'center',
        }}>
          {/* Tool cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '16px',
          }}>
            {TOOLS_SECTION.tools.map(tool => (
              <div
                key={tool.name}
                className="tool-card"
                tabIndex={0}
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
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
                  e.currentTarget.querySelector('.tool-icon-wrap').style.background = 'var(--color-primary)';
                  e.currentTarget.querySelector('.tool-icon-wrap').style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(183,0,82,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                  e.currentTarget.querySelector('.tool-icon-wrap').style.background = `${tool.color}15`;
                  e.currentTarget.querySelector('.tool-icon-wrap').style.color = tool.color;
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
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: '13px',
                  color: 'var(--color-on-surface)', textAlign: 'center',
                }}>{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Character — hidden on small screens via CSS class */}
          <div className="tools-character" style={{ width: '240px', flexShrink: 0 }}>
            <img
              src={TOOLS_SECTION.characterSrc}
              alt={TOOLS_SECTION.characterAlt}
              style={{
                width: '100%', objectFit: 'contain',
                filter: 'drop-shadow(0 16px 32px rgba(183,0,82,0.12))',
                animation: 'float 5s ease-in-out infinite',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
