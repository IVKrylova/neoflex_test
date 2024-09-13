import { Language, NavLink } from '../types/CommonTypes'

export const navLinkList: NavLink[] = [
  {
    name: 'Избранное',
    link: '#',
  },
  {
    name: 'Корзина',
    link: '/cart',
  },
  {
    name: 'Контакты',
    link: '#',
  },
  {
    name: 'Условия сервиса',
    link: '#',
  },
]

export const langList: Language[] = [
  { label: 'Каз', code: 'kz' },
  { label: 'Рус', code: 'ru' },
  { label: 'Eng', code: 'en' },
]
