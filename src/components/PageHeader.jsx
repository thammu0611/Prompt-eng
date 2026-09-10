import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(227,178,60,.45), transparent 45%), radial-gradient(circle at 85% 0%, rgba(34,160,110,.55), transparent 50%)',
        }}
      />
      <div className="container-x relative py-14 sm:py-16">
        <nav className="mb-4 flex items-center gap-2 text-xs text-brand-100/70">
          <Link to="/" className="hover:text-gold-400">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold-400">{title}</span>
        </nav>
        {eyebrow && <p className="eyebrow !text-gold-400">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold !text-white sm:text-4xl lg:text-[42px]">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-50/85 sm:text-base">{subtitle}</p>}
      </div>
    </section>
  )
}
