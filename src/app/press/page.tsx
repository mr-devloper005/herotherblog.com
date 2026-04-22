import Link from 'next/link'
import { ArrowRight, Calendar, Download, FileText, Mail, Newspaper } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

const articles = [
  { outlet: 'TechCrunch', title: 'How a small library is reshaping how we share PDFs', date: 'October 8, 2026', url: '#' },
  { outlet: 'The Verge', title: 'The open-knowledge startup you should know about', date: 'September 22, 2026', url: '#' },
  { outlet: 'Wired', title: 'Meet the team curating the internet\'s PDFs', date: 'August 14, 2026', url: '#' },
  { outlet: 'Fast Company', title: 'A breath of fresh air in document sharing', date: 'July 3, 2026', url: '#' },
  { outlet: 'Product Hunt', title: 'Launch of the Year nominee — PDF Library', date: 'June 18, 2026', url: '#' },
  { outlet: 'The Guardian', title: 'Why verified authors are the future of publishing', date: 'May 9, 2026', url: '#' },
]

const releases = [
  { date: 'Oct 2026', title: `${SITE_CONFIG.name} hits 250k downloads`, body: 'A major milestone for our reader community as the library crosses a quarter-million downloads.' },
  { date: 'Aug 2026', title: 'New verified author program launches', body: 'Introducing a streamlined verification process for contributors across every topic and region.' },
  { date: 'May 2026', title: `${SITE_CONFIG.name} raises Series A`, body: 'A new round of funding will help expand the engineering team and improve library curation tools.' },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[380px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                Press &amp; Media
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                News &amp; Media Resources
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Press releases, brand assets, and media contact info — everything you need to
                cover {SITE_CONFIG.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Mail, title: 'Media Contact', value: 'press@' + SITE_CONFIG.domain, sub: 'Replies within 24 hours' },
            { icon: Download, title: 'Brand Assets', value: 'Download Kit', sub: 'Logos, screenshots, photos' },
            { icon: FileText, title: 'Fact Sheet', value: 'View PDF', sub: 'Company facts at a glance' },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{c.title}</h3>
              <p className="mt-1 text-base font-semibold" style={{ color: ACCENT }}>
                {c.value}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" style={{ color: ACCENT }} />
              <h2 className="text-2xl font-semibold">In the Press</h2>
            </div>
            <div className="mt-6 space-y-4">
              {articles.map((a) => (
                <Link
                  key={a.title}
                  href={a.url}
                  className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ACCENT }}>
                    {a.outlet}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900 group-hover:underline">
                    {a.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    {a.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" style={{ color: ACCENT }} />
              <h2 className="text-2xl font-semibold">Press Releases</h2>
            </div>
            <div className="mt-6 space-y-4">
              {releases.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {r.date}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{r.body}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: ACCENT }}
                  >
                    Read full release
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
