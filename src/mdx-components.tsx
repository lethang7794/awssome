import type { MDXComponents } from 'mdx/types'

import { DocumentHeading } from '@/components/mdx/document-heading'
import { DocumentEnding } from '@/components/mdx/document-ending'
import { CollapsibleSection } from '@/components/block/collapsible'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    DocumentHeading,
    DocumentEnding,
    CollapsibleSection,
    a: (props: any) => <Link {...props} />,
    Link,
    ...components,
  }
}
