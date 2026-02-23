import type { Project } from '../types'
import andar_icon from '@/assets/icon/andar_icon.png'
import andarDescription from '../descriptions/andar.md?raw'

export const andar: Project = {
  id: '303',
  title: 'Andar',
  shortDescription: '필라테스 예약 앱',
  description: andarDescription,
  thumbnail: andar_icon,
  videoUrl: undefined,
}
