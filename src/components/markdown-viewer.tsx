import { getMarkdown } from '@/lib/getMarkdown'
import MdxLayout from '@/components/layout/mdx-layout'

interface MarkdownViewerProps {
  path: string
}

export default async function MarkdownViewer({ path }: MarkdownViewerProps) {
  const content = await getMarkdown(path)

  return (
    <MdxLayout>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
    </MdxLayout>
  )
}
