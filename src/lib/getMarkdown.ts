import fs from 'node:fs'
import matter from 'gray-matter'
import { remarkAlert } from 'remark-github-blockquote-alert'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function getMarkdown(path: string) {
  const fileContents = fs.readFileSync(path, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkAlert)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(fileContents)
  const contentHtml = processedContent.toString()

  // Combine the data with the contentHtml
  return {
    contentHtml,
    ...matterResult.data,
  }
}
