import { FC } from 'react'

import { Logo } from '../Logo/Logo'
import { Language } from '@/features/Language/Language'

import { socialNetworks } from '@/shared/mocks/socialNetworks'
import { navLinkList } from '@/shared//mocks/navigation'

import s from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

export const Footer: FC = () => {
  const navigate = useNavigate()

  return (
    <footer className={s.footer}>
      <Logo />
      <div className={s.menu}>
        <div className={s.col}>
          <nav>
            <ul className={s.navMenu}>
              {navLinkList.slice(0, 3).map((el, ind) => (
                <li
                  key={ind}
                  onClick={() => navigate(`${el.link}`)}
                  className={s.navLink}
                >
                  {el.name}
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
          <div className={s.langWrap}>
            <Language />
          </div>
        </div>
      </div>
      <ul className={s.socialNetworks}>
        {socialNetworks.map((el, ind) => (
          <li key={ind}>
            <a className={s.link} href={el.link} target='_blank'>
              {el.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
