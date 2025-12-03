export type HomeShortcut = {
  label: string
  Icon: React.ElementType
  to: string
}

export type LookCard = {
  id: number
  title: string
  image: string
  itemsCount: number
  totalPrice: number
}

export type LookCardProps = {
  look: LookCard
  formattedPrice: string
  itemsWord: string
}