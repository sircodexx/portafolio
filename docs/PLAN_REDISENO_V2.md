# Plan de implementación · Portafolio v2

Estado: **pendiente de aprobación** · Fecha: 21 de octubre de 2026
Inventario de partida: [INVENTARIO_PORTAFOLIO_V1.md](INVENTARIO_PORTAFOLIO_V1.md)

## Objetivo

Pasar de un portafolio con estética de diseñador (manuscrito, stickers, ojos, dock) a uno **serio de desarrollador backend / full-stack**, tomando el *método* de willywg.com (estructura tipo CV, sobriedad y logros explicados con datos) **sin copiar su diseño**. La identidad propia será la de un ingeniero de backend: terminal, código, diagramas de arquitectura y casos técnicos.

## Qué tomamos de la referencia y qué no

| Tomamos (método) | Cambiamos (identidad propia) |
|---|---|
| Orden tipo CV: sobre mí → especialidades → experiencia → proyectos → formación → contacto | Paleta propia, a elegir entre 3 que podrás probar en vivo |
| Nav fija con anclas, ES/EN y botón de contacto | Hero con **tarjeta tipo terminal** (`$ whoami`) en vez de la foto grande con círculos |
| Logros con contexto y números | Etiquetas de sección en estilo código: `// 03 · experiencia` con fuente monoespaciada |
| Tarjetas de especialidades con título y una línea | **Casos de estudio por proyecto** con página propia, diagrama de arquitectura y galería de capturas (la referencia no los tiene) |
| Sección de contacto con "cómo puedo ayudarte" | Franja de cifras (proyectos en producción, 48 h, certificados, ciclo) |
| | Sin charlas ni testimonios por ahora: quedan preparados para el futuro, no como secciones vacías |

## Nueva estructura del sitio

**Inicio `/`**, una sola página con anclas:

1. **Header fijo:** "Miguel Yamunaqué" · Sobre mí · Especialidades · Experiencia · Proyectos · Formación · ES/EN · botón **Contacto**.
2. **Hero / Sobre mí:** rol ("Desarrollador Backend & Full-Stack"), biografía en 3 párrafos basada en el resumen del CV y el texto "de la base de datos al deploy", botones *Ver proyectos* y *Descargar CV*. A la derecha, la tarjeta terminal con rol, stack principal, ubicación y estado ("Disponible"). La foto pasa a un formato pequeño y sobrio.
3. **Cifras:** 4 proyectos · 2 en producción en Cloud Technologies · backend en 48 h (hackathon) · 9 certificados.
4. **Especialidades:** 6 tarjetas (Backend multi-tenant, Front-end con SSR, Ciberseguridad NIST/GRC, IA aplicada al desarrollo, Cloud y DevOps, Bases de datos). Debajo va el stack completo en formato compacto con logos.
5. **Experiencia:** línea de tiempo con Cloud Technologies (puntos del CV, versión completa) y Promart (versión del CV, en formato reducido como "Otra experiencia").
6. **Proyectos destacados:** tarjeta grande por proyecto con captura, contexto, descripción, tags y botones *Ver caso* / *Ver en vivo* / *Código*. Filtros: Todos · Producción · Código · IA.
7. **Laboratorio:** los 3 experimentos en tarjetas compactas con ilustración de código.
8. **Formación y certificados:** UTP (tercio superior, programación competitiva, docencia) y certificados agrupados por entidad, con el hackathon destacado.
9. **Contacto:** "¿Construimos algo juntos?", 3 formas en que puedo aportar (backend y APIs, plataformas SaaS full-stack, seguridad y cumplimiento), email, LinkedIn, GitHub y CV. Sin formulario porque no hay backend; se usa `mailto`.
10. **Footer.**

**Caso de estudio `/proyectos/<slug>`** (Nistrack, Termómetro, KeptAI, AgriMonitor):
Contexto y problema → Mi rol → Stack → Arquitectura (diagrama SVG simple) → Decisiones técnicas → Resultado (con cifras) → Galería (capturas de `src/assets/wall/`) → enlaces → siguiente proyecto.

**Rutas antiguas:** `/sobre-mi` y `/proyectos` llevan a la sección correspondiente del inicio, para que ningún enlace compartido se rompa.

## Sistema visual

- **Modo:** oscuro por defecto. Los colores viven en variables CSS (tokens), así que cambiar la paleta es cambiar un solo bloque.
- **Paletas para probar** (se cambian con `?paleta=a|b|c` en la URL mientras decidimos; luego se fija la elegida y se quita el selector):

| | A · Grafito + Ámbar | B · Azul noche + Cielo | C · Pizarra + Lima |
|---|---|---|---|
| Fondo | `#0f1115` | `#0b1220` | `#111315` |
| Superficie | `#171a21` | `#121b2e` | `#1a1d20` |
| Texto | `#e8e6e3` | `#e2e8f0` | `#ececec` |
| Acento | `#f5a524` | `#38bdf8` | `#a3e635` |
| Secundario | `#7aa2f7` | `#a78bfa` | `#22d3ee` |

  Ninguna usa el fondo `#0d1117` ni el verde menta de la referencia.
- **Tipografía:** Inter para texto y títulos, JetBrains Mono para etiquetas, tags, la terminal y las cifras. Se elimina Caveat (manuscrita) y DM Sans.
- **Animación:** solo aparición suave al hacer scroll y hover discretos con Motion, respetando `prefers-reduced-motion`.
- **Se retiran:** ojos, mazo en vuelo, curva, muro parallax, dock, iconos arrastrables, notas manuscritas y polaroid.

## Fases

| # | Fase | Qué incluye | Entregable para revisar |
|---|---|---|---|
| 0 | Preparación | Etiqueta `v1.0` en el commit actual y rama `rediseno-v2`. La v1 sigue en producción todo el tiempo | — |
| 1 | Contenido | Reestructurar `content.js` (ES/EN) con el nuevo esquema; redactar biografía, especialidades y borradores de los 4 casos de estudio. Lo que no sé lo marco como **[POR CONFIRMAR]** | Te paso los textos para corregir **antes** de maquetar |
| 2 | Sistema visual | Tokens, 3 paletas, tipografía, componentes base (Section, Card, Tag, Button, Timeline, Terminal) y selector de paleta temporal | Vista local para probar colores |
| 3 | Página de inicio | Secciones 1 a 10, responsive (375 / 768 / 1280 px), bilingüe | Vista local y capturas |
| 4 | Casos de estudio | Ruta `/proyectos/<slug>`, diagramas SVG y galería | Vista local |
| 5 | SEO y analítica | Nuevo `og.png`, metadatos, redirecciones de rutas viejas, **Vercel Analytics + Speed Insights** | — |
| 6 | Limpieza y QA | Borrar componentes y dependencias sin uso, `npm run build`, `npm run lint`, revisión de accesibilidad y reduced-motion, Lighthouse | Informe corto de resultados |
| 7 | Publicación | URL de vista previa en Vercel para revisarla en tu celular; con tu visto bueno, merge a `main` y producción | URL final |

Hay 4 puntos de control contigo: textos (fase 1), paleta (fase 2), inicio (fase 3) y vista previa (fase 7). No paso a producción sin tu aprobación.

## Archivos afectados

- **Reescribir:** `src/content.js`, `src/App.jsx`, `src/index.css`, `src/pages/Home.jsx`, `src/components/Chrome.jsx` (header), `index.html`.
- **Nuevos:** `src/pages/Project.jsx` (caso de estudio), `src/components/` (Section, Terminal, Timeline, ProjectCard, Diagram…), `src/theme.css` (tokens y paletas).
- **Eliminar al final:** `src/components/Decor.jsx` (ojos, destellos, dock), `src/pages/Works.jsx` y `src/pages/About.jsx` (su contenido pasa al inicio), y Caveat/DM Sans de `index.html`.
- **Sin cambios:** Vercel, el CV, las imágenes, el router base de `src/lib.js` (solo se amplía con `/proyectos/<slug>`).

## Decisiones (respondidas el 21/10/2026)

1. **Skills:** se recorta. Núcleo visible: Laravel, PHP, Next.js, React, TypeScript, Spring Boot, Java, MySQL, PostgreSQL, Docker, Git, APIs REST y multi-tenant. El resto va en "También he trabajado con".
2. **Promart:** se queda como "Otra experiencia" en formato reducido.
3. **Datos de proyectos:** no hay cifras. Los casos de estudio se redactan con lo que se puede verificar (CV, inventario, sitios en vivo y repositorio), sin inventar números. La franja de cifras usa solo datos ciertos.
4. **Disponibilidad:** no se muestra. Tono sobrio y profesional. Posicionamiento: **Desarrollador Full-Stack Junior** (con foco en backend).
5. **Ajuste de la fase 1:** los textos se entregan para revisión en `docs/TEXTOS_V2.md`, fáciles de leer. Una vez aprobados, se pasan a `content.js` (ES/EN) al empezar la fase 3, para que la v1 siga compilando mientras tanto.
