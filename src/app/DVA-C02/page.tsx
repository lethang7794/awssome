import Link from 'next/link'
import { TableOfContents, Cloudy, Files } from 'lucide-react'
import { DVA } from '@/constant/dva-c02'

export default async function Home() {
  return (
    <div className="flex h-full flex-col justify-between m-6 md:m-8">
      <h1 className="text-4xl">
        Mind maps for{' '}
        <Link
          href="https://aws.amazon.com/certification/certified-developer-associate/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          AWS Certified Developer - Associate (DVA-C02)
        </Link>
      </h1>

      <div className="mt-4 flex flex-col gap-2">
        <div>
          <p>The content is based on:</p>
          <ol>
            <li>
              - Cantrill courses:{' '}
              <Link
                href="https://learn.cantrill.io/p/aws-certified-developer-associate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                <b>DVA-C02</b> course
              </Link>{' '}
              (Paid course)
              {' & '}
              <Link
                href="https://learn.cantrill.io/p/tech-fundamentals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                <b>Tech fundamentals</b> course
              </Link>{' '}
              (Free course)
            </li>
            <li>
              -{' '}
              <Link
                href="https://aws.amazon.com/products/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                AWS marketing pages
              </Link>
              : Why, Overview, FAQs...
            </li>
            <li>
              -{' '}
              <Link
                href="https://docs.aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                AWS official documentation
              </Link>
            </li>
            <li>- And many other sources</li>
          </ol>
        </div>
        <div>
          The mind maps are created with{' '}
          <Link
            href="https://xmind.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Xmind
          </Link>
          . Each mind map can have more than one sheets.
        </div>
        <div>
          You can
          {/*  */}
          <div>- view the mind maps online with the following links :</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
               (some of the features of Xmind doesn't work, e.g. link)
          </div>
          {/*  */}
          <ol className="flex flex-col gap-2 list-decimal p-2 ml-10 text-lg">
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
          <div>
            - download the mind maps (open-sourced at repo (TODO: FILL IN)) to
            have your own copies, then use Xmind to view and make changes to
            them, or
          </div>
          <div>
            - fork the repo and host your own mind maps online (This is an
            Next.js app, so you can deploy it to Vercel, GitHub Pages...)
          </div>
          <div>
            - contribute to the mind maps by creating pull requests to the repo,
            or
          </div>
          <div>- open issues in the repo to suggest changes.</div>
        </div>
      </div>
    </div>
  )
}
