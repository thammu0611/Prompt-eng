import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Stat } from '../components/Section'
import Icon from '../components/Icons'
import { researchCentres, researchStats } from '../data/site'

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research and innovation"
        title="Research"
        subtitle="Four recognised research centres, 64 doctoral scholars and funded projects worth ₹ 4.6 crore, coordinated by the Dean of Research and Development."
      />

      <Section tone="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchStats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Centres"
          title="Where the work happens"
          subtitle="Each centre is led by a senior faculty member and admits undergraduate students as research assistants from the second year."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {researchCentres.map((c) => (
            <article key={c.name} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="flask" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-700">Centre lead · {c.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Doctoral programme" title="Ph.D. at Thameem Institute" />
            <div className="grid gap-4">
              {[
                { t: 'Admission twice a year', d: 'January and July cycles, with a written test and a research proposal presentation.' },
                { t: 'Full time and part time', d: 'Part time scholars attend a coursework block of two weeks each semester.' },
                { t: 'Supervisors', d: 'Forty two recognised supervisors across engineering, science and management.' },
                { t: 'Publication requirement', d: 'Two papers in indexed journals before the thesis synopsis is accepted.' },
              ].map((x) => (
                <div key={x.t} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <h4 className="font-semibold text-brand-900">{x.t}</h4>
                    <p className="mt-1 text-sm text-slate-600">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Recent work" title="Selected projects and outcomes" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              {[
                ['Hybrid solar drying systems for farm produce', 'DST funded · ₹ 84 lakh · 2026-29'],
                ['Low power FPGA accelerators for edge devices', 'Industry sponsored · ₹ 62 lakh · 2025-27'],
                ['Regional language speech datasets for accessibility', 'AICTE funded · ₹ 38 lakh · 2025-28'],
                ['Retrofitting techniques for heritage masonry', 'State PWD collaboration · ₹ 46 lakh · 2024-27'],
                ['Battery management for electric two wheelers', 'Industry consultancy · ₹ 29 lakh · 2026-28'],
              ].map(([t, d]) => (
                <div key={t} className="border-b border-slate-100 px-5 py-4 last:border-0">
                  <p className="font-medium text-brand-900">{t}</p>
                  <p className="mt-1 text-sm text-slate-500">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-brand-300 bg-white p-5">
              <p className="text-sm text-slate-600">
                Consultancy enquiries from industry may be sent to the Dean of Research and Development through the
                contact page. The institute also offers testing services in its material, structural and electrical
                laboratories.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
