export type Experience = {
  id: string
  startDate: string // 시작일 (YYYY.MM.DD 형식)
  endDate?: string // 종료일 (YYYY.MM.DD 형식), 없으면 재직중
  company: string // 회사명
  duty?: string // 담당업무 (선택사항)
}
