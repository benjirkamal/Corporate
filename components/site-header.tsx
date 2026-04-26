"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MAIN_NAV } from "@/lib/navigation"
import { SITE_CONFIG } from "@/lib/site-config"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = React.useState<string | null>(null)

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest("[data-nav-item]")) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top contact bar */}
      <div className="hidden md:block border-b border-border/60 bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-9 items-center justify-between gap-6 px-4 text-xs">
          <p className="opacity-90">
            Enterprise digital services for Bangladesh — since {SITE_CONFIG.founded}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="opacity-90 hover:opacity-100 transition"
            >
              {SITE_CONFIG.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition"
            >
              <Phone className="h-3 w-3" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="relative h-10 w-32"> {/* লোগোর সাইজ লোগো অনুযায়ী এখানে পরিবর্তন করতে পারেন */}
            <Image 
              src="/logo.png" 
              alt={SITE_CONFIG.name} 
              fill 
              className="object-contain object-left" 
              priority
            />
          </div>
        </Link>

        {/* Desktop nav - মেনু ফিরিয়ে আনা হয়েছে */}
        <nav className="hidden lg:flex items-center gap-1">
          {MAIN_NAV.map((item) => {
            const hasChildren = item.children && item.children.length > 0
            const isOpen = openDropdown === item.label

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition"
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <div
                key={item.label}
                data-nav-item
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(isOpen ? null : item.label)
                  }
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium transition",
                    isOpen
                      ? "text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-80 rounded-lg border border-border bg-popover p-2 shadow-lg">
                      <Link
                        href={item.href}
                        className="block rounded-md p-3 hover:bg-muted transition"
                      >
                        <div className="font-medium text-sm">
                          All {item.label}
                        </div>
                        {item.description && (
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.description}
                          </div>
                        )}
                      </Link>
                      <div className="my-1 h-px bg-border" />
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-md p-3 hover:bg-muted transition group"
                        >
                          <div className="font-medium text-sm group-hover:text-primary transition">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {MAIN_NAV.map((item) => {
                const hasChildren = item.children && item.children.length > 0
                const isExpanded = openMobileMenu === item.label

                return (
                  <li key={item.label}>
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobileMenu(isExpanded ? null : item.label)
                          }
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium hover:bg-muted transition"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                        {isExpanded && (
                          <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                            <li>
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                              >
                                Overview
                              </Link>
                            </li>
                            {item.children!.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-3 text-sm font-medium hover:bg-muted transition"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
