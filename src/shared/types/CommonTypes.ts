import { Language } from '@/features/Language/Language'

export type NavLink = {
  name: string
  link: string
}

export type Language = {
  label: string
  code: string
}

export interface IconProps {
  width?: number
  height?: number
  className?: string
}
