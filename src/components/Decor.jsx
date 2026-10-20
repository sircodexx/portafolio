import { useEffect, useRef } from 'react'

// Ojos que siguen al cursor; se quedan quietos con movimiento reducido.
export function Eyes({ className = '' }) {
  const pupils = useRef([])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = e => pupils.current.forEach(p => {
      if (!p) return
      const r = p.parentElement.getBoundingClientRect()
      const a = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2))
      p.style.transform = `translate(${Math.cos(a) * 3}px, ${Math.sin(a) * 5}px)`
    })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <span aria-hidden="true" className={`inline-flex gap-[0.06em] align-middle ${className}`}>
      {[0, 1].map(i => <span key={i} className="flex h-[0.62em] w-[0.42em] items-center justify-center rounded-full border-[0.06em] border-rust bg-white"><span ref={el => { pupils.current[i] = el }} className="h-[0.3em] w-[0.2em] rounded-full bg-zinc-900 transition-transform duration-75" /></span>)}
    </span>
  )
}

// Estrella de picos irregulares.
const burstPoints = (() => {
  const jitter = [0, 4, -3, 5, -2, 3, -4, 2, 5, -3, 3, -5, 2, 4, -2, 3]
  return Array.from({ length: 32 }, (_, i) => {
    const angle = (i / 32) * Math.PI * 2 - Math.PI / 2
    const r = i % 2 ? 37 : 50 + jitter[(i / 2) % 16] / 2
    return `${(50 + Math.cos(angle) * r).toFixed(1)},${(50 + Math.sin(angle) * r).toFixed(1)}`
  }).join(' ')
})()

export function Burst({ className = '', children }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full"><polygon points={burstPoints} fill="currentColor" /></svg>
      <span className="relative">{children}</span>
    </span>
  )
}

// Destello de líneas (esquina superior) y estrella pequeña (esquina inferior).
export function SparkLines({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M24 4v9M24 35v9M4 24h9M35 24h9M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" />
    </svg>
  )
}

export function SparkStar({ className = '' }) {
  return <svg aria-hidden="true" viewBox="0 0 40 40" className={className}><path fill="currentColor" d="M20 0l3.6 12.2L34 6l-6.2 10.4L40 20l-12.2 3.6L34 34l-10.4-6.2L20 40l-3.6-12.2L6 34l6.2-10.4L0 20l12.2-3.6L6 6l10.4 6.2z" /></svg>
}

// Trazos a mano junto al saludo.
export function Doodle({ className = '' }) {
  return <svg aria-hidden="true" viewBox="0 0 24 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 18 2 6M10 16 9 2M16 17l4-9" /></svg>
}

export function Squiggle({ className = '' }) {
  return <svg aria-hidden="true" viewBox="0 0 30 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M2 4c6 0 9 2 10 6s3 4 6 2 6-2 9 2" /></svg>
}

export function DashedArrow({ className = '' }) {
  return <svg aria-hidden="true" viewBox="0 0 16 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M8 2v28" strokeDasharray="3 4" /><path d="M3 30l5 7 5-7" /></svg>
}

// Iconos del dock (estilo carpeta, avatar y enlace de macOS).
export function FolderIcon({ color = '#7fb6f0', className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 52" className={className}>
      <path d="M4 8a5 5 0 0 1 5-5h15l6 6h25a5 5 0 0 1 5 5v4H4z" fill={color} style={{ filter: 'brightness(0.86)' }} />
      <rect x="4" y="13" width="56" height="36" rx="5" fill={color} />
      <rect x="4" y="13" width="56" height="5" rx="2" fill="#fff" opacity="0.25" />
    </svg>
  )
}

export function AvatarIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 56 56" className={className}>
      <defs><linearGradient id="avatar-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dbe9fb" /><stop offset="1" stopColor="#b8d4f6" /></linearGradient></defs>
      <rect width="56" height="56" rx="13" fill="url(#avatar-bg)" />
      <circle cx="28" cy="21" r="8.5" fill="#2f6fd6" />
      <path d="M12 47c1.5-10 8-14.5 16-14.5S42.5 37 44 47z" fill="#2f6fd6" />
    </svg>
  )
}

export function LinkTile({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 56 56" className={className}>
      <rect width="56" height="56" rx="13" fill="#fff" />
      <rect x="0.5" y="0.5" width="55" height="55" rx="12.5" fill="none" stroke="#000" strokeOpacity="0.08" />
      <g fill="none" stroke="#2f6fd6" strokeWidth="4" strokeLinecap="round"><path d="M25 31a7 7 0 0 0 10 0l6-6a7 7 0 0 0-10-10l-2 2" /><path d="M31 25a7 7 0 0 0-10 0l-6 6a7 7 0 0 0 10 10l2-2" /></g>
    </svg>
  )
}

// Logo de marca desde simple-icons.
export function BrandIcon({ icon, className = '', color }) {
  return <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" className={className}><path d={icon.path} fill={color ?? `#${icon.hex}`} /></svg>
}

// Ilustraciones de código para experimentos sin captura.
const arts = {
  terminal: { file: 'deploy.sh', lines: [['$ ', 'ssh miguel@vps'], ['$ ', 'docker compose up -d'], ['', '✔ api      Started'], ['', '✔ postgres Started'], ['$ ', 'docker ps --format "{{.Names}}"']] },
  sql: { file: 'tenant_policy.php', lines: [['', "Route::middleware('tenant')"], ['  ', "->group(function () {"], ['    ', 'Gate::define("view", fn ($u, $r)'], ['      ', '=> $u->tenant_id === $r->tenant_id);'], ['  ', '});']] },
  python: { file: 'scraper.py', lines: [['', 'import httpx'], ['', 'from bs4 import BeautifulSoup'], ['', ''], ['', 'html = httpx.get(url).text'], ['', 'items = parse(html) | llm.summarize']] },
}

export function CodeArt({ art, className = '' }) {
  const { file, lines } = arts[art]
  return (
    <div aria-hidden="true" className={`flex flex-col overflow-hidden bg-[#1d1d1f] font-mono text-[11px] leading-6 text-zinc-300 sm:text-xs ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /><span className="ml-2 text-zinc-500">{file}</span></div>
      <div className="flex-1 p-4 sm:p-5">{lines.map(([pre, code], i) => <div key={i} className="whitespace-pre"><span className="text-leaf">{pre}</span>{code}</div>)}</div>
    </div>
  )
}
