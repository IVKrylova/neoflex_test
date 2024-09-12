import { FC } from 'react'
import cn from 'classnames'

import { Counter } from '../Counter/Counter'

import s from './Button.module.scss'

interface ButtonProps {
  style: 'fill' | 'icon' | 'default'
  onClick: () => void
  text?: string
  className?: string
  icon?: string
  type?: 'button' | 'submit'
  alt?: string
  counter?: number
}

export const Button: FC<ButtonProps> = ({
  style,
  className,
  onClick,
  text,
  icon,
  type = 'button',
  alt,
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
        })}
      >
        {text && <span>{text}</span>}
        {icon && <img className={s.icon} alt={alt} src={icon} />}
      </button>
      {counter && <Counter counter={counter} onClick={onClick} />}
    </div>
  )
}
