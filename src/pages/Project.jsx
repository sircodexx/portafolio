import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../content.js'
import { external, projectImages, projectPath, routes, useLang, wallImages } from '../lib.js'
import { Link } from '../components/Core.jsx'
import { Button, Diagram, Reveal, SectionLabel, Tag } from '../components/Ui.jsx'

function Block({ title, children }) {
  return (
    <Reveal as="section" className="border-t border-line pt-8">
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted sm:text-lg">{children}</div>
    </Reveal>
  )
}

function Points({ items, numbered }) {
  const List = numbered ? 'ol' : 'ul'
  return (
    <List className="space-y-4">
      {items.map((item, i) => (
        <li key={item.b} className="flex gap-4">
          <span className="mt-0.5 shrink-0 font-mono text-sm text-accent">{numbered ? String(i + 1).padStart(2, '0') : '—'}</span>
          <p><b className="font-semibold text-fg">{item.b}:</b> {item.t}</p>
        </li>
      ))}
    </List>
  )
}

export default function Project({ projectKey }) {
  const { t, pick } = useLang()
  const index = projects.findIndex(p => p.key === projectKey)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const item = t.projects.items[project.key]
  const data = t.cases[project.key]
  const c = t.caseStudy
  const name = pick(project.name)
  const liveCta = t.projects.cta[item.liveCta ?? 'live']
  const pickNode = node => ({ title: pick(node.title), sub: pick(node.sub) })

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:pt-14">
      <Link to={`${routes.home}#proyectos`} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"><ArrowLeft size={16} aria-hidden="true" />{c.back}</Link>

      <Reveal className="mt-10 max-w-3xl">
        <SectionLabel>{c.label}</SectionLabel>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">{name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">{item.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && <Button href={project.live} icon={ArrowUpRight} {...external(project.live)}>{liveCta}</Button>}
          {project.code && <Button href={project.code} variant="secondary" icon={Github} {...external(project.code)}>{t.projects.cta.code}</Button>}
        </div>
      </Reveal>

      <Reveal className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface-2">
        <img src={projectImages[project.image]} alt={`${t.projects.shot} ${name}`} className="aspect-[16/9] w-full object-cover object-top" />
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-12">
          <Block title={c.sections.context}><p>{data.context}</p></Block>
          <Block title={c.sections.product}>
            {data.product.map(text => <p key={text}>{text}</p>)}
            {data.productList && <Points items={data.productList} />}
          </Block>
          <Block title={c.sections.role}><p>{data.roleText}</p></Block>
          <Block title={c.sections.architecture}>
            <p>{data.architecture}</p>
            <div className="pt-2 text-base">
              <Diagram flow={project.diagram.flow.map(pickNode)} extras={project.diagram.extras.map(pickNode)} extrasLabel={c.extras} />
            </div>
          </Block>
          <Block title={c.sections.decisions}><Points items={data.decisions} numbered /></Block>
          {data.quality && <Block title={c.sections.quality}><p>{data.quality}</p></Block>}
          <Block title={c.sections.result}><p className="text-fg">{data.result}</p></Block>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{c.summary}</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div><dt className="text-muted">{c.fields.role}</dt><dd className="mt-1 font-medium text-fg">{data.role}</dd></div>
              <div><dt className="text-muted">{c.fields.org}</dt><dd className="mt-1 font-medium text-fg">{item.org}</dd></div>
              <div><dt className="text-muted">{c.fields.year}</dt><dd className="mt-1 font-medium text-fg">{project.year}</dd></div>
              <div><dt className="text-muted">{c.fields.stack}</dt><dd className="mt-2 flex flex-wrap gap-2">{project.stack.map(tech => <Tag key={tech}>{pick(tech)}</Tag>)}</dd></div>
            </dl>
          </Reveal>
        </aside>
      </div>

      {project.gallery.length > 0 && (
        <Reveal as="section" className="mt-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{c.sections.gallery}</h2>
          <div className="mt-6 gap-4 sm:columns-2">
            {project.gallery.map((key, i) => (
              <a key={key} href={wallImages[key]} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.shot} ${name} ${i + 1} (${c.openImage})`}
                className="mb-4 block break-inside-avoid overflow-hidden rounded-xl border border-line bg-surface-2 transition hover:border-accent/50">
                <img src={wallImages[key]} alt="" loading="lazy" className="w-full" />
              </a>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal className="mt-20">
        <Link to={projectPath(next.key)} className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/50 sm:p-8">
          <span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">{c.next}</span>
            <span className="mt-2 block text-2xl font-bold text-fg">{pick(next.name)}</span>
          </span>
          <ArrowRight size={24} className="shrink-0 text-accent transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </Reveal>
    </article>
  )
}
