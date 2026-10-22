import { createContext, useContext, useEffect, useState } from 'react'

// Rutas de la web: el inicio y un caso de estudio por proyecto (/proyectos/<key>).
// Las de la v1 (/proyectos y /sobre-mi) llevan a su sección del inicio.
export const routes = { home: '/' }
export const projectPath = key => `/proyectos/${key}`
export const projectFromPath = path => path.match(/^\/proyectos\/([\w-]+)$/)?.[1]
export const legacyRoutes = { '/proyectos': 'proyectos', '/sobre-mi': 'sobre-mi' }

// Secciones del inicio, en orden. `nav`: aparece en el menú (contacto va como botón aparte).
export const sections = [
  { id: 'sobre-mi', key: 'about', nav: true },
  { id: 'especialidades', key: 'skills', nav: true },
  { id: 'experiencia', key: 'experience', nav: true },
  { id: 'proyectos', key: 'projects', nav: true },
  { id: 'laboratorio', key: 'lab' },
  { id: 'formacion', key: 'education', nav: true },
  { id: 'contacto', key: 'contact' },
]

// Router mínimo con History API.
function readLocation() {
  return { path: window.location.pathname.replace(/\/+$/, '') || '/', search: new URLSearchParams(window.location.search) }
}

export function useLocation() {
  const [location, setLocation] = useState(readLocation)
  useEffect(() => {
    const update = () => setLocation(readLocation())
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])
  return location
}

export function navigate(to, { replace = false } = {}) {
  if (to === window.location.pathname + window.location.search + window.location.hash) return
  window.history[replace ? 'replaceState' : 'pushState']({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

// Enlace externo: abre en otra pestaña salvo mailto.
export const external = href => href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' }

// Idioma.
export const LangContext = createContext(null)
export const useLang = () => useContext(LangContext)

export function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* almacenamiento no disponible */ }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

// Imágenes por nombre de archivo, sin extensión.
const byName = modules => Object.fromEntries(Object.entries(modules).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]))
export const projectImages = byName(import.meta.glob('./assets/projects/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
export const wallImages = byName(import.meta.glob('./assets/wall/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
// Foto del inicio: versión pequeña (168 px) de assets/about/miguel.webp, que se usa para og.png.
export { default as avatar } from './assets/about/miguel-avatar.webp'
