import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Award, Code2, Download, FileText, GitBranch, Github, GraduationCap, LayoutDashboard, Linkedin, Mail, MapPin, Network, Scale, Server } from 'lucide-react'
import { siDocker, siGit, siLaravel, siMysql, siNextdotjs, siOpenjdk, siPhp, siPostgresql, siReact, siSpringboot, siTypescript, siVitest } from 'simple-icons'
import { contact, lab, projectFilters, projects, stackMain, stackMore } from '../content.js'
import { avatar, external, projectImages, projectPath, useLang } from '../lib.js'
import { Rich } from '../components/Core.jsx'
import { Button, Card, Reveal, Section, SectionLabel, Stat, Tag, Terminal, Timeline } from '../components/Ui.jsx'

const skillIcons = { server: Server, tenant: Network, compliance: Scale, reports: FileText, frontend: LayoutDashboard, quality: GitBranch }
const brandIcons = { Laravel: siLaravel, PHP: siPhp, 'Spring Boot': siSpringboot, Java: siOpenjdk, React: siReact, 'Next.js': siNextdotjs, TypeScript: siTypescript, MySQL: siMysql, PostgreSQL: siPostgresql, Docker: siDocker, Git: siGit, Vitest: siVitest }

function Hero() {
  const { t } = useLang()
  const h = t.hero
  return (
    <section id="sobre-mi" className="mx-auto grid max-w-6xl scroll-mt-24 grid-cols-1 items-start gap-12 px-5 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr]">
      <Reveal>
        <div className="flex items-center gap-4">
          <img src={avatar} alt={h.photoAlt} width="56" height="56" className="size-14 rounded-xl border border-line object-cover object-top" />
          <SectionLabel index="01">{h.label}</SectionLabel>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-fg sm:text-6xl">{h.name}</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-accent sm:text-sm">{h.role}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {h.bio.map((parts, i) => <p key={i}><Rich parts={parts} /></p>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#proyectos" icon={ArrowRight}>{h.ctaProjects}</Button>
          <Button href={contact.cv} variant="secondary" icon={Download} download>{h.ctaCv}</Button>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="lg:mt-24"><Terminal title="~/miguel" lines={h.terminal} /></Reveal>
    </section>
  )
}

function Stats() {
  const { t } = useLang()
  return (
    <div className="mx-auto max-w-6xl px-5">
      <Reveal className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-10 lg:grid-cols-4">
        {t.stats.map(s => <Stat key={s.label} {...s} />)}
      </Reveal>
    </div>
  )
}

function BrandIcon({ name }) {
  const icon = brandIcons[name]
  if (!icon) return null
  return <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d={icon.path} /></svg>
}

function Skills() {
  const { t } = useLang()
  const s = t.skills
  return (
    <Section id="especialidades" index="02" label={s.label} title={s.title} subtitle={s.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map(({ icon, title, text }, i) => {
          const Icon = skillIcons[icon]
          return (
            <Reveal key={title} delay={(i % 3) * 0.05}>
              <Card className="h-full">
                <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent"><Icon size={20} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-semibold text-fg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
      <Reveal className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{s.main}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stackMain.map(name => (
              <li key={name} className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-fg"><span className="text-muted"><BrandIcon name={name} /></span>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{s.more}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stackMore.map(name => <li key={name}><Tag>{name}</Tag></li>)}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

function Experience() {
  const { t } = useLang()
  const e = t.experience
  return (
    <Section id="experiencia" index="03" label={e.label} title={e.title}>
      <Reveal>
        <Timeline items={e.jobs.map(job => ({
          ...job,
          children: <>
            <p className="max-w-3xl text-muted"><Rich parts={job.intro} /></p>
            <ul className="mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {job.points.map(p => (
                <li key={p.b} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-accent/70">
                  <b className="font-semibold text-fg">{p.b}:</b> {p.t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">{job.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>
          </>,
        }))} />
      </Reveal>
      <Reveal className="mt-14 max-w-3xl">
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{e.otherTitle}</h3>
        <div className="mt-4 rounded-xl border border-line bg-surface/60 p-5">
          <p className="font-semibold text-fg">{e.other.role} <span className="text-muted">·</span> {e.other.org}</p>
          <p className="mt-1 font-mono text-xs text-muted">{e.other.period} · {e.other.place}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{e.other.text}</p>
        </div>
      </Reveal>
    </Section>
  )
}

function ProjectCard({ project, index }) {
  const { t, pick } = useLang()
  const p = t.projects
  const item = p.items[project.key]
  const name = pick(project.name)
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-accent/40 lg:grid-cols-2">
      <div className={`overflow-hidden border-b border-line bg-surface-2 lg:border-b-0 ${index % 2 ? 'lg:order-2 lg:border-l' : 'lg:border-r'}`}>
        <img src={projectImages[project.image]} alt={`${p.shot} ${name}`} width="1280" height="800" loading="lazy" className="aspect-[16/10] h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="font-mono text-xs text-muted">{item.org} · {project.year}</p>
        <h3 className="mt-2 text-2xl font-bold text-fg">{name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <Tag key={tag}>{pick(tag)}</Tag>)}</div>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Button to={projectPath(project.key)} icon={ArrowRight}>{p.cta.case}</Button>
          {project.live && <Button href={project.live} variant="secondary" icon={ArrowUpRight} {...external(project.live)} aria-label={`${p.cta[item.liveCta ?? 'live']}: ${name} (${p.newTab})`}>{p.cta[item.liveCta ?? 'live']}</Button>}
          {project.code && <Button href={project.code} variant="secondary" icon={Github} {...external(project.code)} aria-label={`${p.cta.code}: ${name} (${p.newTab})`}>{p.cta.code}</Button>}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const { t } = useLang()
  const p = t.projects
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter(project => project.filters.includes(filter))
  return (
    <Section id="proyectos" index="04" label={p.label} title={p.title} subtitle={p.subtitle}>
      <div role="group" aria-label={p.filtersLabel} className="-mt-4 mb-8 flex flex-wrap gap-2">
        {projectFilters.map(key => (
          <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === key ? 'border-accent bg-accent/10 text-accent' : 'border-line text-muted hover:text-fg'}`}>
            {p.filters[key]}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {shown.map((project, i) => <Reveal key={project.key}><ProjectCard project={project} index={i} /></Reveal>)}
      </div>
    </Section>
  )
}

function Lab() {
  const { t, pick } = useLang()
  const l = t.lab
  return (
    <Section id="laboratorio" index="05" label={l.label} title={l.title} subtitle={l.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {lab.map((item, i) => {
          const text = l.items[item.key]
          return (
            <Reveal key={item.key} delay={i * 0.05}>
              <Card className="flex h-full flex-col p-0">
                <pre className="overflow-x-auto rounded-t-xl border-b border-line bg-surface-2 p-4 font-mono text-xs leading-relaxed text-muted">{item.code.join('\n')}</pre>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-accent">{text.area}</p>
                  <h3 className="mt-2 text-lg font-semibold text-fg">{text.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text.text}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">{item.tags.map(tag => <Tag key={tag}>{pick(tag)}</Tag>)}</div>
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function Education() {
  const { t } = useLang()
  const e = t.education
  return (
    <Section id="formacion" index="06" label={e.label} title={e.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent"><GraduationCap size={20} aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-semibold text-fg">{e.degree.title}</h3>
            <p className="mt-1 text-accent">{e.degree.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{e.degree.place} · {e.degree.period}</p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {e.degree.points.map(point => <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-accent/70">{point}</li>)}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{e.certsTitle}</h3>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-accent/50 bg-accent/5 p-4">
            <Award size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <div><p className="font-semibold text-fg">{e.highlight.title}</p><p className="text-sm text-muted">{e.highlight.org} · 2026</p></div>
          </div>
          <div className="mt-4 space-y-4">
            {e.groups.map(group => (
              <div key={group.title} className="rounded-xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold text-fg">{group.title} <span className="font-mono text-xs font-normal text-muted">· {group.org} · {group.year}</span></p>
                <ul className="mt-2 flex flex-wrap gap-2">{group.items.map(item => <li key={item}><Tag>{item}</Tag></li>)}</ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Contact() {
  const { t } = useLang()
  const c = t.contact
  const details = [
    { key: 'email', icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { key: 'linkedin', icon: Linkedin, label: 'linkedin.com/in/miguel-yamunaque-villegas', href: contact.linkedin },
    { key: 'github', icon: Github, label: 'github.com/sircodexx', href: contact.github },
    { key: 'location', icon: MapPin, label: c.location },
  ]
  return (
    <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <Reveal className="grid gap-12 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionLabel index="07">{c.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">{c.title}</h2>
          <p className="mt-4 leading-relaxed text-muted sm:text-lg">{c.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${contact.email}`} icon={Mail}>{c.write}</Button>
            <Button href={contact.cv} variant="secondary" icon={Download} download>{c.links.cv}</Button>
          </div>
          <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">{c.infoTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {details.map(({ key, icon: Icon, label, href }) => (
              <li key={key} className="flex items-center gap-3 text-muted">
                <Icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
                {href ? <a href={href} {...external(href)} className="break-all transition hover:text-fg">{label}</a> : <span>{label}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">{c.offerTitle}</h3>
          <ul className="mt-4 space-y-3">
            {c.offers.map(offer => (
              <li key={offer.title} className="rounded-xl border border-line bg-bg/50 p-5">
                <p className="flex items-center gap-2 font-semibold text-fg"><Code2 size={16} className="text-accent" aria-hidden="true" />{offer.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{offer.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Lab />
      <Education />
      <Contact />
    </>
  )
}
