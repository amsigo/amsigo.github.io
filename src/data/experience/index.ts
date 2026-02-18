import type { Experience } from './types'

export type { Experience } from './types'

// 샘플 경력 데이터
export const experiences: Experience[] = [
  {
    id: '1',
    startDate: '2022.05',
    company: '(주)모프인터랙티브',
    duty: '게임 클라이언트 개발',
  },
  {
    id: '2',
    startDate: '2020.12',
    endDate: '2022.02',
    company: '(주)키키케',
    duty: `[신규 로그라이크 카드 게임 개발]
    -전체 프로젝트 구조 설계
    -인게임 전투 개발
    -카드 강화 연출 개발
    -카드 및 보스 패턴 등 게임의 데이터 테이블 설계 및 기능 구현
    `,
  },
  {
    id: '3',
    startDate: '2020.02',
    endDate: '2020.12',
    company: '(주)아이아라',
    duty: '게임 엔진 개발',
  },
  {
    id: '4',
    startDate: '2019.02',
    endDate: '2020.01',
    company: '(주)캐럿게임즈',
    duty: `[MMORPG 리버스 m 유지보수]
    - 에셋 번들, 앱 빌드 담당
    - 점검시 번들 패치 업데이트 담당
    - 버그 및 개선 이슈 사항들 대응

    [스크린 골프 게임 프로젝트 참여]
    - 드라이브 연습 모드 UI 및 3D 궤적 구현
    - 아웃 게임 UI 개발

    [마이리틀 몬스터 개발 및 런칭]
    - 아웃게임 개발, 인게임 개발, 서드파티 연동 등 전체 개발 담당

    [네이버 웹툰 더게이머 IP 게임 프로젝트 참여]
    - 아웃게임 UI 작업 및 컷씬 연출 작업 담당
    `
  },
  {
    id: '5',
    startDate: '2018.05',
    endDate: '2018.12',
    company: '(주)에픽스튜디오',
    duty: '[소셜 카지노 게임의 슬롯머신 게임 개발]\n - API Response에 맞는 동작 로직 구현 및 연출 작업 담당',
  },
  {
    id: '6',
    startDate: '2017.12',
    endDate: '2018.04',
    company: '(주)에반스튜디오',
    duty: '- 교육용 게임 프로젝트 국어 과목 메인 프로그래머 담당\n - 글자 따라쓰기 게임을 위한 따라쓰기 툴 제작',
  },
  {
    id: '7',
    startDate: '2016.10',
    endDate: '2017.08',
    company: '(주)구름소프트',
    duty: '- 군인키우기 글로벌 버전 언어지원 개발\n- 공성전 우당탕탕 용병단 개발\n- 버드샷 게임 개발',
  },
]
