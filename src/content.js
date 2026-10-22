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

// Proyectos. Los textos con "es|en" se separan por idioma. `image`: archivo en src/assets/projects/.
// `gallery`: capturas de src/assets/wall/ para el caso de estudio. `live`: producción; `code`: repositorio.
// `diagram`: arquitectura; `flow` es el camino principal y `extras` los servicios conectados a la pieza central.
export const projects = [
  {
    key: 'nistrack', name: 'NISTRACK', image: 'nistrack', year: '2026', tags: ['Laravel', 'React', 'TypeScript', 'MySQL'], live: 'https://www.nistrack.com/',
    gallery: ['nistrack-hero', 'nistrack-desafios', 'nistrack-movil'],
    stack: ['Laravel 12', 'PHP 8.2', 'Sanctum', 'MySQL', 'React', 'TypeScript', 'shadcn/ui', 'Recharts', 'Blade', 'QuickChart', 'PHPUnit', 'Vitest', 'PHPStan'],
    diagram: {
      flow: [{ title: 'SPA', sub: 'React · TypeScript' }, { title: 'API REST|REST API',sub: 'Laravel · Sanctum · 2FA' }, { title: 'MySQL', sub: 'datos aislados por empresa|data isolated per company' }],
      extras: [{ title: 'Reportes PDF|PDF reports', sub: 'Blade · QuickChart' }, { title: 'Mapeo de marcos|Framework mapping', sub: 'NIST → ISO · SBS · LPDP' }],
    },
  },
  {
    key: 'termometro', name: 'Termómetro de Resiliencia|Resilience Thermometer', image: 'termometro', year: '2026', tags: ['Laravel', 'Next.js', 'TypeScript', 'PDF'], live: 'https://term-metro-de-resiliencia-operativa.vercel.app/',
    gallery: ['termometro-hero', 'termometro-historia', 'termometro-nino', 'termometro-diagnostico', 'termometro-movil'],
    stack: ['Next.js', 'TanStack Start', 'TypeScript', 'Tailwind v4', 'shadcn/ui', '@react-pdf/renderer', 'Laravel', 'MySQL'],
    diagram: {
      flow: [{ title: 'Front-end', sub: 'Next.js / TanStack Start · TS' }, { title: 'API REST|REST API',sub: 'Laravel · PATCH por respuesta|Laravel · PATCH per answer' }, { title: 'MySQL', sub: 'Policies · roles' }],
      extras: [{ title: 'Reporte PDF|PDF report', sub: '@react-pdf/renderer' }, { title: 'Fuentes oficiales|Official sources', sub: 'ENFEN · SENAMHI · INDECI' }],
    },
  },
  {
    key: 'keptai', name: 'KeptAI', image: 'keptai', year: '2026', tags: ['Supabase', 'PostgreSQL', 'IA|AI'], live: 'https://keptai.ejesxyz.com/login',
    gallery: ['keptai-login', 'keptai-movil'],
    stack: ['Supabase', 'PostgreSQL', 'IA|AI'],
    diagram: {
      flow: [{ title: 'App web|Web app', sub: 'pedidos y cotizaciones|orders and quotes' }, { title: 'Supabase', sub: 'Auth · API' }, { title: 'PostgreSQL', sub: 'esquema relacional|relational schema' }],
      extras: [{ title: 'Flujos de IA|AI workflows', sub: 'asistencia en pedidos|order assistance' }],
    },
  },
  {
    key: 'agrimonitor', name: 'AgriMonitor', image: 'agrimonitor', year: '2026', tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'], code: 'https://github.com/sircodexx/AgriMonitor',
    gallery: [],
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'JPA / Hibernate', 'PostgreSQL 17', 'Thymeleaf', 'Docker Compose', 'GitHub Actions', 'ESP32'],
    diagram: {
      flow: [{ title: 'Nodo ESP32|ESP32 node', sub: 'temperatura · humedad · foto|temperature · humidity · photo' }, { title: 'API REST|REST API',sub: 'Spring Boot 3 · JWT' }, { title: 'PostgreSQL 17', sub: 'lecturas · alertas|readings · alerts' }],
      extras: [{ title: 'Modelo de visión|Vision model', sub: 'sana · leve · severa|healthy · mild · severe' }, { title: 'Alertas por correo|Email alerts', sub: 'SMTP' }, { title: 'Docker Compose', sub: 'VPS Ubuntu' }],
    },
  },
]

// Laboratorio: van en la cuadrícula de proyectos, sin caso de estudio. `code` es el fragmento que ilustra cada experimento.
export const lab = [
  { key: 'vps', tags: ['Linux', 'VPS', 'Docker'], code: ['$ docker compose up -d', '✔ api       started', '✔ postgres  healthy'] },
  { key: 'tenant', tags: ['Laravel', 'Multi-tenant'], code: ['Gate::policy(Asset::class,', '  AssetPolicy::class);', '// tenant_id = auth()->tenant'] },
  { key: 'ai', tags: ['Python', 'IA|AI', 'Scraping'], code: ['soup = BeautifulSoup(html)', 'rows = soup.select("tr")', 'summary = llm(rows)'] },
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
      first: 'Miguel',
      last: 'Yamunaqué',
      role: 'Desarrollador Full-Stack Jr. | Backend y plataformas SaaS',
      photoAlt: 'Foto de Miguel Yamunaqué',
      bio: [
        [{ t: 'Soy desarrollador full-stack y estudiante de último año de Ingeniería de Sistemas e Informática. Trabajo en ' }, { b: 'Cloud Technologies' }, { t: ', donde desarrollo ' }, { b: 'NISTRACK' }, { t: ', una plataforma SaaS multi-tenant de gobierno, riesgo y cumplimiento (GRC) que mide la postura de ciberseguridad de las empresas frente a ' }, { b: 'NIST CSF 2.0 e ISO/IEC 27001' }, { t: '.' }],
        [{ t: 'Mi fuerte es el backend: ' }, { b: 'APIs RESTful en Laravel' }, { t: ' con aislamiento estricto de datos entre empresas, motores de evaluación que convierten normas en lógica de negocio y ' }, { b: 'reportes PDF de auditoría' }, { t: ' generados en el servidor. En el front-end trabajo con ' }, { b: 'React, Next.js y TypeScript' }, { t: '.' }],
        [{ t: 'Trabajo con disciplina de equipo: ' }, { b: 'pruebas automatizadas' }, { t: ' (PHPUnit y Vitest), análisis estático con PHPStan, ramas feature → develop → main y pull requests revisados. Uso la IA como herramienta para acelerar el desarrollo, sin delegarle el criterio ni la calidad del código.' }],
      ],
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contáctame',
    },

    skills: {
      label: 'mis especialidades',
      title: 'Especialidades técnicas',
      subtitle: 'Lo que sé hacer y puedo demostrar con proyectos reales.',
      items: [
        { icon: 'server', title: 'Backend y APIs REST', text: 'APIs en Laravel y Spring Boot con validación, autenticación con Sanctum o JWT y guardado inmediato para no perder datos.' },
        { icon: 'tenant', title: 'Multi-tenant y seguridad', text: 'Aislamiento de datos por empresa con scopes y Policies, permisos por módulo, roles y 2FA.' },
        { icon: 'compliance', title: 'Cumplimiento normativo', text: 'Motores de evaluación y madurez sobre NIST CSF 2.0, NIST SP 800‑34 e ISO/IEC 27001.' },
        { icon: 'reports', title: 'Reportes de auditoría', text: 'Reportes PDF generados en el servidor, con gráficos convertidos en imágenes (Chart.js / QuickChart).' },
        { icon: 'data', title: 'Bases de datos', text: 'Modelado relacional en MySQL y PostgreSQL con Eloquent y JPA / Hibernate.' },
        { icon: 'frontend', title: 'Front-end', text: 'SPAs en React, Next.js y TypeScript con Tailwind y shadcn/ui, y estado persistente entre sesiones.' },
        { icon: 'quality', title: 'Calidad y pruebas', text: 'PHPUnit, Vitest y PHPStan; Git flow con pull requests y tests antes de cada corrección.' },
        { icon: 'deploy', title: 'Despliegue y DevOps', text: 'Docker y Docker Compose, VPS Linux, CI con GitHub Actions y despliegues en Vercel.' },
      ],
      main: 'Stack principal',
      more: 'También he trabajado con',
    },

    experience: {
      label: 'mi trayectoria',
      title: 'Experiencia profesional',
      subtitle: 'Dónde he trabajado y qué he construido en cada lugar.',
      jobs: [
        {
          icon: 'company', role: 'Desarrollador Full-Stack', org: 'Cloud Technologies E.I.R.L.', place: 'Piura, Perú', period: 'mar. 2026 — actualidad',
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
        {
          icon: 'store', role: 'Auxiliar de Atención al Cliente', org: 'Promart Homecenter', place: 'Piura, Perú', period: 'ago. 2023 — sep. 2026', badge: 'Otra experiencia',
          intro: [{ t: 'Atención directa y resolución de incidencias bajo presión en un entorno comercial de alta demanda, con trabajo orientado a metas y métricas de calidad de servicio.' }],
          points: [],
          tags: ['Comunicación', 'Trabajo en equipo', 'Resolución de problemas'],
        },
      ],
    },

    projects: {
      label: 'portafolio',
      title: 'Proyectos destacados',
      subtitle: 'Productos en producción, código abierto y experimentos. Cada proyecto tiene su caso técnico.',
      open: 'Abrir',
      lab: 'Laboratorio',
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

    caseStudy: {
      label: 'caso de estudio',
      back: 'Todos los proyectos',
      sections: { context: 'Contexto', product: 'El producto', role: 'Mi rol', architecture: 'Arquitectura', decisions: 'Decisiones técnicas', quality: 'Calidad', result: 'Resultado', gallery: 'Galería' },
      summary: 'Resumen',
      fields: { role: 'Rol', org: 'Contexto', year: 'Año', stack: 'Stack' },
      extras: 'Conectado a la API',
      next: 'Siguiente proyecto',
      openImage: 'abrir imagen en tamaño completo',
    },

    cases: {
      nistrack: {
        role: 'Desarrollador full-stack (foco en backend)',
        context: 'Las empresas de sectores regulados (financiero, salud, gobierno) suelen demostrar cumplimiento con hojas de Excel dispersas, evaluaciones manuales sin trazabilidad y sin una forma objetiva de medir su madurez.',
        product: ['Plataforma SaaS GRC donde varias empresas comparten la misma aplicación con sus datos aislados. Una evaluación NIST CSF 2.0 alimenta vistas de otros marcos (ISO 27001, SBS 504, LPDP), se gestionan activos y riesgos y se generan reportes listos para auditoría.'],
        roleText: 'Desarrollador full-stack en el equipo de Cloud Technologies, con foco en backend: evaluación de cumplimiento, catálogo de activos, matriz de riesgos, motor de reportes PDF y aislamiento multi-tenant.',
        architecture: 'SPA en React + TypeScript → API RESTful en Laravel (Sanctum, permisos por módulo y 2FA) → MySQL, con aislamiento por empresa. Los reportes se arman con plantillas Blade y gráficos generados en el servidor.',
        decisions: [
          { b: 'Taxonomía cerrada y catálogo abierto', t: 'la clasificación de activos la controla NISTRACK, y el catálogo de marcas y modelos es global entre empresas. Lo nuevo entra por una cola de moderación que detecta y fusiona duplicados, para que el catálogo no se ensucie.' },
          { b: 'Gráficos calculados en el backend', t: 'un PDF no ejecuta JavaScript, así que los radares, donas y mapas de calor se generan como imágenes en el servidor (QuickChart / Chart.js) antes de componer el reporte.' },
          { b: 'Aislamiento verificado con tests', t: 'cada corrección del aislamiento entre empresas se cubre primero con una prueba automatizada.' },
          { b: 'Combobox con búsqueda asíncrona y debounce', t: 'para buscar en el catálogo sin saturar la API.' },
        ],
        quality: 'PHPUnit, Vitest, PHPStan nivel 5 y flujo feature/fix → develop → main con pull requests.',
        result: 'Plataforma en producción en nistrack.com.',
      },
      termometro: {
        role: 'Desarrollador',
        context: 'En la costa norte del Perú, El Niño Costero (1983, 1998, 2017) paralizó empresas, sobre todo por cortes de vías, energía e internet, más que por daños directos. Con la alerta del ENFEN para la temporada 2026–2027, muchas empresas no saben si sus respaldos, energía, enlaces y proveedores aguantarían.',
        product: ['Dos instrumentos basados en NIST SP 800-34 Rev. 1:'],
        productList: [
          { b: 'Termómetro gratuito', t: '20 preguntas, unos 5 minutos y sin cuenta. Ubica a la empresa en un semáforo con su nivel estimado y genera un reporte PDF. Es la puerta de entrada comercial a NISTRACK.' },
          { b: 'Instrumento completo (en desarrollo)', t: '80 preguntas en 10 dominios, con evidencias por pregunta, resultado ponderado y 5 niveles de resiliencia.' },
        ],
        roleText: 'Desarrollador. La metodología y las preguntas las definió el equipo de Cloud Technologies; yo las llevé a producto.',
        architecture: 'Next.js / TanStack Start + TypeScript (Tailwind v4, shadcn/ui, PDF con @react-pdf/renderer) → API en Laravel → MySQL, el mismo stack de NISTRACK.',
        decisions: [
          { b: 'Guardado inmediato por respuesta (PATCH)', t: 'una evaluación de 80 preguntas se retoma en varias sesiones sin perder nada.' },
          { b: 'Endpoints separados por instrumento', t: 'para que el gratuito y el completo evolucionen por separado.' },
          { b: 'Aislamiento con Laravel Policies y roles diferenciados', t: 'administrador de la organización y auditor interno de solo lectura.' },
          { b: 'Los controles no autorizados no se renderizan', t: 'en lugar de solo deshabilitarse.' },
        ],
        result: 'El termómetro está en producción y el instrumento completo avanza por fases.',
      },
      keptai: {
        role: 'Backend · equipo de 4',
        context: 'Hackathon Regional de Innovación Piura Innova 2026, organizada por Google Developer Group Piura. El reto fue automatizar la toma de pedidos y cotizaciones de un negocio.',
        product: ['Aplicación para automatizar pedidos y cotizaciones con apoyo de IA, construida y desplegada durante la hackathon.'],
        roleText: 'Backend, en un equipo de 4 personas. Diseñé el esquema relacional en PostgreSQL (Supabase) y los flujos asistidos por IA.',
        architecture: 'App web → Supabase (autenticación y API) → PostgreSQL, con flujos de IA conectados al backend.',
        decisions: [
          { b: 'Supabase', t: 'para tener base de datos, autenticación y API listas desde el primer minuto.' },
          { b: 'Modelo relacional pensado para el negocio', t: 'pedidos, productos y cotizaciones desde el inicio.' },
        ],
        result: 'De cero a demo funcional en 48 horas, desplegada en keptai.ejesxyz.com.',
      },
      agrimonitor: {
        role: 'Desarrollador backend',
        context: 'La antracnosis es un hongo que daña los cultivos de palta y se ve favorecido por ciertas condiciones de temperatura y humedad.',
        product: ['API REST que recibe lecturas de nodos ESP32 (temperatura, humedad y foto de las hojas), envía la imagen a un modelo de visión por computadora que la clasifica (sana, antracnosis leve o severa) y genera alertas por correo cuando hay riesgo. Incluye un panel web para administrar usuarios, dispositivos, lecturas, fotos y alertas.'],
        roleText: 'Proyecto personal: diseño de la API, la base de datos, la seguridad y el despliegue.',
        architecture: 'ESP32 → API Spring Boot 3 (Java 17) en capas (controller, service, repository) → PostgreSQL 17, con servicio de IA externo y SMTP para las alertas. Todo corre en Docker Compose sobre un VPS Ubuntu.',
        decisions: [
          { b: 'JWT sin estado', t: 'con Spring Security para los usuarios, y un token por dispositivo para autenticar a los sensores.' },
          { b: 'Roles', t: 'Administrador, Técnico y Agricultor, aplicados en la API y en las vistas.' },
          { b: 'DTOs', t: 'para no exponer las entidades y validar lo que envía cada sensor.' },
          { b: 'Healthcheck y CI', t: 'endpoint de salud con Actuator y CI con GitHub Actions.' },
        ],
        result: 'API en producción en un VPS y código público en GitHub.',
      },
    },

    lab: {
      items: {
        vps: { area: 'DevOps', title: 'Servidores Linux con Docker', text: 'Configuración de VPS Linux y despliegue de servicios en contenedores con Docker Compose.' },
        tenant: { area: 'Seguridad', title: 'Aislamiento multi-tenant en Laravel', text: 'Pruebas de aislamiento de datos y políticas de acceso por inquilino.' },
        ai: { area: 'Python', title: 'Flujos de IA y web scraping', text: 'Extracción de datos web e integración de modelos de IA con Python.' },
      },
    },

    education: {
      label: 'formación',
      title: 'Formación y certificados',
      subtitle: 'Mi carrera, la hackathon y los certificados que respaldan mi trabajo.',
      years: [
        { year: '2026', items: [
          { icon: 'award', date: '2026', badge: 'Hackathon', title: 'Hackathon Regional de Innovación Piura Innova 2026', sub: 'Google Developer Group Piura · Piura', text: 'Backend de KeptAI en un equipo de 4, de cero a demo en 48 horas.', project: 'keptai' },
        ] },
        { year: '2025', items: [
          { icon: 'shield', date: '2025', badge: 'Certificados', title: 'Ruta de ciberseguridad', sub: 'Cisco', tags: ['Introduction to Cybersecurity', 'Gestión de amenazas cibernéticas', 'Defensa de la red', 'Seguridad de terminales'] },
          { icon: 'code', date: '2025', badge: 'Cursos', title: 'Cursos de desarrollo', sub: 'Universidad Tecnológica del Perú', tags: ['Python para datos', 'Apps web con Node.js y Angular'] },
        ] },
        { year: '2024', items: [
          { icon: 'teach', date: '2024', badge: 'Docencia', title: 'Asistente de docencia en Algorítmica', sub: 'Universidad Tecnológica del Perú' },
          { icon: 'language', date: '2024', badge: 'Idiomas', title: 'Inglés A2 (MCER)', sub: 'Universidad Tecnológica del Perú' },
        ] },
        { year: '2022', items: [
          { icon: 'degree', date: 'mar. 2022 — actualidad', badge: 'Formación', title: 'Ingeniería de Sistemas e Informática', sub: 'Universidad Tecnológica del Perú · Piura · último año', points: ['Tercio superior', 'Miembro activo del grupo de programación competitiva'] },
        ] },
      ],
      viewProject: 'Ver proyecto',
    },

    contact: {
      label: 'contacto',
      title: '¿Construimos algo juntos?',
      text: 'Busco seguir creciendo en equipos que construyan productos reales. Si tu equipo necesita a alguien que se encargue del backend sin perder de vista el producto completo, conversemos.',
      offerTitle: 'Qué puedo aportar a tu equipo',
      offers: [
        { icon: 'server', title: 'Backend y APIs', text: 'Servicios en Laravel o Spring Boot, bien modelados, probados y fáciles de mantener.' },
        { icon: 'layers', title: 'Plataformas SaaS full-stack', text: 'De la base de datos a la interfaz en React, con multi-tenancy desde el inicio.' },
        { icon: 'shield', title: 'Seguridad y cumplimiento', text: 'Experiencia llevando normas como NIST e ISO 27001 a lógica de negocio y reportes.' },
      ],
      infoTitle: 'Datos de contacto',
      closing: 'Escríbeme por correo o descarga mi CV para conocer más de mi trabajo.',
      write: 'Escríbeme',
      location: 'Piura, Perú (UTC−5)',
      links: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'Descargar CV', location: 'Ubicación', cvFile: 'CV en PDF' },
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
      first: 'Miguel',
      last: 'Yamunaqué',
      role: 'Junior Full-Stack Developer | Backend & SaaS platforms',
      photoAlt: 'Photo of Miguel Yamunaqué',
      bio: [
        [{ t: "I'm a full-stack developer and a final-year Systems and Computer Engineering student. I work at " }, { b: 'Cloud Technologies' }, { t: ', where I build ' }, { b: 'NISTRACK' }, { t: ', a multi-tenant governance, risk and compliance (GRC) SaaS platform that measures companies’ cybersecurity posture against ' }, { b: 'NIST CSF 2.0 and ISO/IEC 27001' }, { t: '.' }],
        [{ t: 'My strength is the backend: ' }, { b: 'RESTful APIs in Laravel' }, { t: ' with strict data isolation between companies, assessment engines that turn standards into business logic, and server-generated ' }, { b: 'PDF audit reports' }, { t: '. On the front end I work with ' }, { b: 'React, Next.js and TypeScript' }, { t: '.' }],
        [{ t: 'I work with team discipline: ' }, { b: 'automated tests' }, { t: ' (PHPUnit and Vitest), static analysis with PHPStan, feature → develop → main branches and reviewed pull requests. I use AI as a tool to speed up development, never as a substitute for judgment or code quality.' }],
      ],
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
    },

    skills: {
      label: 'my expertise',
      title: 'Technical expertise',
      subtitle: 'What I can do and back up with real projects.',
      items: [
        { icon: 'server', title: 'Backend & REST APIs', text: 'APIs in Laravel and Spring Boot with validation, Sanctum or JWT authentication and immediate saving so no data is lost.' },
        { icon: 'tenant', title: 'Multi-tenancy & security', text: 'Per-company data isolation with scopes and Policies, module-level permissions, roles and 2FA.' },
        { icon: 'compliance', title: 'Regulatory compliance', text: 'Assessment and maturity engines on NIST CSF 2.0, NIST SP 800‑34 and ISO/IEC 27001.' },
        { icon: 'reports', title: 'Audit reports', text: 'Server-generated PDF reports, with charts rendered to images (Chart.js / QuickChart).' },
        { icon: 'data', title: 'Databases', text: 'Relational modeling in MySQL and PostgreSQL with Eloquent and JPA / Hibernate.' },
        { icon: 'frontend', title: 'Front end', text: 'SPAs in React, Next.js and TypeScript with Tailwind and shadcn/ui, and state that persists across sessions.' },
        { icon: 'quality', title: 'Quality & testing', text: 'PHPUnit, Vitest and PHPStan; Git flow with pull requests and tests before every fix.' },
        { icon: 'deploy', title: 'Deployment & DevOps', text: 'Docker and Docker Compose, Linux VPS, CI with GitHub Actions and deployments on Vercel.' },
      ],
      main: 'Core stack',
      more: 'Also worked with',
    },

    experience: {
      label: 'my journey',
      title: 'Professional experience',
      subtitle: 'Where I have worked and what I built at each place.',
      jobs: [
        {
          icon: 'company', role: 'Full-Stack Developer', org: 'Cloud Technologies E.I.R.L.', place: 'Piura, Peru', period: 'Mar 2026 — present',
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
        {
          icon: 'store', role: 'Customer Service Assistant', org: 'Promart Homecenter', place: 'Piura, Peru', period: 'Aug 2023 — Sep 2026', badge: 'Other experience',
          intro: [{ t: 'Front-line customer support and issue resolution under pressure in a high-demand retail environment, working toward sales goals and service-quality metrics.' }],
          points: [],
          tags: ['Communication', 'Teamwork', 'Problem solving'],
        },
      ],
    },

    projects: {
      label: 'portfolio',
      title: 'Featured projects',
      subtitle: 'Products in production, open source and experiments. Each project has its own technical case study.',
      open: 'Open',
      lab: 'Lab',
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

    caseStudy: {
      label: 'case study',
      back: 'All projects',
      sections: { context: 'Context', product: 'The product', role: 'My role', architecture: 'Architecture', decisions: 'Technical decisions', quality: 'Quality', result: 'Outcome', gallery: 'Gallery' },
      summary: 'Summary',
      fields: { role: 'Role', org: 'Context', year: 'Year', stack: 'Stack' },
      extras: 'Connected to the API',
      next: 'Next project',
      openImage: 'open full-size image',
    },

    cases: {
      nistrack: {
        role: 'Full-stack developer (backend focus)',
        context: 'Companies in regulated sectors (finance, healthcare, government) often prove compliance with scattered Excel sheets, manual assessments with no traceability and no objective way to measure their maturity.',
        product: ['A GRC SaaS platform where many companies share the same application with their data isolated. A single NIST CSF 2.0 assessment feeds views of other frameworks (ISO 27001, SBS 504, LPDP), assets and risks are managed, and audit-ready reports are generated.'],
        roleText: 'Full-stack developer on the Cloud Technologies team, focused on the backend: compliance assessment, asset catalog, risk matrix, PDF report engine and multi-tenant isolation.',
        architecture: 'React + TypeScript SPA → RESTful Laravel API (Sanctum, module-level permissions and 2FA) → MySQL, isolated per company. Reports are built with Blade templates and server-generated charts.',
        decisions: [
          { b: 'Closed taxonomy, open catalog', t: 'NISTRACK controls the asset classification, while the brand and model catalog is shared across companies. New entries go through a moderation queue that detects and merges duplicates, keeping the catalog clean.' },
          { b: 'Charts computed on the backend', t: 'a PDF does not run JavaScript, so radars, donuts and heatmaps are rendered to images on the server (QuickChart / Chart.js) before the report is composed.' },
          { b: 'Isolation verified with tests', t: 'every fix to cross-company isolation is covered by an automated test first.' },
          { b: 'Combobox with async search and debounce', t: 'to search the catalog without flooding the API.' },
        ],
        quality: 'PHPUnit, Vitest, PHPStan level 5 and a feature/fix → develop → main flow with pull requests.',
        result: 'Platform in production at nistrack.com.',
      },
      termometro: {
        role: 'Developer',
        context: 'On Peru’s northern coast, the Coastal El Niño (1983, 1998, 2017) brought businesses to a halt, mostly through cut roads, power and internet rather than direct damage. With ENFEN’s alert for the 2026–2027 season, many companies don’t know whether their backups, power, links and suppliers would hold up.',
        product: ['Two instruments based on NIST SP 800-34 Rev. 1:'],
        productList: [
          { b: 'Free thermometer', t: '20 questions, about 5 minutes and no account. It places the company on a traffic-light scale with its estimated level and generates a PDF report. It is the commercial entry point to NISTRACK.' },
          { b: 'Full instrument (in development)', t: '80 questions across 10 domains, with evidence per question, a weighted result and 5 resilience levels.' },
        ],
        roleText: 'Developer. The Cloud Technologies team defined the methodology and questions; I turned them into the product.',
        architecture: 'Next.js / TanStack Start + TypeScript (Tailwind v4, shadcn/ui, PDF with @react-pdf/renderer) → Laravel API → MySQL, the same stack as NISTRACK.',
        decisions: [
          { b: 'Immediate per-answer saving (PATCH)', t: 'an 80-question assessment can be resumed across sessions without losing anything.' },
          { b: 'Separate endpoints per instrument', t: 'so the free and full versions can evolve independently.' },
          { b: 'Isolation with Laravel Policies and distinct roles', t: 'organization admin and read-only internal auditor.' },
          { b: 'Unauthorized controls are not rendered', t: 'instead of just being disabled.' },
        ],
        result: 'The thermometer is in production and the full instrument is progressing in phases.',
      },
      keptai: {
        role: 'Backend · team of 4',
        context: 'Piura Innova 2026 Regional Innovation Hackathon, organized by Google Developer Group Piura. The challenge was to automate a business’s order taking and quoting.',
        product: ['An app that automates orders and quotes with AI assistance, built and deployed during the hackathon.'],
        roleText: 'Backend, in a team of 4. I designed the relational schema in PostgreSQL (Supabase) and the AI-assisted workflows.',
        architecture: 'Web app → Supabase (authentication and API) → PostgreSQL, with AI workflows connected to the backend.',
        decisions: [
          { b: 'Supabase', t: 'to have the database, authentication and API ready from minute one.' },
          { b: 'A relational model built around the business', t: 'orders, products and quotes from the start.' },
        ],
        result: 'From zero to a working demo in 48 hours, deployed at keptai.ejesxyz.com.',
      },
      agrimonitor: {
        role: 'Backend developer',
        context: 'Anthracnose is a fungus that damages avocado crops and thrives under certain temperature and humidity conditions.',
        product: ['A REST API that receives readings from ESP32 nodes (temperature, humidity and a photo of the leaves), sends the image to a computer vision model that classifies it (healthy, mild or severe anthracnose) and sends email alerts when there is risk. It includes a web panel to manage users, devices, readings, photos and alerts.'],
        roleText: 'Personal project: API design, database, security and deployment.',
        architecture: 'ESP32 → layered Spring Boot 3 API (Java 17; controller, service, repository) → PostgreSQL 17, with an external AI service and SMTP for alerts. Everything runs on Docker Compose on an Ubuntu VPS.',
        decisions: [
          { b: 'Stateless JWT', t: 'with Spring Security for users, and a per-device token to authenticate sensors.' },
          { b: 'Roles', t: 'Administrator, Technician and Farmer, enforced in the API and in the views.' },
          { b: 'DTOs', t: 'to avoid exposing entities and to validate what each sensor sends.' },
          { b: 'Healthcheck and CI', t: 'health endpoint with Actuator and CI with GitHub Actions.' },
        ],
        result: 'API in production on a VPS and public code on GitHub.',
      },
    },

    lab: {
      items: {
        vps: { area: 'DevOps', title: 'Linux servers with Docker', text: 'Setting up Linux VPS and deploying containerized services with Docker Compose.' },
        tenant: { area: 'Security', title: 'Multi-tenant isolation in Laravel', text: 'Testing data isolation and per-tenant access policies.' },
        ai: { area: 'Python', title: 'AI workflows and web scraping', text: 'Web data extraction and AI model integration with Python.' },
      },
    },

    education: {
      label: 'education',
      title: 'Education & certificates',
      subtitle: 'My degree, the hackathon and the certificates that back up my work.',
      years: [
        { year: '2026', items: [
          { icon: 'award', date: '2026', badge: 'Hackathon', title: 'Piura Innova 2026 Regional Innovation Hackathon', sub: 'Google Developer Group Piura · Piura', text: 'Built the KeptAI backend in a team of 4, from zero to demo in 48 hours.', project: 'keptai' },
        ] },
        { year: '2025', items: [
          { icon: 'shield', date: '2025', badge: 'Certificates', title: 'Cybersecurity path', sub: 'Cisco', tags: ['Introduction to Cybersecurity', 'Cyber Threat Management', 'Network Defense', 'Endpoint Security'] },
          { icon: 'code', date: '2025', badge: 'Courses', title: 'Development courses', sub: 'Universidad Tecnológica del Perú', tags: ['Python for data', 'Web apps with Node.js and Angular'] },
        ] },
        { year: '2024', items: [
          { icon: 'teach', date: '2024', badge: 'Teaching', title: 'Teaching assistant in Algorithms', sub: 'Universidad Tecnológica del Perú' },
          { icon: 'language', date: '2024', badge: 'Languages', title: 'English A2 (CEFR)', sub: 'Universidad Tecnológica del Perú' },
        ] },
        { year: '2022', items: [
          { icon: 'degree', date: 'Mar 2022 — present', badge: 'Degree', title: 'Systems and Computer Engineering', sub: 'Universidad Tecnológica del Perú · Piura · final year', points: ['Top third of the class', 'Active member of the competitive programming group'] },
        ] },
      ],
      viewProject: 'View project',
    },

    contact: {
      label: 'contact',
      title: "Let's build something together?",
      text: "I'm looking to keep growing in teams that build real products. If your team needs someone to own the backend without losing sight of the whole product, let's talk.",
      offerTitle: 'What I can bring to your team',
      offers: [
        { icon: 'server', title: 'Backend & APIs', text: 'Services in Laravel or Spring Boot that are well modeled, tested and easy to maintain.' },
        { icon: 'layers', title: 'Full-stack SaaS platforms', text: 'From the database to a React interface, with multi-tenancy from day one.' },
        { icon: 'shield', title: 'Security & compliance', text: 'Experience turning standards like NIST and ISO 27001 into business logic and reports.' },
      ],
      infoTitle: 'Contact details',
      closing: 'Email me or download my resume to learn more about my work.',
      write: 'Email me',
      location: 'Piura, Peru (UTC−5)',
      links: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'Download resume', location: 'Location', cvFile: 'Resume (PDF)' },
    },

    footer: 'Built with React, Tailwind CSS and Vite.',
  },
}
