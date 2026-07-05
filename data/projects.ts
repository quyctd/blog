export type ProjectStatus = 'live' | 'soon' | 'building'

export interface Project {
  name: string
  tagline: string
  status: ProjectStatus
  icon?: string
  site?: string
  appStore?: string
}

export const projects: Project[] = [
  {
    name: 'Ichi',
    tagline: 'A calm to-do & focus app — one task at a time.',
    status: 'live',
    icon: '/projects/ichi.webp',
    site: 'https://ichi.quyctd.dev',
    appStore:
      'https://apps.apple.com/vn/app/ichi-one-task-to-do-focus/id6780966525',
  },
  {
    name: 'Ấn Điểm',
    tagline: 'Scorekeeper for Phỏm, Tá Lả, Sâm Lốc, Tiến Lên.',
    status: 'live',
    icon: '/projects/an-diem.webp',
    site: 'https://andiem.quyctd.dev',
    appStore:
      'https://apps.apple.com/vn/app/andiem-score-tracker/id6772962052',
  },
  {
    name: 'Next app',
    tagline: 'Something new is in the works — details soon.',
    status: 'building',
  },
]
