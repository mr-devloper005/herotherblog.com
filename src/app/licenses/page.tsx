import Link from 'next/link'
import { Scale, Github } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const ACCENT = '#2563eb'

const licenses = [
  { name: 'Next.js', version: '14.x', license: 'MIT', url: 'https://github.com/vercel/next.js' },
  { name: 'React', version: '18.x', license: 'MIT', url: 'https://github.com/facebook/react' },
  { name: 'TypeScript', version: '5.x', license: 'Apache-2.0', url: 'https://github.com/microsoft/TypeScript' },
  { name: 'Tailwind CSS', version: '3.x', license: 'MIT', url: 'https://github.com/tailwindlabs/tailwindcss' },
  { name: 'lucide-react', version: '0.x', license: 'ISC', url: 'https://github.com/lucide-icons/lucide' },
  { name: 'Radix UI', version: '1.x', license: 'MIT', url: 'https://github.com/radix-ui/primitives' },
  { name: 'framer-motion', version: '11.x', license: 'MIT', url: 'https://github.com/framer/motion' },
  { name: 'clsx', version: '2.x', license: 'MIT', url: 'https://github.com/lukeed/clsx' },
  { name: 'zod', version: '3.x', license: 'MIT', url: 'https://github.com/colinhacks/zod' },
  { name: 'pnpm', version: '9.x', license: 'MIT', url: 'https://github.com/pnpm/pnpm' },
]

const licenseColors: Record<string, string> = {
  MIT: 'bg-green-50 text-green-700',
  'Apache-2.0': 'bg-blue-50 text-blue-700',
  ISC: 'bg-purple-50 text-purple-700',
  'BSD-3-Clause': 'bg-orange-50 text-orange-700',
}

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <Scale className="mx-auto h-10 w-10 opacity-90" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Open Source Licenses
          </h1>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            {SITE_CONFIG.name} is built on the shoulders of amazing open source projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Our Content License</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Author-submitted PDFs remain the property of their respective authors. The platform
            displays them under the terms each author agrees to when uploading (typically:
            CC-BY-4.0 or free-to-download). Our own UI, branding, and original platform code are
            proprietary.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              User PDFs: Author's choice
            </span>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Platform code: Proprietary
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Brand assets: See Press Kit
            </span>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Third-Party Libraries</h2>
          <p className="mt-2 text-sm text-slate-500">
            A huge thank you to the maintainers of every package listed below.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
              <div>Package</div>
              <div>Version</div>
              <div>License</div>
              <div>Source</div>
            </div>
            {licenses.map((l) => (
              <div
                key={l.name}
                className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 border-b border-slate-100 px-6 py-4 text-sm last:border-b-0"
              >
                <div className="font-semibold text-slate-900">{l.name}</div>
                <div className="font-mono text-xs text-slate-500">{l.version}</div>
                <div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      licenseColors[l.license] || 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {l.license}
                  </span>
                </div>
                <Link
                  href={l.url}
                  target="_blank"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
                >
                  <Github className="h-3.5 w-3.5 text-slate-700" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm text-blue-900">
          <p className="leading-7">
            <strong>Complete list:</strong> A full license manifest for every dependency (including
            transitive ones) is available on request. Email{' '}
            <Link href={`mailto:legal@${SITE_CONFIG.domain}`} className="font-semibold underline">
              legal@{SITE_CONFIG.domain}
            </Link>{' '}
            and we'll send a machine-readable SBOM file.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
