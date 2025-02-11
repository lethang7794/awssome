import type { ResolvingMetadata, Metadata } from 'next'
import { getMindMapById, getMindMapsArray } from '@/service/dva'
import XmindViewer from '@/components/xmind-viewer'
import { NavHeader } from '@/components/block/nav-header'

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
  const slug = params.slug
  const decodedSlug = slug.replace('%2C', ',')
  const item = getMindMapById(decodedSlug)
  if (!item) {
    return 'Not Found'
  }

  return (
    <div className="h-full flex flex-col">
      <NavHeader backHref="/DVA-C02" title={`DVA-C02: ${item.name}`} />
      <XmindViewer
        fileURL={`${process.env.NEXT_PUBLIC_BASE_PATH}/dva-c02/${params.slug}.xmind`}
      />
    </div>
  )
}
