// Hairline crest drawn in SVG — used as the institute mark.
export default function Crest({ className = 'h-10 w-10', tone = 'gold' }) {
  const stroke = tone === 'gold' ? '#C9A227' : 'currentColor'
  return (
    <svg viewBox="0 0 48 56" className={className} fill="none" aria-hidden="true">
      <path d="M24 2 45 11v20c0 12.5-8.6 20.2-21 23C11.6 51.2 3 43.5 3 31V11L24 2Z" stroke={stroke} strokeWidth="1" />
      <path d="M24 7.5 40 14v16.6c0 10-6.8 16.3-16 18.7-9.2-2.4-16-8.7-16-18.7V14L24 7.5Z" stroke={stroke} strokeWidth=".5" opacity=".55" />
      <path d="M14 33.5h20M24 15v6" stroke={stroke} strokeWidth=".75" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="12"
        letterSpacing="1"
        fill={stroke}
      >
        TIT
      </text>
    </svg>
  )
}
