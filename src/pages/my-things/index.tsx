import { useState } from 'react'
import { Button } from '@/shared/ui'
import { Plus, Search, SlidersHorizontal } from 'lucide-react'
import { ThingCard } from './ui/ThingCard'
import { ThingFilters } from './ui/ThingFilters'
import { AddThingDialog } from './ui/AddThingDialog/AddThingDialog'
import { filterConfigs } from './model'
import { useMyThings } from './model/useMyThings'

export const MyThingsPage = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const {
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
  } = useMyThings()

  return (
    <div className="contain md:space-y-5 space-y-2.5">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground leading-[1.1] uppercase tracking-wide md:text-[28px] text-xl">
          МОИ ВЕЩИ
        </h1>
        <Button type="button" variant="default" size="lg" onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="size-[18px]" aria-hidden="true" />
          Добавить
          <span className="hidden md:block">вещь</span>
        </Button>
        <AddThingDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
      </div>
      <div className="flex items-center gap-[12px] mb-[20px]">
        <div className="flex-1 relative">
          <Search
            className="size-[18px] text-[#999999] absolute left-[16px] top-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Поиск по категории, цвету, тегам, бренду..."
            className="w-full border border-border truncate rounded-full focus:outline-none focus:border-primary bg-white transition-colors pl-[45px] pr-[16px] md:py-[10px] py-2 text-[14px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          type="button"
          variant={showFilters ? 'default' : 'subtle'}
          size="md"
          className="px-[20px] normal-case"
          onClick={() => setShowFilters((prev) => !prev)}>
          <SlidersHorizontal className="size-[16px]" aria-hidden="true" />
          <span className="hidden md:block">Фильтры</span>
        </Button>
      </div>
      {showFilters && (
        <ThingFilters
          filterConfigs={filterConfigs}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onRemoveTag={handleRemoveTag}
          onResetAll={handleResetAll}
        />
      )}
      <p className="text-muted-foreground text-[14px]">
        Показано вещей: <span className="text-[#c87faa]">{filteredThings.length}</span>
      </p>
      <div className="grid gap-[20px] overflow-visible lg:grid-cols-4 md:grid-cols-4 grid-cols-2  mt-[15px]">
        {filteredThings.map((thing) => (
          <ThingCard
            key={thing.id}
            title={thing.title}
            brand={thing.brand}
            image={thing.image}
            inFitting={thingsInFitting.has(thing.id)}
            onToggleFitting={() => handleToggleFitting(thing.id)}
          />
        ))}
      </div>
      {thingsInFitting.size > 0 && (
        <button
          type="button"
          className="fixed bg-[#c87faa] text-white rounded-full shadow-lg hover:bg-[#b56d96] transition-all hover:scale-110 flex items-center justify-center z-50 group md:bottom-[30px] md:right-[30px] md:w-[70px] md:h-[70px] bottom-[100px] right-[20px] w-[60px] h-[60px]"
          title="Перейти в примерочную">
          <div className="relative">
            <svg
              className="size-[28px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M3 3 L3 21" />
              <path d="M8 3 Q 6 6, 8 9 Q 10 12, 8 15 Q 6 18, 8 21" />
              <path d="M13 3 Q 15 6, 13 9 Q 11 12, 13 15 Q 15 18, 13 21" />
              <path d="M21 3 L21 21" />
            </svg>
            <div className="absolute bg-white text-[#c87faa] rounded-full flex items-center justify-center   font-semibold shadow-md -top-[10px] -right-[10px] w-[24px] h-[24px] text-[12px]">
              {thingsInFitting.size}
            </div>
          </div>
        </button>
      )}
    </div>
  )
}
