import { cache } from 'react'
import type { MindMap } from '@/model/MindMap'
import { DVA } from '@/constant/dva-c02'

export const getMindMaps = cache(() => {
  const data = DVA.reduce(
    (acc, entry) => {
      acc[entry.slug] = entry
      return acc
    },
    {} as Record<string, MindMap>
  )
  return data as Record<string, MindMap>
})

export const getMindMapsArray = cache(() => {
  return DVA
})

export function getMindMapById(id: string): MindMap | undefined {
  const items = getMindMaps()
  return items[id]
}
