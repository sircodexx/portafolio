import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail } from 'lucide-react'

// Datos de contacto.
const contact = { github: 'https://github.com/sircodexx', linkedin: 'https://www.linkedin.com/in/miguel-yamunaque-villegas', email: 'myamunaquevillegas@gmail.com' }
const projects = [
  { title: 'Commerce API', category: 'Backend', description: 'API para gestionar productos, pedidos y usuarios, con autenticación y persistencia de datos.', tags: ['Spring Boot', 'SQL', 'Docker'], preview: '{ api }', color: 'from-lime-300/15', github: '' },
  { title: 'Taskspace', category: 'Frontend', description: 'Aplicación de tareas con filtros por estado para organizar el trabajo diario.', tags: ['React', 'Tailwind CSS', 'Vite'], preview: '<tasks />', color: 'from-sky-300/15', github: '' },
  { title: 'Finance Dashboard', category: 'Full stack', description: 'Panel de ingresos y gastos con resúmenes visuales y consultas a una base de datos relacional.', tags: ['React', 'Spring Boot', 'SQL'], preview: '[ data ]', color: 'from-violet-300/15', github: '' },
  { title: 'Developer Portfolio', category: 'Web', description: 'Portafolio personal centrado en accesibilidad, rendimiento y diseño responsivo.', tags: ['React', 'Tailwind CSS', 'Lucide'], preview: '<hello />', color: 'from-orange-300/15', github: '' },
]
const experience = [
  { role: 'Desarrollador Web Junior', company: 'Empresa de ejemplo A', period: '2025 — 2026', description: 'Desarrollo de interfaces responsivas con React e integración de servicios REST.' },
  { role: 'Practicante de Desarrollo', company: 'Empresa de ejemplo B', period: '2024 — 2025', description: 'Apoyo en funcionalidades backend, consultas SQL y mantenimiento de aplicaciones.' },
  { role: 'Asistente de Tecnología', company: 'Empresa de ejemplo C', period: '2023 — 2024', description: 'Soporte técnico, documentación de procesos y automatización de tareas sencillas.' },
]
const socials = [
  { label: 'GitHub', href: contact.github, icon: Github },
  { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
  { label: 'Email', href: contact.email ? `mailto:${contact.email}` : '', icon: Mail },
]
function ContactLink({ href, label, children }) {
  const style = 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-700'
  return href ? <a href={href} aria-label={label} title={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className={`${style} text-zinc-300 transition-colors hover:border-lime-300 hover:text-lime-300`}>{children}</a> : <span aria-label={`${label}: enlace pendiente`} title={`${label}: enlace pendiente`} className={`${style} text-zinc-500`}>{children}</span>
}
export default function App() {
  return (
    <div className="relative isolate min-h-screen">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.08),transparent_65%)]" />
      <a href="#contenido" className="sr-only z-50 bg-lime-300 p-4 text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Saltar al contenido</a>
      <header className="border-b border-white/10">
        <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <a href="#inicio" aria-label="Miguel Yamunaqué, inicio" className="flex items-center gap-2 font-semibold"><Code2 size={22} className="text-lime-300" aria-hidden="true" />MY<span className="text-lime-300">.</span></a>
          <div className="flex gap-5 text-sm text-zinc-400 sm:gap-8"><a className="hover:text-white" href="#proyectos">Proyectos</a><a className="hover:text-white" href="#experiencia">Experiencia</a><a className="hover:text-white" href="#contacto">Contacto</a></div>
        </nav>
      </header>
      <main id="contenido" className="mx-auto max-w-6xl px-6">
        <section id="inicio" aria-labelledby="hero-title" className="py-20 sm:py-28 lg:py-36">
          <p className="mb-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-lime-300"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-lime-300" />Código, curiosidad y aprendizaje</p>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">Miguel Ángel<span className="block text-zinc-400">Yamunaqué Villegas<span className="text-lime-300">.</span></span></h1>
          <p className="mt-6 text-xl font-medium text-lime-300 sm:text-2xl">Junior Web Developer</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">Me interesa transformar ideas en experiencias web claras y funcionales. Aprendo construyendo con React, Spring Boot y SQL, cuidando los detalles y buscando soluciones simples a problemas reales.</p>
          <div className="mt-9 flex flex-wrap gap-4"><a href="#proyectos" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-lime-300 px-5 text-sm font-semibold text-zinc-950 hover:bg-lime-200">Explorar proyectos<ArrowDown size={17} aria-hidden="true" /></a><a href="#contacto" className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-zinc-700 px-5 text-sm font-medium hover:border-zinc-400">Hablemos<ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </section>
        <section id="proyectos" aria-labelledby="projects-title" className="border-t border-white/10 py-16 sm:py-20">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">01 / Mi trabajo</p><h2 id="projects-title" className="section-title">Proyectos seleccionados</h2></div><p className="text-sm text-zinc-500">04 proyectos de ejemplo</p></div>
          <div className="grid gap-6 md:grid-cols-2">{projects.map((project, index) => (
            <article key={project.title} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition-colors hover:border-zinc-600">
              <div aria-hidden="true" className={`relative flex h-44 items-center justify-center border-b border-white/10 bg-linear-to-br ${project.color} to-transparent sm:h-52`}><span className="absolute left-5 top-4 font-mono text-xs text-zinc-500">0{index + 1}</span><span className="font-mono text-3xl tracking-tighter text-zinc-400 group-hover:text-zinc-100">{project.preview}</span></div>
              <div className="flex flex-1 flex-col p-6"><p className="mb-3 text-xs text-zinc-500">{project.category} · Proyecto de ejemplo</p><div className="flex items-center justify-between gap-4"><h3 className="text-xl font-semibold">{project.title}</h3><ContactLink href={project.github} label={`GitHub de ${project.title}`}><Github size={20} aria-hidden="true" /></ContactLink></div><p className="mb-6 mt-3 text-sm leading-7 text-zinc-400">{project.description}</p><ul aria-label={`Tecnologías de ${project.title}`} className="mt-auto flex flex-wrap gap-2">{project.tags.map(tag => <li key={tag} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{tag}</li>)}</ul></div>
            </article>
          ))}</div>
        </section>
        <section id="experiencia" aria-labelledby="experience-title" className="border-t border-white/10 py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16"><div><p className="eyebrow">02 / El recorrido</p><h2 id="experience-title" className="section-title">Experiencia</h2><p className="mt-4 max-w-xs text-sm leading-7 text-zinc-400">Cada etapa es una oportunidad para aprender, colaborar y construir mejores soluciones.</p><p className="mt-3 text-xs text-zinc-500">Puestos y fechas de ejemplo.</p></div><ol className="ml-2 border-l border-zinc-800">{experience.map(job => <li key={job.company} className="relative pb-10 pl-7 last:pb-0"><span aria-hidden="true" className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-lime-300 ring-4 ring-zinc-950" /><p className="mb-2 font-mono text-xs text-zinc-500">{job.period}</p><h3 className="text-lg font-semibold">{job.role}</h3><p className="mt-1 text-sm text-lime-300">{job.company}</p><p className="mt-3 text-sm leading-7 text-zinc-400">{job.description}</p></li>)}</ol></div>
        </section>
      </main>
      <footer id="contacto" className="border-t border-white/10 bg-zinc-900/30"><div className="mx-auto max-w-6xl px-6 py-14"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><p className="eyebrow">03 / Contacto</p><h2 className="section-title">¿Construimos algo juntos?</h2><p className="mt-3 text-sm leading-7 text-zinc-400">Conversemos sobre proyectos, ideas y nuevas oportunidades.</p>{!contact.github && !contact.linkedin && !contact.email && <p className="mt-2 text-xs text-zinc-500">Enlaces de contacto próximamente.</p>}</div><div className="flex gap-3">{socials.map(({ label, href, icon: Icon }) => <ContactLink key={label} label={label} href={href}><Icon size={20} aria-hidden="true" /></ContactLink>)}</div></div><div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500"><p>© {new Date().getFullYear()} Miguel Ángel Yamunaqué Villegas</p><p>Creado con React y Tailwind CSS.</p></div></div></footer>
    </div>
  )
}
