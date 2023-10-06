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
  | 'Other'

export type Skill = {
  name: string
  level: 0 | 1 | 2 | 3
  imageUrl: string
  category: Category
  tags: Tag[]
}

export const skills: Skill[] = [
  {
    name: 'React',
    level: 1,
    imageUrl:
      'https://raw.githubusercontent.com/facebook/react/cae635054e17a6f107a39d328649137b83f25972/fixtures/dom/public/react-logo.svg',
    category: 'Library',
    tags: ['Frontend'],
  },
  {
    name: 'Next.js',
    level: 2,
    imageUrl:
      'https://raw.githubusercontent.com/vercel/vercel/master/packages/frameworks/logos/next.svg',
    category: 'Framework',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'TypeScript',
    level: 2,
    imageUrl:
      'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    category: 'Language',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'JavaScript',
    level: 1,
    imageUrl:
      'https://github.com/voodootikigod/logo.js/blob/master/js.png?raw=true',
    category: 'Language',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Python',
    level: 3,
    imageUrl:
      'https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/python/python_64x64.png',
    category: 'Language',
    tags: ['Data Analysis'],
  },
  {
    name: 'Firebase',
    level: 1,
    imageUrl:
      'https://w7.pngwing.com/pngs/398/821/png-transparent-firebase-google-google-i-o-icon.png',
    category: 'Infra',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Node.js',
    level: 2,
    imageUrl: 'https://nodejs.org/static/images/logo-hexagon-card.png',
    category: 'Language',
    tags: ['Backend'],
  },
  {
    name: 'Docker',
    level: 0,
    imageUrl:
      'https://w7.pngwing.com/pngs/219/411/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing-thumbnail.png',
    category: 'Infra',
    tags: ['Backend'],
  },
  {
    name: 'Git',
    level: 1,
    imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    category: 'Tool',
    tags: ['Other'],
  },
  {
    name: 'Deta.space',
    level: 2,
    imageUrl: 'https://avatars.githubusercontent.com/u/47275976?s=280&v=4',
    category: 'Infra',
    tags: ['Backend'],
  },
  {
    name: 'Prisma',
    level: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_Pi9HgTiqvYOQOBH7DxwbR9RnQlOl-_D1PrznCB-wtH0htSl-bxwCaKPysP5D9B_veM&usqp=CAU',
    category: 'Library',
    tags: ['Backend'],
  },
]
