import type { Project } from '../types'
import my_little_monster_icon from '@/assets/icon/my_Little_Monster_icon.png'
import myLittleMonsterDescription from '../descriptions/myLittleMonster.md?raw'

export const myLittleMonster: Project = {
  id: '3',
  title: '마이 리틀 몬스터',
  shortDescription: '롤플레잉',
  description: myLittleMonsterDescription,
  thumbnail: my_little_monster_icon,
  videoUrl: 'https://youtu.be/8HHiHvdut48?si=kWFGWhtNbdn4I-oT',
}
