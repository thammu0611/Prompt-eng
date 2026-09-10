import PageHeader from '../components/PageHeader'
import { Section, SectionTitle } from '../components/Section'
import Icon from '../components/Icons'
import { news, events, notices } from '../data/site'

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="Announcements · Calendar · Notices"
        title="News & Events"
        subtitle="Announcements from the campus, the calendar of events open to visiting colleges, and current notices for students and parents."
      />

      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_.6fr]">
          <div>
            <SectionTitle eyebrow="Latest news" title="From the campus" className="!mb-8" />
            <div className="border-b border-ink-900/10">
              {news.map((n) => (
                <article key={n.title} className="group flex flex-col gap-4 border-t border-ink-900/10 py-9 md:flex-row md:gap-12">
                  <div className="shrink-0 md:w-40">
                    <p className="num text-sm text-ink-900">{n.date}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-500">{n.tag}</p>
                  </div>
                  <div>
                    <h3 className="display-md transition-colors group-hover:text-gold-600">{n.title}</h3>
                    <p className="lede mt-3 text-[14.5px]">{n.text}</p>
                    <button type="button" className="mt-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-widest text-ink-800">
                      <span className="h-px w-6 bg-gold-400 transition-all group-hover:w-10" />
                      Read more
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid h-fit gap-10">
            <div>
              <p className="eyebrow mb-6">Notice board</p>
              <ul className="border-b border-ink-900/10">
                {notices.map((n) => (
                  <li key={n} className="border-t border-ink-900/10 py-4 text-sm leading-relaxed text-ink-600">
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-ink-900/10 bg-ink-950 p-8 text-ivory-50/70">
              <p className="eyebrow eyebrow-light mb-5">Campus bulletin</p>
              <p className="text-sm leading-relaxed">
                Parents and alumni can receive the monthly bulletin by email.
              </p>
              <form className="mt-6 grid gap-5" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="Email address" className="field-dark" aria-label="Email address" />
                <button type="submit" className="btn-gold w-full">Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle
          eyebrow="Calendar"
          title="Upcoming events"
          subtitle="Symposia, community work and industry sessions, open to students of the institute and visiting colleges."
        />
        <div className="border-b border-ink-900/10">
          {events.map((e) => (
            <article key={e.title} className="flex flex-col gap-5 border-t border-ink-900/10 py-8 md:flex-row md:items-center md:gap-12">
              <div className="shrink-0 md:w-36">
                <p className="num text-[19px] text-gold-600">{e.date}</p>
              </div>
              <div className="flex-1">
                <h3 className="display-md">{e.title}</h3>
                <p className="lede mt-2.5 text-[14.5px]">{e.text}</p>
                <p className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-400">
                  <Icon name="pin" className="h-3.5 w-3.5" /> {e.place}
                </p>
              </div>
              <button type="button" className="btn-line shrink-0">Register</button>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
