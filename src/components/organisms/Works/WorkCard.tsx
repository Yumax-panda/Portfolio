import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

type Props = {
  name: string
  imageUrl: string
  priority: number
}

function WorkCard({ name, imageUrl, priority }: Props) {
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
          }}
        >
          <CardMedia
            component='img'
            src={imageUrl}
            alt={name}
            style={{
              margin: 'auto 0',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            display: 'flex',
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
        </Grid>
      </Box>
    </Paper>
  )
}

export default WorkCard
