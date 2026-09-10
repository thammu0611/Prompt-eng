import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Figure, IndexRow } from '../components/Section'
import { researchCentres, researchStats } from '../data/site'

const projects = [
  ['Hybrid solar drying systems for farm produce', 'DST funded', '₹ 84 lakh', '2026-29'],
  ['Low power FPGA accelerators for edge devices', 'Industry sponsored', '₹ 62 lakh', '2025-27'],
  ['Regional language speech datasets for accessibility', 'AICTE funded', '₹ 38 lakh', '2025-28'],
  ['Retrofitting techniques for heritage masonry', 'State PWD', '₹ 46 lakh', '2024-27'],
  ['Battery management for electric two wheelers', 'Consultancy', '₹ 29 lakh', '2026-28'],
]

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Centres · Doctoral study · Consultancy"
        title="Research"
        subtitle="Four recognised research centres, sixty four doctoral scholars and funded projects worth ₹ 4.6 crore, coordinated by the Dean of Research and Development."
      />

      <Section tone="ivory">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {researchStats.map((s) => (
            <Figure key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Centres"
          title="Where the work happens"
          subtitle="Each centre is led by a senior faculty member and admits undergraduate students as research assistants from the second year."
        />
        <div className="grid gap-px bg-ink-900/10 md:grid-cols-2">
          {researchCentres.map((c) => (
            <article key={c.name} className="bg-white p-9">
              <span className="block h-px w-10 bg-gold-400" />
              <h3 className="display-md mt-6">{c.name}</h3>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-gold-600">Centre lead · {c.lead}</p>
              <p className="lede mt-4 text-[14.5px]">{c.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Doctoral programme" title="Ph.D. at the institute" className="!mb-8" />
            <div className="border-b border-ink-900/10">
              <IndexRow n="01" title="Admission twice a year" text="January and July cycles, with a written test and a research proposal presentation." />
              <IndexRow n="02" title="Full time and part time" text="Part time scholars attend a coursework block of two weeks each semester." />
              <IndexRow n="03" title="Supervisors" text="Forty two recognised supervisors across engineering, science and management." />
              <IndexRow n="04" title="Publication requirement" text="Two papers in indexed journals before the thesis synopsis is accepted." />
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Funded work" title="Selected projects" className="!mb-8" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-left">
                <thead>
                  <tr className="border-b border-ink-900/25">
                    {['Project', 'Agency', 'Value', 'Period'].map((h) => (
                      <th key={h} className="pb-4 pr-5 text-[10px] font-medium uppercase tracking-widest text-ink-400">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projects.map(([t, a, v, p]) => (
                    <tr key={t} className="border-b border-ink-900/10">
                      <td className="py-4 pr-5 text-sm text-ink-800">{t}</td>
                      <td className="py-4 pr-5 text-xs uppercase tracking-widest text-ink-400">{a}</td>
                      <td className="num py-4 pr-5 text-sm text-gold-600">{v}</td>
                      <td className="num py-4 text-sm text-ink-500">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              Consultancy enquiries may be sent to the Dean of Research and Development through the contact page. The
              institute also offers testing services in its material, structural and electrical laboratories.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
