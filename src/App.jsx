import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { legacyRoutes, navigate, routes, useLang, useLocation } from './lib.js'
import { LangProvider } from './components/Core.jsx'
import { Footer, Header } from './components/Chrome.jsx'
import Home from './pages/Home.jsx'

function Shell() {
  const { t } = useLang()
  const { path } = useLocation()

  // Rutas de la v1 y rutas desconocidas: al inicio (con la sección que corresponda).
  useEffect(() => {
    if (path === routes.home) return
    const section = legacyRoutes[path]
    navigate(section ? `${routes.home}#${section}` : routes.home, { replace: true })
    if (section) requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView())
  }, [path])

  return (
    <>
      <a href="#contenido" className="sr-only z-[60] rounded-lg bg-accent p-4 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">{t.skip}</a>
      <Header onHome />
      <main id="contenido">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LangProvider><Shell /></LangProvider>
    </MotionConfig>
  )
}
