# Inventario del portafolio v1

Fecha: 21 de octubre de 2026 · Commit de referencia: `84f55ac`
URL en producción: https://portafoliomiguel-yamunaque.vercel.app

Este documento reúne **todo el contenido y las funciones** de la versión 1 antes del rediseño, para que no se pierda nada. Las fuentes son `src/content.js` (textos ES/EN), `public/cv/Miguel-Yamunaque-CV.pdf`, `README.md` e `index.html`.

---

## 1. Identidad y contacto

| Dato | Valor |
|---|---|
| Nombre completo | Miguel Ángel Yamunaqué Villegas |
| Rol mostrado | Desarrollador Web Jr. Backend & Full-Stack / Junior Web Developer, Backend & Full-Stack |
| Tagline | backend & full-stack |
| Ubicación | Piura, Perú |
| Email | myamunaquevillegas@gmail.com |
| LinkedIn | https://www.linkedin.com/in/miguel-yamunaque-villegas |
| GitHub | https://github.com/sircodexx |
| CV | `/cv/Miguel-Yamunaque-CV.pdf` (2 páginas) |
| Foto | `src/assets/about/miguel.webp` |

### Resumen profesional (del CV, no aparece completo en la web)
> Desarrollador Full-Stack y estudiante avanzado de Ingeniería de Sistemas con sólida experiencia en la arquitectura y construcción de plataformas SaaS B2B. Especializado en el desarrollo de soluciones GRC (Gobierno, Riesgo y Cumplimiento) y resiliencia operativa utilizando ecosistemas modernos como Next.js, TypeScript y Laravel. Capacidad comprobada para diseñar arquitecturas multi-tenant seguras, optimizar el rendimiento de aplicaciones (SSR, mitigación de hydration mismatches) y alinear complejas lógicas de negocio con estándares normativos internacionales. Apasionado por la mejora continua, la implementación de flujos de trabajo eficientes y el uso estratégico de IA para acelerar el ciclo de desarrollo manteniendo rigurosos estándares de calidad.

### Textos de presentación en la web
- **Hero:** "Hola, soy Miguel" · "Construyo backends robustos e interfaces que simplemente… **funcionan**" · "construyo productos end-to-end, de la base de datos al deploy."
- **Sobre mí (intro):** Estudiante de Ingeniería de Sistemas e Informática (10.º ciclo) y desarrollador que disfruta construir **de punta a punta**: del diseño de la base de datos y la seguridad del servidor a la experiencia en la interfaz.
- **Bloques "sobre mí":**
  - *Hoy en Cloud Technologies:* módulos de resiliencia operativa y GRC con Laravel y MySQL en arquitectura multi-tenant, SPAs con Next.js y React, y despliegues con Docker.
  - *Lo que hago con IA:* flujos de desarrollo asistidos por IA y orquestación de motores de evaluación normativa. En 48 horas armé el backend con IA de KeptAI.
  - *Logros y certificaciones:* Hackathon Regional Piura Innova 2026 (GDG Piura), certificaciones de ciberseguridad de Cisco y Asistente de Docencia en Algorítmica (UTP).
- **Filosofía de arquitectura ("curva"):** sistemas **escalables** (crecen con el negocio sin reescribir todo), **seguros** (aislamiento multi-tenant y políticas de acceso), **mantenibles** (código claro y despliegues en contenedores) y con **IA** (flujos asistidos para prototipar, automatizar y decidir más rápido).
- **Muro "Experimento MUCHO":** me gusta probar ideas temprano: monto VPS en Linux con Docker, pruebo aislamiento multi-tenant en Laravel y conecto flujos de IA y scraping con Python. Experimentar me ayuda a aprender rápido, bajar el riesgo y encontrar la versión que de verdad funciona.
- **Cierre:** "¿Construimos algo juntos?" · Escríbeme · Piura, Perú.

---

## 2. Experiencia

### Desarrollador Full-Stack · Cloud Technologies E.I.R.L. · Piura · Mar 2026 — actualidad
- **Arquitectura backend y aislamiento multi-tenant:** diseñé y orquesté el módulo de resiliencia operativa GRC con Laravel y MySQL; aislamiento estricto de datos entre organizaciones con Laravel Policies; refactor de la taxonomía del catálogo de activos con Eloquent ORM *(este último detalle solo está en el CV)*.
- **Front-end y SSR:** SPA end-to-end con Next.js, TypeScript y Tailwind v4; persistencia de estado resiliente para evaluaciones multisesión; resolución de hydration mismatches y condiciones de carrera en StrictMode.
- **Ciberseguridad NIST:** motor de evaluación basado en NIST SP 800-34 y 800-30; endpoints RESTful con guardado inmediato para la integridad transaccional; integración de alertas tempranas oficiales (SENAMHI, ENFEN).
- **Reportes:** motor de exportación de reportes de auditoría en PDF generados en el servidor, con gráficos renderizados en el servidor.
- **IA y liderazgo técnico:** dirigí la arquitectura bajo un flujo de desarrollo asistido por IA, asegurando la calidad del código sin automatización autónoma.

### Auxiliar de Atención al Cliente · Promart Homecenter · Piura · Ago 2023 — Sep 2026
- **Web:** atención al público y desarrollo de soft skills (comunicación, trabajo en equipo, empatía, resolución ágil).
- **CV (versión más fuerte):** resolución de conflictos y soporte crítico bajo presión; comunicación interdepartamental y trabajo orientado a metas comerciales y métricas de calidad de servicio.

---

## 3. Proyectos

| Proyecto | Año | Contexto | Tags | Enlace | Categorías |
|---|---|---|---|---|---|
| **Nistrack** | 2026 | Cloud Technologies | Next.js, TypeScript, Tailwind, SSR | https://www.nistrack.com/ | En producción |
| **Termómetro de Resiliencia** | 2026 | Cloud Technologies | React, Multi-tenant, UI/UX | https://term-metro-de-resiliencia-operativa.vercel.app/ | En producción |
| **KeptAI** | 2026 | Hackathon Piura Innova · GDG Piura | Supabase, IA, Backend | https://keptai.ejesxyz.com/login | En producción, IA |
| **AgriMonitor** | 2026 | Proyecto personal | Spring Boot, PostgreSQL, Docker, Ubuntu VPS | https://github.com/sircodexx/AgriMonitor | Código |

Descripciones actuales:
- **Nistrack:** arquitectura y desarrollo front-end de una plataforma SaaS para la gestión de ciberseguridad (NIST) y resiliencia. Plataforma GRC con evaluación de madurez NIST CSF 2.0 y renderizado del lado del servidor.
- **Termómetro de Resiliencia:** herramienta de evaluación interactiva end-to-end para medir la resiliencia empresarial. Diagnóstico de 20 preguntas con reporte PDF, basado en NIST SP 800-34.
- **KeptAI:** arquitectura backend con IA en 48 horas para automatizar pedidos y cotizaciones. Esquema relacional en PostgreSQL y flujos asistidos por IA, de cero a demo en 48 horas.
- **AgriMonitor:** arquitectura IoT en tiempo real para el monitoreo de métricas agrícolas. API en Spring Boot y PostgreSQL, contenerizada con Docker en un VPS Ubuntu.

### Laboratorio (experimentos)
| Experimento | Área | Tags | Descripción |
|---|---|---|---|
| Entornos VPS en Linux con Docker | DevOps | Linux, VPS, Docker | Configuración de servidores Linux y despliegue de contenedores. |
| Aislamiento multi-tenant en Laravel | Seguridad | Laravel, Multi-tenant | Pruebas de aislamiento de datos y políticas de acceso por inquilino. |
| Flujos de IA y web scraping | Python | Python, IA, Scraping | Integración de flujos de IA y extracción de datos web. |

---

## 4. Habilidades (idénticas al CV)

| Grupo | Tecnologías |
|---|---|
| Lenguajes | TypeScript, JavaScript, PHP, Java, Python |
| Backend | Laravel, Spring Boot, Node.js, FastAPI |
| Frontend | Next.js, React, Astro, Angular, Vue, Tailwind CSS, GSAP |
| Bases de datos | MySQL, PostgreSQL, SQL Server |
| Mobile | React Native |
| Cloud y DevOps | Docker, Kubernetes, Jenkins, CI/CD, Azure, AWS, Google Cloud, Git, GitHub |
| Testing y QA | Test Automation, Unit Testing, Integration Testing, Postman |
| Arquitectura | Microservicios, APIs RESTful, Multi-tenant, Programación funcional, Programación reactiva, SSR, NIST Framework |

---

## 5. Educación y certificados

**Ingeniería de Sistemas e Informática** · Universidad Tecnológica del Perú · Piura · Mar 2022 — actualidad (10.º ciclo)
- Tercio superior
- Miembro activo del grupo de programación competitiva

| Certificado | Entidad | Año |
|---|---|---|
| ⭐ Hackathon Regional de Innovación Piura Innova 2026 | Google Developer Group Piura | 2026 |
| Introduction to Cybersecurity | Cisco | 2025 |
| Gestión de amenazas cibernéticas | Cisco | 2025 |
| Defensa de la red | Cisco | 2025 |
| Seguridad de terminales | Cisco | 2025 |
| Domina Python y conquista el mundo de los datos | UTP | 2025 |
| Crea apps web como un pro: Node.js y Angular | UTP | 2025 |
| Asistente de Docencia en Algorítmica | UTP | 2024 |
| Inglés A2 (MCER) | UTP | 2024 |

---

## 6. Recursos gráficos

| Carpeta | Archivos | Uso actual |
|---|---|---|
| `src/assets/projects/` | nistrack, termometro, keptai, agrimonitor (`.webp`, 16:10) | Portada de cada proyecto |
| `src/assets/wall/` | keptai-login, keptai-movil, nistrack-desafios, nistrack-hero, nistrack-movil, termometro-diagnostico, termometro-hero, termometro-historia, termometro-movil, termometro-nino | Muro de experimentos. **Sirven como galería de capturas para los casos de estudio.** |
| `src/assets/about/` | miguel.webp | Foto (polaroid) |
| `public/` | favicon.svg (MY), og.png (1200×630), cv/Miguel-Yamunaque-CV.pdf | Favicon, vista previa en redes, CV |

---

## 7. Funciones y diseño de la v1

**Rutas:** `/` (inicio), `/proyectos` (pestañas `?tab=live|code|lab|ai`), `/sobre-mi`. Router propio con `history.pushState` (`src/lib.js`).

**Elementos de diseño (los que dan el aire "UX/UI" y se retirarán o cambiarán):**
- Portada con saludo manuscrito (fuente Caveat), palabra en píldora y **ojos que siguen el cursor**.
- **Mazo de capturas en vuelo** con el scroll y proyectos en zigzag con destellos.
- **Curva de arquitectura** dibujada con el scroll y nodos tocables.
- **Muro de experimentos** con columnas en parallax.
- **Dock flotante** tipo macOS con carpetas y enlaces.
- Polaroid con foto, **iconos de stack arrastrables**, notas "tócame", "arrástrame" y "ese soy yo".
- Paleta clara (`#f4f4f1`) y tipografías Inter + DM Sans + Caveat.

**Funciones a conservar:**
- Bilingüe ES / EN, con detección del idioma del navegador y preferencia guardada.
- Accesibilidad: enlace para saltar al contenido, foco visible, textos alternativos y `prefers-reduced-motion`.
- Todo el contenido centralizado en `src/content.js`.
- Metadatos SEO y Open Graph (`index.html`) y canonical.
- Despliegue en Vercel con reescritura SPA (`vercel.json`).

**Stack técnico:** React 19, Vite 8, Tailwind CSS 4, Motion, lucide-react 0.468.0 (fijada: exporta Github/Linkedin), simple-icons, oxlint. Sin backend ni variables de entorno.

---

## 8. Diferencias entre la web y el CV a decidir

1. El **refactor de taxonomía con Eloquent ORM** y los **gráficos renderizados en el servidor** solo aparecen en el CV.
2. Los puntos de **Promart** están mejor redactados en el CV (soporte crítico, métricas) que en la web.
3. El **resumen profesional** del CV no está en la web; es el mejor texto para la nueva sección "Sobre mí".
4. Los proyectos no tienen **métricas ni detalle técnico** (problema, decisiones, resultado). Hacen falta para los casos de estudio.
