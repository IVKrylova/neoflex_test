import { FC, useState } from 'react'
import cn from 'classnames'

import { langList } from '@/shared/mocks/navigation'

import langIcon from '@/assets/icons/lang.svg'
import s from './Language.module.scss'

export const Language: FC = () => {
  const [active, setActive] = useState<string>('ru')

  return (
    <div className={s.wrap}>
      <div className={s.icon}>
        <img src={langIcon} alt='world icon' />
      </div>
      <ul className={s.list}>
        {langList.map((el, ind) => (
          <li
            className={cn(s.lang, { [s.active]: active === el.code })}
            key={ind}
            onClick={() => setActive(el.code)}
          >
            {el.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
