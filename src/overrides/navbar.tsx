'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Menu, X, Phone } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const NavbarAuthControls = dynamic(
  () => import('@/components/shared/navbar-auth-controls').then((m) => m.NavbarAuthControls),
  { ssr: false, loading: () => null }
)

const ACCENT = '#2563eb'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Explore', href: '/pdf' },
  { name: 'Profiles', href: '/profile' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export function NavbarOverride() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src="/brand-logo.png?v=20260426"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
            decoding="async"
            fetchPriority="high"
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-bold leading-tight text-slate-900 sm:text-base">
              {SITE_CONFIG.name}
            </div>
            <div className="hidden truncate text-[10px] uppercase tracking-wider text-slate-500 sm:block">
              PDF Library &amp; Profiles
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 md:inline-flex"
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 md:inline-flex"
                style={{ backgroundColor: ACCENT }}
              >
                <Phone className="h-3.5 w-3.5" />
                Request a call
              </Link>
            </>
          )}

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block rounded-lg px-4 py-2.5 text-sm font-medium',
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            {!isAuthenticated && (
              <div className="flex gap-2 pt-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-medium text-slate-700"
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Request a call
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
