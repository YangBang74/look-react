export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

export const getItemsWord = (count: number): string => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'вещей'
  }
  if (lastDigit === 1) {
    return 'вещь'
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'вещи'
  }
  return 'вещей'
}

