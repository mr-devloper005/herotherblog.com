import Link from 'next/link'
import { CheckCircle2, AlertCircle, Clock, Activity, Globe, Zap } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const ACCENT = '#2563eb'

const services = [
  { name: 'Website', status: 'operational', uptime: '99.99%' },
  { name: 'PDF Library', status: 'operational', uptime: '99.98%' },
  { name: 'Author Profiles', status: 'operational', uptime: '99.99%' },
  { name: 'Search', status: 'operational', uptime: '99.95%' },
  { name: 'REST API', status: 'operational', uptime: '99.97%' },
  { name: 'Upload Service', status: 'degraded', uptime: '98.40%' },
  { name: 'Email Notifications', status: 'operational', uptime: '99.92%' },
  { name: 'Content Delivery (CDN)', status: 'operational', uptime: '100.00%' },
]

const incidents = [
  {
    date: 'November 8, 2026',
    title: 'Upload service experiencing elevated latency',
    status: 'monitoring',
    body: "We are investigating reports of slow PDF uploads in the EU region. A fix has been deployed and we're monitoring performance.",
  },
  {
    date: 'October 22, 2026',
    title: 'Scheduled database maintenance completed',
    status: 'resolved',
    body: 'A 2-hour maintenance window was used to upgrade our primary database. All services are back to full performance.',
  },
  {
    date: 'October 14, 2026',
    title: 'Brief search outage',
    status: 'resolved',
    body: 'Search was unavailable for 18 minutes due to an index rebuild. All queries are functioning normally now.',
  },
]

const statusInfo: Record<string, { label: string; color: string; bg: string; icon: any }> = {
  operational: { label: 'Operational', color: 'text-green-700', bg: 'bg-green-50', icon: CheckCircle2 },
  degraded: { label: 'Degraded', color: 'text-yellow-700', bg: 'bg-yellow-50', icon: AlertCircle },
  outage: { label: 'Outage', color: 'text-red-700', bg: 'bg-red-50', icon: AlertCircle },
}

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === 'operational')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div
          className={`rounded-3xl p-8 text-center shadow-sm sm:p-12 ${
            allOperational ? 'bg-green-50' : 'bg-yellow-50'
          }`}
        >
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              allOperational ? 'bg-green-500' : 'bg-yellow-500'
            } text-white`}
          >
            {allOperational ? <CheckCircle2 className="h-8 w-8" /> : <AlertCircle className="h-8 w-8" />}
          </div>
          <h1 className="mt-5 text-3xl font-semibold sm:text-4xl">
            {allOperational ? 'All Systems Operational' : 'Some Services Degraded'}
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Last checked: just now · Updated every 60 seconds
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Activity, label: 'Overall Uptime (90 days)', value: '99.97%' },
            { icon: Zap, label: 'Avg. API Response', value: '87ms' },
            { icon: Globe, label: 'CDN Regions', value: '24' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-2xl font-bold">{s.value}</div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold">Services</h2>
        <div className="mt-5 space-y-2">
          {services.map((s) => {
            const info = statusInfo[s.status]
            const Icon = info.icon
            return (
              <div
                key={s.name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{s.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">30-day uptime: {s.uptime}</p>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${info.bg} ${info.color}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {info.label}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold">Recent Incidents</h2>
          <div className="mt-5 space-y-4">
            {incidents.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    {i.date}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      i.status === 'resolved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {i.status}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{i.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="#"
              className="text-sm font-semibold"
              style={{ color: ACCENT }}
            >
              View full incident history →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
