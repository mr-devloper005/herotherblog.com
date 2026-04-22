import Link from 'next/link'
import { ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const ACCENT = '#2563eb'

const leadership = [
  { name: 'Sarah Mitchell', role: 'Founder & CEO', bio: 'Former librarian turned product designer. Sarah founded the project to fix how we discover knowledge online.', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=60' },
  { name: 'James Carter', role: 'Head of Community', bio: 'Community builder with 10+ years growing reader-first platforms and author programs.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60' },
  { name: 'Emily Brooks', role: 'Content Director', bio: 'Editorial veteran who curates the library and shapes our verification standards for authors.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=60' },
]

const engineers = [
  { name: 'Michael Ross', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=60' },
  { name: 'Dr. Lisa Wang', role: 'Data Science Lead', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=60' },
  { name: 'Robert Klein', role: 'Backend Engineer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60' },
  { name: 'Anna Williams', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=60' },
  { name: 'Dr. Priya Sharma', role: 'Research Advisor', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60' },
  { name: 'David Olson', role: 'Marketing Lead', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=60' },
  { name: 'Stephanie Nicol', role: 'Support Manager', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=60' },
  { name: 'Allen Jordan', role: 'Frontend Engineer', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=60' },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[380px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                Our Team
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                The people building a better library
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                A small, passionate team of readers, writers, and engineers from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Leadership</h2>
        <p className="mt-3 text-center text-sm text-slate-500">The founders shaping our direction.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {leadership.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm font-medium" style={{ color: ACCENT }}>
                  {p.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{p.bio}</p>
                <div className="mt-4 flex gap-2">
                  {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <button
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Rest of the Team
          </h2>
          <p className="mt-3 text-center text-sm text-slate-500">
            The engineers, designers, and support heroes behind the scenes.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {engineers.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold">{p.name}</h3>
                  <p className="text-xs" style={{ color: ACCENT }}>
                    {p.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center text-white sm:p-14"
          style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">We're hiring!</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
            Join us on the mission to make knowledge open and human.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm"
          >
            View Open Roles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
