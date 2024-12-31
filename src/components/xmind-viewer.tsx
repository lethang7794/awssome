'use client'

import { useEffect, useRef, useState } from 'react'
import { XMindEmbedViewer } from 'xmind-embed-viewer'
import { useKeyPress } from 'ahooks'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const EXAMPLE_XMIND_URL = '' // TODO

export default function XmindRender({ fileURL }: { fileURL?: string }) {
  const [loading, setLoading] = useState(true)

  const viewerRef = useRef<XMindEmbedViewer>()
  const viewerDomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function initXmind() {
      if (!viewerDomRef.current) {
        return
      }

      const res = await fetch(fileURL || EXAMPLE_XMIND_URL)

      const viewer = new XMindEmbedViewer({
        el: '#xmind-viewer',
        file: await res.arrayBuffer(),
        region: 'global',
        isPitchModeDisabled: true,
        styles: {
          height: '100vh',
          width: '100%',
        },
      })
      viewer.addEventListener('map-ready', () => {
        setLoading(false)
      })

      if (!viewerRef.current) {
        viewerRef.current = viewer
      }
    }

    initXmind()
  }, [fileURL])

  useKeyPress('f', () => {
    viewerRef.current?.setFitMap()
  })

  useKeyPress(['a', 'subtract'], () => {
    const viewer = viewerRef.current
    const curZoom = viewer?.zoom || 1
    const nextZoom = curZoom - 20
    viewer?.setZoomScale(nextZoom)
  })

  useKeyPress(['s', 'add'], () => {
    const viewer = viewerRef.current
    const curZoom = viewer?.zoom || 1
    const nextZoom = curZoom + 20
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
    <div className="h-full">
      {loading ? (
        <div className="absolute h-full w-full grid place-items-center">
          <LoadingSpinner />
        </div>
      ) : null}
      <div id="xmind-viewer" ref={viewerDomRef} />
    </div>
  )
}
