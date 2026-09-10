import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Stat } from '../components/Section'
import Icon from '../components/Icons'
import { placementStats, recruiters, placementTraining, topOffers } from '../data/site'

export default function Placements() {
  return (
    <>
      <PageHeader
        eyebrow="Training and placements"
        title="Placements"
        subtitle="The training and placement cell, led by Dr. V. Sreedhar, prepares students from the first year and hosts recruiters from July to March."
      />

      <Section tone="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Four year path"
          title="Training begins in the first semester"
          subtitle="Employability training is part of the timetable, not an add on class after college hours."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placementTraining.map((t, i) => (
            <div key={t.year} className="card">
              <span className="font-display text-3xl font-bold text-brand-200">{`0${i + 1}`}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{t.year}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionTitle
          eyebrow="Recruiters"
          title="Companies that hire from the campus"
          subtitle="One hundred and eighty six companies took part in the 2025-26 recruitment season."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {recruiters.map((r) => (
            <div key={r} className="grid h-20 place-items-center rounded-2xl border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-brand-800 shadow-card">
              {r}
            </div>
          ))}
        </div>

        <div className="mt-14">
          <SectionTitle eyebrow="Highlights" title="Notable offers, 2025-26" />
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-brand-900 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Programme</th>
                  <th className="px-5 py-4 font-semibold">Company</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                  <th className="px-5 py-4 font-semibold">Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topOffers.map((o) => (
                  <tr key={o.company} className="transition hover:bg-brand-50/50">
                    <td className="px-5 py-4 font-medium text-brand-900">{o.name}</td>
                    <td className="px-5 py-4 text-slate-600">{o.company}</td>
                    <td className="px-5 py-4 text-slate-600">{o.role}</td>
                    <td className="px-5 py-4 font-semibold text-brand-700">{o.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Student names are withheld on the public website in line with the institute privacy policy.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-900 p-8 text-brand-50">
            <h3 className="font-display text-xl font-semibold !text-white">For recruiters</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-50/85">
              We host pre placement talks, written tests and interviews on campus, and can arrange video rounds. Share
              your requirement with the placement cell and we will send eligible student profiles within three working
              days.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {['Air conditioned interview halls and test labs', 'Wi-Fi and proctored online test support', 'Accommodation and transport for visiting teams'].map((x) => (
                <li key={x} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold mt-7">
              Contact the placement cell
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold">For students</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Registration for the placement season opens in June for final year students. To stay eligible you need
              75% attendance, no standing arrears and completion of the training modules for your year.
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700">
              {[
                'Register on the placement portal with an updated resume',
                'Attend the mock interview and group discussion rounds',
                'Complete at least one internship before the final year',
                'Keep one company offer at a time, as per the one student one offer policy',
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
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
