import { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '@/components/Button/Button'
import { BtnPlusIcon } from '@/components/Icons/BtnPlusIcon'
import { BtnMinusIcon } from '@/components/Icons/BtnMinusIcon'

import s from './GoodsCounter.module.scss'

interface GoodsCounterProps {
  count: number
  setCount: Dispatch<SetStateAction<number>>
  updateData?: () => void
}

export const GoodsCounter: FC<GoodsCounterProps> = ({
  count,
  setCount,
  updateData,
}) => {
  const increaseCount = () => {
    setCount(prev => ++prev)
    if (updateData) updateData()
  }

  const decreaseCount = () => {
    if (count !== 1) {
      setCount(prev => --prev)
      if (updateData) updateData()
    }
  }

  return (
    <div className={s.counter}>
      <Button
        className={s.btn}
        style='icon'
        onClick={decreaseCount}
        icon={<BtnMinusIcon width={30} height={30} />}
      />
      <span className={s.count}>{count}</span>
      <Button
        className={s.btn}
        style='icon'
        onClick={increaseCount}
        icon={<BtnPlusIcon width={30} height={30} />}
      />
    </div>
  )
}
