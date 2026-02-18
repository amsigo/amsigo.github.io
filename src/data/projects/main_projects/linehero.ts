import type { Project } from '../types'
import linehero_icon from '@/assets/icon/linehero_icon.png'
import lineheroDescription from '../descriptions/linehero.md?raw'

export const linehero: Project = {
  id: '5',
  title: '라인 히어로즈',
  shortDescription: '롤플레잉',
  description: lineheroDescription,
  thumbnail: linehero_icon,
  videoUrl: 'https://youtu.be/K_VE3Otafp8?si=aX-2m8d9bBpN_JWv',
}
