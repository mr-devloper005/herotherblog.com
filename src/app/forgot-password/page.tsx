'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle2, BookOpen, Loader2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
    }, 900)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarShell />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          <div
            className="relative hidden bg-cover bg-center p-10 text-white lg:block"
            style={{
              backgroundImage:
                'linear-gradient(rgba(37,99,235,0.85),rgba(29,78,216,0.9)), url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=60)',
            }}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
                </div>
                <h1 className="mt-10 text-4xl font-semibold leading-tight">
                  Forgot your password?
                </h1>
                <p className="mt-4 text-sm leading-7 text-blue-100">
                  It happens to the best of us. Enter your email and we'll send you a secure link
                  to reset it in seconds.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  'Secure password reset via email',
                  'Link expires in 30 minutes',
                  'Your reading list stays safe',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mx-auto max-w-sm">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to sign in
              </Link>

              {!sent ? (
                <>
                  <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                    Reset your password
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Enter the email associated with your account.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-600">Email address</label>
                      <div className="relative mt-1.5">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending link...
                        </>
                      ) : (
                        'Send reset link'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="mt-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-900">Check your inbox</h2>
                  <p className="mt-3 text-sm text-slate-500">
                    We sent a reset link to <strong className="text-slate-900">{email}</strong>. It
                    expires in 30 minutes.
                  </p>
                  <Link
                    href="/login"
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Back to sign in
                  </Link>
                  <p className="mt-4 text-xs text-slate-400">
                    Didn't get it?{' '}
                    <button
                      onClick={() => setSent(false)}
                      className="font-medium underline"
                      style={{ color: ACCENT }}
                    >
                      Try another email
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
