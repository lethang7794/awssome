import fs from 'node:fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdown(path: string) {
  const fileContents = fs.readFileSync(path, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the contentHtml
  return {
    contentHtml,
    ...matterResult.data,
  }
}
