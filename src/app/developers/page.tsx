import Link from 'next/link'
import { ArrowRight, Code2, Book, Terminal, Zap, Shield, Github } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const ACCENT = '#2563eb'

const features = [
  { icon: Zap, title: 'Fast REST API', body: 'Sub-100ms responses, global CDN, and webhooks for real-time events.' },
  { icon: Shield, title: 'Secure by Default', body: 'OAuth 2.0, API keys, rate limiting, and end-to-end encryption.' },
  { icon: Book, title: 'Clear Documentation', body: 'Interactive docs, code examples in 6 languages, and a sandbox.' },
  { icon: Terminal, title: 'Open Source SDKs', body: 'Official SDKs for JavaScript, Python, Go, and Ruby on GitHub.' },
]

const endpoints = [
  { method: 'GET', path: '/v1/pdfs', desc: 'List all PDFs in the library' },
  { method: 'GET', path: '/v1/pdfs/{id}', desc: 'Get a specific PDF by ID' },
  { method: 'POST', path: '/v1/pdfs', desc: 'Upload a new PDF (verified authors only)' },
  { method: 'GET', path: '/v1/profiles', desc: 'List all author profiles' },
  { method: 'GET', path: '/v1/profiles/{id}', desc: 'Get a specific author profile' },
  { method: 'GET', path: '/v1/search', desc: 'Search across PDFs and profiles' },
]

const methodColors: Record<string, string> = {
  GET: 'bg-blue-100 text-blue-700',
  POST: 'bg-green-100 text-green-700',
  PUT: 'bg-yellow-100 text-yellow-700',
  DELETE: 'bg-red-100 text-red-700',
}

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[420px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                <Code2 className="h-3 w-3" /> Developers
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Build with our PDF Library API
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Integrate our curated PDF catalog and verified author profiles into your app in
                minutes. Free developer tier, generous rate limits.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
                  style={{ backgroundColor: ACCENT }}
                >
                  Get API Key
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/20"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Code example */}
          <div className="overflow-hidden rounded-2xl bg-slate-900 p-6 text-slate-100 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Quick Start
              </span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
            </div>
            <pre className="mt-5 overflow-x-auto text-[13px] leading-6">
{`// Install the SDK
npm install @herotherblog/sdk

// Initialize the client
import { HeroClient } from '@herotherblog/sdk'

const client = new HeroClient({
  apiKey: process.env.HERO_API_KEY
})

// List the latest PDFs
const pdfs = await client.pdfs.list({
  limit: 10,
  category: 'technology'
})

console.log(pdfs)`}
            </pre>
          </div>

          {/* Endpoints */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Popular Endpoints</h3>
            <div className="mt-5 space-y-2">
              {endpoints.map((e) => (
                <div
                  key={e.path}
                  className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5"
                >
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${
                      methodColors[e.method]
                    }`}
                  >
                    {e.method}
                  </span>
                  <code className="font-mono text-xs font-semibold text-slate-800">{e.path}</code>
                  <span className="ml-auto hidden text-xs text-slate-500 sm:inline">{e.desc}</span>
                </div>
              ))}
            </div>
            <Link
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: ACCENT }}
            >
              Full API reference
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center text-white sm:p-14"
          style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
        >
          <Terminal className="mx-auto h-8 w-8" />
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready to start building?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
            Sign up for a free developer account and get 10,000 free API calls each month.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Create Developer Account
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
