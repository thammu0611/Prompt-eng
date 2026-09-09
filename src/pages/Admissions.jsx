import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
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
        eyebrow="Admissions 2026-27"
        title="Admissions"
        subtitle="A single application covers every programme you are eligible for. Applications open on 15 March 2026 and close on 30 May 2026."
      />

      {/* Steps */}
      <Section tone="light">
        <SectionTitle
          center
          eyebrow="How to apply"
          title="Four steps from application to first day"
          subtitle="The admission office is open on all working days and on Saturday mornings during the admission season."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s) => (
            <div key={s.step} className="card">
              <span className="font-display text-3xl font-bold text-brand-200">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Eligibility + dates */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Eligibility" title="Who can apply" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              {programmes.slice(0, 6).map((p) => (
                <div key={p.name} className="border-b border-slate-100 px-5 py-4 last:border-0">
                  <p className="font-medium text-brand-900">{p.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{p.eligibility}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Lateral entry to the second year of B.E. and B.Tech is available for diploma holders with 50% marks.
            </p>
          </div>

          <div>
            <SectionTitle eyebrow="Calendar" title="Important dates" />
            <ol className="relative space-y-6 border-l-2 border-brand-200 pl-7">
              {importantDates.map((d) => (
                <li key={d.event} className="relative">
                  <span className="absolute -left-[37px] h-4 w-4 rounded-full border-4 border-white bg-brand-600" />
                  <p className="text-sm font-semibold text-brand-800">{d.date}</p>
                  <p className="mt-1 text-sm text-slate-600">{d.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Fees */}
      <Section tone="tint">
        <SectionTitle
          eyebrow="Fees"
          title="Fee structure 2026-27"
          subtitle="Tuition may be paid in two instalments. Hostel and transport fees are billed separately."
        />
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-brand-900 text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">Programme</th>
                <th className="px-5 py-4 font-semibold">Tuition fee</th>
                <th className="px-5 py-4 font-semibold">Examination fee</th>
                <th className="px-5 py-4 font-semibold">Total payable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {fees.map((f) => (
                <tr key={f.programme} className="transition hover:bg-brand-50/50">
                  <td className="px-5 py-4 font-medium text-brand-900">{f.programme}</td>
                  <td className="px-5 py-4 text-slate-600">{f.tuition}</td>
                  <td className="px-5 py-4 text-slate-600">{f.exam}</td>
                  <td className="px-5 py-4 font-semibold text-brand-700">{f.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <SectionTitle eyebrow="Support" title="Scholarships and fee assistance" />
          <div className="grid gap-6 sm:grid-cols-2">
            {scholarships.map((s) => (
              <div key={s.name} className="card flex gap-4">
                <Icon name="trophy" className="mt-1 h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-semibold text-brand-900">{s.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Application form */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionTitle
              eyebrow="Apply online"
              title="Application enquiry form"
              subtitle="Fill this form and an admission officer will call you within two working days."
            />

            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
                <p>
                  Thank you. Your enquiry has been recorded and our admission office will contact you shortly. This is a
                  demonstration form, so no data leaves your browser.
                </p>
              </div>
            )}

            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" required value={form.name} onChange={update} className="field" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="phone">
                  Mobile number
                </label>
                <input id="phone" name="phone" required value={form.phone} onChange={update} className="field" placeholder="10 digit mobile number" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="email">
                  Email address
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={update} className="field" placeholder="name@example.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="programme">
                  Programme of interest
                </label>
                <select id="programme" name="programme" required value={form.programme} onChange={update} className="field">
                  <option value="">Select a programme</option>
                  {programmes.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="marks">
                  Qualifying percentage
                </label>
                <input id="marks" name="marks" value={form.marks} onChange={update} className="field" placeholder="e.g. 88%" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="message">
                  Questions for the admission office
                </label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={update} className="field" placeholder="Hostel, scholarship, transport..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit enquiry <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <aside className="h-fit rounded-3xl bg-brand-900 p-8 text-brand-50">
            <h3 className="font-display text-xl font-semibold !text-white">Documents to keep ready</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              {[
                '+2 or diploma marksheet and certificate',
                'Transfer and conduct certificate',
                'Community certificate, if applicable',
                'Entrance examination score card',
                'Aadhaar and four passport size photographs',
                'Income certificate for scholarship claims',
              ].map((d) => (
                <li key={d} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-sm font-semibold text-white">Admission helpline</p>
              <a href={`tel:${institute.admissionsPhone.replace(/\s/g, '')}`} className="mt-1 block font-display text-xl font-bold text-gold-400">
                {institute.admissionsPhone}
              </a>
              <a href={`mailto:${institute.admissionsEmail}`} className="mt-1 block text-sm text-brand-50/85">
                {institute.admissionsEmail}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
