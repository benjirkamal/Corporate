// =====================================================
// NAVIGATION STRUCTURE
// সকল মেনু এবং সাব-মেনু এখানে এডিট করুন
// =====================================================

export type NavItem = {
  label: string
  href: string
  description?: string
  children?: NavItem[]
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Digital Infrastructure",
    href: "/digital-infrastructure",
    description: "Domains, email, hosting and security for your business.",
    children: [
      {
        label: "Domain Services",
        href: "/digital-infrastructure/domain-services",
        description: "Register and manage .bd, .com and global domains.",
      },
      {
        label: "Corporate Email",
        href: "/digital-infrastructure/corporate-email",
        description: "Professional email with your own domain.",
      },
      {
        label: "Cloud Hosting",
        href: "/digital-infrastructure/cloud-hosting",
        description: "Reliable, scalable cloud hosting solutions.",
      },
      {
        label: "SSL & Security",
        href: "/digital-infrastructure/ssl-security",
        description: "Encrypt and protect your online assets.",
      },
    ],
  },
  {
    label: "Web Development",
    href: "/web-development",
    description: "Custom websites, e-commerce and applications.",
    children: [
      {
        label: "Corporate Websites",
        href: "/web-development/corporate-websites",
        description: "Modern, fast websites that convert.",
      },
      {
        label: "E-commerce Solutions",
        href: "/web-development/ecommerce-solutions",
        description: "Online stores built to scale.",
      },
      {
        label: "Custom Web Apps",
        href: "/web-development/custom-web-apps",
        description: "Tailored web applications for your workflow.",
      },
      {
        label: "CMS Management",
        href: "/web-development/cms-management",
        description: "WordPress, Strapi and headless CMS support.",
      },
    ],
  },
  {
    label: "Legal Compliance",
    href: "/legal-compliance",
    description: "Company formation, licenses, tax and IP services.",
    children: [
      {
        label: "Company Formation",
        href: "/legal-compliance/company-formation",
        description: "Register your company with RJSC.",
      },
      {
        label: "Trade License",
        href: "/legal-compliance/trade-license",
        description: "Acquire and renew trade licenses.",
      },
      {
        label: "Tax & VAT",
        href: "/legal-compliance/tax-vat",
        description: "Income tax, VAT registration and filing.",
      },
      {
        label: "Intellectual Property",
        href: "/legal-compliance/intellectual-property",
        description: "Trademark, copyright and patent services.",
      },
    ],
  },
  {
    label: "Managed IT Services",
    href: "/managed-it-services",
    description: "End-to-end IT support and automation.",
    children: [
      {
        label: "AMC (Annual Maintenance)",
        href: "/managed-it-services/amc",
        description: "Annual contracts that keep IT running.",
      },
      {
        label: "Server Administration",
        href: "/managed-it-services/server-administration",
        description: "Linux and Windows server management.",
      },
      {
        label: "AI Automation",
        href: "/managed-it-services/ai-automation",
        description: "Automate workflows with modern AI.",
      },
      {
        label: "IT Consultancy",
        href: "/managed-it-services/it-consultancy",
        description: "Strategic advice from senior engineers.",
      },
    ],
  },
  {
    label: "SEO",
    href: "/seo",
    description: "Search and content marketing that grows revenue.",
    children: [
      {
        label: "Local SEO",
        href: "/seo/local-seo",
        description: "Rank in your city and across Bangladesh.",
      },
      {
        label: "Google My Business",
        href: "/seo/google-business",
        description: "Make Your Local Identity.",
      },
      {
        label: "Product SEO",
        href: "/seo/product-seo",
        description: "Optimize product pages for buyers.",
      },
      {
        label: "Content Strategy",
        href: "/seo/content-strategy",
        description: "Editorial planning that earns traffic.",
      },
      {
        label: "Social Media Management",
        href: "/seo/social-media-management",
        description: "Grow brand visibility on social channels.",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
]
