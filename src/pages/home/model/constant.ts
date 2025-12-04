import { Archive, Calendar, Shirt, Sparkles, CircleQuestionMark } from 'lucide-react'
import type { HomeShortcut, Category, InfoCard, LookCard } from './type'

export const homeShortcuts: HomeShortcut[] = [
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

export const categories: Category[] = [
  {
    id: 1,
    title: 'Куртки',
    brand: 'Pull&Bear',
    image: 'https://i.imgur.com/X9n2h0c.png',
  },
  {
    id: 2,
    title: 'Джинсы',
    brand: "Levi's",
    image: 'https://i.imgur.com/MuxglEl.jpg',
  },
  {
    id: 3,
    title: 'Свитеры',
    brand: 'Massimo Dutti',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
  },
  {
    id: 4,
    title: 'Платья',
    brand: 'Zara',
    image: 'https://i.imgur.com/FNcrIV9.jpg',
  },
  {
    id: 5,
    title: 'Джемперы',
    brand: 'H&M',
    image: 'https://i.imgur.com/faBEtqt.jpg',
  },
  {
    id: 6,
    title: 'Юбки',
    brand: 'Mango',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400',
  },
  {
    id: 7,
    title: 'Рубашки',
    brand: 'COS',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400',
  },
  {
    id: 8,
    title: 'Обувь',
    brand: 'New Balance',
    image: 'https://i.imgur.com/HNz6ru5.jpg',
  },
] as const

export const infoCards: InfoCard[] = [
  {
    id: 1,
    title: 'Онлайн примерочная',
    description: 'Создавайте уникальные образы, комбинируйте вещи и сохраняйте понравившиеся луки',
    buttonText: 'Открыть примерочную',
    Icon: Sparkles,
    bgClassName: 'bg-gradient-to-br from-[#f7ecf2] to-[#e8d5e0]',
  },
  {
    id: 2,
    title: 'Поддержка',
    description: 'Нужна помощь? Ознакомьтесь с туториалом или свяжитесь с нашей командой',
    buttonText: 'Открыть туториал',
    Icon: CircleQuestionMark,
    bgClassName: 'bg-[#f7ecf2]',
  },
] as const

export const looksData: LookCard[] = [
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