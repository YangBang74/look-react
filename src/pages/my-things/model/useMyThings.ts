import { useState, useMemo } from 'react'
import { filterConfigs, thingCategories } from './constant'
import { filterThingsBySearch } from '../lib/utils'

export const useMyThings = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>(() =>
    filterConfigs.reduce<Record<string, string[]>>((acc, cfg) => {
      acc[cfg.key] = []
      return acc
    }, {})
  )
  const [thingsInFitting, setThingsInFitting] = useState<Set<number>>(() => {
    const initial = new Set<number>()
    thingCategories.forEach((thing) => {
      if (thing.inFitting) {
        initial.add(thing.id)
      }
    })
    return initial
  })

  const handleFilterChange = (key: string, values: string[]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: values,
    }))
  }

  const handleRemoveTag = (filterKey: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey]?.filter((v) => v !== value) ?? [],
    }))
  }

  const handleResetAll = () => {
    setSelectedFilters(
      filterConfigs.reduce<Record<string, string[]>>((acc, cfg) => {
        acc[cfg.key] = []
        return acc
      }, {})
    )
  }

  const handleToggleFitting = (thingId: number) => {
    setThingsInFitting((prev) => {
      const next = new Set(prev)
      if (next.has(thingId)) {
        next.delete(thingId)
      } else {
        next.add(thingId)
      }
      return next
    })
  }

  // Фильтрация по поисковому запросу
  const filteredThings = useMemo(
    () => filterThingsBySearch(thingCategories, searchQuery),
    [searchQuery]
  )

  return {
    showFilters,
    setShowFilters,
    searchQuery,
    setSearchQuery,
    selectedFilters,
    thingsInFitting,
    filteredThings,
    handleFilterChange,
    handleRemoveTag,
    handleResetAll,
    handleToggleFitting,
  }
}
