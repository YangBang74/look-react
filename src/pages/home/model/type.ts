export type HomeShortcut = {
  label: string
  Icon: React.ElementType
  to: string
}

export type LookItem = {
  id: number
  title: string
  image: string
  price: number
}

export type LookCard = {
  id: number
  title: string
  image: string
  itemsCount: number
  totalPrice: number
  items?: LookItem[]
}

export type LookCardProps = {
  look: LookCard
  formattedPrice: string
  itemsWord: string
}

export type Category = {
  id: number
  title: string
  brand: string
  image: string
}

export type CategoryCardProps = {
  category: Category
}

export type InfoCard = {
  id: number
  title: string
  description: string
  buttonText: string
  Icon: React.ElementType
  bgClassName: string
}
