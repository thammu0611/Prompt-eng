import { Link } from 'react-router-dom'
import { institute, student, navLinks } from '../data/site'
import Crest from './Crest'
import Icon from './Icons'

const columns = [
  { title: 'The institute', links: navLinks.slice(1, 5) },
  { title: 'Academics', links: navLinks.slice(5, 9) },
  { title: 'Visit & connect', links: navLinks.slice(9) },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ivory-50/70">
      {/* crest band */}
      <div className="wrap flex flex-col items-center gap-5 border-b border-ivory-50/10 py-14 text-center">
        <Crest className="h-14 w-14" />
        <p className="font-display text-[30px] font-light leading-tight text-ivory-50 sm:text-[38px]">
          {institute.name}
        </p>
        <p className="text-[10px] uppercase tracking-brand text-gold-300">{institute.tagline}</p>
      </div>

      <div className="wrap grid gap-12 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <p className="eyebrow eyebrow-light mb-5">The campus</p>
          <ul className="grid gap-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="leading-relaxed">{institute.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${institute.phone.replace(/\s/g, '')}`} className="hover:text-gold-300">
                {institute.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${institute.email}`} className="hover:text-gold-300">
                {institute.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="leading-relaxed">{institute.hours}</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="eyebrow eyebrow-light mb-5">{c.title}</p>
              <ul className="grid gap-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="transition hover:text-gold-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap border-t border-ivory-50/10 py-6">
        <div className="flex flex-col gap-3 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {institute.name}. {institute.affiliation}.
          </p>
          <p className="uppercase tracking-widest text-gold-300">
            Designed and developed by {student.developedBy}
          </p>
        </div>
      </div>
    </footer>
  )
}
