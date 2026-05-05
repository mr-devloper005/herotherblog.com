"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Download, ArrowLeft, Share2, FileText, Tag, Check } from "lucide-react";

import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PdfViewer } from "@/components/pdf/pdf-viewer";

interface PdfDetailClientProps {
  post: any;
  fileUrl: string;
  category: string;
  related: any[];
  breadcrumbData: any;
}

export default function PdfDetailClient({ post, fileUrl, category, related, breadcrumbData }: PdfDetailClientProps) {
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_40%),linear-gradient(135deg,#ffffff_0%,#f8fafc_50%,#ffffff_100%)] text-slate-900">
      <NavbarShell />
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <Link
            href="/pdf"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to PDF Library
          </Link>
          
          <div className="flex items-center gap-3 relative">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              onClick={handleShare}
            >
              {shareCopied ? (
                <>
                  <Check className="h-4 w-4 mr-2 text-green-600" />
                  URL Copied!
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </>
              )}
            </Button>
            
            {shareCopied && (
              <div className="absolute top-full right-0 mt-2 z-50 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap animate-pulse">
                URL copied to clipboard!
              </div>
            )}
          </div>
        </div>

        {/* PDF Info Card */}
        <Card className="border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-violet-500 to-blue-500 p-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{post.title}</h1>
                    {category && (
                      <div className="mt-2 flex items-center gap-1 text-sm text-slate-600">
                        <Tag className="h-4 w-4" />
                        {category}
                      </div>
                    )}
                  </div>
                </div>
                
                {(() => {
                  const cleanSummary = (post.summary || '').replace(/<[^>]*>/g, '');
                  const filteredSummary = cleanSummary.replace(/Aditya Scientific Instruments offers a comprehensive range of premium petroleum testing instruments designed to meet the rigorous demands of modern oil laboratories\. Our advanced e[^\s]*/g, '').trim();
                  return filteredSummary ? (
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {filteredSummary}
                    </p>
                  ) : null;
                })()}
              </div>
              
              <div className="flex flex-col gap-3">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white border-0 shadow-lg" asChild>
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PDF Viewer */}
        <Card className="border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-slate-900">PDF Viewer</span>
              </div>
            </div>
            <div className="relative bg-slate-100">
              <PdfViewer fileUrl={fileUrl} title={post.title} />
            </div>
          </CardContent>
        </Card>
        
        {related.length ? (
          <section className="pt-8">
            <Card className="border border-slate-200 bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">Related Documents</h2>
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 transition-colors"
                  >
                    View all PDFs
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {related.map((item) => (
                    <Card key={item.id} className="border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-2">
                            <FileText className="h-5 w-5 text-violet-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 truncate">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-600 line-clamp-2">{item.summary || 'No description available'}</p>
                            <div className="mt-3 flex justify-end">
                              <Link
                                href={`/pdf/${item.slug}`}
                                className="text-xs text-violet-600 hover:text-violet-700 transition-colors"
                              >
                                View →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {related.slice(0, 4).map((item) => (
                      <Link
                        key={`quick-${item.id}`}
                        href={`/pdf/${item.slug}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-violet-600"></div>
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href="/pdf"
                      className="flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700 transition-colors font-medium"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-violet-600"></div>
                      Browse all PDFs
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
