import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Practical guides, regulatory updates and case studies on digital, legal, IT and SEO — written for Bangladeshi business leaders.",
  alternates: { canonical: "/blog" },
}

// =====================================================
// BLOG POSTS
// নতুন পোস্ট এখানে যোগ করুন
// Add new blog posts here
// =====================================================
const BLOG_POSTS = [
  {
    slug: "register-bd-domain-2025",
    title: "How to register a .bd domain in 2025: a step-by-step guide",
    excerpt:
      "BTCL changed several rules around .bd registration this year. Here is the up-to-date checklist for businesses applying in 2025.",
    image: "/images/blog/domain-registration.jpg",
    category: "Digital Infrastructure",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "rjsc-private-limited-checklist",
    title: "RJSC private limited company registration: the complete checklist",
    excerpt:
      "Every document you need, every fee you will pay, and every pitfall to avoid when forming a Pvt. Ltd. in Bangladesh.",
    image: "/images/blog/business-formation.jpg",
    category: "Legal Compliance",
    date: "Jan 8, 2025",
    readTime: "9 min read",
  },
  {
    slug: "vat-registration-bangladesh",
    title: "VAT registration in Bangladesh: when do you actually need a BIN?",
    excerpt:
      "Many founders register too early — or too late. We break down the exact thresholds and exemptions that apply.",
    image: "/images/blog/tax-vat.jpg",
    category: "Legal Compliance",
    date: "Dec 28, 2024",
    readTime: "5 min read",
  },
  {
    slug: "ai-automation-small-business",
    title: "5 AI automations that pay for themselves in the first month",
    excerpt:
      "From WhatsApp lead capture to invoice OCR — practical AI projects that work in the Bangladeshi SME context.",
    image: "/images/blog/ai-automation.jpg",
    category: "Managed IT",
    date: "Dec 20, 2024",
    readTime: "7 min read",
  },
  {
    slug: "ecommerce-payment-gateway-bd",
    title: "Choosing an e-commerce payment gateway in Bangladesh",
    excerpt:
      "SSLCommerz, bKash, Nagad, Stripe — which one (or combination) actually fits your store?",
    image: "/images/blog/payment-gateway.jpg",
    category: "Web Development",
    date: "Dec 15, 2024",
    readTime: "8 min read",
  },
  {
    slug: "local-seo-dhaka-business",
    title: "Local SEO playbook for Dhaka businesses",
    excerpt:
      "Google Business Profile optimization, local citations and review systems that move the needle in Dhaka.",
    image: "/images/blog/local-seo.jpg",
    category: "SEO",
    date: "Dec 10, 2024",
    readTime: "10 min read",
  },
  {
    slug: "trademark-bangladesh-guide",
    title: "Trademark registration in Bangladesh: timeline & costs explained",
    excerpt:
      "From DPDT search to certificate — what to expect at each stage, with realistic costs and timeframes.",
    image: "/images/blog/trademark.jpg",
    category: "Legal Compliance",
    date: "Dec 4, 2024",
    readTime: "6 min read",
  },
] as const

const CATEGORIES = [
  "All",
  "Digital Infrastructure",
  "Web Development",
  "Legal Compliance",
  "Managed IT",
  "SEO",
]

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => "featured" in p && p.featured)
  const others = BLOG_POSTS.filter((p) => p.slug !== featured?.slug)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical guides, regulatory updates & case studies"
        description="We write what we wish we had known. Strategies, checklists and Bangladesh-specific deep dives — all from working consultants."
        image="/images/blog/editorial.jpg"
        imageAlt="Editorial desk with research notebooks and laptop"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      {/* Categories filter */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-4 text-sm">
          <span className="font-medium text-muted-foreground">Filter:</span>
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                idx === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container mx-auto px-4 py-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-8 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2 hover:shadow-lg transition"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 lg:p-10">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {featured.category}
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold leading-tight tracking-tight md:text-3xl text-balance group-hover:text-primary transition">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:shadow-md hover:border-primary/40 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug group-hover:text-primary transition text-balance">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load more articles
          </Button>
        </div>
      </section>

      <CTASection
        title="Want our insights in your inbox?"
        description="One thoughtful email a week — regulatory updates, practical guides and the occasional case study. No fluff."
        primaryLabel="Subscribe to Newsletter"
      />
    </>
  )
}
