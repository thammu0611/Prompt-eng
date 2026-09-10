import { Link } from 'react-router-dom'
import { Section, SectionTitle, Figure, IndexRow } from '../components/Section'
import Icon from '../components/Icons'
import Crest from '../components/Crest'
import {
  institute, student, stats, schools, news, testimonials,
  placementStats, recruiters, leadership,
} from '../data/site'

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink-950 text-ivory-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(201,162,39,.5) 1px, transparent 1px), linear-gradient(rgba(201,162,39,.25) 1px, transparent 1px)',
            backgroundSize: '148px 100%, 100% 74px',
          }}
        />
        <div
          className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px]"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,.20), transparent 60%)' }}
        />

        <div className="wrap relative pb-14 pt-20 sm:pt-24 lg:pb-20 lg:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:items-end">
            <div className="animate-rise">
              <p className="eyebrow eyebrow-light mb-7">Autonomous · Established {institute.established}</p>
              <h1 className="display-xl !text-ivory-50">
                Knowledge, character
                <br />
                and <span className="italic text-gold-300">service</span> — since {institute.established}.
              </h1>
              <div className="mt-9 h-px w-24 origin-left animate-draw bg-gold-400" />
              <p className="lede mt-8 !text-ivory-50/70">
                Thameem Institute of Technology educates engineers, technologists and managers on a forty two acre
                residential campus at Vandalur. Eleven departments, four research centres, and a mentor for every
                fifteen students.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-gold">
                  Admissions 2026-27 <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
                <Link to="/institute" className="btn-line-light">
                  The institute
                </Link>
              </div>
            </div>

            <aside className="animate-rise border border-ivory-50/15 bg-ink-900/60 p-8 backdrop-blur">
              <Crest className="h-12 w-12" />
              <p className="mt-6 font-display text-[22px] font-light leading-snug text-ivory-50">
                Applications for the 2026-27 academic year close on 30 May 2026.
              </p>
              <div className="mt-7 border-t border-ivory-50/15 pt-6">
                <p className="text-[10px] uppercase tracking-widest text-gold-300">Counselling helpline</p>
                <a
                  href={`tel:${institute.admissionsPhone.replace(/\s/g, '')}`}
                  className="num mt-2 block text-[26px] font-light !text-ivory-50 transition hover:!text-gold-300"
                >
                  {institute.admissionsPhone}
                </a>
                <p className="mt-2 text-xs text-ivory-50/55">Monday to Saturday, 9 am to 5 pm</p>
              </div>
            </aside>
          </div>

          {/* figures rail */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <Figure key={s.label} {...s} light />
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditation strip ──────────────────────────────── */}
      <div className="border-b border-ink-900/10 bg-ivory-100">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center text-[10px] uppercase tracking-widest text-ink-400">
          <span>NAAC “A+” accredited</span>
          <span className="hidden h-3 w-px bg-ink-900/15 sm:block" />
          <span>NBA accredited programmes</span>
          <span className="hidden h-3 w-px bg-ink-900/15 sm:block" />
          <span>Approved by AICTE</span>
          <span className="hidden h-3 w-px bg-ink-900/15 sm:block" />
          <span>NIRF band 101-150</span>
        </div>
      </div>

      {/* ── Introduction ─────────────────────────────────────── */}
      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow mb-6">The institute</p>
            <h2 className="display-lg">
              A campus built slowly,
              <br />
              in the right order.
            </h2>
          </div>
          <div>
            <p className="text-[17px] font-light leading-[1.9] text-ink-700">
              The founder set one rule in 1998: build the laboratory before you announce the course. Twenty seven years
              later that rule still governs how the institute grows — postgraduate programmes in 2005, the first
              research centre in 2008, autonomous status in 2017, and an innovation block in 2026.
            </p>
            <p className="lede mt-6">
              A quarter of every entering batch comes from government schools and rural districts, supported by the
              founder's scholarship fund. Six thousand four hundred students now study here, taught by three hundred and
              twelve faculty members, of whom one hundred and twenty eight hold a doctorate.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { to: '/institute', label: 'Heritage and governance' },
                { to: '/leadership', label: 'Chairman and deans' },
                { to: '/departments', label: 'Eleven departments' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-ink-800"
                >
                  <span className="h-px w-6 bg-gold-400 transition-all group-hover:w-10" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Schools ──────────────────────────────────────────── */}
      <Section tone="white">
        <SectionTitle
          eyebrow="Academics"
          title="Four schools of study"
          subtitle="Every school runs its own board of studies with two external academic members and two members from industry."
        />
        <div className="border-b border-ink-900/10">
          {schools.map((s, i) => (
            <Link key={s.name} to="/departments" className="group block">
              <div className="flex flex-col gap-4 border-t border-ink-900/10 py-8 md:flex-row md:items-baseline md:gap-10">
                <span className="num shrink-0 text-xs tracking-widest text-gold-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="md:w-[34%]">
                  <h3 className="display-md transition-colors group-hover:text-gold-600">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-400">{s.dept}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink-500 md:flex-1">{s.programmes}</p>
                <span className="num shrink-0 text-sm text-ink-400">{s.seats} seats</span>
                <Icon
                  name="arrow"
                  className="hidden h-4 w-4 shrink-0 text-gold-500 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 md:block"
                />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Chairman's word ──────────────────────────────────── */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <figure>
            <p className="eyebrow mb-7">From the chairman</p>
            <blockquote className="font-display text-[26px] font-light italic leading-[1.45] text-ink-900 sm:text-[34px]">
              “We measure ourselves by what our students can do on the day they graduate — not by what we taught them in
              the first week. That is why every semester ends with a project, and every student has a mentor who knows
              their name.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-400" />
              <span>
                <span className="block text-sm font-medium text-ink-900">{leadership[0].name}</span>
                <span className="block text-[10px] uppercase tracking-widest text-ink-400">{leadership[0].role}</span>
              </span>
            </figcaption>
          </figure>

          <div className="grid gap-5">
            {leadership.slice(1, 4).map((p) => (
              <div key={p.role} className="flex items-center gap-5 border border-ink-900/10 bg-white p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center border border-gold-400/50 font-display text-base text-gold-600">
                  {p.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink-900">{p.name}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-ink-400">{p.role}</span>
                </span>
              </div>
            ))}
            <Link to="/leadership" className="btn-line mt-2 self-start">
              All members of the board
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Placement figures ────────────────────────────────── */}
      <Section tone="ink">
        <SectionTitle
          light
          center
          eyebrow="Training and placements"
          title="The class of 2026"
          subtitle="One hundred and eighty six companies visited the campus this season, from core engineering to product firms."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((s) => (
            <Figure key={s.label} {...s} light />
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-x-9 gap-y-4 border-t border-ivory-50/10 pt-10 text-[11px] uppercase tracking-widest text-ivory-50/55">
          {recruiters.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/placements" className="btn-gold">
            The placement report <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Section>

      {/* ── Two plates ───────────────────────────────────────── */}
      <Section tone="ivory">
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            {
              eyebrow: 'Research',
              title: 'Four centres, sixty four scholars',
              text: 'Undergraduate students join funded research groups from the second year, publish with faculty mentors and file student patents through the institute IPR cell.',
              to: '/research',
              cta: 'Research and innovation',
            },
            {
              eyebrow: 'Campus life',
              title: 'Forty two acres, nine student clubs',
              text: 'Hostels for eighteen hundred residents, a central library open till midnight in examination weeks, a four hundred metre track, and a counselling cell open to every student without appointment.',
              to: '/campus-life',
              cta: 'Life on campus',
            },
          ].map((p) => (
            <article key={p.title} className="group border border-ink-900/10 bg-white p-10 transition-colors hover:border-gold-400">
              <p className="eyebrow mb-6">{p.eyebrow}</p>
              <h3 className="display-md">{p.title}</h3>
              <p className="lede mt-4 text-[14.5px]">{p.text}</p>
              <Link
                to={p.to}
                className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-ink-800"
              >
                <span className="h-px w-6 bg-gold-400 transition-all group-hover:w-10" />
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Newsroom ─────────────────────────────────────────── */}
      <Section tone="white">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionTitle className="!mb-0" eyebrow="Newsroom" title="From the campus" />
          <Link to="/news" className="btn-line">
            All news and notices
          </Link>
        </div>
        <div className="border-b border-ink-900/10">
          {news.slice(0, 3).map((n) => (
            <article key={n.title} className="group flex flex-col gap-4 border-t border-ink-900/10 py-8 md:flex-row md:gap-12">
              <div className="shrink-0 md:w-44">
                <p className="num text-sm text-ink-900">{n.date}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-500">{n.tag}</p>
              </div>
              <div>
                <h3 className="display-md transition-colors group-hover:text-gold-600">{n.title}</h3>
                <p className="lede mt-3 text-[14.5px]">{n.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Voices ───────────────────────────────────────────── */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow eyebrow-c mb-7">Voices</p>
          <blockquote className="font-display text-[24px] font-light italic leading-[1.5] text-ink-900 sm:text-[30px]">
            “{testimonials[0].quote}”
          </blockquote>
          <p className="mt-8 text-sm font-medium text-ink-900">{testimonials[0].name}</p>
          <p className="text-[10px] uppercase tracking-widest text-ink-400">{testimonials[0].role}</p>
        </div>
      </Section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="bg-ink-950 py-20 text-center text-ivory-50">
        <div className="wrap">
          <Crest className="mx-auto h-12 w-12" />
          <h2 className="display-lg mt-8 !text-ivory-50">Come and see the campus</h2>
          <p className="lede mx-auto mt-5 !text-ivory-50/65">
            Guided tours run every working Saturday morning with a student volunteer. Applications for 2026-27 are open
            until 30 May 2026.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="btn-gold">
              Begin an application
            </Link>
            <Link to="/contact" className="btn-line-light">
              Arrange a visit
            </Link>
          </div>
          <p className="mt-12 text-[10px] uppercase tracking-widest text-ivory-50/35">{student.note}</p>
        </div>
      </section>
    </>
  )
}
