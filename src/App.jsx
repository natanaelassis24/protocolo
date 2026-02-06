import { useState } from 'react';

const copy = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Skills',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Ola, eu sou',
      title: 'Full-Stack Software Developer',
      lead:
        'Resolvo problemas de design, crio interfaces inteligentes e interacoes fluidas para produtos digitais.',
      ctaPrimary: 'Ver projetos',
      ctaSecondary: 'Sobre mim',
      stats: [
        { label: 'Experiencia', value: '1+' },
        { label: 'Especialidade', value: 'Full Stack' },
        { label: 'Local', value: 'Brasil' },
      ],
    },
    about: {
      title: 'Sobre',
      lead:
        'Designer-dev focado em performance, acessibilidade e detalhes que fazem a diferenca.',
      cards: [
        {
          title: 'Minha abordagem',
          text:
            'Unifico design e codigo para entregar experiencias consistentes, de wireframe ate deploy.',
        },
        {
          title: 'O que entrego',
          text:
            'Design system leve, componentes reutilizaveis, layouts responsivos e motion sutil.',
        },
        {
          title: 'Stack favorita',
          text: 'React, TypeScript, CSS moderno, Vite, API REST e CMS.',
        },
      ],
    },
    projects: {
      title: 'Projetos',
      lead: 'Uma selecao curta do que tenho construindo recentemente.',
      items: [
        {
          tag1: 'Web App',
          tag2: '2025',
          title: 'Painel Analytics',
          text: 'Dashboard responsivo com filtros, graficos e modo apresentacao.',
          demo: 'Demo',
          repo: 'Repositorio',
        },
        {
          tag1: 'Landing',
          tag2: '2024',
          title: 'Startup Studio',
          text: 'Site com hero animado, SEO tecnico e performance 95+.',
          demo: 'Demo',
          repo: 'Repositorio',
        },
        {
          tag1: 'E-commerce',
          tag2: '2025',
          title: 'Loja Minimal',
          text: 'Catalogo rapido com carrinho e checkout simplificado.',
          demo: 'Demo',
          repo: 'Repositorio',
        },
      ],
    },
    skills: {
      title: 'Skills',
      lead: 'Tecnologias e ferramentas com foco em UI e engenharia front-end.',
    },
    contact: {
      title: 'Vamos trabalhar juntos',
      text:
        'Me conte sobre o seu projeto. Posso ajudar a transformar ideias em interfaces reais.',
      email: 'Enviar email',
      linkedin: 'LinkedIn',
    },
    footer: {
      left: '© 2026 Natanael. Todos os direitos reservados.',
      right: 'Disponivel para novos projetos.',
    },
    highlight: 'Projeto em destaque',
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Hi, I am',
      title: 'Full-Stack Software Developer',
      lead:
        'I solve design problems, build smart interfaces, and craft smooth interactions for digital products.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'About me',
      stats: [
        { label: 'Experience', value: '1+' },
        { label: 'Focus', value: 'Full Stack' },
        { label: 'Location', value: 'Brazil' },
      ],
    },
    about: {
      title: 'About',
      lead:
        'Designer-dev focused on performance, accessibility, and details that make the difference.',
      cards: [
        {
          title: 'My approach',
          text:
            'I unite design and code to deliver consistent experiences, from wireframe to deploy.',
        },
        {
          title: 'What I deliver',
          text:
            'Light design system, reusable components, responsive layouts, and subtle motion.',
        },
        {
          title: 'Favorite stack',
          text: 'React, TypeScript, modern CSS, Vite, REST APIs, and CMS.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      lead: 'A short selection of what I have built recently.',
      items: [
        {
          tag1: 'Web App',
          tag2: '2025',
          title: 'Analytics Dashboard',
          text: 'Responsive dashboard with filters, charts, and presentation mode.',
          demo: 'Demo',
          repo: 'Repository',
        },
        {
          tag1: 'Landing',
          tag2: '2024',
          title: 'Startup Studio',
          text: 'Site with animated hero, technical SEO, and 95+ performance.',
          demo: 'Demo',
          repo: 'Repository',
        },
        {
          tag1: 'E-commerce',
          tag2: '2025',
          title: 'Minimal Shop',
          text: 'Fast catalog with cart, and simplified checkout.',
          demo: 'Demo',
          repo: 'Repository',
        },
      ],
    },
    skills: {
      title: 'Skills',
      lead: 'Technologies and tools focused on UI and front-end engineering.',
    },
    contact: {
      title: "Let's work together",
      text: 'Tell me about your project. I can help turn ideas into real interfaces.',
      email: 'Send email',
      linkedin: 'LinkedIn',
    },
    footer: {
      left: '© 2026 Natanael. All rights reserved.',
      right: 'Available for new projects.',
    },
    highlight: 'Featured project',
  },
};

export default function App() {
  const [lang, setLang] = useState('pt');
  const t = copy[lang];

  return (
    <>
      <div className="page">
        <header className="nav">
          <div className="logo">
            <span className="logo-mark">&gt;</span> DVLP R
          </div>
          <div className="nav-actions">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
                onClick={() => setLang('pt')}
              >
                BR
              </button>
            </div>
            <a className="btn outline nav-cta" href="#contact">
              {t.nav.contact}
            </a>
          </div>
        </header>

        <main className="hero" id="hero">
          <div className="hero-text">
            <p className="eyebrow">
              {t.hero.eyebrow} <strong>Natanael</strong>
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta">
              <a className="btn primary" href="#projects">
                {t.hero.ctaPrimary}
              </a>
              <a className="text-link" href="#about">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="stats">
              {t.hero.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="label">{stat.label}</span>
                  <span className="value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="monitor">
              <div className="screen">
                <div className="window window-ui">
                  <div className="window-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="ui-block">
                    <div className="avatar"></div>
                    <div className="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="ui-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className="window window-code">
                  <div className="window-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <pre>
                    <code>
                      <span className="c">const</span>{' '}
                      <span className="v">button</span> ={' '}
                      <span className="v">document</span>.<span className="m">
                        querySelector
                      </span>(<span className="s">'.cta'</span>);
                      {'\n'}
                      <span className="c">button</span>?.<span className="m">
                        addEventListener
                      </span>(<span className="s">'click'</span>, () =&gt; {'\n'}
                      {'  '}
                      <span className="m">animate</span>(<span className="s">
                        '#hero'
                      </span>);
                      {'\n'}
                      {'});'}
                    </code>
                  </pre>
                </div>

                <div className="chip">JS</div>
                <div className="chip secondary">UI</div>
              </div>
              <div className="stand"></div>
              <div className="base"></div>
            </div>

            <div className="floating diamond"></div>
            <div className="floating card">
              <div className="mini-title">{t.highlight}</div>
              <div className="mini-line"></div>
              <div className="mini-line short"></div>
            </div>
            <div className="floating line-bar"></div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <div className="scroll-nums">
              <span>00</span>
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
            </div>
          </div>
        </main>
      </div>

      <section id="about" className="section">
        <div className="section-head">
          <h2>{t.about.title}</h2>
          <p>{t.about.lead}</p>
        </div>
        <div className="about-grid">
          {t.about.cards.map((card) => (
            <div className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section alt">
        <div className="section-head">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.lead}</p>
        </div>
        <div className="project-grid">
          {t.projects.items.map((item) => (
            <article className="project-card" key={item.title}>
              <div className="project-top">
                <span className="tag">{item.tag1}</span>
                <span className="tag">{item.tag2}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="project-links">
                <a href="#">{item.demo}</a>
                <a href="#">{item.repo}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head">
          <h2>{t.skills.title}</h2>
          <p>{t.skills.lead}</p>
        </div>
        <div className="skills">
          <span>React</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>Tailwind</span>
          <span>Vite</span>
          <span>Node</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-card">
          <div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>
          <div className="contact-actions icon-actions">
            <a
              className="icon-btn"
              href="mailto:natanaelassis77@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2 8 5 8-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://www.linkedin.com/in/natanael-a-de-assis-3b9946218"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 9h4v11H4zM6 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM10 9h4v1.6c.6-1 1.7-1.9 3.4-1.9 2.6 0 4.6 1.6 4.6 5V20h-4v-5.7c0-1.5-.6-2.5-2-2.5-1 0-1.7.7-2 1.5a3.5 3.5 0 0 0-.1 1.1V20h-4V9z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://github.com/natanaelassis24"
              aria-label="GitHub"
              title="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.3-3.5-1.3-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.5 1.1 3.1.9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .9.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-1.2 3-.9 3-.9.6 1.5.2 2.6.1 2.9.6.8 1 1.7 1 2.9 0 4.1-2.4 5-4.7 5.3.4.3.8 1 .8 2.1V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://wa.me/5512988935703"
              aria-label="WhatsApp"
              title="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.7 12.4l-.4.6-2.7 1.2-1-.4a12.3 12.3 0 0 1-4.6-3.4l-.4-.6.8-2.6.6-.2c.3-.1.7 0 .9.3l1.1 1.4c.2.2.2.6.1.8l-.4.9c.6.7 1.4 1.3 2.2 1.7l.9-.5c.3-.2.6-.2.9 0l1.5.7c.3.1.5.4.5.7a2.2 2.2 0 0 1-1 1.6c-.4.3-1 .4-1.5.2-1.3-.4-2.9-1.2-4.4-2.7-1.4-1.4-2.3-3-2.7-4.4-.2-.5-.1-1 .2-1.5.2-.4.7-1 1.6-1 .3 0 .6.2.7.5l.7 1.5c.2.3.2.6 0 .9l-.5.9c.4.8 1 1.6 1.7 2.2l.9-.4c.2-.1.6-.1.8.1l1.4 1.1c.3.2.4.6.3.9l-.2.6 1.2 2.7.6-.4A8 8 0 0 1 12 4z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="icon-btn"
              href="https://t.me/natalinopprr"
              aria-label="Telegram"
              title="Telegram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20.8 4.4 2.9 11.3c-1.1.4-1.1 1.8.1 2.1l4.5 1.4 1.8 5.3c.2.7 1.1.9 1.6.4l2.6-2.5 4.8 3.6c.6.4 1.4.1 1.6-.6l3.3-15.3c.3-1.1-.7-2-1.9-1.3zM9.4 15.6l-.4 3.1-.8-2.6 9.2-8.5-12.2 7.5 4.2 1.3z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>{t.footer.left}</span>
        <span>{t.footer.right}</span>
      </footer>
    </>
  );
}
