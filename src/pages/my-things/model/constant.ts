import type { FilterConfig, Thing } from './type'

export const filterConfigs: FilterConfig[] = [
  {
    label: 'Категория',
    key: 'category',
    options: [
      { label: 'Куртки', value: 'jackets' },
      { label: 'Джинсы', value: 'jeans' },
      { label: 'Свитеры', value: 'sweaters' },
      { label: 'Платья', value: 'dresses' },
      { label: 'Джемперы', value: 'jumpers' },
      { label: 'Юбки', value: 'skirts' },
      { label: 'Рубашки', value: 'shirts' },
      { label: 'Обувь', value: 'shoes' },
      { label: 'Пальто', value: 'coats' },
      { label: 'Блузки', value: 'blouses' },
      { label: 'Брюки', value: 'trousers' },
      { label: 'Пиджаки', value: 'blazers' },
    ],
  },
  {
    label: 'Цвет',
    key: 'color',
    options: [
      { label: 'Красный', value: 'red' },
      { label: 'Синий', value: 'blue' },
      { label: 'Коричневый', value: 'brown' },
      { label: 'Чёрный', value: 'black' },
      { label: 'Зелёный', value: 'green' },
      { label: 'Серый', value: 'gray' },
      { label: 'Белый', value: 'white' },
      { label: 'Розовый', value: 'pink' },
    ],
  },
  {
    label: 'Сезон',
    key: 'season',
    options: [
      { label: 'Осень', value: 'autumn' },
      { label: 'Зима', value: 'winter' },
      { label: 'Весна', value: 'spring' },
      { label: 'Лето', value: 'summer' },
    ],
  },
  {
    label: 'Теги',
    key: 'tags',
    options: [],
  },
  {
    label: 'Место хранения',
    key: 'storage',
    options: [],
  },
] as const

export const thingCategories: Thing[] = [
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
    inFitting: true,
  },
  {
    id: 3,
    title: 'Свитеры',
    brand: 'Massimo Dutti',
    image: '/_assets/v11/f02ffb89984f25482b0dc6c6f4ebf16cda48f0b0.png',
  },
  {
    id: 4,
    title: 'Платья',
    brand: 'Zara',
    image: 'https://i.imgur.com/FNcrIV9.jpg',
    inFitting: true,
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
    image: '/_assets/v11/1962c81d1a61d1caa7e3d30c73f840b0a165f8e3.png',
  },
  {
    id: 7,
    title: 'Рубашки',
    brand: 'COS',
    image: '/_assets/v11/d646670fa886f432de8a0212c7135ad165a36794.png',
  },
  {
    id: 8,
    title: 'Обувь',
    brand: 'New Balance',
    image: 'https://i.imgur.com/HNz6ru5.jpg',
  },
  {
    id: 9,
    title: 'Пальто',
    brand: 'Reserved',
    image: 'https://i.imgur.com/fqgndLC.jpg',
    inFitting: true,
  },
  {
    id: 10,
    title: 'Блузки',
    brand: 'Bershka',
    image: 'https://i.imgur.com/cvzkASV.jpg',
  },
  {
    id: 11,
    title: 'Брюки',
    brand: 'Zara',
    image: 'https://i.imgur.com/jdQC3LD.jpg',
  },
  {
    id: 12,
    title: 'Пиджаки',
    brand: 'Mango',
    image: 'https://i.imgur.com/Gc25Cm1.jpg',
  },
] as const
