import { MultiSelect } from '@/shared/ui'
import { X } from 'lucide-react'
import type { FilterConfig } from '../model'

type ThingFiltersProps = {
  filterConfigs: FilterConfig[]
  selectedFilters: Record<string, string[]>
  onFilterChange: (key: string, values: string[]) => void
  onRemoveTag: (filterKey: string, value: string) => void
  onResetAll: () => void
}

export const ThingFilters = ({
  filterConfigs,
  selectedFilters,
  onFilterChange,
  onRemoveTag,
  onResetAll,
}: ThingFiltersProps) => {
  const hasSelectedFilters = Object.values(selectedFilters).some((values) => values.length > 0)

  return (
    <div className="space-y-2.5">
      <div className="bg-[#f7ecf2] rounded-[20px] px-[25px] py-[15px] space-y-[12px]">
        <div className="grid xl:flex  gap-[12px] md:grid-cols-3 sm:grid-cols-2 ">
          {filterConfigs.map((item) => (
            <div key={item.key} className="relative w-full">
              <MultiSelect
                label={item.label}
                options={item.options}
                value={selectedFilters[item.key]}
                onChange={(values) => onFilterChange(item.key, values)}
              />
            </div>
          ))}
          {hasSelectedFilters && (
            <button
              type="button"
              onClick={onResetAll}
              className="text-sm underline whitespace-nowrap md:justify-self-end text-primary hover:text-accent-foreground transition-colors">
              Сбросить все
            </button>
          )}
        </div>
      </div>
      {hasSelectedFilters && (
        <div className="flex flex-wrap items-center justify-between gap-[12px] pt-[4px] mt-[8px]">
          <div className="flex flex-wrap gap-[8px]">
            {filterConfigs
              .flatMap((filter) => {
                const values = selectedFilters[filter.key] ?? []
                const labelMap = new Map(filter.options.map((o) => [o.value, o.label]))
                return values.map((value) => ({
                  filterKey: filter.key,
                  filterLabel: filter.label,
                  value,
                  label: labelMap.get(value) ?? value,
                }))
              })
              .map((item) => (
                <button
                  key={`${item.filterKey}-${item.value}`}
                  type="button"
                  onClick={() => onRemoveTag(item.filterKey, item.value)}
                  className="bg-[#f7ecf2] text-primary rounded-full px-[15px] py-[6px] flex items-center gap-[6px] text-xs hover:bg-primary hover:text-white transition-colors group">
                  <span>
                    {item.filterLabel}: {item.label}
                  </span>
                  <X className="size-3.5 " aria-hidden="true" />
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
