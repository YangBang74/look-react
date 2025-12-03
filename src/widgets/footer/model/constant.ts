export const footerSections = [
  {
    title: 'Платформа',
    items: [
      { label: 'Главная', href: '/' },
      { label: 'Мой шкаф', href: '/my-things' },
      { label: 'Шопинг-гиды', href: '/shopping' },
      { label: 'Примерочная', href: '/fitting' },
      { label: 'Профиль', href: '/profile' },
      { label: 'Тарифы', href: '/pricing' },
    ],
  },
  {
    title: 'Юридическая информация',
    items: [
      { label: 'Пользовательское соглашение', href: '#' },
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Оферта', href: '#' },
    ],
  },
  {
    title: 'Помощь',
    items: [
      { label: 'Обучающие материалы', href: '#' },
      { label: 'Часто задаваемые вопросы', href: '#' },
      { label: 'Поддержка', href: '#' },
      { label: 'Карта сайта', type: 'button' },
    ],
  },
  {
    title: 'О нас',
    items: [
      { label: 'О платформе', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
  },
] as const