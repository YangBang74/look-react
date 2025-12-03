import {
  Archive,
  Shirt,
  Calendar,
  Sparkles,
  ChevronRight,
  EllipsisVertical,
  Share2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { InfiniteSlider } from '@/shared/ui/infinite-slider'
import { formatPrice, getItemsWord } from './lib/utils'

type HomeShortcut = {
  label: string
  Icon: React.ElementType
  to: string
}

const homeShortcuts: HomeShortcut[] = [
  {
    label: 'Мои образы',
    Icon: Archive,
    to: '/looks',
  },
  {
    label: 'Мои вещи',
    Icon: Shirt,
    to: '/my-things',
  },
  {
    label: 'Календарь образов',
    Icon: Calendar,
    to: '/calendar',
  },
  {
    label: 'Онлайн примерочная',
    Icon: Sparkles,
    to: '/fitting',
  },
] as const

type LookCard = {
  id: number
  title: string
  image: string
  itemsCount: number
  totalPrice: number
}

const looksData: LookCard[] = [
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

const LookCard = ({
  look,
  formattedPrice,
  itemsWord,
}: {
  look: (typeof looksData)[number]
  formattedPrice: string
  itemsWord: string
}) => (
  <div className="w-[320px] flex-shrink-0">
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all group">
      <button className="w-full relative overflow-hidden bg-[#f7ecf2]">
        <img
          src={look.image}
          alt={look.title}
          className="w-full object-cover group-hover:scale-105 transition-transform h-[400px]"
        />
      </button>
      <div className="p-[15px]">
        <div className="flex items-start justify-between mb-[8px]">
          <h3 className="font-['Montserrat',sans-serif] text-[#333333] flex-1 line-clamp-2 text-[16px]">
            {look.title}
          </h3>
          <div className="relative inline-block">
            <button className="flex-shrink-0 w-[32px] h-[32px] rounded-full hover:bg-[#f7ecf2] flex items-center justify-center transition-colors ml-[8px]">
              <EllipsisVertical className="size-[18px] text-[#6c6c6c]" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mb-[12px]">
          <p className="font-['Montserrat',sans-serif] text-[#6c6c6c] text-[13px]">
            {look.itemsCount} {itemsWord} на общую сумму{' '}
            <span className="text-[#c87faa]">{formattedPrice}&nbsp;₽</span>
          </p>
        </div>
        <div className="flex items-center gap-[8px]">
          <button className="flex-1 rounded-[100px] font-['Montserrat',sans-serif] uppercase transition-all flex items-center justify-center gap-[6px] border border-[#c87faa] text-[#c87faa] hover:bg-[#f7ecf2] px-[12px] py-[9px] text-[12px]">
            <Share2 className="size-[14px]" aria-hidden="true" />
            Поделиться
          </button>
          <button className="flex-1 rounded-[100px] font-['Montserrat',sans-serif] uppercase transition-all flex items-center justify-center border border-[#c87faa] text-[#c87faa] hover:bg-[#f7ecf2] px-[12px] py-[9px] text-[12px]">
            Посмотреть
          </button>
        </div>
      </div>
    </div>
  </div>
)

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
            <span className="font-['Montserrat',sans-serif]">Смотреть все</span>
            <ChevronRight className="size-[16px] md:size-5" />
          </button>
        </div>
        <InfiniteSlider autoScrollInterval={3000} cardWidth={320} gap={20}>
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
    </div>
  )
}
