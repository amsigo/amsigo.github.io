import type { Project } from '../types'
import castle_icon from '@/assets/icon/castle_icon.png'
import castleDescription from '../descriptions/castle.md?raw'

export const castle: Project = {
  id: '7',
  title: '공성전-우당탕탕 용병단',
  shortDescription: '디펜스',
  description: castleDescription,
  thumbnail: castle_icon,
  videoUrl: 'https://youtu.be/B4Vd3ZQBUuA?si=Sfd4KzMebFL1TtpB',
}
