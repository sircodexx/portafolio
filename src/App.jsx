import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { projects } from './content.js'
import { legacyRoutes, navigate, projectFromPath, routes, useLang, useLocation } from './lib.js'
import { LangProvider } from './components/Core.jsx'
import { Footer, Header } from './components/Chrome.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'

function Shell() {
  const { t, pick } = useLang()
  const { path } = useLocation()
  const projectKey = projectFromPath(path)
  const project = projects.find(p => p.key === projectKey)
  const isProject = Boolean(project)
  const title = project ? `${pick(project.name)} · Miguel Yamunaqué` : t.meta.title

  useEffect(() => { document.title = title }, [title])

  // Rutas de la v1 y rutas desconocidas: al inicio (con la sección que corresponda).
  useEffect(() => {
    if (path === routes.home || isProject) return
    const section = legacyRoutes[path]
    navigate(section ? `${routes.home}#${section}` : routes.home, { replace: true })
  }, [path, isProject])

  // Al cambiar de página: a la sección del ancla o arriba del todo.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    requestAnimationFrame(() => {
      const target = id && document.getElementById(id)
      if (target) target.scrollIntoView()
      else window.scrollTo(0, 0)
    })
  }, [path])

  return (
    <>
      <a href="#contenido" className="sr-only z-[60] rounded-lg bg-accent p-4 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">{t.skip}</a>
      <Header onHome={!isProject} />
      <main id="contenido">
        {isProject ? <Project key={projectKey} projectKey={projectKey} /> : <Home />}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <LangProvider><Shell /></LangProvider>
      {/* Visitas y rendimiento real en el panel de Vercel (sin cookies). */}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
