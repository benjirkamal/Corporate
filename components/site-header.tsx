"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image" // ইমেজ কম্পোনেন্ট ইমপোর্ট করা হয়েছে
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MAIN_NAV } from "@/lib/navigation"
import { SITE_CONFIG } from "@/lib/site-config"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = React.useState<string | null>(null)

  // ... (পূর্বের useEffect কোডটি এখানে থাকবে)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* ... (Top contact bar অংশটি যেমন ছিল তেমনই থাকবে) */}

      {/* Main navigation */}
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight"
        >
          {/* এখানে লোগোটি যুক্ত করা হয়েছে */}
          <div className="relative h-9 w-28"> 
            <Image 
              src="/icon.svg" 
              alt={SITE_CONFIG.name} 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:inline">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* ... (বাকি নেভিগেশন কোডগুলো অপরিবর্তিত থাকবে) */}
      </div>
      
      {/* ... (Mobile menu কোডগুলো অপরিবর্তিত থাকবে) */}
    </header>
  )
}
