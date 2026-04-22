'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  MessageCircle,
  HeadphonesIcon,
  CheckCircle2,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const ACCENT = '#2563eb'

export function ContactPageOverride() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[340px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                Get in Touch
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Contact Our Library Team
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Questions about PDFs, author profiles, or partnerships? We'd love to hear from
                you — our team responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { icon: Mail, title: 'Email Us', value: 'hello@' + SITE_CONFIG.domain, sub: 'We reply within 24h' },
            { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', sub: 'Mon–Fri 9am to 6pm' },
            { icon: MapPin, title: 'Visit Us', value: '121 Library Lane', sub: 'Austin, TX 78701' },
            { icon: Clock, title: 'Support Hours', value: '24 / 7 Available', sub: 'Live chat & email' },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-base font-semibold text-slate-800">{c.value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Side Info */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-900">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">First Name</label>
                  <input
                    className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Last Name</label>
                  <input
                    className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">Email</label>
                  <input
                    type="email"
                    className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Phone (Optional)</label>
                  <input
                    className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="+1 555 000 0000"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Inquiry Type</label>
                <select
                  className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option>General Question</option>
                  <option>PDF Upload Help</option>
                  <option>Author Profile Support</option>
                  <option>Partnership / Media</option>
                  <option>Technical Issue</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600">Message</label>
                <textarea
                  rows={5}
                  className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              {sent && (
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" /> Message sent! We'll get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <HeadphonesIcon className="h-8 w-8" style={{ color: '#8cb4ff' }} />
              <h3 className="mt-4 text-xl font-semibold">Dedicated Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Our library specialists are available around the clock to help you find the right
                PDF, connect with authors, or resolve any technical issues.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4" style={{ color: '#8cb4ff' }} />
                  Live chat support 24/7
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" style={{ color: '#8cb4ff' }} />
                  Email reply within 24h
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" style={{ color: '#8cb4ff' }} />
                  Phone during business hours
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-blue-50 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Looking for quick answers?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Check our Help Center for guides on uploading PDFs, managing profiles, and
                community guidelines.
              </p>
              <Link
                href="/help"
                className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: ACCENT }}
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
