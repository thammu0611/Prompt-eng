import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { gallery } from '../data/site'

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Photographs"
        title="Gallery"
        subtitle="Academic blocks, laboratories, hostels and student events across the forty two acre campus."
      />

      <Section tone="ivory">
        <SectionTitle
          eyebrow="Nine views"
          title="The campus, plate by plate"
          subtitle="Select any plate to read its caption. Photographs are replaced at the end of each academic year."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <button
              key={g.title}
              type="button"
              onClick={() => setActive(i)}
              className="group border border-ink-900/10 bg-white p-3 text-left transition-colors hover:border-gold-400"
            >
              <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${g.tone}`}>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(120deg, transparent 44%, rgba(201,162,39,.55) 45%, transparent 46%), radial-gradient(circle at 28% 22%, rgba(255,255,255,.28), transparent 45%)',
                  }}
                />
                <span className="absolute inset-3 border border-ivory-50/20" />
                <span className="num absolute left-5 top-5 text-[11px] tracking-widest text-ivory-50/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 px-2 py-4">
                <div>
                  <p className="font-display text-[20px] font-medium text-ink-900">{g.title}</p>
                  <p className="mt-1 text-xs text-ink-400">{g.caption}</p>
                </div>
                <Icon
                  name="arrow"
                  className="h-4 w-4 shrink-0 text-gold-500 opacity-0 transition group-hover:opacity-100"
                />
              </div>
            </button>
          ))}
        </div>
      </Section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink-950/92 p-5"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].title}
        >
          <div className="w-full max-w-3xl border border-ivory-50/15 bg-ink-900 p-3" onClick={(e) => e.stopPropagation()}>
            <div className={`relative aspect-[16/9] w-full bg-gradient-to-br ${gallery[active].tone}`}>
              <span className="absolute inset-4 border border-ivory-50/20" />
            </div>
            <div className="flex items-end justify-between gap-6 px-4 py-6">
              <div>
                <h3 className="font-display text-[26px] font-light text-ivory-50">{gallery[active].title}</h3>
                <p className="mt-2 text-sm text-ivory-50/60">{gallery[active].caption}</p>
              </div>
              <button type="button" onClick={() => setActive(null)} className="btn-line-light shrink-0 !px-6 !py-2.5">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
