import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Figure } from '../components/Section'
import Icon from '../components/Icons'
import { departments, schools } from '../data/site'

const filters = ['All schools', ...schools.map((s) => s.name)]

export default function Departments() {
  const [school, setSchool] = useState('All schools')
  const list = school === 'All schools' ? departments : departments.filter((d) => d.school === school)

  return (
    <>
      <PageHeader
        eyebrow="Eleven departments"
        title="Departments"
        subtitle="Each department is led by a head of department, maintains its own laboratories and revises its syllabus every year through a board of studies."
      />

      <Section tone="ivory">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Figure value="11" label="Teaching departments" />
          <Figure value="64" label="Laboratories" />
          <Figure value="312" label="Faculty members" />
          <Figure value="04" label="Schools of study" />
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Directory"
          title="Departments and heads"
          subtitle="Filter by school to see the departments grouped under it."
        />

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setSchool(f)}
              className={`border-b pb-1 text-[10px] font-medium uppercase tracking-widest transition ${
                school === f ? 'border-gold-400 text-ink-900' : 'border-transparent text-ink-400 hover:text-ink-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="border-b border-ink-900/10">
          {list.map((d) => (
            <article key={d.code} className="group grid gap-4 border-t border-ink-900/10 py-8 md:grid-cols-[90px_1.1fr_1fr_auto] md:items-baseline md:gap-10">
              <span className="num text-xs tracking-widest text-gold-500">{d.code}</span>
              <div>
                <h3 className="font-display text-[22px] font-medium leading-snug text-ink-900 transition-colors group-hover:text-gold-600">
                  {d.name}
                </h3>
                <p className="mt-1.5 text-[10px] uppercase tracking-widest text-ink-400">{d.school}</p>
              </div>
              <div>
                <p className="text-sm text-ink-600">{d.focus}</p>
                <p className="mt-2 text-xs text-ink-400">Head of department · {d.head}</p>
              </div>
              <div className="flex gap-8 text-right md:block">
                <p className="num text-lg text-ink-900">{d.faculty}</p>
                <p className="text-[10px] uppercase tracking-widest text-ink-400">faculty</p>
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="text-sm text-ink-400">No departments listed under this school.</p>}
      </Section>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-6">Laboratories</p>
            <h2 className="display-lg">Sixty four laboratories, one rule</h2>
            <p className="lede mt-5">
              No course is announced before its laboratory is ready. Departments maintain their own equipment register,
              and every laboratory publishes its utilisation record at the end of each semester.
            </p>
            <Link to="/academics" className="btn-line mt-8">
              Programmes offered <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-px bg-ink-900/10 sm:grid-cols-2">
            {[
              ['High performance computing', 'School of Computing'],
              ['VLSI and embedded design', 'Electrical Sciences'],
              ['CAD, CAM and metrology', 'Mechanical & Civil'],
              ['Structural testing', 'Mechanical & Civil'],
              ['Process control and automation', 'Electrical Sciences'],
              ['Renewable energy', 'Electrical Sciences'],
            ].map(([n, s]) => (
              <div key={n} className="bg-ivory-100 p-6">
                <p className="text-sm font-medium text-ink-900">{n}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ink-400">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
