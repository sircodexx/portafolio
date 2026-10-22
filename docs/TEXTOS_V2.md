# Textos del portafolio v2 · borrador para revisión (v2)

Estado: **pendiente de tu revisión** · Fase 1 del [plan](PLAN_REDISENO_V2.md)
Actualizado el 21/10/2026 con tus respuestas y el detalle técnico de NISTRACK y el Termómetro.

Cómo revisar: corrige aquí o dime los cambios. No hay cifras inventadas: los datos vienen de tu CV, de tus notas técnicas, de los sitios en vivo y del repositorio de AgriMonitor. La versión en inglés se traduce cuando apruebes el español.

---

## Metadatos (Google y redes)

- **Título:** Miguel Yamunaqué · Desarrollador Full-Stack Jr.
- **Descripción:** Desarrollador Full-Stack Jr. en Piura, Perú. Construyo plataformas SaaS B2B con Laravel, React y Spring Boot: arquitectura multi-tenant, APIs REST, pruebas automatizadas y despliegue con Docker.

## Header

Miguel Yamunaqué · Sobre mí · Especialidades · Experiencia · Proyectos · Formación · ES/EN · **Contacto**

---

## 01 · Sobre mí (hero)

**Miguel Yamunaqué Villegas**
DESARROLLADOR FULL-STACK JR. · BACKEND Y PLATAFORMAS SAAS

Soy desarrollador full-stack y estudiante de último año de Ingeniería de Sistemas e Informática. Trabajo en **Cloud Technologies**, donde desarrollo **NISTRACK**, una plataforma SaaS multi-tenant de gobierno, riesgo y cumplimiento (GRC) que mide la postura de ciberseguridad de las empresas frente a **NIST CSF 2.0 e ISO/IEC 27001**.

Mi fuerte es el backend: **APIs RESTful en Laravel** con aislamiento estricto de datos entre empresas, motores de evaluación que convierten normas en lógica de negocio y **reportes PDF de auditoría** generados en el servidor. En el front-end trabajo con **React, Next.js y TypeScript**.

Trabajo con disciplina de equipo: **pruebas automatizadas** (PHPUnit y Vitest), análisis estático con PHPStan, ramas feature → develop → main y pull requests revisados. Uso la IA como herramienta para acelerar el desarrollo, sin delegarle el criterio ni la calidad del código.

Botones: **Ver proyectos** · **Descargar CV**

**Tarjeta terminal (derecha):**
```
$ whoami
miguel-yamunaque · full-stack developer jr.

$ cat stack.txt
backend   Laravel · PHP · Spring Boot · Java
frontend  React · Next.js · TypeScript
data      MySQL · PostgreSQL
quality   PHPUnit · Vitest · PHPStan
infra     Docker · Linux VPS · Git

$ pwd
/piura/peru
```

## Franja de cifras

- **2** · productos en producción en Cloud Technologies
- **7** · tipos de reportes PDF de auditoría en NISTRACK
- **48 h** · de cero a demo con KeptAI (Hackathon GDG Piura)
- **9** · certificados (Cisco, UTP, GDG)

---

## 02 · Especialidades

*Subtítulo:* Lo que sé hacer y puedo demostrar con proyectos reales.

| Título | Texto |
|---|---|
| **Backend y APIs REST** | APIs en Laravel y Spring Boot con controladores RESTful, validación, autenticación con Sanctum o JWT y guardado inmediato para no perder datos. |
| **Multi-tenant y seguridad** | Aislamiento de datos por empresa con scopes y Policies, permisos por módulo, roles y 2FA. |
| **Cumplimiento normativo** | Motores de evaluación y madurez sobre NIST CSF 2.0, NIST SP 800-34 e ISO/IEC 27001, con matrices de riesgo y trazabilidad. |
| **Reportes y datos** | Reportes PDF generados en el servidor con gráficos (Chart.js / QuickChart) y modelado relacional en MySQL y PostgreSQL. |
| **Front-end** | SPAs en React, Next.js y TypeScript con Tailwind y shadcn/ui; componentes con búsqueda asíncrona y estado persistente entre sesiones. |
| **Calidad y despliegue** | PHPUnit, Vitest y PHPStan; Git flow con pull requests; Docker, VPS Linux y CI con GitHub Actions. |

**Stack principal:** Laravel · PHP · Spring Boot · Java · React · Next.js · TypeScript · MySQL · PostgreSQL · Docker · Git · PHPUnit · Vitest
**También he trabajado con:** Python · FastAPI · Node.js · Supabase · Tailwind CSS · shadcn/ui · Angular · Vue · React Native · SQL Server · Postman · n8n · Linux

> Respecto a la v1: Kubernetes, Jenkins, AWS, Azure, GCP, GSAP y programación funcional y reactiva salen de la web porque ningún proyecto los respalda. Siguen en tu CV.

---

## 03 · Experiencia

### Desarrollador Full-Stack · Cloud Technologies E.I.R.L.
Piura, Perú · mar. 2026 — actualidad

Empresa peruana de ciberseguridad. Desarrollo **NISTRACK**, plataforma SaaS GRC multi-tenant, y su módulo público **Termómetro de Resiliencia**.

- **Evaluación de cumplimiento:** desarrollé la lógica que evalúa NIST CSF 2.0 y la cruza con el Anexo A de ISO/IEC 27001:2022, calculando el nivel de madurez (0 a 4) y la brecha frente al nivel óptimo.
- **Catálogo de activos v2:** separé la taxonomía cerrada de activos del catálogo comercial global de marcas y modelos, con una cola de moderación que fusiona duplicados y un asistente de valoración de criticidad (confidencialidad, integridad y disponibilidad).
- **Riesgos:** matriz que cruza activos, amenazas y vulnerabilidades y calcula el nivel de riesgo por probabilidad e impacto.
- **Motor de reportes PDF:** 7 reportes de auditoría (completo, radar de progreso, resumen NIST, activos, riesgos, cumplimiento ISO 27001 y Declaración de Aplicabilidad), con gráficos convertidos en imágenes desde el servidor.
- **Aislamiento multi-tenant y seguridad:** filtros por empresa en todos los módulos y participación en la auditoría y remediación de seguridad del aislamiento entre clientes, con tests primero y un commit por corrección.
- **Termómetro de Resiliencia:** API en Laravel con guardado inmediato por respuesta (retomable en varias sesiones), aislamiento con Policies y roles, y front-end en Next.js / TanStack Start con TypeScript.

*Tags:* Laravel · PHP · MySQL · React · TypeScript · Next.js · PHPUnit · Vitest · PHPStan

### Otra experiencia
**Auxiliar de Atención al Cliente · Promart Homecenter** · Piura · ago. 2023 — sep. 2026
Atención directa y resolución de incidencias bajo presión en un entorno comercial de alta demanda, con trabajo orientado a metas y métricas de calidad de servicio.

---

## 04 · Proyectos

*Subtítulo:* Productos en producción y proyectos con código abierto. Cada uno tiene su caso técnico.
*Filtros:* Todos · En producción · Código · IA

### Tarjetas (resumen)

| Proyecto | Contexto | Resumen | Tags | Botones |
|---|---|---|---|---|
| **NISTRACK** | Cloud Technologies · 2026 | Plataforma SaaS multi-tenant que mide la postura de ciberseguridad de las empresas frente a NIST CSF 2.0 e ISO 27001. | Laravel · React · TypeScript · MySQL | Ver caso · Ver en vivo |
| **Termómetro de Resiliencia** | Cloud Technologies · 2026 | Diagnóstico de 20 preguntas que mide qué tan preparada está una empresa para el Fenómeno El Niño. | Laravel · Next.js · TypeScript · PDF | Ver caso · Ver herramienta |
| **KeptAI** | Hackathon Piura Innova · GDG Piura · 2026 | Backend con IA para automatizar pedidos y cotizaciones, de cero a demo en 48 horas con un equipo de 4. | Supabase · PostgreSQL · IA | Ver caso · Ver en vivo |
| **AgriMonitor** | Proyecto personal · 2026 | API IoT en producción que combina sensores ESP32 y visión por computadora para detectar antracnosis en cultivos de palta. | Java · Spring Boot · PostgreSQL · Docker | Ver caso · Código |

### Caso: NISTRACK
- **Contexto:** las empresas de sectores regulados (financiero, salud, gobierno) suelen demostrar cumplimiento con hojas de Excel dispersas, evaluaciones manuales sin trazabilidad y sin una forma objetiva de medir su madurez.
- **El producto:** plataforma SaaS GRC donde varias empresas comparten la misma aplicación con sus datos aislados. Una evaluación NIST CSF 2.0 alimenta vistas de otros marcos (ISO 27001, SBS 504, LPDP), se gestionan activos y riesgos y se generan reportes listos para auditoría.
- **Mi rol:** desarrollador full-stack en el equipo de Cloud Technologies, con foco en backend.
- **Arquitectura:** SPA en React + TypeScript → API RESTful en Laravel (Sanctum, permisos por módulo y 2FA) → MySQL, con aislamiento por empresa. Los reportes se arman con plantillas Blade y gráficos generados en el servidor.
- **Decisiones técnicas:**
  1. **Taxonomía cerrada y catálogo abierto:** la clasificación de activos la controla NISTRACK, y el catálogo de marcas y modelos es global entre empresas. Lo nuevo entra por una cola de moderación que detecta y fusiona duplicados, para que el catálogo no se ensucie.
  2. **Gráficos calculados en el backend:** un PDF no ejecuta JavaScript, así que los radares, donas y mapas de calor se generan como imágenes en el servidor (QuickChart / Chart.js) antes de componer el reporte.
  3. **Aislamiento verificado con tests:** cada corrección del aislamiento entre empresas se cubre primero con una prueba automatizada.
  4. **Combobox con búsqueda asíncrona y debounce** para buscar en el catálogo sin saturar la API.
- **Calidad:** PHPUnit, Vitest, PHPStan nivel 5 y flujo feature/fix → develop → main con pull requests.
- **Resultado:** plataforma en producción en nistrack.com.
- **Galería:** nistrack-hero, nistrack-desafios, nistrack-movil.

### Caso: Termómetro de Resiliencia
- **Contexto:** en la costa norte del Perú, El Niño Costero (1983, 1998, 2017) paralizó empresas, sobre todo por cortes de vías, energía e internet, más que por daños directos. Con la alerta del ENFEN para la temporada 2026–2027, muchas empresas no saben si sus respaldos, energía, enlaces y proveedores aguantarían.
- **El producto:** dos instrumentos basados en **NIST SP 800-34 Rev. 1**:
  - **Termómetro gratuito:** 20 preguntas, unos 5 minutos y sin cuenta. Ubica a la empresa en un semáforo con su nivel estimado y genera un reporte PDF. Es la puerta de entrada comercial a NISTRACK.
  - **Instrumento completo** *(en desarrollo)*: 80 preguntas en 10 dominios, con evidencias por pregunta, resultado ponderado y 5 niveles de resiliencia.
- **Mi rol:** desarrollador. La metodología y las preguntas las definió el equipo de Cloud Technologies; yo las llevé a producto.
- **Arquitectura:** Next.js / TanStack Start + TypeScript (Tailwind v4, shadcn/ui, PDF con @react-pdf/renderer) → API en Laravel → MySQL, el mismo stack de NISTRACK.
- **Decisiones técnicas:**
  1. **Guardado inmediato por respuesta (PATCH):** una evaluación de 80 preguntas se retoma en varias sesiones sin perder nada.
  2. **Endpoints separados por instrumento**, para que el gratuito y el completo evolucionen por separado.
  3. **Aislamiento con Laravel Policies y roles diferenciados** (administrador de la organización y auditor interno de solo lectura).
  4. **Los controles no autorizados no se renderizan**, en lugar de solo deshabilitarse.
- **Resultado:** el termómetro está en producción y el instrumento completo avanza por fases.
- **Galería:** termometro-hero, termometro-historia, termometro-nino, termometro-diagnostico, termometro-movil.

### Caso: KeptAI
- **Contexto:** Hackathon Regional de Innovación **Piura Innova 2026**, organizada por Google Developer Group Piura. El reto fue automatizar la toma de pedidos y cotizaciones de un negocio.
- **Mi rol:** backend, en un equipo de 4 personas. Diseñé el esquema relacional en PostgreSQL (Supabase) y los flujos asistidos por IA.
- **Decisiones técnicas:** Supabase para tener base de datos, autenticación y API listas desde el primer minuto, y un modelo relacional pensado para pedidos, productos y cotizaciones.
- **Resultado:** de cero a demo funcional en **48 horas**, desplegada en keptai.ejesxyz.com.
- **Galería:** keptai-login, keptai-movil.

### Caso: AgriMonitor
- **Contexto:** la antracnosis es un hongo que daña los cultivos de palta y se ve favorecido por ciertas condiciones de temperatura y humedad.
- **El producto:** API REST que recibe lecturas de nodos **ESP32** (temperatura, humedad y foto de las hojas), envía la imagen a un **modelo de visión por computadora** que la clasifica (sana, antracnosis leve o severa) y genera **alertas por correo** cuando hay riesgo. Incluye un panel web para administrar usuarios, dispositivos, lecturas, fotos y alertas.
- **Arquitectura:** ESP32 → API Spring Boot 3 (Java 17) en capas (controller, service, repository) → PostgreSQL 17, con servicio de IA externo y SMTP para las alertas. Todo corre en Docker Compose sobre un VPS Ubuntu.
- **Decisiones técnicas:**
  1. **JWT sin estado** con Spring Security para los usuarios y **un token por dispositivo** para autenticar a los sensores.
  2. **Roles** (Administrador, Técnico, Agricultor) aplicados en la API y en las vistas.
  3. **DTOs** para no exponer las entidades y validar lo que envía cada sensor.
  4. **Healthcheck** con Actuator y **CI con GitHub Actions**.
- **Resultado:** API en producción en un VPS y código público en GitHub.

---

## 05 · Laboratorio

*Subtítulo:* Experimentos para aprender rápido y bajar el riesgo antes de usar algo en producción.

| Título | Área | Texto |
|---|---|---|
| Servidores Linux con Docker | DevOps | Configuración de VPS Linux y despliegue de servicios en contenedores con Docker Compose. |
| Aislamiento multi-tenant en Laravel | Seguridad | Pruebas de aislamiento de datos y políticas de acceso por inquilino. |
| Flujos de IA y web scraping | Python | Extracción de datos web e integración de modelos de IA con Python. |

---

## 06 · Formación

**Ingeniería de Sistemas e Informática · Universidad Tecnológica del Perú**
Piura · mar. 2022 — actualidad · último año
- Tercio superior
- Miembro activo del grupo de programación competitiva
- Asistente de docencia en Algorítmica (2024)

**Certificados**
- ⭐ **Hackathon Regional de Innovación Piura Innova 2026** · Google Developer Group Piura
- **Ciberseguridad · Cisco (2025):** Introduction to Cybersecurity · Gestión de amenazas cibernéticas · Defensa de la red · Seguridad de terminales
- **Desarrollo · UTP (2025):** Python para datos · Apps web con Node.js y Angular
- **Idiomas · UTP (2024):** Inglés A2 (MCER)

---

## 07 · Contacto

**¿Construimos algo juntos?**
Busco seguir creciendo en equipos que construyan productos reales. Si tu equipo necesita a alguien que se encargue del backend sin perder de vista el producto completo, conversemos.

**Qué puedo aportar a tu equipo**
- **Backend y APIs:** servicios en Laravel o Spring Boot, bien modelados, probados y fáciles de mantener.
- **Plataformas SaaS full-stack:** de la base de datos a la interfaz en React, con multi-tenancy desde el inicio.
- **Seguridad y cumplimiento:** experiencia llevando normas como NIST e ISO 27001 a lógica de negocio y reportes.

**Datos de contacto:** myamunaquevillegas@gmail.com · LinkedIn · GitHub · Piura, Perú (UTC−5) · **Descargar CV**

## Footer

© 2026 Miguel Yamunaqué Villegas · Hecho con React, Tailwind CSS y Vite.

---

## Información que no se publica (a propósito)

Tus notas incluyen datos internos de Cloud Technologies que **no deben ir en un portafolio público**, aunque sean ciertos:
- Los **hallazgos de seguridad concretos** (el token temporal de 2FA, los accesos entre empresas a evidencias, datos simulados en dashboards). Publicarlos describe vulnerabilidades de un producto en producción. En su lugar dice "participación en la auditoría y remediación del aislamiento entre clientes".
- El **nombre del esquema de base de datos**, las rutas internas de la API y de los reportes, el número de rutas y el "kill switch".
- El **error en las ponderaciones** del instrumento completo y las tareas pendientes (Resend, reCAPTCHA, Nitro).
- Los nombres de archivos y clases internas.

> Antes de publicar, conviene confirmar con Cloud Technologies que puedes mostrar NISTRACK y el Termómetro con este nivel de detalle técnico y con capturas.
