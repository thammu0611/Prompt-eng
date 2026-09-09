import { Link } from 'react-router-dom'
import { Section, SectionTitle, Stat } from '../components/Section'
import Icon from '../components/Icons'
import {
  institute, student, stats, highlights, schools, news, events,
  testimonials, placementStats, recruiters,
} from '../data/site'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 10%, rgba(34,160,110,.55), transparent 45%), radial-gradient(circle at 90% 25%, rgba(227,178,60,.32), transparent 45%), radial-gradient(circle at 60% 100%, rgba(17,102,73,.65), transparent 55%)',
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div className="animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-gold-400 ring-1 ring-white/15">
              <Icon name="cap" className="h-4 w-4" />
              Admissions open for the 2026-27 academic year
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] !text-white sm:text-5xl lg:text-[56px]">
              An institute built on <span className="text-gold-400">knowledge, character</span> and service.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-50/85">
              {institute.name} has been preparing engineers, technologists and managers since {institute.established}.
              Autonomous, NAAC A+ accredited and rooted in a 42 acre residential campus on the southern edge of Chennai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="btn-gold">
                Apply for admission <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/academics" className="btn border border-white/30 text-white hover:bg-white hover:text-brand-900">
                Explore programmes
              </Link>
            </div>
            <p className="mt-8 text-xs text-brand-100/60">{institute.accreditation}</p>
          </div>

          <div className="relative animate-fadeUp rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">At a glance</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-brand-950/40 p-4 ring-1 ring-white/10">
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-brand-100/70">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-gold-400/95 p-5 text-brand-950">
              <p className="text-sm font-semibold">Counselling helpline</p>
              <a href={`tel:${institute.admissionsPhone.replace(/\s/g, '')}`} className="font-display text-xl font-bold">
                {institute.admissionsPhone}
              </a>
              <p className="mt-1 text-xs">Speak to an admission officer, Monday to Saturday.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick tiles */}
      <div className="container-x -mt-10 relative z-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: 'cap', title: 'Undergraduate admission', text: 'B.E. and B.Tech across seven branches.', to: '/admissions' },
            { icon: 'book', title: 'Postgraduate & research', text: 'M.E., MCA, MBA and Ph.D. programmes.', to: '/academics' },
            { icon: 'users', title: 'Campus and hostel life', text: 'Residences, clubs, sports and support.', to: '/campus-life' },
          ].map((t) => (
            <Link key={t.title} to={t.to} className="card group flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                <Icon name={t.icon} />
              </span>
              <span>
                <span className="block font-display text-base font-semibold text-brand-900">{t.title}</span>
                <span className="mt-1 block text-sm text-slate-500">{t.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* About snippet */}
      <Section tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About the institute</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              A campus where teaching, research and mentoring sit together.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              What began in 1998 with three engineering branches and 180 students is today an autonomous institution
              with eleven departments, four research centres and 6,400 students. Our academic model is simple: small
              mentor groups, an outcome based curriculum reviewed with industry every year, and a project in every
              semester from the first year onwards.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Autonomous status since 2017',
                'Mentor groups of fifteen students',
                'Four funded research centres',
                'Ninety four percent placement rate',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-slate-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline mt-8">
              Read our story <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl bg-brand-900 p-8 text-brand-50 shadow-soft">
            <Icon name="quote" className="h-9 w-9 text-gold-400" />
            <p className="mt-5 font-display text-lg leading-relaxed text-white">
              "We measure ourselves by what our students can do on the day they graduate, not by what we taught them
              in the first week. That is why every semester ends with a project and every student has a mentor."
            </p>
            <div className="mt-6 border-t border-white/15 pt-5">
              <p className="font-semibold text-white">Dr. S. Shameera Begum</p>
              <p className="text-sm text-brand-100/75">Dean - Academics</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why choose */}
      <Section tone="white">
        <SectionTitle
          center
          eyebrow="Why Thameem Institute"
          title="Four commitments we keep every year"
          subtitle="These are the promises the academic council reviews at the end of each semester."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={h.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Schools */}
      <Section tone="tint">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Academics"
            title="Four schools, eleven departments"
            subtitle="Undergraduate, postgraduate and doctoral programmes across engineering, science and management."
          />
          <Link to="/academics" className="btn-outline mb-10">
            All programmes
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {schools.map((s) => (
            <div key={s.name} className="card flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.dept}</p>
                <p className="mt-3 text-sm font-medium text-brand-700">{s.programmes}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Sanctioned intake · {s.seats} seats</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Placement band */}
      <section className="relative overflow-hidden bg-brand-900 py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(227,178,60,.35), transparent 45%)' }}
        />
        <div className="container-x relative">
          <SectionTitle
            light
            center
            eyebrow="Training and placements"
            title="Where the class of 2026 is heading"
            subtitle="One hundred and eighty six companies visited the campus this season, from core engineering to product firms."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {placementStats.map((s) => (
              <Stat key={s.label} {...s} light />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {recruiters.slice(0, 10).map((r) => (
              <span key={r} className="rounded-full bg-white/10 px-4 py-2 text-sm text-brand-50 ring-1 ring-white/15">
                {r}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/placements" className="btn-gold">
              Placement report <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News and events */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionTitle eyebrow="Newsroom" title="Latest from the campus" />
            <div className="grid gap-5">
              {news.slice(0, 3).map((n) => (
                <article key={n.title} className="card !p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">{n.tag}</span>
                    <span className="text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.text}</p>
                </article>
              ))}
            </div>
            <Link to="/news" className="btn-outline mt-8">
              All news and notices
            </Link>
          </div>

          <div>
            <SectionTitle eyebrow="Calendar" title="Upcoming events" />
            <div className="grid gap-4">
              {events.slice(0, 4).map((e) => (
                <div key={e.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-sand-50 p-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-800 text-center text-white">
                    <span className="text-[11px] font-semibold leading-tight">{e.date.replace(' ', '\n')}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-900">{e.title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{e.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="light">
        <SectionTitle center eyebrow="Voices" title="What our community says" />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card">
              <Icon name="quote" className="h-8 w-8 text-gold-400" />
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">{t.quote}</blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-brand-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container-x">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl font-bold !text-white sm:text-3xl">
            Applications for 2026-27 close on 30 May 2026
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-brand-50/85 sm:text-base">
            Apply online in fifteen minutes, or visit the campus on any working Saturday for a guided tour with a
            student volunteer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/admissions" className="btn-gold">
              Start your application
            </Link>
            <Link to="/contact" className="btn border border-white/30 text-white hover:bg-white hover:text-brand-900">
              Book a campus visit
            </Link>
          </div>
          <p className="mt-8 text-xs text-brand-100/60">{student.note}</p>
        </div>
      </section>
    </>
  )
}
