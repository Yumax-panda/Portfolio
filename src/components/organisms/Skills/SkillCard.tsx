import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import type { Level, Skill } from '@/constants/skills'

type Props = Skill

function LevelField({ level }: { level: Level }) {
  const positiveColor = '#FFD700'
  const negativeColor = '#868E96'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.5rem',
      }}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0.5rem',
          }}
        >
          {index < level ? (
            <StarIcon sx={{ color: positiveColor }} />
          ) : (
            <StarBorderIcon sx={{ color: negativeColor }} />
          )}
        </Box>
      ))}
    </Box>
  )
}

// 先に定数として定義しておく
const Zero = <LevelField level={0} />
const First = <LevelField level={1} />
const Second = <LevelField level={2} />
const Third = <LevelField level={3} />

const displayLevel = (level: Level) => {
  switch (level) {
    case 0:
      return Zero
    case 1:
      return First
    case 2:
      return Second
    case 3:
      return Third
  }
}

function SkillCard({ category, name, level, imageUrl, tags }: Props) {
  return (
    <Paper
      sx={{
        width: '15rem',
        height: '13rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem auto',
      }}
    >
      <Chip
        sx={{
          fontSize: '1rem',
          marginY: '0.5rem',
          marginLeft: '1rem',
          alignSelf: 'flex-start',
          backgroundColor: '#EAF9FA',
        }}
        label={<div>{category}</div>}
      />
      <Grid container justifyContent='space-around'>
        <Grid item xs={6}>
          <CardMedia
            component='img'
            image={imageUrl}
            alt={name}
            sx={{
              marginX: 'auto',
              width: '5rem',
              height: '5rem',
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ paddingRight: '1rem' }}>
            <Typography
              sx={{
                fontSize: '1.5rem',
              }}
            >
              {name}
            </Typography>
            {displayLevel(level)}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={<div>{tag}</div>}
            sx={{
              margin: '0.5rem',
              backgroundColor: '#EAF9FA',
            }}
          />
        ))}
      </Box>
    </Paper>
  )
}

export default SkillCard
