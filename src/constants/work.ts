export type Category = 'Hobby' | 'Library' | 'Web' | 'Other'
export type Language =
  | 'Python'
  | 'JavaScript'
  | 'TypeScript'
  | 'Node.js'
  | 'Other'
export type WorkTag =
  | 'React'
  | 'Next.js'
  | 'FastAPI'
  | 'Pandas'
  | 'Numpy'
  | 'discord.py'
  | 'Git'
  | 'GitHub'
  | 'Docker'
  | 'Prisma'
  | 'PostgreSQL'
  | 'deta.space'
  | 'Vercel'
  | 'Heroku'
  | 'Firebase'
  | 'Render'
  | 'Other'
  | Language

type OptionalField = {
  features: string[]
  languages: Language[]
  skills: WorkTag[]
  frontend: WorkTag[]
  backend: WorkTag[]
  frameworks: WorkTag[]
  libraries: WorkTag[]
  infra: WorkTag[]
  tools: WorkTag[]
  github: string
  url: string
}

export type Work = {
  name: string
  description: string
  imageUrl: string
  categories: Category[]
  priority: number
} & Partial<OptionalField>

// 画像の縦横比は16:9 https://www.peko-step.com/tool/resize.html
export const works: Work[] = [
  {
    name: 'Portfolio',
    description: 'このサイト。',
    imageUrl: '/portfolio.png',
    categories: ['Web'],
    priority: 11,
    frontend: ['React', 'Next.js'],
    infra: ['Vercel'],
    github: 'https://github.com/Yumax-panda/Portfolio',
    url: 'https://portfolio-yumax-panda.vercel.app/',
    features: ['PC, スマホに対応'],
  },
  {
    name: '交流戦 bot',
    description:
      'マリオカート8デラックスのチーム活動をサポートするdiscord bot。2023年4月にX(旧Twitter)でリリース、同年9月に導入数1000サーバーを達成。ユーザーは1万人以上。',
    imageUrl: '/mkbot.png',
    categories: ['Hobby'],
    priority: 10,
    features: [
      'プレイヤーの一括検索',
      '交流戦の挙手',
      '即時集計',
      '戦績管理',
      '集計表の作成',
      '参加アンケート',
      'フレンド申請',
    ],
    libraries: ['discord.py'],
    infra: ['deta.space', 'Heroku', 'Firebase'],
    url: 'https://discord.com/api/oauth2/authorize?client_id=1038322985146273853&permissions=854027660408&scope=applications.commands%20bot',
    github: 'https://github.com/Yumax-panda/MK8DX-discordbot',
  },
  {
    name: 'AioMK8DX.py',
    description: 'MK8DX 150cc Lounge APIのラッパーライブラリ。',
    imageUrl: '/aiomk8dx.png',
    categories: ['Library'],
    languages: ['Python'],
    priority: 1,
    features: ['非同期処理', '型アノテーション', 'ユーティリティ機能'],
    github: 'https://github.com/Yumax-panda/AioMK8DX.py',
  },
  {
    name: 'Pokemon.py',
    description: 'Poke APIのラッパーライブラリ。',
    imageUrl: '/pokemonpy.png',
    categories: ['Library'],
    languages: ['Python'],
    priority: 1,
    features: [
      '非同期処理',
      '型アノテーション',
      'ユーティリティ機能',
      'キャッシュ',
    ],
    github: 'https://github.com/Yumax-panda/Pokemon.py',
  },
  {
    name: 'MK8DX for Web',
    description:
      '交流戦 botの機能の一部をWebサービスとして提供。チームの戦績が閲覧できる。',
    imageUrl: '/mkweb.png',
    categories: ['Web', 'Hobby'],
    priority: 5,
    frontend: ['React'],
    backend: ['FastAPI'],
    infra: ['Vercel', 'Render'],
    github: 'https://github.com/Yumax-panda/stats-frontend.ts',
    url: 'https://stats-frontend-ts.vercel.app/',
    features: [
      'PC, スマホに対応',
      '戦績の閲覧',
      '絞り込み検索',
      'アップデート情報の閲覧',
    ],
  },
  {
    name: 'Queue-bot',
    description: 'マリオカートの模擬をサポートするdiscord bot。',
    imageUrl: '/queuebot.png',
    categories: ['Hobby'],
    priority: 3,
    libraries: ['discord.py'],
    features: [
      '模擬に参加するメンバーの募集',
      '模擬形式の投票',
      'ランダムなチーム分け',
      '各レースごとの順位の登録、集計',
      '集計画像の作成',
    ],
    github: 'https://github.com/Yumax-panda/Queue-bot',
  },
  {
    name: 'MK App-Deta',
    description:
      'マリオカート8DXの交流戦の戦績管理やラウンジのレートを確認できるアプリ。MK8DX for Webの機能を拡張した。DiscordのOauth2を利用し、Discordアカウントと紐づけることができる。',
    imageUrl: '/mkapp-deta.png',
    categories: ['Hobby', 'Web'],
    priority: 6,
    frontend: ['React', 'Next.js', 'TypeScript'],
    infra: ['Vercel', 'deta.space'],
    github: 'https://github.com/Yumax-panda/MKApp-deta',
    url: 'https://mk-app-deta.vercel.app/',
    features: [
      'PC, スマホに対応',
      'ライトモード・ダークモード対応',
      'Discord連携',
    ],
  },
].sort((a, b) => b.priority - a.priority) as Work[]
