import React from 'react';

export function ProjectCardItem({ project }) {
  return (
    <article
      className="card-bg"
      style={{
        border: '1px solid rgba(19,1,9,0.08)',
        borderRadius: '18px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translate(-3px,-3px)';
        e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-secondary)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        className="card-bg"
        style={{
          height: '110px',
          borderBottom: '1px solid rgba(19,1,9,0.06)',
          backgroundColor: 'transparent',
        }}
      />

      <div style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: 1,
        background: 'rgba(255,255,255,0.82)',
      }}>
        <span style={{
          display: 'inline-block', width: 'fit-content',
          padding: '3px 10px', borderRadius: '999px',
          background: `${project.tagColor}18`,
          color: project.tagColor,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '10px', letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>{project.tag}</span>

        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '16px',
          color: 'var(--color-on-surface)', margin: 0, lineHeight: 1.2,
        }}>{project.title}</h3>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '12px', lineHeight: '1.55',
          color: 'var(--color-on-surface-variant)', margin: 0, flex: 1,
        }}>{project.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '2px 8px', borderRadius: '999px',
              background: 'var(--color-surface-container)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600, fontSize: '10px',
              color: 'var(--color-on-surface-variant)',
            }}>{t}</span>
          ))}
        </div>

        <div style={{
          display: 'flex', gap: '8px',
          paddingTop: '10px',
          borderTop: '1px solid rgba(19,1,9,0.06)',
        }}>
          <a href={project.liveHref} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '12px',
            color: '#fff', background: 'var(--color-primary)',
            padding: '6px 12px', borderRadius: '8px',
            textDecoration: 'none',
          }}>
            Live ↗
          </a>
          <a href={project.codeHref} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '12px',
            color: 'var(--color-on-surface)',
            background: 'transparent',
            border: '1px solid rgba(19,1,9,0.15)',
            padding: '6px 12px', borderRadius: '8px',
            textDecoration: 'none',
          }}>
            Code ⌥
          </a>
        </div>
      </div>
    </article>
  );
}

/** Kept for compatibility — projects now live beside Services */
export default function ProjectCard() {
  return null;
}
