import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, IndexRow } from '../components/Section'
import Icon from '../components/Icons'
import { programmes } from '../data/site'

const levels = ['All levels', 'Undergraduate', 'Postgraduate', 'Research']

const calendar = [
  ['15 July 2026', 'Odd semester begins · orientation for the first year'],
  ['08 - 12 September 2026', 'Internal assessment I'],
  ['20 - 24 October 2026', 'Internal assessment II'],
  ['18 November 2026', 'Last working day of the odd semester'],
  ['24 Nov - 12 Dec 2026', 'End semester examinations'],
  ['02 January 2027', 'Even semester begins'],
  ['20 - 30 April 2027', 'End semester examinations, even semester'],
  ['15 May 2027', 'Results published and grade cards issued'],
]

export default function Academics() {
  const [level, setLevel] = useState('All levels')
  const rows = level === 'All levels' ? programmes : programmes.filter((p) => p.level === level)

  return (
    <>
      <PageHeader
        eyebrow="Curriculum · Programmes · Calendar"
        title="Academics"
        subtitle="As an autonomous institution the curriculum is framed here, revised every year with industry, and examined under the institute's own regulations."
      />

      {/* Academic model */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">How we teach</p>
            <h2 className="display-lg">The academic model</h2>
            <p className="lede mt-5">
              Four practices define teaching at the institute. They are reviewed by the academic council at the end of
              every semester.
            </p>
          </div>
          <div className="border-b border-ink-900/10">
            <IndexRow n="01" title="Outcome based curriculum" text="Every course has defined outcomes mapped to programme outcomes, and every assessment is mapped back to them." />
            <IndexRow n="02" title="A project every semester" text="From the first semester students build something — a circuit, a model, a small application or a field study." />
            <IndexRow n="03" title="Mentor groups of fifteen" text="One faculty mentor follows the same fifteen students for four years, with a parent meeting each semester." />
            <IndexRow n="04" title="Continuous assessment" text="Fifty marks from internal work — assignments, laboratory records, seminars — and fifty from the end semester examination." />
          </div>
        </div>
      </Section>

      {/* Programme table */}
      <Section tone="white">
        <SectionTitle
          eyebrow="Programmes"
          title="Courses offered in 2026-27"
          subtitle="Filter by level to see duration, sanctioned intake and eligibility for each programme."
        />

        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3">
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={`border-b pb-1 text-[10px] font-medium uppercase tracking-widest transition ${
                level === l ? 'border-gold-400 text-ink-900' : 'border-transparent text-ink-400 hover:text-ink-700'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="border-b border-ink-900/25">
                {['Programme', 'Level', 'Duration', 'Intake', 'Eligibility'].map((h) => (
                  <th key={h} className="pb-4 pr-6 text-[10px] font-medium uppercase tracking-widest text-ink-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.name} className="border-b border-ink-900/10 transition-colors hover:bg-ivory-100">
                  <td className="py-5 pr-6 font-display text-[19px] font-medium text-ink-900">{p.name}</td>
                  <td className="py-5 pr-6 text-xs uppercase tracking-widest text-gold-600">{p.level}</td>
                  <td className="py-5 pr-6 text-sm text-ink-500">{p.duration}</td>
                  <td className="num py-5 pr-6 text-sm">{p.intake}</td>
                  <td className="py-5 text-sm text-ink-500">{p.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-xs text-ink-400">
          Intake figures are as approved by AICTE for 2026-27 and are subject to revision.
        </p>
      </Section>

      {/* Calendar + evaluation */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Calendar" title="Academic calendar 2026-27" className="!mb-8" />
            <div className="border-b border-ink-900/10">
              {calendar.map(([d, e]) => (
                <div key={d} className="flex gap-6 border-t border-ink-900/10 py-4">
                  <span className="num w-48 shrink-0 text-sm text-ink-900">{d}</span>
                  <span className="text-sm text-ink-500">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Evaluation" title="How students are assessed" className="!mb-8" />
            <div className="grid gap-px bg-ink-900/10">
              {[
                ['Internal assessment', '50 marks — two written tests, assignments, laboratory records and a seminar.'],
                ['End semester examination', '50 marks — three hour written paper set and valued under the autonomous regulations.'],
                ['Laboratory courses', 'Continuous evaluation of experiments, a record book and a practical examination.'],
                ['Project work', 'Reviewed three times a semester by a panel, with a final viva voce.'],
                ['Attendance', 'A minimum of 75 per cent is required to sit the end semester examination.'],
              ].map(([t, d]) => (
                <div key={t} className="bg-ivory-100 p-6">
                  <p className="text-sm font-medium text-ink-900">{t}</p>
                  <p className="mt-1.5 text-sm text-ink-500">{d}</p>
                </div>
              ))}
            </div>
            <Link to="/admissions" className="btn-line mt-8">
              Admission details <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
