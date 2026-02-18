export type Award = {
  id: string
  date: string // 수상일 (YYYY.MM 형식)
  title: string // 수상명
  content: string // 수상명
  organization?: string // 주최기관
}

export const awards: Award[] = [
  {
    id: '1',
    date: '2016.11',
    title: 'Smarteen AppChallenge 2016',
    content: '고등학생 앱 개발 경진대회 게임 개발 부문 우수상 수상',
    organization: 'SK Planet',
  }
]
