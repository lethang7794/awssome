import createMDX from '@next/mdx'
import remarkTOC from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

import { execSync } from 'node:child_process'

function parseGitCommitDate(gitCommitDate) {
  return new Date(gitCommitDate)
}

function formatDate(date) {
  return date.toUTCString()
}

function getBuildInfo() {
  const gitBranch = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf-8',
  }).trim()
  const gitCommitHash = execSync('git rev-parse HEAD', {
    encoding: 'utf-8',
  }).trim()
  const gitCommitTag = execSync('git tag --points-at HEAD', {
    encoding: 'utf-8',
  }).trim()

  const gitCommitDate = execSync('git show -s --format=%ci HEAD', {
    encoding: 'utf-8',
  }).trim()
  const gitCommitDateParsed = parseGitCommitDate(gitCommitDate)
  const gitCommitDateFormatted = formatDate(gitCommitDateParsed)

  const buildDate = formatDate(new Date())

  const env = {
    GIT_BRANCH: (() => {
      return gitBranch
    })(),
    GIT_COMMIT_HASH: (() => {
      return gitCommitHash.slice(0, 7)
    })(),
    GIT_COMMIT_TAG: (() => {
      return gitCommitTag
    })(),
    GIT_COMMIT_DATE: (() => {
      return gitCommitDateFormatted
    })(),
    BUILD_DATE: buildDate,
  }

  return env
}

export default async (phase, { defaultConfig }) => {
  const env = getBuildInfo()

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote'],
    env,
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
  return withMDX(nextConfig)
}
