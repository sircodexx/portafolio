# Textos del portafolio v2 · borrador para revisión

Estado: **pendiente de tu revisión** · Fase 1 del [plan](PLAN_REDISENO_V2.md)

Cómo revisar: corrige directo aquí o dime los cambios. Lo marcado **[POR CONFIRMAR]** es una suposición razonable que solo tú puedes validar; si no es cierto, lo quito. No inventé cifras: los números vienen de tu CV, de los sitios en vivo (nistrack.com y el Termómetro) o del repositorio de AgriMonitor. La versión en inglés la traduzco cuando apruebes el español.

---

## Metadatos (Google y redes)

- **Título:** Miguel Yamunaqué · Desarrollador Full-Stack Jr.
- **Descripción:** Desarrollador Full-Stack Jr. en Piura, Perú. Construyo plataformas SaaS B2B con Laravel, Next.js y Spring Boot: arquitectura multi-tenant, APIs REST y despliegue con Docker.

## Header

Miguel Yamunaqué · Sobre mí · Especialidades · Experiencia · Proyectos · Formación · ES/EN · **Contacto**

---

## 01 · Sobre mí (hero)

**Miguel Yamunaqué Villegas**
DESARROLLADOR FULL-STACK JR. · BACKEND Y PLATAFORMAS SAAS

Soy desarrollador full-stack y estudiante de último año de Ingeniería de Sistemas e Informática. Hoy trabajo en **Cloud Technologies**, donde construyo plataformas SaaS B2B de **ciberseguridad y resiliencia operativa** alineadas a estándares NIST.

Me especializo en el lado del servidor: **arquitecturas multi-tenant** con aislamiento estricto de datos entre organizaciones, **APIs RESTful** con integridad transaccional y motores de evaluación que traducen normas internacionales a lógica de negocio. En el front-end trabajo con **Next.js y TypeScript**, resolviendo problemas reales de SSR como hydration mismatches y la persistencia de estado entre sesiones.

Construyo de punta a punta, **de la base de datos al deploy**: modelo los datos, escribo la API, armo la interfaz y la despliego en contenedores con Docker. Uso la IA como herramienta de trabajo para acelerar el desarrollo, sin delegarle el criterio ni la calidad del código.

Botones: **Ver proyectos** · **Descargar CV**

**Tarjeta terminal (derecha):**
```
$ whoami
miguel-yamunaque · full-stack developer jr.

$ cat stack.txt
backend   Laravel · Spring Boot · PHP · Java
frontend  Next.js · React · TypeScript
data      MySQL · PostgreSQL
infra     Docker · Linux VPS · Git

$ pwd
/piura/peru
```

## Franja de cifras

Solo datos comprobables:
- **2** · productos en producción en Cloud Technologies
- **48 h** · de cero a demo con KeptAI (Hackathon GDG Piura)
- **9** · certificados (Cisco, UTP, GDG)
- **Tercio superior** · Ingeniería de Sistemas, UTP

---

## 02 · Especialidades

*Subtítulo:* Lo que sé hacer y puedo demostrar con proyectos reales.

| Título | Texto |
|---|---|
| **Backend y APIs REST** | APIs con Laravel y Spring Boot, validación, manejo de errores y endpoints con guardado inmediato para no perder datos. |
| **Arquitectura multi-tenant** | Aislamiento estricto de datos entre organizaciones con políticas de acceso por inquilino. |
| **Front-end con SSR** | Interfaces con Next.js, React y TypeScript, resolviendo hydration mismatches y persistencia de estado. |
| **Seguridad y cumplimiento** | Motores de evaluación basados en NIST SP 800-34 y 800-30, con trazabilidad y reportes de auditoría en PDF. |
| **Bases de datos** | Modelado relacional en MySQL y PostgreSQL, con Eloquent y JPA/Hibernate. |
| **Despliegue y DevOps** | Contenedores con Docker y Docker Compose, VPS Linux, CI con GitHub Actions y despliegues en Vercel. |

**Stack principal:** Laravel · PHP · Spring Boot · Java · Next.js · React · TypeScript · MySQL · PostgreSQL · Docker · Git · APIs REST · Multi-tenant
**También he trabajado con:** Python · FastAPI · Node.js · Angular · Vue · Astro · Tailwind CSS · Supabase · React Native · SQL Server · Postman · Linux

> Cambio respecto a la v1: quité de la vista Kubernetes, Jenkins, AWS, Azure, GCP, GSAP, programación funcional y reactiva, que estaban en la v1 pero no se respaldan con un proyecto. Siguen en tu CV. Si alguno sí lo puedes defender, dime y lo vuelvo a poner.

---

## 03 · Experiencia

### Desarrollador Full-Stack · Cloud Technologies E.I.R.L.
Piura, Perú · mar. 2026 — actualidad

Empresa peruana de ciberseguridad. Desarrollo **NISTRACK**, plataforma SaaS de gestión de ciberseguridad y resiliencia operativa.

- **Backend y aislamiento multi-tenant:** diseñé el módulo de resiliencia operativa GRC con Laravel y MySQL, con aislamiento estricto de datos entre organizaciones mediante Laravel Policies, y refactoricé la taxonomía del catálogo de activos con Eloquent ORM.
- **Front-end y SSR:** construí una SPA end-to-end con Next.js, TypeScript y Tailwind v4, con persistencia de estado para evaluaciones de varias sesiones. Resolví hydration mismatches en SSR y condiciones de carrera en StrictMode.
- **Motor de evaluación NIST:** implementé la lógica de evaluación basada en NIST SP 800-34 y 800-30, con endpoints RESTful de guardado inmediato para la integridad de los datos, e integré alertas tempranas oficiales de SENAMHI y ENFEN.
- **Reportes de auditoría:** construí la exportación de reportes PDF generados en el servidor, con gráficos incluidos.
- **Desarrollo asistido por IA:** definí la arquitectura y trabajé con IA como apoyo, revisando y asegurando la calidad de cada cambio.

*Tags:* Laravel · MySQL · Next.js · TypeScript · Tailwind · Docker

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
| **NISTRACK** | Cloud Technologies · 2026 | Plataforma SaaS para evaluar y gestionar la madurez de ciberseguridad según NIST CSF 2.0. | Next.js · TypeScript · Laravel · MySQL · SSR | Ver caso · Ver en vivo |
| **Termómetro de Resiliencia** | Cloud Technologies · 2026 | Diagnóstico público de 20 preguntas que mide la preparación de una empresa ante el Fenómeno El Niño y entrega un reporte PDF. | React · NIST SP 800-34 · PDF | Ver caso · Ver herramienta |
| **KeptAI** | Hackathon Piura Innova · GDG Piura · 2026 | Backend con IA para automatizar pedidos y cotizaciones, de cero a demo en 48 horas. | Supabase · PostgreSQL · IA | Ver caso · Ver en vivo |
| **AgriMonitor** | Proyecto personal · 2026 | API IoT que combina sensores ESP32 y visión por computadora para detectar antracnosis en cultivos de palta. | Java · Spring Boot · PostgreSQL · Docker | Ver caso · Código |

### Caso: NISTRACK
- **Contexto:** las organizaciones gestionan su ciberseguridad con información dispersa, evaluaciones manuales sin trazabilidad y sin una forma objetiva de medir su madurez frente a estándares como NIST CSF 2.0, ISO 27001 o la Resolución SBS 504.
- **El producto:** plataforma SaaS con evaluación de madurez NIST CSF 2.0 (127 preguntas en 6 funciones y 22 categorías, escala 0–4), inventario de activos de TI, gestión de riesgos, radar de postura, trail de auditoría y resúmenes ejecutivos generados con IA.
- **Mi rol:** desarrollador full-stack en el equipo de Cloud Technologies. **[POR CONFIRMAR: ¿qué módulos son tuyos? Por tu CV entiendo que la SPA en Next.js, el módulo de resiliencia operativa, el catálogo de activos y los reportes PDF.]**
- **Arquitectura:** front-end Next.js (SSR) + TypeScript → API RESTful en Laravel → MySQL, con aislamiento multi-tenant por organización mediante Policies.
- **Decisiones técnicas:**
  1. Aislamiento multi-tenant con **Laravel Policies**, para que ninguna organización pueda leer datos de otra.
  2. **Guardado inmediato** por respuesta, para que una evaluación larga no se pierda si se cierra la sesión.
  3. **Persistencia de estado multisesión** en el cliente y corrección de hydration mismatches del SSR.
  4. **PDF generado en el servidor** para que el reporte de auditoría sea idéntico para todos.
- **Resultado:** plataforma en producción en nistrack.com, con planes Starter, Profesional y Enterprise.
- **Galería:** nistrack-hero, nistrack-desafios, nistrack-movil.

### Caso: Termómetro de Resiliencia
- **Contexto:** en la costa norte del Perú, El Niño Costero (1983, 1998, 2017) paralizó empresas, sobre todo por cortes de vías, personal y servicios. Muchos dueños no saben qué tan preparados están.
- **El producto:** herramienta pública y gratuita, sin cuenta, que en unos 5 minutos aplica 20 preguntas en 4 bloques basadas en **NIST SP 800-34 Rev. 1** adaptado al contexto local. Ubica a la empresa en un semáforo de niveles (Crítico, Parcial, Resiliente) y entrega un **reporte PDF**. Muestra la alerta vigente del ENFEN.
- **Mi rol:** lo desarrollé de punta a punta **[POR CONFIRMAR: ¿también el diseño de las preguntas o solo el desarrollo?]**.
- **Decisiones técnicas:** sin registro, para bajar la fricción y que sirva como puerta de entrada a NISTRACK; cálculo del nivel por bloque; PDF descargable al finalizar.
- **Resultado:** en producción y enlazado al ecosistema NISTRACK.
- **Galería:** termometro-hero, termometro-historia, termometro-nino, termometro-diagnostico, termometro-movil.

### Caso: KeptAI
- **Contexto:** Hackathon Regional de Innovación **Piura Innova 2026**, organizada por Google Developer Group Piura. El reto fue automatizar la toma de pedidos y cotizaciones de un negocio.
- **Mi rol:** diseñé la arquitectura backend: esquema relacional en PostgreSQL (Supabase) y flujos asistidos por IA. **[POR CONFIRMAR: ¿tamaño del equipo y qué hicieron los demás?]**
- **Decisiones técnicas:** Supabase para tener base de datos, autenticación y API listas desde el minuto uno; modelo relacional pensado para pedidos, productos y cotizaciones; IA para interpretar las solicitudes y armar la cotización. **[POR CONFIRMAR: ¿la IA cumplía ese papel?]**
- **Resultado:** de cero a demo funcional en **48 horas**, desplegada en keptai.ejesxyz.com.
- **Galería:** keptai-login, keptai-movil.

### Caso: AgriMonitor
- **Contexto:** la antracnosis es un hongo que daña los cultivos de palta y se ve favorecido por ciertas condiciones de temperatura y humedad.
- **El producto:** API REST que recibe lecturas de nodos **ESP32** (temperatura, humedad y foto de las hojas), envía la imagen a un **modelo de visión por computadora** que la clasifica (Sana, Antracnosis leve o severa) y genera **alertas por correo** cuando hay riesgo. Incluye un panel web para administrar usuarios, dispositivos, lecturas, fotos y alertas.
- **Arquitectura:** ESP32 → API Spring Boot 3 (Java 17) en capas (controller, service, repository) → PostgreSQL 17, con servicio de IA externo y SMTP para alertas; todo en Docker Compose sobre un VPS Ubuntu.
- **Decisiones técnicas:**
  1. **JWT sin estado** con Spring Security para los usuarios, y un **token por dispositivo** para autenticar a los sensores.
  2. **Roles** (Administrador, Técnico, Agricultor) aplicados en la API y en las vistas.
  3. **DTOs** para no exponer las entidades y validar lo que envía cada sensor.
  4. **Healthcheck** con Actuator y **CI con GitHub Actions**.
- **Resultado:** API desplegada en un VPS **[POR CONFIRMAR: ¿sigue en línea?]** y código público en GitHub.

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
- **Backend y APIs:** servicios en Laravel o Spring Boot, bien modelados y fáciles de mantener.
- **Plataformas SaaS full-stack:** de la base de datos a la interfaz en Next.js, con multi-tenancy desde el inicio.
- **Seguridad y cumplimiento:** experiencia llevando normas como NIST a lógica de negocio y reportes.

**Datos de contacto:** myamunaquevillegas@gmail.com · LinkedIn · GitHub · Piura, Perú (UTC−5) · **Descargar CV**

## Footer

© 2026 Miguel Yamunaqué Villegas · Hecho con React, Tailwind CSS y Vite.
