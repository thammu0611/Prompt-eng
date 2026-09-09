import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { news, events, notices } from '../data/site'

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="Newsroom"
        title="News & Events"
        subtitle="Announcements from the campus, the academic calendar of events and current notices for students and parents."
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <SectionTitle eyebrow="Latest news" title="Campus announcements" />
            <div className="grid gap-6">
              {news.map((n) => (
                <article key={n.title} className="card">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">{n.tag}</span>
                    <span className="text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.text}</p>
                  <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
                    Read more <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid h-fit gap-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold">Notice board</h3>
              <ul className="mt-4 grid gap-3">
                {notices.map((n) => (
                  <li key={n} className="flex gap-3 border-b border-dashed border-slate-200 pb-3 text-sm text-slate-600 last:border-0 last:pb-0">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-brand-900 p-6 text-brand-50">
              <h3 className="font-display text-lg font-semibold !text-white">Subscribe to updates</h3>
              <p className="mt-2 text-sm text-brand-50/80">
                Parents and alumni can receive the monthly campus bulletin by email.
              </p>
              <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="Email address" className="field !border-white/20 !bg-white/10 !text-white placeholder:!text-brand-100/60" />
                <button type="submit" className="btn-gold w-full">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Calendar"
          title="Upcoming events"
          subtitle="Symposia, community work and industry sessions open to students of the institute and visiting colleges."
        />
        <div className="grid gap-5">
          {events.map((e) => (
            <article key={e.title} className="card flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-800 text-center text-white">
                <span className="px-1 text-xs font-semibold leading-tight">{e.date}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{e.text}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <Icon name="pin" className="h-3.5 w-3.5" /> {e.place}
                </p>
              </div>
              <button type="button" className="btn-outline shrink-0 !px-5 !py-2.5">
                Register
              </button>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
