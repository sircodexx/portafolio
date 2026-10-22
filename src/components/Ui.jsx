import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from './Core.jsx'

// Piezas base del diseño. Los colores salen de los tokens de src/theme.css.

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

// Antetítulo en mayúsculas con líneas: a ambos lados si está centrado, solo a la izquierda si no.
export function Eyebrow({ center, children }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-2 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-10 bg-accent-2/70" aria-hidden="true" />{children}{center && <span className="h-px w-10 bg-accent-2/70" aria-hidden="true" />}
    </p>
  )
}

export function Section({ id, label, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <Eyebrow center>{label}</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  )
}

const buttonStyles = {
  primary: 'bg-accent text-accent-ink hover:brightness-110',
  outline: 'border border-accent text-accent hover:bg-accent/10',
  gradient: 'bg-linear-to-r from-accent to-accent-2 text-accent-ink hover:brightness-110',
  ghost: 'border border-line text-fg hover:border-accent/60 hover:text-accent',
}

// Botón con forma de enlace: `to` navega dentro de la web, `href` es un enlace normal.
export function Button({ href, to, variant = 'primary', icon: Icon, className = '', children, ...props }) {
  const Element = to ? Link : 'a'
  return (
    <Element {...(to ? { to } : { href })} className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition sm:text-base ${buttonStyles[variant]} ${className}`} {...props}>
      {Icon && <Icon size={18} aria-hidden="true" />}{children}
    </Element>
  )
}

export function Tag({ children }) {
  return <span className="inline-block rounded-full border border-accent/40 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent">{children}</span>
}

// Ícono dentro de un círculo. `tone`: dark (fondo oscuro, ícono lima), accent (lima) o accent-2 (cian).
const iconTones = {
  dark: 'border-line bg-bg text-accent',
  accent: 'border-accent/20 bg-accent/10 text-accent',
  'accent-2': 'border-accent-2/20 bg-accent-2/10 text-accent-2',
}
export function IconCircle({ icon: Icon, size = 'md', tone = 'dark' }) {
  const box = size === 'lg' ? 'size-16' : size === 'sm' ? 'size-12' : 'size-14'
  return <span className={`grid shrink-0 place-items-center rounded-full border ${box} ${iconTones[tone]}`}><Icon size={size === 'lg' ? 28 : 22} aria-hidden="true" /></span>
}

export function Card({ className = '', children }) {
  return <div className={`rounded-xl border border-line bg-surface ${className}`}>{children}</div>
}

// Viñeta del diseño: punto del color principal.
export function Bullet() {
  return <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{extrasLabel}</p>
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
