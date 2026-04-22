import Link from 'next/link'
import {
  MessageCircle,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
  Trophy,
  Calendar,
  TrendingUp,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const ACCENT = '#2563eb'

const discussions = [
  { title: 'Best PDFs for learning modern web development?', author: 'Sarah M.', replies: 42, category: 'Tech', time: '2h ago' },
  { title: 'Tips for becoming a verified author', author: 'James C.', replies: 28, category: 'Authors', time: '5h ago' },
  { title: 'Monthly book club — October picks', author: 'Emily B.', replies: 61, category: 'Events', time: '1d ago' },
  { title: 'Share your reading setup!', author: 'Michael R.', replies: 35, category: 'General', time: '2d ago' },
  { title: 'How do you organize your PDF library?', author: 'Lisa W.', replies: 19, category: 'Tips', time: '3d ago' },
  { title: 'Feedback on the new profile design', author: 'Anna W.', replies: 53, category: 'Feedback', time: '4d ago' },
]

const events = [
  { title: 'Live AMA with Top Authors', date: 'Nov 15, 2026', time: '3:00 PM EST', type: 'Virtual' },
  { title: 'PDF Library Book Club', date: 'Nov 22, 2026', time: '7:00 PM EST', type: 'Virtual' },
  { title: 'Creator Workshop: Better PDFs', date: 'Dec 5, 2026', time: '2:00 PM EST', type: 'Virtual' },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[380px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                Community
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Where Readers &amp; Authors Connect
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Join the conversation, ask questions, attend live events, and meet the writers
                behind your favorite PDFs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { icon: Users, v: '50k+', l: 'Members' },
            { icon: MessageCircle, v: '12k+', l: 'Discussions' },
            { icon: Heart, v: '95%', l: 'Positive vibes' },
            { icon: Trophy, v: '120+', l: 'Events hosted' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-3xl font-bold">{s.v}</div>
              <div className="mt-1 text-sm text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold">Trending Discussions</h2>
              <Link
                href="#"
                className="text-sm font-semibold"
                style={{ color: ACCENT }}
              >
                View all
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {discussions.map((d) => (
                <Link
                  key={d.title}
                  href="#"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {d.category}
                      </span>
                      <span className="text-xs text-slate-400">{d.time}</span>
                    </div>
                    <h3 className="mt-2 truncate text-base font-semibold text-slate-900 group-hover:underline">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      by {d.author} · {d.replies} replies
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-sm">
              <Calendar className="h-8 w-8" style={{ color: '#8cb4ff' }} />
              <h3 className="mt-4 text-xl font-semibold">Upcoming Events</h3>
              <div className="mt-5 space-y-4">
                {events.map((e) => (
                  <div key={e.title} className="border-l-2 border-blue-400 pl-4">
                    <p className="text-sm font-semibold">{e.title}</p>
                    <p className="mt-1 text-xs text-slate-300">
                      {e.date} · {e.time} · {e.type}
                    </p>
                  </div>
                ))}
              </div>
              <button
                className="mt-6 w-full rounded-full bg-white py-2.5 text-sm font-semibold text-slate-900"
              >
                View All Events
              </button>
            </div>

            <div
              className="rounded-3xl p-7 text-white shadow-sm"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
            >
              <Sparkles className="h-6 w-6" />
              <h3 className="mt-3 text-lg font-semibold">Join the conversation</h3>
              <p className="mt-2 text-sm text-blue-100">
                Create your account to start threads, follow authors, and attend live events.
              </p>
              <Link
                href="/register"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <TrendingUp className="h-6 w-6" style={{ color: ACCENT }} />
              <h3 className="mt-3 text-lg font-semibold">Top Contributors</h3>
              <div className="mt-4 space-y-3">
                {['Sarah Mitchell', 'James Carter', 'Emily Brooks'].map((n, i) => (
                  <div key={n} className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{n}</p>
                      <p className="text-xs text-slate-500">{1200 - i * 180} contributions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
