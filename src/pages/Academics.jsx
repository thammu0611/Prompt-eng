import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { schools, programmes } from '../data/site'

const levels = ['All levels', 'Undergraduate', 'Postgraduate', 'Research']

export default function Academics() {
  const [level, setLevel] = useState('All levels')
  const rows = level === 'All levels' ? programmes : programmes.filter((p) => p.level === level)

  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Programmes and Departments"
        subtitle="Eleven departments grouped into four schools, offering undergraduate, postgraduate and doctoral programmes under the autonomous curriculum."
      />

      <Section tone="light">
        <SectionTitle
          eyebrow="Schools"
          title="Four schools of study"
          subtitle="Each school runs its own board of studies with two external academic members and two industry members."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {schools.map((s) => (
            <div key={s.name} className="card flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.dept}</p>
                <p className="mt-3 text-sm font-medium text-brand-700">{s.programmes}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Sanctioned intake · {s.seats} seats</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Programme table */}
      <Section tone="white">
        <SectionTitle
          eyebrow="Programme list"
          title="Courses offered in 2026-27"
          subtitle="Filter by level to see duration, intake and eligibility for each programme."
        />
        <div className="mb-6 flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                level === l ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-brand-900 text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">Programme</th>
                <th className="px-5 py-4 font-semibold">Level</th>
                <th className="px-5 py-4 font-semibold">Duration</th>
                <th className="px-5 py-4 font-semibold">Intake</th>
                <th className="px-5 py-4 font-semibold">Eligibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((p) => (
                <tr key={p.name} className="transition hover:bg-brand-50/50">
                  <td className="px-5 py-4 font-medium text-brand-900">{p.name}</td>
                  <td className="px-5 py-4 text-slate-600">{p.level}</td>
                  <td className="px-5 py-4 text-slate-600">{p.duration}</td>
                  <td className="px-5 py-4 text-slate-600">{p.intake}</td>
                  <td className="px-5 py-4 text-slate-600">{p.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Intake figures are as approved by AICTE for the academic year 2026-27 and are subject to revision.
        </p>
      </Section>

      {/* Teaching approach */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="How we teach" title="The academic model" />
            <div className="grid gap-4">
              {[
                { t: 'Outcome based curriculum', d: 'Every course has defined outcomes mapped to programme outcomes, and every assessment is mapped back to them.' },
                { t: 'A project every semester', d: 'From the first semester students build something: a circuit, a model, a small application or a field study.' },
                { t: 'Mentor groups of fifteen', d: 'One faculty mentor follows the same fifteen students for four years, including a parent meeting each semester.' },
                { t: 'Continuous assessment', d: 'Fifty marks from internal work - assignments, laboratory records, seminars - and fifty from the end semester examination.' },
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
            <SectionTitle eyebrow="Calendar" title="Academic calendar 2026-27" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              {[
                ['15 July 2026', 'Odd semester begins, orientation for first year'],
                ['08 - 12 Sep 2026', 'Internal assessment I'],
                ['20 - 24 Oct 2026', 'Internal assessment II'],
                ['18 Nov 2026', 'Last working day, odd semester'],
                ['24 Nov - 12 Dec 2026', 'End semester examinations'],
                ['02 Jan 2027', 'Even semester begins'],
                ['20 - 30 Apr 2027', 'End semester examinations, even semester'],
                ['15 May 2027', 'Results published and grade cards issued'],
              ].map(([d, e]) => (
                <div key={d} className="flex gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
                  <span className="w-40 shrink-0 text-sm font-semibold text-brand-700">{d}</span>
                  <span className="text-sm text-slate-600">{e}</span>
                </div>
              ))}
            </div>
            <Link to="/admissions" className="btn-primary mt-6">
              Admission details <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
