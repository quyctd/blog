export interface Role {
  title: string
  company: string
  period: string
  summary: string
}

export const roles: Role[] = [
  {
    title: 'Frontend Lead',
    company: 'AnyAxis Labs',
    period: 'Apr 2024 — Present',
    summary:
      'Leading frontend for Web3 platforms — launchpads, DEX aggregators, DeFi tooling.',
  },
  {
    title: 'Senior Frontend Engineer',
    company: 'LINE Corporation',
    period: 'Aug 2021 — Apr 2024',
    summary: 'Healthcare, AI and Lifestyle apps used by millions.',
  },
  {
    title: 'Software Engineer',
    company: 'PIXTA Vietnam',
    period: 'Jul 2019 — Jun 2021',
    summary: 'Core development on the pixta.jp e-commerce platform.',
  },
  {
    title: 'Software Engineer',
    company: 'VNG Corporation',
    period: 'Oct 2018 — Jul 2019',
    summary: 'Built the most-played mode of a billiards game (Cocos 2D).',
  },
  {
    title: 'Associate Developer',
    company: 'MindX Technology School',
    period: 'Oct 2017 — Sep 2018',
    summary: 'Internal tools; taught programming to 200+ students.',
  },
]
