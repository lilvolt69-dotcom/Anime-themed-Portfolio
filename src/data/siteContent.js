/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  SITE CONTENT — Template placeholders
 *  Replace every value below with your own details before publishing.
 *  Character art lives in /public/Charaters/
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE = {
  brand: 'AnimeTech',           // e.g. "YourName" or studio name
  pageTitle: 'AnimeTech | Creative Tech Portfolio',
  tagline: 'Crafted with futuristic precision.',
};

export const NAV = {
  links: [
    { href: '#hero',     label: 'Home'     },
    { href: '#about',    label: 'About'    },
    { href: '#tools',    label: 'Tools'    },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Works'    },
    { href: '#connect',  label: 'Connect'  },
  ],
  ctaLabel: 'Get in Touch',
  ctaHref:  '#contact',
};

export const HERO = {
  badge:        'FUTURE READY DEVELOPER',
  headline:     'Welcome to My',
  highlight:    'Tech Universe!',
  subtext:      'Immersive digital experiences with anime soul and high tech precision.',
  ctaPrimary:       'Explore Projects',
  ctaSecondary:     'Resume',
  ctaPrimaryHref:   '#projects',
  ctaSecondaryHref: '/resume.pdf',   // drop your PDF into /public/resume.pdf
  characterSrc: '/Charaters/Hero.png',
  characterAlt: 'Portfolio character, hero portrait',
  introVideoSrc: '/Charaters/intro.mp4',
  mobileIntroVideoSrc: '/Charaters/mobileIntro.mp4',
};

export const ABOUT = {
  eyebrow:  '/ THE CREATIVE ENGINE',
  headline: 'Crafting Vibrant Precision',
  body:
    'I am a software engineer and UI designer obsessed with the intersection of technical proficiency and aesthetic excellence. My workflow is inspired by "tech wear" subcultures: efficient, modular, and visually striking. I build things that feel as good as they look.',
  badges: [
    { label: 'Frontend Dev',         color: 'var(--color-primary)',   border: 'rgba(183,0,82,0.2)'   },
    { label: 'UI/UX Design',         color: 'var(--color-secondary)', border: 'rgba(160,62,63,0.2)'  },
    { label: 'Creative Engineering', color: '#f3644f',                border: 'rgba(243,100,79,0.2)' },
    { label: 'Anime Art Tech',       color: '#006b27',                border: 'rgba(0,107,39,0.2)'   },
  ],
  stats: [
    { value: '00+', label: 'Projects Shipped' },
    { value: '00+', label: 'Happy Clients'    },
    { value: '00+', label: 'Years Experience' },
  ],
  characterSrc: '/Charaters/about.png',
  characterAlt: 'Portfolio character, about portrait',
};

export const TOOLS = {
  eyebrow:  'WHAT I USE',
  headline: 'Tech Toolbox',
  subtext:  'The digital forge where concepts become reality. High precision tools for modern building.',
  tools: [
    { name: 'React',      icon: 'code',                   color: '#61DAFB' },
    { name: 'Tailwind',   icon: 'layers',                 color: '#06B6D4' },
    { name: 'TypeScript', icon: 'terminal',               color: '#3178C6' },
    { name: 'Figma',      icon: 'draw',                   color: '#F24E1E' },
    { name: 'Framer',     icon: 'animation',              color: '#0055FF' },
    { name: 'Firebase',   icon: 'local_fire_department',  color: '#FFA611' },
    { name: 'Next.js',    icon: 'arrow_forward',          color: '#000000' },
    { name: 'Node.js',    icon: 'dns',                    color: '#339933' },
    { name: 'Git',        icon: 'merge',                  color: '#F05032' },
    { name: 'CSS / SASS', icon: 'palette',                color: '#CC6699' },
    { name: 'REST APIs',  icon: 'api',                    color: '#906e75' },
    { name: 'VS Code',    icon: 'laptop_chromebook',      color: '#007ACC' },
  ],
  characterSrc: '/Charaters/tools.png',
  characterAlt: 'Portfolio character, tools showcase',
};

export const SERVICES = {
  eyebrow:  'WHAT I OFFER',
  headline: 'Available Services',
  subtext:  'Elevating digital landscapes through strategic design and robust development practices.',
  services: [
    {
      icon:        'developer_mode_tv',
      iconBg:      'var(--color-primary)',
      title:       'Frontend Development',
      description: 'Building performant, accessible, and reactive web applications using modern stacks like React, Next.js, and Vite.',
      bullets:     ['Responsive Layouts', 'SEO Optimisation'],
    },
    {
      icon:        'token',
      iconBg:      'rgba(255,255,255,0.25)',
      title:       'UI/UX Design',
      description: 'Crafting anime inspired interfaces that prioritise user flow while delivering high impact visual energy.',
      bullets:     ['High Fi Prototypes', 'Visual Storytelling'],
      featured:    true,
    },
    {
      icon:        'auto_fix_high',
      iconBg:      '#f3644f',
      title:       'Creative Engineering',
      description: 'Specialised solutions for unique digital interactions, micro animations, and experimental web experiments.',
      bullets:     ['Motion Graphics', 'Interactive Art'],
    },
  ],
  characterSrc: '/Charaters/services.png',
  characterAlt: 'Portfolio character, services illustration',
};

export const PROJECTS = {
  eyebrow:  'MY WORK',
  headline: 'Featured Projects',
  subtext:  'A curated selection of projects that showcase range, from pixel perfect UI to full stack engineering.',
  viewAllHref: '#',
  projects: [
    {
      tag:          'Web App',
      tagColor:     'var(--color-primary)',
      title:        'Project Title One',
      description:  'A short description of what this project does, the problem it solves, and the technologies used to build it.',
      tech:         ['React', 'Firebase', 'Figma'],
      liveHref:     '#',
      codeHref:     '#',
    },
    {
      tag:          'UI Design',
      tagColor:     '#f3644f',
      title:        'Project Title Two',
      description:  'Describe the core concept, your design decisions, and any interesting technical challenges you overcame.',
      tech:         ['Figma', 'Framer', 'Next.js'],
      liveHref:     '#',
      codeHref:     '#',
    },
    {
      tag:          'Full Stack',
      tagColor:     'var(--color-secondary)',
      title:        'Project Title Three',
      description:  'Summarise what makes this project unique: the stack, the scale, the user impact, or the learning involved.',
      tech:         ['Node.js', 'TypeScript', 'REST API'],
      liveHref:     '#',
      codeHref:     '#',
    },
  ],
};

export const CONNECT = {
  headline:       "Let's",
  headlineAccent: 'Connect',
  subtext:        'Open to new projects, collabs, and conversations. Reach out, responses usually land within 24 hours.',
  ctaLabel:       'Book a Chat →',
  ctaHref:        '#contact',
  socials: [
    { icon: 'code',             label: 'GitHub',    href: '#' },
    { icon: 'link',             label: 'LinkedIn',  href: '#' },
    { icon: 'alternate_email',  label: 'Email',     href: 'mailto:hello@example.com' },
    { icon: 'photo_camera',     label: 'Instagram', href: '#' },
  ],
  characterSrc: '/Charaters/lets-connect.png',
  characterAlt: 'Portfolio character, let\'s connect',
};

export const CONTACT = {
  headline:   'Thank You for Stopping By',
  subtext:    'Get in touch, drop a message for collaborations or just a friendly hello.',
  formAction: '#',                          // FormSubmit / Netlify / mailto
  characterSrc: '/Charaters/thankyou.png',
  characterAlt: 'Portfolio character, thank you',
};

export const FOOTER = {
  brand:         SITE.brand,
  tagline:       SITE.tagline,
  year:          new Date().getFullYear(),
  backgroundSrc: '/Charaters/background2.png',
  links: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'GitHub',           href: '#' },
    { label: 'Twitter / X',      href: '#' },
    { label: 'LinkedIn',         href: '#' },
  ],
};
