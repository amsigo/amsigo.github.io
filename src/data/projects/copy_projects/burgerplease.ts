import type { Project } from '../types'
import burger_icon from '@/assets/icon/burger_icon.png'
import burgerpleaseDescription from '../descriptions/burgerplease.md?raw'

export const burgerplease: Project = {
  id: '9',
  title: 'Burger Please!',
  shortDescription: '햄버거 타이쿤 게임',
  description: burgerpleaseDescription,
  thumbnail: burger_icon,
  videoUrl: undefined,
}
