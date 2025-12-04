import type { MultiSelectOption } from '@/shared/ui/multi-select'

export type Thing = {
  id: number
  title: string
  brand: string
  image: string
  inFitting?: boolean
}

export type FilterConfig = {
  label: string
  key: string
  options: MultiSelectOption[]
}
