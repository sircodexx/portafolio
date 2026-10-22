# Informe de QA · Portafolio v2

Fecha: 21 de octubre de 2026 · Rama `rediseno-v2` · Fase 6 del [plan](PLAN_REDISENO_V2.md)
Medido sobre el build de producción (`npm run build` + `vite preview`) con Lighthouse 12.8.2 en Chrome headless.

## Resultados de Lighthouse

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| Inicio · móvil | **95** (antes 87) | 100 | 96* | 100 | 2,4 s (antes 3,2 s) | 0 |
| Inicio · escritorio | **100** (antes 89) | 100 | 96* | 100 | 0,5 s | **0** (antes 0,185) |
| Caso NISTRACK · móvil | **96** (antes 87) | 100 | 96* | 100 | 2,5 s | 0 |

\* El único fallo de "Buenas prácticas" es un 404 de `/_vercel/insights/script.js`. Ese script solo existe cuando la web corre en Vercel, así que en local siempre falla. En producción desaparece.

## Cambios hechos en esta fase

| Problema encontrado | Corrección | Efecto |
|---|---|---|
| `motion` (~40 KB comprimidos) solo se usaba para la animación de aparición | Animación con CSS + `IntersectionObserver` | JS de 142 KB a 106 KB comprimido |
| `autoprefixer` sobra con Tailwind 4 | Eliminado de dependencias y de PostCSS | Build más simple |
| Google Fonts bloqueaba el primer pintado (~1,8 s en móvil) | Inter y JetBrains Mono servidas desde la propia web (`@fontsource`) | LCP móvil de 3,2 s a 2,4 s; sin depender de terceros |
| Salto de diseño en escritorio: la terminal se recolocaba al cargar la fuente | Columnas del hero alineadas arriba | CLS de 0,185 a 0 |
| El botón ES/EN tenía un nombre accesible distinto de su texto visible | Nombre accesible "ES / EN · Switch to English" | Cumple *label in name* (WCAG 2.5.3) |
| La foto de 37 KB se mostraba a 56 px | Versión de 168 px (3 KB) solo para el inicio | −34 KB en la carga inicial |
| Imágenes sin dimensiones | `width`/`height` en portadas y `fetchpriority="high"` en la imagen principal de cada caso | Menos trabajo de maquetación |
| README describía la v1 | README reescrito para la v2 | — |

## Accesibilidad revisada

- **Contraste (WCAG):** texto principal 15,2:1 · texto secundario 6,1–7,2:1 · ámbar sobre fondo 8,5–9,3:1 · texto sobre botón ámbar 9,1:1. Todo supera AA y casi todo AAA.
- **Estructura:** un solo `h1`, sin saltos en los niveles de encabezado, sin IDs duplicados, todas las imágenes con `alt` y todos los enlaces y botones con nombre.
- **Teclado y lectores:** enlace para saltar al contenido, foco visible en ámbar, `aria-current` en la sección activa, `aria-expanded` en el menú móvil y `aria-pressed` en los filtros.
- **Movimiento reducido:** con `prefers-reduced-motion` no hay animaciones y el contenido aparece directamente.
- **Idioma:** `lang` cambia entre `es` y `en`.

## Pendiente menor (no bloquea la publicación)

- Las capturas de la galería de los casos no declaran dimensiones porque cada una tiene un tamaño distinto. Están debajo del pliegue y con carga diferida, así que no causan saltos (CLS 0).
- Lighthouse marca unos 40 KB de JavaScript sin usar en la carga inicial (React + componentes de los casos). Separar los casos en otro archivo ahorraría poco en un sitio de este tamaño.
- Las portadas de proyectos se sirven a 1280 px aunque en móvil se ven más pequeñas. Generar versiones de 640 px ahorraría unos 35 KB por página.

## Verificación funcional

- `npm run lint`: sin advertencias.
- `npm run build`: correcto.
- Probado en 1280 px y 375 px: inicio, menú móvil, filtros de proyectos, cambio ES/EN, los 4 casos de estudio, "Todos los proyectos", "Siguiente proyecto", redirección de `/proyectos` y `/sobre-mi`, `robots.txt`, `sitemap.xml` y `og.png`.
