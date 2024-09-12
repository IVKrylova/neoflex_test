import { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '@/components/Button/Button'

import minusIcon from '@/assets/icons/btnMinus.svg'
import plusIcon from '@/assets/icons/bthPlus.svg'
import s from './GoodsCounter.module.scss'

interface GoodsCounterProps {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const GoodsCounter: FC<GoodsCounterProps> = ({ count, setCount }) => {
  const increaseCount = () => {
    setCount(prev => ++prev)
  }

  const decreaseCount = () => {
    if (count !== 1) {
      setCount(prev => --prev)
    }
  }

  return (
    <div className={s.counter}>
      <Button
        className={s.btn}
        style='icon'
        onClick={decreaseCount}
        icon={minusIcon}
        alt='button minus'
        widthIcon={30}
        heightIcon={30}
      />
      <span className={s.count}>{count}</span>
      <Button
        className={s.btn}
        style='icon'
        onClick={increaseCount}
        icon={plusIcon}
        alt='button plus'
        widthIcon={30}
        heightIcon={30}
      />
    </div>
  )
}
