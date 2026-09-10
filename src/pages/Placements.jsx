import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Figure, IndexRow } from '../components/Section'
import Icon from '../components/Icons'
import { placementStats, recruiters, placementTraining, topOffers } from '../data/site'

export default function Placements() {
  return (
    <>
      <PageHeader
        eyebrow="Training · Recruitment · Outcomes"
        title="Placements"
        subtitle="The training and placement cell, led by Dr. V. Sreedhar, prepares students from the first year and hosts recruiters from July to March."
      />

      <Section tone="ivory">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((s) => (
            <Figure key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">Four year path</p>
            <h2 className="display-lg">Training begins in the first semester</h2>
            <p className="lede mt-5">
              Employability training sits inside the timetable — not as an extra class after college hours.
            </p>
          </div>
          <div className="border-b border-ink-900/10">
            {placementTraining.map((t, i) => (
              <IndexRow key={t.year} n={String(i + 1).padStart(2, '0')} title={t.year} text={t.text} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <SectionTitle
          light
          eyebrow="Recruiters"
          title="Companies that hire from the campus"
          subtitle="One hundred and eighty six companies took part in the 2025-26 recruitment season."
        />
        <div className="grid gap-px bg-ivory-50/10 sm:grid-cols-3 lg:grid-cols-4">
          {recruiters.map((r) => (
            <div key={r} className="grid h-24 place-items-center bg-ink-950 px-4 text-center text-[11px] uppercase tracking-widest text-ivory-50/80">
              {r}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionTitle eyebrow="Highlights" title="Notable offers, 2025-26" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead>
              <tr className="border-b border-ink-900/25">
                {['Programme', 'Company', 'Role', 'Package'].map((h) => (
                  <th key={h} className="pb-4 pr-6 text-[10px] font-medium uppercase tracking-widest text-ink-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topOffers.map((o) => (
                <tr key={o.company} className="border-b border-ink-900/10">
                  <td className="py-5 pr-6 text-sm text-ink-800">{o.name}</td>
                  <td className="py-5 pr-6 font-display text-[19px] font-medium text-ink-900">{o.company}</td>
                  <td className="py-5 pr-6 text-sm text-ink-500">{o.role}</td>
                  <td className="num py-5 text-sm text-gold-600">{o.package}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-xs text-ink-400">
          Student names are withheld on the public website in line with the institute privacy policy.
        </p>
      </Section>

      <Section tone="white">
        <div className="grid gap-px bg-ink-900/10 lg:grid-cols-2">
          <div className="bg-ink-950 p-10 text-ivory-50/75">
            <p className="eyebrow eyebrow-light mb-6">For recruiters</p>
            <h3 className="display-md !text-ivory-50">Bring your requirement to the campus</h3>
            <p className="lede mt-4 text-[14.5px] !text-ivory-50/65">
              We host pre placement talks, written tests and interviews on campus, and can arrange video rounds. Share
              your requirement and we will send eligible student profiles within three working days.
            </p>
            <ul className="mt-7 grid gap-3 text-sm">
              {['Air conditioned interview halls and test laboratories', 'Wi-Fi and proctored online test support', 'Accommodation and transport for visiting teams'].map((x) => (
                <li key={x} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold mt-9">
              Contact the placement cell
            </Link>
          </div>

          <div className="bg-white p-10">
            <p className="eyebrow mb-6">For students</p>
            <h3 className="display-md">Registration opens in June</h3>
            <p className="lede mt-4 text-[14.5px]">
              To stay eligible you need 75 per cent attendance, no standing arrears and completion of the training
              modules for your year.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-ink-700">
              {[
                'Register on the placement portal with an updated resume',
                'Attend the mock interview and group discussion rounds',
                'Complete at least one internship before the final year',
                'Hold one offer at a time, under the one student one offer policy',
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
