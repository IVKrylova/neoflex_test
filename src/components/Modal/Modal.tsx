import { FC, ReactNode, useEffect, MouseEvent, useCallback } from 'react'
import cn from 'classnames'

import { Button } from '../Button/Button'
import { CloseIcon } from '../Icons/CloseIcon'

import s from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleBackgroundClose = useCallback(
    (evt: MouseEvent<HTMLElement>) => {
      const target = evt.target as HTMLElement
      if (target.classList.contains(s.openModal)) {
        onClose()
      }
    },
    [onClose]
  )

  const handleEscClose = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose)

    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [])

  return (
    <section
      className={cn(s.modal, { [s.openModal]: isOpen })}
      onClick={handleBackgroundClose}
    >
      <div className={s.container}>
        <Button
          className={s.btnClose}
          icon={<CloseIcon />}
          style='icon'
          onClick={onClose}
        />
        {children}
      </div>
    </section>
  )
}
