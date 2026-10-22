import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { contact } from '../content.js'
import { external, routes, sections, useLang } from '../lib.js'
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

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link to={routes.home} className="text-sm font-bold tracking-tight text-fg sm:text-base">Miguel Yamunaqué<span className="text-accent">.</span></Link>
        <nav aria-label={t.nav.label} className="hidden items-center gap-7 text-sm lg:flex">
          {links.map(({ id, key }) => (
            <a key={id} href={href(id)} aria-current={active === id ? 'true' : undefined} className={`transition hover:text-fg ${active === id ? 'text-fg' : 'text-muted'}`}>{t.nav[key]}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.langButton} title={t.langButton} className="rounded-md px-2 py-1 font-mono text-xs text-muted transition hover:text-fg">
            <span className={lang === 'es' ? 'text-accent' : ''}>ES</span> / <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
          </button>
          <a href={href('contacto')} className="hidden rounded-lg border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-ink sm:inline-block">{t.nav.contact}</a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-movil" aria-label={open ? t.menu.close : t.menu.open} className="grid size-9 place-items-center rounded-lg border border-line text-fg lg:hidden">
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label={t.nav.label} className="border-t border-line bg-bg px-5 py-4 lg:hidden">
          {[...links, { id: 'contacto', key: 'contact' }].map(({ id, key }) => (
            <a key={id} href={href(id)} onClick={() => setOpen(false)} className="block border-b border-line/60 py-3 text-base text-muted last:border-0 hover:text-fg">{t.nav[key]}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

const year = new Date().getFullYear()

const social = [
  { key: 'email', href: `mailto:${contact.email}`, icon: Mail },
  { key: 'linkedin', href: contact.linkedin, icon: Linkedin },
  { key: 'github', href: contact.github, icon: Github },
]

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {year} Miguel Yamunaqué Villegas · <span className="font-mono text-xs">{t.footer}</span></p>
        <div className="flex gap-1">
          {social.map(({ key, href, icon: Icon }) => (
            <a key={key} href={href} {...external(href)} aria-label={t.contact.links[key]} title={t.contact.links[key]} className="grid size-9 place-items-center rounded-lg transition hover:bg-surface hover:text-accent"><Icon size={18} aria-hidden="true" /></a>
          ))}
        </div>
      </div>
    </footer>
  )
}
