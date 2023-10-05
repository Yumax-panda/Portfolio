import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import type { Work } from '@/constants/work'

type Props = {
  work: Work
  onClick: () => void
}

function WorkCard({ work, onClick }: Props) {
  const { name, imageUrl } = work
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem auto',
        width: '15rem',
        border: 'solid 1px #868E96',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            display: 'flex',
            padding: '0.2rem',
          }}
        >
          <CardMedia
            component='img'
            src={imageUrl}
            alt={name}
            style={{
              margin: 'auto 0',
              objectFit: 'cover',
              borderRadius: '0.2rem',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              marginLeft: '0.5rem',
              paddingLeft: '0.5rem',
              color: '#868E96',
            }}
          >
            {name}
          </Typography>
          <Button
            onClick={onClick}
            variant='outlined'
            color='primary'
            sx={{
              display: 'flex',
              marginX: 'auto',
              fontWeight: 'bold',
            }}
          >
            <span
              style={{
                paddingRight: '1rem',
                paddingLeft: '1rem',
              }}
            >
              詳細
            </span>
          </Button>
        </Grid>
      </Box>
    </Paper>
  )
}

export default WorkCard
