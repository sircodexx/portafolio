# Portafolio — Miguel Yamunaqué Villegas

Portafolio personal de **Miguel Ángel Yamunaqué Villegas**, Desarrollador Full-Stack Jr. (backend y plataformas SaaS) en Piura, Perú.

**En vivo:** https://portafoliomiguel-yamunaque.vercel.app

SPA en una sola página con estructura tipo CV, casos de estudio por proyecto y contenido en español e inglés. La versión anterior (v1, estilo escritorio) está guardada en la etiqueta `v1.0`.

## Qué incluye

- **Inicio (`/`):** sobre mí con tarjeta de terminal, cifras, especialidades y stack, experiencia, proyectos con filtros, laboratorio, formación y certificados, y contacto.
- **Casos de estudio (`/proyectos/<proyecto>`):** contexto, producto, rol, diagrama de arquitectura, decisiones técnicas, resultado, galería y siguiente proyecto.
- **Rutas de la v1:** `/sobre-mi` y `/proyectos` redirigen a su sección del inicio (`vercel.json` y, en local, el router).
- **Bilingüe ES / EN**, con detección del idioma del navegador y preferencia guardada.
- **Accesible:** enlace para saltar al contenido, foco visible, textos alternativos, sección activa en el menú y `prefers-reduced-motion`.
- **SEO:** metadatos Open Graph y Twitter, datos estructurados (`Person`), `robots.txt`, `sitemap.xml` e imagen `og.png`.
- **Analítica:** Vercel Web Analytics y Speed Insights (sin cookies). Se activan en el panel del proyecto en Vercel.

## Stack

| Área | Tecnología |
|---|---|
| UI | React 19 |
| Build | Vite 8 |
| Estilos | Tailwind CSS 4 (PostCSS), tokens en `src/theme.css` |
| Iconos | lucide-react, simple-icons (logos del stack) |
| Tipografía | Inter y JetBrains Mono (Google Fonts) |
| Analítica | @vercel/analytics, @vercel/speed-insights |
| Linter | oxlint |
| Hosting | Vercel |

Sin backend, base de datos ni variables de entorno.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # compila a dist/
npm run preview   # sirve dist/ en local
npm run lint      # oxlint
```

En PowerShell usa `npm.cmd` si `npm` está bloqueado por la política de ejecución.

## Estructura

```
src/
├── content.js            # TODO el contenido (ES/EN): proyectos, casos, experiencia, stack, certificados
├── lib.js                # rutas, router mínimo, secciones, idioma e imágenes
├── theme.css             # paleta Grafito + Ámbar y fuentes (tokens de Tailwind)
├── index.css             # estilos base y animación de aparición
├── App.jsx               # layout, rutas y analítica
├── components/
│   ├── Chrome.jsx        # header con menú y footer
│   ├── Core.jsx          # Link, LangProvider, texto enriquecido
│   └── Ui.jsx            # Section, Button, Tag, Card, Terminal, Stat, Timeline, Diagram, Reveal
├── pages/
│   ├── Home.jsx          # inicio con todas las secciones
│   └── Project.jsx       # caso de estudio
└── assets/
    ├── projects/         # portada de cada proyecto (nombre = campo `image`)
    ├── wall/             # capturas para la galería de los casos (campo `gallery`)
    └── about/            # foto
public/
├── cv/                   # CV en PDF
├── og.png                # vista previa al compartir (1200×630)
├── robots.txt, sitemap.xml
└── favicon.svg
docs/                     # inventario de la v1, plan, textos y QA del rediseño
```

## Editar el contenido

Todo el texto vive en [`src/content.js`](src/content.js). Los textos con `"es|en"` se separan por idioma automáticamente.

- **Proyecto nuevo:** agrega una entrada en `projects` (imagen, tags, `live` o `code`, `gallery`, `stack` y `diagram`), su resumen en `content.<idioma>.projects.items` y su caso en `content.<idioma>.cases`. Añade también su URL a `public/sitemap.xml`.
- **Colores:** cambia el bloque `:root` de [`src/theme.css`](src/theme.css).
- **CV:** reemplaza `public/cv/Miguel-Yamunaque-CV.pdf`.

## Despliegue

El proyecto está en Vercel. [`vercel.json`](vercel.json) define el build de Vite, las redirecciones de la v1 y la reescritura SPA para que `/proyectos/<proyecto>` funcione al recargar.

## Contacto

- LinkedIn: [miguel-yamunaque-villegas](https://www.linkedin.com/in/miguel-yamunaque-villegas)
- GitHub: [sircodexx](https://github.com/sircodexx)
- Email: myamunaquevillegas@gmail.com
