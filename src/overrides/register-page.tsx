'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BookOpen, Eye, EyeOff, Loader2, Mail, Lock, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

const ACCENT = '#2563eb'

export function RegisterPageOverride() {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name || !email || !password) {
      setError('Please fill all fields.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    try {
      await signup(name, email, password)
      router.push('/')
    } catch {
      setError('Unable to create account. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          <div className="p-8 sm:p-10">
            <div className="mx-auto max-w-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Create your account</h2>
              <p className="mt-2 text-sm text-slate-500">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold" style={{ color: ACCENT }}>
                  Sign in
                </Link>
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-600">Full name</label>
                  <div className="relative mt-1.5">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-600">Email address</label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-600">Password</label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPwd ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-11 w-full rounded-lg border border-slate-200 pl-10 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      placeholder="At least 6 characters"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd(!showPwd)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-2 text-xs text-slate-600">
                  <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 rounded" required />
                  <span>
                    I agree to the{' '}
                    <Link href="/terms" className="underline">Terms</Link> and{' '}
                    <Link href="/privacy" className="underline">Privacy Policy</Link>.
                  </span>
                </label>

                {error && (
                  <div className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: ACCENT }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>
            </div>
          </div>

          <div
            className="relative hidden bg-cover bg-center p-10 text-white lg:block"
            style={{
              backgroundImage:
                'linear-gradient(rgba(37,99,235,0.85),rgba(29,78,216,0.9)), url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=60)',
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
                  Join our library of curious minds.
                </h1>
                <p className="mt-4 text-sm leading-7 text-blue-100">
                  Share your PDFs, build your profile, and connect with a community of readers and
                  authors worldwide.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  'Upload unlimited PDFs for free',
                  'Build a verified author profile',
                  'Grow your audience and followers',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
