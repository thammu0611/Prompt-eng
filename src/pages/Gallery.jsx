import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { gallery } from '../data/site'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Campus Gallery"
        subtitle="A look at the academic blocks, laboratories, hostels and student events across the 42 acre campus."
      />

      <Section tone="light">
        <SectionTitle
          center
          eyebrow="Photographs"
          title="Nine views of the campus"
          subtitle="Select any tile to read the caption. Photographs are replaced at the end of each academic year."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <button
              key={g.title}
              type="button"
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-2xl text-left shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className={`aspect-[4/3] w-full bg-gradient-to-br ${g.tone}`}>
                <div
                  className="h-full w-full opacity-40"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 25% 20%, rgba(255,255,255,.4), transparent 40%), linear-gradient(120deg, transparent 45%, rgba(255,255,255,.18) 46%, transparent 47%)',
                  }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                <p className="font-display text-base font-semibold text-white">{g.title}</p>
                <p className="mt-0.5 text-xs text-white/75">{g.caption}</p>
              </div>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/30 transition group-hover:opacity-100">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </Section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-brand-950/80 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-[16/9] w-full bg-gradient-to-br ${gallery[active].tone}`} />
            <div className="flex items-start justify-between gap-6 p-6">
              <div>
                <h3 className="font-display text-xl font-semibold">{gallery[active].title}</h3>
                <p className="mt-2 text-sm text-slate-600">{gallery[active].caption}</p>
              </div>
              <button type="button" onClick={() => setActive(null)} className="btn-outline !px-5 !py-2">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
