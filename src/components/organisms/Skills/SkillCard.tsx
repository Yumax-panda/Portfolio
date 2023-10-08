import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { displayLevel } from '@/components/elements/Level/Level'
import Panel from '@/components/elements/Panel/Panel'
import type { Skill } from '@/constants/skills'

type Props = Skill

function SkillCard({ category, name, level, imageUrl, tags }: Props) {
  return (
    <Panel>
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
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Grid item xs={4}>
          <CardMedia
            component='img'
            image={imageUrl}
            alt={name}
            sx={{
              marginX: 'auto',
              width: '4.5rem',
              height: '4.5rem',
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '0.5rem',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
            }}
          >
            {name}
          </Typography>
          {displayLevel(level)}
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
    </Panel>
  )
}

export default SkillCard
