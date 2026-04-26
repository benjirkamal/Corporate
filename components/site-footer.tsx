import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"
import { MAIN_NAV } from "@/lib/navigation"

export function SiteFooter() {
  const serviceCategories = MAIN_NAV.filter(
    (item) => item.children && item.children.length > 0
  )

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground font-sans text-sm font-bold">
                C.
              </div>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Service columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 md:grid-cols-3">
            {serviceCategories.slice(0, 3).map((category) => (
              <div key={category.label}>
                <h3 className="font-serif font-semibold text-sm tracking-wide uppercase text-accent">
                  {category.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {category.children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-sm tracking-wide uppercase text-accent">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2},{" "}
                  {SITE_CONFIG.address.city} {SITE_CONFIG.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-primary-foreground transition">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary-foreground transition">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/blog" className="hover:text-primary-foreground transition">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground transition">
              Contact
            </Link>
            <span className="opacity-70">{SITE_CONFIG.workingHours}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
