import { ChangeEventHandler, FC } from 'react'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

import s from './Input.module.scss'

interface InputProps {
  type: 'text' | 'email'
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  className?: string
  label?: string
  error?: FieldError
}

export const Input: FC<InputProps> = ({
  type,
  className,
  label,
  error,
  value,
  onChange,
}) => {
  return (
    <label className={s.label}>
      {label}
      <input
        className={cn(className, s.input)}
        type={type}
        value={value || ''}
        onChange={onChange}
      />
      <span className={s.errorActive}>{error?.message}</span>
    </label>
  )
}
