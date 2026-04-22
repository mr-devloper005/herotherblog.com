"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText, Plus, Save, User } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/auth-context";
import { CATEGORY_OPTIONS } from "@/lib/categories";
import { SITE_CONFIG, type TaskKey } from "@/lib/site-config";
import { addLocalPost } from "@/lib/local-posts";

const ACCENT = "#2563eb";

type Field = {
  key: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "url"
    | "number"
    | "tags"
    | "images"
    | "highlights"
    | "category"
    | "file";
  placeholder?: string;
  required?: boolean;
};

const FORM_CONFIG: Record<TaskKey, { title: string; description: string; fields: Field[] }> = {
  listing: {
    title: "Create Business Listing",
    description: "Add a local-only listing with business details.",
    fields: [
      { key: "title", label: "Listing title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Full description", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "location", label: "Location", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "email", label: "Business email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "logo", label: "Logo URL", type: "url" },
      { key: "images", label: "Gallery images", type: "images" },
      { key: "highlights", label: "Highlights", type: "highlights" },
    ],
  },
  classified: {
    title: "Create Classified",
    description: "Add a local-only classified ad.",
    fields: [
      { key: "title", label: "Ad title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Ad details", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "location", label: "Location", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "email", label: "Business email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "images", label: "Images", type: "images" },
      { key: "highlights", label: "Highlights", type: "highlights" },
    ],
  },
  article: {
    title: "Create Article",
    description: "Write a local-only article post.",
    fields: [
      { key: "title", label: "Article title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Article content (HTML allowed)", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "images", label: "Cover images", type: "images" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  image: {
    title: "Create Image Share",
    description: "Share image-only content locally.",
    fields: [
      { key: "title", label: "Image title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Caption", type: "textarea" },
      { key: "category", label: "Category", type: "category" },
      { key: "images", label: "Images", type: "images", required: true },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  profile: {
    title: "Create Profile",
    description: "Create a local-only business profile.",
    fields: [
      { key: "brandName", label: "Brand name", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "About the brand", type: "textarea" },
      { key: "website", label: "Website URL", type: "url", required: true },
      { key: "logo", label: "Logo URL", type: "url", required: true },
    ],
  },
  social: {
    title: "Create Social Post",
    description: "Publish a local-only social update.",
    fields: [
      { key: "title", label: "Post title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Post content", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category" },
      { key: "images", label: "Images", type: "images" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  sbm: {
    title: "Create Bookmark",
    description: "Submit a local-only social bookmark.",
    fields: [
      { key: "title", label: "Bookmark title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Why it’s useful", type: "textarea" },
      { key: "website", label: "Target URL", type: "url", required: true },
      { key: "category", label: "Category", type: "category" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  pdf: {
    title: "Create PDF Entry",
    description: "Add a local-only PDF resource.",
    fields: [
      { key: "title", label: "PDF title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Description", type: "textarea" },
      { key: "fileUrl", label: "PDF file URL", type: "file", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "images", label: "Cover image", type: "images" },
    ],
  },
  org: {
    title: "Create Organization",
    description: "Create a local-only organization profile.",
    fields: [
      { key: "brandName", label: "Organization name", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "About the organization", type: "textarea" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "logo", label: "Logo URL", type: "url" },
    ],
  },
  comment: {
    title: "Create Blog Comment",
    description: "Store a local-only blog comment entry.",
    fields: [
      { key: "title", label: "Comment title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Comment body", type: "textarea", required: true },
      { key: "website", label: "Target post URL", type: "url", required: true },
      { key: "category", label: "Category", type: "category" },
    ],
  },
};

export default function CreateTaskPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const taskKey = params?.task as TaskKey;

  const taskConfig = useMemo(
    () => SITE_CONFIG.tasks.find((task) => task.key === taskKey && task.enabled),
    [taskKey]
  );
  const formConfig = FORM_CONFIG[taskKey];
  const isLibraryShell = taskKey === "profile" || taskKey === "pdf";

  const [values, setValues] = useState<Record<string, string>>({});
  const [uploadingPdf, setUploadingPdf] = useState(false);

  if (!taskConfig || !formConfig) {
    return (
      <div className="min-h-screen bg-background">
        <NavbarShell />
        <main className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-foreground">Task not available</h1>
          <p className="mt-2 text-muted-foreground">
            This task is not enabled for the current site.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/">Back home</Link>
          </Button>
        </main>
      </div>
    );
  }

  const updateValue = (key: string, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in before creating content.",
      });
      router.push("/login");
      return;
    }

    const missing = formConfig.fields.filter((field) => field.required && !values[field.key]);
    if (missing.length) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields before saving.",
      });
      return;
    }

    const title = values.title || values.brandName || "Untitled";
    const summary = values.summary || "";
    const contentType = taskConfig.contentType || taskKey;

    const content: Record<string, unknown> = {
      type: contentType,
    };

    if (values.category) content.category = values.category;
    if (values.description) content.description = values.description;
    if (values.website) content.website = values.website;
    if (values.email) content.email = values.email;
    if (values.phone) content.phone = values.phone;
    if (values.address) content.address = values.address;
    if (values.location) content.location = values.location;
    if (values.logo) content.logo = values.logo;
    if (values.fileUrl) content.fileUrl = values.fileUrl;
    if (values.brandName) content.brandName = values.brandName;

    const highlights = values.highlights
      ? values.highlights.split(",").map((item) => item.trim()).filter(Boolean)
      : [];
    if (highlights.length) content.highlights = highlights;

    const tags = values.tags
      ? values.tags.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    const images = values.images
      ? values.images.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    const post = addLocalPost({
      task: taskKey,
      title,
      summary,
      authorName: user.name,
      tags,
      content,
      media: images.map((url) => ({ url, type: "IMAGE" })),
      publishedAt: new Date().toISOString(),
    });

    toast({
      title: "Saved locally",
      description: "This post is stored only in your browser.",
    });

    router.push(`/local/${taskKey}/${post.slug}`);
  };

  const HeroIcon = taskKey === "profile" ? User : FileText;

  const formFields = (
    <>
      <div
        className={cn(
          "flex flex-wrap gap-2",
          isLibraryShell && "rounded-xl border border-slate-100 bg-slate-50/60 p-3"
        )}
      >
        <Badge
          variant="secondary"
          className={cn(isLibraryShell && "border-blue-100 bg-blue-50 text-blue-900")}
        >
          {taskConfig.label}
        </Badge>
        <Badge variant="outline" className={cn(isLibraryShell && "border-slate-200 text-slate-600")}>
          Local-only
        </Badge>
      </div>

      <div className="mt-6 grid gap-6">
        {formConfig.fields.map((field) => (
          <div key={field.key} className="grid gap-2">
            <Label className={cn(isLibraryShell && "text-slate-700")}>
              {field.label} {field.required ? <span className="text-red-500">*</span> : null}
            </Label>
            {field.type === "textarea" ? (
              <Textarea
                rows={4}
                placeholder={field.placeholder}
                value={values[field.key] || ""}
                onChange={(event) => updateValue(field.key, event.target.value)}
                className={cn(
                  "border-2 border-slate-200 bg-white focus-visible:ring-2 focus-visible:ring-primary/30",
                  isLibraryShell &&
                    "rounded-xl border border-slate-200 focus-visible:border-blue-400 focus-visible:ring-blue-100"
                )}
              />
            ) : field.type === "category" ? (
              <select
                value={values[field.key] || ""}
                onChange={(event) => updateValue(field.key, event.target.value)}
                className={cn(
                  "h-11 rounded-lg border-2 border-slate-200 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  isLibraryShell &&
                    "rounded-xl border border-slate-200 bg-slate-50/80 focus-visible:border-blue-400 focus-visible:ring-blue-100"
                )}
              >
                <option value="">Select category</option>
                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option.slug} value={option.slug}>
                    {option.name}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <div className="grid gap-3">
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    if (file.type !== "application/pdf") {
                      toast({
                        title: "Invalid file",
                        description: "Please upload a PDF file.",
                      });
                      return;
                    }
                    const reader = new FileReader();
                    setUploadingPdf(true);
                    reader.onload = () => {
                      const result = typeof reader.result === "string" ? reader.result : "";
                      updateValue(field.key, result);
                      setUploadingPdf(false);
                      toast({
                        title: "PDF uploaded",
                        description: "File is stored locally.",
                      });
                    };
                    reader.readAsDataURL(file);
                  }}
                  className={cn(isLibraryShell && "cursor-pointer rounded-xl border-slate-200 bg-white")}
                />
                <Input
                  type="text"
                  placeholder="Or paste a PDF URL"
                  value={values[field.key] || ""}
                  onChange={(event) => updateValue(field.key, event.target.value)}
                  className={cn(isLibraryShell && "h-11 rounded-xl border-slate-200")}
                />
                {uploadingPdf ? (
                  <p className="text-xs text-muted-foreground">Uploading PDF…</p>
                ) : null}
              </div>
            ) : (
              <Input
                type={field.type === "number" ? "number" : "text"}
                placeholder={
                  field.type === "images" || field.type === "tags" || field.type === "highlights"
                    ? "Separate values with commas"
                    : field.placeholder
                }
                value={values[field.key] || ""}
                onChange={(event) => updateValue(field.key, event.target.value)}
                className={cn(
                  "h-11 border-2 border-slate-200 bg-white focus-visible:ring-2 focus-visible:ring-primary/30",
                  isLibraryShell &&
                    "rounded-xl border border-slate-200 bg-slate-50/80 focus-visible:border-blue-400 focus-visible:ring-blue-100"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          onClick={handleSubmit}
          className={cn(isLibraryShell && "rounded-full px-6 font-semibold text-white shadow-md hover:opacity-90")}
          style={isLibraryShell ? { backgroundColor: ACCENT } : undefined}
        >
          <Save className="mr-2 h-4 w-4" />
          Save locally
        </Button>
        <Button variant="outline" asChild className={cn(isLibraryShell && "rounded-full border-slate-200 font-semibold")}>
          <Link href={taskConfig.route}>
            View {taskConfig.label}
            <Plus className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );

  return (
    <div
      className={cn(
        "min-h-screen",
        isLibraryShell
          ? "bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900"
          : "bg-background"
      )}
    >
      <NavbarShell />
      <main
        className={cn("mx-auto max-w-4xl px-4", isLibraryShell ? "py-10 sm:py-14" : "py-12")}
      >
        <div className={cn("mb-8 flex items-center gap-3", isLibraryShell && "sm:mb-10")}>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className={cn(isLibraryShell && "rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50")}
          >
            <Link href={isLibraryShell ? taskConfig.route : "/"}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          {!isLibraryShell ? (
            <div>
              <h1 className="text-2xl font-semibold text-foreground">{formConfig.title}</h1>
              <p className="text-sm text-muted-foreground">{formConfig.description}</p>
            </div>
          ) : (
            <div className="text-sm text-slate-600">
              Back to{" "}
              <Link href={taskConfig.route} className="font-semibold text-blue-600 hover:underline">
                {taskConfig.label}
              </Link>
            </div>
          )}
        </div>

        {isLibraryShell ? (
          <>
            <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(37,99,235,0.08)]">
              <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {taskKey === "profile" ? "Contributor profile" : "PDF library"}
                  </p>
                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {formConfig.title}
                  </h1>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                    {formConfig.description}
                  </p>
                </div>
                <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-blue-50 sm:h-28 sm:w-28 sm:shrink-0">
                  <HeroIcon className="h-10 w-10 sm:h-12 sm:w-12" style={{ color: ACCENT }} />
                </div>
              </div>
            </section>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {formFields}
            </div>

            <Footer />
          </>
        ) : (
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">{formFields}</div>
        )}
      </main>
    </div>
  );
}
