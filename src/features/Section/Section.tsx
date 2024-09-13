import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { H2 } from '@/components/H2/H2'

import s from './Section.module.scss'

interface SectionProps {
  title: string
  colorTitle: 'grey' | 'black'
  children: ReactNode
  className?: string
}

export const Section: FC<SectionProps> = ({
  title,
  colorTitle,
  children,
  className,
}) => {
  return (
    <section className={cn(s.section, className)}>
      <H2 title={title} colorTitle={colorTitle} />
      {children}
    </section>
  )
}
