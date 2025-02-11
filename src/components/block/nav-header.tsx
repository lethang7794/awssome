import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export function NavHeader({
  isHome = false,
  backToHome = false,
  backHref = '',
  title = '',
  className = '',
  rightItems,
}: {
  isHome?: boolean
  backToHome?: boolean
  backHref?: string
  title?: string
  className?: string
  rightItems?: React.ReactNode
}) {
  return (
    <nav
      className={cn(
        'sticky top-0 bg-black text-white z-50 h-12 shadow-md flex items-center',
        className
      )}
    >
      <div className="ml-1.5 grow md:container flex items-center">
        {backToHome || backHref ? (
          <>
            <Link
              href={backToHome ? '/' : backHref}
              className="-m-1.5 p-1.5 text-blue-500 hover:text-blue-700"
            >
              <ChevronLeft size="32" />
            </Link>
            <div className="grow" />
            <div className="mx-1.5 font-bold line-clamp-2 text-white">
              {title}
            </div>
            <div className="grow" />
            {rightItems ? rightItems : null}
          </>
        ) : null}
      </div>
    </nav>
  )
}
