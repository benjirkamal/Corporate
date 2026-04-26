import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CategoryPageTemplate } from "@/components/category-page-template"
import { getCategory } from "@/lib/services-data"

const CATEGORY_SLUG = "legal-compliance"

export function generateMetadata(): Metadata {
  const category = getCategory(CATEGORY_SLUG)
  if (!category) return {}
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/${CATEGORY_SLUG}` },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/${CATEGORY_SLUG}`,
      images: [{ url: category.heroImage }],
    },
  }
}

export default function Page() {
  const category = getCategory(CATEGORY_SLUG)
  if (!category) notFound()
  return <CategoryPageTemplate category={category} />
}
