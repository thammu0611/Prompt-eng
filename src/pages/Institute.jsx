import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Figure, IndexRow } from '../components/Section'
import Icon from '../components/Icons'
import { institute, student, milestones, stats } from '../data/site'

const governance = [
  { n: '01', t: 'Board of governors', d: 'Chaired by the founder, with nominees of AICTE and the affiliating university, two industry members and a faculty representative. Meets twice a year.' },
  { n: '02', t: 'Academic council', d: 'The apex academic body of the autonomous institute. Approves curriculum, regulations and results. The five deans and all heads of department sit on it.' },
  { n: '03', t: 'Boards of studies', d: 'One for each department, with two external academic members and two members from industry, who revise the syllabus every year.' },
  { n: '04', t: 'Internal quality assurance cell', d: 'Conducts the annual academic audit, collects student feedback each semester and prepares the accreditation record.' },
]

export default function Institute() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage · Governance · Standing"
        title="The Institute"
        subtitle={`${institute.affiliation}, serving students from across Tamil Nadu since ${institute.established}.`}
      />

      {/* Narrative */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">Our history</p>
            <h2 className="display-lg">
              Twenty seven years
              <br />
              of unglamorous work.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-[17px] font-light leading-[1.9] text-ink-700">
              The institute was founded in 1998 by Dr. M. Thameem Ansari with a single academic block, eleven teachers
              and a conviction that a rigorous technical education should not depend on a family's income. The first
              batch of one hundred and eighty students graduated in 2002; sixty of them were the first in their family
              to finish a degree.
            </p>
            <p className="lede">
              Growth since then has been deliberate. Postgraduate programmes arrived in 2005, the first research centre
              in 2008, NBA accreditation in 2012 and autonomous status in 2017. Each expansion followed the founder's
              rule: build the laboratory before you announce the course.
            </p>
            <p className="lede">
              Today eleven departments, three hundred and twelve faculty members and six thousand four hundred students
              share a forty two acre residential campus at Vandalur. The institute continues to reserve a quarter of its
              seats for students from government schools and rural districts.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Figure key={s.label} {...s} />
          ))}
        </div>
      </Section>

      {/* Vision, mission, values */}
      <Section tone="white">
        <SectionTitle eyebrow="Direction" title="Vision, mission and values" />
        <div className="grid gap-px bg-ink-900/10 md:grid-cols-3">
          {[
            {
              t: 'Vision',
              d: 'To be an institution where competent, ethical professionals are formed, and where research answers the practical problems of the region we serve.',
            },
            {
              t: 'Mission',
              d: 'Deliver an outcome based curriculum with strong laboratory practice · Keep education affordable through scholarships · Build research capacity industry can use · Develop character through service and sport.',
            },
            {
              t: 'Values',
              d: 'Knowledge pursued honestly, character shown in small things, and service to those who have less. These three words appear on the institute seal and in every convocation address.',
            },
          ].map((v) => (
            <div key={v.t} className="bg-white p-9">
              <span className="block h-px w-10 bg-gold-400" />
              <h3 className="display-md mt-6">{v.t}</h3>
              <p className="lede mt-4 text-[14.5px]">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Milestones */}
      <Section tone="paper">
        <SectionTitle
          eyebrow="Timeline"
          title="Milestones"
          subtitle="A short history of the institute in six moments."
        />
        <ol className="grid gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m) => (
            <li key={m.year} className="bg-ivory-100 p-8">
              <p className="num text-[38px] font-light leading-none text-gold-600">{m.year}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">{m.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Governance */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">How the institute is run</p>
            <h2 className="display-lg">Governance</h2>
            <p className="lede mt-5">
              As an autonomous institution, Thameem Institute of Technology frames its own curriculum and conducts its
              own examinations, under four standing bodies.
            </p>
            <Link to="/leadership" className="btn-line mt-8">
              Meet the board <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="border-b border-ink-900/10">
            {governance.map((g) => (
              <IndexRow key={g.n} n={g.n} title={g.t} text={g.d} />
            ))}
          </div>
        </div>
      </Section>

      {/* Accreditation */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow eyebrow-light mb-6">Standing</p>
            <h2 className="display-lg !text-ivory-50">Accreditation and approvals</h2>
            <p className="lede mt-5 !text-ivory-50/70">
              The institute is assessed on a fixed cycle by every body that governs technical education in India. The
              current status of each is listed here.
            </p>
          </div>
          <dl className="grid gap-px bg-ivory-50/10">
            {[
              ['NAAC', '“A+” grade, second cycle, valid to 2028'],
              ['NBA', 'Six undergraduate programmes accredited'],
              ['AICTE', 'Approved, extension granted for 2026-27'],
              ['University', 'Affiliated, autonomous status since 2017'],
              ['NIRF', 'Engineering band 101-150'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 bg-ink-950 px-6 py-5">
                <dt className="text-[10px] uppercase tracking-widest text-gold-300">{k}</dt>
                <dd className="text-right text-sm text-ivory-50/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="white">
        <div className="border border-ink-900/10 p-8 text-center">
          <p className="eyebrow eyebrow-c mb-3">Project information</p>
          <p className="text-sm text-ink-500">{student.note}</p>
        </div>
      </Section>
    </>
  )
}
