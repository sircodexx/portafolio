import { motion } from 'motion/react'

// Piezas base del diseño v2. Los colores salen de los tokens de src/theme.css.

// Aparición suave al entrar en pantalla (desactivada con prefers-reduced-motion vía MotionConfig).
export function Reveal({ as = 'div', delay = 0, className, children }) {
  const Tag = motion[as]
  return (
    <Tag className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] }}>
      {children}
    </Tag>
  )
}

export function Section({ id, index, label, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28 ${className}`}>
      <Reveal className="mb-12 max-w-2xl">
        <SectionLabel index={index}>{label}</SectionLabel>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export function SectionLabel({ index, children }) {
  return <p className="font-mono text-xs tracking-wide text-accent sm:text-sm">// {index && <>{index} · </>}{children}</p>
}

export function Button({ href, variant = 'primary', icon: Icon, children, ...props }) {
  const styles = variant === 'primary'
    ? 'bg-accent text-accent-ink hover:brightness-110'
    : 'border border-line bg-surface/60 text-fg hover:border-accent/60 hover:text-accent'
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${styles}`} {...props}>
      {Icon && <Icon size={16} aria-hidden="true" />}{children}
    </a>
  )
}

export function Tag({ children }) {
  return <span className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[11px] leading-none text-muted sm:text-xs">{children}</span>
}

export function Card({ className = '', children }) {
  return <div className={`rounded-xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/40 ${className}`}>{children}</div>
}

// Ventana de terminal. `lines`: [{ cmd }] para un comando o [{ out }] / [{ key, value }] para la salida.
export function Terminal({ title = 'zsh', lines }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" /><span className="size-2.5 rounded-full bg-line" /><span className="size-2.5 rounded-full bg-line" />
        <span className="ml-2 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="space-y-1 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) => line.cmd
          ? <p key={i} className={i ? 'pt-3' : ''}><span className="text-accent">$</span> <span className="text-fg">{line.cmd}</span></p>
          : line.key
            ? <p key={i} className="whitespace-nowrap"><span className="inline-block w-20 text-accent-2">{line.key}</span><span className="text-muted">{line.value}</span></p>
            : <p key={i} className="text-muted">{line.out}</p>)}
      </div>
    </div>
  )
}

export function Stat({ value, label }) {
  return (
    <div className="border-l border-line pl-4">
      <p className="font-mono text-2xl font-medium text-fg sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  )
}

// Línea de tiempo vertical. `items`: [{ role, org, place, period, current, children }]
export function Timeline({ items }) {
  return (
    <ol className="relative space-y-12 border-l border-line pl-8">
      {items.map(item => (
        <li key={item.role + item.org} className="relative">
          <span className={`absolute -left-[37px] top-1.5 size-2.5 rounded-full ring-4 ring-bg ${item.current ? 'bg-accent' : 'bg-line'}`} />
          <p className="font-mono text-xs text-muted">{item.period} · {item.place}</p>
          <h3 className="mt-2 text-xl font-semibold text-fg">{item.role} <span className="text-muted">·</span> <span className="text-accent">{item.org}</span></h3>
          <div className="mt-4">{item.children}</div>
        </li>
      ))}
    </ol>
  )
}
