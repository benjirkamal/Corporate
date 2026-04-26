import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { getCategory, getService } from "@/lib/services-data"

const CATEGORY_SLUG = "seo"

type Params = Promise<{ service: string }>

export async function generateStaticParams() {
  const category = getCategory(CATEGORY_SLUG)
  return category?.services.map((s) => ({ service: s.slug })) ?? []
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const result = getService(CATEGORY_SLUG, serviceSlug)
  if (!result) return {}
  const { service } = result
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${CATEGORY_SLUG}/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/${CATEGORY_SLUG}/${service.slug}`,
      images: [{ url: service.heroImage }],
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { service: serviceSlug } = await params
  const result = getService(CATEGORY_SLUG, serviceSlug)
  if (!result) notFound()
  return <ServicePageTemplate service={result.service} category={result.category} />
}
