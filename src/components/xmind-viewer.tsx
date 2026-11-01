'use client'

import { useEffect, useRef, useState } from 'react'
import type { XMindEmbedViewer } from 'xmind-embed-viewer'
import { useKeyPress } from 'ahooks'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Button } from '@/components/ui/button'
import { mountXmind } from '@/lib/mount-xmind'

export default function XmindRender({ fileURL }: { fileURL: string }) {
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)

  const viewerRef = useRef<XMindEmbedViewer>()
  const viewerDomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!viewerDomRef.current) return
    setLoading(true)
    setFailed(false)
    viewerRef.current = undefined
    const dispose = mountXmind(
      viewerDomRef.current,
      fileURL,
      (viewer) => {
        viewerRef.current = viewer
        setLoading(false)
      },
      () => {
        setLoading(false)
        setFailed(true)
      }
    )
    return () => {
      viewerRef.current = undefined
      dispose()
    }
  }, [fileURL, attempt])

  useKeyPress('f', () => {
    viewerRef.current?.setFitMap()
  })

  useKeyPress(['a', 'subtract'], () => {
    const viewer = viewerRef.current
    const curZoom = viewer?.zoom || 100
    const nextZoom = Math.max(50, curZoom - 20)
    viewer?.setZoomScale(nextZoom)
  })

  useKeyPress(['s', 'add'], () => {
    const viewer = viewerRef.current
    const curZoom = viewer?.zoom || 100
    const nextZoom = Math.min(500, curZoom + 20)
    viewer?.setZoomScale(nextZoom)
  })

  useKeyPress(['d', '0'], () => {
    const viewer = viewerRef.current
    viewer?.setZoomScale(100)
  })

  useKeyPress(['c'], () => {
    const viewer = viewerRef.current
    const curZoom = viewer?.zoom || 1
    viewer?.setFitMap()
    viewer?.setZoomScale(curZoom)
  })

  return (
    <div className="relative h-full min-h-64" aria-busy={loading}>
      {loading ? (
        <div
          className="absolute h-full w-full grid place-items-center"
          role="status"
        >
          <LoadingSpinner />
          <span className="sr-only">Loading mind map…</span>
        </div>
      ) : null}
      {failed ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
          role="alert"
        >
          <p>
            The mind map could not be loaded. Try again or download it to open
            in Xmind.
          </p>
          <Button onClick={() => setAttempt((value) => value + 1)}>
            Try again
          </Button>
          <a href={fileURL} download className="underline">
            Download mind map
          </a>
        </div>
      ) : null}
      <div ref={viewerDomRef} className="h-full" />
    </div>
  )
}
