import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { institute, departmentContacts, student } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Write to us, call the office or visit the campus on any working day. Guided campus tours run on Saturday mornings."
      />

      <Section tone="light">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: 'pin', t: 'Campus address', d: institute.address },
            { icon: 'phone', t: 'Telephone', d: `${institute.phone} (office)\n${institute.admissionsPhone} (admissions)` },
            { icon: 'mail', t: 'Email', d: `${institute.email}\n${institute.admissionsEmail}` },
            { icon: 'clock', t: 'Office hours', d: institute.hours },
          ].map((c) => (
            <div key={c.t} className="card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={c.icon} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{c.t}</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <SectionTitle
              eyebrow="Enquiry"
              title="Send us a message"
              subtitle="General enquiries are answered within two working days. For admission queries please use the admission helpline."
            />

            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
                <p>Thank you for writing to us. This is a demonstration form, so your message is not sent anywhere.</p>
              </div>
            )}

            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="cname">
                  Your name
                </label>
                <input id="cname" name="name" required value={form.name} onChange={update} className="field" placeholder="Full name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="cemail">
                  Email address
                </label>
                <input id="cemail" name="email" type="email" required value={form.email} onChange={update} className="field" placeholder="name@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="csubject">
                  Subject
                </label>
                <input id="csubject" name="subject" required value={form.subject} onChange={update} className="field" placeholder="What is this about?" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="cmessage">
                  Message
                </label>
                <textarea id="cmessage" name="message" rows="5" required value={form.message} onChange={update} className="field" placeholder="Type your message here" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
              <div className="relative h-64 bg-gradient-to-br from-brand-600 to-brand-900">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)',
                    backgroundSize: '38px 38px',
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-center text-white">
                  <div>
                    <Icon name="pin" className="mx-auto h-9 w-9 text-gold-400" />
                    <p className="mt-3 font-display text-lg font-semibold">Vandalur campus</p>
                    <p className="mt-1 text-xs text-brand-50/80">GST Road, opposite the zoological park</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 text-sm text-slate-600">
                <p className="font-medium text-brand-900">How to reach us</p>
                <p className="mt-2">
                  Vandalur railway station is 1.5 km away on the Chennai Beach to Chengalpattu line. Buses on the GST
                  Road route stop at the campus gate. The airport is 18 km to the north.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold">Department contacts</h3>
              <div className="mt-4 grid gap-4">
                {departmentContacts.map((d) => (
                  <div key={d.name} className="border-b border-dashed border-slate-200 pb-4 last:border-0 last:pb-0">
                    <p className="font-medium text-brand-900">{d.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{d.phone}</p>
                    <a href={`mailto:${d.email}`} className="text-sm link-quiet">
                      {d.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6 text-center">
          <p className="eyebrow">Project information</p>
          <p className="mt-2 text-sm text-slate-600">{student.note}</p>
        </div>
      </Section>
    </>
  )
}
