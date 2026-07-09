import React from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const PROJECTS_SECTION = {
  eyebrow:  'MY WORK',
  headline: 'Featured Projects',
  subtext:  'A curated selection of projects that showcase my range — from pixel-perfect UI to full-stack engineering.',
  // Add or remove project cards below
  projects: [
    {
      tag:         'Web App',
      tagColor:    'var(--color-primary)',
      title:       'Project Title One',
      description: 'A short description of what this project does, the problem it solves, and the technologies used to build it.',
      tech:        ['React', 'Firebase', 'Figma'],
      liveHref:    '#',
      codeHref:    '#',
      // Replace with a real screenshot or generated preview image
      previewBg:   'linear-gradient(135deg, #ffd9df 0%, #ffe8ef 100%)',
      previewEmoji:'🚀',
    },
    {
      tag:         'UI Design',
      tagColor:    '#f3644f',
      title:       'Project Title Two',
      description: 'Describe the core concept, your design decisions, and any interesting technical challenges you overcame.',
      tech:        ['Figma', 'Framer', 'Next.js'],
      liveHref:    '#',
      codeHref:    '#',
      previewBg:   'linear-gradient(135deg, #ffe8ef 0%, #ffd8e6 100%)',
      previewEmoji:'🎨',
    },
    {
      tag:         'Full Stack',
      tagColor:    'var(--color-secondary)',
      title:       'Project Title Three',
      description: 'Summarise what makes this project unique — the stack, the scale, the user impact, or the learning involved.',
      tech:        ['Node.js', 'TypeScript', 'REST API'],
      liveHref:    '#',
      codeHref:    '#',
      previewBg:   'linear-gradient(135deg, #ffd8e6 0%, #fff0f4 100%)',
      previewEmoji:'⚡',
    },
  ],
  viewAllHref: '#',
};
// ──────────────────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <article style={{
      background: '#fff',
      border: '1px solid rgba(19,1,9,0.08)',
      borderRadius: '24px',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translate(-4px,-4px)';
        e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-secondary)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Preview area */}
      <div style={{
        background: project.previewBg,
        height: '180px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '56px',
        borderBottom: '1px solid rgba(19,1,9,0.06)',
      }}>
        {project.previewEmoji}
      </div>

      {/* Card body */}
      <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
        {/* Tag */}
        <span style={{
          display: 'inline-block', width: 'fit-content',
          padding: '4px 12px', borderRadius: '999px',
          background: `${project.tagColor}18`,
          color: project.tagColor,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '11px', letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>{project.tag}</span>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '20px',
          color: 'var(--color-on-surface)', margin: 0, lineHeight: 1.2,
        }}>{project.title}</h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '14px', lineHeight: '1.7',
          color: 'var(--color-on-surface-variant)', margin: 0, flex: 1,
        }}>{project.description}</p>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: '999px',
              background: 'var(--color-surface-container)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600, fontSize: '11px',
              color: 'var(--color-on-surface-variant)',
            }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{
          display: 'flex', gap: '12px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(19,1,9,0.06)',
        }}>
          <a href={project.liveHref} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '13px',
            color: '#fff', background: 'var(--color-primary)',
            padding: '8px 18px', borderRadius: '8px',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}
          >
            Live ↗
          </a>
          <a href={project.codeHref} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '13px',
            color: 'var(--color-on-surface)',
            background: 'transparent',
            border: '1px solid rgba(19,1,9,0.15)',
            padding: '8px 18px', borderRadius: '8px',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor='var(--color-primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='rgba(19,1,9,0.15)'}
          >
            Code ⌥
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectCard() {
  return (
    <section
      id="projects"
      style={{ padding: '120px 24px', background: 'var(--color-surface-container-low)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px',
          marginBottom: '56px',
        }}>
          <div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em',
              color: 'var(--color-primary)', marginBottom: '10px', textTransform: 'uppercase',
            }}>{PROJECTS_SECTION.eyebrow}</p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.15, letterSpacing: '-0.01em',
              color: 'var(--color-on-surface)', margin: '0 0 12px',
            }}>{PROJECTS_SECTION.headline}</h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '16px', lineHeight: '1.65',
              color: 'var(--color-on-surface-variant)', margin: 0, maxWidth: '480px',
            }}>{PROJECTS_SECTION.subtext}</p>
          </div>
          <a href={PROJECTS_SECTION.viewAllHref} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: '14px',
            color: 'var(--color-primary)',
            border: '1.5px solid var(--color-primary)',
            padding: '10px 24px', borderRadius: '10px',
            textDecoration: 'none', whiteSpace: 'nowrap',
            transition: 'background 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background='var(--color-primary)'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--color-primary)'; }}
          >
            View All →
          </a>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {PROJECTS_SECTION.projects.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
