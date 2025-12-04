import { useState } from 'react'
import { Button, MultiSelect } from '@/shared/ui'
import type { MultiSelectOption } from '@/shared/ui/multi-select'
import { Plus, Search, SlidersHorizontal, X } from 'lucide-react'

const filterConfigs: { label: string; key: string; options: MultiSelectOption[] }[] = [
  {
    label: 'Категория',
    key: 'category',
    options: [
      { label: 'Куртки', value: 'jackets' },
      { label: 'Джинсы', value: 'jeans' },
      { label: 'Свитеры', value: 'sweaters' },
      { label: 'Платья', value: 'dresses' },
      { label: 'Джемперы', value: 'jumpers' },
      { label: 'Юбки', value: 'skirts' },
      { label: 'Рубашки', value: 'shirts' },
      { label: 'Обувь', value: 'shoes' },
      { label: 'Пальто', value: 'coats' },
      { label: 'Блузки', value: 'blouses' },
      { label: 'Брюки', value: 'trousers' },
      { label: 'Пиджаки', value: 'blazers' },
    ],
  },
  {
    label: 'Цвет',
    key: 'color',
    options: [
      { label: 'Красный', value: 'red' },
      { label: 'Синий', value: 'blue' },
      { label: 'Коричневый', value: 'brown' },
      { label: 'Чёрный', value: 'black' },
      { label: 'Зелёный', value: 'green' },
      { label: 'Серый', value: 'gray' },
      { label: 'Белый', value: 'white' },
      { label: 'Розовый', value: 'pink' },
    ],
  },
  {
    label: 'Сезон',
    key: 'season',
    options: [
      { label: 'Осень', value: 'autumn' },
      { label: 'Зима', value: 'winter' },
      { label: 'Весна', value: 'spring' },
      { label: 'Лето', value: 'summer' },
    ],
  },
  {
    label: 'Теги',
    key: 'tags',
    options: [],
  },
  {
    label: 'Место хранения',
    key: 'storage',
    options: [],
  },
] as const

export const MyThingsPage = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>(() =>
    filterConfigs.reduce<Record<string, string[]>>((acc, cfg) => {
      acc[cfg.key] = []
      return acc
    }, {})
  )

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

  const hasSelectedFilters = Object.values(selectedFilters).some((values) => values.length > 0)

  return (
    <div className="contain md:space-y-5 space-y-2.5">
      <div className="flex items-center justify-between">
        <h1 className=" text-foreground leading-[1.1] uppercase tracking-wide text-[28px]">
          МОИ ВЕЩИ
        </h1>
        <Button type="button" variant="default" size="lg">
          <Plus className="size-[18px]" aria-hidden="true" />
          Добавить вещь
        </Button>
      </div>
      <div className="flex items-center gap-[12px] mb-[20px]">
        <div className="flex-1 relative">
          <Search
            className="size-[18px] text-muted-foreground absolute left-[16px] top-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Поиск по категории, цвету, тегам, бренду..."
            className="w-full border border-border rounded-full focus:outline-none focus:border-primary bg-white transition-colors pl-[45px] pr-[16px] py-[10px] text-[14px]"
            value=""
          />
        </div>
        <Button
          type="button"
          variant={showFilters ? 'default' : 'subtle'}
          size="md"
          className="px-[20px] normal-case"
          onClick={() => setShowFilters((prev) => !prev)}>
          <SlidersHorizontal className="size-[16px]" aria-hidden="true" />
          Фильтры
        </Button>
      </div>
      {showFilters && (
        <div className="space-y-2.5">
          <div className="bg-[#f7ecf2] rounded-[20px] px-[25px] py-[15px] space-y-[12px]">
            <div className="flex gap-[12px] items-center flex-wrap md:flex-nowrap">
              {filterConfigs.map((item) => (
                <div key={item.key} className="relative w-full md:w-auto flex-1 min-w-[160px]">
                  <MultiSelect
                    label={item.label}
                    options={item.options}
                    value={selectedFilters[item.key]}
                    onChange={(values) => handleFilterChange(item.key, values)}
                  />
                </div>
              ))}
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
                      onClick={() => handleRemoveTag(item.filterKey, item.value)}
                      className="bg-[#f7ecf2] text-primary rounded-full px-[15px] py-[6px] flex items-center gap-[6px] text-xs hover:bg-primary hover:text-white transition-colors group">
                      <span>
                        {item.filterLabel}: {item.label}
                      </span>
                      <X className="size-3.5 " aria-hidden="true" />
                    </button>
                  ))}
              </div>
              <button
                type="button"
                onClick={handleResetAll}
                className="text-sm underline text-primary hover:text-accent-foreground transition-colors">
                Сбросить все
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
