import type { Project } from '../types'
import birdshot_icon from '@/assets/icon/birdshot_icon.png'
import birdshotDescription from '../descriptions/birdshot.md?raw'

export const birdshot: Project = {
  id: '4',
  title: '버드샷',
  shortDescription: '벽돌깨기',
  description: birdshotDescription,
  thumbnail: birdshot_icon,
  videoUrl: 'https://youtu.be/hkffw3IqvW0?si=y9u7L-83Iw6rY-Pw',
}
