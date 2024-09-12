import { FC, ReactNode } from 'react'

import { H2 } from '@/components/H2/H2'

import s from './Section.module.scss'

interface SectionProps {
  title: string
  colorTitle: 'grey' | 'black'
  children: ReactNode
}

export const Section: FC<SectionProps> = ({ title, colorTitle, children }) => {
  return (
    <section className={s.section}>
      <H2 title={title} colorTitle={colorTitle} />
      {children}
    </section>
  )
}
