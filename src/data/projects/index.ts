// 프로젝트 타입 export
export type { Project } from './types'

// 개별 프로젝트 import
import { ifland } from './main_projects/ifland'
import { rebirth } from './main_projects/rebirth'
import { myLittleMonster } from './main_projects/myLittleMonster'
import { birdshot } from './main_projects/birdshot'
import { linehero } from './main_projects/linehero'
import { tapmon } from './main_projects/tapmon'
import { castle } from './main_projects/castle'
import { shotup } from './main_projects/shotup'
import { burgerplease } from './copy_projects/burgerplease'
import { whiteout } from './copy_projects/whiteout'
import { megicaDefense } from './copy_projects/megicaDefense'
import { ifland_optimize } from './etc_projects/ifland_optimize'
import { ifland_auto } from './etc_projects/ifland_auto'

// 모든 프로젝트를 배열로 export
export const projects = [
  ifland,
  rebirth,
  myLittleMonster,
  birdshot,
  linehero,
  tapmon,
  castle,
  shotup,
]

export const copyProjects = [
  burgerplease,
  whiteout,
  megicaDefense,
]

export const etcPorjects = [
  ifland_optimize,
  ifland_auto,
]
