import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Figure } from '../components/Section'
import Icon from '../components/Icons'
import { faculty, facultyDepartments } from '../data/site'

export default function Faculty() {
  const [dept, setDept] = useState('All departments')
  const list = dept === 'All departments' ? faculty : faculty.filter((f) => f.dept === dept)

  return (
    <>
      <PageHeader
        eyebrow="Teachers"
        title="Faculty"
        subtitle="Three hundred and twelve faculty members teach at the institute, of whom one hundred and twenty eight hold a doctorate. The heads of department and senior faculty are listed here."
      />

      <Section tone="ivory">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Figure value="312" label="Faculty members" />
          <Figure value="128" label="Hold a doctorate" />
          <Figure value="1:15" label="Mentor ratio" />
          <Figure value="42" label="Recognised supervisors" />
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Directory"
          title="Heads of department and senior faculty"
          subtitle="Filter by department to find a teacher and their area of work."
        />

        <div className="mb-10 flex flex-wrap gap-x-7 gap-y-3">
          {facultyDepartments.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDept(d)}
              className={`border-b pb-1 text-[10px] font-medium uppercase tracking-widest transition ${
                dept === d ? 'border-gold-400 text-ink-900' : 'border-transparent text-ink-400 hover:text-ink-700'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f) => (
            <article key={f.name + f.dept} className="group bg-white p-8 transition-colors hover:bg-ivory-100">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center border border-gold-400/50 font-display text-base text-gold-600">
                  {f.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[20px] font-medium leading-tight text-ink-900">{f.name}</h3>
                  <p className="mt-1.5 text-[10px] uppercase tracking-widest text-gold-600">{f.role}</p>
                </div>
              </div>
              <span className="mt-6 block h-px w-full bg-ink-900/10" />
              <dl className="mt-5 grid gap-2.5 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-[10px] uppercase tracking-widest text-ink-400">Department</dt>
                  <dd className="text-ink-700">{f.dept}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-[10px] uppercase tracking-widest text-ink-400">Area</dt>
                  <dd className="text-ink-700">{f.area}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-[10px] uppercase tracking-widest text-ink-400">Experience</dt>
                  <dd className="num text-ink-700">{f.exp}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="text-sm text-ink-400">No faculty listed for this department yet.</p>}
      </Section>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6">Faculty life</p>
            <h2 className="display-lg">What the institute asks of its teachers</h2>
            <Link to="/leadership" className="btn-line mt-8">
              The board of deans <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-px bg-ink-900/10 sm:grid-cols-3">
            {[
              ['Development', 'Two development programmes a year, and one national conference funded by the institute.'],
              ['Doctoral support', 'A reduced teaching load in the writing year and a research allowance for scholars.'],
              ['Mentoring duty', 'Fifteen students followed for four years, with a parent meeting every semester.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-ivory-100 p-7">
                <span className="block h-px w-8 bg-gold-400" />
                <h3 className="mt-5 font-display text-[21px] font-medium text-ink-900">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
