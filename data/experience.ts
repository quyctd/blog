export interface RoleProject {
  name: string
  url: string
}

export interface Role {
  title: string
  company: string
  url?: string
  period: string
  summary: string
  projects?: RoleProject[]
}

export const roles: Role[] = [
  {
    title: 'Product Engineer',
    company: 'mapEDU',
    url: 'https://mapedu.com',
    period: 'Jan 2025 — Present',
    summary:
      'Working fullstack and leading frontend on an AI curriculum-mapping platform for educators — the v2 launch drove over $500K in net-new revenue.',
  },
  {
    title: 'Frontend Lead',
    company: 'AnyAxis Labs',
    url: 'https://anyax.is/',
    period: 'Apr 2024 — Apr 2025',
    summary:
      'Led frontend for Web3 platforms — launchpads, DEX aggregators, DeFi tooling.',
  },
  {
    title: 'Senior Frontend Engineer',
    company: 'LINE Corporation',
    url: 'https://www.lycorp.co.jp/en/',
    period: 'Aug 2021 — Apr 2024',
    summary: 'Healthcare, AI and Lifestyle apps used by millions.',
    projects: [{ name: 'line.me', url: 'https://line.me' }],
  },
  {
    title: 'Software Engineer',
    company: 'PIXTA Vietnam',
    url: 'https://pixta.jp',
    period: 'Jul 2019 — Jun 2021',
    summary: 'Core development on the pixta.jp e-commerce platform.',
    projects: [{ name: 'pixta.vn', url: 'https://pixta.vn' }],
  },
  {
    title: 'Software Engineer',
    company: 'VNG Corporation',
    url: 'https://www.vng.com.vn',
    period: 'Oct 2018 — Jul 2019',
    summary: 'Built the most-played mode of a billiards game (Cocos 2D).',
    projects: [
      {
        name: 'App Store',
        url: 'https://apps.apple.com/vn/app/bida-zingplay/id1570746506',
      },
      {
        name: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=game.bida.vng',
      },
    ],
  },
]
