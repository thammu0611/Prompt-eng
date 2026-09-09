export function SectionTitle({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} mb-10`}>
      {eyebrow && <p className={`eyebrow ${light ? '!text-gold-400' : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-2 font-display text-2xl font-bold sm:text-3xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-sm leading-relaxed sm:text-base ${light ? 'text-brand-50/80' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Section({ children, className = '', tone = 'light' }) {
  const tones = {
    light: 'bg-sand-50',
    white: 'bg-white',
    dark: 'bg-brand-900',
    tint: 'bg-brand-50/60',
  }
  return (
    <section className={`${tones[tone]} py-16 sm:py-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  )
}

export function Stat({ value, label, light = false }) {
  return (
    <div className={`rounded-2xl p-6 text-center ${light ? 'bg-white/10 ring-1 ring-white/15' : 'bg-white shadow-card'}`}>
      <p className={`font-display text-3xl font-bold ${light ? 'text-gold-400' : 'text-brand-800'}`}>{value}</p>
      <p className={`mt-1 text-xs font-medium uppercase tracking-wider ${light ? 'text-brand-50/75' : 'text-slate-500'}`}>
        {label}
      </p>
    </div>
  )
}
