import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { DynamicIcon } from "@/components/dynamic-icon"
import { SITE_CONFIG } from "@/lib/site-config"
import { SERVICE_CATEGORIES } from "@/lib/services-data"

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
}

const categories = Object.values(SERVICE_CATEGORIES)

const HOME_VALUE_PROPS = [
  "RJSC, BTRC and NBR savvy",
  "End-to-end digital + legal stack",
  "Senior consultants on every project",
  "Bangla & English support, 24/7",
]

const TESTIMONIALS = [
  {
    quote:
      "Corporate.bd took us from a single-page brochure to a full e-commerce platform with full legal compliance — all in under 90 days.",
    name: "Tahmina Rahman",
    role: "CEO, Riverine Apparels Ltd.",
  },
  {
    quote:
      "Their managed IT and AI automation team has cut our back-office workload by nearly 40%. Best technology partner we have ever engaged.",
    name: "Imran Hossain",
    role: "Director, BD Logistics Group",
  },
  {
    quote:
      "From trade license to product SEO, one team handled everything. The level of follow-through is unusual in this market.",
    name: "Sadia Karim",
    role: "Founder, Karim Organics",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted since {SITE_CONFIG.founded}
            </span>

            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
              Bangladesh&apos;s most complete partner for digital, legal & IT.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
              From the day you register your domain to the day you scale across
              borders, Corporate.bd handles the digital infrastructure, web build,
              legal compliance, managed IT and SEO — under one accountable roof.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {HOME_VALUE_PROPS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
              <Image
                src="/images/home/team.jpg"
                alt="Corporate.bd consulting team collaborating in a Dhaka office"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl bg-accent lg:block"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto grid grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
          {[
            { label: "Clients served", value: SITE_CONFIG.stats.clients },
            { label: "Projects delivered", value: SITE_CONFIG.stats.projects },
            { label: "Countries reached", value: SITE_CONFIG.stats.countries },
            { label: "In-house team", value: SITE_CONFIG.stats.teamSize },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-background px-4 py-8 text-center"
            >
              <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Service pillars */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              What we do
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Five practices, one accountable team
            </h2>
            {/* Note: heading kept; we showcase 5 service pillars + a 6th expert-consultation card to balance the grid. */}
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Most Bangladeshi businesses end up juggling five different vendors
              for their digital, legal and IT needs. We bring them under one roof
              with senior leadership and clear SLAs.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <DynamicIcon name={category.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {category.subtitle}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {category.services.slice(0, 4).map((s) => (
                      <li
                        key={s.slug}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Explore {category.shortTitle.toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* 6th card — Talk to an expert (primary CTA card to balance the 3x2 grid) */}
          <Link
            href="/contact"
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary bg-primary p-6 text-primary-foreground hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="font-serif text-xl font-semibold">
                  Need a Custom Solution?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  Not sure which service fits your business? Talk to a senior
                  consultant for a free 30-minute discovery call.
                </p>
                <ul className="mt-4 space-y-1.5">
                  <li className="flex items-center gap-2 text-xs text-primary-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    Free 30-min consultation
                  </li>
                  <li className="flex items-center gap-2 text-xs text-primary-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    Tailored proposal in 48 hours
                  </li>
                  <li className="flex items-center gap-2 text-xs text-primary-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    Bangla & English support
                  </li>
                  <li className="flex items-center gap-2 text-xs text-primary-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    Serving SMEs across Bangladesh
                  </li>
                </ul>
                <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Book a free call
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto grid gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/home/dhaka-skyline.jpg"
              alt="Dhaka business district at golden hour"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Why Corporate.bd
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Built specifically for the Bangladeshi business reality
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Generic agencies don&apos;t understand the nuance of dealing with
              RJSC filings, BTRC approvals, NBR returns and shifting compliance
              rules. We were founded in Dhaka, by practitioners who navigate this
              every day.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "One vendor, one bill",
                  description:
                    "Stop chasing five vendors. We coordinate domains, hosting, legal and SEO under one project manager.",
                  icon: "Handshake",
                },
                {
                  title: "Senior-led delivery",
                  description:
                    "Every project is led by a senior consultant — not a junior intermediary.",
                  icon: "Award",
                },
                {
                  title: "Local + global standards",
                  description:
                    "We follow ISO-aligned processes while staying tuned to Bangladesh-specific regulations.",
                  icon: "Globe",
                },
                {
                  title: "Transparent pricing",
                  description:
                    "Fixed-fee proposals or clear hourly rates. No surprise invoices, ever.",
                  icon: "BadgeDollarSign",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <DynamicIcon name={item.icon} className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Our engagement
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
            A proven, predictable path from idea to launch
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery call",
              description:
                "A 30-minute call to understand your business, goals and constraints.",
            },
            {
              step: "02",
              title: "Tailored proposal",
              description:
                "A clear scope, timeline and fixed-fee proposal — usually within 48 hours.",
            },
            {
              step: "03",
              title: "Delivery sprints",
              description:
                "Two-week sprints with weekly demos and a single point of contact.",
            },
            {
              step: "04",
              title: "Go live & support",
              description:
                "Launch readiness checks, training, and an SLA-backed support contract.",
            },
          ].map((step) => (
            <div key={step.step} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-4xl font-bold text-accent">
                {step.step}
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Client voices
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Trusted by founders and CXOs across Bangladesh
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's discuss your next move"
        description="Book a free 30-minute consultation. Walk away with a clear roadmap, even if you don't engage us."
        primaryLabel="Book Free Consultation"
      />
    </>
  )
}
