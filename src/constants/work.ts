export type Category = 'Hobby' | 'Library' | 'Web' | 'Other'
export type WorkTag =
  | 'Python'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Next.js'
  | 'Node.js'
  | 'FastAPI'
  | 'Pandas'
  | 'Numpy'
  | 'discord.py'
  | 'Pycord'
  | 'Git'
  | 'GitHub'
  | 'Docker'
  | 'Prisma'
  | 'PostgreSQL'
  | 'deta.space'
  | 'Vercel'
  | 'Heroku'
  | 'Firebase'
  | 'Other'

export type Work = {
  name: string
  description: string
  features?: string[]
  imagePath?: string
  categories: Category[]
  priority: number
  skills?: WorkTag[]
  frontend?: WorkTag[]
  backend?: WorkTag[]
  frameworks?: WorkTag[]
  libraries?: WorkTag[]
  infra?: WorkTag[]
  tools?: WorkTag[]
  github?: string
  url?: string
}

export const works: Work[] = [
  {
    name: '交流戦 bot',
    description:
      'マリオカート8デラックスのチーム活動をサポートする機能を備えたbot。2023年4月にX(旧Twitter)でリリース、同年9月に導入数1000サーバーを達成。導入ユーザーは1万人以上。',
    features: [
      'プレイヤーの一括検索',
      '交流戦の挙手',
      '即時集計',
      '戦績管理',
      '集計表の作成',
      '参加アンケート',
      'フレンド申請',
    ],
    imagePath: '/mkbot.png',
    categories: ['Hobby'],
    libraries: ['discord.py'],
    infra: ['deta.space', 'Heroku', 'Firebase'],
    priority: 10,
    url: 'https://discord.com/api/oauth2/authorize?client_id=1038322985146273853&permissions=854027660408&scope=applications.commands%20bot',
    github: 'https://github.com/Yumax-panda/MK8DX-discordbot',
  },
]
