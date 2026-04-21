import Link from 'next/link'
import { Shield, ChevronRight, Mail } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

const sections = [
  {
    id: 'data-we-collect',
    title: '1. Data We Collect',
    body: 'When you use our library, we collect: account information (name, email, password) when you register; usage analytics (pages viewed, PDFs downloaded) in aggregate form; and content you submit (uploaded PDFs, author bio, profile photo). We do not sell your personal data to third parties, ever.',
  },
  {
    id: 'how-we-use-data',
    title: '2. How We Use Your Data',
    body: 'We use collected data to provide and personalize your experience, improve search relevance, detect fraud, send important service updates, and comply with legal obligations. Aggregate statistics help authors understand how their PDFs perform, without revealing individual reader identities.',
  },
  {
    id: 'cookies',
    title: '3. Cookies & Tracking',
    body: 'We use essential cookies to keep you signed in and remember preferences. We use one privacy-friendly analytics provider for anonymous visit counts. We do not use third-party advertising trackers, and we honor the Do Not Track browser signal.',
  },
  {
    id: 'data-sharing',
    title: '4. When We Share Data',
    body: 'We share limited data with trusted service providers (hosting, email delivery, payment processing) strictly to operate the service. We may disclose information if required by law or to protect the rights and safety of our users. We notify users of any data breach within 72 hours.',
  },
  {
    id: 'your-rights',
    title: '5. Your Rights',
    body: 'You can access, export, correct, or delete your personal data at any time through your account settings. You can also opt out of non-essential emails, request a full data export, or permanently delete your account. EU/UK users have full GDPR rights; California users have CCPA rights.',
  },
  {
    id: 'children',
    title: '6. Children\'s Privacy',
    body: `Our service is not directed at children under 13 (or under 16 in the EU). We do not knowingly collect information from children. If you believe a child has provided us data, please contact us immediately and we will delete it.`,
  },
  {
    id: 'updates',
    title: '7. Changes to This Policy',
    body: 'We may update this policy occasionally. When we make material changes, we\'ll email registered users and highlight changes at the top of this page for 30 days. Continued use of the service after updates constitutes acceptance.',
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    body: `Questions about privacy? Email privacy@${SITE_CONFIG.domain} or write to our Data Protection Officer at the address listed on our contact page. We respond to privacy inquiries within 5 business days.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <Shield className="mx-auto h-10 w-10 opacity-90" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            How we collect, use, and protect your information.
          </p>
          <p className="mt-4 text-xs text-blue-200">Last updated: April 20, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr]">
          {/* Sidebar TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                On this page
              </h3>
              <ul className="mt-4 space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                    >
                      <ChevronRight className="h-3 w-3" style={{ color: ACCENT }} />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="leading-6">
                <strong>TL;DR:</strong> We collect only what we need to run {SITE_CONFIG.name},
                never sell your data, and let you delete your account at any time.
              </p>
            </div>

            {sections.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{s.body}</p>
              </article>
            ))}

            <div
              className="rounded-3xl p-8 text-white shadow-sm"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
            >
              <Mail className="h-6 w-6" />
              <h3 className="mt-3 text-xl font-semibold">Have questions about privacy?</h3>
              <p className="mt-2 text-sm text-blue-100">
                Our team is happy to help with any concern about how your data is handled.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
