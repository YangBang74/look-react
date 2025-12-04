import { ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InfiniteSlider, Button } from '@/shared/ui'
import { formatPrice, getItemsWord } from './lib/utils'
import { LookCard, CategoryCard } from './ui'
import { homeShortcuts, categories, infoCards, looksData } from './model'



export const HomePage = () => {
  return (
    <div className="contain md:space-y-12.5 space-y-6">
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
              <p className=" text-foreground text-center text-[14px]">{label}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className=" text-foreground uppercase text-lg md:text-[1.375rem]">Мои образы</h2>
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
          <h2 className=" text-foreground uppercase text-lg md:text-[1.375rem]">Мой шкаф</h2>
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
      <div className="space-y-5 md:space-y-[3.125rem] mb-5">
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
                  <h3 className="   text-foreground uppercase mb-[12px] text-[24px]">
                    {card.title}
                  </h3>
                  <p className="  text-[#6c6c6c] mb-[20px] text-[16px]">{card.description}</p>
                  <Button type="button" variant="default" size="lg">
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
