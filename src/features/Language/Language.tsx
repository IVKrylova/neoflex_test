import { FC, useState } from 'react'
import cn from 'classnames'

import { langList } from '@/shared/mocks/navigation'
import { WorldIcon } from '@/components/Icons/WorldIcon'

import s from './Language.module.scss'

export const Language: FC = () => {
  const [active, setActive] = useState<string>('ru')

  return (
    <div className={s.wrap}>
      <div>
        <WorldIcon className={s.icon} />
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
