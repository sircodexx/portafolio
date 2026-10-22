import { createContext, useContext, useEffect, useState } from 'react'

// Rutas de la web: el path de cada página.
export const routes = { home: '/', works: '/proyectos', about: '/sobre-mi' }

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

export function navigate(to) {
  if (to === window.location.pathname + window.location.search) return
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

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

// Paletas del diseño v2 (tokens en src/theme.css).
export const palettes = [
  { key: 'a', name: 'Grafito + Ámbar', swatch: '#f5a524' },
  { key: 'b', name: 'Azul noche + Cielo', swatch: '#38bdf8' },
  { key: 'c', name: 'Pizarra + Lima', swatch: '#a3e635' },
]

// Paleta activa: ?paleta=a|b|c en la URL, luego la última elegida, por defecto "a".
export function usePalette() {
  const [palette, setPalette] = useState(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('paleta')
    if (palettes.some(p => p.key === fromUrl)) return fromUrl
    try {
      const saved = localStorage.getItem('paleta')
      if (palettes.some(p => p.key === saved)) return saved
    } catch { /* almacenamiento no disponible */ }
    return 'a'
  })
  useEffect(() => {
    document.documentElement.dataset.palette = palette
    try { localStorage.setItem('paleta', palette) } catch { /* almacenamiento no disponible */ }
  }, [palette])
  return [palette, setPalette]
}

// Imágenes por nombre de archivo, sin extensión.
const byName = modules => Object.fromEntries(Object.entries(modules).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]))
export const projectImages = byName(import.meta.glob('./assets/projects/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
export const wallImages = byName(import.meta.glob('./assets/wall/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
export const aboutImages = Object.values(import.meta.glob('./assets/about/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
