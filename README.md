# Portafolio — Miguel Yamunaqué Villegas

Portafolio personal de **Miguel Ángel Yamunaqué Villegas**, Desarrollador Web Jr. Backend & Full-Stack en Piura, Perú.

**En vivo:** https://portafoliomiguel-yamunaque.vercel.app

Página de una sola aplicación (SPA) con navegación tipo escritorio, animaciones guiadas por el scroll y contenido en español e inglés.

## Qué incluye

- **Portada fija** con saludo manuscrito, la palabra destacada en píldora y ojos que siguen el cursor.
- **Mazo de proyectos en vuelo:** al hacer scroll, las capturas suben en abanico y cada una viaja hasta la posición real de su proyecto en la lista.
- **Proyectos en zigzag** con hover (borde, destellos, píldora "en vivo") y enlaces a producción o al código.
- **Curva de arquitectura** que se dibuja con el scroll; sus nodos (Escalable, IA, Seguro, Mantenible) cambian el texto al tocarlos.
- **Muro de experimentos** a todo el ancho con columnas en parallax.
- **Dock flotante** con menús de carpetas (categorías de proyectos) y enlaces (LinkedIn, Email, GitHub, CV).
- **Páginas:** `/proyectos` (pestañas filtrables) y `/sobre-mi` (foto, iconos de stack arrastrables, experiencia, educación, habilidades, certificados y CV en PDF).
- **Bilingüe ES / EN**, con detección del idioma del navegador y preferencia guardada.
- **Accesible:** enlace para saltar al contenido, foco visible, textos alternativos y respeto de `prefers-reduced-motion` (sin animaciones si el usuario lo pide).

## Stack

| Área | Tecnología |
|---|---|
| UI | React 19 |
| Build | Vite 8 |
| Estilos | Tailwind CSS 4 (PostCSS) |
| Animación | Motion (`motion/react`) |
| Iconos | lucide-react, simple-icons (logos de tecnologías) |
| Tipografía | Inter, DM Sans y Caveat (Google Fonts) |
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
├── content.js            # TODO el contenido (ES/EN): textos, proyectos, experiencia, skills, certificados
├── lib.js                # rutas, router mínimo, idioma e imágenes
├── App.jsx               # layout, transiciones entre páginas
├── components/
│   ├── Chrome.jsx        # cabecera y dock con menús
│   ├── Core.jsx          # Link, LangProvider, texto enriquecido
│   └── Decor.jsx         # ojos, estrellas, destellos, iconos del dock, ilustraciones de código
├── pages/
│   ├── Home.jsx          # portada, vuelo del mazo, proyectos, curva, muro, cierre
│   ├── Works.jsx         # /proyectos con pestañas
│   └── About.jsx         # /sobre-mi
└── assets/
    ├── projects/         # capturas de cada proyecto (nombre = campo `image`)
    ├── wall/             # capturas del muro de experimentos
    └── about/            # fotos de la polaroid
public/
└── cv/                   # CV en PDF
```

## Editar el contenido

Todo el texto vive en [`src/content.js`](src/content.js). Los textos con `"es|en"` se separan por idioma automáticamente.

- **Proyectos:** agrega una entrada en `projects` (`live` para la URL en producción o `code` para el repositorio) y su texto en `content.es.projects.items` / `content.en.projects.items`. La captura va en `src/assets/projects/<image>.webp` (16:10, ~1280×800).
- **Foto:** guarda de 1 a 4 imágenes en `src/assets/about/`; con varias aparecen miniaturas para cambiarlas.
- **CV:** reemplaza `public/cv/Miguel-Yamunaque-CV.pdf`.

## Despliegue

El proyecto está en Vercel. [`vercel.json`](vercel.json) define el build de Vite y una reescritura para que las rutas `/proyectos` y `/sobre-mi` funcionen al recargar.

```bash
npx vercel deploy --prod
```

## Contacto

- LinkedIn: [miguel-yamunaque-villegas](https://www.linkedin.com/in/miguel-yamunaque-villegas)
- GitHub: [sircodexx](https://github.com/sircodexx)
- Email: myamunaquevillegas@gmail.com
