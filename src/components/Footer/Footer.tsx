import { FC } from 'react'

import { Logo } from '../Logo/Logo'
import { Language } from '@/features/Language/Language'

import { socialNetworks } from '@/shared/mocks/socialNetworks'
import { navLinkList } from '@/shared//mocks/navigation'

import s from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <Logo />
      <div className={s.menu}>
        <div className={s.col}>
          <nav>
            <ul className={s.navMenu}>
              {navLinkList.slice(0, 3).map((el, ind) => (
                <li key={ind}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={s.col}>
          <nav>
            <ul className={s.navMenu}>
              {navLinkList.slice(3).map((el, ind) => (
                <li key={ind}>
                  <a href={el.link}>{el.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Language />
        </div>
      </div>
      <ul className={s.socialNetworks}>
        {socialNetworks.map((el, ind) => (
          <li key={ind}>
            <a href={el.link}>
              <img alt={el.name} src={el.logo} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
