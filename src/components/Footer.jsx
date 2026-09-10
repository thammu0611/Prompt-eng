import { Link } from 'react-router-dom'
import { institute, student, navLinks } from '../data/site'
import Logo from './Logo'
import Icon from './Icons'

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-950 text-brand-100/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            {institute.affiliation}. Established in {institute.established}, the institute offers undergraduate,
            postgraduate and research programmes on a 42 acre residential campus.
          </p>
          <p className="mt-4 text-sm text-brand-200/70">{institute.accreditation}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400">Quick links</h4>
          <ul className="grid gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400">Reach us</h4>
          <ul className="grid gap-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{institute.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${institute.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {institute.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${institute.email}`} className="hover:text-white">
                {institute.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{institute.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {institute.name}. All rights reserved.
          </p>
          <p className="text-gold-400">Website designed and developed by {student.developedBy}</p>
        </div>
      </div>
    </footer>
  )
}
