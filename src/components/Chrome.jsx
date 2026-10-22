import { useEffect, useState } from 'react'
import { Languages, Mail, Menu, X } from 'lucide-react'
import { routes, sections, useLang } from '../lib.js'
import { Link } from './Core.jsx'

// Sección visible ahora mismo, para marcarla en el menú (solo en el inicio).
function useActiveSection(enabled) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (!enabled) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [enabled])
  return enabled ? active : null
}

export function Header({ onHome }) {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(onHome)
  // En los casos de estudio las anclas apuntan al inicio.
  const href = id => `${onHome ? '' : routes.home}#${id}`
  const links = sections.filter(s => s.nav)
  const other = lang === 'es' ? 'EN' : 'ES'

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to={routes.home} className="text-xl font-extrabold tracking-tight text-fg sm:text-2xl">Miguel <span className="text-accent">Yamunaqué</span></Link>
        <nav aria-label={t.nav.label} className="hidden items-center gap-7 lg:flex">
          {links.map(({ id, key }) => (
            <a key={id} href={href(id)} aria-current={active === id ? 'true' : undefined}
              className={`border-b-2 pb-0.5 text-[15px] font-medium transition hover:text-accent ${active === id ? 'border-accent text-accent' : 'border-transparent text-fg'}`}>{t.nav[key]}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={`${other} · ${t.langButton}`} title={t.langButton}
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-sm text-muted transition hover:border-accent/60 hover:text-fg">
            <Languages size={16} aria-hidden="true" />{other}
          </button>
          <a href={href('contacto')} className="hidden items-center gap-2 rounded-lg bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-[15px] font-semibold text-accent-ink transition hover:brightness-110 sm:flex">
            <Mail size={17} aria-hidden="true" />{t.nav.contact}
          </a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-movil" aria-label={open ? t.menu.close : t.menu.open} className="grid size-10 place-items-center rounded-lg border border-line text-fg lg:hidden">
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label={t.nav.label} className="border-t border-line bg-bg px-5 py-3 lg:hidden">
          {[...links, { id: 'contacto', key: 'contact' }].map(({ id, key }) => (
            <a key={id} href={href(id)} onClick={() => setOpen(false)} className="block border-b border-line/60 py-3 text-base text-fg last:border-0 hover:text-accent">{t.nav[key]}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

const year = new Date().getFullYear()

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-surface">
      <p className="mx-auto max-w-7xl px-5 py-10 text-center text-sm text-muted">© {year} Miguel Yamunaqué Villegas · {t.footer}</p>
    </footer>
  )
}
