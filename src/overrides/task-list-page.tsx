import Link from 'next/link'
import { ArrowRight, BookOpen, Download, Filter, Plus, Search, Sparkles, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { fetchTaskPosts } from '@/lib/task-data'
import { getTaskConfig, type TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const ACCENT = '#2563eb'

function getCopy(task: TaskKey) {
  if (task === 'profile') {
    return {
      badge: 'Our Authors',
      title: 'Meet Our Verified Contributors',
      body:
        'Browse hundreds of author profiles sharing their knowledge with the world. Follow your favorites, discover new voices, and connect with a community of passionate writers.',
      ctaLabel: 'Become a Contributor',
      ctaHref: '/register',
      secondaryCta: { label: 'Create your profile', href: '/create/profile' },
      heroImg:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=70',
      stats: [
        { icon: Users, value: '500+', label: 'Verified Authors' },
        { icon: BookOpen, value: '100+', label: 'Published PDFs' },
        { icon: Download, value: '250k+', label: 'Downloads' },
      ],
    }
  }
  return {
    badge: 'PDF Library',
    title: 'Explore Our Full PDF Collection',
    body:
      'Browse our hand-curated library of PDFs across every topic — from business playbooks to design systems, research, and creative writing. Every document is free to preview and download.',
    ctaLabel: 'Upload Your PDF',
    ctaHref: '/register',
    secondaryCta: { label: 'Add a PDF entry', href: '/create/pdf' },
    heroImg:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=70',
    stats: [
      { icon: BookOpen, value: '100+', label: 'PDFs Available' },
      { icon: Download, value: '250k+', label: 'Total Downloads' },
      { icon: Users, value: '50k+', label: 'Active Readers' },
    ],
  }
}

export async function TaskListPageOverride({
  task,
  category,
}: {
  task: TaskKey
  category?: string
}) {
  const taskConfig = getTaskConfig(task)
  const posts = await fetchTaskPosts(task, 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const copy = getCopy(task)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl sm:top-32" aria-hidden />
        <div className="pointer-events-none absolute -right-16 top-40 h-48 w-48 rounded-full bg-slate-900/5 blur-3xl" aria-hidden />
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-[0_24px_60px_rgba(37,99,235,0.12)] ring-1 ring-white/60">
          <div
            className="relative h-[360px] w-full bg-cover bg-center sm:h-[380px]"
            style={{ backgroundImage: `url(${copy.heroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/65 to-blue-950/80" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-8 pt-10 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                {copy.badge}
              </span>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {copy.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                {copy.body}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={copy.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  {copy.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={copy.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Plus className="h-4 w-4" />
                  {copy.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {copy.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                style={{ backgroundColor: ACCENT }}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">{s.value}</div>
                <div className="text-xs font-medium text-slate-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div className="mb-4 flex flex-col gap-1 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {task === 'profile' ? 'Find an author' : 'Refine the library'}
              </h3>
              <p className="text-xs text-slate-500">Filter by category or open global search.</p>
            </div>
            <div
              className="hidden h-1 w-12 shrink-0 rounded-full sm:block"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
          </div>
          <form
            action={taskConfig?.route || '#'}
            className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-end"
          >
            <div>
              <label className="mb-1.5 flex items-center gap-2 text-xs font-medium text-slate-600">
                <Filter className="h-3.5 w-3.5 text-blue-600" />
                Category
              </label>
              <select
                name="category"
                defaultValue={normalizedCategory}
                className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              >
                <option value="all">All categories</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Apply
            </button>
            <Link
              href="/search"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Search className="h-4 w-4" />
              Search
            </Link>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 border-b border-slate-200/90 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-3">
            <div
              className="mt-1 hidden h-10 w-1 shrink-0 rounded-full sm:block"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {task === 'profile' ? 'All authors' : 'All PDFs'}
                <span className="ml-2 text-sm font-normal text-slate-500">
                  ({posts.length} results)
                </span>
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-600">
                {task === 'profile'
                  ? 'Verified profiles with bios, links, and published work.'
                  : 'Curated documents you can preview and download.'}
              </p>
            </div>
          </div>
        </div>
        <TaskListClient task={task} initialPosts={posts} category={normalizedCategory} />
      </section>

      <Footer />
    </div>
  )
}
