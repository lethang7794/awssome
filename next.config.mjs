import createMDX from '@next/mdx'
import remarkTOC from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

import { getBuildInfo } from './scripts/getBuildInfo.mjs'

const buildInfo = getBuildInfo()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  output: 'export',
  env: { ...buildInfo },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      [remarkTOC, { heading: '(table[ -]of[ -])?contents?|toc|mục lục' }],
      remarkGfm,
    ],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    remarkRehypeOptions: {
      clobberPrefix: 'footnote-',
      footnoteLabel: 'Chú thích',
    },
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
