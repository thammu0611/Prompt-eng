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
        eyebrow="Write · Call · Visit"
        title="Contact"
        subtitle="The office is open on all working days, and guided campus tours run every Saturday morning with a student volunteer."
      />

      <Section tone="ivory">
        <div className="grid gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: 'pin', t: 'Campus', d: institute.address },
            { icon: 'phone', t: 'Telephone', d: `${institute.phone} · office\n${institute.admissionsPhone} · admissions` },
            { icon: 'mail', t: 'Email', d: `${institute.email}\n${institute.admissionsEmail}` },
            { icon: 'clock', t: 'Office hours', d: institute.hours },
          ].map((c) => (
            <div key={c.t} className="bg-ivory-50 p-8">
              <Icon name={c.icon} className="h-5 w-5 text-gold-500" />
              <p className="mt-6 text-[10px] uppercase tracking-widest text-ink-400">{c.t}</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-700">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <SectionTitle
              eyebrow="Enquiry"
              title="Send us a message"
              subtitle="General enquiries are answered within two working days. For admission queries please use the admission helpline."
              className="!mb-8"
            />

            {sent && (
              <div className="mb-8 flex items-start gap-3 border border-gold-400 bg-gold-100/40 p-5 text-sm text-ink-700">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <p>Thank you for writing to us. This is a demonstration form, so your message is not sent anywhere.</p>
              </div>
            )}

            <form onSubmit={submit} className="grid gap-7 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="cname">Your name</label>
                <input id="cname" name="name" required value={form.name} onChange={update} className="field" placeholder="Full name" />
              </div>
              <div>
                <label className="label" htmlFor="cemail">Email address</label>
                <input id="cemail" name="email" type="email" required value={form.email} onChange={update} className="field" placeholder="name@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="csubject">Subject</label>
                <input id="csubject" name="subject" required value={form.subject} onChange={update} className="field" placeholder="What is this about?" />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="cmessage">Message</label>
                <textarea id="cmessage" name="message" rows="4" required value={form.message} onChange={update} className="field" placeholder="Type your message" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-ink w-full sm:w-auto">
                  Send message <Icon name="arrow" className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-8">
            <div className="border border-ink-900/10">
              <div className="relative h-64 bg-ink-950">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(201,162,39,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,.5) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-center text-ivory-50">
                  <div>
                    <Icon name="pin" className="mx-auto h-7 w-7 text-gold-400" />
                    <p className="mt-4 font-display text-[24px] font-light">Vandalur campus</p>
                    <p className="mt-1.5 text-[10px] uppercase tracking-widest text-ivory-50/55">
                      GST Road, opposite the zoological park
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-7">
                <p className="text-[10px] uppercase tracking-widest text-ink-400">How to reach us</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  Vandalur railway station is 1.5 km away on the Chennai Beach to Chengalpattu line. Buses on the GST
                  Road route stop at the campus gate. The airport is 18 km to the north.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-6">Department contacts</p>
              <div className="border-b border-ink-900/10">
                {departmentContacts.map((d) => (
                  <div key={d.name} className="flex flex-wrap items-baseline justify-between gap-3 border-t border-ink-900/10 py-4">
                    <p className="text-sm font-medium text-ink-900">{d.name}</p>
                    <div className="text-right text-sm">
                      <p className="num text-ink-600">{d.phone}</p>
                      <a href={`mailto:${d.email}`} className="text-gold-600 hover:text-gold-500">
                        {d.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-ink-900/10 p-8 text-center">
          <p className="eyebrow eyebrow-c mb-3">Project information</p>
          <p className="text-sm text-ink-500">{student.note}</p>
        </div>
      </Section>
    </>
  )
}
