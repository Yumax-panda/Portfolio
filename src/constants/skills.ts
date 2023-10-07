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
  {
    name: 'Discord.py',
    level: 3,
    imageUrl: 'https://disnake.dev/assets/disnake-logo.png',
    category: 'Library',
    tags: ['Hobby'],
  },
  {
    name: 'Pycord',
    level: 3,
    imageUrl: 'https://cdn3.emoji.gg/stickers/1243-pycord.png',
    category: 'Library',
    tags: ['Hobby'],
  },
  {
    name: 'HTML',
    level: 2,
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png',
    category: 'Language',
    tags: ['Frontend'],
  },
  {
    name: 'CSS',
    level: 2,
    imageUrl:
      'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png',
    category: 'Language',
    tags: ['Frontend'],
  },
  {
    name: 'Heroku',
    level: 1,
    imageUrl:
      'https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png',
    category: 'Infra',
    tags: ['Backend', 'Hobby'],
  },
  {
    name: 'Vercel',
    level: 1,
    imageUrl: '/vercel.png',
    category: 'Infra',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Render',
    level: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvqzv6j2llxzwAJKVIa6Gv0abIQA8Qo6Ud3TyohWvvV6CW5InpU6mnyEKkDCsYAkhgO0&usqp=CAU',
    category: 'Infra',
    tags: ['Backend'],
  },
  {
    name: 'NumPy',
    level: 2,
    imageUrl:
      'data:image/png;base64,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',
    category: 'Library',
    tags: ['Data Analysis'],
  },
  {
    name: 'Pandas',
    level: 2,
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAeFBMVEX///8TB1QAAEb/ygDnBIgPAFLNzNYTAFnQ0NgMAFcAAETb2eP39/oUBlfV1N7/xwDmAID/9tfLydcjG17/4Yz//vbCwM3ykcL61OfoBIwyKmgAADYAAE0AAErx8PTIxdT/+un/34T85/Lyir/lAHv50eX+9fkpH2Ma8J+4AAACEklEQVR4nO3dzVIaQRSAUYNCEIGoiYmJivnP+79hFrmLVHELZ6pnmG483xqaPruh5lb32ZkkSZIkSZIkvb52z7dZU2+rT4uH2X6rx6m31afF7M1+87dTb6tPCDWEUEMINYRQQ5MS1tu0nqtMSrhKn26e1v1WmZawyn58g4DQL4QIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECOFA6cvM5a4nYb29yjoO4WmVvM58WPQkbF8e+RqPcDlPVp4t+xLS/W0QEBCqI8yTLpsizN8n/WmJ0CEEBAQEBAQEBIT2CF+/fci6a4hw8y7rvC3CeRYCAgICAgICAgICAgICwlCEtJYIdzdp/3+kdkKHToFQ+RjJMCEcCKF7CAdC6B7CgRC6Nylh9zGtJUJ6uNCsnsOFhhkvPAHC9x+fsloi/Pp5nXTREuH++iLpMwICAgICAgICAgICAgKC/87R7/u0lggdQkBAQEBAQEB4dYQON67UTqh9KuwkDlRBQED4R8gOF5o3Rdh8yepLGO0ez6MNPO+WQ9w3NilhvBAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyEKJt+lL0SNeADUR4TG9cGWXHew10AkPP4aRBO9ohEuOFUEMINYRQQwg1dAKEDvd41t5t2u7lL0qSJEmSJEnSyfUXeomSFq0EzbkAAAAASUVORK5CYII=',
    category: 'Library',
    tags: ['Data Analysis'],
  },
  {
    name: 'Auth.js',
    level: 1,
    imageUrl: 'https://next-auth.js.org/img/logo/logo-sm.png',
    category: 'Library',
    tags: ['Frontend', 'Backend'],
  },
  {
    name: 'Material-UI',
    level: 1,
    imageUrl: 'https://mui.com/static/logo.png',
    category: 'Library',
    tags: ['Frontend'],
  },
  {
    name: 'FastAPI',
    level: 1,
    imageUrl:
      'https://cdn.icon-icons.com/icons2/3913/PNG/512/fastapi_logo_icon_248575.png',
    category: 'Framework',
    tags: ['Backend'],
  },
  {
    name: 'GitHub',
    level: 2,
    imageUrl:
      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    category: 'Tool',
    tags: ['Other'],
  },
].sort((a, b) => (a.level > b.level ? -1 : 1)) as Skill[]
