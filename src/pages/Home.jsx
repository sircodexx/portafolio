import { ArrowRight, Award, Building2, Code2, Container, Database, Download, ExternalLink, FileText, FlaskConical, Github, GraduationCap, Languages, Layers, LayoutDashboard, Linkedin, Mail, MapPin, Presentation, Scale, Server, ShieldCheck, Store } from 'lucide-react'
import { siDocker, siGit, siLaravel, siMysql, siNextdotjs, siOpenjdk, siPhp, siPostgresql, siReact, siSpringboot, siTypescript, siVitest } from 'simple-icons'
import { contact, lab, projects, stackMain, stackMore } from '../content.js'
import { external, photo, projectImages, projectPath, useLang } from '../lib.js'
import { Link, Rich } from '../components/Core.jsx'
import { Bullet, Button, Card, IconCircle, Reveal, Section, Tag } from '../components/Ui.jsx'

const icons = {
  server: Server, tenant: ShieldCheck, compliance: Scale, reports: FileText, data: Database, frontend: LayoutDashboard, quality: FlaskConical, deploy: Container,
  company: Building2, store: Store, award: Award, shield: ShieldCheck, code: Code2, teach: Presentation, language: Languages, degree: GraduationCap, layers: Layers,
}
const brandIcons = { Laravel: siLaravel, PHP: siPhp, 'Spring Boot': siSpringboot, Java: siOpenjdk, React: siReact, 'Next.js': siNextdotjs, TypeScript: siTypescript, MySQL: siMysql, PostgreSQL: siPostgresql, Docker: siDocker, Git: siGit, Vitest: siVitest }

function Hero() {
  const { t } = useLang()
  const h = t.hero
  return (
    <section id="sobre-mi" className="mx-auto grid max-w-7xl scroll-mt-20 grid-cols-1 items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[340px_1fr] lg:gap-16 lg:py-16">
      <Reveal className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px]">
        <span className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-accent" aria-hidden="true" />
        <img src={photo} alt={h.photoAlt} width="320" height="320" fetchPriority="high" className="relative aspect-square w-full rounded-2xl border-2 border-accent-2/60 object-cover object-top" />
        <span className="absolute -left-4 -top-4 size-10 rounded-full bg-accent-2" aria-hidden="true" />
        <span className="absolute -bottom-6 -left-5 size-6 rounded-full bg-accent" aria-hidden="true" />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-[2.5rem] font-extrabold leading-tight tracking-tight text-fg sm:text-6xl">{h.first} <span className="text-accent">{h.last}</span></h1>
        <p className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">
          <span className="h-px w-8 shrink-0 bg-accent-2 sm:w-10" aria-hidden="true" />{h.role}<span className="h-px w-8 shrink-0 bg-accent-2 sm:w-10" aria-hidden="true" />
        </p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted sm:text-[17px]">
          {h.bio.map((parts, i) => <p key={i}><Rich parts={parts} /></p>)}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href="#proyectos">{h.ctaProjects}</Button>
          <Button href="#contacto" variant="outline">{h.ctaContact}</Button>
        </div>
      </Reveal>
    </section>
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
    <Section id="especialidades" label={s.label} title={s.title} subtitle={s.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {s.items.map(({ icon, title, text }, i) => (
          <Reveal key={title} delay={(i % 4) * 0.05}>
            <Card className="flex h-full flex-col items-center p-6 text-center transition hover:border-accent/50">
              <IconCircle icon={icons[icon]} />
              <h3 className="mt-5 text-lg font-bold text-fg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-14 max-w-4xl space-y-8 text-center">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{s.main}</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {stackMain.map(name => (
              <li key={name} className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-fg"><span className="text-accent"><BrandIcon name={name} /></span>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{s.more}</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">{stackMore.map(name => <li key={name}><Tag>{name}</Tag></li>)}</ul>
        </div>
      </Reveal>
    </Section>
  )
}

function Experience() {
  const { t } = useLang()
  const e = t.experience
  return (
    <Section id="experiencia" label={e.label} title={e.title} subtitle={e.subtitle}>
      <div className="mx-auto max-w-3xl space-y-6">
        {e.jobs.map(job => (
          <Reveal key={job.org}>
            <Card className="p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <IconCircle icon={icons[job.icon]} tone="accent" />
                <div className="min-w-0">
                  <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold text-fg">{job.org}{job.badge && <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">{job.badge}</span>}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm"><span className="font-medium text-accent-2">{job.role}</span><span className="text-muted" aria-hidden="true">•</span><span className="text-muted">{job.period} · {job.place}</span></p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted"><Rich parts={job.intro} /></p>
              {job.points.length > 0 && (
                <ul className="mt-4 space-y-3 leading-relaxed text-muted">
                  {job.points.map(p => <li key={p.b} className="flex gap-3"><Bullet /><span><b className="font-semibold text-fg">{p.b}:</b> {p.t}</span></li>)}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-2">{job.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ project }) {
  const { t, pick } = useLang()
  const p = t.projects
  const item = p.items[project.key]
  const name = pick(project.name)
  const link = project.live ?? project.code
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition hover:border-accent/50">
      <div className="h-48 overflow-hidden bg-surface-2">
        <img src={projectImages[project.image]} alt={`${p.shot} ${name}`} width="1280" height="800" loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug text-fg">
            <Link to={projectPath(project.key)} className="after:absolute after:inset-0 hover:text-accent">{name}</Link>
          </h3>
          <a href={link} {...external(link)} aria-label={`${p.cta[project.live ? item.liveCta ?? 'live' : 'code']}: ${name} (${p.newTab})`} className="relative z-10 mt-1 shrink-0 text-accent-2 transition hover:text-accent">
            {project.live ? <ExternalLink size={18} aria-hidden="true" /> : <Github size={18} aria-hidden="true" />}
          </a>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">{project.tags.map(tag => <Tag key={tag}>{pick(tag)}</Tag>)}</div>
      </div>
    </article>
  )
}

function LabCard({ item }) {
  const { t, pick } = useLang()
  const text = t.lab.items[item.key]
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <pre className="flex h-48 items-center overflow-x-auto bg-surface-2 px-6 font-mono text-[13px] leading-relaxed text-muted">{item.code.join('\n')}</pre>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">{t.projects.lab} · {text.area}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-fg">{text.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{text.text}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">{item.tags.map(tag => <Tag key={tag}>{pick(tag)}</Tag>)}</div>
      </div>
    </article>
  )
}

function Projects() {
  const { t } = useLang()
  const p = t.projects
  return (
    <Section id="proyectos" label={p.label} title={p.title} subtitle={p.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => <Reveal key={project.key} delay={(i % 3) * 0.05}><ProjectCard project={project} /></Reveal>)}
        {lab.map((item, i) => <Reveal key={item.key} delay={((i + projects.length) % 3) * 0.05}><LabCard item={item} /></Reveal>)}
      </div>
    </Section>
  )
}

function Education() {
  const { t } = useLang()
  const e = t.education
  return (
    <Section id="formacion" label={e.label} title={e.title} subtitle={e.subtitle}>
      <div className="mx-auto max-w-4xl space-y-12">
        {e.years.map(group => (
          <Reveal key={group.year}>
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-semibold tracking-[0.2em] text-accent-2">{group.year}</h3>
              <span className="h-px flex-1 bg-linear-to-r from-accent-2/40 to-transparent" aria-hidden="true" />
            </div>
            <ol className="relative mt-6 space-y-6 pl-10 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-accent-2/30">
              {group.items.map(item => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-10 top-7 size-4 rounded-full border-2 border-accent-2 bg-bg" aria-hidden="true" />
                  <Card className="flex overflow-hidden">
                    <div className="hidden w-44 shrink-0 place-items-center bg-surface-2 sm:grid"><IconCircle icon={icons[item.icon]} size="lg" tone="accent" /></div>
                    <div className="min-w-0 flex-1 p-6">
                      <p className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted">
                        {item.date}
                        <span className="rounded-full border border-accent-2/40 bg-accent-2/10 px-2.5 py-0.5 font-semibold text-accent-2">{item.badge}</span>
                      </p>
                      <h4 className="mt-3 text-lg font-bold text-fg">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted">{item.sub}</p>
                      {item.text && <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>}
                      {item.points && <ul className="mt-3 space-y-2 text-sm text-muted">{item.points.map(point => <li key={point} className="flex gap-3"><Bullet />{point}</li>)}</ul>}
                      {item.tags && <div className="mt-4 flex flex-wrap gap-2">{item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>}
                      {item.project && <Link to={projectPath(item.project)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">{e.viewProject}<ArrowRight size={16} aria-hidden="true" /></Link>}
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const { t } = useLang()
  const c = t.contact
  const rows = [
    { key: 'email', icon: Mail, value: contact.email, href: `mailto:${contact.email}`, trail: ArrowRight },
    { key: 'linkedin', icon: Linkedin, value: 'linkedin.com/in/miguel-yamunaque-villegas', href: contact.linkedin, trail: ExternalLink },
    { key: 'github', icon: Github, value: 'github.com/sircodexx', href: contact.github, trail: ExternalLink },
    { key: 'cvFile', icon: FileText, value: 'Miguel-Yamunaque-CV.pdf', href: contact.cv, trail: Download, download: true },
    { key: 'location', icon: MapPin, value: c.location },
  ]
  return (
    <Section id="contacto" label={c.label} title={c.title} subtitle={c.text}>
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full p-7 sm:p-10">
            <h3 className="text-2xl font-bold text-fg">{c.offerTitle}</h3>
            <ul className="mt-8 space-y-7">
              {c.offers.map(offer => (
                <li key={offer.title} className="flex gap-4">
                  <IconCircle icon={icons[offer.icon]} size="sm" tone="accent" />
                  <div><p className="text-lg font-semibold text-fg">{offer.title}</p><p className="mt-1 leading-relaxed text-muted">{offer.text}</p></div>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={0.05}>
          <Card className="h-full p-7 sm:p-10">
            <h3 className="text-2xl font-bold text-fg">{c.infoTitle}</h3>
            <ul className="mt-6 space-y-1">
              {rows.map(({ key, icon: Icon, value, href, trail: Trail, download }) => {
                const body = <>
                  <IconCircle icon={Icon} size="sm" tone="accent-2" />
                  <span className="min-w-0 flex-1"><span className="block font-semibold text-fg">{c.links[key]}</span><span className="block truncate text-sm text-muted">{value}</span></span>
                  {Trail && <Trail size={18} className="shrink-0 text-accent-2" aria-hidden="true" />}
                </>
                return (
                  <li key={key}>
                    {href
                      ? <a href={href} {...(download ? { download: true } : external(href))} className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-surface-2">{body}</a>
                      : <div className="flex items-center gap-4 p-3">{body}</div>}
                  </li>
                )
              })}
            </ul>
          </Card>
        </Reveal>
      </div>
      <Reveal className="mt-14 text-center">
        <p className="text-fg/90 sm:text-lg">{c.closing}</p>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${contact.email}`} variant="gradient" icon={Mail} className="sm:min-w-64">{c.write}</Button>
          <Button href={contact.cv} variant="outline" icon={Download} download className="sm:min-w-52">{c.links.cv}</Button>
        </div>
      </Reveal>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}
