import { ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InfiniteSlider, Button } from '@/shared/ui'
import { formatPrice, getItemsWord } from './lib/utils'
import { LookCard, CategoryCard } from './ui'
import type { LookCard as LookCardType } from './model'
import { homeShortcuts, categories, infoCards } from './model'

const looksData: LookCardType[] = [
  {
    id: 1,
    title: 'Офисный образ',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400',
    itemsCount: 3,
    totalPrice: 11470,
  },
  {
    id: 2,
    title: 'Вечерний стиль',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
    itemsCount: 4,
    totalPrice: 13760,
  },
  {
    id: 3,
    title: 'Повседневный look',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400',
    itemsCount: 5,
    totalPrice: 22750,
  },
  {
    id: 4,
    title: 'Летний комплект',
    image: 'https://images.unsplash.com/photo-1713208633322-d4ae4e1c9ff9?w=400',
    itemsCount: 4,
    totalPrice: 16460,
  },
  {
    id: 5,
    title: 'Зимний образ',
    image: 'https://images.unsplash.com/photo-1760551733340-a70825258486?w=400',
    itemsCount: 6,
    totalPrice: 17540,
  },
  {
    id: 6,
    title: 'Элегантный стиль',
    image: 'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?w=400',
    itemsCount: 4,
    totalPrice: 25260,
  },
] as const

export const HomePage = () => {
  return (
    <div className="contain space-y-12.5">
      <div className="grid gap-[15px] md:grid-cols-4 grid-cols-2">
        {homeShortcuts.map(({ label, Icon, to }) => (
          <Link
            key={label}
            to={to}
            className="bg-[#f7ecf2] rounded-[20px] transition-all hover:shadow-lg group p-[25px] aspect-square flex">
            <div className="flex flex-col items-center justify-center h-full w-full gap-[12px]">
              <div className="rounded-full bg-white flex items-center justify-center group-hover:bg-[#c87faa] transition-all !w-[60px] !h-[60px] aspect-square">
                <Icon className="text-[#c87faa] group-hover:text-white transition-colors size-[28px]" />
              </div>
              <p className="text-[#333333] text-center text-[14px]">{label}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#333333] uppercase text-lg md:text-[1.375rem]">Мои образы</h2>
          <button className="flex items-center gap-[8px] text-[#c87faa] hover:text-[#b36e96] transition-colors md:text-sm text-[13px]">
            <span className=" ">Смотреть все</span>
            <ChevronRight className="size-[16px] md:size-5" />
          </button>
        </div>
        <InfiniteSlider autoScrollInterval={6000} cardWidth={320} gap={20}>
          {looksData.map((look) => {
            const formattedPrice = formatPrice(look.totalPrice)
            const itemsWord = getItemsWord(look.itemsCount)

            return (
              <LookCard
                key={look.id}
                look={look}
                formattedPrice={formattedPrice}
                itemsWord={itemsWord}
              />
            )
          })}
        </InfiniteSlider>
      </div>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#333333] uppercase text-lg md:text-[1.375rem]">Мой шкаф</h2>
          <button className="flex items-center gap-[8px] text-[#c87faa] hover:text-[#b36e96] transition-colors md:text-sm text-[13px]">
            <span>Смотреть все</span>
            <ChevronRight className="size-[16px] md:size-5" />
          </button>
        </div>
        <InfiniteSlider autoScrollInterval={6000} cardWidth={200} gap={15}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </InfiniteSlider>
      </div>
      <div className="space-y-[3.125rem]">
        {infoCards.map((card) => {
          const Icon = card.Icon
          return (
            <div
              key={card.id}
              className={`${card.bgClassName} rounded-[30px] overflow-hidden cursor-pointer hover:shadow-xl transition-all md:p-[50px] p-[25px]`}>
              <div className="flex items-center md:flex-row flex-col md:text-left text-center gap-[40px]">
                <div className="bg-white rounded-[20px] flex items-center justify-center flex-shrink-0 w-[120px] h-[120px]">
                  <Icon className="size-[60px] text-[#c87faa]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="  text-[#333333] uppercase mb-[12px] text-[24px]">{card.title}</h3>
                  <p className="  text-[#6c6c6c] mb-[20px] text-[16px]">{card.description}</p>
                  <Button type="button" className="px-[24px] py-[12px]" variant="default">
                    {card.buttonText}
                    <ArrowRight className="size-[18px]" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
