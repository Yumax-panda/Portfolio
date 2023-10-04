import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import type { Post } from '@/qiita/types'

type Props = Post

function ArticleCard(props: Props) {
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
      <Grid container>
        <Grid item xs={12}>
          <Image src={props.url} width={200} height={200} alt={props.title} />
        </Grid>
        {/* <Grid item xs={4}>
        <Typography
          sx={{
            fontSize: '1.5rem',
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          sx={{
            fontSize: '1.5rem',
          }}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          sx={{
            fontSize: '1.5rem',
          }}
        >
          {props.title}
        </Typography>
      </Grid> */}
      </Grid>
    </Paper>
  )
}

export default ArticleCard
