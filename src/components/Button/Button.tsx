import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { Counter } from '../Counter/Counter'

import s from './Button.module.scss'

interface ButtonProps {
  style: 'fill' | 'icon' | 'default'
  onClick: () => void
  text?: string
  className?: string
  icon?: ReactNode
  type?: 'button' | 'submit'
  counter?: number
}

export const Button: FC<ButtonProps> = ({
  style,
  className,
  onClick,
  text,
  icon,
  type = 'button',
  counter,
}) => {
  return (
    <div className={cn(s.wrap, className)}>
      <button
        type={type}
        onClick={onClick}
        className={cn(s.button, {
          [s.fill]: style === 'fill',
          [s.default]: style === 'default',
          [s.icon]: style === 'icon',
        })}
      >
        {text && <span>{text}</span>}
        {icon}
      </button>
      {counter ? <Counter counter={counter} onClick={onClick} /> : null}
    </div>
  )
}
