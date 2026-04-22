import Link from 'next/link'
import { FileText, ChevronRight, Mail } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms', body: `By accessing or using ${SITE_CONFIG.name}, you agree to be bound by these Terms of Service. If you don't agree, please don't use the service. These terms apply to all visitors, registered users, and authors.` },
  { id: 'accounts', title: '2. User Accounts', body: 'You must be at least 13 years old to create an account (16 in the EU). You are responsible for keeping your login credentials secure, and all activity under your account. Notify us immediately of any unauthorized access.' },
  { id: 'content', title: '3. Your Content', body: 'You retain ownership of any PDFs, profile info, or content you upload. By uploading, you grant us a non-exclusive, worldwide license to host, display, and distribute your content on the library. You can remove your content at any time.' },
  { id: 'acceptable-use', title: '4. Acceptable Use', body: `Don't upload copyrighted material you don't own, hateful or illegal content, malware, or spam. Don't attempt to scrape, hack, or disrupt the service. We may remove content and suspend accounts that violate these rules.` },
  { id: 'intellectual-property', title: '5. Intellectual Property', body: `The ${SITE_CONFIG.name} platform, branding, and original content are our property. You can't copy, modify, or redistribute our software or branding without permission. Third-party PDFs remain the property of their respective authors.` },
  { id: 'disclaimers', title: '6. Disclaimers', body: 'The service is provided "as is" without warranties of any kind. We don\'t guarantee uninterrupted availability, accuracy of user-submitted content, or fitness for any particular purpose. Use at your own risk.' },
  { id: 'liability', title: '7. Limitation of Liability', body: 'To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the service. Our total liability will not exceed the greater of $100 or the amount you paid us in the last 12 months.' },
  { id: 'termination', title: '8. Termination', body: 'You can delete your account anytime. We may suspend or terminate accounts that violate these terms, with or without notice. Upon termination, your license to use the service ends, but content preservation continues per our Privacy Policy.' },
  { id: 'changes', title: '9. Changes to Terms', body: 'We may update these terms when needed. Material changes will be announced via email and a banner on the site for 30 days. Continuing to use the service after changes means you accept the new terms.' },
  { id: 'governing-law', title: '10. Governing Law', body: 'These terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved in the courts of Wilmington, Delaware, unless otherwise required by your local consumer protection laws.' },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <FileText className="mx-auto h-10 w-10 opacity-90" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            The rules and expectations for using {SITE_CONFIG.name}.
          </p>
          <p className="mt-4 text-xs text-blue-200">Last updated: April 20, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr]">
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
                <strong>In short:</strong> Use the library respectfully, own your content, follow
                the law, and treat other users kindly. Full details below.
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
              <h3 className="mt-3 text-xl font-semibold">Questions about these terms?</h3>
              <p className="mt-2 text-sm text-blue-100">
                Reach out to our legal team. We reply to every inquiry within a few business days.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
              >
                Contact Legal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
