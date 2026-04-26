import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/site-config"

type CTASectionProps = {
  title: string
  description: string
  primaryHref?: string
  primaryLabel?: string
}

export function CTASection({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Talk to an Expert",
}: CTASectionProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight md:text-3xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-primary-foreground/85 leading-relaxed text-pretty">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href={primaryHref}>
                {primaryLabel}
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
        </div>
      </div>
    </section>
  )
}
