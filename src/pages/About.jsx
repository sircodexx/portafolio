import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Award, Download, ExternalLink, GraduationCap, Sparkles, Trophy } from 'lucide-react'
import { siDocker, siGithub, siLaravel, siNextdotjs, siPostgresql, siReact, siSpringboot, siTypescript } from 'simple-icons'
import { contact, skills } from '../content.js'
import { aboutImages, useLang } from '../lib.js'
import { Rich } from '../components/Core.jsx'
import { BrandIcon, SparkStar } from '../components/Decor.jsx'

// Iconos flotantes alrededor de la foto: posición en % del contenedor.
const floating = [
  { icon: siSpringboot, pos: 'left-[46%] -top-8' },
  { icon: siReact, pos: '-left-6 top-[10%]' },
  { icon: siLaravel, pos: '-right-7 top-[38%]' },
  { icon: siDocker, pos: '-left-8 top-[66%]', hint: true },
  { icon: siPostgresql, pos: 'right-[8%] -bottom-6' },
  { icon: siGithub, pos: '-right-5 -top-4' },
  { icon: siNextdotjs, pos: 'left-[12%] -bottom-10' },
  { icon: siTypescript, pos: '-right-10 top-[80%]' },
]
const itemIcons = {
  burst: <SparkStar className="w-5 text-rust" />,
  spark: <Sparkles size={20} aria-hidden="true" className="text-rust" />,
  trophy: <Trophy size={20} aria-hidden="true" className="text-rust" />,
}

function FloatingIcon({ icon, pos, hint, bounds, index }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  return (
    <motion.div drag dragConstraints={bounds} dragSnapToOrigin dragElastic={0.4} whileDrag={{ scale: 1.15, rotate: 8 }} whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0.5 }} animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -7, 0] }}
      transition={{ opacity: { delay: 0.3 + index * 0.06 }, scale: { delay: 0.3 + index * 0.06, type: 'spring' }, y: { duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 } }}
      className={`absolute z-20 hidden cursor-grab touch-none active:cursor-grabbing sm:block ${pos}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-900/5 bg-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.3)]"><BrandIcon icon={icon} className="h-6 w-6" /></span>
      {hint && <span className="hand absolute -bottom-7 left-2 -rotate-6 whitespace-nowrap text-base">↖ {t.about.dragHint}</span>}
    </motion.div>
  )
}

function Polaroid() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  return (
    <div className="flex flex-col items-center">
      <motion.figure initial={{ rotate: -8, y: 30, opacity: 0 }} animate={{ rotate: -3, y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }} whileHover={{ rotate: 0 }} className="w-[min(78vw,20rem)] rounded-md bg-white p-3 pb-0 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#f1f0ec]">
          {aboutImages.length
            ? <img src={aboutImages[current]} alt="Miguel Yamunaqué" className="h-full w-full object-cover" />
            : <div className="flex h-full flex-col items-center justify-center gap-2"><span className="display text-7xl text-rust">MY</span><span className="hand text-lg">({t.about.photoHint})</span></div>}
        </div>
        <figcaption className="hand py-3 text-center text-xl text-zinc-600">{t.about.caption}</figcaption>
      </motion.figure>
      {aboutImages.length > 1 && (
        <div className="mt-5 flex gap-2">{aboutImages.map((src, i) => (
          <button key={src} type="button" onClick={() => setCurrent(i)} aria-label={`${i + 1}`} aria-pressed={current === i} className={`h-12 w-12 overflow-hidden rounded-lg border-2 bg-white transition-colors ${current === i ? 'border-rust' : 'border-transparent'}`}><img src={src} alt="" className="h-full w-full object-cover" /></button>
        ))}</div>
      )}
    </div>
  )
}

const rise = i => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 + i * 0.08, duration: 0.5 } })

export default function About() {
  const { t, pick } = useLang()
  const bounds = useRef(null)
  return (
    <div className="mx-auto max-w-6xl px-5 pb-40 pt-28 sm:pt-32">
      <section ref={bounds} aria-labelledby="about-title" className="relative grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="relative mx-auto w-fit">
          {floating.map((f, i) => <FloatingIcon key={f.icon.slug} {...f} bounds={bounds} index={i} />)}
          <Polaroid />
        </div>
        <div>
          <motion.p {...rise(0)} className="hand text-xl">{t.about.note}</motion.p>
          <motion.h1 {...rise(1)} id="about-title" className="display text-4xl leading-[1.05] sm:text-[2.7rem]">{t.about.title}</motion.h1>
          <motion.p {...rise(2)} className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg"><Rich parts={t.about.intro} /></motion.p>
          <ul className="mt-8 space-y-7">{t.about.items.map((item, i) => (
            <motion.li key={item.title} {...rise(3 + i)} className="flex gap-4">
              <span className="mt-1 shrink-0">{itemIcons[item.icon]}</span>
              <div><h2 className="font-bold text-ink">{item.title}</h2><p className="mt-1 text-[15px] leading-7 text-zinc-500">{item.text}</p></div>
            </motion.li>
          ))}</ul>
        </div>
      </section>

      <section aria-labelledby="experience-title" className="mt-32 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div><p className="hand text-xl">{t.about.note}</p><h2 id="experience-title" className="display text-3xl sm:text-4xl">{t.about.experienceTitle}</h2></div>
        <ol className="relative space-y-12 border-l-2 border-dashed border-zinc-900/15 pl-7">{t.about.jobs.map(job => (
          <motion.li key={job.company} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="relative">
            <span aria-hidden="true" className={`absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-4 border-paper ${job.current ? 'bg-rust' : 'bg-zinc-300'}`} />
            <p className="hand text-lg">{job.period} · {job.place}</p>
            <h3 className="text-xl font-bold tracking-tight text-ink">{job.role}</h3>
            <p className="mt-0.5 flex items-center gap-2 text-sm font-medium text-rust">{job.company}{job.current && <span className="rounded-full bg-leaf px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">{t.about.current}</span>}</p>
            <ul className="mt-3 space-y-2.5">{job.points.map((point, i) => <li key={i} className="flex gap-3 text-[15px] leading-7 text-zinc-600"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" /><span><Rich parts={point} /></span></li>)}</ul>
          </motion.li>
        ))}</ol>
      </section>

      <section aria-labelledby="education-title" className="mt-28 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div><p className="hand text-xl">UTP</p><h2 id="education-title" className="display text-3xl sm:text-4xl">{t.about.educationTitle}</h2></div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-rust shadow-sm"><GraduationCap size={22} aria-hidden="true" /></span>
          <div>
            <p className="hand text-lg">{t.about.education.period} · {t.about.education.place}</p>
            <h3 className="text-xl font-bold tracking-tight text-ink">{t.about.education.degree}</h3>
            <p className="text-sm font-medium text-rust">{t.about.education.school}</p>
            <ul className="mt-3 flex flex-wrap gap-2">{t.about.education.points.map(point => <li key={point} className="rounded-full bg-zinc-900/[0.06] px-3 py-1 text-sm text-ink">{point}</li>)}</ul>
          </div>
        </motion.div>
      </section>

      <section aria-labelledby="skills-title" className="mt-28 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div><p className="hand text-xl">stack</p><h2 id="skills-title" className="display text-3xl sm:text-4xl">{t.about.skillsTitle}</h2></div>
        <div className="grid gap-8 sm:grid-cols-2">{skills.map(group => (
          <div key={group.key}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-500">{t.about.groups[group.key]}</h3>
            <ul className="flex flex-wrap gap-2">{group.items.map(item => <li key={item} className="rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-sm text-ink transition-colors hover:border-rust hover:text-rust">{pick(item)}</li>)}</ul>
          </div>
        ))}</div>
      </section>

      <section aria-labelledby="certs-title" className="mt-28 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div><p className="hand text-xl">2024 — 2026</p><h2 id="certs-title" className="display text-3xl sm:text-4xl">{t.about.certsTitle}</h2></div>
        <ul className="grid gap-3 sm:grid-cols-2">{t.about.certs.map((cert, i) => (
          <motion.li key={cert.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 4) * 0.05 }} className={`flex items-start gap-3 rounded-2xl border p-4 ${cert.highlight ? 'border-rust/30 bg-white sm:col-span-2' : 'border-zinc-900/10 bg-white/70'}`}>
            <span className={`mt-0.5 shrink-0 ${cert.highlight ? 'text-rust' : 'text-zinc-400'}`}>{cert.highlight ? <Trophy size={18} aria-hidden="true" /> : <Award size={18} aria-hidden="true" />}</span>
            <div><p className="text-[15px] font-semibold leading-6 text-ink">{cert.title}</p><p className="hand text-base">{cert.org} · {cert.year}</p></div>
          </motion.li>
        ))}</ul>
      </section>

      <section aria-labelledby="cv-title" className="mt-28">
        <motion.a href={contact.cv} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30, rotate: -1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="group relative mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-zinc-900/10 bg-white p-8 text-center shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)] ring-2 ring-transparent transition-shadow hover:ring-rust sm:flex-row sm:p-10 sm:text-left">
          <span className="relative flex h-24 w-20 shrink-0 -rotate-6 flex-col justify-between rounded-lg border border-zinc-900/10 bg-paper p-3 shadow-sm transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
            <span className="h-1.5 w-10 rounded-full bg-rust" /><span className="space-y-1"><span className="block h-1 w-full rounded-full bg-zinc-300" /><span className="block h-1 w-4/5 rounded-full bg-zinc-300" /><span className="block h-1 w-full rounded-full bg-zinc-300" /><span className="block h-1 w-3/5 rounded-full bg-zinc-300" /></span>
            <span className="absolute -bottom-2 -right-3 rounded bg-rust px-1.5 py-0.5 text-[10px] font-bold text-white">PDF</span>
          </span>
          <div className="flex-1">
            <p className="hand text-lg">{t.about.cv.note}</p>
            <h2 id="cv-title" className="display text-3xl transition-colors group-hover:text-rust sm:text-4xl">{t.about.cv.title}</h2>
            <p className="mt-1 text-[15px] text-zinc-500">{t.about.cv.text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2">
            <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white transition-colors group-hover:bg-rust">{t.about.cv.open}<ExternalLink size={14} aria-hidden="true" /></span>
          </div>
        </motion.a>
        <p className="mt-4 text-center"><a href={contact.cv} download className="hand inline-flex items-center gap-1.5 text-lg underline decoration-dotted underline-offset-4 transition-colors hover:text-rust"><Download size={16} aria-hidden="true" />{t.about.cv.download}</a></p>
      </section>
    </div>
  )
}
