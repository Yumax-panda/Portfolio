import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

type Props = {
  name: string
  level: number
  imageUrl: string
}

function SkillCard({ name, level, imageUrl }: Props) {
  return (
    <Paper
      sx={{
        width: '15rem',
        height: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem auto',
      }}
    >
      <Grid container justifyContent='space-around'>
        <Grid item xs={6}>
          <Avatar
            alt={name}
            src={imageUrl}
            sx={{
              width: '5rem',
              height: '5rem',
              padding: '1rem',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ padding: '1rem' }}>
            <Typography
              sx={{
                fontSize: '1.5rem',
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
              }}
            >
              {level}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SkillCard
