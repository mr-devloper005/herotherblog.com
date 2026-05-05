import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";

export const revalidate = 3;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeRichHtml = (html: string) =>
  html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

const formatRichHtml = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
  const source = typeof raw === "string" ? raw.trim() : "";
  if (!source) return `<p>${escapeHtml(fallback)}</p>`;
  if (/<[a-z][\s\S]*>/i.test(source)) return sanitizeRichHtml(source);
  return source
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\n/g, " ").trim())}</p>`)
    .join("");
};

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) {
    notFound();
  }
  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionHtml = formatRichHtml(description);
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Profiles",
        item: `${baseUrl}/profile`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: `${baseUrl}/profile/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcfaf6' }}>
      <NavbarShell />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        <Card className="overflow-hidden border-0 shadow-2xl" style={{ backgroundColor: '#fcfaf6' }}>
          <CardContent className="p-0">
            <div className="relative">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />
              
              {/* Profile content */}
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col items-center space-y-6 md:flex-row md:items-start md:space-x-8 md:space-y-0">
                  {/* Profile Picture */}
                  <div className="relative">
                    <div className="relative h-40 w-40 overflow-hidden border-2 border-indigo-200 p-1 shadow-2xl">
                      <div className="h-full w-full overflow-hidden">
                        {logoUrl ? (
                          <img 
                            src={logoUrl} 
                            alt={post.title} 
                            className="h-full w-full object-cover" 
                            style={{ objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-4xl font-extrabold text-indigo-600" style={{ fontFamily: 'Georgia, serif' }}>
                            {post.title.slice(0, 1).toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Online status indicator */}
                    <div className="absolute bottom-3 right-3 h-5 w-5 rounded-full bg-emerald-500 border-2 border-white shadow-lg" />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="space-y-4">
                      <h1 className="text-4xl font-black md:text-5xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>{brandName}</h1>
                    </div>

                    {/* Description */}
                    <div className="mt-6 max-w-2xl">
                      {domain && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full mb-4">
                          <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                          <span className="text-sm font-medium text-indigo-700">{domain}</span>
                        </div>
                      )}
                      {(() => {
                        const cleanDescription = description.replace(/<[^>]*>/g, '');
                        const filteredDescription = cleanDescription.replace(/Aditya Scientific Instruments offers a comprehensive range of premium petroleum testing instruments designed to meet the rigorous demands of modern oil laboratories\. Our advanced e[^\s]*/g, '').trim();
                        return filteredDescription ? (
                          <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
                            {filteredDescription.slice(0, 200)}...
                          </p>
                        ) : null;
                      })()}
                    </div>

                    
                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                      <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-10 py-4 rounded-full font-semibold shadow-xl" asChild>
                        <Link href="/login">
                          Follow Profile
                        </Link>
                      </Button>
                      {website && (
                        <Button variant="outline" size="lg" className="border-2 border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 px-10 py-4 rounded-full font-semibold shadow-lg" asChild>
                          <Link href={website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-xl border border-indigo-100">
                  <div className="text-center">
                    <div className="text-3xl font-black">0</div>
                    <div className="text-sm font-medium text-indigo-600 uppercase tracking-wider">Following</div>
                  </div>
                  <div className="text-center border-l-2 border-indigo-200">
                    <div className="text-3xl font-black">{Math.floor(Math.random() * 7) + 4}</div>
                    <div className="text-sm font-medium text-purple-600 uppercase tracking-wider">Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {suggestedArticles.length ? (
          <section className="mt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Suggested articles</h2>
              <Link href="/articles" className="text-sm font-medium text-violet-600 hover:text-violet-700">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedArticles.slice(0, 3).map((article) => (
                <TaskPostCard
                  key={article.id}
                  post={article}
                  href={buildPostUrl("article", article.slug)}
                  compact
                />
              ))}
            </div>
            <nav className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Related links</p>
              <ul className="mt-2 space-y-2 text-sm">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <li key={`related-${article.id}`}>
                    <Link
                      href={buildPostUrl("article", article.slug)}
                      className="text-violet-600 hover:text-violet-700 underline-offset-4 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/profile" className="text-violet-600 hover:text-violet-700 underline-offset-4 hover:underline">
                    Browse all profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
