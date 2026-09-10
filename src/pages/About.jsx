import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Stat } from '../components/Section'
import Icon from '../components/Icons'
import { institute, student, milestones, leadership, stats } from '../data/site'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="About the Institute"
        subtitle={`${institute.name} is ${institute.affiliation.toLowerCase()}, serving students from across Tamil Nadu and beyond since ${institute.established}.`}
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Twenty seven years of steady, unglamorous work.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                The institute was founded in 1998 by Dr. M. Thameem Ansari with a single academic block, eleven
                teachers and a conviction that a rigorous technical education should not depend on a family's income.
                The first batch of 180 students graduated in 2002; sixty of them were the first in their family to
                finish a degree.
              </p>
              <p>
                Growth since then has been deliberate. Postgraduate programmes arrived in 2005, the first research
                centre in 2008, NBA accreditation in 2012 and autonomous status in 2017. Each expansion followed the
                same rule the founder set: build the laboratory before you announce the course.
              </p>
              <p>
                Today eleven departments, 312 faculty members and 6,400 students share a 42 acre residential campus at
                Vandalur. The institute continues to reserve a quarter of its seats for students from government
                schools and rural districts, supported by the founder's scholarship fund.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-brand-100 bg-white p-7 shadow-card">
            <h3 className="font-display text-lg font-semibold">Institute at a glance</h3>
            <dl className="mt-5 grid gap-4 text-sm">
              {[
                ['Established', institute.established],
                ['Campus', '42 acres, residential, Vandalur'],
                ['Departments', 'Eleven across four schools'],
                ['Students', '6,400 (UG, PG and research)'],
                ['Faculty', '312, of whom 128 hold a doctorate'],
                ['Status', 'Autonomous since 2017'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-dashed border-slate-200 pb-3">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="text-right font-medium text-brand-900">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">{institute.accreditation}</p>
          </aside>
        </div>
      </Section>

      {/* Vision, mission, values */}
      <Section tone="white">
        <SectionTitle center eyebrow="Direction" title="Vision, mission and values" />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name="cap" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              To be an institution where competent, ethical professionals are formed, and where research answers the
              practical problems of the region we serve.
            </p>
          </div>
          <div className="card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name="check" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">Mission</h3>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              <li>Deliver an outcome based curriculum with strong laboratory practice.</li>
              <li>Keep education affordable through scholarships and fee support.</li>
              <li>Build research capacity that industry and government can use.</li>
              <li>Develop character through service, sport and community work.</li>
            </ul>
          </div>
          <div className="card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name="heart" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">Values</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Knowledge pursued honestly, character shown in small things, and service to those who have less. These
              three words appear on the institute seal and in every convocation address.
            </p>
          </div>
        </div>
      </Section>

      {/* Milestones */}
      <Section tone="tint">
        <SectionTitle eyebrow="Timeline" title="Milestones" subtitle="A short history of the institute in six moments." />
        <ol className="relative space-y-8 border-l-2 border-brand-200 pl-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[42px] grid h-7 w-7 place-items-center rounded-full bg-brand-700 text-[10px] font-bold text-white">
                ●
              </span>
              <p className="font-display text-xl font-bold text-brand-800">{m.year}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Leadership */}
      <Section tone="white">
        <SectionTitle
          center
          eyebrow="Leadership"
          title="The chairman and deans"
          subtitle="The governing team responsible for academics, research, student affairs, examinations and placements."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <article key={p.name} className="card text-center">
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-900 font-display text-xl font-bold text-white">
                {p.initials}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-700">{p.role}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{p.qualification}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.focus}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/faculty" className="btn-outline">
            Meet the faculty <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Numbers */}
      <Section tone="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-dashed border-brand-300 bg-white p-6 text-center">
          <p className="eyebrow">Project information</p>
          <p className="mt-2 text-sm text-slate-600">{student.note}</p>
        </div>
      </Section>
    </>
  )
}
