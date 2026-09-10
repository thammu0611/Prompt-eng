import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, subtitle, index }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-ivory-50">
      {/* engraved hairline grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(201,162,39,.55) 1px, transparent 1px), linear-gradient(rgba(201,162,39,.28) 1px, transparent 1px)',
          backgroundSize: '148px 100%, 100% 74px',
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,.22), transparent 62%)' }}
      />

      <div className="wrap relative py-16 sm:py-20">
        <nav className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-widest text-ivory-50/50">
          <Link to="/" className="transition hover:text-gold-300">
            Home
          </Link>
          <span className="h-px w-5 bg-ivory-50/25" />
          <span className="text-gold-300">{title}</span>
        </nav>

        <div className="flex items-start gap-6">
          {index && <span className="num mt-3 text-xs tracking-widest text-gold-400">{index}</span>}
          <div>
            {eyebrow && <p className="eyebrow eyebrow-light mb-4">{eyebrow}</p>}
            <h1 className="display-xl !text-ivory-50">{title}</h1>
            {subtitle && <p className="lede mt-6 !text-ivory-50/70">{subtitle}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
