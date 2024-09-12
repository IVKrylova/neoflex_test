import { SocialNetwork } from '../types/SocialNetwork'

import vk from '@/assets/icons/vk.svg'
import tg from '@/assets/icons/telegram.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'VKontakte',
    logo: vk,
    link: 'https://vk.com/',
  },
  {
    name: 'Telegram',
    logo: tg,
    link: 'https://t.me/IVKrylova',
  },
  {
    name: 'Whatsapp',
    logo: whatsapp,
    link: 'https://wa.me/',
  },
]
