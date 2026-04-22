import Link from 'next/link'
import { Cookie, Settings, Shield, CheckCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

const cookieTypes = [
  {
    type: 'Essential Cookies',
    required: true,
    desc: 'Keep you signed in, remember your language, and protect against fraud. The site can\'t function without these.',
    examples: ['session_id', 'csrf_token', 'auth_remember'],
  },
  {
    type: 'Preference Cookies',
    required: false,
    desc: 'Remember settings like dark mode and your preferred PDF categories. Disabling them won\'t break anything, just reset preferences each visit.',
    examples: ['theme', 'last_category', 'font_size'],
  },
  {
    type: 'Analytics Cookies',
    required: false,
    desc: 'Anonymous, privacy-friendly counters that help us understand which PDFs are popular and improve search. No personal profiling.',
    examples: ['_analytics_id (anonymous)'],
  },
  {
    type: 'Third-Party Cookies',
    required: false,
    desc: 'We do not use third-party advertising cookies. The only external cookies come from our privacy-friendly analytics and embedded YouTube previews (when you opt in).',
    examples: ['(YouTube only, opt-in)'],
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <Cookie className="mx-auto h-10 w-10 opacity-90" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Cookie Policy</h1>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Clear, straightforward information about the cookies we use.
          </p>
          <p className="mt-4 text-xs text-blue-200">Last updated: April 20, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-900">
          <p className="flex items-start gap-2 leading-6">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              <strong>We keep it simple.</strong> {SITE_CONFIG.name} uses minimal, privacy-friendly
              cookies. No invasive tracking, no ad networks, no selling your data.
            </span>
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {cookieTypes.map((c) => (
            <article
              key={c.type}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold text-slate-900">{c.type}</h2>
                {c.required ? (
                  <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Always On
                  </span>
                ) : (
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Optional
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.examples.map((e) => (
                  <code
                    key={e}
                    className="rounded-md bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-700"
                  >
                    {e}
                  </code>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <Settings className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Manage Your Cookies</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              You can adjust cookie preferences anytime from your account settings or directly in
              your browser.
            </p>
            <Link
              href="/settings"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Open Settings
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">More on Privacy</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              For a broader view of how we handle your data, read our Privacy Policy in full.
            </p>
            <Link
              href="/privacy"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700"
            >
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
