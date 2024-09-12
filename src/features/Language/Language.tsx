import { FC } from 'react'

import { langList } from '../../shared/mocks/navigation'

import langIcon from '@/assets/icons/lang.svg'
import s from './Language.module.scss'

export const Language: FC = () => {
  return (
    <div className={s.wrap}>
      <div className={s.icon}>
        <img src={langIcon} alt='world icon' />
      </div>
      <ul className={s.list}>
        {langList.map((el, ind) => (
          <li className={s.lang} key={ind}>{el}</li>
        ))}
      </ul>
    </div>
  )
}
