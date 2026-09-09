import { institute } from '../data/site'

export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-lg font-bold ${
          light ? 'bg-white/10 text-gold-400 ring-1 ring-white/25' : 'bg-brand-800 text-gold-400'
        }`}
      >
        TIT
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] font-bold sm:text-base ${
            light ? 'text-white' : 'text-brand-900'
          }`}
        >
          {institute.name}
        </span>
        <span
          className={`mt-0.5 hidden text-[10px] uppercase tracking-[0.18em] sm:block ${
            light ? 'text-brand-100/70' : 'text-brand-600'
          }`}
        >
          {institute.tagline}
        </span>
      </span>
    </div>
  )
}
