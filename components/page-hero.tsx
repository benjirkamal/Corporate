import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Breadcrumb = {
  label: string
  href?: string
}

type PageHeroProps = {
  eyebrow?: string
  title: string
  description: string
  image: string
  imageAlt: string
  breadcrumbs?: Breadcrumb[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:items-center">
        <div>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/70">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1
                  return (
                    <li key={`${crumb.label}-${idx}`} className="flex items-center gap-1.5">
                      {crumb.href && !isLast ? (
                        <Link href={crumb.href} className="hover:text-primary-foreground transition">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-primary-foreground">{crumb.label}</span>
                      )}
                      {!isLast && <ChevronRight className="h-3 w-3" />}
                    </li>
                  )
                })}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              {eyebrow}
            </span>
          )}

          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg text-pretty">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 shadow-2xl">
            <Image
              src={image || "/placeholder.svg"}
              alt={imageAlt}
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
  )
}
