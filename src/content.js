// Textos y datos del portafolio v2. Lo que no depende del idioma va arriba; los textos, en `content.es` y `content.en`.
// Los textos enriquecidos son listas de tramos: { t } texto normal, { b } texto destacado.

export const contact = {
  email: 'myamunaquevillegas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/miguel-yamunaque-villegas',
  github: 'https://github.com/sircodexx',
  cv: '/cv/Miguel-Yamunaque-CV.pdf',
}

// Stack visible en la web: el núcleo se respalda con proyectos; el resto va como "también he trabajado con".
export const stackMain = ['Laravel', 'PHP', 'Spring Boot', 'Java', 'React', 'Next.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Docker', 'Git', 'PHPUnit', 'Vitest']
export const stackMore = ['Python', 'FastAPI', 'Node.js', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'Angular', 'Vue', 'React Native', 'SQL Server', 'Postman', 'n8n', 'Linux']

// Proyectos. Los textos con "es|en" se separan por idioma. `image`: archivo en src/assets/projects/. `filters`: live (en producción), code (código abierto), ai (usa IA).
export const projects = [
  { key: 'nistrack', name: 'NISTRACK', image: 'nistrack', year: '2026', tags: ['Laravel', 'React', 'TypeScript', 'MySQL'], live: 'https://www.nistrack.com/', filters: ['live'] },
  { key: 'termometro', name: 'Termómetro de Resiliencia|Resilience Thermometer', image: 'termometro', year: '2026', tags: ['Laravel', 'Next.js', 'TypeScript', 'PDF'], live: 'https://term-metro-de-resiliencia-operativa.vercel.app/', filters: ['live'] },
  { key: 'keptai', name: 'KeptAI', image: 'keptai', year: '2026', tags: ['Supabase', 'PostgreSQL', 'IA|AI'], live: 'https://keptai.ejesxyz.com/login', filters: ['live', 'ai'] },
  { key: 'agrimonitor', name: 'AgriMonitor', image: 'agrimonitor', year: '2026', tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'], code: 'https://github.com/sircodexx/AgriMonitor', filters: ['live', 'code', 'ai'] },
]
export const projectFilters = ['all', 'live', 'code', 'ai']

// Laboratorio: `code` es el fragmento que ilustra cada experimento.
export const lab = [
  { key: 'vps', tags: ['Linux', 'VPS', 'Docker'], code: ['$ docker compose up -d', '✔ api       started', '✔ postgres  healthy'] },
  { key: 'tenant', tags: ['Laravel', 'Multi-tenant'], code: ['Gate::policy(Asset::class,', '  AssetPolicy::class);', '// tenant_id = auth()->tenant'] },
  { key: 'ai', tags: ['Python', 'IA|AI', 'Scraping'], code: ['soup = BeautifulSoup(html)', 'rows = soup.select("tr")', 'summary = llm(rows)'] },
]

const terminalStack = [
  { key: 'backend', value: 'Laravel · PHP · Spring Boot · Java' },
  { key: 'frontend', value: 'React · Next.js · TypeScript' },
  { key: 'data', value: 'MySQL · PostgreSQL' },
  { key: 'quality', value: 'PHPUnit · Vitest · PHPStan' },
  { key: 'infra', value: 'Docker · Linux VPS · Git' },
]

export const content = {
  es: {
    meta: {
      title: 'Miguel Yamunaqué · Desarrollador Full-Stack Jr.',
      description: 'Desarrollador Full-Stack Jr. en Piura, Perú. Construyo plataformas SaaS B2B con Laravel, React y Spring Boot: arquitectura multi-tenant, APIs REST, pruebas automatizadas y despliegue con Docker.',
    },
    skip: 'Saltar al contenido',
    langButton: 'Switch to English',
    menu: { open: 'Abrir menú', close: 'Cerrar menú' },
    nav: { label: 'Navegación principal', about: 'Sobre mí', skills: 'Especialidades', experience: 'Experiencia', projects: 'Proyectos', education: 'Formación', contact: 'Contacto' },

    hero: {
      label: 'sobre mí',
      name: 'Miguel Yamunaqué Villegas',
      role: 'Desarrollador Full-Stack Jr. · Backend y plataformas SaaS',
      photoAlt: 'Foto de Miguel Yamunaqué',
      bio: [
        [{ t: 'Soy desarrollador full-stack y estudiante de último año de Ingeniería de Sistemas e Informática. Trabajo en ' }, { b: 'Cloud Technologies' }, { t: ', donde desarrollo ' }, { b: 'NISTRACK' }, { t: ', una plataforma SaaS multi-tenant de gobierno, riesgo y cumplimiento (GRC) que mide la postura de ciberseguridad de las empresas frente a ' }, { b: 'NIST CSF 2.0 e ISO/IEC 27001' }, { t: '.' }],
        [{ t: 'Mi fuerte es el backend: ' }, { b: 'APIs RESTful en Laravel' }, { t: ' con aislamiento estricto de datos entre empresas, motores de evaluación que convierten normas en lógica de negocio y ' }, { b: 'reportes PDF de auditoría' }, { t: ' generados en el servidor. En el front-end trabajo con ' }, { b: 'React, Next.js y TypeScript' }, { t: '.' }],
        [{ t: 'Trabajo con disciplina de equipo: ' }, { b: 'pruebas automatizadas' }, { t: ' (PHPUnit y Vitest), análisis estático con PHPStan, ramas feature → develop → main y pull requests revisados. Uso la IA como herramienta para acelerar el desarrollo, sin delegarle el criterio ni la calidad del código.' }],
      ],
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      terminal: [{ cmd: 'whoami' }, { out: 'miguel-yamunaque · full-stack developer jr.' }, { cmd: 'cat stack.txt' }, ...terminalStack, { cmd: 'pwd' }, { out: '/piura/peru' }],
    },

    stats: [
      { value: '2', label: 'productos en producción en Cloud Technologies' },
      { value: '7', label: 'tipos de reportes PDF de auditoría en NISTRACK' },
      { value: '48 h', label: 'de cero a demo con KeptAI (Hackathon GDG Piura)' },
      { value: '9', label: 'certificados (Cisco, UTP, GDG)' },
    ],

    skills: {
      label: 'especialidades',
      title: 'Especialidades técnicas',
      subtitle: 'Lo que sé hacer y puedo demostrar con proyectos reales.',
      items: [
        { icon: 'server', title: 'Backend y APIs REST', text: 'APIs en Laravel y Spring Boot con controladores RESTful, validación, autenticación con Sanctum o JWT y guardado inmediato para no perder datos.' },
        { icon: 'tenant', title: 'Multi-tenant y seguridad', text: 'Aislamiento de datos por empresa con scopes y Policies, permisos por módulo, roles y 2FA.' },
        { icon: 'compliance', title: 'Cumplimiento normativo', text: 'Motores de evaluación y madurez sobre NIST CSF 2.0, NIST SP 800-34 e ISO/IEC 27001, con matrices de riesgo y trazabilidad.' },
        { icon: 'reports', title: 'Reportes y datos', text: 'Reportes PDF generados en el servidor con gráficos (Chart.js / QuickChart) y modelado relacional en MySQL y PostgreSQL.' },
        { icon: 'frontend', title: 'Front-end', text: 'SPAs en React, Next.js y TypeScript con Tailwind y shadcn/ui; componentes con búsqueda asíncrona y estado persistente entre sesiones.' },
        { icon: 'quality', title: 'Calidad y despliegue', text: 'PHPUnit, Vitest y PHPStan; Git flow con pull requests; Docker, VPS Linux y CI con GitHub Actions.' },
      ],
      main: 'Stack principal',
      more: 'También he trabajado con',
    },

    experience: {
      label: 'experiencia',
      title: 'Experiencia profesional',
      current: 'actual',
      jobs: [
        {
          role: 'Desarrollador Full-Stack', org: 'Cloud Technologies E.I.R.L.', place: 'Piura, Perú', period: 'mar. 2026 — actualidad', current: true,
          intro: [{ t: 'Empresa peruana de ciberseguridad. Desarrollo ' }, { b: 'NISTRACK' }, { t: ', plataforma SaaS GRC multi-tenant, y su módulo público ' }, { b: 'Termómetro de Resiliencia' }, { t: '.' }],
          points: [
            { b: 'Evaluación de cumplimiento', t: 'desarrollé la lógica que evalúa NIST CSF 2.0 y la cruza con el Anexo A de ISO/IEC 27001:2022, calculando el nivel de madurez (0 a 4) y la brecha frente al nivel óptimo.' },
            { b: 'Catálogo de activos v2', t: 'separé la taxonomía cerrada de activos del catálogo comercial global de marcas y modelos, con una cola de moderación que fusiona duplicados y un asistente de valoración de criticidad (confidencialidad, integridad y disponibilidad).' },
            { b: 'Riesgos', t: 'matriz que cruza activos, amenazas y vulnerabilidades y calcula el nivel de riesgo por probabilidad e impacto.' },
            { b: 'Motor de reportes PDF', t: '7 reportes de auditoría (completo, radar de progreso, resumen NIST, activos, riesgos, cumplimiento ISO 27001 y Declaración de Aplicabilidad), con gráficos convertidos en imágenes desde el servidor.' },
            { b: 'Aislamiento multi-tenant y seguridad', t: 'filtros por empresa en todos los módulos y participación en la auditoría y remediación de seguridad del aislamiento entre clientes, con tests primero y un commit por corrección.' },
            { b: 'Termómetro de Resiliencia', t: 'API en Laravel con guardado inmediato por respuesta (retomable en varias sesiones), aislamiento con Policies y roles, y front-end en Next.js / TanStack Start con TypeScript.' },
          ],
          tags: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Next.js', 'PHPUnit', 'Vitest', 'PHPStan'],
        },
      ],
      otherTitle: 'Otra experiencia',
      other: { role: 'Auxiliar de Atención al Cliente', org: 'Promart Homecenter', place: 'Piura', period: 'ago. 2023 — sep. 2026', text: 'Atención directa y resolución de incidencias bajo presión en un entorno comercial de alta demanda, con trabajo orientado a metas y métricas de calidad de servicio.' },
    },

    projects: {
      label: 'proyectos',
      title: 'Proyectos destacados',
      subtitle: 'Productos en producción y proyectos con código abierto. Cada uno tiene su caso técnico.',
      filters: { all: 'Todos', live: 'En producción', code: 'Código', ai: 'IA' },
      filtersLabel: 'Filtrar proyectos',
      cta: { case: 'Ver caso', live: 'Ver en vivo', tool: 'Ver herramienta', code: 'Código' },
      newTab: 'abre en una pestaña nueva',
      shot: 'Captura de',
      items: {
        nistrack: { org: 'Cloud Technologies', summary: 'Plataforma SaaS multi-tenant que mide la postura de ciberseguridad de las empresas frente a NIST CSF 2.0 e ISO 27001.' },
        termometro: { org: 'Cloud Technologies', summary: 'Diagnóstico de 20 preguntas que mide qué tan preparada está una empresa para el Fenómeno El Niño.', liveCta: 'tool' },
        keptai: { org: 'Hackathon Piura Innova · GDG Piura', summary: 'Backend con IA para automatizar pedidos y cotizaciones, de cero a demo en 48 horas con un equipo de 4.' },
        agrimonitor: { org: 'Proyecto personal', summary: 'API IoT en producción que combina sensores ESP32 y visión por computadora para detectar antracnosis en cultivos de palta.' },
      },
    },

    lab: {
      label: 'laboratorio',
      title: 'Laboratorio',
      subtitle: 'Experimentos para aprender rápido y bajar el riesgo antes de usar algo en producción.',
      items: {
        vps: { area: 'DevOps', title: 'Servidores Linux con Docker', text: 'Configuración de VPS Linux y despliegue de servicios en contenedores con Docker Compose.' },
        tenant: { area: 'Seguridad', title: 'Aislamiento multi-tenant en Laravel', text: 'Pruebas de aislamiento de datos y políticas de acceso por inquilino.' },
        ai: { area: 'Python', title: 'Flujos de IA y web scraping', text: 'Extracción de datos web e integración de modelos de IA con Python.' },
      },
    },

    education: {
      label: 'formación',
      title: 'Formación y certificados',
      degree: { title: 'Ingeniería de Sistemas e Informática', school: 'Universidad Tecnológica del Perú', place: 'Piura', period: 'mar. 2022 — actualidad · último año', points: ['Tercio superior', 'Miembro activo del grupo de programación competitiva', 'Asistente de docencia en Algorítmica (2024)'] },
      certsTitle: 'Certificados',
      highlight: { title: 'Hackathon Regional de Innovación Piura Innova 2026', org: 'Google Developer Group Piura' },
      groups: [
        { title: 'Ciberseguridad', org: 'Cisco', year: '2025', items: ['Introduction to Cybersecurity', 'Gestión de amenazas cibernéticas', 'Defensa de la red', 'Seguridad de terminales'] },
        { title: 'Desarrollo', org: 'UTP', year: '2025', items: ['Python para datos', 'Apps web con Node.js y Angular'] },
        { title: 'Idiomas', org: 'UTP', year: '2024', items: ['Inglés A2 (MCER)'] },
      ],
    },

    contact: {
      label: 'contacto',
      title: '¿Construimos algo juntos?',
      text: 'Busco seguir creciendo en equipos que construyan productos reales. Si tu equipo necesita a alguien que se encargue del backend sin perder de vista el producto completo, conversemos.',
      offerTitle: 'Qué puedo aportar a tu equipo',
      offers: [
        { title: 'Backend y APIs', text: 'Servicios en Laravel o Spring Boot, bien modelados, probados y fáciles de mantener.' },
        { title: 'Plataformas SaaS full-stack', text: 'De la base de datos a la interfaz en React, con multi-tenancy desde el inicio.' },
        { title: 'Seguridad y cumplimiento', text: 'Experiencia llevando normas como NIST e ISO 27001 a lógica de negocio y reportes.' },
      ],
      infoTitle: 'Datos de contacto',
      write: 'Escríbeme',
      location: 'Piura, Perú (UTC−5)',
      links: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'Descargar CV' },
    },

    footer: 'Hecho con React, Tailwind CSS y Vite.',
  },

  en: {
    meta: {
      title: 'Miguel Yamunaqué · Junior Full-Stack Developer',
      description: 'Junior Full-Stack Developer based in Piura, Peru. I build B2B SaaS platforms with Laravel, React and Spring Boot: multi-tenant architecture, REST APIs, automated testing and Docker deployments.',
    },
    skip: 'Skip to content',
    langButton: 'Cambiar a español',
    menu: { open: 'Open menu', close: 'Close menu' },
    nav: { label: 'Main navigation', about: 'About', skills: 'Expertise', experience: 'Experience', projects: 'Projects', education: 'Education', contact: 'Contact' },

    hero: {
      label: 'about me',
      name: 'Miguel Yamunaqué Villegas',
      role: 'Junior Full-Stack Developer · Backend & SaaS platforms',
      photoAlt: 'Photo of Miguel Yamunaqué',
      bio: [
        [{ t: "I'm a full-stack developer and a final-year Systems and Computer Engineering student. I work at " }, { b: 'Cloud Technologies' }, { t: ', where I build ' }, { b: 'NISTRACK' }, { t: ', a multi-tenant governance, risk and compliance (GRC) SaaS platform that measures companies’ cybersecurity posture against ' }, { b: 'NIST CSF 2.0 and ISO/IEC 27001' }, { t: '.' }],
        [{ t: 'My strength is the backend: ' }, { b: 'RESTful APIs in Laravel' }, { t: ' with strict data isolation between companies, assessment engines that turn standards into business logic, and server-generated ' }, { b: 'PDF audit reports' }, { t: '. On the front end I work with ' }, { b: 'React, Next.js and TypeScript' }, { t: '.' }],
        [{ t: 'I work with team discipline: ' }, { b: 'automated tests' }, { t: ' (PHPUnit and Vitest), static analysis with PHPStan, feature → develop → main branches and reviewed pull requests. I use AI as a tool to speed up development, never as a substitute for judgment or code quality.' }],
      ],
      ctaProjects: 'View projects',
      ctaCv: 'Download resume',
      terminal: [{ cmd: 'whoami' }, { out: 'miguel-yamunaque · full-stack developer jr.' }, { cmd: 'cat stack.txt' }, ...terminalStack, { cmd: 'pwd' }, { out: '/piura/peru' }],
    },

    stats: [
      { value: '2', label: 'products in production at Cloud Technologies' },
      { value: '7', label: 'types of PDF audit reports in NISTRACK' },
      { value: '48 h', label: 'from zero to demo with KeptAI (GDG Piura Hackathon)' },
      { value: '9', label: 'certificates (Cisco, UTP, GDG)' },
    ],

    skills: {
      label: 'expertise',
      title: 'Technical expertise',
      subtitle: 'What I can do and back up with real projects.',
      items: [
        { icon: 'server', title: 'Backend & REST APIs', text: 'APIs in Laravel and Spring Boot with RESTful controllers, validation, Sanctum or JWT authentication and immediate saving so no data is lost.' },
        { icon: 'tenant', title: 'Multi-tenancy & security', text: 'Per-company data isolation with scopes and Policies, module-level permissions, roles and 2FA.' },
        { icon: 'compliance', title: 'Regulatory compliance', text: 'Assessment and maturity engines on NIST CSF 2.0, NIST SP 800-34 and ISO/IEC 27001, with risk matrices and traceability.' },
        { icon: 'reports', title: 'Reports & data', text: 'Server-generated PDF reports with charts (Chart.js / QuickChart) and relational modeling in MySQL and PostgreSQL.' },
        { icon: 'frontend', title: 'Front end', text: 'SPAs in React, Next.js and TypeScript with Tailwind and shadcn/ui; components with async search and state that persists across sessions.' },
        { icon: 'quality', title: 'Quality & delivery', text: 'PHPUnit, Vitest and PHPStan; Git flow with pull requests; Docker, Linux VPS and CI with GitHub Actions.' },
      ],
      main: 'Core stack',
      more: 'Also worked with',
    },

    experience: {
      label: 'experience',
      title: 'Professional experience',
      current: 'current',
      jobs: [
        {
          role: 'Full-Stack Developer', org: 'Cloud Technologies E.I.R.L.', place: 'Piura, Peru', period: 'Mar 2026 — present', current: true,
          intro: [{ t: 'Peruvian cybersecurity company. I build ' }, { b: 'NISTRACK' }, { t: ', a multi-tenant GRC SaaS platform, and its public module, the ' }, { b: 'Resilience Thermometer' }, { t: '.' }],
          points: [
            { b: 'Compliance assessment', t: 'built the logic that assesses NIST CSF 2.0 and maps it to ISO/IEC 27001:2022 Annex A, computing the maturity level (0 to 4) and the gap to the target level.' },
            { b: 'Asset catalog v2', t: 'separated the closed asset taxonomy from the global brand and model catalog, with a moderation queue that merges duplicates and a criticality wizard (confidentiality, integrity and availability).' },
            { b: 'Risk', t: 'a matrix that crosses assets, threats and vulnerabilities and scores risk by likelihood and impact.' },
            { b: 'PDF report engine', t: '7 audit reports (full report, progress radar, NIST summary, assets, risks, ISO 27001 compliance and Statement of Applicability), with charts rendered to images on the server.' },
            { b: 'Multi-tenant isolation & security', t: 'per-company filters across every module and part of the security audit and remediation of cross-tenant isolation, writing tests first and one commit per fix.' },
            { b: 'Resilience Thermometer', t: 'Laravel API with immediate per-answer saving (resumable across sessions), isolation with Policies and roles, and a Next.js / TanStack Start front end in TypeScript.' },
          ],
          tags: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Next.js', 'PHPUnit', 'Vitest', 'PHPStan'],
        },
      ],
      otherTitle: 'Other experience',
      other: { role: 'Customer Service Assistant', org: 'Promart Homecenter', place: 'Piura', period: 'Aug 2023 — Sep 2026', text: 'Front-line customer support and issue resolution under pressure in a high-demand retail environment, working toward sales goals and service-quality metrics.' },
    },

    projects: {
      label: 'projects',
      title: 'Featured projects',
      subtitle: 'Products in production and open-source projects. Each one has its own technical case study.',
      filters: { all: 'All', live: 'In production', code: 'Code', ai: 'AI' },
      filtersLabel: 'Filter projects',
      cta: { case: 'View case study', live: 'View live', tool: 'Open tool', code: 'Code' },
      newTab: 'opens in a new tab',
      shot: 'Screenshot of',
      items: {
        nistrack: { org: 'Cloud Technologies', summary: 'Multi-tenant SaaS platform that measures companies’ cybersecurity posture against NIST CSF 2.0 and ISO 27001.' },
        termometro: { org: 'Cloud Technologies', summary: 'A 20-question assessment that measures how prepared a company is for the El Niño phenomenon.', liveCta: 'tool' },
        keptai: { org: 'Piura Innova Hackathon · GDG Piura', summary: 'AI-powered backend to automate orders and quotes, from zero to demo in 48 hours with a team of 4.' },
        agrimonitor: { org: 'Personal project', summary: 'IoT API in production that combines ESP32 sensors and computer vision to detect anthracnose in avocado crops.' },
      },
    },

    lab: {
      label: 'lab',
      title: 'Lab',
      subtitle: 'Experiments to learn fast and reduce risk before using something in production.',
      items: {
        vps: { area: 'DevOps', title: 'Linux servers with Docker', text: 'Setting up Linux VPS and deploying containerized services with Docker Compose.' },
        tenant: { area: 'Security', title: 'Multi-tenant isolation in Laravel', text: 'Testing data isolation and per-tenant access policies.' },
        ai: { area: 'Python', title: 'AI workflows and web scraping', text: 'Web data extraction and AI model integration with Python.' },
      },
    },

    education: {
      label: 'education',
      title: 'Education & certificates',
      degree: { title: 'Systems and Computer Engineering', school: 'Universidad Tecnológica del Perú', place: 'Piura', period: 'Mar 2022 — present · final year', points: ['Top third of the class', 'Active member of the competitive programming group', 'Teaching assistant in Algorithms (2024)'] },
      certsTitle: 'Certificates',
      highlight: { title: 'Piura Innova 2026 Regional Innovation Hackathon', org: 'Google Developer Group Piura' },
      groups: [
        { title: 'Cybersecurity', org: 'Cisco', year: '2025', items: ['Introduction to Cybersecurity', 'Cyber Threat Management', 'Network Defense', 'Endpoint Security'] },
        { title: 'Development', org: 'UTP', year: '2025', items: ['Python for data', 'Web apps with Node.js and Angular'] },
        { title: 'Languages', org: 'UTP', year: '2024', items: ['English A2 (CEFR)'] },
      ],
    },

    contact: {
      label: 'contact',
      title: "Let's build something together?",
      text: "I'm looking to keep growing in teams that build real products. If your team needs someone to own the backend without losing sight of the whole product, let's talk.",
      offerTitle: 'What I can bring to your team',
      offers: [
        { title: 'Backend & APIs', text: 'Services in Laravel or Spring Boot that are well modeled, tested and easy to maintain.' },
        { title: 'Full-stack SaaS platforms', text: 'From the database to a React interface, with multi-tenancy from day one.' },
        { title: 'Security & compliance', text: 'Experience turning standards like NIST and ISO 27001 into business logic and reports.' },
      ],
      infoTitle: 'Contact details',
      write: 'Email me',
      location: 'Piura, Peru (UTC−5)',
      links: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'Download resume' },
    },

    footer: 'Built with React, Tailwind CSS and Vite.',
  },
}
