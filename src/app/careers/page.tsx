import Link from 'next/link'
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Heart,
  Zap,
  Globe,
  Users,
  Coffee,
  GraduationCap,
  TrendingUp,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const ACCENT = '#2563eb'

const openings = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote · Global', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'San Francisco, CA', type: 'Full-time' },
  { title: 'Community Manager', team: 'Community', location: 'Remote · Americas', type: 'Full-time' },
  { title: 'Content Curator', team: 'Editorial', location: 'New York, NY', type: 'Full-time' },
  { title: 'Support Specialist', team: 'Support', location: 'Remote · EU', type: 'Full-time' },
  { title: 'DevOps Engineer', team: 'Engineering', location: 'Remote · Global', type: 'Contract' },
]

const perks = [
  { icon: Globe, title: 'Remote-First', body: 'Work from anywhere. We have teammates in 12+ countries.' },
  { icon: Heart, title: 'Full Benefits', body: 'Health, dental, vision, plus a generous PTO policy.' },
  { icon: GraduationCap, title: 'Learning Budget', body: '$2,000 per year for courses, books, and conferences.' },
  { icon: Coffee, title: 'Team Retreats', body: 'Twice a year, we meet in person somewhere beautiful.' },
  { icon: Zap, title: 'Modern Stack', body: 'TypeScript, React, modern infra, and delightful tools.' },
  { icon: TrendingUp, title: 'Equity', body: 'Every employee gets meaningful ownership in the company.' },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[400px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                Careers
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Help us build the future of reading
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Join a small team with big ideas. We're on a mission to make the world's knowledge
                more accessible — and we'd love your help.
              </p>
              <a
                href="#openings"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
                style={{ backgroundColor: ACCENT }}
              >
                See Open Positions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Work With Us</h2>
          <p className="mt-3 text-sm text-slate-500">
            Meaningful work, modern tools, and a team you'll love collaborating with.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="openings" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Open Positions</h2>
            <p className="mt-3 text-sm text-slate-500">
              Don't see a role that fits? Email us at careers@herotherblog.com anyway.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-3">
            {openings.map((job) => (
              <Link
                key={job.title}
                href="#"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {job.type}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {job.team}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="grid gap-6 overflow-hidden rounded-3xl p-10 text-white sm:p-14 md:grid-cols-[1fr_auto] md:items-center"
          style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
        >
          <div>
            <Users className="h-6 w-6" />
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Life at our company</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Meet the team, see how we work, and get a sense of the culture before you apply.
            </p>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900"
          >
            Meet the Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
