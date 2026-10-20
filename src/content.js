// Textos y datos del portafolio. Los textos con "es|en" se separan por idioma.
export const contact = { github: 'https://github.com/sircodexx', linkedin: 'https://www.linkedin.com/in/miguel-yamunaque-villegas', email: 'myamunaquevillegas@gmail.com', cv: '/cv/Miguel-Yamunaque-CV.pdf' }

// Habilidades, tal como aparecen en el CV.
export const skills = [
  { key: 'languages', items: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'Python'] },
  { key: 'backend', items: ['Laravel', 'Spring Boot', 'Node.js', 'FastAPI'] },
  { key: 'frontend', items: ['Next.js', 'React', 'Astro', 'Angular', 'Vue', 'Tailwind CSS', 'GSAP'] },
  { key: 'data', items: ['MySQL', 'PostgreSQL', 'SQL Server'] },
  { key: 'mobile', items: ['React Native'] },
  { key: 'cloud', items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Azure', 'AWS', 'Google Cloud', 'Git', 'GitHub'] },
  { key: 'testing', items: ['Test Automation', 'Unit Testing', 'Integration Testing', 'Postman'] },
  { key: 'architecture', items: ['Microservicios|Microservices', 'APIs RESTful|RESTful APIs', 'Multi-tenant', 'Programación funcional|Functional programming', 'Programación reactiva|Reactive programming', 'SSR', 'NIST Framework'] },
]

// Proyectos. `image`: archivo en src/assets/projects/. `live`: producción. `code`: repositorio (vacío = perfil de GitHub).
export const projects = [
  { key: 'nistrack', name: 'Nistrack', image: 'nistrack', year: '2026', tags: ['Next.js', 'TypeScript', 'Tailwind', 'SSR'], live: 'https://www.nistrack.com/', tabs: ['live'], tint: '#e9e4dc' },
  { key: 'termometro', name: 'Termómetro de Resiliencia', image: 'termometro', year: '2026', tags: ['React', 'Multi-tenant', 'UI/UX'], live: 'https://term-metro-de-resiliencia-operativa.vercel.app/', tabs: ['live'], tint: '#e3ddd5' },
  { key: 'keptai', name: 'KeptAI', image: 'keptai', year: '2026', tags: ['Supabase', 'IA|AI', 'Backend'], live: 'https://keptai.ejesxyz.com/login', tabs: ['live', 'ai'], tint: '#dde3ea' },
  { key: 'agrimonitor', name: 'AgriMonitor', image: 'agrimonitor', year: '2026', tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Ubuntu VPS'], code: 'https://github.com/sircodexx/AgriMonitor', tabs: ['code'], tint: '#dfe6d8' },
]

// Experimentos del laboratorio (sin captura: se dibujan como código).
export const labItems = [
  { key: 'vps', art: 'terminal', tags: ['Linux', 'VPS', 'Docker'], tabs: ['lab'] },
  { key: 'tenant', art: 'sql', tags: ['Laravel', 'Multi-tenant'], tabs: ['lab'] },
  { key: 'ai', art: 'python', tags: ['Python', 'IA|AI', 'Scraping'], tabs: ['lab', 'ai'] },
]

export const tabs = ['live', 'code', 'lab', 'ai']

export const content = {
  es: {
    meta: { title: 'Miguel Yamunaqué | Desarrollador Web Jr. Backend & Full-Stack', description: 'Portafolio de Miguel Yamunaqué Villegas, Desarrollador Web Jr. Backend & Full-Stack en Piura, Perú.' },
    skip: 'Saltar al contenido',
    langButton: 'Switch to English',
    tagline: 'backend & full-stack',
    nav: { main: 'Navegación principal', social: 'Redes y contacto' },
    dock: { works: 'proyectos', about: 'sobre mí', links: 'links', allWorks: 'Todos los proyectos' },
    links: { linkedin: 'LinkedIn', email: 'Email', github: 'GitHub', cv: 'CV' },
    hero: {
      hello: 'Hola, soy Miguel',
      headline: ['Construyo backends robustos e interfaces que simplemente…', 'funcionan'],
      side: ['construyo productos end-to-end,', 'de la base de datos al deploy.'],
      how: 'Okay… ¿y cómo lo hago?',
    },
    projects: {
      more: 'y más en camino',
      live: 'en vivo', code: 'ver código', newTab: 'abre en una pestaña nueva',
      cta: { live: 'Ver Proyecto', tool: 'Ver Herramienta', code: 'Ver Código' },
      items: {
        nistrack: { title: 'Arquitectura y desarrollo front-end de una plataforma SaaS para la gestión de ciberseguridad (NIST) y resiliencia.', org: 'Cloud Technologies', desc: 'Plataforma GRC con evaluación de madurez NIST CSF 2.0 y renderizado del lado del servidor.' },
        termometro: { title: 'Desarrollé una herramienta de evaluación interactiva end-to-end para medir la resiliencia empresarial.', org: 'Cloud Technologies', desc: 'Diagnóstico de 20 preguntas con reporte PDF, basado en NIST SP 800-34.', cta: 'tool' },
        keptai: { title: 'Diseñé una arquitectura backend con IA en 48 horas para automatizar pedidos y cotizaciones.', org: 'Hackathon Piura Innova · GDG Piura', desc: 'Esquema relacional en PostgreSQL y flujos asistidos por IA, de cero a demo en 48 horas.' },
        agrimonitor: { title: 'Desplegué una arquitectura IoT en tiempo real para el monitoreo de métricas agrícolas.', org: 'Proyecto personal', desc: 'API en Spring Boot y PostgreSQL, contenerizada con Docker en un VPS Ubuntu.' },
      },
    },
    story: {
      title: ['Paso mucho tiempo', 'pensando en la arquitectura'],
      tap: 'tócame',
      intro: [{ t: 'Me enfoco en construir sistemas… ' }, { b: 'escalables' }, { t: ' que soporten el crecimiento, ' }, { b: 'seguros' }, { t: ' que protejan la información crítica y ' }, { b: 'mantenibles' }, { t: ' para que el equipo itere rápido.' }],
      nodes: {
        scalable: { label: 'Escalable', text: [{ b: 'Escalable:' }, { t: ' servicios y datos pensados para crecer con el negocio, sin reescribir todo.' }] },
        ai: { label: 'IA', text: [{ b: 'IA:' }, { t: ' integro flujos asistidos por IA para prototipar, automatizar y decidir más rápido.' }] },
        secure: { label: 'Seguro', text: [{ b: 'Seguro:' }, { t: ' aislamiento multi-tenant y políticas de acceso para proteger la información crítica.' }] },
        maintainable: { label: 'Mantenible', text: [{ b: 'Mantenible:' }, { t: ' código claro y despliegues en contenedores para que el equipo itere sin miedo.' }] },
      },
    },
    wall: {
      burst: ['~ Yo ~', 'Experimento', 'MUCHO'],
      text: [{ h: 'Me gusta probar ideas temprano' }, { t: ': monto VPS en Linux con Docker, pruebo aislamiento multi-tenant en Laravel y conecto flujos de IA y scraping con Python. Experimentar me ayuda a aprender rápido, bajar el riesgo y ' }, { h: 'encontrar la versión que de verdad funciona.' }],
    },
    closing: { note: '¿hablamos?', title: '¿Construimos algo juntos?', write: 'Escríbeme', location: 'Piura, Perú' },
    works: {
      title: 'Todos los proyectos',
      subtitle: 'Productos en producción, código, laboratorio e IA.',
      tabs: { live: 'En producción', code: 'Código', lab: 'Laboratorio', ai: 'IA' },
      tabNotes: { live: 'Productos desplegados que hoy usan personas reales.', code: 'Proyectos personales con el código abierto en GitHub.', lab: 'Pruebas técnicas y experimentos autodidactas.', ai: 'Donde la inteligencia artificial hace parte del trabajo.' },
      lab: {
        vps: { title: 'Entornos VPS en Linux con Docker', org: 'Laboratorio · DevOps', desc: 'Configuración de servidores Linux y despliegue de contenedores con Docker.' },
        tenant: { title: 'Aislamiento multi-tenant en Laravel', org: 'Laboratorio · Seguridad', desc: 'Pruebas de aislamiento de datos y políticas de acceso por inquilino.' },
        ai: { title: 'Flujos de IA y web scraping', org: 'Laboratorio · Python', desc: 'Integración de flujos de IA y extracción de datos web con Python.' },
      },
    },
    about: {
      note: 'sobre mí',
      title: 'Un poco más sobre mí',
      intro: [{ t: 'Estudiante de Ingeniería de Sistemas e Informática (10.º ciclo) y desarrollador que disfruta construir ' }, { h: 'de punta a punta' }, { t: ': del diseño de la base de datos y la seguridad del servidor a la experiencia en la interfaz.' }],
      caption: 'ese soy yo',
      photoHint: 'foto pronto',
      items: [
        { icon: 'burst', title: 'Hoy en Cloud Technologies', text: 'Módulos de resiliencia operativa y GRC con Laravel y MySQL en arquitectura multi-tenant, SPAs con Next.js y React, y despliegues con Docker.' },
        { icon: 'spark', title: 'Lo que hago con IA', text: 'Flujos de desarrollo asistidos por IA y orquestación de motores de evaluación normativa. En 48 horas armé el backend con IA de KeptAI.' },
        { icon: 'trophy', title: 'Logros y certificaciones', text: 'Hackathon Regional Piura Innova 2026 (GDG Piura), certificaciones de ciberseguridad de Cisco y Asistente de Docencia en Algorítmica (UTP).' },
      ],
      skillsTitle: 'Mi stack',
      groups: { languages: 'Lenguajes', backend: 'Backend', frontend: 'Frontend', data: 'Bases de datos', mobile: 'Mobile', cloud: 'Cloud y DevOps', testing: 'Testing y QA', architecture: 'Arquitectura y paradigmas' },
      experienceTitle: 'Experiencia',
      current: 'actual',
      jobs: [
        { role: 'Desarrollador Full-Stack', company: 'Cloud Technologies E.I.R.L.', place: 'Piura, Perú', period: 'Mar 2026 — Actualidad', current: true, points: [
          [{ b: 'Backend y aislamiento multi-tenant:' }, { t: ' diseñé y orquesté el módulo de resiliencia operativa GRC con Laravel y MySQL, con aislamiento estricto de datos entre organizaciones mediante Laravel Policies.' }],
          [{ b: 'Front-end y SSR:' }, { t: ' construí una SPA end-to-end con Next.js, TypeScript y Tailwind v4, con persistencia de estado resiliente para evaluaciones multisesión y solución de hydration mismatches.' }],
          [{ b: 'Ciberseguridad NIST:' }, { t: ' implementé un motor de evaluación basado en NIST SP 800-34 y 800-30, con endpoints RESTful de guardado inmediato e integración de alertas tempranas oficiales (SENAMHI, ENFEN).' }],
          [{ b: 'Reportes y IA:' }, { t: ' orquesté la exportación de reportes de auditoría en PDF generados en el servidor y dirigí la arquitectura bajo un flujo de desarrollo asistido por IA.' }],
        ] },
        { role: 'Auxiliar de Atención al Cliente', company: 'Promart Homecenter', place: 'Piura, Perú', period: 'Ago 2023 — Sep 2026', points: [
          [{ b: 'Soporte crítico:' }, { t: ' resolví incidentes técnicos y operativos bajo presión, garantizando la satisfacción del cliente.' }],
          [{ b: 'Comunicación:' }, { t: ' comunicación efectiva entre áreas y trabajo orientado a metas comerciales y métricas de calidad de servicio.' }],
        ] },
      ],
      educationTitle: 'Educación',
      education: { degree: 'Ingeniería de Sistemas e Informática', school: 'Universidad Tecnológica del Perú', place: 'Piura, Perú', period: 'Mar 2022 — Actualidad', points: ['Tercio superior', 'Miembro activo del grupo de programación competitiva'] },
      certsTitle: 'Certificados',
      certs: [
        { title: 'Hackathon Regional de Innovación Piura Innova 2026', org: 'Google Developer Group Piura', year: '2026', highlight: true },
        { title: 'Introduction to Cybersecurity', org: 'Cisco', year: '2025' },
        { title: 'Gestión de amenazas cibernéticas', org: 'Cisco', year: '2025' },
        { title: 'Defensa de la red', org: 'Cisco', year: '2025' },
        { title: 'Seguridad de terminales', org: 'Cisco', year: '2025' },
        { title: 'Domina Python y conquista el mundo de los datos', org: 'UTP', year: '2025' },
        { title: 'Crea apps web como un pro: Node.js y Angular', org: 'UTP', year: '2025' },
        { title: 'Asistente de Docencia en Algorítmica', org: 'UTP', year: '2024' },
        { title: 'Inglés A2 (MCER)', org: 'UTP', year: '2024' },
      ],
      cv: { note: 'todo en una hoja', title: 'Mi CV', text: 'Experiencia, educación, habilidades y certificados en PDF.', open: 'Ver CV', download: 'Descargar PDF' },
      dragHint: 'arrástrame',
    },
    footer: 'Hecho con React, Tailwind CSS y Motion.',
  },
  en: {
    meta: { title: 'Miguel Yamunaqué | Junior Web Developer, Backend & Full-Stack', description: 'Portfolio of Miguel Yamunaqué Villegas, Junior Web Developer focused on Backend & Full-Stack, based in Piura, Peru.' },
    skip: 'Skip to content',
    langButton: 'Cambiar a español',
    tagline: 'backend & full-stack',
    nav: { main: 'Main navigation', social: 'Social and contact' },
    dock: { works: 'projects', about: 'about', links: 'links', allWorks: 'All projects' },
    links: { linkedin: 'LinkedIn', email: 'Email', github: 'GitHub', cv: 'Resume' },
    hero: {
      hello: "Hi, I'm Miguel",
      headline: ['I build solid backends and interfaces that just…', 'work'],
      side: ['building products end-to-end,', 'from the database to deploy.'],
      how: 'Okay so… how do I do that?',
    },
    projects: {
      more: 'with more in the works',
      live: 'live', code: 'view code', newTab: 'opens in a new tab',
      cta: { live: 'View Project', tool: 'View Tool', code: 'View Code' },
      items: {
        nistrack: { title: 'Front-end architecture and development of a SaaS platform for cybersecurity (NIST) and resilience management.', org: 'Cloud Technologies', desc: 'GRC platform with NIST CSF 2.0 maturity assessments and server-side rendering.' },
        termometro: { title: 'I built an end-to-end interactive assessment tool to measure business resilience.', org: 'Cloud Technologies', desc: '20-question diagnosis with a PDF report, based on NIST SP 800-34.', cta: 'tool' },
        keptai: { title: 'I designed an AI-powered backend architecture in 48 hours to automate orders and quotes.', org: 'Piura Innova Hackathon · GDG Piura', desc: 'PostgreSQL relational schema and AI-assisted workflows, from zero to demo in 48 hours.' },
        agrimonitor: { title: 'I deployed a real-time IoT architecture to monitor agricultural metrics.', org: 'Personal project', desc: 'Spring Boot and PostgreSQL API, containerized with Docker on an Ubuntu VPS.' },
      },
    },
    story: {
      title: ['I spend a lot of time', 'thinking about architecture'],
      tap: 'tap on me',
      intro: [{ t: 'I focus on building systems that are… ' }, { b: 'scalable' }, { t: ' to support growth, ' }, { b: 'secure' }, { t: ' to protect critical information, and ' }, { b: 'maintainable' }, { t: ' so the team can iterate fast.' }],
      nodes: {
        scalable: { label: 'Scalable', text: [{ b: 'Scalable:' }, { t: ' services and data designed to grow with the business, without rewriting everything.' }] },
        ai: { label: 'AI', text: [{ b: 'AI:' }, { t: ' I integrate AI-assisted workflows to prototype, automate and decide faster.' }] },
        secure: { label: 'Secure', text: [{ b: 'Secure:' }, { t: ' multi-tenant isolation and access policies to protect critical information.' }] },
        maintainable: { label: 'Maintainable', text: [{ b: 'Maintainable:' }, { t: ' clear code and containerized deploys so the team can iterate without fear.' }] },
      },
    },
    wall: {
      burst: ['~ I ~', 'Experiment', 'A LOT'],
      text: [{ h: 'I like poking at ideas early' }, { t: ': I set up Linux VPS with Docker, test multi-tenant isolation in Laravel and wire AI and scraping workflows with Python. Experiments help me learn fast, de-risk decisions and ' }, { h: 'find the version that actually works.' }],
    },
    closing: { note: "let's talk?", title: "Let's build something together?", write: 'Email me', location: 'Piura, Peru' },
    works: {
      title: 'All projects',
      subtitle: 'Products in production, code, lab and AI.',
      tabs: { live: 'In production', code: 'Code', lab: 'Lab', ai: 'AI' },
      tabNotes: { live: 'Deployed products that real people use today.', code: 'Personal projects with open code on GitHub.', lab: 'Technical tests and self-taught experiments.', ai: 'Where artificial intelligence does part of the work.' },
      lab: {
        vps: { title: 'Linux VPS environments with Docker', org: 'Lab · DevOps', desc: 'Setting up Linux servers and deploying containers with Docker.' },
        tenant: { title: 'Multi-tenant isolation in Laravel', org: 'Lab · Security', desc: 'Testing data isolation and per-tenant access policies.' },
        ai: { title: 'AI workflows and web scraping', org: 'Lab · Python', desc: 'Integrating AI workflows and web data extraction with Python.' },
      },
    },
    about: {
      note: 'about me',
      title: 'A little more about me',
      intro: [{ t: 'Systems and Computer Engineering student (10th semester) and developer who enjoys building ' }, { h: 'end to end' }, { t: ': from database design and server security to the experience in the interface.' }],
      caption: "that's me",
      photoHint: 'photo soon',
      items: [
        { icon: 'burst', title: 'Today at Cloud Technologies', text: 'Operational resilience and GRC modules with Laravel and MySQL on a multi-tenant architecture, SPAs with Next.js and React, and Docker deployments.' },
        { icon: 'spark', title: 'What I do with AI', text: 'AI-assisted development workflows and orchestration of regulatory assessment engines. In 48 hours I built the AI backend for KeptAI.' },
        { icon: 'trophy', title: 'Achievements & certifications', text: 'Piura Innova 2026 Regional Hackathon (GDG Piura), Cisco cybersecurity certifications and Teaching Assistant in Algorithms (UTP).' },
      ],
      skillsTitle: 'My stack',
      groups: { languages: 'Languages', backend: 'Backend', frontend: 'Frontend', data: 'Databases', mobile: 'Mobile', cloud: 'Cloud & DevOps', testing: 'Testing & QA', architecture: 'Architecture & paradigms' },
      experienceTitle: 'Experience',
      current: 'current',
      jobs: [
        { role: 'Full-Stack Developer', company: 'Cloud Technologies E.I.R.L.', place: 'Piura, Peru', period: 'Mar 2026 — Present', current: true, points: [
          [{ b: 'Backend & multi-tenant isolation:' }, { t: ' designed and orchestrated the GRC operational resilience module with Laravel and MySQL, with strict data isolation between organizations through Laravel Policies.' }],
          [{ b: 'Front-end & SSR:' }, { t: ' built an end-to-end SPA with Next.js, TypeScript and Tailwind v4, with resilient state persistence for multi-session assessments and fixes for hydration mismatches.' }],
          [{ b: 'NIST cybersecurity:' }, { t: ' implemented an assessment engine based on NIST SP 800-34 and 800-30, with immediate-save RESTful endpoints and official early-warning integrations (SENAMHI, ENFEN).' }],
          [{ b: 'Reports & AI:' }, { t: ' orchestrated server-rendered PDF audit report exports and led the architecture under an AI-assisted development workflow.' }],
        ] },
        { role: 'Customer Service Assistant', company: 'Promart Homecenter', place: 'Piura, Peru', period: 'Aug 2023 — Sep 2026', points: [
          [{ b: 'Critical support:' }, { t: ' resolved technical and operational incidents under pressure, ensuring customer satisfaction.' }],
          [{ b: 'Communication:' }, { t: ' effective cross-team communication, working toward sales goals and service quality metrics.' }],
        ] },
      ],
      educationTitle: 'Education',
      education: { degree: 'Systems and Computer Engineering', school: 'Universidad Tecnológica del Perú', place: 'Piura, Peru', period: 'Mar 2022 — Present', points: ['Top third of the class', 'Active member of the competitive programming group'] },
      certsTitle: 'Certificates',
      certs: [
        { title: 'Piura Innova 2026 Regional Innovation Hackathon', org: 'Google Developer Group Piura', year: '2026', highlight: true },
        { title: 'Introduction to Cybersecurity', org: 'Cisco', year: '2025' },
        { title: 'Cyber Threat Management', org: 'Cisco', year: '2025' },
        { title: 'Network Defense', org: 'Cisco', year: '2025' },
        { title: 'Endpoint Security', org: 'Cisco', year: '2025' },
        { title: 'Python for data', org: 'UTP', year: '2025' },
        { title: 'Web apps with Node.js and Angular', org: 'UTP', year: '2025' },
        { title: 'Teaching Assistant in Algorithms', org: 'UTP', year: '2024' },
        { title: 'English A2 (CEFR)', org: 'UTP', year: '2024' },
      ],
      cv: { note: 'all on one page', title: 'My resume', text: 'Experience, education, skills and certificates as a PDF.', open: 'View resume', download: 'Download PDF' },
      dragHint: 'drag me',
    },
    footer: 'Built with React, Tailwind CSS and Motion.',
  },
}
