import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

import s from './Layout.module.scss'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
