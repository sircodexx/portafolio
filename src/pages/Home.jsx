import { createRef, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, ExternalLink, Github, Mail, MapPin } from 'lucide-react'
import { contact, projects } from '../content.js'
import { projectImages, useLang, wallImages } from '../lib.js'
import { Rich } from '../components/Core.jsx'
import { Burst, CodeArt, DashedArrow, Doodle, Eyes, SparkLines, SparkStar, Squiggle } from '../components/Decor.jsx'

const projectHref = project => project.live || project.code || contact.github

// Vuelo del mazo, en alturas de ventana de scroll:
// 0 → RISE_END: el mazo sube y se abre en abanico.
// FLY_START → FLY_END: cada tarjeta viaja hasta la imagen de su proyecto (con un pequeño desfase entre tarjetas).
const RISE_END = 0.45, FLY_START = 0.5, FLY_END = 1.2, STAGGER = 0.06
const clamp01 = v => Math.min(1, Math.max(0, v))
const ease = v => v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2
const lerp = (a, b, t) => a + (b - a) * t

function flight(scrollY, index) {
  const vh = window.innerHeight
  const start = (FLY_START + index * STAGGER) * vh
  return { rise: clamp01(scrollY / (RISE_END * vh)), fly: clamp01((scrollY - start) / ((FLY_END - FLY_START) * vh)) }
}

function Frame({ project, className = '', style }) {
  const image = projectImages[project.image]
  return (
    <motion.div style={{ backgroundColor: project.tint, ...style }} className={`rounded-2xl p-2.5 ${className}`}>
      {image ? <img src={image} alt="" className="aspect-[16/10] w-full rounded-lg object-cover object-top" /> : <CodeArt art="terminal" className="aspect-[16/10] rounded-lg" />}
    </motion.div>
  )
}

// Tarjeta del mazo: fija en pantalla, interpola entre su sitio en el abanico y la imagen real de su proyecto.
function FlyingCard({ project, index, total, target }) {
  const x = useMotionValue(0), y = useMotionValue(0), width = useMotionValue(0), rotate = useMotionValue(0), opacity = useMotionValue(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    const update = () => {
      const el = target.current
      if (!el) return
      const vw = window.innerWidth, vh = window.innerHeight
      const { rise, fly } = flight(window.scrollY, index)
      const offset = index - (total - 1) / 2
      const w0 = Math.min(vw * 0.78, 470)
      const h0 = w0 * 10 / 16 + 20
      const a = ease(rise)
      const fromX = vw / 2 - w0 / 2 + offset * (vw < 768 ? 22 : 115) * a
      const fromY = lerp(vh * 1.1, vh * 0.58 - h0 / 2, a) + Math.abs(offset) * 14 * a
      const to = el.getBoundingClientRect()
      const f = ease(fly)
      x.set(lerp(fromX, to.left, f))
      y.set(lerp(fromY, to.top, f))
      width.set(lerp(w0, to.width, f))
      rotate.set(lerp(offset * 5 * a, 0, f))
      opacity.set(fly >= 1 ? 0 : clamp01(rise * 5))
    }
    update()
    const unsubscribe = scrollY.on('change', update)
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    window.addEventListener('resize', update)
    return () => { unsubscribe(); observer.disconnect(); window.removeEventListener('resize', update) }
  }, [scrollY, target, index, total, x, y, width, rotate, opacity])

  return <Frame project={project} style={{ x, y, width, rotate, opacity, zIndex: 30 + total - index }} className="pointer-events-none fixed left-0 top-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]" />
}

// Portada fija: el texto se apaga mientras el mazo sube.
function Intro() {
  const { t } = useLang()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(p, [0, 0.45], [1, 0.12])
  const heroY = useTransform(p, [0, 0.6], [0, -160])

  return (
    <div ref={ref} className={reduce ? '' : 'h-[185vh]'}>
      <section aria-labelledby="hero-title" className={`${reduce ? 'min-h-screen' : 'sticky top-0 h-screen'} flex items-center justify-center overflow-hidden px-5`}>
        <motion.div style={reduce ? undefined : { opacity: heroOpacity, y: heroY }} className="w-full max-w-[50rem] pb-24">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hand mb-1 ml-1 flex items-end gap-1 text-xl sm:text-2xl"><Doodle className="mb-3 w-5 text-zinc-500" />{t.hero.hello}<Squiggle className="w-6 text-zinc-500" /></motion.p>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }} className="display text-[2.5rem] leading-[1.04] sm:text-[3.4rem] lg:text-[4.1rem]">
            {t.hero.headline[0]}{' '}
            <span className="inline-flex items-center gap-2 whitespace-nowrap align-baseline"><motion.span initial={{ scale: 0.6, rotate: -8, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.55 }} className="inline-block rounded-full bg-rust px-[0.28em] pb-[0.1em] pt-[0.02em] text-white">{t.hero.headline[1]}</motion.span><Eyes /></span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="hand mt-3 text-right text-lg sm:mr-[12%] sm:text-xl">{t.hero.side[0]}<br />{t.hero.side[1]}</motion.p>
          <motion.a href="#proyectos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="hand mx-auto mt-14 flex w-fit flex-col items-center text-lg transition-colors hover:text-ink sm:text-xl">{t.hero.how}<DashedArrow className="mt-1 h-9 w-4" /></motion.a>
        </motion.div>
      </section>
    </div>
  )
}

function ProjectRow({ project, index, frameRef }) {
  const { t, pick } = useLang()
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const landed = useTransform(scrollY, v => reduce || flight(v, index).fly >= 1 ? 1 : 0)
  const item = t.projects.items[project.key]
  const flip = index % 2 === 1
  const cta = project.live ? t.projects.cta[item.cta ?? 'live'] : t.projects.cta.code
  return (
    <a href={projectHref(project)} target="_blank" rel="noopener noreferrer" aria-label={`${cta}: ${project.name} — ${item.title} (${t.projects.newTab})`} className="group grid items-center gap-6 sm:gap-10 md:grid-cols-2">
      <div className={`relative ${flip ? '' : 'md:order-2'}`}>
        <div ref={frameRef}>
          <Frame project={project} style={{ opacity: landed }} className="shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] ring-2 ring-transparent transition-[translate,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:ring-rust" />
        </div>
        <SparkLines className="absolute -right-5 -top-6 w-12 scale-0 text-rust transition-transform duration-300 group-hover:scale-100" />
        <SparkStar className="absolute -bottom-4 -left-4 w-9 scale-0 rotate-12 text-rust transition-transform delay-75 duration-300 group-hover:scale-100" />
      </div>
      <motion.div initial={reduce ? false : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }} className={`relative ${flip ? 'md:pl-4' : 'md:pr-6'}`}>
        <span className="absolute -top-7 left-0 flex translate-y-1 items-center gap-1.5 rounded-full bg-leaf px-2.5 py-0.5 text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{project.live ? <><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />{t.projects.live}</> : <><Github size={12} aria-hidden="true" />{t.projects.code}</>}</span>
        <p className="hand mb-1 text-base">{project.name} · {item.org}</p>
        <h2 className="display text-2xl leading-[1.12] tracking-[-0.035em] transition-colors duration-300 group-hover:text-rust sm:text-[1.7rem]">{item.title}</h2>
        <p className="hand mt-2 text-lg">{project.year} <span className="mx-1 text-zinc-300">|</span> {project.tags.map(pick).join(', ')}</p>
        <span className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors group-hover:bg-rust">{project.live ? <>{cta}<ExternalLink size={14} aria-hidden="true" /></> : <><Github size={14} aria-hidden="true" />{cta}</>}</span>
      </motion.div>
    </a>
  )
}

// Curva de la historia.
const curvePoints = [[-30, 430], [140, 360], [300, 410], [560, 455], [880, 300], [1150, 330], [1430, 30]]
const curvePath = (() => {
  const p = curvePoints
  let d = `M${p[0][0]},${p[0][1]}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] ?? p2
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`
  }
  return d
})()
const storyNodes = [
  { key: 'scalable', point: 2, label: [190, 300], line: 'M225 320 Q262 360 288 395' },
  { key: 'ai', point: 3, label: [560, 330], arrow: 'M552 345 Q548 395 560 425 M548 412 L560 428 L572 413' },
  { key: 'secure', point: 4, label: [880, 175], line: 'M882 195 Q878 245 880 285' },
  { key: 'maintainable', point: 5, label: [1255, 225], line: 'M1238 245 Q1195 280 1165 312' },
]

function StoryCurve() {
  const { t } = useLang()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'center 55%'] })
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1])
  const text = active ? t.story.nodes[active].text : t.story.intro
  const choose = key => setActive(active === key ? null : key)

  return (
    <section ref={ref} aria-labelledby="story-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.h2 id="story-title" initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7 }} className="display text-[2rem] leading-[1.05] sm:ml-[12%] sm:text-5xl">{t.story.title[0]}<br />{t.story.title[1]}</motion.h2>
      </div>
      <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 sm:-mt-16">
        <svg viewBox="0 0 1400 520" className="h-auto w-full overflow-visible" role="group" aria-label={t.story.title.join(' ')}>
          <motion.path d={curvePath} fill="none" stroke="#2e2e2e" strokeWidth="22" strokeLinecap="round" style={reduce ? undefined : { pathLength: draw }} />
          {storyNodes.map(node => {
            const [x, y] = curvePoints[node.point]
            const isAi = node.key === 'ai'
            const on = active === node.key
            return (
              <g key={node.key} role="button" tabIndex={0} aria-pressed={on} aria-label={t.story.nodes[node.key].label} onClick={() => choose(node.key)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(node.key) } }} className="cursor-pointer outline-none [&:focus-visible_circle]:stroke-rust">
                <motion.g initial={reduce ? false : { opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 * node.point }} style={{ transformOrigin: `${x}px ${y}px` }}>
                  <circle cx={x} cy={y} r="34" fill="transparent" />
                  <circle cx={x} cy={y} r={on || isAi ? 22 : 19} fill={isAi ? '#5ec41b' : on ? '#b2421a' : '#2e2e2e'} stroke={isAi || on ? (isAi ? '#5ec41b' : '#b2421a') : '#2e2e2e'} strokeWidth="6" className="transition-all duration-300" />
                  <circle cx={x} cy={y} r={on || isAi ? 9 : 8} fill="#2e2e2e" />
                  <text x={node.label[0]} y={node.label[1]} textAnchor="middle" fontFamily="Caveat, cursive" fontWeight="600" fontSize="54" fill={isAi ? '#5ec41b' : on ? '#b2421a' : '#2e2e2e'} className="transition-colors">{t.story.nodes[node.key].label}</text>
                  {node.line && <path d={node.line} fill="none" stroke="#2e2e2e" strokeWidth="3.5" strokeLinecap="round" />}
                  {node.arrow && <path d={node.arrow} fill="none" stroke="#5ec41b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}
                  {isAi && <text x={x - 52} y={y + 78} textAnchor="middle" fontFamily="Caveat, cursive" fontSize="30" fill="#71717a">↙ {t.story.tap}</text>}
                </motion.g>
              </g>
            )
          })}
        </svg>
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <p aria-live="polite" className="ml-auto mt-6 max-w-md text-base leading-7 text-zinc-500 sm:text-right sm:text-lg"><Rich parts={text} /></p>
      </div>
    </section>
  )
}

// Muro de experimentos.
const wallColumns = [
  [{ img: 'nistrack-hero' }, { img: 'termometro-movil', tall: true }, { code: 'sql' }],
  [{ img: 'keptai-movil', tall: true }, { text: true }, { img: 'nistrack-desafios' }],
  [{ burst: true }, { img: 'termometro-historia' }, { code: 'terminal' }, { img: 'termometro-diagnostico' }],
  [{ img: 'termometro-hero' }, { img: 'nistrack-movil', tall: true }, { img: 'keptai-login' }, { code: 'python' }],
]

function WallTile({ tile }) {
  const { t } = useLang()
  if (tile.burst) return (
    <div className="flex aspect-square items-center justify-center rounded-xl bg-paper">
      <motion.div initial={{ rotate: -20, scale: 0.6 }} whileInView={{ rotate: -6, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 180, damping: 12 }} className="w-[92%]">
        <Burst className="aspect-square w-full text-rust"><span className="block px-6 text-center font-hand text-[clamp(1.4rem,3.2vw,3rem)] font-semibold leading-[0.95] text-white">{t.wall.burst[0]}<br />{t.wall.burst[1]}<br />{t.wall.burst[2]}</span></Burst>
      </motion.div>
    </div>
  )
  if (tile.text) return (
    <div className="rounded-xl bg-paper p-5 sm:p-7">
      <svg aria-hidden="true" viewBox="0 0 30 40" className="mb-2 w-6 text-rust" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 3C10 10 6 22 9 36M3 30l6 7 6-6" /></svg>
      <p className="text-sm font-semibold leading-6 text-ink lg:text-base lg:leading-7"><Rich parts={t.wall.text} /></p>
    </div>
  )
  if (tile.code) return <CodeArt art={tile.code} className="aspect-[4/3] rounded-xl" />
  return <img src={wallImages[tile.img]} alt="" loading="lazy" className={`w-full rounded-xl object-cover object-top shadow-sm ${tile.tall ? 'aspect-[3/5]' : 'aspect-[4/3]'}`} />
}

function WallColumn({ tiles, progress, speed }) {
  const y = useTransform(progress, [0, 1], [speed, -speed])
  return <motion.div style={{ y }} className="flex flex-col gap-2 sm:gap-3">{tiles.map((tile, i) => <WallTile key={i} tile={tile} />)}</motion.div>
}

function ExperimentWall() {
  const { t } = useLang()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const speeds = reduce ? [0, 0, 0, 0] : [40, 110, 20, 80]
  const mobile = [[...wallColumns[0], ...wallColumns[2]], [...wallColumns[1], ...wallColumns[3]]]
  return (
    <section ref={ref} aria-label={t.works.tabs.lab} className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-16">
      <div className="hidden grid-cols-4 gap-3 px-3 md:grid">{wallColumns.map((tiles, i) => <WallColumn key={i} tiles={tiles} progress={scrollYProgress} speed={speeds[i]} />)}</div>
      <div className="grid grid-cols-2 gap-2 px-2 md:hidden">{mobile.map((tiles, i) => <WallColumn key={i} tiles={tiles} progress={scrollYProgress} speed={reduce ? 0 : i ? 50 : 15} />)}</div>
    </section>
  )
}

function Closing() {
  const { t } = useLang()
  return (
    <section aria-labelledby="closing-title" className="mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
      <p className="hand -rotate-2 text-xl">{t.closing.note}</p>
      <h2 id="closing-title" className="display mt-1 text-4xl leading-[1.05] sm:text-6xl">{t.closing.title}</h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${contact.email}`} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-rust px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"><Mail size={16} aria-hidden="true" />{t.closing.write}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-900/15 bg-white px-6 text-sm font-medium transition-colors hover:border-zinc-900/40">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <p className="hand mt-6 flex items-center justify-center gap-1.5 text-lg"><MapPin size={16} aria-hidden="true" />{t.closing.location} · {contact.email}</p>
    </section>
  )
}

export default function Home() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [frameRefs] = useState(() => projects.map(() => createRef()))
  return (
    <>
      <Intro />
      {!reduce && createPortal(<div aria-hidden="true">{projects.map((project, i) => <FlyingCard key={project.key} project={project} index={i} total={projects.length} target={frameRefs[i]} />)}</div>, document.body)}
      <section id="proyectos" aria-label={t.dock.works} className={`relative z-10 mx-auto max-w-5xl space-y-24 px-5 pb-10 pt-4 sm:space-y-32 ${reduce ? '' : 'md:-mt-[30vh]'}`}>
        {projects.map((project, i) => <ProjectRow key={project.key} project={project} index={i} frameRef={frameRefs[i]} />)}
        <p className="hand text-center text-xl">{t.projects.more}</p>
      </section>
      <StoryCurve />
      <ExperimentWall />
      <Closing />
    </>
  )
}
