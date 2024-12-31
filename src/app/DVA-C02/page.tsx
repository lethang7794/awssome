import Link from 'next/link'
import { TableOfContents, Cloudy, Files } from 'lucide-react'
import { DVA } from '@/constant/dva-c02'

export default async function Home() {
  return (
    <div className="flex h-full flex-col justify-between m-6 md:m-8">
      <ol className="flex flex-col gap-2 list-decimal p-2 ml-8 text-2xl">
        {DVA.map((item) => {
          return (
            <li key={item.name + item.name} className="">
              <Link
                className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                href={`/DVA-C02/${item.slug}`}
              >
                {item.name}
                <span className="ml-2 italic">
                  {item.status ? `(${item.status})` : null}
                </span>
              </Link>

              <div className="mt-1 mb-2 flex flex-col gap-1">
                {item.description ? (
                  <div className="flex text-gray-500 dark:text-gray-400 text-sm">
                    <TableOfContents className="flex-shrink-0" size="20" />
                    <span className="ml-2 min-w-20">Content: </span>
                    <span className="ml-2">{item.description}</span>
                  </div>
                ) : null}
                {item.services ? (
                  <div className="flex text-gray-500 dark:text-gray-400 text-sm">
                    <Cloudy className="flex-shrink-0" size="20" />
                    <span className="ml-2 min-w-20">Services:</span>
                    <span className="ml-2">{item.services}</span>
                  </div>
                ) : null}
                {item.sheets ? (
                  <div className="flex text-gray-500 dark:text-gray-400 text-sm">
                    <Files className="flex-shrink-0" size="20" />
                    <span className="ml-2 min-w-20">Multi sheets</span>:{' '}
                    {item.sheets.join(', ')}
                  </div>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
