import { XMindEmbedViewer } from 'xmind-embed-viewer'

export function mountXmind(
  element: HTMLElement,
  fileURL: string,
  onReady: (viewer: XMindEmbedViewer) => void,
  onError: () => void
) {
  const controller = new AbortController()
  let viewer: XMindEmbedViewer | undefined
  let finished = false

  function ready() {
    if (finished || controller.signal.aborted || !viewer) return
    finished = true
    clearTimeout(timer)
    onReady(viewer)
  }

  function fail() {
    if (finished || controller.signal.aborted) return
    finished = true
    dispose()
    onError()
  }

  function dispose() {
    controller.abort()
    clearTimeout(timer)
    viewer?.removeEventListener('map-ready', ready)
    element.textContent = ''
  }

  const timer = setTimeout(fail, 30_000)
  async function load() {
    try {
      if (!fileURL) throw new Error('No mind map selected')
      const response = await fetch(fileURL, { signal: controller.signal })
      if (!response.ok)
        throw new Error(`Mind map request failed: ${response.status}`)
      const file = await response.arrayBuffer()
      if (controller.signal.aborted) return
      viewer = new XMindEmbedViewer({
        el: element,
        region: 'global',
        isPitchModeDisabled: true,
        styles: { height: '100%', width: '100%' },
      })
      element
        .querySelector('iframe')
        ?.setAttribute('title', 'Interactive AWS mind map')
      viewer.addEventListener('map-ready', ready)
      viewer.load(file)
    } catch {
      fail()
    }
  }
  void load()
  return dispose
}
