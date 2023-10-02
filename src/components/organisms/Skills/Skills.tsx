import { Box, Typography, Grid } from '@mui/material'
import SkillCard from './SkillCard'

type Category =
  | 'Library'
  | 'Framework'
  | 'Language'
  | 'Tool'
  | 'Infra'
  | 'Other'
type Tag =
  | 'Frontend'
  | 'Backend'
  | 'Machine Learning'
  | 'Data Analysis'
  | 'Other'

type Skill = {
  name: string
  level: 0 | 1 | 2 | 3
  imageUrl: string
  category: Category
  tags: Tag[]
}

const skills: Skill[] = [
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
]

function SkillSection() {
  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          marginLeft: '5rem',
          borderBottom: 'solid 1px #868E96',
          paddingLeft: '1rem',
        }}
      >
        Skills
      </Typography>
      <Grid
        container
        sx={{
          display: 'flex',
        }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={4} key={index}>
            <SkillCard {...skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SkillSection
