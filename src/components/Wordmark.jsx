import Crest from './Crest'

export default function Wordmark({ light = false, compact = false }) {
  return (
    <span className="flex items-center gap-3.5">
      <Crest className={compact ? 'h-9 w-9' : 'h-11 w-11'} />
      <span className="leading-none">
        <span
          className={`block font-display ${compact ? 'text-[17px]' : 'text-[19px]'} font-medium tracking-[0.02em] ${
            light ? 'text-ivory-50' : 'text-ink-900'
          }`}
        >
          Thameem Institute
        </span>
        <span
          className={`mt-1 block text-[8.5px] uppercase tracking-brand ${light ? 'text-gold-300' : 'text-gold-500'}`}
        >
          of Technology
        </span>
      </span>
    </span>
  )
}
