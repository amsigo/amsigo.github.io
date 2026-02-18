export type SkillLevel = '상' | '중' | '하'

export type Skill = {
  id: string
  name: string
  level: SkillLevel // 실력 수준 (상/중/하)
  category?: string // 카테고리 (선택사항)
}

export const skills: Skill[] = [
  { id: '1', name: 'Unity', level: '상', category: '게임 개발' },
  { id: '2', name: 'C#', level: '상', category: '게임 개발' },
  { id: '3', name: 'Python', level: '중', category: '프로그래밍 언어' },
  { id: '4', name: 'TypeScript', level: '하', category: '프로그래밍 언어' },
  { id: '5', name: 'Photoshop', level: '중', category: '디자인' },
]
