import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { facilities, clubs } from '../data/site'

export default function CampusLife() {
  return (
    <>
      <PageHeader
        eyebrow="Campus life"
        title="Life on Campus"
        subtitle="A 42 acre residential campus at Vandalur with hostels, laboratories, a central library, a sports complex and nine student clubs."
      />

      <Section tone="light">
        <SectionTitle
          center
          eyebrow="Facilities"
          title="Everything within walking distance"
          subtitle="Academic blocks, residences and sports grounds sit on one campus, so nothing is more than a ten minute walk away."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.name} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={f.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Student clubs"
              title="Nine clubs, run by students"
              subtitle="Every club has a student convenor, a faculty advisor and an annual budget from the student welfare fund."
            />
            <div className="flex flex-wrap gap-3">
              {clubs.map((c) => (
                <span key={c} className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm text-brand-800">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="A day on campus" title="How the day runs" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              {[
                ['6.00 am', 'Hostel wake up, gym and track open'],
                ['8.30 am', 'First hour begins; attendance is marked in class'],
                ['1.00 pm', 'Lunch break, mess and cafeteria service'],
                ['2.00 pm', 'Laboratory sessions and project work'],
                ['4.30 pm', 'Club hour, sports practice and mentor meetings'],
                ['7.00 pm', 'Library reading hall and supervised study for first years'],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
                  <span className="w-20 shrink-0 text-sm font-semibold text-brand-700">{t}</span>
                  <span className="text-sm text-slate-600">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <SectionTitle
          center
          eyebrow="Support"
          title="Student welfare and safety"
          subtitle="Support systems that students can reach without an appointment."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Counselling cell', d: 'A full time counsellor available on all working days, with a confidential appointment system.' },
            { t: 'Anti ragging committee', d: 'A standing committee with student, faculty and parent members, and a 24 hour helpline.' },
            { t: 'Grievance redressal', d: 'Written complaints are acknowledged within two working days and closed within fifteen.' },
            { t: 'Women empowerment cell', d: 'Awareness programmes, self defence training and an internal complaints committee.' },
          ].map((x) => (
            <div key={x.t} className="card">
              <h3 className="font-display text-base font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
