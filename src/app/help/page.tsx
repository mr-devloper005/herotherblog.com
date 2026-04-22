'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Search,
  BookOpen,
  Users,
  Download,
  MessageCircle,
  FileText,
  Settings,
  Shield,
  ChevronDown,
  ArrowRight,
  Mail,
  Sparkles,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const ACCENT = '#2563eb'

const topics = [
  { icon: BookOpen, title: 'Getting Started', body: 'Create your account, browse your first PDF, and set up your reading preferences.', count: 8 },
  { icon: Download, title: 'Downloads & Access', body: 'How to preview, download, and organize PDFs from your personal library.', count: 12 },
  { icon: Users, title: 'Author Profiles', body: 'Follow authors, become a contributor, and manage your public profile.', count: 10 },
  { icon: Settings, title: 'Account Settings', body: 'Update your info, manage privacy, and handle notification preferences.', count: 6 },
  { icon: Shield, title: 'Trust & Safety', body: 'Our moderation policy, content guidelines, and how we verify authors.', count: 5 },
  { icon: FileText, title: 'Uploading PDFs', body: 'Contributor guide: requirements, best practices, and review process.', count: 9 },
]

const faqs = [
  { q: 'Is it really free to download PDFs?', a: 'Yes. Every PDF in our library is 100% free to preview and download. No paywalls, no credit card required — we believe knowledge should be accessible to everyone.' },
  { q: 'How do I become a verified author?', a: 'Sign up for an account, complete your profile with a bio and avatar, then submit at least one PDF for review. Our team typically verifies new authors within 48 hours.' },
  { q: 'What file formats do you accept?', a: 'We currently only accept PDF files up to 50MB. For best results, ensure your document is text-searchable and includes a clear cover page, title, and author name.' },
  { q: 'Can I follow my favorite authors?', a: "Absolutely. Click the 'Follow' button on any author profile and you'll get notified whenever they publish new PDFs to the library." },
  { q: 'How long does PDF review take?', a: 'Most submissions are reviewed within 24–48 hours. Complex or technical documents may take up to 3 business days. You\'ll receive an email when your PDF goes live.' },
  { q: 'Can I remove a PDF after uploading?', a: 'Yes. You have full control over your uploads. Go to your profile dashboard, find the PDF, and click "Remove" — it will be taken down immediately.' },
  { q: 'Do you track my reading activity?', a: 'No personal tracking. We only count aggregate downloads to help authors see their reach. Your reading habits stay private.' },
  { q: 'How do I report inappropriate content?', a: 'Click the "Report" icon on any PDF or profile page. Our moderation team reviews every report within 24 hours and takes appropriate action.' },
]

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(0)
  const [query, setQuery] = useState('')

  const filteredFaqs = faqs.filter(
    (f) => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[380px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                Help Center
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                How can we help you today?
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Search our knowledge base or browse topics to find answers fast.
              </p>
              <div className="mt-7 flex w-full max-w-xl items-center overflow-hidden rounded-full bg-white p-1.5 shadow-xl">
                <Search className="ml-3 h-4 w-4 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search help articles..."
                  className="flex-1 bg-transparent px-3 text-sm text-slate-900 outline-none"
                />
                <button
                  className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Browse by Topic</h2>
          <p className="mt-3 text-sm text-slate-500">Pick a category to see related guides and articles.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.title}
              href="#"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{t.body}</p>
              <div
                className="mt-4 flex items-center justify-between text-xs font-semibold"
                style={{ color: ACCENT }}
              >
                <span>{t.count} articles</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: ACCENT }}
            >
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {filteredFaqs.map((f, i) => (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      open === i ? 'rotate-180' : ''
                    }`}
                    style={{ color: ACCENT }}
                  />
                </button>
                {open === i && (
                  <div className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-600">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white py-10 text-center text-sm text-slate-500">
                No matches for "{query}". Try different keywords.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="grid gap-6 overflow-hidden rounded-3xl p-10 text-white sm:p-14 md:grid-cols-[1fr_auto] md:items-center"
          style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
        >
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Still need help?</span>
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">We're here for you 24/7</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Can't find what you're looking for? Our support team usually replies within an hour.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" />
              Contact Support
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              Ask Community
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
