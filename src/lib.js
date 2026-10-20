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

// Imágenes por nombre de archivo, sin extensión.
const byName = modules => Object.fromEntries(Object.entries(modules).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]))
export const projectImages = byName(import.meta.glob('./assets/projects/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
export const wallImages = byName(import.meta.glob('./assets/wall/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
export const aboutImages = Object.values(import.meta.glob('./assets/about/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }))
