import { useEffect, useState } from 'react'
import { content } from '../content.js'
import { LangContext, initialLang, navigate } from '../lib.js'

export function Link({ to, onClick, ...props }) {
  const handle = e => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return <a href={to} onClick={handle} {...props} />
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try { localStorage.setItem('lang', lang) } catch { /* almacenamiento no disponible */ }
  }, [lang, t])
  const pick = text => text.split('|')[lang === 'es' ? 0 : 1] ?? text
  return <LangContext.Provider value={{ lang, setLang, t, pick }}>{children}</LangContext.Provider>
}

// Texto con tramos destacados ({ b }) y normales ({ t }).
export function Rich({ parts }) {
  return parts.map((part, i) => part.b ? <b key={i} className="font-semibold text-fg">{part.b}</b> : <span key={i}>{part.t}</span>)
}
