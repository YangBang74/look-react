import { House, Shirt, Sparkles, Archive, User } from 'lucide-react'

export const mobileNavItems = [
  { label: 'Главная', to: '/', Icon: House },
  { label: 'Мои вещи', to: '/my-things', Icon: Shirt },
  { label: 'Примерка', to: '/fitting', Icon: Sparkles },
  { label: 'Образы', to: '/looks', Icon: Archive },
  { label: 'Кабинет', to: '/profile', Icon: User },
] as const

