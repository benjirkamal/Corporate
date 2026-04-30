import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",        // এই লাইনটি পরিবর্তন করা হয়েছে
      disallow: "",      // disallow খালি রাখা হয়েছে যেন সবকিছু ইনডেক্স হতে পারে
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  }
}