import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { institute } from '../data/site'
import Logo from './Logo'
import Icon from './Icons'

const primary = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Placements', to: '/placements' },
]

const more = [
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Research', to: '/research' },
  { label: 'News & Events', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-600 hover:bg-slate-100 hover:text-brand-800'
    }`

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="hidden bg-brand-900 text-brand-50 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-3.5 w-3.5" />
            {institute.address}
          </p>
          <div className="flex items-center gap-5">
            <a className="flex items-center gap-1.5 hover:text-gold-400" href={`tel:${institute.phone.replace(/\s/g, '')}`}>
              <Icon name="phone" className="h-3.5 w-3.5" /> {institute.phone}
            </a>
            <a className="flex items-center gap-1.5 hover:text-gold-400" href={`mailto:${institute.email}`}>
              <Icon name="mail" className="h-3.5 w-3.5" /> {institute.email}
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <nav className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-x flex h-[68px] items-center justify-between gap-4">
          <Link to="/" aria-label="Thameem Institute of Technology home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {primary.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-800"
                aria-expanded={moreOpen}
              >
                More
                <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-11 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-soft">
                  {more.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm ${isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-800'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="btn-primary ml-2 !px-5 !py-2.5">
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-brand-800 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="container-x grid gap-1 py-4">
              {[...primary, ...more, { label: 'Contact', to: '/contact' }].map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-brand-700 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={`tel:${institute.admissionsPhone.replace(/\s/g, '')}`} className="btn-gold mt-2">
                Call admissions
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
