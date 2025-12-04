import { useState } from 'react'
import type { FormEvent } from 'react'
import type { SelectOption } from '@/shared/ui/select'

export const categoryOptions: SelectOption[] = [
  { label: 'Плечевая одежда', value: 'shoulder' },
  { label: 'Поясная одежда', value: 'waist' },
  { label: 'Верхняя одежда', value: 'outerwear' },
  { label: 'Белье и купальники', value: 'underwear' },
  { label: 'Головные уборы', value: 'headwear' },
  { label: 'Обувь', value: 'shoes' },
  { label: 'Аксессуары', value: 'accessories' },
  { label: 'Чулочно-носочные изделия', value: 'hosiery' },
]

export const subcategoryOptions: Record<string, SelectOption[]> = {
  shoulder: [
    { label: 'Футболки', value: 'tshirts' },
    { label: 'Рубашки', value: 'shirts' },
    { label: 'Толстовки', value: 'hoodies' },
  ],
  waist: [
    { label: 'Джинсы', value: 'jeans' },
    { label: 'Брюки', value: 'trousers' },
    { label: 'Юбки', value: 'skirts' },
  ],
  outerwear: [
    { label: 'Куртки', value: 'jackets' },
    { label: 'Пальто', value: 'coats' },
    { label: 'Плащи', value: 'raincoats' },
  ],
  underwear: [
    { label: 'Бюстгальтеры', value: 'bras' },
    { label: 'Трусы', value: 'panties' },
    { label: 'Купальники', value: 'swimwear' },
  ],
  headwear: [
    { label: 'Шапки', value: 'hats' },
    { label: 'Кепки', value: 'caps' },
  ],
  shoes: [
    { label: 'Кроссовки', value: 'sneakers' },
    { label: 'Ботинки', value: 'boots' },
    { label: 'Туфли', value: 'dress_shoes' },
  ],
  accessories: [
    { label: 'Сумки', value: 'bags' },
    { label: 'Ремни', value: 'belts' },
    { label: 'Украшения', value: 'jewelry' },
  ],
  hosiery: [
    { label: 'Носки', value: 'socks' },
    { label: 'Колготки', value: 'tights' },
  ],
}

export const colorOptions = [
  'Белый',
  'Чёрный',
  'Серый',
  'Красный',
  'Синий',
  'Зелёный',
  'Жёлтый',
  'Оранжевый',
  'Розовый',
  'Фиолетовый',
  'Коричневый',
  'Бежевый',
] as const

export const seasonOptions = ['Весна', 'Лето', 'Осень', 'Зима'] as const

type UseAddThingDialogArgs = {
  onClose: () => void
}

export const useAddThingDialog = ({ onClose }: UseAddThingDialogArgs) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [photoPreviews, setPhotoPreviews] = useState<(string | null)[]>([null, null, null, null])
  const [storagePlace, setStoragePlace] = useState('')
  const [storageOpen, setStorageOpen] = useState(false)
  const [addStorageDialogOpen, setAddStorageDialogOpen] = useState(false)
  const [newStorageName, setNewStorageName] = useState('')
  const [storageOptions, setStorageOptions] = useState<string[]>(['Гардеробная', 'Другое'])

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const handleSeasonToggle = (season: string) => {
    setSelectedSeasons((prev) =>
      prev.includes(season) ? prev.filter((s) => s !== season) : [...prev, season]
    )
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission (send data to API)
    console.log('Form submitted')
    onClose()
  }

  return {
    // state
    selectedColors,
    selectedSeasons,
    selectedCategory,
    selectedSubcategory,
    isUploadDialogOpen,
    photoPreviews,
    storagePlace,
    storageOpen,
    addStorageDialogOpen,
    newStorageName,
    storageOptions,
    // setters
    setSelectedCategory,
    setSelectedSubcategory,
    setIsUploadDialogOpen,
    setPhotoPreviews,
    setStoragePlace,
    setStorageOpen,
    setAddStorageDialogOpen,
    setNewStorageName,
    setStorageOptions,
    // handlers
    handleColorToggle,
    handleSeasonToggle,
    handleSubmit,
  }
}
