import { Box, Typography, Grid } from '@mui/material'
import SkillCard from './SkillCard'

const skills = [
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
  },
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
  },
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
  },
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
  },
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
  },
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
  },
  {
    name: 'React',
    level: 3,
    imageUrl:
      'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F1022001%2F06a61664-8c31-b3de-9064-080a03c34917.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=900fe78ab20d465390ee2bc9547f7464',
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
      >
        {skills.map((skill, index) => (
          <Grid item xs={4} key={index}>
            <SkillCard
              name={skill.name}
              level={skill.level}
              imageUrl={skill.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SkillSection
