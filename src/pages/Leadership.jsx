import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, IndexRow } from '../components/Section'
import Icon from '../components/Icons'
import { leadership } from '../data/site'

const [chairman, ...deans] = leadership

export default function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="The board"
        title="Leadership"
        subtitle="The chairman and five deans form the governing team of the institute. They meet as the academic council on the first Monday of every month."
      />

      {/* Chairman */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="border border-ink-900/10 bg-white p-10 text-center">
            <span className="mx-auto grid h-28 w-28 place-items-center border border-gold-400/60 font-display text-3xl font-light text-gold-600">
              {chairman.initials}
            </span>
            <h2 className="display-md mt-8">{chairman.name}</h2>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-ink-400">{chairman.role}</p>
            <span className="mx-auto mt-6 block h-px w-12 bg-gold-400" />
            <p className="mt-6 text-sm text-ink-500">{chairman.qualification}</p>
          </div>

          <div>
            <p className="eyebrow mb-7">From the founder</p>
            <blockquote className="font-display text-[24px] font-light italic leading-[1.5] text-ink-900 sm:text-[30px]">
              “I began with one block and eleven teachers. What I wanted was not a large college but an honest one — a
              place where a student from a village school sits in the same laboratory, with the same equipment, as
              anyone else.”
            </blockquote>
            <p className="lede mt-7">{chairman.focus}</p>
          </div>
        </div>
      </Section>

      {/* Deans */}
      <Section tone="white">
        <SectionTitle
          eyebrow="Office bearers"
          title="The five deans"
          subtitle="Each dean holds a defined portfolio and reports to the academic council."
        />
        <div className="grid gap-px bg-ink-900/10 md:grid-cols-2 lg:grid-cols-3">
          {deans.map((p) => (
            <article key={p.role} className="group bg-white p-9 transition-colors hover:bg-ivory-100">
              <div className="flex items-center gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center border border-gold-400/50 font-display text-lg text-gold-600">
                  {p.initials}
                </span>
                <div>
                  <h3 className="font-display text-[21px] font-medium leading-tight text-ink-900">{p.name}</h3>
                  <p className="mt-1.5 text-[10px] uppercase tracking-widest text-gold-600">{p.role}</p>
                </div>
              </div>
              <span className="mt-7 block h-px w-full bg-ink-900/10" />
              <p className="mt-5 text-xs uppercase tracking-widest text-ink-400">{p.qualification}</p>
              <p className="lede mt-4 text-[14.5px]">{p.focus}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Responsibilities */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">Portfolios</p>
            <h2 className="display-lg">What each office does</h2>
            <Link to="/faculty" className="btn-line mt-8">
              Heads of department <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="border-b border-ink-900/10">
            <IndexRow n="01" title="Academics" text="Curriculum design, the autonomous examination system, timetables and outcome based accreditation." />
            <IndexRow n="02" title="Research and development" text="Funded projects, the IPR cell, doctoral admissions and collaboration with national laboratories." />
            <IndexRow n="03" title="Student affairs" text="Mentoring, clubs, hostels, counselling, discipline and the student welfare committee." />
            <IndexRow n="04" title="Examinations and quality" text="Evaluation, results, the internal quality assurance cell and the annual academic audit." />
            <IndexRow n="05" title="Training and placements" text="Recruiter relationships, internships and the four year employability training path." />
          </div>
        </div>
      </Section>
    </>
  )
}
