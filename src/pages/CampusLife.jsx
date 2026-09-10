import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, Figure } from '../components/Section'
import Icon from '../components/Icons'
import { facilities, clubs } from '../data/site'

const day = [
  ['06.00', 'Hostel wake up; gymnasium and track open'],
  ['08.30', 'First hour begins, attendance marked in class'],
  ['13.00', 'Lunch break, mess and cafeteria service'],
  ['14.00', 'Laboratory sessions and project work'],
  ['16.30', 'Club hour, sports practice and mentor meetings'],
  ['19.00', 'Library reading hall; supervised study for the first year'],
]

export default function CampusLife() {
  return (
    <>
      <PageHeader
        eyebrow="Residence · Clubs · Welfare"
        title="Campus Life"
        subtitle="A forty two acre residential campus at Vandalur, where academic blocks, hostels and sports grounds are never more than a ten minute walk apart."
      />

      <Section tone="ivory">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Figure value="42" label="Acres of campus" />
          <Figure value="1,800" label="Hostel beds" />
          <Figure value="52" label="Laboratories" />
          <Figure value="09" label="Student clubs" />
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Facilities"
          title="Everything within walking distance"
          subtitle="The campus is residential by design, so the library, laboratories and grounds stay open well past class hours."
        />
        <div className="grid gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.name} className="bg-white p-8">
              <Icon name={f.icon} className="h-6 w-6 text-gold-500" />
              <h3 className="display-md mt-6 text-[23px]">{f.name}</h3>
              <p className="lede mt-3 text-[14.5px]">{f.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Student clubs"
              title="Nine clubs, run by students"
              subtitle="Every club has a student convenor, a faculty advisor and an annual budget from the student welfare fund."
              className="!mb-8"
            />
            <ul className="border-b border-ink-900/10">
              {clubs.map((c, i) => (
                <li key={c} className="flex items-baseline gap-5 border-t border-ink-900/10 py-4">
                  <span className="num text-[11px] tracking-widest text-gold-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-ink-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle eyebrow="A day on campus" title="How the day runs" className="!mb-8" />
            <div className="border-b border-ink-900/10">
              {day.map(([t, d]) => (
                <div key={t} className="flex gap-6 border-t border-ink-900/10 py-4">
                  <span className="num w-16 shrink-0 text-sm text-gold-600">{t}</span>
                  <span className="text-sm text-ink-600">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <SectionTitle
          light
          eyebrow="Welfare and safety"
          title="Support a student can reach without an appointment"
        />
        <div className="grid gap-px bg-ivory-50/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Counselling cell', 'A full time counsellor on all working days, with a confidential appointment system.'],
            ['Anti ragging committee', 'Student, faculty and parent members, and a helpline open at all hours.'],
            ['Grievance redressal', 'Written complaints acknowledged in two working days and closed within fifteen.'],
            ['Women empowerment cell', 'Awareness programmes, self defence training and an internal complaints committee.'],
          ].map(([t, d]) => (
            <div key={t} className="bg-ink-950 p-8">
              <span className="block h-px w-8 bg-gold-400" />
              <h3 className="mt-5 font-display text-[21px] font-medium text-ivory-50">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-50/60">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
