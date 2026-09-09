import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { leadership, faculty, facultyDepartments } from '../data/site'

export default function Faculty() {
  const [dept, setDept] = useState('All departments')
  const list = dept === 'All departments' ? faculty : faculty.filter((f) => f.dept === dept)

  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Deans and Faculty"
        subtitle="312 faculty members teach at the institute, of whom 128 hold a doctorate. Listed below are the chairman, the deans and the heads of department."
      />

      {/* Leadership */}
      <Section tone="light">
        <SectionTitle
          eyebrow="Governing team"
          title="Chairman and deans"
          subtitle="The deans meet as the academic council on the first Monday of every month."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <article key={p.role} className="card">
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 font-display text-lg font-bold text-white">
                  {p.initials}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-tight">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">{p.qualification}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.focus}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Faculty directory */}
      <Section tone="white">
        <SectionTitle
          eyebrow="Directory"
          title="Heads of department and senior faculty"
          subtitle="Filter the directory by department to find a teacher and their area of work."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {facultyDepartments.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDept(d)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
                dept === d ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f) => (
            <article key={f.name + f.dept} className="card !p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-50 font-display text-base font-bold text-brand-700">
                  {f.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold leading-tight">{f.name}</h3>
                  <p className="mt-1 text-sm text-brand-700">{f.role}</p>
                </div>
              </div>
              <dl className="mt-4 grid gap-2 text-sm">
                <div className="flex gap-2">
                  <dt className="w-24 shrink-0 text-slate-400">Department</dt>
                  <dd className="text-slate-700">{f.dept}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-24 shrink-0 text-slate-400">Area</dt>
                  <dd className="text-slate-700">{f.area}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-24 shrink-0 text-slate-400">Experience</dt>
                  <dd className="text-slate-700">{f.exp}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="text-sm text-slate-500">No faculty listed for this department yet.</p>}
      </Section>

      {/* Faculty development */}
      <Section tone="tint">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: 'book', t: 'Faculty development', d: 'Every teacher attends at least two development programmes a year, and the institute funds one national conference.' },
            { icon: 'flask', t: 'Doctoral support', d: 'Faculty pursuing a Ph.D. receive a reduced teaching load in the writing year and a research allowance.' },
            { icon: 'users', t: 'Mentoring duty', d: 'Each faculty member mentors fifteen students for four years and meets their parents once a semester.' },
          ].map((x) => (
            <div key={x.t} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-700 text-white">
                <Icon name={x.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
