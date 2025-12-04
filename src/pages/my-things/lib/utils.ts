import type { Thing } from '../model/type'

export const filterThingsBySearch = (things: Thing[], searchQuery: string): Thing[] => {
  if (!searchQuery.trim()) return things

  const query = searchQuery.toLowerCase().trim()
  return things.filter((thing) => {
    const searchInTitle = thing.title.toLowerCase().includes(query)
    const searchInBrand = thing.brand.toLowerCase().includes(query)

    return searchInTitle || searchInBrand
  })
}

