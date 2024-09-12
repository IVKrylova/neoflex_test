import { FC } from 'react'

import s from './Counter.module.scss'

interface CounterProps {
  counter: number
  onClick?: () => void
}

export const Counter: FC<CounterProps> = ({ counter, onClick }) => {
  return counter ? (
    <div className={s.counter} onClick={onClick}>
      {counter}
    </div>
  ) : null
}
