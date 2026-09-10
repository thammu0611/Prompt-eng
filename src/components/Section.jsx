export function Section({ children, tone = 'ivory', className = '' }) {
  const tones = {
    ivory: 'bg-ivory-50',
    white: 'bg-white',
    paper: 'bg-ivory-100',
    ink: 'bg-ink-950 text-ivory-50/75',
  }
  return (
    <section className={`${tones[tone]} py-20 sm:py-24 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, subtitle, center = false, light = false, className = '' }) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} mb-12 ${className}`}>
      {eyebrow && <p className={`eyebrow ${center ? 'eyebrow-c' : ''} ${light ? 'eyebrow-light' : ''} mb-5`}>{eyebrow}</p>}
      <h2 className={`display-lg ${light ? '!text-ivory-50' : ''}`}>{title}</h2>
      {subtitle && <p className={`lede mt-5 ${center ? 'mx-auto' : ''} ${light ? '!text-ivory-50/70' : ''}`}>{subtitle}</p>}
    </div>
  )
}

/** Big figure with a hairline above it — used for statistics rows. */
export function Figure({ value, label, light = false }) {
  return (
    <div className={`border-t pt-5 ${light ? 'border-ivory-50/20' : 'border-ink-900/15'}`}>
      <p className={`num text-[38px] font-light leading-none sm:text-[44px] ${light ? '!text-ivory-50' : ''}`}>{value}</p>
      <p className={`mt-3 text-[10px] uppercase tracking-widest ${light ? 'text-gold-300' : 'text-ink-400'}`}>{label}</p>
    </div>
  )
}

/** Numbered editorial row — for processes and ordered lists. */
export function IndexRow({ n, title, text, light = false }) {
  return (
    <div className={`flex gap-6 border-t py-7 ${light ? 'border-ivory-50/15' : 'border-ink-900/10'}`}>
      <span className="num shrink-0 text-xs tracking-widest text-gold-500">{n}</span>
      <div>
        <h3 className={`display-md ${light ? '!text-ivory-50' : ''}`}>{title}</h3>
        {text && <p className={`lede mt-3 text-[14px] ${light ? '!text-ivory-50/65' : ''}`}>{text}</p>}
      </div>
    </div>
  )
}
