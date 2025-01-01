import { getMarkdown } from '@/lib/getMarkdown'
import MdxLayout from '@/components/layout/mdx-layout'

export default async function Home() {
  const content = await getMarkdown('src/content/dva-c02.md')

  return (
    <MdxLayout>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
    </MdxLayout>
  )
}
