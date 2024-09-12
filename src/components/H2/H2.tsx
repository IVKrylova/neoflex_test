import { FC } from 'react'
import cn from 'classnames'

import s from './H2.module.scss'

interface H2Props {
  title: string
  colorTitle: 'grey' | 'black'
}

export const H2: FC<H2Props> = ({ title, colorTitle }) => {
  return (
    <h2
      className={cn(s.title, {
        [s.black]: colorTitle === 'black',
        [s.grey]: colorTitle === 'grey',
      })}
    >
      {title}
    </h2>
  )
}
