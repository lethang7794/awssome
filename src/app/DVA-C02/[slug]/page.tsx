import type { ResolvingMetadata, Metadata } from 'next'
import { getMindMapById, getMindMapsArray } from '@/service/dva'
import XmindViewer from '@/components/xmind-viewer'

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const mindMaps = getMindMapsArray()
  return mindMaps
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const decodedSlug = slug.replace('%2C', ',')
  const sign = getMindMapById(decodedSlug)
  if (!sign) {
    return { title: 'Not Found' }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const pageTitle = `DVA-C02: ${sign.name}`
  return {
    title: pageTitle,
  }
}

export default async function MindMap({ params }: PageProps) {
  return (
    <div className="h-full flex flex-col">
      <XmindViewer fileURL={`/DVA-C02/${params.slug}.xmind`} />
    </div>
  )
}
