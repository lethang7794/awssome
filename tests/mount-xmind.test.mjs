import assert from 'node:assert/strict'
import test from 'node:test'
import { registerHooks } from 'node:module'

const viewers = []
globalThis.__testXmind = class {
  constructor(options) {
    this.options = options
    this.listeners = new Map()
    viewers.push(this)
  }
  addEventListener(name, callback) {
    this.listeners.set(name, callback)
  }
  removeEventListener(name) {
    this.listeners.delete(name)
  }
  load(file) {
    this.file = file
  }
}
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === 'xmind-embed-viewer')
      return {
        url: 'data:text/javascript,export const XMindEmbedViewer = globalThis.__testXmind',
        shortCircuit: true,
      }
    return nextResolve(specifier, context)
  },
})
const { mountXmind } = await import('../src/lib/mount-xmind.ts')
const settle = () => new Promise((resolve) => setImmediate(resolve))
function element() {
  return {
    cleared: 0,
    title: '',
    set textContent(value) {
      assert.equal(value, '')
      this.cleared++
    },
    querySelector() {
      return {
        setAttribute: (_, value) => {
          this.title = value
        },
      }
    },
  }
}

test('loads a map, reports readiness, and cleans up its listener and frame', async (t) => {
  const file = new ArrayBuffer(8)
  t.mock.method(globalThis, 'fetch', async () => ({
    ok: true,
    arrayBuffer: async () => file,
  }))
  const el = element()
  let ready
  let failed = false
  const dispose = mountXmind(
    el,
    '/map.xmind',
    (viewer) => {
      ready = viewer
    },
    () => {
      failed = true
    }
  )
  t.after(dispose)
  await settle()
  const viewer = viewers.at(-1)
  assert.equal(viewer.file, file)
  assert.equal(viewer.options.el, el)
  viewer.listeners.get('map-ready')()
  assert.equal(ready, viewer)
  assert.equal(failed, false)
  assert.equal(el.title, 'Interactive AWS mind map')
  dispose()
  assert.equal(viewer.listeners.size, 0)
  assert.ok(el.cleared > 0)
})

test('HTTP and network failures produce an error instead of an endless spinner', async (t) => {
  for (const response of [
    () => Promise.resolve({ ok: false, status: 404 }),
    () => Promise.reject(new Error('offline')),
  ]) {
    const fetchMock = t.mock.method(globalThis, 'fetch', response)
    let failures = 0
    const count = viewers.length
    const dispose = mountXmind(
      element(),
      '/missing.xmind',
      () => assert.fail('unexpected ready'),
      () => failures++
    )
    await settle()
    assert.equal(failures, 1)
    assert.equal(viewers.length, count)
    dispose()
    fetchMock.mock.restore()
  }
})

test('unmount aborts an in-flight request and ignores its late response', async (t) => {
  let finish
  let signal
  t.mock.method(globalThis, 'fetch', (_, options) => {
    signal = options.signal
    return new Promise((resolve) => {
      finish = resolve
    })
  })
  const count = viewers.length
  const dispose = mountXmind(
    element(),
    '/slow.xmind',
    () => assert.fail('late ready'),
    () => assert.fail('late error')
  )
  dispose()
  assert.equal(signal.aborted, true)
  finish({ ok: true, arrayBuffer: async () => new ArrayBuffer(1) })
  await settle()
  assert.equal(viewers.length, count)
})

test('an unresponsive embedded viewer times out and cannot report late readiness', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  t.mock.method(globalThis, 'fetch', async () => ({
    ok: true,
    arrayBuffer: async () => new ArrayBuffer(1),
  }))
  let failures = 0
  const dispose = mountXmind(
    element(),
    '/map.xmind',
    () => assert.fail('late ready'),
    () => failures++
  )
  await settle()
  const lateReady = viewers.at(-1).listeners.get('map-ready')
  t.mock.timers.tick(30_000)
  assert.equal(failures, 1)
  lateReady()
  assert.equal(failures, 1)
  dispose()
})
