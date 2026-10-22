import { ArrowRight, ArrowUpRight, Download, FileText, GitBranch, LayoutDashboard, Network, Scale, Server } from 'lucide-react'
import { palettes, projectImages, usePalette } from '../lib.js'
import { Button, Card, Reveal, Section, SectionLabel, Stat, Tag, Terminal, Timeline } from '../components/Ui.jsx'

// Página de muestra del sistema visual v2 (/diseno): sirve para elegir la paleta antes de maquetar el sitio.
// Se elimina en la fase de limpieza.

const nav = ['Sobre mí', 'Especialidades', 'Experiencia', 'Proyectos', 'Formación']

const terminal = [
  { cmd: 'whoami' },
  { out: 'miguel-yamunaque · full-stack developer jr.' },
  { cmd: 'cat stack.txt' },
  { key: 'backend', value: 'Laravel · PHP · Spring Boot · Java' },
  { key: 'frontend', value: 'React · Next.js · TypeScript' },
  { key: 'data', value: 'MySQL · PostgreSQL' },
  { key: 'quality', value: 'PHPUnit · Vitest · PHPStan' },
  { key: 'infra', value: 'Docker · Linux VPS · Git' },
  { cmd: 'pwd' },
  { out: '/piura/peru' },
]

const stats = [
  { value: '2', label: 'productos en producción en Cloud Technologies' },
  { value: '7', label: 'tipos de reportes PDF de auditoría' },
  { value: '48 h', label: 'de cero a demo con KeptAI' },
  { value: '9', label: 'certificados (Cisco, UTP, GDG)' },
]

const skills = [
  { icon: Server, title: 'Backend y APIs REST', text: 'APIs en Laravel y Spring Boot con validación, autenticación con Sanctum o JWT y guardado inmediato para no perder datos.' },
  { icon: Network, title: 'Multi-tenant y seguridad', text: 'Aislamiento de datos por empresa con scopes y Policies, permisos por módulo, roles y 2FA.' },
  { icon: Scale, title: 'Cumplimiento normativo', text: 'Motores de evaluación y madurez sobre NIST CSF 2.0, NIST SP 800-34 e ISO/IEC 27001.' },
  { icon: FileText, title: 'Reportes y datos', text: 'Reportes PDF generados en el servidor con gráficos y modelado relacional en MySQL y PostgreSQL.' },
  { icon: LayoutDashboard, title: 'Front-end', text: 'SPAs en React, Next.js y TypeScript con Tailwind y shadcn/ui, con estado persistente entre sesiones.' },
  { icon: GitBranch, title: 'Calidad y despliegue', text: 'PHPUnit, Vitest y PHPStan; Git flow con pull requests; Docker, VPS Linux y CI con GitHub Actions.' },
]

function PaletteSwitcher({ palette, setPalette }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-surface/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur" role="radiogroup" aria-label="Paleta de colores">
      {palettes.map(p => (
        <button key={p.key} type="button" role="radio" aria-checked={palette === p.key} title={p.name} onClick={() => setPalette(p.key)}
          className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${palette === p.key ? 'bg-surface-2 text-fg ring-1 ring-accent' : 'text-muted hover:text-fg'}`}>
          <span className="size-3 rounded-full" style={{ background: p.swatch }} />{p.key.toUpperCase()}<span className="hidden sm:inline"> · {p.name}</span>
        </button>
      ))}
    </div>
  )
}

export default function Design() {
  const [palette, setPalette] = usePalette()

  return (
    <div className="v2 min-h-screen pb-28">
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
          <a href="#inicio" className="text-sm font-bold tracking-tight text-fg">Miguel Yamunaqué<span className="text-accent">.</span></a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-6 text-sm text-muted lg:flex">
            {nav.map(item => <a key={item} href="#inicio" className="transition hover:text-fg">{item}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" className="font-mono text-xs text-muted transition hover:text-fg">ES / EN</button>
            <a href="#contacto" className="rounded-lg border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-ink">Contacto</a>
          </div>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <SectionLabel index="01">sobre mí</SectionLabel>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-fg sm:text-6xl">Miguel Yamunaqué Villegas</h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-accent sm:text-sm">Desarrollador Full-Stack Jr. · Backend y plataformas SaaS</p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>Soy desarrollador full-stack y estudiante de último año de Ingeniería de Sistemas e Informática. Trabajo en <b className="font-semibold text-fg">Cloud Technologies</b>, donde desarrollo <b className="font-semibold text-fg">NISTRACK</b>, una plataforma SaaS multi-tenant de gobierno, riesgo y cumplimiento.</p>
            <p>Mi fuerte es el backend: <b className="font-semibold text-fg">APIs RESTful en Laravel</b> con aislamiento estricto de datos entre empresas y <b className="font-semibold text-fg">reportes PDF de auditoría</b> generados en el servidor.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#proyectos" icon={ArrowRight}>Ver proyectos</Button>
            <Button href="/cv/Miguel-Yamunaque-CV.pdf" variant="secondary" icon={Download} download>Descargar CV</Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}><Terminal title="~/miguel" lines={terminal} /></Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="grid grid-cols-2 gap-8 border-y border-line py-10 lg:grid-cols-4">
          {stats.map(s => <Stat key={s.label} {...s} />)}
        </Reveal>
      </div>

      <Section id="especialidades" index="02" label="especialidades" title="Especialidades técnicas" subtitle="Lo que sé hacer y puedo demostrar con proyectos reales.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <Card className="h-full">
                <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent"><Icon size={20} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-semibold text-fg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="experiencia" index="03" label="experiencia" title="Experiencia profesional">
        <Reveal>
          <Timeline items={[{
            role: 'Desarrollador Full-Stack', org: 'Cloud Technologies E.I.R.L.', place: 'Piura, Perú', period: 'mar. 2026 — actualidad', current: true,
            children: <>
              <ul className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                <li><b className="font-semibold text-fg">Evaluación de cumplimiento:</b> lógica que evalúa NIST CSF 2.0 y la cruza con el Anexo A de ISO/IEC 27001:2022.</li>
                <li><b className="font-semibold text-fg">Motor de reportes PDF:</b> 7 reportes de auditoría con gráficos convertidos en imágenes desde el servidor.</li>
                <li><b className="font-semibold text-fg">Aislamiento multi-tenant:</b> filtros por empresa y remediación de seguridad con tests primero.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">{['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'PHPUnit'].map(t => <Tag key={t}>{t}</Tag>)}</div>
            </>,
          }]} />
        </Reveal>
      </Section>

      <Section id="proyectos" index="04" label="proyectos" title="Proyectos destacados" subtitle="Productos en producción y proyectos con código abierto. Cada uno tiene su caso técnico.">
        <Reveal>
          <article className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-accent/40 lg:grid-cols-2">
            <div className="overflow-hidden border-b border-line bg-surface-2 lg:border-b-0 lg:border-r">
              <img src={projectImages.nistrack} alt="Captura de NISTRACK" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="font-mono text-xs text-muted">Cloud Technologies · 2026</p>
              <h3 className="mt-2 text-2xl font-bold text-fg">NISTRACK</h3>
              <p className="mt-3 leading-relaxed text-muted">Plataforma SaaS multi-tenant que mide la postura de ciberseguridad de las empresas frente a NIST CSF 2.0 e ISO 27001.</p>
              <div className="mt-5 flex flex-wrap gap-2">{['Laravel', 'React', 'TypeScript', 'MySQL'].map(t => <Tag key={t}>{t}</Tag>)}</div>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Button href="#proyectos" icon={ArrowRight}>Ver caso</Button>
                <Button href="https://www.nistrack.com/" variant="secondary" icon={ArrowUpRight} target="_blank" rel="noreferrer">Ver en vivo</Button>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      <PaletteSwitcher palette={palette} setPalette={setPalette} />
    </div>
  )
}
