// =====================================================
// SERVICES DATA
// প্রতিটি সার্ভিস পেইজের কন্টেন্ট এখানে এডিট করুন
// Edit content for every service page in this file
// =====================================================

export type ServiceFeature = {
  title: string
  description: string
  icon: string // lucide-react icon name
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type FAQ = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  description: string // meta description
  icon: string
  heroImage: string
  overviewTitle: string
  overview: string[]
  featuresHeading: string
  features: ServiceFeature[]
  benefits: string[]
  process: ProcessStep[]
  faqs: FAQ[]
  ctaTitle: string
  ctaDescription: string
}

export type ServiceCategory = {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  icon: string
  heroImage: string
  intro: string
  services: Service[]
}

export type WhyChooseUsItem = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  whyChooseUsTitle?: string;       // সেকশনের মেইন টাইটেল
  whyChooseUsDescription?: string; // সেকশনের ছোট বর্ণনা
  whyChooseUs?: WhyChooseUsItem[]; // ৩-৪টি কারণের লিস্ট
};





export const SERVICE_CATEGORIES: Record<string, ServiceCategory> = {
  // =========================================================
  // 1. DIGITAL INFRASTRUCTURE
  // =========================================================
  "digital-infrastructure": {
    slug: "digital-infrastructure",
    title: "Digital Infrastructure",
    shortTitle: "Infrastructure",
    subtitle: "The foundation your business runs on",
    description:
      "Domain registration, corporate email, cloud hosting and SSL security services for businesses across Bangladesh.",
    icon: "Server",
    heroImage: "/images/services/digital-infrastructure.jpg",
    intro:
      "From the moment a customer types your domain to the final byte delivered to their browser, our digital infrastructure keeps your business online, secure and fast. We handle domains, email, hosting and security so your team can focus on growth.",
    services: [
      {
        slug: "domain-services",
        title: "Official .bd Domain Registration, Corporate BTCL Services for Global Brands",
        shortTitle: "Domains",
        subtitle: "Register, transfer and manage your business domains",
        description:
          "Register .bd, .com.bd, .com and global domains with DNS management, privacy protection and 24/7 support.",
        icon: "Globe",
        heroImage: "/images/services/bd-domain-services.jpg",
        overviewTitle: "Own the digital address of your brand",
        overview: [
          "Your domain is the front door of your business online. We help Bangladeshi companies secure the right domain names — from country-specific .bd and .com.bd extensions to global TLDs like .com, .io, .org and the new generic gTLDs.",
          "Beyond registration, we offer DNS management, domain transfer, bulk renewal reminders, WHOIS privacy and dispute resolution support so your most valuable digital asset is always protected.",
        ],
    whyChooseUsTitle: "Why Choose Us for Domain Management?", // Why chose us section.
        whyChooseUsDescription: "Your digital presence is the foundation of your business reputation. At Corporate.bd, we go beyond simple registration to provide a comprehensive domain ecosystem. We combine industry-leading security protocols with a streamlined management interface, ensuring your brand stays protected, accessible, and perfectly aligned with your growth strategy—both at home in Bangladesh and across the global market.",
        whyChooseUs: [
    { title: "Enterprise-Grade Security", description: "We prioritize your brand safety with advanced domain locking and privacy protection services." },
    { title: "Easy Management Dashboard", description: "Simplify your life with our intuitive interface, allowing you to manage multiple domains, DNS settings, and renewals in one place." },
    { title: "Proactive Renewal Reminders", description: "Never lose your domain. We provide automated alerts and managed renewal services so your online presence remains uninterrupted." }
  ],
        featuresHeading: "Everything you need to manage your domain portfolio", // ফিচার টাইটেল
        features: [
          {
            title: ".bd & .com.bd Registration",
            description:
              "We coordinate directly with BTCL to register your country-specific domain quickly and correctly.",
            icon: "Flag",
          },
          {
            title: "Global TLD Registration",
            description:
              "Register .com, .net, .org, .io, .co and 300+ extensions through our authorized registrar partners.",
            icon: "Globe",
          },
          {
            title: "DNS Management",
            description:
              "Easy A, CNAME, MX, TXT and SRV record management with low-TTL support for fast propagation.",
            icon: "Network",
          },
          {
            title: "Domain Transfer",
            description:
              "Move your domain from any registrar to us with zero downtime and full record preservation.",
            icon: "ArrowRightLeft",
          },
          {
            title: "WHOIS Privacy",
            description:
              "Protect personal information from public WHOIS databases and reduce spam.",
            icon: "ShieldCheck",
          },
          {
            title: "Renewal Management",
            description:
              "Automated reminders, bulk renewals and grace-period recovery so you never lose a domain.",
            icon: "RefreshCw",
          },
        ],
        benefits: [
          "Authorized partner experience with BTCL and global registrars",
          "Single dashboard to manage all your domains",
          "24/7 local support in Bangla and English",
          "Transparent pricing with no hidden fees",
        ],
        process: [
          {
            step: "01",
            title: "Search & Select",
            description:
              "Use our search tool or talk to a consultant to find the perfect domain.",
          },
          {
            step: "02",
            title: "Verify & Register",
            description:
              "We collect required documents and submit registration with the registry.",
          },
          {
            step: "03",
            title: "Configure DNS",
            description:
              "We point your domain to your hosting, email and other services.",
          },
          {
            step: "04",
            title: "Ongoing Support",
            description:
              "We monitor expiry, renew on time and handle any technical changes.",
          },
        ],
        faqs: [
          {
            question: "How long does .bd domain registration take?",
            answer:
              "Typical .bd registration takes 3 to 7 working days after BTCL receives the required documents. We help prepare paperwork to avoid delays.",
          },
          {
            question: "Can I transfer my existing domain to Corporate.bd?",
            answer:
              "Yes. We support transfers from any registrar with zero downtime. You only need an authorization code from your current provider.",
          },
          {
            question: "Do you offer bulk discounts for multiple domains?",
            answer:
              "Yes, organizations registering 10 or more domains receive volume pricing. Contact our sales team for a custom quote.",
          },
        ],
        ctaTitle: "Ready to claim your domain?",
        ctaDescription:
          "Search availability, lock in your brand and let our team handle the rest.",
      },
      {
        slug: "corporate-email",
        title: "Professional Corporate Email Solutions in Bangladesh",
        shortTitle: "Email",
        subtitle: "Secure, scalable, and professional business email infrastructure tailored to keep your enterprise communication reliable and productive.",
        description:
          "Business email hosting with you@yourcompany.com, calendar, contacts and enterprise security.",
        icon: "Mail",
        heroImage: "/images/services/corporate-email-services-in-bangladesh.webp",
        overviewTitle: "Why Your Business Needs a Professional Email",
        overview: [
          "Using a generic email address like 'yourcompany@gmail.com' can affect how clients perceive your brand. A custom corporate email (e.g., 'info@yourcompany.com') builds instant trust, ensures professional communication, and creates a lasting impression on your clients and partners.",
          "Every plan includes spam protection, calendar, contacts, mobile sync and admin controls. Migrations from Gmail, Yahoo or any IMAP provider are handled by our team.",
        ],


    whyChooseUsTitle: "Why Choose Corporate.bd for Your Business Email?",
        whyChooseUsDescription: "We make managing your domain portfolio simple, secure, and stress-free.",
        whyChooseUs: [
    { title: "Professional Brand Identity", description: "Replace generic email addresses with a custom domain-based identity (e.g., info@yourcompany.com) to establish instant credibility and build lasting trust with your clients." },
    { title: "Enterprise-Grade Security", description: "Safeguard your sensitive business data with our proactive multi-layer defense, featuring advanced spam filtering, anti-phishing protocols, and robust end-to-end encryption." },
    { title: "Scalable Infrastructure", description: "Designed to grow with you, our flexible platform allows for effortless scaling of user accounts and storage capacity, backed by a 99.9% uptime guarantee to ensure your team stays connected 24/7." }
  ],

        featuresHeading: "Professional Business Email Solutions & Features", // ফিচার টাইটেল
        features: [
          {
            title: "Custom Domain Email",
            description:
              "Unlimited aliases like info@, sales@ and your-name@yourcompany.com.",
            icon: "AtSign",
          },
          {
            title: "Google Workspace & Outlook 365",
            description:
              "Authorized partner for Google Workspace and Microsoft 365 with discounted local billing.",
            icon: "Layers",
          },
          {
            title: "Anti-Spam & Anti-Phishing",
            description:
              "Multi-layer filters block 99.9% of malicious mail before it reaches the inbox.",
            icon: "ShieldAlert",
          },
          {
            title: "Mobile & Desktop Sync",
            description:
              "Works seamlessly across iOS, Android, Outlook, Apple Mail and Thunderbird.",
            icon: "Smartphone",
          },
          {
            title: "Calendar & Contacts",
            description:
              "Shared calendars, room booking and centralized contact directories for your team.",
            icon: "Calendar",
          },
          {
            title: "Email Migration",
            description:
              "Free migration from Gmail, cPanel, Zoho or any IMAP/POP source with zero data loss.",
            icon: "Move",
          },
        ],
        benefits: [
          "Local invoicing in BDT with VAT challan",
          "Onboarding training for your administrators",
          "99.9% uptime SLA",
          "Data residency options for sensitive industries",
        ],
        process: [
          {
            step: "01",
            title: "Plan Selection",
            description:
              "We help you pick between Google, Microsoft or private cloud based on team size and budget.",
          },
          {
            step: "02",
            title: "Domain Verification",
            description:
              "Add MX, SPF, DKIM and DMARC records — we configure them for you.",
          },
          {
            step: "03",
            title: "User Provisioning",
            description:
              "Bulk-create accounts, set passwords and assign permissions.",
          },
          {
            step: "04",
            title: "Migration & Training",
            description:
              "Move existing mail and train your team on the new system.",
          },
        ],
        faqs: [
          {
            question: "What is the cost of corporate email per user?",
            answer:
              "Plans start from BDT 350/user/month for Google Workspace Business Starter. Microsoft 365 and private cloud options are also available.",
          },
          {
            question: "Will my old emails be preserved during migration?",
            answer:
              "Yes. We use proven migration tools that keep folders, dates, attachments and read/unread status intact.",
          },
          {
            question: "Can I add or remove users any time?",
            answer:
              "Absolutely. Licenses are flexible — pay only for what you use, billed monthly or annually.",
          },
        ],
        ctaTitle: "Upgrade to professional email",
        ctaDescription:
          "Move from Gmail and Yahoo to a domain-branded inbox in less than a day.",
      },
      {
        slug: "cloud-hosting",
        title: "High-Performance Enterprise Cloud Hosting",
        shortTitle: "Hosting",
        subtitle: "Scale your mission-critical applications with secure, lightning-fast infrastructure built for the modern enterprise.",
        description:
          "Managed cloud hosting on AWS, DigitalOcean, Vercel and our local Bangladesh data centers.",
        icon: "Cloud",
        heroImage: "/images/services/cloud-hosting.jpg",
        overviewTitle: "Cloud Hosting Built for Enterprise Performance",
        overview: [
          "Slow-loading websites lead to lost opportunities. At Corporate.bd, we host your mission-critical sites and applications on a curated blend of premium global cloud providers and locally peered data centers in Bangladesh.",
          "This hybrid infrastructure ensures sub-second load times and a seamless user experience every time.",
        ],

    whyChooseUsTitle: "Why Choose Corporate.bd for Cloud Hosting?", // Why chose us serction.
        whyChooseUsDescription: "Empower your business with a resilient cloud infrastructure built for speed, security, and effortless growth. We manage the complexity so you can focus on your success.",
        whyChooseUs: [
    { title: "Unmatched Performance", description: "Experience lightning-fast load times powered by NVMe SSD storage and a guaranteed 99.9% uptime for your mission-critical sites."},
    { title: "Enterprise-Grade Security", description: "Protect your assets with advanced firewalls, real-time DDoS mitigation, and automated daily backups for total peace of mind." },
    { title: "Scale with Expert Support", description: "Grow your CPU and RAM instantly as your traffic increases, backed by 24/7 proactive monitoring from our local certified engineers." }
  ],
        featuresHeading: "Everything you need to power your digital infrastructure", // ফিচার টাইটেল
              features: [
          {
            title: "Shared & Reseller Hosting",
            description:
              "cPanel-based shared hosting with LiteSpeed, free SSL and one-click WordPress.",
            icon: "Server",
          },
          {
            title: "VPS & Dedicated Servers",
            description:
              "Linux and Windows VPS with NVMe storage, DDoS protection and full root access.",
            icon: "HardDrive",
          },
          {
            title: "Managed Cloud (AWS, DO)",
            description:
              "We design, deploy and operate your infrastructure on the cloud you choose.",
            icon: "Cloud",
          },
          {
            title: "Kubernetes & Containers",
            description:
              "Production-ready Kubernetes clusters with autoscaling and zero-downtime deploys.",
            icon: "Boxes",
          },
          {
            title: "Daily Backups",
            description:
              "Automated off-site backups with one-click restore and 30-day retention.",
            icon: "DatabaseBackup",
          },
          {
            title: "24/7 Monitoring",
            description:
              "We watch CPU, memory, disk and uptime around the clock and act before issues impact you.",
            icon: "Activity",
          },
        ],
        benefits: [
          "Sub-second TTFB across South Asia",
          "Free site migration from any provider",
          "99.99% uptime SLA on managed plans",
          "Local payment options and VAT-compliant invoicing",
        ],
        process: [
          {
            step: "01",
            title: "Discovery",
            description:
              "We audit your current site, traffic and growth plans.",
          },
          {
            step: "02",
            title: "Architecture",
            description:
              "Pick the right stack — shared, VPS, cloud or serverless.",
          },
          {
            step: "03",
            title: "Migrate & Optimize",
            description:
              "Move your data, tune caching and configure CDN.",
          },
          {
            step: "04",
            title: "Manage & Scale",
            description:
              "Ongoing patching, monitoring and capacity planning.",
          },
        ],
        faqs: [
          {
            question: "Do you host inside Bangladesh?",
            answer:
              "Yes. We have peering and infrastructure with multiple Tier-3 data centers in Dhaka for ultra-low latency local access.",
          },
          {
            question: "Can you migrate my WordPress site for free?",
            answer:
              "Free migration is included with all annual plans. We handle DNS, content and zero-downtime cutover.",
          },
          {
            question: "What if my traffic suddenly spikes?",
            answer:
              "Our managed cloud plans autoscale within seconds. For shared/VPS plans, our team can upgrade you online without rebuilding.",
          },
        ],
        ctaTitle: "Host with the best in Bangladesh",
        ctaDescription:
          "Get a free architecture review and migration plan from our cloud team.",
      },
      {
        slug: "ssl-security",
        title: "Secure Your Website with Premium SSL Certificates in Bangladesh",
        shortTitle: "Security",
        subtitle: "Protect user data, boost search engine rankings, and build instant trust with industry-leading SSL encryption solutions.",
        description:
          "SSL certificates, web application firewalls, DDoS protection and security audits.",
        icon: "ShieldCheck",
        heroImage: "/images/services/ssl-security.jpg",
        overviewTitle: "Secure Your Business with Trusted SSL Certificates in BD",
        overview: [
          "A green padlock is no longer optional. Modern browsers warn visitors away from sites without HTTPS, and search engines penalize them in rankings. We provide SSL certificates from globally trusted CAs and a full security stack to protect your business.",
          "From DV certificates for blogs to OV/EV certificates for enterprises and wildcard or multi-domain SANs, we install, renew and monitor everything for you.",
        ],

    whyChooseUsTitle: "Expertise in Web Security and Encryption", // Why chose us serction.
        whyChooseUsDescription: "We don't just sell certificates; we provide end-to-end security implementation for your digital assets.",
        whyChooseUs: [
    { title: "Automated Renewal", description: "Never worry about expiry with our proactive renewal alert system." },
    { title: "Expert Installation", description: "Free technical support for CSR generation and SSL installation on any server." },
    { title: "Local Support", description: "Dedicated security experts available in Bangladesh for instant troubleshooting." }
  ],
        featuresHeading: "Why Your Business Needs an SSL Certificate?", // ফিচার টাইটেল

        features: [
          {
            title: "DV, OV & EV Certificates",
            description:
              "Domain, Organization and Extended Validation certificates from Sectigo, DigiCert and GeoTrust.",
            icon: "Lock",
          },
          {
            title: "Wildcard & Multi-Domain",
            description:
              "Secure unlimited subdomains or multiple domains with a single certificate.",
            icon: "Layers",
          },
          {
            title: "Web Application Firewall",
            description:
              "Cloud-based WAF that blocks OWASP Top 10 attacks and bots in real time.",
            icon: "Shield",
          },
          {
            title: "DDoS Protection",
            description:
              "Layer 3, 4 and 7 mitigation with global anycast scrubbing centers.",
            icon: "Zap",
          },
          {
            title: "Security Audit",
            description:
              "Penetration tests, vulnerability scans and compliance gap analysis.",
            icon: "FileSearch",
          },
          {
            title: "Auto-Renewal",
            description:
              "We monitor expiry and renew automatically so your site never goes red.",
            icon: "RefreshCw",
          },
        ],
        benefits: [
          "Trusted CAs accepted by 99.9% of browsers and devices",
          "Same-day issuance for DV certificates",
          "Free installation on managed hosting",
          "Compliance support for PCI-DSS and ISO 27001",
        ],
        process: [
          {
            step: "01",
            title: "Assessment",
            description:
              "Identify domains, subdomains and security gaps.",
          },
          {
            step: "02",
            title: "Issue Certificate",
            description:
              "Generate CSR, validate ownership and issue the certificate.",
          },
          {
            step: "03",
            title: "Install & Test",
            description:
              "Install on your server, force HTTPS and verify with SSL Labs.",
          },
          {
            step: "04",
            title: "Monitor & Renew",
            description:
              "Continuous monitoring with auto-renewal before expiry.",
          },
        ],
        faqs: [
          {
            question: "What's the difference between DV, OV and EV?",
            answer:
              "DV verifies domain ownership only. OV adds organization verification. EV is the strictest — your company name appears in browser details, ideal for banks and e-commerce.",
          },
          {
            question: "Do you provide free Let's Encrypt SSL?",
            answer:
              "Yes. All our managed hosting plans include free Let's Encrypt with auto-renewal. Paid certificates add stronger validation and warranty.",
          },
          {
            question: "Can you secure subdomains too?",
            answer:
              "Yes. Wildcard certificates secure unlimited subdomains under one domain. Multi-domain SAN certificates protect different domains in one cert.",
          },
        ],
        ctaTitle: "Lock down your website today",
        ctaDescription:
          "Talk to a security engineer for a free SSL and WAF assessment.",
      },
    ],
  },

  // =========================================================
  // 2. WEB DEVELOPMENT
  // =========================================================
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    subtitle: "Websites and applications that grow your business",
    description:
      "Custom corporate websites, e-commerce platforms, web applications and CMS solutions built with modern stacks.",
    icon: "Code2",
    heroImage: "/images/services/web-development.jpg",
    intro:
      "We design and build websites and web applications that look beautiful, load fast and convert visitors into customers. Our engineers work with Next.js, React, Laravel, Node.js and headless CMS to deliver scalable, maintainable products.",
    services: [
      {
        slug: "corporate-websites",
        title: "Corporate Websites",
        shortTitle: "Corporate Sites",
        subtitle: "Modern websites that win trust and customers",
        description:
          "Bespoke corporate websites built on Next.js with CMS, SEO and performance optimization.",
        icon: "Building2",
        heroImage: "/images/services/corporate-websites.jpg",
        overviewTitle: "Your most important salesperson — open 24/7",
        overview: [
          "Your website is often the first interaction prospects have with your company. We design and develop corporate websites that load in under two seconds, score 95+ on Lighthouse, and clearly communicate what you do and why customers should choose you.",
          "Every project includes UX research, modern visual design, copywriting collaboration, accessibility (WCAG 2.1 AA) and a CMS so your marketing team can update content without calling a developer.",
        ],

        features: [
          {
            title: "Custom UI/UX Design",
            description:
              "Original designs in Figma, tailored to your brand and audience.",
            icon: "PenTool",
          },
          {
            title: "Next.js & React",
            description:
              "Server-rendered, SEO-friendly and lightning fast on every device.",
            icon: "Code2",
          },
          {
            title: "Headless CMS",
            description:
              "Sanity, Strapi or Contentful so non-technical staff can edit pages.",
            icon: "FileEdit",
          },
          {
            title: "Multilingual Support",
            description:
              "Bangla and English (or any locale) with proper hreflang and SEO.",
            icon: "Languages",
          },
          {
            title: "Analytics & Tracking",
            description:
              "GA4, Meta Pixel, Hotjar and conversion tracking baked in.",
            icon: "BarChart3",
          },
          {
            title: "Lifetime Support",
            description:
              "Free maintenance during warranty plus optional AMC after launch.",
            icon: "LifeBuoy",
          },
        ],
        benefits: [
          "95+ Lighthouse score on launch",
          "Mobile-first responsive design",
          "Editor-friendly content management",
          "On-page SEO and schema markup included",
        ],
        process: [
          {
            step: "01",
            title: "Discover",
            description: "Workshops, audience research and competitor analysis.",
          },
          {
            step: "02",
            title: "Design",
            description:
              "Wireframes, visual design and interactive prototypes in Figma.",
          },
          {
            step: "03",
            title: "Develop",
            description:
              "Frontend, backend, CMS integration and rigorous QA.",
          },
          {
            step: "04",
            title: "Launch & Iterate",
            description:
              "Deploy, monitor performance and ship improvements continuously.",
          },
        ],
        faqs: [
          {
            question: "How long does a corporate website take?",
            answer:
              "Typical timelines are 4 to 8 weeks depending on complexity, content readiness and approval cycles. We can move faster on simpler builds.",
          },
          {
            question: "Will I be able to edit content myself?",
            answer:
              "Yes. We integrate a headless CMS so your team can update text, images, blog posts and team profiles without a developer.",
          },
          {
            question: "Do you offer maintenance after launch?",
            answer:
              "Yes. We provide a free 60-day warranty and offer Annual Maintenance Contracts (AMC) starting at BDT 5,000/month.",
          },
        ],
        ctaTitle: "Build a website that wins business",
        ctaDescription:
          "Book a free consultation and walk away with a roadmap for your new site.",
      },
      {
        slug: "ecommerce-solutions",
        title: "E-commerce Solutions",
        shortTitle: "E-commerce",
        subtitle: "Online stores built to scale and sell",
        description:
          "Shopify, WooCommerce and custom e-commerce platforms with local payment gateways and logistics.",
        icon: "ShoppingCart",
        heroImage: "/images/services/ecommerce-solutions.jpg",
        overviewTitle: "Sell more online — across Bangladesh and beyond",
        overview: [
          "We build online stores on the platform that fits your business: Shopify for fast launches, WooCommerce for flexibility, Medusa or Saleor for headless control, or fully custom Next.js commerce for unique workflows.",
          "Every store ships with bKash, Nagad, SSLCommerz, Stripe and card gateway integration, plus connections to Pathao, RedX, Steadfast and Sundarban for last-mile delivery.",
        ],

    whyChooseUsTitle: "Why Choose Us for Domain Management?", // Why chose us serction.
        whyChooseUsDescription: "আমরা ডোমেইন পোর্টফোলিও ম্যানেজমেন্টকে সহজ এবং সুরক্ষিত করি।",
        whyChooseUs: [
    { title: "Local Compliance", description: "বাংলাদেশি নিয়ম অনুযায়ী .bd ডোমেইন ম্যানেজমেন্ট।" },
    { title: "Instant Activation", description: "পেমেন্ট পাওয়ার সাথে সাথেই ডোমেইন এক্টিভেশন।" },
    { title: "Security First", description: "অ্যাডভান্সড ডিএনএস সুরক্ষা এবং ডোমেইন লক সুবিধা।" }
  ],
        featuresHeading: "Everything you need to manage your domain portfolio", // ফিচার টাইটেল


        features: [
          {
            title: "Shopify & WooCommerce",
            description:
              "Certified Shopify partners and senior WooCommerce engineers.",
            icon: "Store",
          },
          {
            title: "Local Payment Gateways",
            description:
              "bKash, Nagad, Rocket, SSLCommerz, AamarPay and international cards.",
            icon: "CreditCard",
          },
          {
            title: "Courier Integration",
            description:
              "Pathao, RedX, Steadfast and Sundarban Courier APIs out of the box.",
            icon: "Truck",
          },
          {
            title: "Inventory Management",
            description:
              "Multi-warehouse, low-stock alerts and barcode/SKU support.",
            icon: "Package",
          },
          {
            title: "Marketing Tools",
            description:
              "Discounts, gift cards, abandoned-cart recovery and email automation.",
            icon: "Megaphone",
          },
          {
            title: "Analytics & Reports",
            description:
              "Sales dashboards, customer LTV, top products and channel attribution.",
            icon: "PieChart",
          },
        ],
        benefits: [
          "Mobile-first, conversion-optimized themes",
          "PCI-DSS compliant payment flows",
          "SEO-friendly product pages with schema",
          "Training for your operations team included",
        ],
        process: [
          {
            step: "01",
            title: "Strategy",
            description:
              "Catalog, pricing, gateway and logistics planning.",
          },
          {
            step: "02",
            title: "Design",
            description: "Branded storefront and conversion-focused UX.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Develop, integrate gateways, couriers and import products.",
          },
          {
            step: "04",
            title: "Launch & Grow",
            description:
              "Go live, run launch campaigns and optimize from data.",
          },
        ],
        faqs: [
          {
            question: "Which platform is best — Shopify or WooCommerce?",
            answer:
              "Shopify is fastest to launch and easiest to maintain. WooCommerce gives total flexibility and lower long-term cost. We help you decide based on catalog size and team skills.",
          },
          {
            question: "Can you integrate bKash and Nagad?",
            answer:
              "Yes. We're certified integrators for bKash PGW, Nagad, Rocket and all major aggregators in Bangladesh.",
          },
          {
            question: "Do you handle product photography?",
            answer:
              "We offer optional product photography and content services through our partner studios in Dhaka.",
          },
        ],
        ctaTitle: "Launch your online store",
        ctaDescription:
          "Get a free e-commerce roadmap with platform, payment and logistics recommendations.",
      },
      {
        slug: "custom-web-apps",
        title: "Custom Web Application Development in Bangladesh",
        shortTitle: "Web Apps",
        subtitle: "Scale your business operations with tailor-made, secure, and high-performance custom web applications. Expert developers in Bangladesh for enterprise-grade solutions.",
        description:
          "ERP, CRM, SaaS, dashboards and workflow tools built on Next.js, Node.js, Laravel and Python.",
        icon: "AppWindow",
        heroImage: "/images/services/custom-web-apps.jpg",
        overviewTitle: "Bespoke Custom Web Applications Built for Scalability",
        overview: [
          "Transform your unique business ideas into powerful digital solutions.",
          "We design and develop high-performance web apps that streamline operations and drive innovation.",
        ],
    whyChooseUsTitle: "Why Choose Corporate.bd for Custom Web Application Development?", // Why chose us serction.
        whyChooseUsDescription: "Unlock operational efficiency with a web application designed exclusively for your business. We bridge the gap between complex technology and user-centric design to deliver solutions that are secure, scalable, and future-ready.",
        whyChooseUs: [
    { title: "Tailor-Made Solutions", description: "We don't believe in one-size-fits-all. Our apps are built from the ground up based on your specific workflows, ensuring 100% alignment with your business goals." },
    { title: "Robust Security & Architecture", description: "Using modern frameworks like Laravel and React, we ensure your application is fortified against vulnerabilities and can handle thousands of concurrent users with ease" },
    { title: "Agile Development & Support", description: "Our iterative process keeps you involved at every stage. Plus, our local team provides 24/7 proactive maintenance to ensure your application stays ahead of the curve." }
  ],
        featuresHeading: "Everything you need to build and scale your custom web application", // ফিচার টাইটেল

        features: [
          {
            title: "Modern Tech Stack",
            description:
              "Next.js, React, Node.js, Laravel, Python, PostgreSQL and MongoDB.",
            icon: "Cpu",
          },
          {
            title: "API-First Architecture",
            description:
              "REST and GraphQL APIs that integrate with your existing systems.",
            icon: "Plug",
          },
          {
            title: "Role-Based Access",
            description:
              "Granular permissions, SSO and audit logs for compliance.",
            icon: "Users",
          },
          {
            title: "Cloud Native",
            description:
              "Deployed on AWS, GCP or Vercel with autoscaling and HA.",
            icon: "Cloud",
          },
          {
            title: "Real-Time Features",
            description:
              "WebSockets, push notifications and live dashboards.",
            icon: "Radio",
          },
          {
            title: "DevOps Included",
            description:
              "CI/CD pipelines, monitoring, alerting and disaster recovery.",
            icon: "Workflow",
          },
        ],
        benefits: [
          "You own the source code and database",
          "Agile sprints with weekly demos",
          "Automated testing and code reviews",
          "Documentation and training for your team",
        ],
        process: [
          {
            step: "01",
            title: "Discovery",
            description:
              "Workshops to map workflows, users and success metrics.",
          },
          {
            step: "02",
            title: "Prototype",
            description:
              "Clickable Figma prototype validated with real users.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Two-week sprints with continuous deployment.",
          },
          {
            step: "04",
            title: "Operate",
            description:
              "Ongoing support, new features and infrastructure scaling.",
          },
        ],
        faqs: [
          {
            question: "Do you sign NDAs and confidentiality agreements?",
            answer:
              "Yes, we sign NDAs before any discovery work. Your IP, data and business logic remain fully yours.",
          },
          {
            question: "How do you price custom applications?",
            answer:
              "Either fixed-price for well-defined scope or time-and-materials for evolving products. We share detailed estimates after a free discovery call.",
          },
          {
            question: "Can you take over an existing project?",
            answer:
              "Yes. We perform a code audit, document the existing system and onboard our team to continue development.",
          },
        ],
        ctaTitle: "Bring your software idea to life",
        ctaDescription:
          "Book a discovery session and receive a free architecture and pricing proposal.",
      },
      {
        slug: "cms-management",
        title: "Professional CMS Management: You Create, We Manage the Rest",
        shortTitle: "CMS",
        subtitle: "Managed CMS Solutions in Bangladesh, WordPress, Joomla & Drupal",
        description:
          "Stop worrying about technical updates or security patches. Get a high-performance Content Management System that gives you the power to update your site in seconds.",
        icon: "FileEdit",
        heroImage: "/images/services/cms-management.jpg",
        overviewTitle: "Scale Your Content Velocity with Expert CMS Management",
        overview: [
          "We help marketing and editorial teams publish faster on the CMS that fits their stack. From classic WordPress to modern headless platforms like Sanity, Strapi, Contentful and Payload, our team handles setup, theme/plugin development, security hardening and day-to-day operations.",
          "Stop worrying about plugin conflicts, security patches and slow editor experiences — let us run your CMS while you focus on great content.",
        ],

    whyChooseUsTitle: "The Future of High-Velocity Content Management is Here", // Why chose us serction.
        whyChooseUsDescription: "We don't just install a CMS; we build a secure, optimized ecosystem. Our approach focuses on giving your team full autonomy over content while our experts handle the underlying performance and security infrastructure.",
        whyChooseUs: [
    { title: "Zero-Technical Friction", description: "Our CMS setups are customized so that even a non-technical person can update text, images, and videos without accidentally breaking the site layout." },
    { title: "Hardened Security & Backups", description: "CMS platforms are frequent targets for hackers. We implement enterprise-level security layers and automated daily backups to keep your content safe 24/7." },
    { title: "Performance First (Speed Optimization)", description: "We eliminate 'bloat' by using lean coding and premium optimization tools, ensuring your WordPress or Joomla site loads instantly on any device." }
  ],
        featuresHeading: "Everything you need to build and scale your custom web application", // ফিচার টাইটেল        

        features: [
          {
            title: "WordPress Expertise",
            description:
              "Custom themes, Gutenberg blocks, ACF, WooCommerce and multilingual setups.",
            icon: "FileCode",
          },
          {
            title: "Headless CMS",
            description:
              "Sanity, Strapi, Contentful and Payload integrated with Next.js or Nuxt.",
            icon: "Layers",
          },
          {
            title: "Plugin Development",
            description:
              "Bespoke plugins and integrations when off-the-shelf isn't enough.",
            icon: "Puzzle",
          },
          {
            title: "Security Hardening",
            description:
              "WAF, malware scans, login protection and automated patching.",
            icon: "Shield",
          },
          {
            title: "Performance Tuning",
            description:
              "Object caching, image optimization and CDN configuration.",
            icon: "Gauge",
          },
          {
            title: "Editor Training",
            description:
              "Hands-on training and SOPs so your team is fully self-sufficient.",
            icon: "GraduationCap",
          },
        ],
        benefits: [
          "Faster pages and happier editors",
          "Predictable monthly cost",
          "Free emergency support during downtime",
          "Quarterly performance and security reports",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Full audit of your current CMS, plugins and content workflow.",
          },
          {
            step: "02",
            title: "Improve",
            description:
              "Apply security patches, performance fixes and editor improvements.",
          },
          {
            step: "03",
            title: "Manage",
            description:
              "Daily backups, monitoring and content publishing support.",
          },
          {
            step: "04",
            title: "Evolve",
            description:
              "Quarterly roadmap reviews and new feature rollouts.",
          },
        ],
        faqs: [
          {
            question: "Do you support both WordPress and headless CMS?",
            answer:
              "Yes. We have specialists in both. We help you choose the right one based on team skills and product requirements.",
          },
          {
            question: "Can you migrate from WordPress to a headless CMS?",
            answer:
              "Absolutely. We migrate posts, media, taxonomies and redirects with zero SEO loss.",
          },
          {
            question: "Will my content team need to learn new tools?",
            answer:
              "We provide training and standard operating procedures. Most editors are productive within a single session.",
          },
        ],
        ctaTitle: "Hand off your CMS to experts",
        ctaDescription:
          "Free CMS audit and improvement plan within 48 hours.",
      },
    ],
  },

  // =========================================================
  // 3. LEGAL COMPLIANCE
  // =========================================================
  "legal-compliance": {
    slug: "legal-compliance",
    title: "Best Legal Compliance & Managed Services in Bangladesh",
    shortTitle: "Legal",
    subtitle: "Stay 100% compliant with Bangladesh business law",
    description:
      "Establish your presence in the Bangladeshi market with a partner that understands global standards. Our Legal Compliance framework provides the structural integrity your business needs to thrive in Dhaka’s elite commercial zones. From BIDA approvals to comprehensive Business Advisory, we deliver the precision and transparency required for multi-national success.",
    icon: "Scale",
    heroImage: "/images/services/legal-compliance.jpg",
    intro:
      "Navigating the regulatory intricacies of the Bangladeshi market demands a partner with elite precision. Our Legal Compliance ecosystem is architected for those who prioritize structural integrity and long-term security. From high-authority RJSC filings and NBR tax advisory to comprehensive labor law frameworks, we provide the Managed Services and Business Advisory required to keep your operations audit-ready. Whether you are an MNC establishing a foothold in Gulshan or a high-growth firm scaling in Dhaka’s business hubs, we offer tailored solutions that align with the highest global standards of corporate governance.",
    services: [
      {
        slug: "company-formation",
        title: "Seamless Company Formation & Registration in Bangladesh",
        shortTitle: "Company Setup",
        subtitle: "Register your company with RJSC the right way",
        description:
          "Start your business the right way. We provide end-to-end company formation services in Bangladesh, including RJSC registration, trade licenses, and tax compliance.",
        icon: "Building",
        heroImage: "/images/services/company-formation.jpg",
        overviewTitle: "Launch Your Business with Confidence and Legal Precision",
        overview: [
          "From initial registration to full regulatory compliance, we simplify the complex process of setting up your company in Bangladesh so you can focus on growth.",
          "Foreign investors get additional support with BIDA registration, work permit and FDI compliance.",
        ],
        
    whyChooseUsTitle: "Why Corporate.bd for Legal Compliance?", // Why chose us serction.
        whyChooseUsDescription: "Registering a company is just the beginning. Our mission is to protect your business from future legal hurdles through meticulous planning and a deep understanding of Bangladesh's Companies Act.",
        whyChooseUs: [
    { title: "Expert Legal Counsel", description: "Our team consists of seasoned consultants who understand the nuances of the Registrar of Joint Stock Companies (RJSC) and BIDA regulations." },
    { title: "Post-Registration Care", description: "We don't just hand you the papers; we stay with you for annual returns, tax filings, and ongoing compliance audits." },
    { title: "Tailored Structuring", description: "Whether it’s a Private Limited, Partnership, or Sole Proprietorship, we help you choose the legal structure that minimizes liability and maximizes profit." }
  ],
        featuresHeading: "Your All-in-One Business Launchpad", // ফিচার টাইটেল
        features: [
          {
            title: "Name Clearance",
            description:
              "Search, propose and clear your company name with RJSC..",
            icon: "Search",
          },
          {
            title: "MOA & AOA Drafting",
            description:
              "Customized Memorandum and Articles of Association for your business objects.",
            icon: "FileText",
          },
          {
            title: "RJSC Registration",
            description:
              "Submit, track and complete the certificate of incorporation.",
            icon: "Stamp",
          },
          {
            title: "TIN & BIN",
            description:
              "Tax Identification and Business Identification Numbers from NBR.",
            icon: "Hash",
          },
          {
            title: "Bank Account Opening",
            description:
              "Coordination with leading banks for fast company account setup.",
            icon: "Landmark",
          },
          {
            title: "Foreign Investor Support",
            description:
              "BIDA, work permit, share repatriation and FDI compliance.",
            icon: "Plane",
          },
        ],
        benefits: [
          "Fixed transparent pricing — no surprises",
          "Average completion in 10–15 working days",
          "Senior legal counsel on every engagement",
          "Bilingual (Bangla/English) documentation",
        ],
        process: [
          {
            step: "01",
            title: "Consultation",
            description:
              "Choose entity type, capital structure and shareholders.",
          },
          {
            step: "02",
            title: "Documentation",
            description:
              "Prepare MOA, AOA, Form IX, Form X and other required documents.",
          },
          {
            step: "03",
            title: "Registration",
            description:
              "File with RJSC, NBR and obtain incorporation certificate.",
          },
          {
            step: "04",
            title: "Bank & Operations",
            description:
              "Open corporate bank account and complete post-registration formalities.",
          },
        ],
        faqs: [
          {
            question: "What is the minimum capital for a Private Limited?",
            answer:
              "There is no statutory minimum, but practical capital starts from BDT 100,000 to make banking and licensing smooth.",
          },
          {
            question: "Can foreigners own 100% of a Bangladeshi company?",
            answer:
              "Yes, in most sectors 100% foreign ownership is permitted. Some restricted sectors require local partners — we advise on a case-by-case basis.",
          },
          {
            question: "How long does company registration take?",
            answer:
              "On average 10 to 15 working days from name clearance to certificate of incorporation, assuming all documents are ready.",
          },
        ],
        ctaTitle: "Start your company today",
        ctaDescription:
          "Book a free 30-minute consultation with our company formation experts.",
      },
      {
        slug: "trade-license",
        title: "Trade License",
        shortTitle: "Trade License",
        subtitle: "Get and renew your trade license without the queues",
        description:
          "Trade license issuance and renewal from Dhaka City Corporation, RAJUK and other authorities.",
        icon: "ScrollText",
        heroImage: "/images/services/trade-license.jpg",
        overviewTitle: "Operate legally from day one",
        overview: [
          "A trade license is mandatory for every business in Bangladesh. We handle new applications, renewals, amendments and transfers across DSCC, DNCC, CCC, KCC and other municipal authorities.",
          "We also help with specialized licenses — environmental clearance from DOE, fire safety, factory license, drug license, food license and import-export registration certificates (IRC/ERC).",
        ],
        features: [
          {
            title: "New Trade License",
            description:
              "Application, document preparation and follow-up until issuance.",
            icon: "FilePlus",
          },
          {
            title: "Renewal Service",
            description:
              "Annual renewal reminders and end-to-end processing.",
            icon: "RefreshCw",
          },
          {
            title: "Amendment & Transfer",
            description:
              "Change of address, ownership, trade category or company name.",
            icon: "FileEdit",
          },
          {
            title: "IRC & ERC",
            description:
              "Import and Export Registration Certificates from CCI&E.",
            icon: "Truck",
          },
          {
            title: "Environmental Clearance",
            description:
              "DOE clearance for industrial and manufacturing units.",
            icon: "Leaf",
          },
          {
            title: "Fire & Factory License",
            description:
              "Fire Service and Factory Inspectorate licenses for plants.",
            icon: "Flame",
          },
        ],
        benefits: [
          "Skip the queue — we handle it all",
          "Same-day pickup in many municipalities",
          "Annual renewal calendar with auto-reminders",
          "Compliance audits to identify missing licenses",
        ],
        process: [
          {
            step: "01",
            title: "Eligibility",
            description: "Confirm trade category, location and required documents.",
          },
          {
            step: "02",
            title: "Documentation",
            description:
              "Prepare application, NID, rent agreement, photos, etc.",
          },
          {
            step: "03",
            title: "Submission",
            description: "File with the relevant authority and pay fees.",
          },
          {
            step: "04",
            title: "Pickup",
            description:
              "Collect the original certificate and digital copy.",
          },
        ],
        faqs: [
          {
            question: "How much does a trade license cost?",
            answer:
              "Government fees vary by city and trade category — typically BDT 1,000 to BDT 50,000. Our service fee is fixed and disclosed upfront.",
          },
          {
            question: "When should I renew?",
            answer:
              "Renewals are due each Bangla calendar year (Boishakh). We send reminders 30 days in advance and process renewal automatically if you opt in.",
          },
          {
            question: "Can you handle businesses outside Dhaka?",
            answer:
              "Yes. We have agents in all major cities and Upazillas across Bangladesh.",
          },
        ],
        ctaTitle: "Get your trade license sorted",
        ctaDescription:
          "Talk to a compliance specialist for a free document checklist.",
      },
      {
        slug: "tax-vat",
        title: "Tax & VAT",
        shortTitle: "Tax & VAT",
        subtitle: "Complete tax and VAT compliance under one roof",
        description:
          "Income tax, VAT registration, monthly returns, audits and tax planning by chartered accountants.",
        icon: "Calculator",
        heroImage: "/images/services/tax-vat.jpg",
        overviewTitle: "Stay compliant — and pay only what you should",
        overview: [
          "Bangladeshi tax law changes frequently. Missed filings, wrong calculations and late payments lead to penalties that hurt cash flow. Our chartered accountants handle income tax, VAT, withholding tax and customs duties so you stay 100% compliant.",
          "Beyond compliance, we offer proactive tax planning to legally minimize your liability through allowable deductions, exemptions and incentives.",
        ],
        features: [
          {
            title: "VAT Registration (BIN)",
            description:
              "VAT 2.1 registration, BIN issuance and Mushak setup.",
            icon: "Hash",
          },
          {
            title: "Monthly VAT Returns",
            description:
              "Mushak 9.1, 4.3, 6.3 preparation and online submission.",
            icon: "CalendarCheck",
          },
          {
            title: "Income Tax Returns",
            description:
              "Annual return filing for individuals, partnerships and companies.",
            icon: "FileText",
          },
          {
            title: "Withholding Tax",
            description:
              "TDS calculation, deposit and quarterly statements.",
            icon: "Percent",
          },
          {
            title: "Tax Planning",
            description:
              "Legal strategies to reduce tax liability and improve cash flow.",
            icon: "TrendingDown",
          },
          {
            title: "Audit Support",
            description:
              "NBR audits, appeals and representation by senior CAs.",
            icon: "ShieldCheck",
          },
        ],
        benefits: [
          "Chartered accountants on every engagement",
          "Cloud-based document management",
          "Automated reminders before every deadline",
          "Year-end tax planning to minimize liability",
        ],
        process: [
          {
            step: "01",
            title: "Onboarding",
            description:
              "Review books, contracts and previous filings.",
          },
          {
            step: "02",
            title: "Setup",
            description:
              "Register BIN, configure Mushak and accounting software.",
          },
          {
            step: "03",
            title: "File",
            description:
              "Monthly VAT, quarterly TDS and annual income tax returns.",
          },
          {
            step: "04",
            title: "Plan",
            description:
              "Quarterly review meetings to optimize tax position.",
          },
        ],
        faqs: [
          {
            question: "Do startups need to file VAT returns?",
            answer:
              "If your annual turnover exceeds BDT 30 lakh you must register and file VAT returns. We help determine eligibility and timing.",
          },
          {
            question: "What is the corporate income tax rate in Bangladesh?",
            answer:
              "Rates range from 22.5% for listed companies to 27.5% for non-listed and higher for banks and tobacco. We help with exact computation.",
          },
          {
            question: "Can you handle our entire accounting?",
            answer:
              "Yes. We offer full bookkeeping, payroll and management reporting in addition to tax compliance.",
          },
        ],
        ctaTitle: "Outsource your tax & VAT to experts",
        ctaDescription:
          "Get a free compliance review and tax savings estimate.",
      },
      {
        slug: "intellectual-property",
        title: "Intellectual Property",
        shortTitle: "IP Services",
        subtitle: "Protect your brand, ideas and creative work",
        description:
          "Trademark, copyright, patent and industrial design registration in Bangladesh and internationally.",
        icon: "Copyright",
        heroImage: "/images/services/intellectual-property.jpg",
        overviewTitle: "Your ideas deserve legal protection",
        overview: [
          "Your brand, software, designs and inventions are valuable assets. We help register trademarks with DPDT, copyrights with the Copyright Office, patents with the Department of Patents, and industrial designs — both nationally and through Madrid, Paris Convention and PCT internationally.",
          "We also handle infringement disputes, opposition proceedings, licensing agreements and IP due diligence for M&A.",
        ],
        features: [
          {
            title: "Trademark Registration",
            description:
              "Search, file and prosecute trademarks with DPDT in 45 classes.",
            icon: "BadgeCheck",
          },
          {
            title: "Copyright Registration",
            description:
              "Software, literary, musical and artistic works with the Copyright Office.",
            icon: "BookOpen",
          },
          {
            title: "Patent Filing",
            description:
              "Utility and design patent drafting and prosecution.",
            icon: "Lightbulb",
          },
          {
            title: "Industrial Design",
            description:
              "Protect product shapes, configurations and ornamental design.",
            icon: "Palette",
          },
          {
            title: "International IP",
            description:
              "Madrid Protocol, PCT and Paris Convention filings.",
            icon: "Globe",
          },
          {
            title: "Enforcement",
            description:
              "Cease & desist, opposition, infringement litigation and DMCA takedowns.",
            icon: "Gavel",
          },
        ],
        benefits: [
          "Registered IP attorneys on staff",
          "Free trademark availability search",
          "Annual renewal management",
          "International filings via partner network",
        ],
        process: [
          {
            step: "01",
            title: "Search",
            description: "Comprehensive availability search and risk analysis.",
          },
          {
            step: "02",
            title: "Application",
            description: "Drafting and filing with the appropriate registry.",
          },
          {
            step: "03",
            title: "Prosecution",
            description:
              "Respond to office actions, oppositions and examinations.",
          },
          {
            step: "04",
            title: "Maintenance",
            description: "Renewals, recordals and ongoing IP portfolio management.",
          },
        ],
        faqs: [
          {
            question: "How long does trademark registration take in Bangladesh?",
            answer:
              "From filing to registration certificate typically takes 18 to 30 months. Protection rights begin from filing date once registered.",
          },
          {
            question: "Should I file copyright for my software?",
            answer:
              "Yes. While copyright exists automatically, registration provides strong evidence in disputes and is essential for enforcement.",
          },
          {
            question: "Can you file trademarks in other countries?",
            answer:
              "Yes. We file in 100+ jurisdictions through the Madrid Protocol or directly via local agents.",
          },
        ],
        ctaTitle: "Protect your intellectual property",
        ctaDescription:
          "Free trademark search and IP strategy session with our attorneys.",
      },
    ],
  },

  // =========================================================
  // 4. MANAGED IT SERVICES
  // =========================================================
  "managed-it-services": {
    slug: "managed-it-services",
    title: "Managed IT Services",
    shortTitle: "Managed IT",
    subtitle: "Your outsourced IT department",
    description:
      "Annual maintenance contracts, server administration, AI automation and IT consultancy for businesses of every size.",
    icon: "Settings",
    heroImage: "/images/services/managed-it.jpg",
    intro:
      "Hiring a full IT team is expensive. We give you a senior, on-demand IT department for a predictable monthly fee — covering everything from desktops and printers to servers, networks, cloud and AI automation.",
    services: [
      {
        slug: "amc",
        title: "Annual Maintenance Contracts (AMC)",
        shortTitle: "AMC",
        subtitle: "All-inclusive IT support for a fixed monthly fee",
        description:
          "Annual Maintenance Contracts covering desktops, laptops, printers, servers, networks and cloud — with SLA-backed response.",
        icon: "Wrench",
        heroImage: "/images/services/amc.jpg",
        overviewTitle: "Predictable IT costs, zero surprises",
        overview: [
          "Our AMC plans bundle preventive maintenance, on-demand repairs, remote and on-site support into a single monthly invoice. You get senior engineers, defined response times and quarterly health reports — without the cost of full-time hires.",
          "AMC packages are available for SMEs, large enterprises, schools, hospitals and government offices, with optional 24/7 coverage.",
        ],
        features: [
          {
            title: "Helpdesk & Ticketing",
            description:
              "Email, phone and chat helpdesk with ITIL-grade ticketing.",
            icon: "Headphones",
          },
          {
            title: "On-Site Visits",
            description:
              "Scheduled and emergency on-site visits across Dhaka and major cities.",
            icon: "MapPin",
          },
          {
            title: "Remote Support",
            description:
              "Secure remote access with TeamViewer, AnyDesk and RDP.",
            icon: "Monitor",
          },
          {
            title: "Preventive Maintenance",
            description:
              "Quarterly cleaning, patching and performance tuning.",
            icon: "ShieldCheck",
          },
          {
            title: "Asset Management",
            description:
              "Inventory of every device, license and warranty in one dashboard.",
            icon: "Database",
          },
          {
            title: "SLA-Backed Response",
            description:
              "Guaranteed response and resolution times based on severity.",
            icon: "Timer",
          },
        ],
        benefits: [
          "Predictable monthly cost — no hourly billing",
          "Senior engineers, not first-line agents",
          "Quarterly executive reports",
          "Vendor management for ISP, electricity and SaaS",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Inventory hardware, software and pain points.",
          },
          {
            step: "02",
            title: "Onboard",
            description:
              "Install monitoring agents and document SOPs.",
          },
          {
            step: "03",
            title: "Operate",
            description:
              "Daily helpdesk, monthly maintenance and quarterly reviews.",
          },
          {
            step: "04",
            title: "Improve",
            description:
              "Identify automation and modernization opportunities.",
          },
        ],
        faqs: [
          {
            question: "What is the minimum contract length?",
            answer:
              "AMC contracts are typically annual with quarterly billing options. Pilot engagements of 3 months are available.",
          },
          {
            question: "Do you cover hardware replacement?",
            answer:
              "Labor, diagnostics and configuration are included. Replacement parts are billed at cost or covered under separate hardware AMCs.",
          },
          {
            question: "Can you support multiple branches?",
            answer:
              "Yes. We have engineers in 12+ cities and partner networks across Bangladesh for nationwide coverage.",
          },
        ],
        ctaTitle: "Switch to predictable IT costs",
        ctaDescription:
          "Get a free IT health audit and customized AMC proposal.",
      },
      {
        slug: "server-administration",
        title: "Server Administration",
        shortTitle: "Servers",
        subtitle: "Linux & Windows server expertise on demand",
        description:
          "24/7 server administration, hardening, patching, monitoring and disaster recovery for on-prem and cloud servers.",
        icon: "Server",
        heroImage: "/images/services/server-administration.jpg",
        overviewTitle: "Servers that run smoothly — without surprises",
        overview: [
          "Whether your servers run on bare metal, VMware, Hyper-V or in the cloud (AWS, Azure, GCP, DigitalOcean), our certified administrators keep them secure, patched and performing at their peak.",
          "We support Linux (Ubuntu, RHEL, CentOS, Debian), Windows Server, web servers (Nginx, Apache, IIS), databases (MySQL, PostgreSQL, MS SQL, MongoDB) and container platforms (Docker, Kubernetes).",
        ],
        features: [
          {
            title: "Provisioning & Setup",
            description:
              "Install, harden and document new servers using Infrastructure-as-Code.",
            icon: "Hammer",
          },
          {
            title: "Patching & Updates",
            description:
              "Scheduled OS, kernel and application updates with rollback plans.",
            icon: "RefreshCw",
          },
          {
            title: "24/7 Monitoring",
            description:
              "Zabbix, Prometheus and Datadog with on-call escalation.",
            icon: "Activity",
          },
          {
            title: "Backup & DR",
            description:
              "Automated, encrypted, off-site backups with tested restore procedures.",
            icon: "DatabaseBackup",
          },
          {
            title: "Performance Tuning",
            description:
              "Database indexing, query optimization and capacity planning.",
            icon: "Gauge",
          },
          {
            title: "Security Hardening",
            description:
              "CIS benchmarks, fail2ban, SELinux and intrusion detection.",
            icon: "ShieldCheck",
          },
        ],
        benefits: [
          "RHCE and Microsoft-certified engineers",
          "Defined RTO and RPO for every server",
          "Monthly compliance and security reports",
          "Pay-per-server pricing with no minimums",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Inventory servers, services and current security posture.",
          },
          {
            step: "02",
            title: "Harden",
            description:
              "Apply CIS benchmarks, configure backups and monitoring.",
          },
          {
            step: "03",
            title: "Operate",
            description:
              "24/7 monitoring, incident response and routine maintenance.",
          },
          {
            step: "04",
            title: "Optimize",
            description:
              "Quarterly performance reviews and modernization roadmap.",
          },
        ],
        faqs: [
          {
            question: "Do you support both Linux and Windows servers?",
            answer:
              "Yes. We have certified specialists in Red Hat, Ubuntu, Debian, Windows Server 2016/2019/2022 and all major hypervisors.",
          },
          {
            question: "What is your incident response time?",
            answer:
              "Critical incidents are acknowledged within 15 minutes and engineers begin work within 30 minutes, 24/7.",
          },
          {
            question: "Can you migrate on-prem servers to the cloud?",
            answer:
              "Yes. Cloud migration is a core competency — we plan, execute and optimize migrations to AWS, Azure or GCP.",
          },
        ],
        ctaTitle: "Hand off your servers to the pros",
        ctaDescription:
          "Free server audit with prioritized recommendations within 5 days.",
      },
      {
        slug: "ai-automation",
        title: "AI Automation",
        shortTitle: "AI Automation",
        subtitle: "Automate workflows with modern AI",
        description:
          "Custom AI agents, RAG chatbots, document automation and workflow automation using OpenAI, Anthropic and open-source models.",
        icon: "Bot",
        heroImage: "/images/services/ai-automation.jpg",
        overviewTitle: "Let AI handle the repetitive work",
        overview: [
          "Modern AI can read, write, summarize and reason — and it works tirelessly. We build production-grade AI solutions: customer support chatbots, document processing pipelines, sales agents, content generation and full workflow automation.",
          "Our team specializes in OpenAI, Anthropic, Google Gemini, Llama and open-source models, plus orchestration with LangChain, LlamaIndex and the Vercel AI SDK.",
        ],
        features: [
          {
            title: "Custom AI Chatbots",
            description:
              "Multilingual (Bangla/English) RAG chatbots trained on your knowledge base.",
            icon: "MessageSquare",
          },
          {
            title: "Document Automation",
            description:
              "Extract, classify and process invoices, contracts and forms automatically.",
            icon: "FileScan",
          },
          {
            title: "Sales & Support Agents",
            description:
              "AI agents that qualify leads, answer FAQs and escalate to humans intelligently.",
            icon: "Bot",
          },
          {
            title: "Content Generation",
            description:
              "Automated product descriptions, social posts and email campaigns.",
            icon: "PenTool",
          },
          {
            title: "Workflow Automation",
            description:
              "Trigger-based automation across Slack, email, CRM and ERP.",
            icon: "Workflow",
          },
          {
            title: "Private LLM Deployment",
            description:
              "Self-hosted Llama, Mistral and Phi for sensitive data.",
            icon: "Lock",
          },
        ],
        benefits: [
          "ROI within 90 days on most projects",
          "Bilingual Bangla & English support",
          "Data privacy with self-hosted options",
          "Continuous fine-tuning and evaluation",
        ],
        process: [
          {
            step: "01",
            title: "Discover",
            description:
              "Identify highest-impact processes for automation.",
          },
          {
            step: "02",
            title: "Prototype",
            description:
              "Build a working pilot in 2–4 weeks to prove value.",
          },
          {
            step: "03",
            title: "Deploy",
            description:
              "Production rollout with guardrails and monitoring.",
          },
          {
            step: "04",
            title: "Improve",
            description:
              "Measure outcomes and iterate on prompts and data.",
          },
        ],
        faqs: [
          {
            question: "Do you support Bangla language AI?",
            answer:
              "Yes. We've shipped multiple Bangla chatbots and document processors using GPT-4o, Claude 3.5 and fine-tuned open models.",
          },
          {
            question: "Is my data safe with AI providers?",
            answer:
              "We use enterprise APIs with no-training clauses, or deploy private models on your infrastructure for full data control.",
          },
          {
            question: "What's the typical project cost?",
            answer:
              "Pilot projects start from BDT 2 lakh. Production rollouts vary based on integrations and data volume — we share fixed quotes after discovery.",
          },
        ],
        ctaTitle: "Find your first AI win",
        ctaDescription:
          "Free AI opportunity assessment with prioritized use cases.",
      },
      {
        slug: "it-consultancy",
        title: "IT Consultancy",
        shortTitle: "Consultancy",
        subtitle: "Strategic IT advice from senior engineers",
        description:
          "Technology strategy, digital transformation, vendor selection, audits and CTO-as-a-Service for SMEs and enterprises.",
        icon: "Briefcase",
        heroImage: "/images/services/it-consultancy.jpg",
        overviewTitle: "Make better technology decisions",
        overview: [
          "Choosing the wrong stack, vendor or architecture costs years and crores. Our consultants — former CTOs, architects and security leaders — help you choose the right path with vendor-neutral, evidence-backed advice.",
          "Engagements range from one-day workshops to fractional CTO partnerships. Outputs include strategy documents, RFPs, vendor scorecards, architecture diagrams and quarterly board updates.",
        ],
        features: [
          {
            title: "Technology Strategy",
            description:
              "3-year tech roadmap aligned with business goals.",
            icon: "Map",
          },
          {
            title: "Digital Transformation",
            description:
              "Modernize legacy systems and processes for cloud and AI era.",
            icon: "Sparkles",
          },
          {
            title: "Vendor Selection",
            description:
              "RFP design, vendor scoring and contract negotiation.",
            icon: "ListChecks",
          },
          {
            title: "Security Audits",
            description:
              "ISO 27001, PCI-DSS and GDPR readiness assessments.",
            icon: "ShieldCheck",
          },
          {
            title: "Architecture Review",
            description:
              "Evaluate scalability, cost and resilience of existing systems.",
            icon: "Network",
          },
          {
            title: "CTO as a Service",
            description:
              "Fractional CTO leadership for startups and SMEs.",
            icon: "UserCog",
          },
        ],
        benefits: [
          "Vendor-neutral advice you can trust",
          "Senior consultants, not junior staff",
          "Fixed-fee or retainer engagement models",
          "NDAs and IP protection guaranteed",
        ],
        process: [
          {
            step: "01",
            title: "Discovery",
            description:
              "Understand business goals, current systems and constraints.",
          },
          {
            step: "02",
            title: "Diagnose",
            description:
              "Audit, benchmark and identify gaps and opportunities.",
          },
          {
            step: "03",
            title: "Recommend",
            description:
              "Deliver prioritized roadmap with cost and ROI estimates.",
          },
          {
            step: "04",
            title: "Execute",
            description:
              "Optionally lead or oversee execution with your team.",
          },
        ],
        faqs: [
          {
            question: "What's a CTO-as-a-Service engagement?",
            answer:
              "A senior CTO works 1–3 days per week with your team, owning technology strategy, hiring and architecture decisions for a fixed monthly fee.",
          },
          {
            question: "Do you implement what you recommend?",
            answer:
              "Yes, optionally. You're free to take the strategy and execute internally or with another vendor. We give vendor-neutral advice.",
          },
          {
            question: "How much does a strategy engagement cost?",
            answer:
              "Workshops start at BDT 75,000. Multi-month strategy engagements are quoted based on scope after a free consultation.",
          },
                    {
            question: "How much does a strategy engagement cost?",
            answer:
              "Workshops start at BDT 75,000. Multi-month strategy engagements are quoted based on scope after a free consultation.",
          },
        ],
        ctaTitle: "Get senior IT advice",
        ctaDescription:
          "Book a free 60-minute strategy session with a senior consultant.",
      },
    ],
  },

  // =========================================================
  // 5. SEO
  // =========================================================
  seo: {
    slug: "seo",
    title: "SEO & Digital Marketing",
    shortTitle: "SEO",
    subtitle: "Grow organic traffic that converts to revenue",
    description:
      "Local SEO, product SEO, content strategy and social media management for businesses targeting Bangladesh and global markets.",
    icon: "TrendingUp",
    heroImage: "/images/services/seo.jpg",
    intro:
      "Paid ads stop the moment you stop paying. SEO compounds month after month, building a moat that competitors can't easily catch up to. Our SEO team has helped 200+ Bangladeshi brands rank #1 for high-value keywords.",
    services: [
      {
        slug: "local-seo",
        title: "Local SEO",
        shortTitle: "Local SEO",
        subtitle: "Dominate searches in your city and across Bangladesh",
        description:
          "Google Business Profile optimization, local citations, reviews and Bangla SEO to rank in your service area.",
        icon: "MapPin",
        heroImage: "/images/services/local-seo.jpg",
        overviewTitle: "Be found by customers near you",
        overview: [
          "When someone searches \"best lawyer in Dhaka\" or \"AC repair near Gulshan\" you want to be the first result. Local SEO is the science of ranking in Google's Map Pack and local organic results so nearby customers can find and choose you.",
          "We optimize your Google Business Profile, build authoritative local citations, manage reviews and create Bangla + English content that earns top rankings city by city.",
        ],
        features: [
          {
            title: "Google Business Profile",
            description:
              "Setup, verification, optimization and weekly post management.",
            icon: "MapPin",
          },
          {
            title: "Local Citations",
            description:
              "Listings on 50+ Bangladeshi and global business directories.",
            icon: "ListOrdered",
          },
          {
            title: "Review Management",
            description:
              "Reputation strategy, review generation and intelligent responses.",
            icon: "Star",
          },
          {
            title: "Local Keyword Research",
            description:
              "Targeted Bangla and English keywords for every service area.",
            icon: "Search",
          },
          {
            title: "Location Pages",
            description:
              "Dedicated pages per city/area with unique content and schema.",
            icon: "FileText",
          },
          {
            title: "Local Backlinks",
            description:
              "Earned mentions from Bangladeshi news, blogs and partners.",
            icon: "Link",
          },
        ],
        benefits: [
          "Rank in Google Map Pack and \"near me\" searches",
          "Bangla + English content that converts locally",
          "Monthly transparent reporting",
          "More phone calls and direction requests",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Local visibility audit and competitor benchmarking.",
          },
          {
            step: "02",
            title: "Optimize",
            description:
              "Profile, citations, on-page and schema optimization.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Reviews, local content and authoritative backlinks.",
          },
          {
            step: "04",
            title: "Report",
            description:
              "Monthly reports on rankings, traffic and conversions.",
          },
        ],
        faqs: [
          {
            question: "How long until I see results?",
            answer:
              "Most clients see Map Pack improvements within 60–90 days. Significant traffic and lead growth typically arrives in 4–6 months.",
          },
          {
            question: "Do you handle Bangla SEO?",
            answer:
              "Yes. Bangla content, transliteration, schema and on-page SEO is one of our core specialties.",
          },
          {
            question: "Will you guarantee #1 rankings?",
            answer:
              "No reputable agency can guarantee specific rankings. We commit to KPIs like rankings improvements, traffic growth and conversions — and we hit them.",
          },
        ],
        ctaTitle: "Win local search in your city",
        ctaDescription:
          "Free local SEO audit with prioritized 90-day action plan.",
      },
      {
        slug: "product-seo",
        title: "Product SEO",
        shortTitle: "Product SEO",
        subtitle: "Rank product pages and earn buyer intent traffic",
        description:
          "Technical, on-page and off-page SEO for e-commerce and SaaS product pages — built to convert searches into sales.",
        icon: "Tag",
        heroImage: "/images/services/product-seo.jpg",
        overviewTitle: "Win the moments that matter — when buyers are ready",
        overview: [
          "Buyers searching for products are gold. We optimize e-commerce categories, product detail pages and SaaS feature pages with deep keyword research, schema markup, internal linking and authoritative backlinks.",
          "Our process is data-driven: we model keyword difficulty, search intent and conversion value so you invest in pages that actually return revenue.",
        ],
        features: [
          {
            title: "Keyword Strategy",
            description:
              "Long-tail, transactional and modifier-rich keyword maps.",
            icon: "Search",
          },
          {
            title: "Technical SEO",
            description:
              "Core Web Vitals, indexation, canonicals, hreflang and sitemaps.",
            icon: "Cog",
          },
          {
            title: "Schema Markup",
            description:
              "Product, Offer, Review and BreadcrumbList JSON-LD.",
            icon: "Code",
          },
          {
            title: "On-Page Optimization",
            description:
              "Title tags, meta, H1-H6, alt text and internal linking.",
            icon: "FileEdit",
          },
          {
            title: "Content Expansion",
            description:
              "Buyer guides, comparisons and category content that rank.",
            icon: "BookOpen",
          },
          {
            title: "Link Building",
            description:
              "Editorial backlinks from relevant publishers and bloggers.",
            icon: "Link",
          },
        ],
        benefits: [
          "More qualified, ready-to-buy traffic",
          "Higher-than-paid-search ROAS over time",
          "Detailed monthly reporting on revenue impact",
          "Schema-rich snippets in Google results",
        ],
        process: [
          {
            step: "01",
            title: "Research",
            description:
              "Map keywords to product pages and search intent.",
          },
          {
            step: "02",
            title: "Optimize",
            description:
              "Implement technical, on-page and schema improvements.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Earn editorial backlinks and expand content footprint.",
          },
          {
            step: "04",
            title: "Measure",
            description:
              "Attribute rankings and traffic to revenue with analytics.",
          },
        ],
        faqs: [
          {
            question: "Will SEO replace our paid ads?",
            answer:
              "Often it can replace 60–80% of paid spend over 12 months while keeping branded ads for capture. We model the trade-off in your audit.",
          },
          {
            question: "How is product SEO different from regular SEO?",
            answer:
              "Product SEO focuses on transactional keywords, faceted navigation, schema and conversion design — not just blog content.",
          },
          {
            question: "Do you optimize for Daraz and other marketplaces?",
            answer:
              "Yes. Marketplace SEO (Daraz, Amazon, Pickaboo) is a separate specialty we offer with platform-specific tactics.",
          },
        ],
        ctaTitle: "Turn searches into sales",
        ctaDescription:
          "Free product SEO audit and revenue projection in 7 days.",
      },
      {
        slug: "content-strategy",
        title: "Content Strategy",
        shortTitle: "Content",
        subtitle: "Editorial planning that earns traffic and trust",
        description:
          "Topical authority, content calendars, blog production and content distribution for brands serious about organic growth.",
        icon: "BookOpen",
        heroImage: "/images/services/content-strategy.jpg",
        overviewTitle: "Become the answer your customers are looking for",
        overview: [
          "Great content earns rankings, builds trust and shortens sales cycles. Our content team designs topical authority maps, builds editorial calendars and produces high-quality articles, guides, case studies and videos that perform.",
          "Every piece is research-backed, originally written (no AI fluff), edited by senior editors and optimized for search and human readability.",
        ],
        features: [
          {
            title: "Topical Authority Maps",
            description:
              "Cluster-and-pillar architecture that signals expertise to Google.",
            icon: "Network",
          },
          {
            title: "Editorial Calendar",
            description:
              "Quarterly calendar with briefs, owners and deadlines.",
            icon: "Calendar",
          },
          {
            title: "Long-Form Articles",
            description:
              "1,500–4,000 word pillar guides written by domain experts.",
            icon: "FileText",
          },
          {
            title: "Bangla Content",
            description:
              "Native Bangla writers and editors for local audiences.",
            icon: "Languages",
          },
          {
            title: "Case Studies",
            description:
              "Customer-driven stories that convert mid-funnel readers.",
            icon: "Trophy",
          },
          {
            title: "Distribution",
            description:
              "Email, social, syndication and PR amplification.",
            icon: "Send",
          },
        ],
        benefits: [
          "Original content, no AI-generated filler",
          "Senior editors and SEO strategists on every piece",
          "Bangla and English production",
          "Monthly performance and topic gap analysis",
        ],
        process: [
          {
            step: "01",
            title: "Strategy",
            description:
              "Topical authority map and 12-month content roadmap.",
          },
          {
            step: "02",
            title: "Brief",
            description:
              "Detailed briefs with target keywords, intent and outline.",
          },
          {
            step: "03",
            title: "Produce",
            description:
              "Writing, editing, design and approval workflow.",
          },
          {
            step: "04",
            title: "Distribute",
            description:
              "Publish, distribute and measure performance.",
          },
        ],
        faqs: [
          {
            question: "Who writes the content?",
            answer:
              "Vetted writers with domain expertise, edited by our senior editorial team. We share writer profiles before assignment.",
          },
          {
            question: "Do you use AI to generate articles?",
            answer:
              "We use AI for research and outlining only. Final content is human-written and human-edited for quality and accuracy.",
          },
          {
            question: "How many articles per month do I need?",
            answer:
              "Most clients start with 4–8 long-form pieces per month. Volume scales with the size of your topical authority gap.",
          },
        ],
        ctaTitle: "Start a content engine that scales",
        ctaDescription:
          "Free topical authority audit and 90-day content plan.",
      },
      {
        slug: "social-media-management",
        title: "Social Media Management",
        shortTitle: "Social Media",
        subtitle: "Grow brand visibility, engagement and revenue on social",
        description:
          "Strategy, content, community management, paid social and influencer marketing on Facebook, Instagram, LinkedIn, YouTube and TikTok.",
        icon: "Share2",
        heroImage: "/images/services/social-media.jpg",
        overviewTitle: "Show up where your customers spend their time",
        overview: [
          "Bangladeshis spend 3+ hours daily on social media. Our social team turns that attention into brand awareness, community and revenue with platform-native creative, paid amplification and authentic community engagement.",
          "We work across Facebook, Instagram, LinkedIn, YouTube and TikTok with monthly content calendars, on-brand design, video production and reporting that ties back to business outcomes.",
        ],
        features: [
          {
            title: "Strategy & Calendar",
            description:
              "Quarterly strategy, monthly calendar and weekly publishing.",
            icon: "Calendar",
          },
          {
            title: "Creative Production",
            description:
              "Static design, motion graphics and short-form video editing.",
            icon: "Film",
          },
          {
            title: "Community Management",
            description:
              "DM, comment and review responses in Bangla and English.",
            icon: "MessagesSquare",
          },
          {
            title: "Paid Social",
            description:
              "Facebook, Instagram, LinkedIn and TikTok ads with creative testing.",
            icon: "Target",
          },
          {
            title: "Influencer Marketing",
            description:
              "Curated influencer campaigns from nano to macro tiers.",
            icon: "Users",
          },
          {
            title: "Reporting",
            description:
              "Monthly dashboards tying engagement to leads and sales.",
            icon: "BarChart3",
          },
        ],
        benefits: [
          "Always-on creative team — no scrambling",
          "Bangla and English copy that resonates",
          "Paid + organic working together",
          "Transparent reporting tied to business KPIs",
        ],
        process: [
          {
            step: "01",
            title: "Audit",
            description:
              "Brand, audience and competitor audit on each platform.",
          },
          {
            step: "02",
            title: "Plan",
            description:
              "Pillars, calendar and creative direction.",
          },
          {
            step: "03",
            title: "Produce",
            description:
              "Daily/weekly creative, scheduling and engagement.",
          },
          {
            step: "04",
            title: "Optimize",
            description:
              "Test, learn and double down on what works.",
          },
        ],
        faqs: [
          {
            question: "Do you create video content?",
            answer:
              "Yes. We produce short-form video for Reels, TikTok and Shorts plus long-form YouTube content with our in-house team.",
          },
          {
            question: "Can you manage paid ads too?",
            answer:
              "Yes. Most clients combine organic management with paid amplification. We're certified Meta and TikTok partners.",
          },
          {
            question: "What platforms do you cover?",
            answer:
              "Facebook, Instagram, LinkedIn, YouTube, TikTok and X. We can advise on regional platforms based on your audience.",
          },
        ],
        ctaTitle: "Build a social presence that sells",
        ctaDescription:
          "Get a free social audit and 90-day creative roadmap.",
      },
    ],
  },
}

export const SERVICE_CATEGORY_SLUGS = Object.keys(SERVICE_CATEGORIES)

export function getCategory(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES[slug]
}

export function getService(
  categorySlug: string,
  serviceSlug: string
): { service: Service; category: ServiceCategory } | undefined {
  const category = SERVICE_CATEGORIES[categorySlug]
  if (!category) return undefined
  const service = category.services.find((s) => s.slug === serviceSlug)
  if (!service) return undefined
  return { service, category }
}
