import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { institute, navLinks } from '../data/site'
import Wordmark from './Wordmark'
import Icon from './Icons'

const quick = [
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Placements', to: '/placements' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* announcement rail */}
      <div className="hidden bg-ink-950 text-ivory-50/70 lg:block">
        <div className="wrap flex h-9 items-center justify-between text-[10px] uppercase tracking-widest">
          <p>Established {institute.established} · Vandalur, Chennai</p>
          <div className="flex items-center gap-7">
            <a href={`tel:${institute.phone.replace(/\s/g, '')}`} className="transition hover:text-gold-300">
              {institute.phone}
            </a>
            <a href={`mailto:${institute.email}`} className="transition hover:text-gold-300">
              {institute.email}
            </a>
            <Link to="/admissions" className="text-gold-300 transition hover:text-gold-100">
              Admissions 2026-27
            </Link>
          </div>
        </div>
      </div>

      {/* main bar */}
      <nav
        className={`border-b transition-all duration-300 ${
          solid ? 'border-ink-900/10 bg-ivory-50/95 backdrop-blur' : 'border-transparent bg-ivory-50'
        }`}
      >
        <div className="wrap flex h-[74px] items-center justify-between gap-6">
          <Link to="/" aria-label="Thameem Institute of Technology, home">
            <Wordmark compact={solid} />
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 md:flex">
              {quick.map((l) => (
                <NavLink key={l.to} to={l.to} className={({ isActive }) => `navlink ${isActive ? 'navlink-active' : ''}`}>
                  {l.label}
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 border border-ink-900/20 px-5 py-2.5 text-[10px] font-medium uppercase tracking-widest text-ink-800 transition hover:border-gold-400 hover:text-gold-600"
              aria-label="Open the full menu"
            >
              <span className="grid gap-[3px]">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-2.5 bg-current transition-all group-hover:w-4" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* full-screen index */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink-950 text-ivory-50">
          <div className="wrap flex h-[74px] shrink-0 items-center justify-between border-b border-ivory-50/10">
            <Wordmark light compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-ivory-50/70 transition hover:text-gold-300"
              aria-label="Close the menu"
            >
              Close
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="wrap flex-1 overflow-y-auto py-10">
            <p className="eyebrow eyebrow-light mb-8">Index of pages</p>
            <ul className="grid gap-x-16 gap-y-1 sm:grid-cols-2">
              {navLinks.map((l, i) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-5 border-b border-ivory-50/10 py-4 transition-colors ${
                        isActive ? 'text-gold-300' : 'text-ivory-50 hover:text-gold-300'
                      }`
                    }
                  >
                    <span className="num text-[11px] tracking-widest text-ink-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-[26px] font-light leading-tight sm:text-[30px]">{l.label}</span>
                    <Icon
                      name="arrow"
                      className="ml-auto h-4 w-4 translate-x-[-6px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-8 border-t border-ivory-50/10 pt-8 text-sm sm:grid-cols-3">
              <div>
                <p className="eyebrow eyebrow-light mb-3">Campus</p>
                <p className="leading-relaxed text-ivory-50/70">{institute.address}</p>
              </div>
              <div>
                <p className="eyebrow eyebrow-light mb-3">Admissions</p>
                <a href={`tel:${institute.admissionsPhone.replace(/\s/g, '')}`} className="block text-ivory-50/70 hover:text-gold-300">
                  {institute.admissionsPhone}
                </a>
                <a href={`mailto:${institute.admissionsEmail}`} className="block text-ivory-50/70 hover:text-gold-300">
                  {institute.admissionsEmail}
                </a>
              </div>
              <div>
                <p className="eyebrow eyebrow-light mb-3">Office hours</p>
                <p className="leading-relaxed text-ivory-50/70">{institute.hours}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
