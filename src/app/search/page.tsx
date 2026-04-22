import Link from "next/link"
import { Search as SearchIcon, ArrowRight, FileText, Users } from "lucide-react"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"
import { fetchSiteFeed } from "@/lib/site-connector"
import { buildPostUrl, getPostTaskKey } from "@/lib/task-data"
import { getMockPostsForTask } from "@/lib/mock-posts"
import { SITE_CONFIG } from "@/lib/site-config"
import { TaskPostCard } from "@/components/shared/task-post-card"

export const revalidate = 3

const ACCENT = "#2563eb"

const matchText = (value: string, query: string) => value.toLowerCase().includes(query)
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ")
const compactText = (value: unknown) => {
  if (typeof value !== "string") return ""
  return stripHtml(value).replace(/\s+/g, " ").trim().toLowerCase()
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }>
}) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || "").trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || "").trim().toLowerCase()
  const task = (resolved.task || "").trim().toLowerCase()
  const useMaster = resolved.master !== "0"
  const feed = await fetchSiteFeed(
    useMaster ? 1000 : 300,
    useMaster
      ? { fresh: true, category: category || undefined, task: task || undefined }
      : undefined
  )
  const posts = feed?.posts?.length
    ? feed.posts
    : useMaster
    ? []
    : SITE_CONFIG.tasks.flatMap((t) => getMockPostsForTask(t.key))

  const filtered = posts.filter((post) => {
    const content = post.content && typeof post.content === "object" ? post.content : {}
    const typeText = compactText((content as any).type)
    if (typeText === "comment") return false
    const description = compactText((content as any).description)
    const body = compactText((content as any).body)
    const excerpt = compactText((content as any).excerpt)
    const categoryText = compactText((content as any).category)
    const tags = Array.isArray(post.tags) ? post.tags.join(" ") : ""
    const tagsText = compactText(tags)
    const derivedCategory = categoryText || tagsText
    if (category && !derivedCategory.includes(category)) return false
    if (task && typeText && typeText !== task) return false
    if (!normalized.length) return true
    return (
      matchText(compactText(post.title || ""), normalized) ||
      matchText(compactText(post.summary || ""), normalized) ||
      matchText(description, normalized) ||
      matchText(body, normalized) ||
      matchText(excerpt, normalized) ||
      matchText(tagsText, normalized)
    )
  })

  const results = normalized.length > 0 ? filtered : filtered.slice(0, 24)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1d4ed8 100%)` }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <SearchIcon className="mx-auto h-10 w-10 opacity-90" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {query ? `Results for "${query}"` : "Search the Library"}
          </h1>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Find PDFs, authors, and topics across our entire collection.
          </p>

          <form
            action="/search"
            className="mx-auto mt-8 flex w-full max-w-2xl items-center gap-2 rounded-full bg-white p-1.5 shadow-xl"
          >
            <input type="hidden" name="master" value="1" />
            {category ? <input type="hidden" name="category" value={category} /> : null}
            {task ? <input type="hidden" name="task" value={task} /> : null}
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                name="q"
                defaultValue={query}
                placeholder="Try 'design systems' or 'marketing'..."
                className="h-11 w-full rounded-full bg-transparent pl-11 pr-4 text-sm text-slate-900 outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-full px-6 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: "#0f172a" }}
            >
              Search
            </button>
          </form>

          {query && (
            <p className="mt-5 text-xs text-blue-100">
              Found <strong className="text-white">{results.length}</strong> result
              {results.length === 1 ? "" : "s"}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Quick links */}
        {!query && (
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <Link
              href="/pdf"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">Browse all PDFs</h3>
                <p className="mt-0.5 text-sm text-slate-500">Explore the full library</p>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/profile"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <Users className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">Browse authors</h3>
                <p className="mt-0.5 text-sm text-slate-500">Meet our verified contributors</p>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {results.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((post) => {
              const taskKey = getPostTaskKey(post)
              const href = taskKey ? buildPostUrl(taskKey, post.slug) : `/posts/${post.slug}`
              return <TaskPostCard key={post.id} post={post} href={href} />
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
            <SearchIcon className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-700">No results found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try different keywords or browse the library directly.
            </p>
            <Link
              href="/pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Browse Library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
