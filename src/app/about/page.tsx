import Link from 'next/link'
import {
  BookOpen,
  Users,
  Download,
  Award,
  Target,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

const stats = [
  { value: '100+', label: 'Curated PDFs', icon: BookOpen },
  { value: '50k+', label: 'Active Readers', icon: Users },
  { value: '250k+', label: 'Downloads', icon: Download },
  { value: '500+', label: 'Verified Authors', icon: Award },
]

const values = [
  {
    icon: Target,
    title: 'Quality Over Quantity',
    body: 'Every PDF is hand-reviewed. We prefer 100 great documents over 10,000 mediocre ones.',
  },
  {
    icon: Heart,
    title: 'Community First',
    body: 'Our verified author profiles create a trusted space where readers and writers connect.',
  },
  {
    icon: Sparkles,
    title: 'Free Forever',
    body: 'Knowledge should be accessible. All library downloads are and will always be free.',
  },
]

const milestones = [
  { year: '2022', title: 'The idea was born', body: 'Frustrated with scattered PDF resources, we set out to build a better home for knowledge.' },
  { year: '2023', title: 'First 1,000 readers', body: 'Early community adopters helped us shape what a modern PDF library should feel like.' },
  { year: '2024', title: 'Verified author program', body: 'We launched profiles, making it easy to follow your favorite writers across the library.' },
  { year: '2025', title: '100k downloads', body: 'A milestone we celebrated with a redesign focused entirely on reading and discovery.' },
]

const team = [
  { name: 'Sarah Mitchell', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=60' },
  { name: 'James Carter', role: 'Head of Community', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60' },
  { name: 'Emily Brooks', role: 'Content Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=60' },
  { name: 'Michael Ross', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=60' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[420px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                About {SITE_CONFIG.name}
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Building the world's friendliest
                <br />
                PDF library
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                We believe knowledge should be easy to find, pleasant to read, and free to share.
                That's why we built {SITE_CONFIG.name} — a curated home for PDFs and the authors
                who create them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-3xl font-bold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=70"
              alt="Library"
              className="h-[440px] w-full object-cover"
            />
            <div
              className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-3xl md:block"
              style={{ backgroundColor: ACCENT, opacity: 0.15 }}
            />
          </div>
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: ACCENT }}
            >
              Our Mission
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Making knowledge open, organized, and human.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Every day, incredible PDFs are published and then lost in the chaos of the internet.
              We built {SITE_CONFIG.name} to fix that. By pairing a hand-curated library with
              verified author profiles, we give writers the stage they deserve and readers a place
              they can actually trust.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Hand-reviewed PDF submissions',
                'Verified author identities',
                'Beautiful reading experience',
                'No paywalls, no tracking',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4" style={{ color: ACCENT }} />
                  {t}
                </div>
              ))}
            </div>
            <Link
              href="/pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Explore the Library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Three simple principles guide every decision we make.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Journey</h2>
          <p className="mt-3 text-sm text-slate-500">
            From a small idea to a community of thousands.
          </p>
        </div>
        <div className="relative mt-12">
          <div
            className="absolute left-4 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
            style={{ backgroundColor: '#dbeafe' }}
          />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {m.year}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{m.body}</p>
                </div>
                <div
                  className="absolute left-4 top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-white md:left-1/2"
                  style={{ backgroundColor: ACCENT }}
                />
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              The people behind {SITE_CONFIG.name}.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-semibold">{m.name}</h3>
                  <p className="text-sm" style={{ color: ACCENT }}>
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center text-white sm:p-14"
          style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to start reading?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
            Join thousands of curious minds using {SITE_CONFIG.name} every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/pdf"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Browse PDFs
            </Link>
            <Link
              href="/register"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
