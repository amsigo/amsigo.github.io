import type { Project } from '../types'
import whiteout_icon from '@/assets/icon/whiteout_icon.png'
import whiteoutDescription from '../descriptions/whiteout.md?raw'

export const whiteout: Project = {
  id: '12',
  title: 'WhiteOut Survival',
  shortDescription: '간단한 소개',
  description: whiteoutDescription,
  thumbnail: whiteout_icon,
  videoUrl: undefined,
}
