import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex min-w-0 items-center gap-2.5">
              <img
                src="/brand-logo.png?v=20260426"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 object-contain"
                decoding="async"
              />
              <span className="min-w-0 truncate text-lg font-bold text-white">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Your trusted library for PDFs and profiles. We curate quality knowledge, verified
              authors, and free downloads — making learning effortless with reliable service and
              24/7 support.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/pdf" className="hover:text-white">PDF Library</Link></li>
              <li><Link href="/profile" className="hover:text-white">Browse Profiles</Link></li>
              <li><Link href="/pdf?category=new" className="hover:text-white">Latest Uploads</Link></li>
              <li><Link href="/pdf?category=popular" className="hover:text-white">Popular PDFs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/pdf" className="hover:text-white">PDF Downloads</Link></li>
              <li><Link href="/profile" className="hover:text-white">Author Profiles</Link></li>
              <li><Link href="/register" className="hover:text-white">Become a Contributor</Link></li>
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {year} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
