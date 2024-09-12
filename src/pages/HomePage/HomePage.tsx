import { FC } from 'react'

import { CatalogCard } from '@/components/CatalogCard/CatalogCard'
import { Section } from '@/features/Section/Section'
import { headphones, wirelessHearphones } from '@/shared/mocks/catalog'

import s from './HomePage.module.scss'

export const HomePage: FC = () => {
  return (
    <div className={s.wrap}>
      <Section title='Наушники' colorTitle='grey'>
        <ul className={s.list}>
          {headphones.map(el => (
            <li key={el.id}>
              <CatalogCard {...el} />
            </li>
          ))}
        </ul>
      </Section>

      <Section title='Беспроводные наушники' colorTitle='grey'>
        <ul className={s.list}>
          {wirelessHearphones.map(el => (
            <li key={el.id}>
              <CatalogCard {...el} />
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
