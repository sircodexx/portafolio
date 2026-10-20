import { AnimatePresence, motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import { contact, labItems, projects, tabs } from '../content.js'
import { projectImages, useLang } from '../lib.js'
import { CodeArt } from '../components/Decor.jsx'

const entries = [
  ...projects.map(p => ({ ...p, kind: 'project', href: p.live || p.code || contact.github })),
  ...labItems.map(l => ({ ...l, kind: 'lab' })),
]

function Card({ entry }) {
  const { t, pick } = useLang()
  const text = entry.kind === 'project' ? { ...t.projects.items[entry.key], title: entry.name, desc: t.projects.items[entry.key].desc } : t.works.lab[entry.key]
  const image = entry.kind === 'project' && projectImages[entry.image]
  const body = (
    <>
      <div className="overflow-hidden rounded-xl bg-zinc-200/70 ring-2 ring-transparent transition-all duration-300 group-hover:ring-rust">
        {image
          ? <img src={image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
          : <CodeArt art={entry.art ?? 'terminal'} className="aspect-[16/10]" />}
      </div>
      <h2 className="mt-4 text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-rust">{text.title}</h2>
      <p className="hand text-lg">{text.org}</p>
      <p className="mt-1.5 text-sm leading-6 text-zinc-500">{text.desc}</p>
      <p className="mt-2 font-mono text-[11px] text-zinc-400">{entry.year ? `${entry.year} · ` : ''}{entry.tags.map(pick).join(' · ')}</p>
    </>
  )
  const anim = { layout: true, initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, scale: 0.97 }, transition: { duration: 0.35 } }
  return entry.href
    ? <motion.a {...anim} href={entry.href} target="_blank" rel="noopener noreferrer" aria-label={`${text.title} (${t.projects.newTab})`} className="group block">{body}</motion.a>
    : <motion.article {...anim} className="group">{body}</motion.article>
}

export default function Works({ search }) {
  const { t } = useLang()
  const tab = tabs.includes(search.get('tab')) ? search.get('tab') : 'live'
  const count = key => entries.filter(e => e.tabs.includes(key)).length
  const select = key => {
    window.history.replaceState({}, '', `?tab=${key}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  const visible = entries.filter(e => e.tabs.includes(tab))

  return (
    <div className="mx-auto max-w-5xl px-5 pb-40 pt-28 sm:pt-32">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="display text-4xl sm:text-6xl">{t.works.title}</motion.h1>
      <p className="hand mt-1 text-xl">{t.works.subtitle}</p>
      <div role="tablist" aria-label={t.works.title} className="mt-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-zinc-900/[0.06] p-1">
        {tabs.map(key => (
          <button key={key} type="button" role="tab" aria-selected={tab === key} onClick={() => select(key)} className={`relative flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors sm:px-4 ${tab === key ? 'text-ink' : 'text-zinc-500 hover:text-ink'}`}>
            {tab === key && <motion.span layoutId="tab-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} className="absolute inset-0 rounded-full bg-white shadow-sm" />}
            <span className="relative flex items-center gap-1.5">{key === 'ai' && <Sparkles size={13} aria-hidden="true" className="text-leaf" />}{t.works.tabs[key]}<span className={`text-xs ${tab === key ? 'text-rust' : 'text-zinc-400'}`}>{count(key)}</span></span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait"><motion.p key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hand mt-6 text-lg">{t.works.tabNotes[tab]}</motion.p></AnimatePresence>
      <motion.div role="tabpanel" layout className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">{visible.map(entry => <Card key={entry.key} entry={entry} />)}</AnimatePresence>
      </motion.div>
    </div>
  )
}
