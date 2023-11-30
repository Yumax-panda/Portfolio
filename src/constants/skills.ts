export type Level = 0 | 1 | 2 | 3

export type Category =
  | 'Library'
  | 'Framework'
  | 'Language'
  | 'Tool'
  | 'Infra'
  | 'Other'
export type Tag =
  | 'Frontend'
  | 'Backend'
  | 'Machine Learning'
  | 'Data Analysis'
  | 'Hobby'
  | 'Other'

export type Skill = {
  name: string
  level: 0 | 1 | 2 | 3
  imageUrl: string
  category: Category
  tags: Tag[]
}

function url(name: string) {
  return `https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/${name}.svg`
}

export const skills: Skill[] = [
  {
    name: 'React',
    level: 2,
    imageUrl: url('React-Light'),
    category: 'Library',
    tags: ['Frontend'],
  },
  {
    name: 'Next.js',
    level: 2,
    imageUrl: url('NextJS-Light'),
    category: 'Framework',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'TypeScript',
    level: 2,
    imageUrl: url('TypeScript'),
    category: 'Language',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'JavaScript',
    level: 1,
    imageUrl: url('JavaScript'),
    category: 'Language',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Python',
    level: 3,
    imageUrl: url('Python-Light'),
    category: 'Language',
    tags: ['Data Analysis'],
  },
  {
    name: 'Firebase',
    level: 2,
    imageUrl: url('Firebase-Light'),
    category: 'Infra',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Node.js',
    level: 2,
    imageUrl: url('NodeJS-Light'),
    category: 'Language',
    tags: ['Backend'],
  },
  {
    name: 'Docker',
    level: 0,
    imageUrl: url('Docker'),
    category: 'Infra',
    tags: ['Backend'],
  },
  {
    name: 'Git',
    level: 2,
    imageUrl: url('Git'),
    category: 'Tool',
    tags: ['Other'],
  },
  {
    name: 'Prisma',
    level: 1,
    imageUrl: url('Prisma'),
    category: 'Library',
    tags: ['Backend'],
  },
  {
    name: 'Discord Bot',
    level: 3,
    imageUrl: url('DiscordBots'),
    category: 'Other',
    tags: ['Hobby'],
  },
  {
    name: 'HTML',
    level: 2,
    imageUrl: url('HTML'),
    category: 'Language',
    tags: ['Frontend'],
  },
  {
    name: 'CSS',
    level: 2,
    imageUrl: url('CSS'),
    category: 'Language',
    tags: ['Frontend'],
  },
  {
    name: 'Heroku',
    level: 1,
    imageUrl: url('Heroku'),
    category: 'Infra',
    tags: ['Backend', 'Hobby'],
  },
  {
    name: 'Vercel',
    level: 1,
    imageUrl: url('Vercel-Light'),
    category: 'Infra',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Material-UI',
    level: 1,
    imageUrl: url('MaterialUI-Light'),
    category: 'Library',
    tags: ['Frontend'],
  },
  {
    name: 'FastAPI',
    level: 1,
    imageUrl: url('FastAPI'),
    category: 'Framework',
    tags: ['Backend'],
  },
  {
    name: 'GitHub',
    level: 2,
    imageUrl: url('Github-Light'),
    category: 'Tool',
    tags: ['Other'],
  },
  {
    name: 'C',
    level: 1,
    imageUrl: url('C'),
    category: 'Language',
    tags: ['Other'],
  },
  {
    name: 'C++',
    level: 1,
    imageUrl: url('CPP'),
    category: 'Language',
    tags: ['Other'],
  },
  {
    name: 'Matlab',
    level: 1,
    imageUrl: url('Matlab-Light'),
    category: 'Language',
    tags: ['Data Analysis'],
  },
  {
    name: 'Octave',
    level: 1,
    imageUrl: url('Octave-Light'),
    category: 'Language',
    tags: ['Data Analysis'],
  },
  {
    name: 'PostgreSQL',
    level: 1,
    imageUrl: url('PostgreSQL-Light'),
    category: 'Infra',
    tags: ['Backend'],
  },
  {
    name: 'Express',
    level: 1,
    imageUrl: url('ExpressJS-Light'),
    category: 'Framework',
    tags: ['Backend'],
  },
  {
    name: 'Markdown',
    level: 2,
    imageUrl: url('Markdown-Light'),
    category: 'Language',
    tags: ['Other'],
  },
  {
    name: 'Selenium',
    level: 1,
    imageUrl: url('Selenium'),
    category: 'Library',
    tags: ['Data Analysis'],
  },
  {
    name: 'Tailwind CSS',
    level: 1,
    imageUrl: url('TailwindCSS-Light'),
    category: 'Library',
    tags: ['Frontend'],
  },
  {
    name: 'VS Code',
    level: 2,
    imageUrl: url('VSCode-Light'),
    category: 'Tool',
    tags: ['Other'],
  },
  {
    name: 'Django',
    level: 0,
    imageUrl: url('Django'),
    category: 'Framework',
    tags: ['Backend'],
  },
  {
    name: 'Flask',
    level: 1,
    imageUrl: url('Flask-Light'),
    category: 'Framework',
    tags: ['Backend'],
  },
].sort((a, b) => b.level - a.level) as Skill[]
