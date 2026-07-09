import React, { useState, useEffect } from 'react';

// ── CUSTOMISE: Replace these values with your own ──────────────────────────
const BRAND_NAME  = 'YourBrand';     // e.g. "AnimeTech"
const NAV_LINKS   = [
  { href: '#hero',     label: 'Home'     },
  { href: '#about',    label: 'About'    },
  { href: '#tools',    label: 'Tools'    },
  { href: '#services', label: 'Services' },
  { href: '#connect',  label: 'Connect'  },
];
// ──────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      let current = sections[0];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.65)',
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(183,0,82,0.10)',
      boxShadow: scrolled ? '0 2px 20px rgba(183,0,82,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <nav style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Brand */}
        <a href="#hero" style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
          fontSize: '22px', letterSpacing: '-0.03em', textDecoration: 'none',
          color: 'var(--color-primary)',
        }}>
          {BRAND_NAME}
          <span style={{ color: 'var(--color-primary)', marginLeft: '4px' }}>✦</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}
            className="nav-desktop">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <a href={href} style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: active === id ? 700 : 500,
                  fontSize: '14px', textDecoration: 'none', letterSpacing: '0.03em',
                  color: active === id ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  borderBottom: active === id ? '2px solid var(--color-primary)' : '2px solid transparent',
                  paddingBottom: '2px', transition: 'all 0.2s ease',
                }}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a href="#contact" className="nav-cta" style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
          fontSize: '13px', letterSpacing: '0.04em',
          background: 'var(--color-primary)', color: '#fff',
          padding: '10px 22px', borderRadius: '999px',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform='scale(1.05)'; e.currentTarget.style.boxShadow='0 0 24px rgba(183,0,82,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='scale(1)';    e.currentTarget.style.boxShadow='none'; }}
        >
          Get in Touch →
        </a>

        {/* Mobile burger */}
        <button aria-label="Toggle menu" className="nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display:'none', background:'none', border:'none', cursor:'pointer', fontSize:'24px', color:'var(--color-primary)' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.97)', padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: '16px',
          borderTop: '1px solid rgba(183,0,82,0.10)',
        }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
              fontSize: '16px', color: 'var(--color-on-surface)', textDecoration: 'none',
            }}>{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
