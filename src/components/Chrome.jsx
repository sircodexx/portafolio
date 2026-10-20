import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FileText, Github, Languages, Linkedin, Mail, Sparkles } from 'lucide-react'
import { contact } from '../content.js'
import { navigate, routes, useLang } from '../lib.js'
import { Link } from './Core.jsx'
import { AvatarIcon, FolderIcon, LinkTile } from './Decor.jsx'

const social = [
  { key: 'linkedin', href: contact.linkedin, icon: Linkedin },
  { key: 'email', href: `mailto:${contact.email}`, icon: Mail },
  { key: 'github', href: contact.github, icon: Github },
  { key: 'cv', href: contact.cv, icon: FileText },
]
const external = href => href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' }

export function Header() {
  const { t, lang, setLang } = useLang()
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-start justify-between px-4 py-3 sm:px-6 sm:py-4">
      <Link to={routes.home} className="pointer-events-auto leading-none">
        <span className="block text-[15px] font-bold tracking-tight text-ink sm:text-base">Miguel Yamunaqué</span>
        <span className="hand text-sm">{t.tagline}</span>
      </Link>
      <nav aria-label={t.nav.social} className="pointer-events-auto flex items-center gap-0.5 sm:gap-1">
        <button type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.langButton} title={t.langButton} className="group relative flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-900/5 hover:text-ink">
          <Languages size={19} aria-hidden="true" />
          <span className="absolute -bottom-1.5 right-0 rounded bg-ink px-1 text-[9px] font-bold uppercase text-white">{lang}</span>
        </button>
        {social.map(({ key, href, icon: Icon }) => (
          <a key={key} href={href} {...external(href)} aria-label={t.links[key]} title={t.links[key]} className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-900/5 hover:text-ink"><Icon size={19} aria-hidden="true" /></a>
        ))}
      </nav>
    </header>
  )
}

const workFolders = [
  { key: 'ai', color: '#2d2f3a', ai: true },
  { key: 'lab', color: '#f2cf63' },
  { key: 'code', color: '#8fd3a0' },
  { key: 'live', color: '#f0a07a' },
  { key: 'all', color: '#7fb6f0' },
]

function Popover({ children, label }) {
  return (
    <motion.div role="menu" aria-label={label} initial={{ opacity: 0, y: 12, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ type: 'spring', stiffness: 420, damping: 30 }} className="absolute bottom-[calc(100%+10px)] left-1/2 w-44 origin-bottom -translate-x-1/2 rounded-2xl border border-zinc-900/10 bg-white/85 p-1.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      {children}
    </motion.div>
  )
}

const itemMotion = i => ({ initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.03 * i } })

export function Dock({ path }) {
  const { t } = useLang()
  const [open, setOpen] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = e => { if (e.type === 'keydown' ? e.key === 'Escape' : !ref.current?.contains(e.target)) setOpen(null) }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', close) }
  }, [open])

  const go = to => { setOpen(null); navigate(to) }
  const toggle = key => setOpen(open === key ? null : key)
  const tile = 'flex h-11 w-11 items-center justify-center transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-110 sm:h-12 sm:w-12'

  return (
    <nav ref={ref} aria-label={t.nav.main} className="fixed inset-x-0 bottom-3 z-50 flex justify-center px-4 sm:bottom-5">
      <div className="flex items-end gap-1 rounded-[22px] border border-white/60 bg-white/55 px-2.5 pb-1.5 pt-2 shadow-[0_14px_40px_-12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
        <div className="relative">
          <AnimatePresence>{open === 'works' && (
            <Popover label={t.dock.works}>
              {workFolders.map(({ key, color, ai }, i) => (
                <motion.button key={key} type="button" role="menuitem" {...itemMotion(i)} onClick={() => go(key === 'all' ? routes.works : `${routes.works}?tab=${key}`)} className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm font-medium text-ink transition-colors hover:bg-zinc-900/5">
                  <span className="relative w-7 shrink-0"><FolderIcon color={color} className="w-7" />{ai && <Sparkles size={11} aria-hidden="true" className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 text-white" />}</span>
                  {key === 'all' ? t.dock.allWorks : t.works.tabs[key]}
                </motion.button>
              ))}
            </Popover>
          )}</AnimatePresence>
          <button type="button" aria-haspopup="menu" aria-expanded={open === 'works'} onClick={() => toggle('works')} className="group flex w-16 flex-col items-center gap-0.5">
            <span className={tile}><FolderIcon className="w-11 sm:w-12" /></span>
            <span className="text-[11px] font-medium text-zinc-700">{t.dock.works}</span>
            <span className={`h-1 w-1 rounded-full ${path === routes.works ? 'bg-zinc-700' : 'bg-transparent'}`} />
          </button>
        </div>

        <Link to={routes.about} onClick={() => setOpen(null)} aria-current={path === routes.about ? 'page' : undefined} className="group flex w-16 flex-col items-center gap-0.5">
          <span className={tile}><AvatarIcon className="w-10 sm:w-11" /></span>
          <span className="text-[11px] font-medium text-zinc-700">{t.dock.about}</span>
          <span className={`h-1 w-1 rounded-full ${path === routes.about ? 'bg-zinc-700' : 'bg-transparent'}`} />
        </Link>

        <div className="relative">
          <AnimatePresence>{open === 'links' && (
            <Popover label={t.dock.links}>
              {social.map(({ key, href, icon: Icon }, i) => (
                <motion.a key={key} role="menuitem" href={href} {...external(href)} {...itemMotion(i)} onClick={() => setOpen(null)} className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-zinc-900/5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#dbe9fb] text-[#2f6fd6]"><Icon size={16} aria-hidden="true" /></span>{t.links[key]}
                </motion.a>
              ))}
            </Popover>
          )}</AnimatePresence>
          <button type="button" aria-haspopup="menu" aria-expanded={open === 'links'} onClick={() => toggle('links')} className="group flex w-16 flex-col items-center gap-0.5">
            <span className={tile}><LinkTile className="w-10 sm:w-11" /></span>
            <span className="text-[11px] font-medium text-zinc-700">{t.dock.links}</span>
            <span className="h-1 w-1" />
          </button>
        </div>
      </div>
    </nav>
  )
}
