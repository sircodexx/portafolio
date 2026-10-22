import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from './Core.jsx'

// Piezas base del diseño v2. Los colores salen de los tokens de src/theme.css.

// Aparición suave al entrar en pantalla. La animación es CSS (.reveal en index.css)
// y se desactiva con prefers-reduced-motion.
export function Reveal({ as: Element = 'div', delay = 0, className = '', children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setShown(true)
      observer.disconnect()
    }, { rootMargin: '0px 0px -60px 0px' })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <Element ref={ref} style={delay ? { transitionDelay: `${delay}s` } : undefined} className={`reveal ${shown ? 'is-visible' : ''} ${className}`}>
      {children}
    </Element>
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

// Botón con forma de enlace: `to` navega dentro de la web, `href` es un enlace normal.
export function Button({ href, to, variant = 'primary', icon: Icon, children, ...props }) {
  const styles = variant === 'primary'
    ? 'bg-accent text-accent-ink hover:brightness-110'
    : 'border border-line bg-surface/60 text-fg hover:border-accent/60 hover:text-accent'
  const Element = to ? Link : 'a'
  return (
    <Element {...(to ? { to } : { href })} className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${styles}`} {...props}>
      {Icon && <Icon size={16} aria-hidden="true" />}{children}
    </Element>
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

// Diagrama de arquitectura: `flow` es el camino principal (la pieza central se resalta)
// y `extras` los servicios conectados a ella. Recibe los textos ya traducidos.
export function Diagram({ flow, extras = [], extrasLabel }) {
  const center = Math.floor(flow.length / 2)
  return (
    <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-8">
      <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        {flow.map((node, i) => (
          <li key={node.title} className="contents">
            {i > 0 && (
              <span className="flex justify-center text-muted" aria-hidden="true">
                <ArrowDown size={18} className="sm:hidden" /><ArrowRight size={18} className="hidden sm:block" />
              </span>
            )}
            <div className={`flex-1 rounded-xl border p-4 text-center ${i === center ? 'border-accent/70 bg-accent/5' : 'border-line bg-surface-2'}`}>
              <p className="font-semibold text-fg">{node.title}</p>
              <p className="mt-1 font-mono text-xs text-muted">{node.sub}</p>
            </div>
          </li>
        ))}
      </ol>
      {extras.length > 0 && (
        <div className="mt-6 border-t border-dashed border-line pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{extrasLabel}</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map(node => (
              <li key={node.title} className="rounded-xl border border-dashed border-line p-4">
                <p className="text-sm font-semibold text-fg">{node.title}</p>
                <p className="mt-1 font-mono text-xs text-muted">{node.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </figure>
  )
}
