import { SocialNetwork } from '../types/SocialNetwork'

import { TgIcon } from '@/components/Icons/TgIcon'
import { VkIcon } from '@/components/Icons/VkIcon'
import { WhatsappIcon } from '@/components/Icons/WhatsappIcon'

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'VKontakte',
    icon: <VkIcon />,
    link: 'https://vk.com/',
  },
  {
    name: 'Telegram',
    icon: <TgIcon />,
    link: 'https://t.me/IVKrylova',
  },
  {
    name: 'Whatsapp',
    icon: <WhatsappIcon />,
    link: 'https://wa.me/',
  },
]
