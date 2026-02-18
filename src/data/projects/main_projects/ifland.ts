import type { Project } from '../types'
import ifLand_icon from '@/assets/icon/ifland_icon.png'
import iflandDescription from '../descriptions/ifland.md?raw'

export const ifland: Project = {
  id: '1',
  title: 'ifLand',
  shortDescription: '소셜 메타버스 플랫폼',
  description: iflandDescription,
  thumbnail: ifLand_icon,
  videoUrl: 'https://www.youtube.com/embed/qtlnDCmW-mY',
}
