import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Users,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const ACCENT = '#2563eb'
const ACCENT_DARK = '#1d4ed8'

const featuredPdfs = [
  {
    title: 'Modern Web Development Handbook',
    category: 'Technology',
    pages: '182',
    size: '4.2 MB',
    author: 'Sarah Mitchell',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60',
    badge: 'NEW',
  },
  {
    title: 'Business Strategy Playbook 2026',
    category: 'Business',
    pages: '156',
    size: '3.8 MB',
    author: 'James Carter',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=60',
    badge: 'POPULAR',
  },
  {
    title: 'Complete Guide to Digital Marketing',
    category: 'Marketing',
    pages: '210',
    size: '5.1 MB',
    author: 'Emily Brooks',
    image:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=60',
    badge: 'NEW',
  },
  {
    title: 'Design Systems Fundamentals',
    category: 'Design',
    pages: '120',
    size: '2.9 MB',
    author: 'Michael Ross',
    image:
      'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=60',
    badge: 'FREE',
  },
  {
    title: 'Data Science in Practice',
    category: 'Science',
    pages: '274',
    size: '6.4 MB',
    author: 'Dr. Lisa Wang',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
    badge: 'NEW',
  },
  {
    title: 'Creative Writing Essentials',
    category: 'Literature',
    pages: '98',
    size: '1.8 MB',
    author: 'Anna Williams',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=60',
    badge: 'FREE',
  },
  {
    title: 'Personal Finance Master Guide',
    category: 'Finance',
    pages: '164',
    size: '3.2 MB',
    author: 'Robert Klein',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=60',
    badge: 'POPULAR',
  },
  {
    title: 'Health & Wellness Companion',
    category: 'Health',
    pages: '140',
    size: '2.7 MB',
    author: 'Dr. Priya Sharma',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=60',
    badge: 'NEW',
  },
]

const featuredProfiles = [
  {
    name: 'Sarah Mitchell',
    role: 'Tech Author & Educator',
    uploads: 24,
    followers: '12.4k',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'James Carter',
    role: 'Business Strategist',
    uploads: 18,
    followers: '8.9k',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60',
  },
  {
    name: 'Emily Brooks',
    role: 'Marketing Expert',
    uploads: 31,
    followers: '15.2k',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=60',
  },
]

const testimonials = [
  {
    name: 'David Olson',
    date: '1st July 2025',
    text: 'A truly professional PDF library with great resources and organized profiles.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Stephanie Nicol',
    date: '14th July 2025',
    text: 'Very useful, they offer the best collection of PDFs and expert author profiles.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60',
  },
  {
    name: 'Allen Jordan',
    date: '22nd July 2025',
    text: 'Great experience and friendly service, reflects the level of quality here.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60',
  },
]

export function HomePageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div
            className="relative h-[520px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=70)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                "Your Trusted Library for
                <br />
                PDFs &amp; Profiles"
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Experience seamless access to {SITE_CONFIG.name} with our curated PDF collection and
                verified author profiles. From research papers to creative works, we host it all —
                organized, searchable, and free to download.
              </p>
              <Link
                href="/pdf"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Browse Library
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE PDFS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Explore Our PDFs
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Enjoy a variety of 100+ different PDFs in our library!
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPdfs.map((pdf) => (
            <article
              key={pdf.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={pdf.image}
                  alt={pdf.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span
                  className="absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {pdf.badge}
                </span>
                <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold text-slate-800">
                  {pdf.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <FileText className="h-3.5 w-3.5" />
                    {pdf.pages} pages
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Download className="h-3.5 w-3.5" />
                    {pdf.size}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{pdf.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <User className="h-3 w-3" />
                  {pdf.author}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pdf"
            className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition hover:bg-blue-50"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Load More
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US + INQUIRY FORM */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=60)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Why Our
              <br /> Library Is The
              <br /> Perfect Choice?
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                {
                  n: '01.',
                  t: 'Curated PDF Collection',
                  d: 'We handpick high-quality PDFs across categories — research, business, design, and more — for easy discovery.',
                },
                {
                  n: '02.',
                  t: 'Verified Author Profiles',
                  d: 'Every contributor is verified. Follow authors, track their uploads, and connect with the community directly.',
                },
                {
                  n: '03.',
                  t: 'Unlimited Downloads',
                  d: 'Access, preview, and download PDFs without restrictions. Build your personal library in one click.',
                },
                {
                  n: '04.',
                  t: '24/7 Support',
                  d: 'Our dedicated team is always here to help — whether you need a document or have a question, we respond fast.',
                },
              ].map((item) => (
                <div key={item.n}>
                  <div className="text-2xl font-bold" style={{ color: '#8cb4ff' }}>
                    {item.n}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
            <h3 className="text-lg font-semibold">Library Inquiry Form</h3>
            <form className="mt-5 grid gap-3">
              {['Inquiry Type', 'Name', 'Email', 'Phone (Optional)'].map((label) => (
                <div key={label}>
                  <label className="text-[11px] font-medium text-slate-600">{label}</label>
                  <input
                    className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                    placeholder={label}
                  />
                </div>
              ))}
              <div>
                <label className="text-[11px] font-medium text-slate-600">Message</label>
                <textarea
                  className="mt-1 h-20 w-full resize-none rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
                  placeholder="Tell us what you are looking for..."
                />
              </div>
              <button
                type="button"
                className="mt-1 h-10 rounded-md text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURED PROFILES */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured Profiles
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Meet our top contributors sharing knowledge with the world.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProfiles.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span
                  className="absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Verified
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-500">{p.role}</p>
                <div className="mt-4 flex items-center gap-5 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    {p.uploads} PDFs
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {p.followers} Followers
                  </span>
                </div>
                <Link
                  href="/profile"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: ACCENT }}
                >
                  View Profile <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-3 text-sm text-slate-500">What Our Readers Say About Us</p>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <img
                src={t.image}
                alt={t.name}
                className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-50"
              />
              <h4 className="mt-3 text-base font-semibold">{t.name}</h4>
              <p className="text-[11px] text-slate-400">{t.date}</p>
              <div className="mt-2 flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm italic leading-6 text-slate-600">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
          <div>
            <h3 className="text-xl font-semibold">Newsletter Signup</h3>
            <p className="mt-1 text-sm text-slate-400">
              Get notified when new PDFs are added to the library.
            </p>
          </div>
          <form className="flex w-full max-w-md items-center overflow-hidden rounded-full bg-white p-1 shadow">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 text-sm text-slate-900 outline-none"
            />
            <button
              type="button"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
