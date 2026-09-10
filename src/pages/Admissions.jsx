import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle, IndexRow } from '../components/Section'
import Icon from '../components/Icons'
import { institute, admissionSteps, importantDates, fees, scholarships, programmes } from '../data/site'

export default function Admissions() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', programme: '', marks: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', programme: '', marks: '', message: '' })
  }

  return (
    <>
      <PageHeader
        eyebrow="2026-27 academic year"
        title="Admissions"
        subtitle="One application covers every programme you are eligible for. Applications open on 15 March 2026 and close on 30 May 2026."
      />

      {/* Process */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-6">How to apply</p>
            <h2 className="display-lg">Four steps, start to first day</h2>
            <p className="lede mt-5">
              The admission office is open on all working days, and on Saturday mornings through the admission season.
            </p>
            <a href={`tel:${institute.admissionsPhone.replace(/\s/g, '')}`} className="btn-gold mt-8">
              {institute.admissionsPhone}
            </a>
          </div>
          <div className="border-b border-ink-900/10">
            {admissionSteps.map((s) => (
              <IndexRow key={s.step} n={s.step} title={s.title} text={s.text} />
            ))}
          </div>
        </div>
      </Section>

      {/* Dates and eligibility */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Calendar" title="Important dates" className="!mb-8" />
            <ol className="border-b border-ink-900/10">
              {importantDates.map((d) => (
                <li key={d.event} className="flex gap-6 border-t border-ink-900/10 py-5">
                  <span className="num w-40 shrink-0 text-sm text-gold-600">{d.date}</span>
                  <span className="text-sm text-ink-600">{d.event}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionTitle eyebrow="Eligibility" title="Who can apply" className="!mb-8" />
            <div className="border-b border-ink-900/10">
              {programmes.slice(0, 6).map((p) => (
                <div key={p.name} className="border-t border-ink-900/10 py-5">
                  <p className="font-display text-[19px] font-medium text-ink-900">{p.name}</p>
                  <p className="mt-1.5 text-sm text-ink-500">{p.eligibility}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-ink-400">
              Lateral entry to the second year of B.E. and B.Tech is open to diploma holders with 50 per cent marks.
            </p>
          </div>
        </div>
      </Section>

      {/* Fees */}
      <Section tone="paper">
        <SectionTitle
          eyebrow="Fees"
          title="Fee structure 2026-27"
          subtitle="Tuition may be paid in two instalments. Hostel and transport fees are billed separately."
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-ink-900/25">
                {['Programme', 'Tuition', 'Examination', 'Total payable'].map((h) => (
                  <th key={h} className="pb-4 pr-6 text-[10px] font-medium uppercase tracking-widest text-ink-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fees.map((f) => (
                <tr key={f.programme} className="border-b border-ink-900/10">
                  <td className="py-5 pr-6 font-display text-[19px] font-medium text-ink-900">{f.programme}</td>
                  <td className="num py-5 pr-6 text-sm">{f.tuition}</td>
                  <td className="num py-5 pr-6 text-sm">{f.exam}</td>
                  <td className="num py-5 text-sm text-gold-600">{f.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16">
          <SectionTitle eyebrow="Support" title="Scholarships and fee assistance" className="!mb-8" />
          <div className="grid gap-px bg-ink-900/10 sm:grid-cols-2">
            {scholarships.map((s) => (
              <div key={s.name} className="bg-ivory-100 p-8">
                <span className="block h-px w-10 bg-gold-400" />
                <h3 className="display-md mt-5 text-[22px]">{s.name}</h3>
                <p className="lede mt-3 text-[14.5px]">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Application form */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionTitle
              eyebrow="Apply online"
              title="Application enquiry"
              subtitle="Fill this form and an admission officer will call you within two working days."
              className="!mb-8"
            />

            {sent && (
              <div className="mb-8 flex items-start gap-3 border border-gold-400 bg-gold-100/40 p-5 text-sm text-ink-700">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <p>
                  Thank you — your enquiry has been recorded and the admission office will contact you shortly. This is a
                  demonstration form, so nothing leaves your browser.
                </p>
              </div>
            )}

            <form onSubmit={submit} className="grid gap-7 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="name">Full name</label>
                <input id="name" name="name" required value={form.name} onChange={update} className="field" placeholder="Your name" />
              </div>
              <div>
                <label className="label" htmlFor="phone">Mobile number</label>
                <input id="phone" name="phone" required value={form.phone} onChange={update} className="field" placeholder="10 digit number" />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={update} className="field" placeholder="name@example.com" />
              </div>
              <div>
                <label className="label" htmlFor="programme">Programme of interest</label>
                <select id="programme" name="programme" required value={form.programme} onChange={update} className="field">
                  <option value="">Select a programme</option>
                  {programmes.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label" htmlFor="marks">Qualifying percentage</label>
                <input id="marks" name="marks" value={form.marks} onChange={update} className="field" placeholder="e.g. 88%" />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="message">Questions for the admission office</label>
                <textarea id="message" name="message" rows="3" value={form.message} onChange={update} className="field" placeholder="Hostel, scholarship, transport…" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-ink w-full sm:w-auto">
                  Submit enquiry <Icon name="arrow" className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>

          <aside className="h-fit border border-ink-900/10 bg-ink-950 p-9 text-ivory-50/75">
            <p className="eyebrow eyebrow-light mb-6">Documents to keep ready</p>
            <ul className="grid gap-4 text-sm">
              {[
                '+2 or diploma marksheet and certificate',
                'Transfer and conduct certificate',
                'Community certificate, if applicable',
                'Entrance examination score card',
                'Aadhaar and four passport size photographs',
                'Income certificate for scholarship claims',
              ].map((d) => (
                <li key={d} className="flex gap-3 border-b border-ivory-50/10 pb-4 last:border-0 last:pb-0">
                  <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-ivory-50/15 pt-6">
              <p className="text-[10px] uppercase tracking-widest text-gold-300">Admission office</p>
              <a href={`mailto:${institute.admissionsEmail}`} className="mt-2 block text-sm hover:text-gold-300">
                {institute.admissionsEmail}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
